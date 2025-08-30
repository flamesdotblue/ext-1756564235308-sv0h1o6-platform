import SproutSprite from '../assets/sprites/sproutling.svg'
import EmberSprite from '../assets/sprites/emberkin.svg'
import DewSprite from '../assets/sprites/dewdrop.svg'

const bios = [
  {
    id: 'sprout',
    name: 'Sproutling',
    bio: 'A shy bud who hums to your seedlings. Loves moonlight and compost cookies.',
    sprite: SproutSprite,
    color: 'from-emerald-400/30 to-emerald-400/10 border-emerald-300/30'
  },
  {
    id: 'ember',
    name: 'Emberkin',
    bio: 'Warm and sparkly. Keeps crops cozy during chilly nights. Collects shiny pebbles.',
    sprite: EmberSprite,
    color: 'from-rose-400/30 to-rose-400/10 border-rose-300/30'
  },
  {
    id: 'dew',
    name: 'Dewdrop',
    bio: 'A giggly water spirit who waters crops at dawn. Afraid of socks.',
    sprite: DewSprite,
    color: 'from-sky-400/30 to-sky-400/10 border-sky-300/30'
  }
]

export default function Characters() {
  return (
    <section id="characters" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">Meet the Creatures</h2>
        <p className="mt-2 text-white/75 max-w-2xl">Befriend whimsical companions who help tend your fields, guard your harvests, and make every season a celebration.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bios.map((c) => (
            <article key={c.id} className={`relative rounded-xl border bg-gradient-to-b ${c.color} p-4 overflow-hidden`}> 
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-4">
                <img src={c.sprite} alt="" className="w-20 h-20 image-pixelated" />
                <div>
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                  <p className="text-sm text-white/80 mt-1">{c.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
