export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-3 h-3 bg-pink-400 shadow-[0_0_8px_#f472b6] inline-block"></span>
          <span className="text-xl font-semibold tracking-wide">Pixel Bloom</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#characters" className="hover:text-pink-200 transition-colors">Creatures</a>
          <a href="#trailer" className="hover:text-pink-200 transition-colors">Trailer</a>
          <a href="#seasons" className="hover:text-pink-200 transition-colors">Seasons</a>
          <a href="#wishlist" className="px-3 py-1.5 rounded border border-pink-300/40 bg-pink-400/10 hover:bg-pink-400/20 text-pink-100 shadow-[0_0_10px_rgba(244,114,182,0.35)] transition-colors">Wishlist on Steam</a>
        </nav>
      </div>
    </header>
  )
}
