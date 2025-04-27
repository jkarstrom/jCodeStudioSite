import React from "react";
import PropTypes from 'prop-types';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return <div className="p-10">Project not found.</div>;

  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="relative w-full h-64 mb-6 rounded overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <p className="text-gray-700 mb-6">{project.content}</p>
      <div className="space-x-4">
        {project.github && <a href={project.github} className="text-pink-500 underline">View Code</a>}
        {project.live && <a href={project.live} className="text-pink-500 underline">Live Site</a>}
      </div>
    </main>
  );
}

ProjectDetail.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
