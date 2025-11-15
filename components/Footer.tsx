export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800 py-8 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Ega Liyando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
