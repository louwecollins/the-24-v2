"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "the24-promo-state";
const EVENT_NAME = "the24-promo-change";

export type PromoState = "modal" | "banner" | "gone";

/**
 * Shared state for the promo announcement system.
 *  - "modal"  — first visit, show the welcome modal
 *  - "banner" — modal dismissed, show the top banner
 *  - "gone"   — banner dismissed, show nothing
 *
 * Persisted to localStorage. A custom event keeps all mounted consumers in
 * sync when one of them transitions the state.
 *
 * Returns `null` during SSR and until the client reads localStorage so
 * consumers can render nothing to avoid a flash.
 */
export function usePromoState(): {
  state: PromoState | null;
  setState: (next: PromoState) => void;
} {
  const [state, setStateRaw] = useState<PromoState | null>(null);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    if (stored === "banner" || stored === "gone") {
      setStateRaw(stored);
    } else {
      setStateRaw("modal");
    }

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<PromoState>).detail;
      setStateRaw(detail);
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const setState = (next: PromoState) => {
    try {
      if (next === "modal") window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
    setStateRaw(next);
  };

  return { state, setState };
}
