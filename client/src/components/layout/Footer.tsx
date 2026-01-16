import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";

const Footer = () => {
  const { t } = useLanguageStore();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center font-bold text-xl">
                C
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">CIMEDs UGM</h3>
                <p className="text-gray-400 text-xs">{t("Pusat Riset Biomedis", "Biomedical Research Center")}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("Pusat Unggulan Iptek Perguruan Tinggi (PUI-PT) Universitas Gadjah Mada yang berfokus pada inovasi alat kesehatan dan material medis untuk kemandirian bangsa.", "Center of Excellence - Higher Education of Universitas Gadjah Mada focusing on medical device innovation and medical materials for national independence.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">{t("Tautan Cepat", "Quick Links")}</h4>
            <div className="grid grid-cols-2 gap-0 -mx-2">
              <div className="px-1">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/"><a className="hover:text-white transition-colors">{t("Beranda", "Home")}</a></Link></li>
                  <li><Link href="/team"><a className="hover:text-white transition-colors">{t("Tim", "Team")}</a></Link></li>
                  <li><Link href="/products"><a className="hover:text-white transition-colors">{t("Produk", "Products")}</a></Link></li>
                  <li><Link href="/research"><a className="hover:text-white transition-colors">{t("Riset", "Research")}</a></Link></li>
                </ul>
              </div>
              <div className="px-1">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/publications"><a className="hover:text-white transition-colors">{t("Publikasi", "Publications")}</a></Link></li>
                  <li><Link href="/services"><a className="hover:text-white transition-colors">{t("Layanan", "Services")}</a></Link></li>
                  <li><Link href="/news"><a className="hover:text-white transition-colors">{t("Berita", "News")}</a></Link></li>
                  <li><Link href="/partnership"><a className="hover:text-white transition-colors">{t("Kerjasama", "Partnership")}</a></Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">{t("Hubungi Kami", "Contact Us")}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{t("Gedung Pusat PAU UGM, Jl. Teknika Utara, Pogung Kidul, Sinduadi, Mlati, Sleman, Yogyakarta 55281", "Central Building PAU UGM, Jl. Teknika Utara, Pogung Kidul, Sinduadi, Mlati, Sleman, Yogyakarta 55281")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:cimeds@ugm.ac.id" className="hover:text-white">cimeds@ugm.ac.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+62274123456" className="hover:text-white">+62 (274) 123456</a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">{t("Ikuti Kami", "Follow Us")}</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" title="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" title="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" title="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" title="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t("© 2024 CIMEDs Universitas Gadjah Mada. Hak cipta dilindungi.", "© 2024 CIMEDs Universitas Gadjah Mada. All rights reserved.")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">{t("Kebijakan Privasi", "Privacy Policy")}</a>
            <a href="#" className="hover:text-white">{t("Ketentuan Layanan", "Terms of Service")}</a>
            <a href="#" className="hover:text-white">{t("Peta Situs", "Sitemap")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
