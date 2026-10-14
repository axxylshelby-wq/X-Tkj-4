import { useEffect, useRef } from "react";

// Latar luar angkasa yang halus: bintang redup + bintang jatuh jarang
export default function Space() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d");
    let W, H, raf, stars = [], shoot = [];
    const resize = () => {
      W = c.width = innerWidth; H = c.height = innerHeight;
      stars = Array.from({ length: Math.min(180, W / 6) }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.2 + 0.2,
        s: Math.random() * 0.15 + 0.02, p: Math.random() * 6,
      }));
    };
    resize(); addEventListener("resize", resize);
    const loop = (t) => {
      x.clearRect(0, 0, W, H);
      stars.forEach((s) => {
        s.y += s.s; if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
        x.globalAlpha = 0.25 + 0.5 * Math.abs(Math.sin(t / 1100 + s.p));
        x.fillStyle = s.r > 1 ? "#c9bcff" : "#fff";
        x.beginPath(); x.arc(s.x, s.y, s.r, 0, 7); x.fill();
      });
      if (Math.random() < 0.003) shoot.push({ x: Math.random() * W * 0.7, y: Math.random() * H * 0.4, l: 0 });
      shoot = shoot.filter((s) => s.l < 50);
      shoot.forEach((s) => {
        s.l++; s.x += 10; s.y += 4.5;
        const g = x.createLinearGradient(s.x, s.y, s.x - 90, s.y - 40);
        g.addColorStop(0, "#fff"); g.addColorStop(1, "transparent");
        x.globalAlpha = (1 - s.l / 50) * 0.8; x.strokeStyle = g; x.lineWidth = 1.5;
        x.beginPath(); x.moveTo(s.x, s.y); x.lineTo(s.x - 90, s.y - 40); x.stroke();
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#05050a]">
      <canvas ref={ref} className="absolute inset-0 opacity-60" />
      <div className="absolute -left-[10%] top-[6%] h-[420px] w-[420px] rounded-full bg-accent/25 blur-[130px]" />
      <div className="absolute -right-[12%] top-[55%] h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[130px]" />
    </div>
  );
}
