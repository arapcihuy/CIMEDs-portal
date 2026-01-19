import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Microscope, TestTube, CheckCircle2 } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";
import { useMemo } from "react";
import { useLocation } from "wouter";

const Services = () => {
  const { t, language } = useLanguageStore();
  const [, setLocation] = useLocation();
  
  const services = useMemo(() => [
    {
      icon: Microscope,
      title: t("Uji Material & Karakterisasi", "Material Testing & Characterization"),
      price: t("Mulai Rp 500.000", "Starting from IDR 500,000"),
      features: ["SEM-EDX Analysis", "XRD Analysis", t("Uji Kekasaran Permukaan", "Surface Roughness Test"), t("Uji Kekerasan Mikro", "Microhardness Test")]
    },
    {
      icon: TestTube,
      title: t("Uji Biokompatibilitas", "Biocompatibility Testing"),
      price: t("Mulai Rp 1.500.000", "Starting from IDR 1,500,000"),
      features: [t("Uji Sitotoksisitas (MTT Assay)", "Cytotoxicity Test (MTT Assay)"), t("Uji Hemolisis", "Hemolysis Test"), t("Uji Iritasi", "Irritation Test"), t("Uji Sensitisasi", "Sensitization Test")]
    },
    {
      icon: FlaskConical,
      title: t("Uji Mekanik Medis", "Medical Mechanical Testing"),
      price: t("Mulai Rp 750.000", "Starting from IDR 750,000"),
      features: [t("Uji Tarik & Kompresi", "Tensile & Compression Test"), t("Uji Kelelahan", "Fatigue Test"), t("Uji Torsi", "Torsion Test"), t("Uji Keausan & Friksi", "Wear & Friction Test")]
    }
  ], [language, t]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t("Layanan Laboratorium", "Laboratory Services")}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t("Fasilitas pengujian berstandar ISO untuk mendukung riset akademis dan kebutuhan industri alat kesehatan.", "ISO-standard testing facilities to support academic research and medical device industry needs.")}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <Card key={idx} className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-6">{service.price}</div>
                  <ul className="space-y-3 text-left mb-8 px-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => setLocation("/partnership")}
                  >
                    {t("Booking Jadwal", "Book Schedule")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Butuh Layanan Khusus?", "Need Special Services?")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {t("Kami juga melayani konsultasi desain eksperimen dan pembuatan prototipe alat kesehatan sesuai spesifikasi Anda.", "We also provide experiment design consultation and medical device prototype manufacturing according to your specifications.")}
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setLocation("/partnership")}
            >
              {t("Hubungi Lab Manager", "Contact Lab Manager")}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
