import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Drink Diary | jCode Studio",
  description:
    "Drink Diary — the visual, social drink logging app for iPhone. Log drinks, share with friends, and explore your taste over time.",
};

const themes = [
  { name: "Garden", bg: "bg-[#19350C]", accent: "bg-[#687D31]" },
  { name: "Rosé", bg: "bg-[#2A0F1A]", accent: "bg-[#9B5E7A]" },
  { name: "Midnight", bg: "bg-[#1A1028]", accent: "bg-[#7B5EA8]" },
  { name: "Terracotta", bg: "bg-[#1F0A04]", accent: "bg-[#B85A2A]" },
  { name: "Ocean", bg: "bg-[#4A8FA8]", accent: "bg-[#A8D8E0]" },
  { name: "Blush", bg: "bg-[#C47898]", accent: "bg-[#F0C4D8]" },
  { name: "Sage", bg: "bg-[#7A9E7C]", accent: "bg-[#D4C8A8]" },
];

export default function DrinkDiaryPage() {
  return (
    <main className="w-full font-vietnam text-foreground">

      {/* Hero */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-sage via-green to-mint overflow-hidden text-center">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-pink rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lightpurple rounded-full opacity-25 blur-2xl pointer-events-none" />

        {/* App icon placeholder */}
        <div className="relative mx-auto mb-8 w-28 h-28 rounded-[28px] bg-[#19350C] shadow-2xl flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-[#687D31] border-t-transparent" style={{ transform: 'rotate(-20deg)' }} />
        </div>

        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#19350C] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/40">
          iOS App &mdash; Coming Soon
        </div>

        <h1 className="font-fredoka font-bold text-5xl md:text-7xl text-[#19350C] mb-4 leading-tight">
          Drink Diary
        </h1>
        <p className="text-lg md:text-xl text-[#2d4a1a] max-w-xl mx-auto leading-relaxed mb-10">
          A visual, social drink log for iPhone. Snap it. Log it. Share it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <span
            aria-label="Download on the App Store (coming soon)"
            className="inline-flex items-center gap-3 bg-[#19350C] text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg opacity-60 cursor-not-allowed select-none"
          >
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="leading-tight text-left">
              <span className="block text-xs font-normal opacity-80">Download on the</span>
              App Store
            </span>
          </span>
          <span className="text-sm text-[#2d4a1a]/60 font-medium">App Store link coming at launch</span>
        </div>
      </section>

      {/* Log a Drink — full-width feature */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-3">The core experience</p>
            <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-[#19350C] mb-5 leading-tight">
              Snap a photo, log a drink, and get back to sipping
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Have a drink that is so aestheticly pleasing? Open the app, snap a photo, and the background disappears instantly — on your device, no server needed. Pick a drink type, add a location, the price, and add it in seconds.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hot or iced, wine or matcha, farmers market or rooftop bar — every detail is yours to keep.
            </p>
          </div>

          {/* Visual: category pills */}
          <div className="bg-[#F5F4F0] rounded-3xl p-8 flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-1">Categories</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Coffee", color: "#6F4E37" },
                { label: "Matcha", color: "#4A7C59" },
                { label: "Wine", color: "#722F37" },
                { label: "Cocktail", color: "#C97B30" },
                { label: "Beer", color: "#D4A030" },
                { label: "Tea", color: "#8B6914" },
                { label: "Juice", color: "#E07020" },
                { label: "Espresso", color: "#3B2010" },
                { label: "Smoothie", color: "#C45080" },
                { label: "Soda", color: "#3070A0" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="text-sm font-semibold px-4 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Friends — feature section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#19350C] to-[#2d4a1a] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Visual: mock friend cards */}
          <div className="flex flex-col gap-4 order-2 md:order-1">
            {[
              { name: "Maya R.", username: "@mayar", drink: "Aperol Spritz", location: "Cabana Bar" },
              { name: "Sophie K.", username: "@sophiek", drink: "Iced Matcha Latte", location: "Narrative Coffee" },
              { name: "Zoe T.", username: "@zoet", drink: "Natural Wine", location: "Cellar Door" },
            ].map((friend) => (
              <div key={friend.username} className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#687D31] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{friend.name[0]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{friend.name} <span className="text-white/40 font-normal">{friend.username}</span></p>
                  <p className="text-white/60 text-xs truncate">{friend.drink} &mdash; {friend.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-3">Social</p>
            <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              See what your friends are sipping
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Sign up with your phone number and create your own username. Search for friends by @ , follow them, and their latest drinks show up in your real-time feed.
            </p>
            <p className="text-white/70 leading-relaxed">
              Your phone number is never visible to anyone — only your display name and username. A social experience built on vibes, not oversharing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats — feature section */}
      <section className="py-20 px-6 bg-[#F5F4F0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-3">Stats</p>
            <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-[#19350C] mb-5 leading-tight">
              Your taste, but in number form
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Switch between weekly, monthly, or all-time views. Filter by category to see how your habits shift. Charts down your logs by day so patterns are easy to spot at a glance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Track your total spend, see which spots you return to most, and browse a staggered photo gallery of everything you&apos;ve logged — tap any photo for a full-screen view.
            </p>
          </div>

          {/* Visual: mock stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E0D9]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-2">This Month</p>
              <p className="font-fredoka font-bold text-4xl text-[#19350C]">24</p>
              <p className="text-sm text-gray-400 mt-1">drinks logged</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E0D9]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-2">Total Spend</p>
              <p className="font-fredoka font-bold text-4xl text-[#19350C]">$148</p>
              <p className="text-sm text-gray-400 mt-1">this month</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E0D9] col-span-2">
              <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-3">Top Categories</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Coffee", pct: 38, color: "#6F4E37" },
                  { label: "Wine", pct: 25, color: "#722F37" },
                  { label: "Cocktail", pct: 20, color: "#C97B30" },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-500 w-16 shrink-0">{label}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                    </div>
                    <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-[#19350C] mb-4">
            Designed to delight
          </h2>
          <p className="text-[#2d4a1a]/70 text-lg max-w-md mx-auto mb-12">
            Warm, earthy, and tactile &mdash; every screen is crafted to feel like something you&apos;d actually want to open.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-end">
            {[
              { label: "Home Feed", height: "h-[480px]", scale: "scale-95" },
              { label: "Log a Drink", height: "h-[520px]", scale: "scale-100" },
              { label: "Stats", height: "h-[480px]", scale: "scale-95" },
            ].map(({ label, height, scale }) => (
              <div key={label} className={`relative flex-1 max-w-[180px] mx-auto ${scale}`}>
                <div className={`${height} rounded-[36px] border-4 border-[#19350C]/30 bg-gradient-to-b from-[#19350C] to-[#687D31] shadow-2xl flex flex-col items-center justify-end pb-8`}>
                  <span className="text-white/40 text-xs font-medium tracking-widest uppercase">{label}</span>
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#19350C]/30 rounded-full" />
              </div>
            ))}
          </div>

          <p className="mt-8 text-[#2d4a1a]/50 text-sm">Screenshots coming soon</p>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 px-6 bg-[#F5F4F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-[#19350C] mb-3">
            Seven palettes. Customize your vibe.
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto mb-12">
            Garden is free. Unlock six premium themes to make Drink Diary feel completely you.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {themes.map(({ name, bg, accent }, i) => (
              <div key={name} className="flex flex-col items-center gap-2 group">
                <div className={`w-14 h-14 rounded-2xl ${bg} shadow-lg flex items-end justify-end p-1.5 group-hover:scale-110 transition-transform duration-200`}>
                  <div className={`w-5 h-5 rounded-lg ${accent}`} />
                </div>
                <span className="text-xs font-medium text-gray-500">{name}</span>
                {i === 0 && (
                  <span className="text-[10px] font-bold text-[#687D31] uppercase tracking-wide">Free</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech strip */}
      <section className="py-10 px-6 bg-[#19350C]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {["React Native", "Expo", "Firebase", "iOS Vision", "Firestore", "AsyncStorage"].map((tech) => (
            <span key={tech} className="text-xs font-medium text-white/60 border border-white/20 px-4 py-1.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink via-whitepurple to-sage/30 text-center">
        <h2 className="font-fredoka font-bold text-3xl md:text-4xl text-darkpurple mb-4">
          Launching soon on the App Store
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
          Questions, feedback, or press inquiries &mdash; reach out anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:joan@jcodestudio.com"
            className="inline-block bg-darkpurple text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#19350C] transition-all duration-200"
          >
            Contact Support
          </a>
          <Link
            href="/apps/drink-diary/privacy-policy"
            className="inline-block text-darkpurple font-medium px-8 py-4 rounded-full border-2 border-darkpurple/30 hover:border-darkpurple transition-all duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </section>

    </main>
  );
}
