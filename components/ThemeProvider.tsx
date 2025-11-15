'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Function to determine theme based on time (6 AM - 6 PM = light, else dark)
    const getThemeByTime = (): Theme => {
      const hour = new Date().getHours()
      return hour >= 6 && hour < 18 ? 'light' : 'dark'
    }

    // Set initial theme based on time
    const initialTheme = getThemeByTime()
    setTheme(initialTheme)
    
    // Update theme when time changes (check every minute)
    const interval = setInterval(() => {
      const newTheme = getThemeByTime()
      if (newTheme !== theme) {
        setTheme(newTheme)
      }
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    }
  }, [theme, mounted])

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
