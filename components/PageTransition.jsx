"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * PAGE TRANSITION CURTAIN
 * -----------------------
 * - On first load and after every navigation the two black panels
 *   split open from a gold centre line (reveal).
 * - When an internal link is clicked, the panels close first, THEN the
 *   route changes (exit animation), so every page change feels smooth.
 * - Skipped automatically when the visitor prefers reduced motion.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [closing, setClosing] = useState(false);
  const [cycle, setCycle] = useState(0);
  const timers = useRef([]);

  /* New route arrived -> replay the "open" animation */
  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setClosing(false);
    setCycle((c) => c + 1);
  }, [pathname]);

  /* Intercept internal link clicks */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function onClick(e) {
      if (reduce.matches) return;
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      e.preventDefault();
      setClosing(true);

      timers.current.push(
        setTimeout(() => router.push(url.pathname + url.search + url.hash), 650)
      );
      /* Safety: if the route never changes, open the curtain again */
      timers.current.push(setTimeout(() => setClosing(false), 6000));
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return (
    <div
      key={cycle}
      aria-hidden="true"
      className={`jhv-curtain ${closing ? "is-closing" : "is-opening"}`}
    >
      <div className="jhv-curtain__panel jhv-curtain__panel--top" />
      <div className="jhv-curtain__panel jhv-curtain__panel--bottom" />
      <div className="jhv-curtain__line" />
    </div>
  );
}
