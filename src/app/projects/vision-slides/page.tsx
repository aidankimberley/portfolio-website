export default function VisionSlidesPage() {
  // Expects public/vision-slides.pdf
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold">Computer Vision Software Validation — Slides</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
      </p>
      <div className="mt-4">
        <a
          href="/vision-slides.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm px-4 py-2 rounded-lg border hover:bg-gray-50 dark:hover:bg-white/5"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-6 aspect-[4/3] w-full border rounded-lg overflow-hidden">
        <iframe
          src="/vision-slides.pdf#view=FitH"
          className="w-full h-full"
          title="Vision Slides"
        />
      </div>
    </div>
  );
}

