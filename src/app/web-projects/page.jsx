'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { projects } from './data';

function LiveBadge() {
  return (
    <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-darkpurple text-xs font-bold px-3 py-1 rounded-full font-vietnam flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#5e9e6e] inline-block"></span> Live
    </div>
  );
}

export default function WebProjects() {
  const [featured, ...rest] = projects;

  return (
    <main className="w-full text-foreground">

      {/* Hero */}
      <section className="py-24 text-center px-6 bg-whitepurple relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-lilac rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-lightpurple rounded-full opacity-20 animate-bounce-slow"></div>

        <div className="inline-flex items-center gap-2 bg-darkpurple/10 text-darkpurple text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-vietnam">
          {projects.length} Projects
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam text-transparent bg-clip-text bg-gradient-to-r from-pink via-darkpurple to-lilac">
          Web Projects
        </h1>
        <p className="text-lg text-darkpurple max-w-3xl mx-auto font-vietnam">
          Each project is a story of collaboration, creativity, and code.
          Explore the work I&apos;ve had the privilege to bring to life.
        </p>
      </section>

      {/* Projects */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(to bottom, #faf7ff, #ffffff, #fce7f3)' }}>
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Featured — horizontal card */}
          <Link
            href={`/web-projects/${featured.slug}`}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-darkpurple block hover:-translate-y-1"
          >
            <div className="absolute top-4 left-4 z-10 bg-darkpurple text-white text-xs font-bold px-3 py-1 rounded-full font-vietnam">
              Featured
            </div>
            {featured.live && <LiveBadge />}

            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[18rem] bg-gradient-to-br from-lightpurple to-pink">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-darkpurple/0 group-hover:bg-darkpurple/10 transition-colors duration-300" />
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-6xl font-bold text-lightpurple font-vietnam leading-none mb-2 select-none">01</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black group-hover:text-darkpurple transition-colors font-vietnam">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gradient-to-r from-lightpurple to-pink px-3 py-1.5 rounded-full text-black border border-darkpurple/20 font-vietnam"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-darkpurple font-medium font-vietnam group-hover:gap-3 transition-all duration-300">
                  <span>View Project</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest — 2-col grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {rest.map((project, index) => (
              <Link
                href={`/web-projects/${project.slug}`}
                key={project.slug}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-darkpurple hover:-translate-y-2"
              >
                {project.live && <LiveBadge />}

                <div className="relative w-full h-52 bg-gradient-to-br from-lightpurple to-pink">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-darkpurple/0 group-hover:bg-darkpurple/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <span className="text-4xl font-bold text-lightpurple font-vietnam leading-none select-none">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold mt-1 mb-2 text-black group-hover:text-darkpurple transition-colors font-vietnam">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-gradient-to-r from-lightpurple to-pink px-3 py-1.5 rounded-full text-black border border-darkpurple/20 font-vietnam"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-darkpurple font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-vietnam">
                    <span>View Project</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-lilac text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-darkpurple mb-4 font-vietnam">
          Have a Project in Mind?
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto font-vietnam">
          I&apos;d love to hear about your next big idea and explore how we can bring it to life together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-darkpurple text-white font-medium px-8 py-4 rounded-full shadow-lg hover:bg-pink hover:text-black transition-all duration-300 hover:shadow-xl font-vietnam"
        >
          Let&apos;s Connect
        </a>
      </section>

    </main>
  );
}
