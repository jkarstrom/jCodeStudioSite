import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Apps | jCode Studio",
  description: "Mobile apps designed and built by jCode Studio LLC™.",
};

const apps = [
  {
    slug: "drink-diary",
    name: "Drink Diary",
    tagline: "A visual, social drink log for iPhone.",
    description:
      "Snap it. Log it. Share it. Drink Diary lets you capture the drinks you love with photos, track your habits over time, and share with friends.",
    platform: "iOS",
    status: "Coming Soon",
    tags: ["React Native", "Firebase", "iOS"],
  },
];

export default function AppsPage() {
  return (
    <main className="w-full font-vietnam text-foreground">

      {/* Hero */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-sage via-green to-mint overflow-hidden text-center">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-pink rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lightpurple rounded-full opacity-25 blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#19350C] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/40">
          {apps.length} {apps.length === 1 ? "App" : "Apps"}
        </div>
        <h1 className="font-fredoka font-bold text-4xl md:text-6xl text-[#19350C] mb-4">
          Apps by jCode Studio LLC™
        </h1>
        <p className="text-[#2d4a1a]/70 text-lg max-w-xl mx-auto">
          Mobile experiences designed to feel delightful &mdash; built with care for the people who use them.
        </p>
      </section>

      {/* App listing */}
      <section className="py-20 px-6 bg-[#F5F4F0]">
        <div className="max-w-4xl mx-auto space-y-6">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="group flex flex-col sm:flex-row items-start gap-6 bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#19350C]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="shrink-0 w-20 h-20 rounded-[20px] shadow-lg overflow-hidden relative">
                <Image src="/images/icon.png" alt={`${app.name} app icon`} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="font-fredoka font-bold text-2xl text-[#19350C]">
                    {app.name}
                  </h2>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sage text-[#19350C]">
                    {app.status}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F5F4F0] text-[#687D31] border border-[#687D31]/20">
                    {app.platform}
                  </span>
                </div>

                <p className="text-sm font-medium text-gray-400 mb-2">{app.tagline}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{app.description}</p>

                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-[#F5F4F0] border border-[#E2E0D9] text-[#687D31] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="shrink-0 self-center text-[#19350C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xl font-light">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#19350C] text-center">
        <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-white mb-4">
          Have an app idea?
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          I design and build mobile experiences for iOS. Let&apos;s bring your idea to life.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#19350C] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-sage transition-all duration-200"
        >
          Get in Touch
        </Link>
      </section>

    </main>
  );
}
