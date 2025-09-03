"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyDetails, services } from "@/lib/constants";
import { Clock, Mail, MapPin, Phone, Send, Zap } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon Numarası",
      details: companyDetails.phone,
      description: "7/24 Acil Servis Mevcut",
    },
    {
      icon: Mail,
      title: "E-posta Adresi",
      details: companyDetails.email,
      description: "24 saat içinde yanıtlıyoruz",
    },
    {
      icon: MapPin,
      title: "Konumumuz",
      details: companyDetails.address,
      description: `${companyDetails.city}, ${companyDetails.state} ${companyDetails.zip}`,
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: companyDetails.hours,
      description: "Acil servis 7/24 mevcut",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            İletişim
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Bizimle İletişime Geçin
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Elektrik projenize başlamaya hazır mısınız? Ücretsiz keşif veya acil
            servis için bugün bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <div className="mb-6 flex items-center space-x-3">
                <Zap className="text-yellow-400" size={32} />
                <div>
                  <h4 className="text-xl font-bold">{companyDetails.name}</h4>
                  <p className="text-blue-200">Profesyonel Elektrikçiler</p>
                </div>
              </div>
              <p className="mb-6 text-blue-100">{companyDetails.description}</p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500">
                      <info.icon className="text-gray-900" size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{info.title}</h5>
                      <p className="font-medium text-blue-100">
                        {info.details}
                      </p>
                      <p className="text-sm text-blue-200">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2 text-red-800">
                  <Phone className="text-red-600" size={24} />
                  <span>Acil Servis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-red-700">
                  Normal çalışma saatleri dışında acil bir durum varsa, hemen
                  bizi arayın
                </p>
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, "")}`}
                  className="block text-2xl font-bold text-red-600 transition-colors duration-200 hover:text-red-800"
                >
                  {companyDetails.phone}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-gray-900">
                  Servis Talep Edin veya Teklif Alın
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Ad Soyad *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ahmet Yılmaz"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        E-posta Adresi *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ahmet@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Telefon Numarası *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0532 123 45 67"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Hizmet Türü
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Hizmet seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                        <option value="acil-servis">Acil Servis</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Proje Detayları *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Lütfen elektrik ihtiyaçlarınızı, özel gereksinimlerinizi veya endişelerinizi açıklayın..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground w-full"
                  >
                    <Send size={16} className="mr-2" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps Integration */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-gray-900">
                  Konumumuz
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 w-full overflow-hidden rounded-b-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.665!2d29.1174!3d40.9671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzAxLjciTiAyOcKwMDcnMDIuNyJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BUEM Elektrik Konum"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
