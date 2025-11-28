export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-[var(--muted)]">
            Last updated: November 28, 2025
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto">
          <p>
            Welcome to Blogfly. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h3>2. Use of License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Blogfly's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Blogfly's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h3>3. Disclaimer</h3>
          <p>
            The materials on Blogfly's website are provided "as is". Blogfly makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3>4. Limitations</h3>
          <p>
            In no event shall Blogfly or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Blogfly's website, even if Blogfly or a Blogfly authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </div>
      </div>
    </main>
  );
}

