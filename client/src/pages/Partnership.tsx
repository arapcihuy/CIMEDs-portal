import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Building2, Handshake, University } from "lucide-react";
import { useLanguageStore } from "@/lib/languageStore";

const formSchema = z.object({
  name: z.string().min(2, "Nama harus diisi"),
  organization: z.string().min(2, "Nama instansi harus diisi"),
  email: z.string().email("Email tidak valid"),
  type: z.string().min(1, "Pilih jenis kerjasama"),
  message: z.string().min(10, "Pesan harus lebih dari 10 karakter"),
});

const Partnership = () => {
  const { toast } = useToast();
  const { t } = useLanguageStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      type: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t("Permintaan Terkirim", "Request Sent"),
      description: t("Tim kami akan segera menghubungi Anda untuk diskusi lebih lanjut.", "Our team will contact you shortly for further discussion."),
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t("Kerjasama & Kolaborasi", "Partnership & Collaboration")}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t("Bergabunglah dengan ekosistem inovasi kami. Kami terbuka untuk kolaborasi riset, hilirisasi produk, dan layanan pengujian.", "Join our innovation ecosystem. We are open to research collaboration, product commercialization, and testing services.")}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("Skema Kerjasama", "Partnership Schemes")}</h2>
              <div className="grid grid-cols-1 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg h-fit text-primary">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{t("Hilirisasi Industri", "Industrial Commercialization")}</h3>
                      <p className="text-gray-600 text-sm">
                        {t("Lisensi paten dan kerjasama produksi massal alat kesehatan hasil riset CIMEDs dengan mitra industri manufaktur.", "Patent licensing and mass production collaboration of CIMEDs research medical devices with manufacturing industry partners.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg h-fit text-orange-600">
                      <University className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{t("Riset Akademik", "Academic Research")}</h3>
                      <p className="text-gray-600 text-sm">
                        {t("Kolaborasi penelitian bersama universitas dalam dan luar negeri, pertukaran peneliti, dan publikasi bersama.", "Research collaboration with domestic and international universities, researcher exchange, and joint publications.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-3 bg-green-100 rounded-lg h-fit text-green-600">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{t("Pengujian & Konsultasi", "Testing & Consultation")}</h3>
                      <p className="text-gray-600 text-sm">
                        {t("Layanan uji mekanik, biokompatibilitas material, dan konsultasi desain alat kesehatan.", "Mechanical testing services, material biocompatibility, and medical device design consultation.")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
              <h3 className="text-xl font-bold mb-6">{t("Ajukan Penawaran Kerjasama", "Submit Partnership Proposal")}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Nama Lengkap", "Full Name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("Nama Anda", "Your Name")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Email Institusi", "Institution Email")}</FormLabel>
                        <FormControl>
                          <Input placeholder="email@instansi.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Nama Instansi / Perusahaan", "Institution / Company Name")}</FormLabel>
                        <FormControl>
                          <Input placeholder="Universitas Gadjah Mada" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Pesan / Bentuk Kerjasama", "Message / Partnership Type")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("Jelaskan secara singkat bentuk kerjasama yang diinginkan...", "Briefly explain the type of partnership you want...")} 
                            className="resize-none h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-lg">{t("Kirim Penawaran", "Send Proposal")}</Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partnership;
