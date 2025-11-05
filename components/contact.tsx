'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('https://formspree.io/f/mwkakgnq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            if (res.ok) {
                setStatus('Message envoyé !')
                setForm({ name: '', email: '', message: '' })
            } else setStatus('Erreur lors de l’envoi.')
        } catch {
            setStatus('Erreur réseau.')
        }
    }


    return (
        <section id="contact" className="pb-12">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl font-semibold">Contact</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
                <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:claudinsaintil@gmail.com" className="text-black dark:text-white">claudinsaintil@gmail.com</a></p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Tel: +509 40 80 30 18</p>


                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-gray-50 dark:bg-gray-900" placeholder="Ton nom" required />
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-gray-50 dark:bg-gray-900" placeholder="Ton email" required />
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border dark:border-gray-600 rounded px-3 py-2 bg-gray-50 dark:bg-gray-900" placeholder="Message" required />
                    <button type="submit" className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Envoyer</button>
                </form>
                {status && <p className="mt-2 text-sm text-green-500">{status}</p>}
            </motion.div>
        </section>
    )
}
