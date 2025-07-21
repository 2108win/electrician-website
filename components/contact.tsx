"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    alert("Thank you for your message! We'll get back to you soon.");
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
      title: "Phone Number",
      details: "1 (800) 765-4321",
      description: "24/7 Emergency Service Available",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@electricpro.com",
      description: "We'll respond within 24 hours",
    },
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
            Contact Us
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Get In Touch
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ready to get started on your electrical project? Contact us today
            for a free estimate or emergency service.
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-gray-900">
                  Request Service or Get a Quote
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
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
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
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Service Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="electrical-repair">
                          Electrical Repair
                        </option>
                        <option value="installation">Installation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="inspection">
                          Electrical Inspection
                        </option>
                        <option value="upgrade">Panel Upgrade</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your electrical needs, including any specific requirements or concerns..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground w-full"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
