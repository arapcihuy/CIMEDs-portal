import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamGrid from "@/components/sections/TeamGrid";
import { useLanguageStore } from "@/lib/languageStore";

const Team = () => {
  const { t } = useLanguageStore();
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("Tim Peneliti", "Research Team")}</h1>
            <p className="text-xl text-gray-600">
              {t("Para ahli berdedikasi yang menggabungkan keahlian medis dan teknik untuk menciptakan inovasi kesehatan masa depan.", "Dedicated experts combining medical and engineering expertise to create future healthcare innovations.")}
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">{t("Peneliti Utama", "Principal Investigators")}</h2>
            <TeamGrid />
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">{t("Mahasiswa S3", "PhD Students")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=PhD${i}`} 
                      alt="PhD Student" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900">{t("Nama Mahasiswa", "Student Name")}</h4>
                  <p className="text-xs text-secondary">{t("Topik Riset", "Research Topic")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">{t("Staf Administrasi", "Administrative Staff")}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="text-center group">
                   <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Admin${i}`} 
                      alt="Admin" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900">{t("Nama Staf", "Staff Name")}</h4>
                  <p className="text-xs text-gray-500">{t("Administrasi", "Administration")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
