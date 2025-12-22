"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

type AdType = "vertical" | "horizontal";

interface Ad {
  id: string;
  type: AdType;
  image: string;
  name: string;
  uploadedAt: string;
}

export default function AdsManagerPage() {
  const [verticalAds, setVerticalAds] = useState<Ad[]>([]);
  const [horizontalAds, setHorizontalAds] = useState<Ad[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>, type: AdType) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulate upload - in real app, upload to server
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const imageUrl = URL.createObjectURL(file);
    const newAd: Ad = {
      id: `ad-${Date.now()}-${Math.random()}`,
      type,
      image: imageUrl,
      name: file.name,
      uploadedAt: new Date().toLocaleDateString(),
    };

    if (type === "vertical") {
      setVerticalAds([...verticalAds, newAd]);
    } else {
      setHorizontalAds([...horizontalAds, newAd]);
    }

    setIsUploading(false);
    event.target.value = ""; // Reset input
  };

  const handleDeleteAd = (id: string, type: AdType) => {
    if (type === "vertical") {
      setVerticalAds(verticalAds.filter((ad) => ad.id !== id));
    } else {
      setHorizontalAds(horizontalAds.filter((ad) => ad.id !== id));
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard"
            className="group flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-2.5 text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            aria-label="Back to dashboard"
          >
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Ads Management</p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Ads Manager</h1>
          </div>
        </div>
      </header>

      {/* Vertical Ads Section */}
      <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-lg sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)]">Vertical Ads</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">Recommended size: 160x600px (Sidebar ads)</p>
          </div>
          <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#fb4fa0] disabled:cursor-not-allowed disabled:opacity-50">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {isUploading ? "Uploading..." : "Upload Vertical Ad"}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "vertical")}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        </div>

        {verticalAds.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticalAds.map((ad) => (
              <div key={ad.id} className="group relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-white">
                <div className="relative aspect-[160/600] w-full overflow-hidden">
                  <Image
                    src={ad.image}
                    alt={ad.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="truncate text-sm font-medium text-[var(--foreground)]">{ad.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Uploaded: {ad.uploadedAt}</p>
                </div>
                <button
                  onClick={() => handleDeleteAd(ad.id, "vertical")}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white opacity-0 shadow-lg transition-opacity hover:bg-red-600 group-hover:opacity-100"
                  aria-label="Delete ad"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center">
            <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium text-[var(--foreground)]">No vertical ads uploaded yet</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Upload your first vertical ad to get started</p>
          </div>
        )}
      </section>

      {/* Horizontal Ads Section */}
      <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-lg sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)]">Horizontal Ads</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">Recommended size: 728x90px or 1200x300px (Banner ads)</p>
          </div>
          <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#fb4fa0] disabled:cursor-not-allowed disabled:opacity-50">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {isUploading ? "Uploading..." : "Upload Horizontal Ad"}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "horizontal")}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        </div>

        {horizontalAds.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {horizontalAds.map((ad) => (
              <div key={ad.id} className="group relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-white">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={ad.image}
                    alt={ad.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="truncate text-sm font-medium text-[var(--foreground)]">{ad.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Uploaded: {ad.uploadedAt}</p>
                </div>
                <button
                  onClick={() => handleDeleteAd(ad.id, "horizontal")}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white opacity-0 shadow-lg transition-opacity hover:bg-red-600 group-hover:opacity-100"
                  aria-label="Delete ad"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center">
            <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium text-[var(--foreground)]">No horizontal ads uploaded yet</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Upload your first horizontal ad to get started</p>
          </div>
        )}
      </section>
    </div>
  );
}

