'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact me', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const headerOffset = 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top
          if (elementPosition <= headerOffset && element.getBoundingClientRect().bottom > headerOffset) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          {/* <Link href="/" className="font-caveat text-3xl md:text-6xl font-bold text-[#0046ff]">
            E
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm cursor-pointer transition-colors ${
                    isActive ? 'text-sky-500 font-bold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-primary-gradient px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-colors"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block text-base cursor-pointer transition-colors ${
                    isActive ? 'text-sky-500 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
