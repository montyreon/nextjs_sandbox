"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
<div
  className={cn(
    "transition-bg relative w-full flex h-[8rem] sm:h-[10rem] lg:h-[20rem] flex-col items-center justify-center text-slate-950",
    className,
  )}
  {...props}
>
  <div
    className="absolute inset-0 overflow-hidden"
    style={
      {
        "--aurora":
          "repeating-linear-gradient(100deg,#fff7ed_2.5%,#fef3c7_5%,#fde68a_7.5%,#facc15_10%,#fff7ed_12.5%)",
        "--white-gradient":
          "repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_5%,var(--transparent)_6%,var(--transparent)_7%,var(--white)_8%)",

        "--golden-100": "#fff7ed",
        "--golden-200": "#fef3c7",
        "--golden-300": "#fde68a",
        "--golden-400": "#facc15",
        "--white": "#fff",
        "--black": "#000",
        "--transparent": "transparent",
      } as React.CSSProperties
    }
  >
    <div
      className={cn(
        `after:animate-aurora pointer-events-none absolute -inset-[10px]
        [background-image:var(--white-gradient),var(--aurora)]
        [background-size:300%,_200%] [background-position:50%_50%,50%_50%]
        opacity-100 blur-[6px] invert filter will-change-transform
        [--aurora:repeating-linear-gradient(100deg,var(--golden-100)_2.5%,var(--golden-200)_5%,var(--golden-300)_7.5%,var(--golden-400)_10%,var(--golden-100)_12.5%)]
        [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_5%,var(--transparent)_6%,var(--transparent)_7%,var(--white)_8%)]
        after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
        after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
        showRadialGradient &&
          `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
      )}
    ></div>
  </div>
  {children}
</div>
  );
};
