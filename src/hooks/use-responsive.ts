"use client";

import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  "2xl": 1536,
};

export function useResponsive(): {
  width: number | undefined;
  breakpoint: Breakpoint | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBreakpoint = (): Breakpoint | undefined => {
    if (width === undefined) return undefined;
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
  };

  const breakpoint = getBreakpoint();

  return {
    width,
    breakpoint,
    isMobile: width !== undefined ? width < breakpoints.md : false,
    isTablet:
      width !== undefined &&
      width >= breakpoints.md &&
      width < breakpoints.lg,
    isDesktop: width !== undefined ? width >= breakpoints.lg : false,
  };
}
