// App Router structure (Next.js 14+)
// Place this file as: app/page.tsx

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const artworks = [
  { id: 1, title: 'Ethereal Form', image: 'https://picsum.photos/800/1000?1' },
  { id: 2, title: 'Dark Matter', image: 'https://picsum.photos/800/1000?2' },
  { id: 3, title: 'Silent Echo', image: 'https://picsum.photos/800/1000?3' },
  { id: 4, title: 'Fragmented Light', image: 'https://picsum.photos/800/1000?4' },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="bg-[#0A0A0A] text-[#EAEAEA] min-h-screen font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-wide text-center"
        >
          ARTIST NAME
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 border border-gray-500 px-6 py-3 text-sm uppercase tracking-widest"
        >
          Enter Exhibition
        </motion.button>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer relative"
            onClick={() => setSelected(art)}
          >
            <img src={art.image} className="w-full h-auto object-cover" />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <p className="text-lg">{art.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* MODAL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full p-4"
          >
            <img src={selected.image} className="w-full h-auto" />
            <h2 className="mt-4 text-xl">{selected.title}</h2>
            <p className="text-gray-400 text-sm">2026 • Digital Artwork</p>
          </motion.div>
        </motion.div>
      )}

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-32 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://picsum.photos/500/600" className="w-full" />
        <div>
          <h2 className="text-3xl mb-6">About</h2>
          <p className="text-gray-400 leading-relaxed">
            I explore the intersection of silence, abstraction, and digital existence. My work reflects fragmented realities and unseen emotional states.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-20 py-32 text-center">
        <h2 className="text-3xl mb-6">Contact</h2>
        <p className="text-gray-400">artist@email.com</p>
      </section>

    </main>
  );
}


// Tailwind config additions (tailwind.config.js)
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };


// Install dependencies:
// npm install framer-motion


// OPTIONAL IMPROVEMENTS YOU CAN ADD:
// - Custom cursor
// - Page transitions using layoutId
// - Smooth scroll (Lenis)
// - CMS (Sanity)
