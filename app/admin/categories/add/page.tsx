"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Category name is required"),
});

export default function AddCategoryPage() {
  const formik = useFormik<{ name: string }>({
    initialValues: { name: "" },
    validationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 400));
      helpers.resetForm();
      helpers.setSubmitting(false);
    },
  });

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 rounded-[1.25rem] border border-[var(--border-color)] bg-white/80 px-6 py-6 shadow-[0_20px_40px_rgba(15,23,42,0.1)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/categories"
            className="rounded-full border border-[var(--border-color)] px-3 py-2 text-xs text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            ← Back
          </Link>
          <div>
            <h1 className="text-3xl font-semibold text-[var(--foreground)]">Add category</h1>
          </div>
        </div>
      </header>

      <section className="rounded-[1.25rem] border border-[var(--border-color)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold  text-[var(--foreground)]">
              Category name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ex: Product insights"
              className={`w-full rounded-2xl border px-4 py-3 text-sm transition focus:border-[var(--accent)] focus:outline-none ${
                formik.touched.name && formik.errors.name ? "border-red-500/60 bg-white/80" : "border-[var(--border-color)] bg-white"
              }`}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-xs text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold  text-white transition hover:bg-[#fb4fa0] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formik.isSubmitting ? "Saving..." : "Add category"}
            </button>
            <Link
              href="/admin/categories"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-6 py-3 text-xs font-semibold  text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}