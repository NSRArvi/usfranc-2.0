export default function BlogDetailSkeleton() {
  return (
    <div className="pb-12 pt-10 animate-pulse">
      {/* Header */}
      <header className="flex items-center justify-between py-3.5 pb-5 border-b border-[#e5e7eb] mb-7">
        <div className="h-4 w-24 bg-[#e5e7eb] rounded" />
        <div className="h-7 w-20 bg-[#e5e7eb] rounded-full" />
      </header>

      <div className="flex gap-10 items-start">
        <article className="flex-1 min-w-0">
          {/* Category badge */}
          <div className="h-5 w-24 bg-[#dbeafe] rounded-full" />

          {/* Title */}
          <div className="mt-3 space-y-2.5">
            <div className="h-7 w-full bg-[#e5e7eb] rounded" />
            <div className="h-7 w-3/4 bg-[#e5e7eb] rounded" />
          </div>

          {/* Author + meta row */}
          <div className="flex items-center flex-wrap gap-3.5 mt-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#e5e7eb] shrink-0" />
              <div className="space-y-1.5">
                <div className="h-3 w-24 bg-[#e5e7eb] rounded" />
                <div className="h-2.5 w-16 bg-[#e5e7eb] rounded" />
              </div>
            </div>
            <div className="w-px h-5 bg-[#e5e7eb] max-[480px]:hidden" />
            <div className="h-3 w-24 bg-[#e5e7eb] rounded" />
            <div className="h-3 w-16 bg-[#e5e7eb] rounded" />
          </div>

          {/* Thumbnail */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#e5e7eb] bg-[#f3f4f6] mt-6 mb-8" />

          {/* Content paragraphs */}
          <div className="space-y-4">
            <div className="h-5 w-1/3 bg-[#e5e7eb] rounded mt-4" />
            <div className="space-y-2.5">
              <div className="h-3.5 w-full bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-full bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-5/6 bg-[#e5e7eb] rounded" />
            </div>
            <div className="space-y-2.5">
              <div className="h-3.5 w-full bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-11/12 bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-4/5 bg-[#e5e7eb] rounded" />
            </div>
            <div className="h-5 w-1/4 bg-[#e5e7eb] rounded mt-6" />
            <div className="space-y-2.5">
              <div className="h-3.5 w-full bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-full bg-[#e5e7eb] rounded" />
              <div className="h-3.5 w-2/3 bg-[#e5e7eb] rounded" />
            </div>
          </div>

          {/* Share row */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb] mt-9">
            <div className="h-7 w-28 bg-[#e5e7eb] rounded-full" />
          </div>

          {/* Author box */}
          <div className="border border-[#e5e7eb] rounded-xl p-5 mt-6">
            <div className="h-2.5 w-20 bg-[#e5e7eb] rounded mb-3" />
            <div className="flex gap-3.5 items-start">
              <div className="w-11 h-11 rounded-full bg-[#e5e7eb] shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-28 bg-[#e5e7eb] rounded" />
                <div className="h-3 w-full bg-[#e5e7eb] rounded" />
                <div className="h-3 w-2/3 bg-[#e5e7eb] rounded" />
                <div className="h-3 w-24 bg-[#e5e7eb] rounded mt-2" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
