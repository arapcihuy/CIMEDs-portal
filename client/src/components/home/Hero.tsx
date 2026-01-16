import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Microscope, Award } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/stock_images/modern_biomedical_re_c16c1cf4.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Biomedical Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/90 text-blue-950 font-bold text-sm mb-6 shadow-lg shadow-orange-500/20 backdrop-blur-xs">
              Pusat Unggulan Iptek - Perguruan Tinggi
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Inovasi Alat <br/>
            <span className="text-secondary">Kesehatan Indonesia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
          >
            CIMEDs UGM mendedikasikan riset biomedis untuk kemandirian bangsa. 
            Mengembangkan teknologi implan, prostetik, dan alat kesehatan modern berstandar internasional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-full">
              Jelajahi Inovasi <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm">
              Hubungi Kami
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Microscope className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Riset Aktif</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Activity className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-300">Produk Hilirisasi</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Paten Terdaftar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
