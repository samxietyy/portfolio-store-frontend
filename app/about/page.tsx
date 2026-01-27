

import { Zalando_Sans_Expanded } from 'next/font/google';
import Image from 'next/image';

const titles = Zalando_Sans_Expanded({subsets:['latin']})

export default function About() {
  return (
    <main className={`w-full min-h-screen  text-neutral-100 ${titles.className}`}>
      
      {/* HERO SECTION */}
        <section className="relative w-full h-[25vh] md:h-[25vh] overflow-hidden">
        
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/boxe_gif.mp4"
            autoPlay
            loop
            muted
            playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-neutral-100">
            ABOUT
            </h1>
        </div>

        </section>


      {/* CONTENT */}
      <section className="max-w-5xl mx-auto mt-4 px-6 py-16 space-y-12 rounded-2xl bg-neutral-950">
        
        {/* INTRO */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Built in the gym. Proven in the ring.
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Our brand was born where sweat hits the canvas and discipline
            becomes a lifestyle. We design sportswear and boxing equipment
            for athletes who train with purpose and fight with heart.
          </p>
        </div>

        {/* STORY */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Story</h3>
            <p className="text-neutral-300 leading-relaxed">
              What started as a small project between fighters and coaches
              quickly evolved into a brand focused on performance,
              durability and identity. We were tired of gear that looked
              good but failed under pressure.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Every piece we create is tested in real training sessions,
              sparring rounds and competition environments. No shortcuts.
              No compromises.
            </p>
          </div>

        
        </div>

        {/* VALUES */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">What We Stand For</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Discipline</h4>
              <p className="text-neutral-400 text-sm">
                Boxing teaches consistency, respect and mental strength.
                Our brand reflects that mindset.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Performance</h4>
              <p className="text-neutral-400 text-sm">
                From training apparel to boxing gear, everything is built
                to perform under real conditions.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 rounded-lg">
              <h4 className="font-semibold mb-2">Identity</h4>
              <p className="text-neutral-400 text-sm">
                We believe what you wear should represent who you are —
                focused, relentless, and hungry to improve.
              </p>
            </div>
          </div>
        </div>

        {/* CLOSING */}
        <div className="pt-5 border-t border-neutral-800">
          <p className="text-neutral-300 leading-relaxed">
            Whether you are stepping into the ring or pushing through
            another hard training session, our mission is simple:
            <span className="font-semibold text-neutral-100">
              {' '}support fighters at every level.
            </span>
          </p>
        </div>

      </section>
    </main>
  );
}
