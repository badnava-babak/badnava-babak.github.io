export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Babak Badnava
        </p>
        <a
          href="#hero"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
