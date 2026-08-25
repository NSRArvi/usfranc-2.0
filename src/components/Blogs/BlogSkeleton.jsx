import React from "react";

export default function BlogSkeleton() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col rounded border animate-pulse">
          <div className="h-48 w-full rounded-t bg-gray-200" />
          <div className="mt-4 flex-1 px-4">
            <div className="h-5 w-full bg-gray-200 rounded mb-2" />
            <div className="h-5 w-2/3 bg-gray-200 rounded" />
          </div>
          <div className="p-4 text-right">
            <div className="ml-auto h-9 w-28 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
