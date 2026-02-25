import React from "react";
import { projects } from '../data';
import PropTypes from 'prop-types'
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="p-10 text-black">Project not found.</div>;

  const links = [
    project.live     && { href: project.live,     label: 'Live Site' },
    project.github   && { href: project.github,   label: 'View Code' },
    project.baseball && { href: project.baseball, label: 'Baseball Page' },
    project.training && { href: project.training, label: 'Training Page' },
  ].filter(Boolean);

  return (
    <main className="w-full text-foreground">

      {/* Hero */}
      <section className="relative w-full h-80 md:h-[30rem] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkpurple/85 via-darkpurple/30 to-transparent" />

        {/* Back link */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 font-vietnam"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 md:px-12 md:pb-14">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-vietnam leading-tight drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(to bottom, #faf7ff, #ffffff, #fce7f3)' }}>
        <div className="max-w-4xl mx-auto">

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-gradient-to-r from-lightpurple to-pink px-4 py-2 rounded-full text-black border border-darkpurple/20 font-vietnam"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description callout */}
          <div className="flex gap-4 items-stretch mb-10 bg-whitepurple rounded-2xl overflow-hidden border border-lightpurple">
            <div className="w-1.5 bg-gradient-to-b from-darkpurple to-pink shrink-0" />
            <p className="py-5 pr-6 text-darkpurple font-semibold text-lg font-vietnam leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main content */}
          <div className="text-black/80 leading-relaxed text-lg whitespace-pre-line font-vietnam">
            {project.content}
          </div>

          {/* Action buttons */}
          {links.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-4">
              {links.map(({ href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium font-vietnam transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                    i === 0
                      ? 'bg-darkpurple text-white hover:bg-pink hover:text-black'
                      : 'bg-white text-darkpurple border-2 border-darkpurple hover:bg-darkpurple hover:text-white'
                  }`}
                >
                  {label} <span>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-lilac text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-darkpurple mb-4 font-vietnam">
          Interested in Working Together?
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto font-vietnam">
          Let&apos;s build something meaningful. Reach out and start a conversation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-block bg-darkpurple text-white font-medium px-8 py-4 rounded-full shadow-lg hover:bg-pink hover:text-black transition-all duration-300 hover:shadow-xl font-vietnam"
          >
            Let&apos;s Connect
          </Link>
          <Link
            href="/projects"
            className="inline-block bg-white text-darkpurple border-2 border-darkpurple font-medium px-8 py-4 rounded-full shadow-lg hover:bg-darkpurple hover:text-white transition-all duration-300 font-vietnam"
          >
            All Projects
          </Link>
        </div>
      </section>

    </main>
  );
}

ProjectDetail.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
