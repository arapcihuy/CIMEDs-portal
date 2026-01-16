import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import faceShieldImg from "@assets/stock_images/medical_face_shield__0399bc52.jpg";
import implantImg from "@assets/stock_images/orthopedic_bone_impl_5e638388.jpg";

const allProducts = [
  {
    id: 1,
    title: "Face Shield Medis High-Grade",
    category: "Alat Pelindung Diri",
    image: faceShieldImg,
    desc: "Pelindung wajah standar medis dengan material polikarbonat tahan benturan dan anti-fog.",
    specs: ["Polycarbonate 2mm", "Anti-fog", "Reusable"]
  },
  {
    id: 2,
    title: "Bone Implant Titanium",
    category: "Implan Ortopedi",
    image: implantImg,
    desc: "Implan tulang berbahan titanium alloy biokompatibel dengan struktur pori terkontrol.",
    specs: ["Ti-6Al-4V ELI", "Biocompatible", "Porous"]
  },
  {
    id: 3,
    title: "Kaki Palsu Bawah Lutut",
    category: "Prostetik",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
    desc: "Prostetik kaki dinamis dengan material komposit karbon ringan.",
    specs: ["Carbon Composite", "Dynamic", "Lightweight"]
  },
  {
    id: 4,
    title: "Pembuka Pintu No-Touch",
    category: "Preventif",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
    desc: "Alat bantu membuka pintu tanpa sentuhan tangan langsung.",
    specs: ["Ergonomic", "Universal", "Durable"]
  },
  {
    id: 5,
    title: "Ventilator Portable",
    category: "Alat Kesehatan",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop",
    desc: "Ventilator darurat portable untuk penanganan pasien gangguan pernapasan.",
    specs: ["Portable", "Battery Powered", "Smart Control"]
  },
  {
    id: 6,
    title: "Bone Screw System",
    category: "Implan Ortopedi",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    desc: "Sistem sekrup tulang presisi tinggi untuk fiksasi fraktur.",
    specs: ["Stainless Steel 316L", "High Strength", "Various Sizes"]
  }
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary/5 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Katalog Produk Inovasi</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai solusi alat kesehatan hasil riset CIMEDs UGM yang siap dihilirisasi dan digunakan.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 shrink-0 space-y-8">
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Cari produk..." className="pl-9" />
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Kategori
                </h3>
                <div className="space-y-2">
                  {["Semua Kategori", "Implan Ortopedi", "Prostetik", "Alat Pelindung Diri", "Alat Kesehatan"].map((cat) => (
                    <div key={cat} className="flex items-center gap-2">
                      <input type="checkbox" id={cat} className="rounded border-gray-300 text-primary focus:ring-primary" />
                      <label htmlFor={cat} className="text-sm text-gray-600 hover:text-primary cursor-pointer">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                        {product.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.specs.map((spec, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">Lihat Spesifikasi</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
