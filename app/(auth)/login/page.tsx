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
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-[#e5e5e5] bg-white p-10 shadow-lg shadow-black/5">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Login to Admin</h1>
        <p className="text-sm text-[var(--muted)]">
          This is still a placeholder. Enter any credentials to go directly to the dashboard.
        </p>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold  text-white transition hover:bg-[#ff5b96] disabled:opacity-60"
          >
            {formik.isSubmitting ? "Signing in..." : "Log me in"}
          </button>
        </form>
      </div>
    </div>
  );
}
