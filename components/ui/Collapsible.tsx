import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, ReactNode, MouseEvent, useEffect } from "react";

interface CollapsibleProps {
  children: ReactNode;
}

/**
 * Collapsible component that toggles visibility of its children with animation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be shown or hidden inside the collapsible. Expected to be the filtering form for this application.
 * @returns {JSX.Element} The rendered collapsible component.
 */
const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsExpanded((prev) => !prev);
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  };

  // collapse on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(false);
      setHeight(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseButtonClasses = "transition-all duration-200 font-serif py-2 px-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg cursor-pointer card-title w-max flex justify-center items-center";
  const expandedClasses = isExpanded ? "brightness-110" : "";

  const classes = `list-group-item ${isExpanded ? "is-expanded backdrop-blur-sm bg-yellow-100/50 " : ""} w-full -translate-y-5 p-4 rounded-xl transition-all duration-300`;
  const currentHeight = isExpanded ? height : 0;

  return (
    <div className={classes}>
      <div className="flex justify-end w-full mb-4 lg:mb-8">
        {/* button to toggle visibility */}
        <button className={`${baseButtonClasses} ${expandedClasses}`} onClick={handleToggle}>
          {isExpanded ? "Hide Filters" : "Ako gusto ko..."}
          <span className="ml-2">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
      </div>
      {/* main content */}
      <div
        className="card-collapse"
        style={{ height: `${currentHeight}px`, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div className="flex justify-center card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;