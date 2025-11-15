'use client'

import { Instagram, Linkedin, Youtube, Github } from 'lucide-react'
import Image from 'next/image'
import Me from '../public/me2.png'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '4+', label: 'Experiences' },
  { value: '5+', label: 'Real Projects' },
  { value: '10+', label: 'Tech Stack' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/ega.liyando?igsh=ZmpuZHRsOG9qMm9w&utm_source=qr', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ega-liyando-b82b85152/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@EgaLiyando', label: 'Youtube' },
  { icon: Github, href: 'https://github.com/egaliyando', label: 'Github' },
]

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-[#1a1a1a] pt-20 md:pt-24 pb-8 md:pb-16 transition-colors">
      <div className="container mx-auto px-6">
        {/* Mobile Layout - Centered */}
        <div className="md:hidden flex flex-col items-center text-center space-y-6">
          {/* Intro */}
          <div className="mt-8">
            <p className="font-caveat text-gray-500 dark:text-gray-400 text-2xl">Hi, I am <span className='text-gray-800 dark:text-gray-300'>Ega Liyando</span></p>
            <h1 className="font-caveat text-5xl font-bold text-primary-gradient leading-tight">
              Frontend Developer 
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-700 dark:text-gray-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
            {/* Tiktok Icon */}
            <a
              href="https://www.tiktok.com/@ega.liyando?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Behance"
            >
              <svg height="20" width="20" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g></svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <button 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex-1 btn-primary-gradient px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Hire Me
            </button>
            <button className="flex-1 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
              Download CV
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary-gradient">{stat.value}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Avatar */}
          <div className="relative w-full max-w-sm mt-6">
            <div className="relative w-full aspect-[3/4] max-h-[500px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden transition-colors">
                <div className="w-full h-full flex items-end justify-center">
                   <Image src={Me} alt="Ega Liyando" layout="fill" objectFit="contain" className='!h-max' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Intro */}
            <div>
              <p className="font-caveat text-gray-500 dark:text-gray-400 text-3xl mb-2">Hi, I am <span className='text-gray-800 dark:text-gray-300'>Ega Liyando</span></p>
              <h1 className="font-caveat text-6xl md:text-6xl font-extrabold text-primary-gradient leading-tight">
                Frontend Developer 
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-700 dark:text-gray-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
              {/* Tiktok Icon */}
              <a
                href="https://www.tiktok.com/@ega.liyando?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="Behance"
              >
                <svg height="20" width="20" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g></svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary-gradient px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Hire Me
              </button>
              <button className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition-colors">
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gray-300 dark:border-gray-800 pl-4 transition-colors">
                  <p className="text-3xl font-bold text-primary-gradient">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[400px] h-[600px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden transition-colors">
                <div className="w-full h-full flex items-end justify-center">
                  <Image src={Me} alt="Ega Liyando" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
