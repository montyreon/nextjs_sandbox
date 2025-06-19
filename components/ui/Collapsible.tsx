import React, { useState, useRef, ReactNode, MouseEvent } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExpanded((prev) => !prev);
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  };

  const classes = `list-group-item ${isExpanded ? "is-expanded" : ""}`;
  const currentHeight = isExpanded ? height : 0;

  return (
    <div className={classes}>
      <div className="cursor-pointer card-title" onClick={handleToggle}>
        <h2>{title}</h2>
      </div>
      <div
        className="card-collapse"
        style={{ height: `${currentHeight}px`, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div className="card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;