import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";

const News = () => {
  const { t } = useLanguageStore();
  
  // Move news items inside component so they can use `t()` for bilingual content
  const newsItems = [
    {
      id: 1,
      title: t(
        "CIMEDs UGM Kembangkan Tulang Tiruan dari Hidroksiapatit Cangkang Telur",
        "CIMEDs UGM Develops Bone Substitute from Eggshell Hydroxyapatite"
      ),
      date: t("16 Januari 2026", "January 16, 2026"),
      category: t("Inovasi", "Innovation"),
      author: t("Humas UGM", "UGM Public Relations"),
      excerpt: t(
        "Tim peneliti CIMEDs berhasil menyulap limbah cangkang telur menjadi material substitusi tulang (bone graft) yang biokompatibel dan ekonomis.",
        "CIMEDs research team turns eggshell waste into a biocompatible, cost-effective bone graft material."
      ),
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: t(
        "Kunjungan Menteri Kesehatan ke Fasilitas Produksi Stent Jantung UGM",
        "Minister of Health Visits UGM Cardiac Stent Production Facility"
      ),
      date: t("10 Januari 2026", "January 10, 2026"),
      category: t("Kegiatan", "Activities"),
      author: t("Admin", "Admin"),
      excerpt: t(
        "Menteri Kesehatan mengapresiasi langkah UGM dalam memproduksi stent jantung dalam negeri untuk menekan impor alat kesehatan.",
        "The Minister of Health appreciates UGM’s initiative to produce domestic cardiac stents to reduce medical device imports."
      ),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: t(
        "Webinar Nasional: Tantangan Hilirisasi Alat Kesehatan di Indonesia",
        "National Webinar: Challenges of Medical Device Downstreaming in Indonesia"
      ),
      date: t("5 Januari 2026", "January 5, 2026"),
      category: t("Event", "Event"),
      author: t("Sekretariat", "Secretariat"),
      excerpt: t(
        "Ikuti diskusi panel bersama pakar industri dan regulator mengenai peta jalan kemandirian alat kesehatan nasional.",
        "Join a panel discussion with industry experts and regulators on the roadmap to national medical device self-sufficiency."
      ),
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: t(
        "Kerjasama Riset CIMEDs dengan RSUP Dr. Sardjito",
        "CIMEDs Research Collaboration with RSUP Dr. Sardjito"
      ),
      date: t("28 Desember 2025", "December 28, 2025"),
      category: t("Kerjasama", "Collaboration"),
      author: t("Humas", "Public Relations"),
      excerpt: t(
        "Penandatanganan MoU untuk uji klinis produk inovasi alat kesehatan di lingkungan rumah sakit pendidikan.",
        "Signing of an MoU for clinical trials of innovative medical devices within the teaching hospital environment."
      ),
      image: "https://images.unsplash.com/photo-1516574187841-69301976e499?q=80&w=2070&auto=format&fit=crop",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 mb-20 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">{t("Berita & Artikel", "News & Articles")}</h1>
            <p className="text-gray-600">{t("Kabar terbaru seputar riset, prestasi, dan kegiatan CIMEDs UGM.", "Latest news about research, achievements, and activities of CIMEDs UGM.")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {newsItems.map((news) => (
              <div key={news.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <Badge className="absolute top-4 left-4 z-10 bg-white/90 text-primary hover:bg-white">
                    {news.category}
                  </Badge>
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {news.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 justify-start font-semibold group-hover:translate-x-2 transition-transform">
                    {t("Baca Selengkapnya", "Read More")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button variant="outline" size="lg">{t("Muat Lebih Banyak Berita", "Load More News")}</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
