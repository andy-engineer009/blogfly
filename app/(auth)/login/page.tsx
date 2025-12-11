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
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] p-6 lg:p-8">
      <div className="w-full max-w-sm space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--foreground)] text-[var(--background)] mb-4">
            <span className="text-xl font-bold">B</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Welcome back
          </h1>
          <p className="text-sm text-[var(--muted)]">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...formik.getFieldProps("email")}
                className={`w-full rounded-lg border bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--foreground)] focus:outline-none focus:ring-0 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-[var(--border-color)]"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-[var(--foreground)]">
                  Password
                </label>
               
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
                className={`w-full rounded-lg border bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--foreground)] focus:outline-none focus:ring-0 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-[var(--border-color)]"
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-red-500">{formik.errors.password}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full rounded-lg bg-[var(--foreground)] px-4 py-3 text-sm font-bold text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {formik.isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

      
      </div>
    </div>
  );
}
