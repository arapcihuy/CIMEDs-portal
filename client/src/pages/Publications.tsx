import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, ExternalLink } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";
import { useState, useMemo } from "react";

const Publications = () => {
  const { t, language } = useLanguageStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const publications = useMemo(() => [
    {
      year: 2025,
      title: t(
        "Analisis Biokompatibilitas Scaffold Titanium Berpori yang Diproduksi dengan 3D Printing",
        "Biocompatibility analysis of porous titanium scaffold produced by 3D printing"
      ),
      authors: "Suyitno, B. Arifvianto, et al.",
      journal: "Journal of Biomaterials Applications",
      doi: "10.1177/0885328225123456",
      abstract: t(
        "Penelitian ini menyelidiki viabilitas sel dan proliferasi pada scaffold Ti-6Al-4V berpori...",
        "This study investigates the cell viability and proliferation on porous Ti-6Al-4V scaffolds..."
      )
    },
    {
      year: 2024,
      title: t(
        "Analisis Elemen Hingga Desain Baru Batang Femoral untuk Pasien Indonesia",
        "Finite element analysis of a new design of femoral stem for Indonesian patients"
      ),
      authors: "M. Mahardika, U.A. Salim, Suyitno",
      journal: "Medical Engineering & Physics",
      doi: "10.1016/j.medengphy.2024.103221",
      abstract: t(
        "Desain batang femoral baru diusulkan berdasarkan data morfometrik femur proksimal Indonesia...",
        "A novel femoral stem design was proposed based on the morphometric data of Indonesian proximal femurs..."
      )
    },
    {
      year: 2024,
      title: t(
        "Modifikasi Permukaan Stainless Steel 316L dengan Electropolishing untuk Aplikasi Stent Koroner",
        "Surface modification of stainless steel 316L by electropolishing for coronary stent application"
      ),
      authors: "P. Dewo, T. Wibowo, Suyitno",
      journal: "Surface and Coatings Technology",
      doi: "10.1016/j.surfcoat.2024.125678",
      abstract: t(
        "Parameter electropolishing dioptimalkan untuk mencapai kekasaran permukaan di bawah 0,2 µm...",
        "Electropolishing parameters were optimized to achieve surface roughness below 0.2 µm..."
      )
    },
    {
      year: 2023,
      title: t(
        "Sifat Mekanik Paduan Magnesium Biodegradable ZK60 untuk Implan Ortopedi",
        "Mechanical properties of biodegradable magnesium alloy ZK60 for orthopedic implants"
      ),
      authors: "R. Diharjo, Suyitno, et al.",
      journal: "Materials Science and Engineering: C",
      doi: "10.1016/j.msec.2023.112233",
      abstract: t(
        "Pengaruh perlakuan panas pada laju degradasi dan kekuatan mekanik paduan ZK60 dipelajari...",
        "The effect of heat treatment on the degradation rate and mechanical strength of ZK60 alloy was studied..."
      )
    }
  ], [language, t]);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear, publications]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-slate-50 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">{t("Publikasi Ilmiah", "Scientific Publications")}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("Diseminasi hasil riset CIMEDs UGM dalam jurnal internasional bereputasi dan prosiding konferensi.", "Dissemination of CIMEDs UGM research results in reputable international journals and conference proceedings.")}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-20 max-w-5xl">
          {/* JMDT Journal Promo */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-32 h-32 shrink-0 bg-primary/5 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
               <FileText className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <a href="https://jurnal.ugm.ac.id/jmdt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-block">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">JMDT</h2>
              </a>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Journal of Machine Design and Technology</h3>
              <p className="text-gray-600 mb-4">
                {t(
                  "Publikasi ilmiah terakreditasi SINTA 4 yang dikelola oleh Departemen Teknik Mesin dan Industri UGM. Menerbitkan artikel riset berkualitas di bidang desain mesin dan teknologi.",
                  "Scientific publication accredited SINTA 4 managed by the Department of Mechanical and Industrial Engineering UGM. Publishing quality research articles in machine design and technology."
                )}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <Badge variant="secondary" className="text-sm px-3 py-1">SINTA 4</Badge>
                 <Badge variant="outline" className="text-sm px-3 py-1">ISSN: 2087-xxx</Badge>
              </div>
            </div>
            
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20">
              <a 
                href="https://jurnal.ugm.ac.id/jmdt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t("Kunjungi Website JMDT", "Visit JMDT Website")} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 bg-white p-4 rounded-xl border shadow-xs">
            <div className="flex-1">
              <Input 
                placeholder={t("Cari judul paper, penulis, atau kata kunci...", "Search title, author, or keywords...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder={t("Tahun", "Year")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("Semua Tahun", "All Years")}</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="md:w-auto">{t("Filter", "Filter")}</Button>
          </div>

          {/* List */}
          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((paper, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                          {paper.year}
                        </span>
                        <span className="text-sm text-gray-500 font-medium italic">
                          {paper.journal}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 font-medium">
                        {paper.authors}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {paper.abstract}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={`https://doi.org/${paper.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-primary font-semibold hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> {t("Lihat DOI", "View DOI")}
                        </a>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            const citation = `${paper.authors}. (${paper.year}). ${paper.title}. ${paper.journal}. ${paper.doi}`;
                            navigator.clipboard.writeText(citation);
                            alert(t("Sitasi disalin ke clipboard!", "Citation copied to clipboard!"));
                          }}
                          className="flex items-center text-sm text-gray-500 hover:text-gray-900"
                        >
                          <Download className="w-4 h-4 mr-1" /> {t("Salin Sitasi", "Copy Citation")}
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:block p-3 bg-gray-50 rounded-full text-gray-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>{t("Tidak ada publikasi yang sesuai dengan pencarian.", "No publications match your search.")}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
