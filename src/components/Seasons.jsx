const events = [
  {
    id: 'spring',
    title: 'Blossom Fair',
    desc: 'A pastel parade of petals, rare seeds, and gentle rain. Plant wishes in the Wishing Patch.',
    tint: 'from-emerald-300/20 to-emerald-300/5 border-emerald-200/30'
  },
  {
    id: 'summer',
    title: 'Firefly Gala',
    desc: 'Warm nights, sparkling skies. Catch fireflies with Emberkin and brew glow-jam.',
    tint: 'from-amber-300/20 to-amber-300/5 border-amber-200/30'
  },
  {
    id: 'autumn',
    title: 'Harvest Moon',
    desc: 'Bake moon pies, trade giant pumpkins, and dance with scarecrows.',
    tint: 'from-orange-300/20 to-orange-300/5 border-orange-200/30'
  },
  {
    id: 'winter',
    title: 'Frostfolk Fest',
    desc: 'Snowy crafts, twinkle tea, and cozy creature carols by the bonfire.',
    tint: 'from-sky-300/20 to-sky-300/5 border-sky-200/30'
  }
]

export default function Seasons() {
  return (
    <section id="seasons" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">Seasonal Events</h2>
        <p className="mt-2 text-white/75 max-w-2xl">Every season brings new festivals, crops, and creature quests. Mark your calendar and your crop planner!</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e) => (
            <article key={e.id} className={`rounded-xl border bg-gradient-to-b ${e.tint} p-5`}>
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <p className="text-white/80 mt-1">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
