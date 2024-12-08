export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-black py-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} All Rights Reserved</p>
            <p className="mt-2 md:mt-0">
              Developed by{' '}
              <a 
                href="https://marabi.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-500 transition-colors"
              >
                Marabi.tech
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }