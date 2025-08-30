export default function Trailer() {
  return (
    <section id="trailer" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Gameplay Trailer</h2>
            <p className="mt-2 text-white/75 max-w-2xl">Take a peek at farm life, creature friendships, and seasonal festivals. Cozy guaranteed.</p>
          </div>
          <a href="#wishlist" className="hidden md:inline-flex px-4 py-2 rounded border border-pink-300/40 bg-pink-500/20 hover:bg-pink-500/30 text-pink-100">Wishlist on Steam</a>
        </div>

        <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Pixel Bloom Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
