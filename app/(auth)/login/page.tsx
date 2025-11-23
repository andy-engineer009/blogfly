"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();

  const formik = useFormik<{ email: string; password: string }>({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        router.push("/admin/dashboard");
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--background)] via-[var(--surface)] to-[var(--background)] p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10">
          {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[#fb4fa0] shadow-xl shadow-[var(--accent)]/30">
            <span className="text-2xl font-bold text-white sm:text-3xl">B</span>
          </div> */}
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Your Logo Here</h1>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Admin Portal</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-2xl sm:p-8 lg:p-10">
          <div className="mb-6 space-y-2 text-center sm:mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Welcome Back</h2>
            <p className="text-sm text-[var(--muted)] sm:text-base">
              Sign in to access your admin dashboard
            </p>
          </div>

          <form className="space-y-5 sm:space-y-6" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-xl border px-4 py-3.5 pl-11 text-sm transition-all duration-200 placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 sm:py-4 sm:text-base ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500/60 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-[var(--border-color)] bg-white focus:border-[var(--accent)]"
                  }`}
                />
                <svg
                  className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${
                    formik.touched.email && formik.errors.email ? "text-red-500" : "text-[var(--muted)]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {formik.touched.email && !formik.errors.email && formik.values.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="flex items-center gap-2 text-xs text-red-500">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formik.errors.email}</span>
                </div>
              ) : null}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-xl border px-4 py-3.5 pl-11 pr-11 text-sm transition-all duration-200 placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 sm:py-4 sm:text-base ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500/60 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-[var(--border-color)] bg-white focus:border-[var(--accent)]"
                  }`}
                />
                <svg
                  className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${
                    formik.touched.password && formik.errors.password ? "text-red-500" : "text-[var(--muted)]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="flex items-center gap-2 text-xs text-red-500">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formik.errors.password}</span>
                </div>
              ) : null}
            </div>

            {/* Remember Me & Forgot Password */}
            {/* <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-[var(--border-color)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20" />
                <span className="text-[var(--muted)]">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-[var(--accent)] transition hover:underline">
                Forgot password?
              </a>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="group w-full rounded-xl bg-gradient-to-r from-[var(--accent)] to-[#fb4fa0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:py-4 sm:text-base"
            >
              {formik.isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Signing in...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>Sign In</span>
                  <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <p className="mt-6 text-center text-xs text-[var(--muted)] sm:mt-8">
            This is a placeholder login. Enter any credentials to access the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
