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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">{t("Asisten Peneliti", "Research Assistants")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-3 overflow-hidden">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} 
                      alt="Assistant" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900">{t("Nama Peneliti", "Researcher")} {i}</h4>
                  <p className="text-xs text-gray-500">{t("Asisten Peneliti", "Assistant Researcher")}</p>
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
