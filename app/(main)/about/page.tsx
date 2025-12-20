export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            Dedicated to providing the latest and best content on topics that interest you
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-8 shadow-lg sm:p-10">
            <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Our Mission
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              <p>
                Our goal is to provide you with high-quality, accurate, and timely information on various topics 
                such as cricket, fitness, health, and technology.
              </p>
              <p>
                We gather information from reliable sources and present it in an easy and understandable 
                language for you.
              </p>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-8 shadow-lg sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              What We Offer
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">Expert Analysis</h3>
                  <p className="text-sm text-[var(--muted)]">
                    In-depth articles with thorough research and expert opinions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">Educational Content</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Educational articles on health, fitness, and technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">Quick Updates</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Latest updates and stories on cricket and sports
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] to-[var(--card)] p-8 shadow-lg sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
                <p className="text-base text-[var(--foreground)] sm:text-lg">
                  <span className="font-semibold">Accuracy:</span> We are committed to providing accurate and verified information
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
                <p className="text-base text-[var(--foreground)] sm:text-lg">
                  <span className="font-semibold">Diversity:</span> Comprehensive coverage on various topics
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
                <p className="text-base text-[var(--foreground)] sm:text-lg">
                  <span className="font-semibold">Reader-Focused:</span> Prioritizing your needs and interests
                </p>
              </div>
            </div>
          </section>

          {/* Contact/CTA Section */}
          <section className="rounded-2xl bg-[orange] p-8 text-center text-white shadow-xl sm:p-12">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Join Us
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Stay connected with us for the latest updates and articles
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/topics"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-white/90"
              >
                View All Articles
              </a>
              <a
                href="/"
                className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Go to Homepage
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

