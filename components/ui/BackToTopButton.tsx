"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * BackToTopButton component provides a button to scroll back to the top of the page.
 * It becomes visible when the user scrolls down more than 200 pixels.
 *
 * @returns {JSX.Element} The rendered BackToTopButton component.
 */
export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // control visibility based on scroll position, must be 200px or more to show the button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white hover:opacity-100 text-black shadow-xl transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}