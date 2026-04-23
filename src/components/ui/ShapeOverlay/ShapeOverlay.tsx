"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ShapeOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathsData, setPathsData] = useState<string[]>(["", ""]);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const numPoints = 8;
    const numPaths = 2; 
    const delayPointsMax = 0.3;
    const delayPerPath = 0.2;
    
    // Start VERY low (200) to ensure the initial state is entirely below the SVG viewport
    const allPoints: number[][] = [];
    for (let i = 0; i < numPaths; i++) {
        allPoints.push(new Array(numPoints).fill(200));
    }

    const pointsDelay = new Array(numPoints).fill(0).map(() => Math.random() * delayPointsMax);

    const render = () => {
      const newPaths: string[] = [];
      for (let i = 0; i < numPaths; i++) {
        const points = allPoints[i];
        let d = `M 0 ${points[0]} C`;
        
        for (let j = 0; j < numPoints - 1; j++) {
          const p = ((j + 1) / (numPoints - 1)) * 100;
          const cp = p - (1 / (numPoints - 1) * 100) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j+1]} ${p} ${points[j+1]}`;
        }
        
        // Use a MASSIVE vertical fill so we NEVER see the bottom edge
        d += ` V 500 H 0 Z`;
        newPaths.push(d);
      }
      setPathsData(newPaths);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // Start rising exactly as the bottom enters the screen
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      onUpdate: render,
    });

    for (let i = 0; i < numPaths; i++) {
      const points = allPoints[i];
      const pathDelay = delayPerPath * i;
      
      for (let j = 0; j < numPoints; j++) {
        const delay = pointsDelay[j];
        tl.to(points, {
          [j]: -100, // overshoot the top
          duration: 1,
          ease: "sine.inOut",
        }, delay + pathDelay);
      }
    }

    return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === containerRef.current) st.kill();
        });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] bg-transparent overflow-visible pointer-events-none z-50">
      <svg
        ref={svgRef}
        className="absolute bottom-0 left-0 w-full h-[500vh] pointer-events-none overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d={pathsData[0]} fill="#f3f4f6" opacity="0.6" />
        <path d={pathsData[1]} fill="#ffffff" />
      </svg>
    </div>
  );
};
