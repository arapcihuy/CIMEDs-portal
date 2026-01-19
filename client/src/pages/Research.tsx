import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";
import microImg from "@assets/stock_images/medical_laboratory_m_15058f68.jpg";
import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Research = () => {
  const { t, language } = useLanguageStore();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [, setLocation] = useLocation();

  const projects = useMemo(() => [
    {
      id: 1,
      title: t("Pengembangan Stent Jantung Biodegradable Berbasis Magnesium", "Development of Magnesium-Based Biodegradable Cardiac Stent"),
      status: t("Ongoing", "Ongoing"),
      year: "2024-2026",
      funder: "LPDP RISPRO",
      desc: t("Riset pengembangan stent koroner yang dapat terurai dalam tubuh untuk menghindari komplikasi jangka panjang penggunaan stent logam permanen.", "Research on developing biodegradable coronary stent to avoid long-term complications of permanent metal stent usage."),
      image: microImg
    },
    {
      id: 2,
      title: t("Sistem Monitoring Gula Darah Non-Invasif Menggunakan Spektroskopi", "Non-Invasive Blood Glucose Monitoring System Using Spectroscopy"),
      status: t("Prototype", "Prototype"),
      year: "2023-2025",
      funder: "Kemenristekdikti",
      desc: t("Pengembangan alat ukur kadar glukosa darah tanpa tusukan jarum menggunakan teknologi Near-Infrared Spectroscopy (NIRS).", "Development of needle-free blood glucose measurement device using Near-Infrared Spectroscopy (NIRS) technology."),
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: t("Optimasi Desain Implan Panggul (Hip Joint) Sesuai Antropometri Indonesia", "Hip Joint Implant Design Optimization for Indonesian Anthropometry"),
      status: t("Clinical Trial", "Clinical Trial"),
      year: "2022-2025",
      funder: "UGM Research Grant",
      desc: t("Perancangan ulang geometri implan sendi panggul yang disesuaikan dengan anatomi tulang orang Indonesia untuk meningkatkan kenyamanan dan umur pakai.", "Redesign of hip joint implant geometry adapted to Indonesian bone anatomy to improve comfort and lifespan."),
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop"
    }
  ], [language, t]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("Penelitian Aktif", "Active Research")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("Fokus riset kami mencakup biomaterial, biomekanika, instrumentasi medis, dan teknologi rehabilitasi.", "Our research focuses on biomaterials, biomechanics, medical instrumentation, and rehabilitation technology.")}
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={project.id} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.year}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h2>
                  <div className="text-sm font-semibold text-secondary-foreground/80 bg-secondary/20 inline-block px-3 py-1 rounded-md">
                    {t("Didukung oleh:", "Funded by:")} {project.funder}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.desc}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary font-bold hover:text-blue-800 text-lg group"
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDialogOpen(true);
                    }}
                  >
                    {t("Baca Selengkapnya", "Read More")} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedProject.status === t("Aktif", "Active") 
                        ? "bg-green-100 text-green-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {selectedProject.year}
                    </span>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-gray-900 leading-tight mb-3">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="text-sm font-semibold text-secondary-foreground/80 bg-secondary/20 inline-block px-3 py-1.5 rounded-md">
                    {t("Didukung oleh:", "Funded by:")} {selectedProject.funder}
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{t("Deskripsi Proyek", "Project Description")}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {selectedProject.desc}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t(
                      "Proyek ini merupakan bagian dari upaya CIMEDs UGM dalam mengembangkan teknologi biomedis yang dapat diaplikasikan secara luas untuk meningkatkan kualitas pelayanan kesehatan di Indonesia. Dengan pendekatan multidisiplin dan kolaborasi dengan berbagai institusi, kami berkomitmen untuk menghasilkan inovasi yang berdampak nyata.",
                      "This project is part of CIMEDs UGM's efforts to develop biomedical technology that can be widely applied to improve the quality of healthcare services in Indonesia. With a multidisciplinary approach and collaboration with various institutions, we are committed to producing innovations with real impact."
                    )}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{t("Informasi Tambahan", "Additional Information")}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">{t("Status", "Status")}:</span>
                      <span className="ml-2 font-semibold text-gray-900">{selectedProject.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{t("Tahun", "Year")}:</span>
                      <span className="ml-2 font-semibold text-gray-900">{selectedProject.year}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">{t("Pendanaan", "Funding")}:</span>
                      <span className="ml-2 font-semibold text-gray-900">{selectedProject.funder}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      setIsDialogOpen(false);
                      setLocation("/publications");
                    }}
                  >
                    {t("Lihat Publikasi Terkait", "View Related Publications")}
                  </Button>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>{t("Tutup", "Close")}</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Research;
