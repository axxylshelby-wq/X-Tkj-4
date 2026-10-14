import { motion } from "framer-motion";
import { KELAS, QUOTES } from "./data.js";
import { useTyping } from "./ui.jsx";

export default function Hero() {
  const t = useTyping(QUOTES);
  return (
    <section id="home" className="relative flex min-h-screen items-end justify-center overflow-hidden px-6 pb-24 text-center">
      {/* Foto kelas menyambut pengunjung: memenuhi layar, perlahan zoom-out saat dibuka */}
      {KELAS.foto ? (
        <motion.img src={KELAS.foto} alt={`Foto kelas ${KELAS.nama}`} initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2550] via-[#0c0f22] to-black">
          <svg viewBox="0 0 400 200" className="absolute left-1/2 top-[18%] w-[min(90%,640px)] -translate-x-1/2 text-white/10" fill="currentColor">
            <circle cx="110" cy="70" r="26" /><path d="M60 170c0-34 22-56 50-56s50 22 50 56z" />
            <circle cx="200" cy="55" r="30" /><path d="M142 170c0-40 26-66 58-66s58 26 58 66z" />
            <circle cx="290" cy="70" r="26" /><path d="M240 170c0-34 22-56 50-56s50 22 50 56z" />
          </svg>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-black/55 to-black/20" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-slate-300">
          {KELAS.sekolah}{KELAS.berdiri && ` • Sejak ${KELAS.berdiri}`}
        </motion.p>
        <h1 className="font-head font-bold uppercase leading-[.95] tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,.6)]">
          <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="block text-5xl sm:text-7xl lg:text-8xl">Welcome to</motion.span>
          <motion.span initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="block text-6xl text-sky-400 sm:text-8xl lg:text-9xl">{KELAS.nama}</motion.span>
        </h1>
        <p className="mt-6 h-8 text-lg italic text-white/90 sm:text-2xl">“{t}<span className="ml-0.5 inline-block h-[1em] w-0.5 animate-blink bg-sky-400 align-[-.12em]" />”</p>
      </div>
      <motion.a href="#tentang" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-6 text-2xl text-white/70">⌄</motion.a>
    </section>
  );
}
