import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import microImg from "@assets/stock_images/medical_laboratory_m_15058f68.jpg";

const projects = [
  {
    id: 1,
    title: "Pengembangan Stent Jantung Biodegradable Berbasis Magnesium",
    status: "Ongoing",
    year: "2024-2026",
    funder: "LPDP RISPRO",
    desc: "Riset pengembangan stent koroner yang dapat terurai dalam tubuh untuk menghindari komplikasi jangka panjang penggunaan stent logam permanen.",
    image: microImg
  },
  {
    id: 2,
    title: "Sistem Monitoring Gula Darah Non-Invasif Menggunakan Spektroskopi",
    status: "Prototype",
    year: "2023-2025",
    funder: "Kemenristekdikti",
    desc: "Pengembangan alat ukur kadar glukosa darah tanpa tusukan jarum menggunakan teknologi Near-Infrared Spectroscopy (NIRS).",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Optimasi Desain Implan Panggul (Hip Joint) Sesuai Antropometri Indonesia",
    status: "Clinical Trial",
    year: "2022-2025",
    funder: "UGM Research Grant",
    desc: "Perancangan ulang geometri implan sendi panggul yang disesuaikan dengan anatomi tulang orang Indonesia untuk meningkatkan kenyamanan dan umur pakai.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop"
  }
];

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Penelitian Aktif</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fokus riset kami mencakup biomaterial, biomekanika, instrumentasi medis, dan teknologi rehabilitasi.
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
                    Didukung oleh: {project.funder}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold hover:text-blue-800 text-lg group">
                    Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
