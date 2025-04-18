const timeline = [
    {
      year: '2019',
      title: 'Started studying Computer Science',
      description: 'Majored in CS & Business at Chapman University. First exposure to full stack dev.',
    },
    {
      year: '2021',
      title: 'Studied Abroad in South Korea',
      description: 'Landed a game development internship in Seoul and took classes at Yonsei University.',
    },
    {
      year: '2022',
      title: 'First Developer Job',
      description: 'Worked as a full stack engineer building internal tools and client-facing dashboards.',
    },
    {
      year: '2023',
      title: 'Started jCode Studio',
      description: 'Began freelancing in web development, UX design, and building digital experiences.',
    },
  ];
  
  export function JourneyTimeline() {
    return (
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">My Journey</h2>
        <div className="border-l-2 border-pink-500 pl-6 space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }