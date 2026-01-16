import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
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
                <p className="text-gray-400 text-xs">Pusat Riset Biomedis</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pusat Unggulan Iptek Perguruan Tinggi (PUI-PT) Universitas Gadjah Mada yang berfokus pada inovasi alat kesehatan dan material medis untuk kemandirian bangsa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about"><a className="hover:text-white transition-colors">Tentang Kami</a></Link></li>
              <li><Link href="/team"><a className="hover:text-white transition-colors">Tim Peneliti</a></Link></li>
              <li><Link href="/products"><a className="hover:text-white transition-colors">Katalog Produk</a></Link></li>
              <li><Link href="/jmdt"><a className="hover:text-white transition-colors">Jurnal JMDT</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition-colors">Layanan Lab</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Gedung Pusat PAU UGM, Jl. Teknika Utara, Pogung Kidul, Sinduadi, Mlati, Sleman, Yogyakarta 55281</span>
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
            <h4 className="font-bold text-lg mb-6 text-secondary">Ikuti Kami</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 CIMEDs Universitas Gadjah Mada. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
