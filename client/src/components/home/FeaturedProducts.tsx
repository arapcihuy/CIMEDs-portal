import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/lib/languageStore";
import faceShieldImg from "@assets/stock_images/medical_face_shield__0399bc52.jpg";
import implantImg from "@assets/stock_images/orthopedic_bone_impl_5e638388.jpg";

const FeaturedProducts = () => {
  const { t } = useLanguageStore();

  const products = [
    {
      id: 1,
      title: t("Face Shield Medis High-Grade", "Medical Grade Face Shield"),
      category: t("Alat Pelindung Diri", "Personal Protective Equipment"),
      image: faceShieldImg,
      desc: t("Pelindung wajah standar medis dengan material polikarbonat tahan benturan.", "Medical standard face shield with impact-resistant polycarbonate material."),
      specs: ["Polycarbonate 2mm", "Anti-fog", "Adjustable"]
    },
    {
      id: 2,
      title: t("Bone Implant Titanium", "Titanium Bone Implant"),
      category: t("Implan Ortopedi", "Orthopedic Implant"),
      image: implantImg,
      desc: t("Implan tulang berbahan titanium alloy biokompatibel dengan struktur pori terkontrol.", "Titanium alloy biocompatible bone implant with controlled porous structure."),
      specs: ["Ti-6Al-4V ELI", "Porous", "Customizable"]
    },
    {
      id: 3,
      title: t("Kaki Palsu Bawah Lutut", "Transtibial Prosthesis"),
      category: t("Prostetik", "Prosthetics"),
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
      desc: t("Prostetik kaki dinamis dengan material komposit karbon ringan.", "Dynamic foot prosthesis with lightweight carbon composite material."),
      specs: ["Carbon composite", "Dynamic", "Lightweight"]
    },
    {
      id: 4,
      title: t("Pembuka Pintu No-Touch", "No-Touch Door Opener"),
      category: t("Preventif", "Preventive"),
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
      desc: t("Alat bantu membuka pintu tanpa sentuhan tangan langsung.", "Helper tool for opening doors without direct hand contact."),
      specs: ["Ergonomic", "Universal", "Durable"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("Inovasi Unggulan", "Key Innovations")}</h2>
            <p className="text-gray-600 max-w-xl">
              {t("Produk hasil riset yang telah dihilirisasi dan digunakan oleh masyarakat.", "Research products that have been downstreamed and used by the community.")}
            </p>
          </div>
          <a href="/products" className="flex items-center text-primary font-semibold hover:text-blue-700 transition-colors">
            {t("Lihat Semua Produk", "View All Products")} <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 text-primary backdrop-blur-sm">
                    {product.category}
                  </Badge>
                </div>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
