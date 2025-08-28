"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Zap } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "1 (800) 765-4321",
      description: "24/7 Emergency Service Available",
    },
    // Removed email contact info to focus on phone calls
    {
      icon: MapPin,
      title: "Our Location",
      details: "8494 Signal Hill Road",
      description: "Manassas, VA, 20110",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri 08:00 AM - 05:00 PM",
      description: "Emergency service available 24/7",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            Liên Hệ Ngay
          </h2>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Dịch Vụ Điện Dân Dụng - Thợ Điện Tại Manassas, VA
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Cần sửa chữa điện khẩn cấp? Gọi ngay thợ điện chuyên nghiệp 24/7! 
            Dịch vụ điện dân dụng uy tín tại Manassas, Virginia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <div className="mb-6 flex items-center space-x-3">
                <Zap className="text-primary" size={32} />
                <div>
                  <h4 className="text-xl font-bold">ElectricPro</h4>
                  <p className="text-primary-foreground">
                    Professional Electricians
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground mb-6">
                Our experienced electricians are highly trained in all aspects
                of electrical service, from office lighting and security systems
                to emergency repair.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                      <info.icon
                        className="text-primary-foreground"
                        size={20}
                      />
                    </div>
                    <div>
                      <h5 className="text-primary-foreground font-semibold">
                        {info.title}
                      </h5>
                      <p className="text-primary-foreground font-medium">
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
                  <span>Emergency Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-red-700">
                  If this is an emergency outside of normal business hours, call
                  us immediately
                </p>
                <a
                  href="tel:18007654321"
                  className="block text-2xl font-bold text-red-600 transition-colors duration-200 hover:text-red-800"
                >
                  1 (800) 765-4321
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Call Now Section - Replacing Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Cần Dịch Vụ Điện Ngay?
                </CardTitle>
                <p className="text-xl text-gray-600 mt-2">
                  Gọi Ngay - Thợ Điện Chuyên Nghiệp 24/7
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Dịch Vụ Điện Dân Dụng - Sửa Chữa Điện Tại Manassas, VA
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    ✓ Thợ điện có giấy phép &nbsp;&nbsp; ✓ Dịch vụ khẩn cấp 24/7 &nbsp;&nbsp; ✓ Bảo hành 100%
                  </p>
                  
                  {/* Large Call Now Button */}
                  <a
                    href="tel:18007654321"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Phone size={28} className="inline mr-3" />
                    GỌI NGAY: 1 (800) 765-4321
                  </a>
                  
                  <div className="mt-4 text-sm text-gray-600">
                    <p>Nhấn để gọi trực tiếp - Không cần email!</p>
                  </div>
                </div>
                
                {/* Service Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Zap className="text-blue-600 mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-900">Sửa Chữa Điện</h4>
                    <p className="text-sm text-gray-600">Khắc phục sự cố nhanh chóng</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Phone className="text-green-600 mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-900">Phản Hồi Nhanh</h4>
                    <p className="text-sm text-gray-600">Gọi là có ngay</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Clock className="text-purple-600 mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-gray-900">24/7 Khẩn Cấp</h4>
                    <p className="text-sm text-gray-600">Luôn sẵn sàng hỗ trợ</p>
                  </div>
                </div>
                
                {/* Secondary Call Button */}
                <div className="pt-4">
                  <a
                    href="tel:18007654321"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <Phone size={20} className="inline mr-2" />
                    Gọi Tư Vấn Miễn Phí
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
