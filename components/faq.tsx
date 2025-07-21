import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { callToAction } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import DialogAppointment from "./ui/dialog-appointment";

export function FAQ() {
  const tel = callToAction.telephone;
  const faqs = [
    {
      question: "What types of electrical services do you provide?",
      answer:
        "We provide a comprehensive range of electrical services including residential, commercial, and industrial electrical work. This includes installations, repairs, maintenance, emergency services, panel upgrades, wiring, lighting, and electrical inspections.",
    },
    {
      question: "Do you offer 24/7 emergency electrical services?",
      answer:
        "Yes, we provide 24/7 emergency electrical services. Electrical emergencies can happen at any time, and we understand the urgency. Call us at 1 (800) 765-4321 for immediate assistance.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer:
        "Absolutely! All of our electricians are fully licensed, bonded, and insured. We maintain all necessary certifications and stay up-to-date with local electrical codes and regulations to ensure safe and compliant work.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free estimates for all electrical work. Our experienced electricians will assess your needs and provide you with a detailed, no-obligation estimate before any work begins.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the greater metropolitan area and surrounding communities. Contact us to confirm if we provide services in your specific location. We're always looking to expand our service area to help more customers.",
    },
    {
      question: "How quickly can you respond to service calls?",
      answer:
        "For emergency calls, we typically respond within 1-2 hours. For scheduled appointments, we can usually accommodate same-day or next-day service depending on availability and the scope of work.",
    },
    {
      question: "Do you offer warranties on your electrical work?",
      answer:
        "Yes, we stand behind our work with comprehensive warranties. All of our electrical work comes with a satisfaction guarantee, and we provide specific warranties on parts and labor depending on the type of service performed.",
    },
    {
      question: "Can you help with electrical code compliance and permits?",
      answer:
        "Absolutely! We handle all necessary permits and ensure that all work meets local electrical codes and regulations. We'll take care of the paperwork and inspections required for your project.",
    },
    {
      question: "What should I do in case of an electrical emergency?",
      answer:
        "In case of an electrical emergency, first ensure your safety by turning off power at the main breaker if possible. Do not touch any exposed wires or standing water near electrical sources. Call us immediately at 1 (800) 765-4321 for emergency assistance.",
    },
    {
      question: "Do you offer maintenance plans for electrical systems?",
      answer:
        "Yes, we offer comprehensive maintenance plans for both residential and commercial customers. Regular maintenance helps prevent electrical problems, ensures safety, and can extend the life of your electrical systems.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
            <HelpCircle className="text-primary" size={32} />
          </div>
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Get answers to common questions about our electrical services,
            emergency response, and what to expect when you work with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-gray-200 bg-white px-6"
              >
                <AccordionTrigger className="hover:text-primary py-4 text-left font-semibold text-gray-900 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8">
            <h4 className="mb-4 text-2xl font-bold">Still Have Questions?</h4>
            <p className="text-primary-foreground mb-6">
              Can't find the answer you're looking for? Don't hesitate to
              contact us directly.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`tel:${tel}`}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "xl",
                  }),
                  "hover:bg-background hover:text-primary text-secondary-foreground hover:border-primary border-1 border-transparent",
                )}
              >
                <Phone size={16} />
                {tel}
              </Link>
              <DialogAppointment
                buttonText="Send a Message"
                className="border-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
