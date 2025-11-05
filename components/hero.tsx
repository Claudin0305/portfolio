'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="mt-8 flex flex-col-reverse md:flex-row items-center gap-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center md:text-left"
            >
                <h1 className="text-4xl font-extrabold">Claudin Saintil</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Analyste Développeur · Développeur Full-Stack
                </p>

                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <a
                        href="/Claudin_SAINTIL_CV__.pdf"
                        className="inline-block px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                    >
                        Télécharger CV
                    </a>
                    <a
                        href="#contact"
                        className="inline-block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600"
                    >
                        Me contacter
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg"
            >
                {/* Place ta photo ici: /public/avatar.jpg */}
                <Image
                    src="/avatar.jpg"
                    alt="Photo Claudin"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </section>
    )
}
