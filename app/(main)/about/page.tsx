import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-24">
          <span className="mb-4 inline-block rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
            Our Story
          </span>
          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            We’re building the future of <br className="hidden sm:block" />
            digital storytelling.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            Blogfly is a platform designed for clarity, speed, and community. We believe that great content deserves a great reading experience.
          </p>
        </div>

        {/* Hero Image / Mission Split */}
        <section className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:mb-32">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team working together"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 lg:p-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Created for creators, <br />
              by creators.
            </h2>
            <div className="space-y-4 text-[var(--muted)] text-base sm:text-lg leading-relaxed">
              <p>
                We started Blogfly with a simple idea: the web is noisy, but reading shouldn&apos;t be. 
                Our mission is to provide a calm, focused environment where ideas can flourish without distraction.
              </p>
              <p>
                Whether you&apos;re here to learn about the latest tech trends, explore culinary arts, or dive deep into data analytics, 
                we curated a space that respects your time and attention.
              </p>
            </div>
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-8">
                <div>
                  <div className="text-3xl font-bold text-[var(--foreground)]">2M+</div>
                  <div className="text-sm font-medium text-[var(--muted)]">Monthly Readers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--foreground)]">50k+</div>
                  <div className="text-sm font-medium text-[var(--muted)]">Articles Published</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - 3 Column Grid */}
        <section className="mb-20 lg:mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clarity First",
                desc: "We strip away the clutter to focus on what matters: the content.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
              },
              {
                title: "Community Driven",
                desc: "Built on feedback and collaboration from our diverse user base.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                ),
              },
              {
                title: "Open & Transparent",
                desc: "We believe in open sourcing our journey and learning in public.",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--foreground)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--background)] text-[var(--foreground)] shadow-sm border border-[var(--border-color)]">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        {/* <section>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-bold sm:text-4xl">Meet the Team</h2>
            <a href="#" className="hidden text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] sm:block">
              Join our team →
            </a>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Alex Morgan", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
              { name: "Sarah Chen", role: "Head of Design", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
              { name: "James Wilson", role: "Lead Editor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
              { name: "Emily Davis", role: "Tech Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
            ].map((member, i) => (
              <div key={i} className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-white/80">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

      </div>
    </main>
  );
}
