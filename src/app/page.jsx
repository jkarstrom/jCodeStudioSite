import React from "react";
import Hero from "../components/page/hero";
import AdventureCards from "../components/page/adventurecards";
import TestimonialCard from "../components/page/testimonialcard";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Hero />

      <AdventureCards />

      <section className="py-20 px-6 bg-grey text-center">
      <h2 className="text-3xl md:text-4xl font-vietnam font-bold mb-12">What Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <TestimonialCard
          quote="I have been working with Joan Karstrom for 18 months and couldn't be happier with her work. She is highly knowledgeable in her field, a great communicator so I understand what's happening, and open to feedback while taking suggestions. It is a real pleasure to work with Joan."
          name="Kim Olver"
          title="Olver International | CEO"
          color="bg-pink"
        />
        <TestimonialCard
          quote="jCode Studio nailed the project from concept to deployment. Seamless experience."
          name="Nicki Wahlers"
          title="Technical Program Manager "
          color="bg-pink"
        />
      </div>
    </section>
    </div>
  );
}
