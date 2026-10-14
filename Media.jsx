import { MEDIA } from "./data.js";
import { Heading, Reveal, Section, clean } from "./ui.jsx";

// Ubah link Spotify biasa menjadi link embed (track / playlist / album / episode)
const spotifyEmbed = (url) => {
  const m = (url || "").match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|playlist|album|episode|show|artist)\/([A-Za-z0-9]+)/);
  return m ? { src: `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0`, tall: !["track", "episode"].includes(m[1]) } : null;
};

const Head = ({ badge, warna, title, sub }) => (
  <div className="mb-4 flex items-center gap-3">
    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${warna} font-head text-base font-bold`}>{badge}</div>
    <div><p className="font-head text-xl font-bold uppercase tracking-wide">{title}</p><p className="text-xs text-slate-400">{sub}</p></div>
  </div>
);
const Note = ({ children }) => <p className="mt-3 text-center text-[11px] italic text-slate-500">{children}</p>;

function InstaMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 p-[3px]"><div className="grid h-full w-full place-items-center rounded-full bg-[#0b0b12] font-head text-lg">IG</div></div>
        <div><p className="text-sm font-bold">@username_kelas</p><p className="text-xs text-slate-400">Nama akun Instagram kelas</p></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-400">
        {["Post", "Followers", "Following"].map((l) => <div key={l}><b className="block text-base text-white">—</b>{l}</div>)}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => <div key={i} className="aspect-square rounded-lg bg-white/10" />)}</div>
      <Note>Contoh tampilan — isi username Instagram di data.js</Note>
    </div>
  );
}
function SpotifyMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex items-center gap-4">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-800 text-3xl">♪</div>
        <div className="min-w-0"><p className="truncate text-sm font-bold">Judul lagu tampil di sini</p><p className="text-xs text-slate-400">Nama artis</p></div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-black">▶</span>
        <div className="h-1 flex-1 rounded-full bg-white/15"><div className="h-full w-1/3 rounded-full bg-white/70" /></div>
      </div>
      <Note>Contoh tampilan — isi link Spotify di data.js</Note>
    </div>
  );
}

export default function Media() {
  const u = clean(MEDIA.instagram || ""); const sp = spotifyEmbed(MEDIA.spotify);
  return (
    <Section id="media">
      <Heading blue sub="Cerita kami di media sosial: akun kelas dan lagu yang menemani perjalanan kami.">Media Sosial</Heading>
      <div className="grid items-start gap-5 md:grid-cols-2">
        <Reveal className="glass rounded-3xl p-5">
          <Head badge="IG" warna="from-pink-500 to-orange-400" title="Class Instagram" sub={u ? `@${u}` : "Akun Instagram kelas"} />
          {u ? (
            <>
              <iframe src={`https://www.instagram.com/${u}/embed`} title="Instagram kelas" loading="lazy" className="h-[480px] w-full rounded-2xl bg-white" />
              <a href={`https://instagram.com/${u}`} target="_blank" rel="noopener noreferrer" className="mt-3 block text-center text-sm font-bold text-sky-400">Buka @{u} ↗</a>
            </>
          ) : <InstaMock />}
        </Reveal>
        <Reveal d={0.1} className="glass rounded-3xl p-5">
          <Head badge="SP" warna="from-emerald-500 to-green-400" title="Spotify" sub="Lagu kelas kami" />
          {sp ? (
            <iframe src={sp.src} title="Spotify kelas" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className={`w-full rounded-2xl ${sp.tall ? "h-[352px]" : "h-[152px]"}`} />
          ) : <SpotifyMock />}
        </Reveal>
      </div>
    </Section>
  );
}
