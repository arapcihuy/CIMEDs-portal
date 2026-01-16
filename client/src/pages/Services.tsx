import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Microscope, TestTube2, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Uji Material & Karakterisasi",
    price: "Mulai Rp 500.000",
    features: ["SEM-EDX Analysis", "XRD Analysis", "Surface Roughness Test", "Microhardness Test"]
  },
  {
    icon: TestTube2,
    title: "Uji Biokompatibilitas",
    price: "Mulai Rp 1.500.000",
    features: ["Cytotoxicity Test (MTT Assay)", "Hemolysis Test", "Irritation Test", "Sensitization Test"]
  },
  {
    icon: FlaskConical,
    title: "Uji Mekanik Medis",
    price: "Mulai Rp 750.000",
    features: ["Tensile & Compression Test", "Fatigue Test", "Torsion Test", "Wear & Friction Test"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Layanan Laboratorium</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Fasilitas pengujian berstandar ISO untuk mendukung riset akademis dan kebutuhan industri alat kesehatan.
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
                  <Button className="w-full">Booking Jadwal</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Butuh Layanan Khusus?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Kami juga melayani konsultasi desain eksperimen dan pembuatan prototipe alat kesehatan sesuai spesifikasi Anda.
            </p>
            <Button variant="outline" size="lg">Hubungi Lab Manager</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
