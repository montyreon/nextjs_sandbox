import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, ReactNode, MouseEvent, useEffect } from "react";

interface CollapsibleProps {
  children: ReactNode;
}

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
  const [toggleStyles, setToggleStyles] = useState("animate-pulse font-serif py-2 px-4 bg-white/80 backdrop-blur-sm text-gray-700 w-max rounded-lg cursor-pointer card-title")
  useEffect(() => {
    if (isExpanded) {
      setToggleStyles("bg-white brightness-110 transition-all duration-200 font-serif py-2 px-4 bg-white/80 backdrop-blur-sm text-gray-700 w-max rounded-lg cursor-pointer card-title w-max flex justify-center items-center");
    } else {
      setToggleStyles("animate-pulse font-serif transition-all duration-200 py-2 px-4 bg-white/80 backdrop-blur-sm text-gray-700 w-max rounded-lg cursor-pointer card-title w-max flex justify-center items-center");
    }
  }, [isExpanded]);

  // collapse on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(false);
      setHeight(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const classes = `list-group-item ${isExpanded ? "is-expanded" : ""} w-full max-w-[830px]`;
  const currentHeight = isExpanded ? height : 0;

  return (
    <div className={classes}>
      <div className="mb-4 lg:mb-8 flex justify-end w-full" >
        <button className={toggleStyles} onClick={handleToggle}>
          {isExpanded ? "Hide Filters" : "Ako gusto ko..."}
            {isExpanded ? (
            <span className="ml-2"><ChevronUp size={18} /></span>
            ) : (
            <span className="ml-2"><ChevronDown size={18} /></span>
            )}
        </button>
      </div>
      <div
        className="card-collapse"
        style={{ height: `${currentHeight}px`, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div className="card-body flex justify-center" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;