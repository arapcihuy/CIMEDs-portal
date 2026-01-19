import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TeamGrid from "@/components/sections/TeamGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Newspaper } from "lucide-react";
import { Link } from "wouter";
import { useLanguageStore } from "@/lib/languageStore";
import { useMemo } from "react";

const Home = () => {
  const { t, language } = useLanguageStore();

  const recentPublications = useMemo(() => [
    {
      id: 1,
      title: t(
        "Pengembangan Implan Titanium Berpori untuk Aplikasi Regenerasi Tulang",
        "Development of Porous Titanium Implant for Bone Regeneration Applications"
      ),
      authors: "Suyitno, et al. (2025)",
      journal: t("Jurnal Teknologi Pemrosesan Material", "Journal of Materials Processing Technology"),
      doi: "10.1016/j.jmatprotec...",
      citations: "12"
    },
    {
      id: 2,
      title: t(
        "Analisis Biokompatibilitas Scaffold Titanium untuk Rekonstruksi Tulang",
        "Biocompatibility Analysis of Titanium Scaffold for Bone Reconstruction"
      ),
      authors: "B. Arifvianto, et al. (2025)",
      journal: t("Jurnal Aplikasi Biomaterial", "Journal of Biomaterials Applications"),
      doi: "10.1177/0885328225...",
      citations: "8"
    },
    {
      id: 3,
      title: t(
        "Optimasi Desain Stent Biodegradable Berbasis Magnesium",
        "Optimization of Magnesium-Based Biodegradable Stent Design"
      ),
      authors: "U.A. Salim, et al. (2024)",
      journal: t("Rekayasa & Fisika Medis", "Medical Engineering & Physics"),
      doi: "10.1016/j.medengphy...",
      citations: "15"
    }
  ], [language, t]);

  const recentNews = useMemo(() => [
    {
      id: 1,
      date: t("16 Jan 2026", "Jan 16, 2026"),
      title: t(
        "CIMEDs UGM Raih Penghargaan Inovasi Nasional Kemenkes RI",
        "CIMEDs UGM Wins National Innovation Award from Ministry of Health"
      ),
      excerpt: t(
        "Penghargaan diberikan atas kontribusi dalam pengembangan alat kesehatan mandiri...",
        "Award given for contributions in developing independent medical devices..."
      ),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      date: t("10 Jan 2026", "Jan 10, 2026"),
      title: t(
        "Kunjungan Menteri Kesehatan ke Fasilitas Produksi Stent Jantung UGM",
        "Minister of Health Visits UGM Cardiac Stent Production Facility"
      ),
      excerpt: t(
        "Menteri Kesehatan mengapresiasi langkah UGM dalam memproduksi stent jantung dalam negeri...",
        "Minister of Health appreciates UGM's initiative to produce domestic cardiac stents..."
      ),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    }
  ], [language, t]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedProducts />

        {/* About / Team Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("Tim Peneliti Kami", "Our Research Team")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("Kolaborasi lintas disiplin ilmu antara dokter, insinyur, dan ilmuwan untuk menciptakan solusi kesehatan terbaik.", "Cross-disciplinary collaboration between doctors, engineers, and scientists to create the best health solutions.")}
              </p>
            </div>
            <TeamGrid />
            <div className="text-center mt-12">
              <Link href="/team">
                <Button variant="outline" className="rounded-full px-8">
                  {t("Lihat Seluruh Tim", "View All Team")} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Research & News Preview */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              
              {/* Research Column */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FileText className="text-secondary" /> {t("Publikasi Terbaru", "Latest Publications")}
                  </h3>
                  <Link href="/publications" className="text-primary text-sm font-semibold hover:underline">{t("Lihat Semua", "View All")}</Link>
                </div>
                <div className="space-y-6">
                  {recentPublications.map((pub) => (
                    <Link key={pub.id} href="/publications">
                      <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md mb-3 inline-block">{t("Jurnal Internasional", "International Journal")}</span>
                        <h4 className="font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">{pub.authors} • {pub.journal}</p>
                        <div className="flex items-center text-xs text-gray-400 gap-4">
                          <span>DOI: {pub.doi}</span>
                          <span>{t("Sitasi", "Citations")}: {pub.citations}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* News Column */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Newspaper className="text-secondary" /> {t("Berita Terkini", "Latest News")}
                  </h3>
                  <Link href="/news" className="text-primary text-sm font-semibold hover:underline">{t("Lihat Semua", "View All")}</Link>
                </div>
                <div className="space-y-6">
                  {recentNews.map((news) => (
                    <Link key={news.id} href="/news">
                      <div className="group flex gap-4 bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                          <img 
                            src={news.image} 
                            alt="News" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                          />
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 mb-1 block">{news.date}</span>
                          <h4 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                            {news.title}
                          </h4>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {news.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("Tertarik Berkolaborasi?", "Interested in Collaboration?")}</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
              {t("Kami membuka peluang kerjasama riset dan pengembangan produk dengan industri, rumah sakit, dan institusi pendidikan.", "We open opportunities for research and product development collaboration with industries, hospitals, and educational institutions.")}
            </p>
            <Link href="/partnership">
              <Button size="lg" className="bg-secondary text-blue-950 hover:bg-secondary/90 font-bold px-8 h-12 rounded-full">
                {t("Mulai Kerjasama", "Start Collaboration")}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
