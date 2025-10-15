import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { projects } from './data';

export default function Projects() {
  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4"
          >
            <div className="relative w-full h-48 mb-4 rounded bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs bg-lightpurple px-2 py-1 rounded-full text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}