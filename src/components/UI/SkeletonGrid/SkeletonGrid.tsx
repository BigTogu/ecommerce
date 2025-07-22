"use client";
import { JSX } from "react";

export const SkeletonGrid = (): JSX.Element => {
  const fixedHeights = [220, 720, 450, 240, 300, 200];

  return (
    <div className="columns-1 sm:columns-2 gap-8 space-y-8 max-w-4xl mx-auto">
      {fixedHeights.map((height, idx) => (
        <div
          className="break-inside-avoid bg-gray-200 animate-pulse"
          key={`${height}-${idx}`}
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};
