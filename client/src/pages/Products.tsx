import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";
import faceShieldImg from "@assets/stock_images/medical_face_shield__0399bc52.jpg";
import implantImg from "@assets/stock_images/orthopedic_bone_impl_5e638388.jpg";
import { useState, useMemo } from "react";

const Products = () => {
  const { t } = useLanguageStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const allProducts = [
    {
      id: 1,
      title: t("Face Shield Medis High-Grade", "Medical Grade Face Shield"),
      category: t("Alat Pelindung Diri", "Personal Protective Equipment"),
      image: faceShieldImg,
      desc: t("Pelindung wajah standar medis dengan material polikarbonat tahan benturan dan anti-fog.", "Medical standard face shield with impact-resistant polycarbonate material and anti-fog."),
      specs: ["Polycarbonate 2mm", "Anti-fog", t("Dapat Digunakan Kembali", "Reusable")]
    },
    {
      id: 2,
      title: t("Bone Implant Titanium", "Titanium Bone Implant"),
      category: t("Implan Ortopedi", "Orthopedic Implant"),
      image: implantImg,
      desc: t("Implan tulang berbahan titanium alloy biokompatibel dengan struktur pori terkontrol.", "Titanium alloy biocompatible bone implant with controlled porous structure."),
      specs: ["Ti-6Al-4V ELI", t("Biokompatibel", "Biocompatible"), t("Berpori", "Porous")]
    },
    {
      id: 3,
      title: t("Kaki Palsu Bawah Lutut", "Transtibial Prosthesis"),
      category: t("Prostetik", "Prosthetics"),
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
      desc: t("Prostetik kaki dinamis dengan material komposit karbon ringan.", "Dynamic foot prosthesis with lightweight carbon composite material."),
      specs: ["Carbon Composite", t("Dinamis", "Dynamic"), t("Ringan", "Lightweight")]
    },
    {
      id: 4,
      title: t("Pembuka Pintu No-Touch", "No-Touch Door Opener"),
      category: t("Preventif", "Preventive"),
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
      desc: t("Alat bantu membuka pintu tanpa sentuhan tangan langsung.", "Helper tool for opening doors without direct hand contact."),
      specs: ["Ergonomic", t("Universal", "Universal"), t("Tahan Lama", "Durable")]
    },
    {
      id: 5,
      title: t("Ventilator Portable", "Portable Ventilator"),
      category: t("Alat Kesehatan", "Medical Devices"),
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop",
      desc: t("Ventilator darurat portable untuk penanganan pasien gangguan pernapasan.", "Portable emergency ventilator for handling patients with respiratory disorders."),
      specs: ["Portable", "Battery Powered", "Smart Control"]
    },
    {
      id: 6,
      title: t("Bone Screw System", "Bone Screw System"),
      category: t("Implan Ortopedi", "Orthopedic Implant"),
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      desc: t("Sistem sekrup tulang presisi tinggi untuk fiksasi fraktur.", "High-precision bone screw system for fracture fixation."),
      specs: ["Stainless Steel 316L", "High Strength", "Various Sizes"]
    }
  ];

  const categories = [
    t("Semua Kategori", "All Categories"),
    t("Implan Ortopedi", "Orthopedic Implants"),
    t("Prostetik", "Prosthetics"),
    t("Alat Pelindung Diri", "Personal Protective Equipment"),
    t("Alat Kesehatan", "Medical Devices")
  ];

  const handleCategoryChange = (category: string) => {
    if (category === t("Semua Kategori", "All Categories")) {
      setSelectedCategories([]);
    } else {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary/5 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">{t("Katalog Produk Inovasi", "Innovation Product Catalog")}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("Berbagai solusi alat kesehatan hasil riset CIMEDs UGM yang siap dihilirisasi dan digunakan.", "Various medical device solutions from CIMEDs UGM research ready to be commercialized and used.")}
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
                  <Input 
                    placeholder={t("Cari produk...", "Search products...")} 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> {t("Kategori", "Category")}
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={cat} 
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                        checked={cat === t("Semua Kategori", "All Categories") ? selectedCategories.length === 0 : selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      <label htmlFor={cat} className="text-sm text-gray-600 hover:text-primary cursor-pointer">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
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
                        <Button className="w-full" variant="outline">{t("Lihat Spesifikasi", "View Specifications")}</Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-gray-500">
                    <p>{t("Tidak ada produk yang sesuai dengan pencarian.", "No products match your search.")}</p>
                  </div>
                )}
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
