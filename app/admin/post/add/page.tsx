"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";

// https://medium.com/@GordianEtim/how-to-integrate-ckeditor-5-with-next-js-a-developer-guide-215341338db7

const CustomEditor = dynamic(() => import("@/components/CustomEditor"), { ssr: false });

const categoryOptions = [
  { value: "क्रिकेट", label: "क्रिकेट" },
  { value: "फिटनेस", label: "फिटनेस" },
  { value: "समाचार", label: "समाचार" },
  { value: "स्वास्थ्य", label: "स्वास्थ्य" },
  { value: "टेक", label: "टेक" },
];

const validationSchema = Yup.object({
  title: Yup.string().trim().required("ब्लॉग शीर्षक आवश्यक है"),
  description: Yup.string().trim().required("विवरण आवश्यक है"),
  category: Yup.string().required("श्रेणी आवश्यक है"),
});

export default function AddPostPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const formik = useFormik<{ title: string; description: string; category: string; author: string; image?: File | null }>({
    initialValues: {
      title: "",
      description: "",
      category: "",
      author: "",
      image: null,
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      helpers.resetForm();
      setPreviewImage(null);
      setFileName(null);
      helpers.setSubmitting(false);
    },
  });

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    formik.setFieldValue("image", file);
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFileName(file.name);
    } else {
      setPreviewImage(null);
      setFileName(null);
    }
  };

  const handleCategoryChange = (option: { value: string; label: string } | null) => {
    formik.setFieldValue("category", option?.value ?? "");
  };

  const selectedCategory = useMemo(
    () => categoryOptions.find((option) => option.value === formik.values.category) ?? null,
    [formik.values.category],
  );

  return (
    <div className="space-y-6">
       <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/post"
            className="group flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-2.5 text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            aria-label="Back to categories"
          >
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">पोस्ट प्रबंधन</p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">नई पोस्ट जोड़ें</h1>
          </div>
        </div>
      </header>


      <section className="rounded-[1.25rem] border border-[var(--border-color)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[var(--foreground)]">ब्लॉग शीर्षक</label>
            <textarea
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={3}
              className={`w-full rounded-2xl border px-4 py-3 text-sm min-h-[90px] focus:border-[var(--accent)] focus:outline-none ${
                formik.touched.title && formik.errors.title ? "border-red-500/60 bg-white/80" : "border-[var(--border-color)] bg-white"
              }`}
              placeholder="जो भी कहानी आप कैप्चर करना चाहते हैं"
            />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-xs text-red-500">{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[var(--foreground)]">ब्लॉग विवरण</label>
            <div
              className={`min-h-[140px] rounded-[1rem] border ${
                formik.touched.description && formik.errors.description ? "border-red-500/60" : "border-[var(--border-color)]"
              } bg-white`}
            >
              <CustomEditor
                data={formik.values.description}
                onChange={(value) => formik.setFieldValue("description", value)}
                onBlur={() => formik.setFieldTouched("description", true)}
              />
            </div>
            {formik.touched.description && formik.errors.description ? (
              <p className="text-xs text-red-500">{formik.errors.description}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 rounded-[1rem] border border-[var(--border-color)] bg-white/80 p-4 sm:flex-row sm:items-start">
            <div className="flex-1 space-y-2">
              <label className="block text-sm font-semibold text-[var(--foreground)]">श्रेणी</label>
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={handleCategoryChange}
                classNamePrefix="formik-select"
                className="react-select-container"
              />
              {formik.touched.category && formik.errors.category ? (
                <p className="text-xs text-red-500">{formik.errors.category}</p>
              ) : null}
            </div>

            <div className="flex-1 space-y-2">
              <label className="block text-sm font-semibold text-[var(--foreground)]">लेखक का नाम (वैकल्पिक)</label>
              <input
                type="text"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                className="w-full rounded-2xl border px-4 py-3 text-sm border-[var(--border-color)] bg-white focus:border-[var(--accent)] focus:outline-none"
                placeholder="लेखक का नाम..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[var(--foreground)]">कवर छवि अपलोड करें (वैकल्पिक)</label>
            <div className="flex flex-col gap-3 rounded-[1rem] border border-dashed border-[var(--border-color)] bg-white/80 p-4 text-sm text-[var(--muted)] shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
              <p className="text-[0.85rem]">
                छवि चुनने के लिए खींचें और छोड़ें या क्लिक करें। सोशल प्रीव्यू के लिए अनुशंसित आकार 1200x630px।
              </p>
              <label className="flex cursor-pointer items-center justify-center rounded-xl bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                फ़ाइल चुनें
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
              {fileName ? (
                <p className="text-xs text-[var(--muted)]">चयनित: {fileName}</p>
              ) : (
                <p className="text-xs text-[var(--muted)]">अभी तक कोई छवि चयनित नहीं है</p>
              )}
            </div>
          </div>

          {previewImage && (
            <div className="rounded-[1rem] border border-[var(--border-color)] bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
              <img src={previewImage} alt="Preview" className="h-48 w-full rounded-[0.75rem] object-cover" />
            </div>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#fb4fa0] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formik.isSubmitting ? "सहेजा जा रहा है..." : "ब्लॉग प्रकाशित करें"}
          </button>
        </form>
      </section>
    </div>
  );
}