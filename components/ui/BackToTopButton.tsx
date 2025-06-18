"use client"
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

/**
 * BackToTopButton component provides a button that scrolls the page back to the top when clicked.
 * It becomes visible when the user scrolls down more than 100 pixels.
 *
 * @returns {JSX.Element} The rendered BackToTopButton component.
 */
export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // keeps track of the scroll position and toggles the button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // visible if scrolled more than 100px (roughly away from the top)
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white opacity-80 hover:opacity-100 text-black shadow-xl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-gray-100`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}