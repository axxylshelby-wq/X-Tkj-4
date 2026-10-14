import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PER_PAGE, SISWA } from "./data.js";
import { Heading, Pager, Reveal, Section, clean, initials } from "./ui.jsx";

export default function Anggota() {
  const pages = Math.max(1, Math.ceil(SISWA.length / PER_PAGE));
  const [pg, setPg] = useState(0); const [open, setOpen] = useState(null);
  const list = SISWA.slice(pg * PER_PAGE, (pg + 1) * PER_PAGE);
  return (
    <Section id="anggota">
      <Heading sub="Temukan daftar anggota kelas kami. Ketuk nama untuk melihat Instagram.">Anggota</Heading>
      <AnimatePresence mode="wait">
        <motion.div key={pg} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
          className="grid grid-cols-2 items-start gap-4 md:grid-cols-4">
          {list.map((s) => {
            const on = open === s.nama; const u = clean(s.ig);
            return (
              <div key={s.nama} className={`glass overflow-hidden rounded-2xl transition duration-300 ${on ? "!border-sky-400 shadow-[0_0_28px_rgba(56,189,248,.35)]" : "hover:border-sky-400/70"}`}>
                <button onClick={() => setOpen(on ? null : s.nama)} aria-expanded={on} className="w-full p-5 text-center">
                  {s.foto
                    ? <img src={s.foto} alt={s.nama} loading="lazy" className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-white/70" />
                    : <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent to-[#0b1130] font-head text-2xl font-bold ring-2 ring-white/70">{initials(s.nama)}</div>}
                  <p className="mt-3 text-sm font-bold leading-tight">{s.nama}</p>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {u ? (
                        <a href={`https://instagram.com/${u}`} target="_blank" rel="noopener noreferrer" className="mx-3 mb-4 block rounded-lg bg-accent px-3 py-2 text-center text-xs font-bold text-white shadow-[0_0_18px_rgba(44,103,237,.6)] transition hover:brightness-110">@{u} ↗</a>
                      ) : <p className="mx-3 mb-4 rounded-lg bg-white/10 px-3 py-2 text-center text-xs text-slate-300">Username belum diisi</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <Pager page={pg} pages={pages} set={(p) => { setPg(p); setOpen(null); }} />
    </Section>
  );
}
