import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/CoqJ4UdBiLF2djJK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 md:pt-36 pb-16 md:pb-28">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-300/30 text-emerald-100 text-xs mb-4 shadow-[0_0_12px_rgba(74,222,128,0.25)]">
          <span className="w-1.5 h-1.5 bg-emerald-300 rounded-sm"></span>
          Cozy farm • Pixel magic • Seasonal vibes
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Grow a cozy life among magical creatures
        </h1>
        <p className="mt-4 max-w-2xl text-white/85">
          Plant, befriend, and celebrate the seasons in Pixel Bloom — a hand-crafted pixel farming sim where every harvest tells a story.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3" id="wishlist">
          <a
            href="https://store.steampowered.com/app/000000/Pixel_Bloom/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded border border-pink-300/40 bg-pink-500/20 hover:bg-pink-500/30 text-pink-100 font-semibold shadow-[0_0_18px_rgba(236,72,153,0.35)] transition-colors"
          >
            Wishlist on Steam
          </a>
          <a href="#trailer" className="px-5 py-3 rounded border border-white/10 hover:bg-white/5 text-white/90">Watch trailer</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0f14] to-transparent"></div>
    </section>
  )
}
