import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MissionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-plum pt-28 pb-12 border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Stories</p>
          <h1 className="display-heading text-5xl mb-4">Featured Missions</h1>
          <p className="font-body text-cream/50 max-w-xl">
            Long-form stories from the field — spotlighting the kingdom work being done
            by organizations in our network.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-plum py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center border border-gold/10 p-10">
            <p className="font-display text-2xl text-cream/40 mb-3">More stories coming soon</p>
            <p className="font-body text-sm text-cream/30">
              Featured Missions are managed via Sanity CMS — connect your CMS to publish more stories.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
