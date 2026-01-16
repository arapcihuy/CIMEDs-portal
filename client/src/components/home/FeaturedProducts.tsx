import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Added import
import faceShieldImg from "@assets/stock_images/medical_face_shield__0399bc52.jpg";
import implantImg from "@assets/stock_images/orthopedic_bone_impl_5e638388.jpg";

const products = [
  {
    id: 1,
    title: "Face Shield Medis High-Grade",
    category: "Alat Pelindung Diri",
    image: faceShieldImg,
    desc: "Pelindung wajah standar medis dengan material polikarbonat tahan benturan dan anti-fog, dikembangkan khusus untuk tenaga medis COVID-19.",
    specs: ["Polycarbonate 2mm", "Anti-fog coating", "Adjustable strap"]
  },
  {
    id: 2,
    title: "Bone Implant Titanium",
    category: "Implan Ortopedi",
    image: implantImg,
    desc: "Implan tulang berbahan titanium alloy biokompatibel dengan struktur pori terkontrol untuk mempercepat osseointegrasi.",
    specs: ["Ti-6Al-4V ELI", "Porous structure", "Custom size available"]
  },
  {
    id: 3,
    title: "Kaki Palsu Bawah Lutut",
    category: "Prostetik",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop", // Placeholder if specific not found
    desc: "Prostetik kaki dinamis dengan material komposit karbon ringan, memberikan mobilitas maksimal bagi penyandang disabilitas.",
    specs: ["Carbon composite", "Dynamic response", "Lightweight"]
  },
  {
    id: 4,
    title: "Pembuka Pintu No-Touch",
    category: "Alat Kesehatan Preventif",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
    desc: "Alat bantu membuka pintu tanpa sentuhan tangan langsung untuk meminimalisir penyebaran patogen di area publik.",
    specs: ["Ergonomic design", "Durable material", "Universal fit"]
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Inovasi Unggulan</h2>
            <p className="text-gray-600 max-w-xl">
              Produk hasil riset yang telah dihilirisasi dan digunakan oleh masyarakat serta fasilitas kesehatan di Indonesia.
            </p>
          </div>
          <a href="/products" className="hidden md:flex items-center text-primary font-semibold hover:text-blue-700 transition-colors">
            Lihat Semua Produk <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
                    {product.category}
                  </Badge>
                </div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    Lihat Detail <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">Lihat Semua Produk</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
