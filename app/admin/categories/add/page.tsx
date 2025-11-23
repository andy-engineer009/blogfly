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
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/categories"
            className="group flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-2.5 text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            aria-label="Back to categories"
          >
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
    <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Category Management</p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Add Category</h1>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:p-8 lg:p-10">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
          {/* Category Name Input */}
          <div className="space-y-3">
            <label htmlFor="category-name" className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
              <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Category Name
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="category-name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ex: Product Insights, Design Trends, Tech News..."
                className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 sm:px-5 sm:py-4 sm:text-base ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500/60 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-[var(--border-color)] bg-white focus:border-[var(--accent)]"
                }`}
              />
              {formik.touched.name && !formik.errors.name && formik.values.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="flex items-center gap-2 text-xs text-red-500">
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formik.errors.name}</span>
              </div>
            ) : null}
            <p className="text-xs text-[var(--muted)]">Choose a clear, descriptive name for your category</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-[var(--border-color)] pt-6 sm:flex-row sm:justify-end sm:gap-4">
            <Link
              href="/admin/categories"
              className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </Link>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[#fb4fa0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {formik.isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <svg className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add Category</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}