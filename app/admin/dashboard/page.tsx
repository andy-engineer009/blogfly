const stats = [
  {
    label: "कुल कैटेगरियाँ ", // Total Categories
    value: "20",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    gradient: "from-blue-500/20 via-blue-600/20 to-purple-600/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    change: "इस महीने +3", // +3 this month
  },
  {
    label: "कुल पोस्ट", // Total Posts
    value: "10",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    change: "इस हफ्ते +24", // +24 this week
  },
  {
    label: "प्रकाशित पोस्ट", // Published Posts
    value: "10",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-green-500/20 via-green-600/20 to-emerald-600/20",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    change: "84% प्रकाशित", // 84% published
  },
  {
    label: "ड्राफ्ट पोस्ट", // Draft Posts
    value: "0",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-yellow-500/20 via-amber-600/20 to-orange-600/20",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    change: "16% ड्राफ्ट में", // 16% in draft
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header (कमेंटेड आउट, लेकिन अगर इसे अनकमेंट किया जाता तो यह टेक्स्ट बदल जाता) */}
      {/* <header className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:p-8">
        <div className="flex items-start justify-between gap-4">
    <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">वापस स्वागत है</p>
            <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              डैशबोर्ड
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              एक नज़र में अपने प्लेटफॉर्म के स्वास्थ्य पर नजर रखें। प्रमुख मेट्रिक्स को ट्रैक करें और अपनी सामग्री को कुशलतापूर्वक प्रबंधित करें।
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 sm:flex">
            <svg className="h-4 w-4 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </div>
      </header> */}

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Label */}
              <div className="flex items-start justify-between">
                <div className={`rounded-xl ${stat.iconBg} p-3 ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                  {stat.icon}
                </div>
                <div className={`rounded-lg ${stat.iconBg} px-2 py-1 text-xs font-semibold ${stat.iconColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
                  लाइव {/* Live */}
                </div>
              </div>

              {/* Value and Label */}
              <div className="mt-6">
                <p className="text-3xl font-black leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">
                  {stat.change}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </article>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="/admin/post/add"
          className="group flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4 shadow-md transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg sm:p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[var(--foreground)]">नई पोस्ट बनाएं</p> {/* Create New Post */}
            <p className="text-xs text-[var(--muted)] sm:text-sm">एक नया ब्लॉग पोस्ट लिखें और प्रकाशित करें</p> {/* Write and publish a new blog post */}
          </div>
          <svg className="h-5 w-5 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="/admin/categories/add"
          className="group flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4 shadow-md transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg sm:p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[var(--foreground)]">कैटेगरी जोड़ें</p> {/* Add Category */}
            <p className="text-xs text-[var(--muted)] sm:text-sm">एक नई कंटेंट कैटेगरी बनाएं</p> {/* Create a new content category */}
          </div>
          <svg className="h-5 w-5 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="/admin/home-manager"
          className="group flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4 shadow-md transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg sm:p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 text-purple-400 transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[var(--foreground)]">होमपेज प्रबंधित करें</p> {/* Manage Homepage */}
            <p className="text-xs text-[var(--muted)] sm:text-sm">होमपेज कंटेंट को कॉन्फ़िगर करें</p> {/* Configure homepage content */}
          </div>
          <svg className="h-5 w-5 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </section>
    </div>
  );
}