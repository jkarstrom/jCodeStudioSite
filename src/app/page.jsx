import React from "react";
import Hero from "../components/page/Hero";
import AdventureCards from "../components/page/AdventureCards";
import TestimonialCard from "../components/page/TestimonialCard";

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
          quote="Working with Joan has been an absolute pleasure! She transformed our product into a beautiful, functional site that we’re truly proud of. Her professionalism, sharp eye for detail, and deep commitment to creating the best possible product were evident in every phase of the project. Joan didn’t just approach this as a job, she embraced our organizational mission to make crime data more accessible to the Houston community and integrated that purpose into her work with care and dedication. She has been an invaluable asset to our team, and I’m genuinely looking forward to more opportunities to collaborate with her in the future."
          name="Nicki Wahlers"
          title="Technical Program Manager "
          color="bg-pink"
        />
      </div>
    </section>
    </div>
  );
}
