import React from "react";
import Hero from "../components/page/Hero";
import AdventureCards from "../components/page/AdventureCards";
import TechStack from "../components/page/TechStack";
import TestimonialCard from "../components/page/TestimonialCard";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Hero />

      {/* Stats Strip */}
      <section className="py-14 px-6 bg-darkpurple">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '25k+', label: 'Users Reached' },
            { value: '7+',   label: 'Projects Shipped' },
            { value: '4+',   label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-fredoka text-4xl md:text-5xl font-bold text-lavender">{value}</p>
              <p className="font-vietnam text-sm text-white/70 mt-1 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <AdventureCards />

      <TechStack />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-whitepurple via-white to-powder text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-darkpurple">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch w-full max-w-6xl mx-auto px-6">
          <TestimonialCard
            quote="I have been working with Joan Karstrom for 18 months and couldn't be happier with her work. She is highly knowledgeable in her field, a great communicator so I understand what's happening, and open to feedback while taking suggestions. It is a real pleasure to work with Joan."
            name="Kim Olver"
            title="Olver International | CEO"
            color="bg-rose"
            initials="KO"
          />
          <TestimonialCard
            quote="Working with Joan has been an absolute pleasure! She transformed our product into a beautiful, functional site that we're truly proud of. Her professionalism, sharp eye for detail, and deep commitment to creating the best possible product were evident in every phase of the project. Joan didn't just approach this as a job, she embraced our organizational mission to make crime data more accessible to the Houston community and integrated that purpose into her work with care and dedication. She has been an invaluable asset to our team, and I'm genuinely looking forward to more opportunities to collaborate with her in the future."
            name="Nicki Wahlers"
            title="Technical Program Manager"
            color="bg-lavender"
            initials="NW"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-darkpurple text-center overflow-hidden">
        {/* Soft color washes */}
        <div className="absolute w-64 h-64 bg-lavender opacity-10 rounded-full -top-16 -left-16 blur-2xl pointer-events-none" />
        <div className="absolute w-56 h-56 bg-periwinkle opacity-15 rounded-full -bottom-12 -right-12 blur-2xl pointer-events-none" />

        {/* Ghost headline texture */}
        <p
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-fredoka font-bold leading-none text-center whitespace-nowrap select-none pointer-events-none"
          style={{
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            WebkitTextStroke: '1px rgba(255,255,255,0.08)',
            color: 'transparent',
          }}
          aria-hidden="true"
        >
          Let&apos;s Build
        </p>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Let&apos;s Build Something<br />
            <span className="text-lavender">Together</span>
          </h2>
          <p className="font-vietnam text-lg mb-10 max-w-lg mx-auto leading-relaxed text-lavender/80">
            Whether you have a full vision or just a spark of an idea, I&apos;d love to help you
            bring it to life with thoughtful design and clean development.
          </p>
          <a
            href="/contact"
            className="inline-block font-vietnam font-semibold text-base px-10 py-4 rounded-full bg-white text-darkpurple shadow-lg hover:bg-lavender hover:shadow-xl transition-all duration-200 ring-2 ring-white/20"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
