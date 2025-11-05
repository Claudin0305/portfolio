'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiPython,
    // SiJava,
    SiMysql,
    SiLaravel,
    SiDjango,
    SiGit,
    SiLinux,
} from 'react-icons/si'

const skills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'Python', icon: SiPython },
    // { name: 'Java', icon: SiJava },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Django', icon: SiDjango },
    { name: 'Git', icon: SiGit },
    { name: 'Linux', icon: SiLinux },
]

// Fonction pour dupliquer les éléments afin d’assurer un défilement fluide
const duplicatedSkills = [...skills, ...skills, ...skills]

export default function Skills() {
    const controls = useAnimation()

    // Animation infinie
    useEffect(() => {
        const loopAnimation = async () => {
            while (true) {
                await controls.start({
                    x: ['0%', '-50%'],
                    transition: { duration: 20, ease: 'linear' },
                })
                controls.set({ x: '0%' })
            }
        }
        loopAnimation()
    }, [controls])

    return (
        <section id="skills" className="overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold mb-6"
            >
                Compétences
            </motion.h2>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    animate={controls}
                    className="flex gap-6 w-max"
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() =>
                        controls.start({
                            x: ['0%', '-50%'],
                            transition: { duration: 20, ease: 'linear' },
                        })
                    }
                >
                    {duplicatedSkills.map(({ name, icon: Icon }, index) => (
                        <div
                            key={index}
                            className="min-w-[140px] h-[140px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4 transition hover:shadow-lg"
                        >
                            <Icon className="text-4xl text-gray-700 dark:text-gray-300 mb-3" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                {name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                🔁 Défilement automatique — survole pour mettre en pause
            </p>
        </section>
    )
}
