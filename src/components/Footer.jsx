export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-sm text-white/70">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Pixel Bloom. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#wishlist" className="underline underline-offset-4 decoration-pink-400/60 hover:text-white">Wishlist on Steam</a>
          <a href="#trailer" className="hover:text-white">Trailer</a>
          <a href="#characters" className="hover:text-white">Creatures</a>
        </div>
      </div>
    </footer>
  )
}
