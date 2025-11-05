'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded-md border cursor-pointer">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
    )
}
