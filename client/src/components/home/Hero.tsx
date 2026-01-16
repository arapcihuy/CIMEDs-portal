import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Microscope, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/languageStore";
import { Link } from "wouter";
import heroBg from "@assets/stock_images/modern_biomedical_re_c16c1cf4.jpg";

const Hero = () => {
  const { t } = useLanguageStore();
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Biomedical Lab" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/90 text-blue-950 font-bold text-sm mb-6 shadow-lg">
              {t("Pusat Unggulan Iptek - Perguruan Tinggi", "Center of Excellence - Higher Education")}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("Inovasi Alat", "Medical Device")} <br/>
            <span className="text-secondary">{t("Kesehatan Indonesia", "Innovation Indonesia")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            {t(
              "CIMEDs UGM mendedikasikan riset biomedis untuk kemandirian bangsa. Mengembangkan teknologi implan, prostetik, dan alat kesehatan modern.",
              "CIMEDs UGM dedicates biomedical research for national independence. Developing implant technology, prosthetics, and modern medical devices."
            )}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full w-full sm:w-auto">
                {t("Jelajahi Inovasi", "Explore Innovations")} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/partnership">
              <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm w-full sm:w-auto">
                {t("Hubungi Kami", "Contact Us")}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <Microscope className="w-6 h-6 text-secondary" />
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">50+</div>
                <div className="text-xs md:text-sm text-gray-300">{t("Riset", "Research")}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <Activity className="w-6 h-6 text-secondary" />
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">20+</div>
                <div className="text-xs md:text-sm text-gray-300">{t("Produk", "Products")}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <Award className="w-6 h-6 text-secondary" />
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">15+</div>
                <div className="text-xs md:text-sm text-gray-300">{t("Paten", "Patents")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
