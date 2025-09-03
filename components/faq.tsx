import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { callToAction, faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function FAQ() {
  const tel = callToAction.telephone;

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
            <HelpCircle className="text-primary" size={32} />
          </div>
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            SSS
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Sık Sorulan Sorular
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Elektrik hizmetlerimiz, acil durum müdahalesi ve bizimle çalışırken
            neler beklemeniz gerektiği konularında sık sorulan soruların
            yanıtlarını alın.
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
            <h4 className="mb-4 text-2xl font-bold">
              Hala Sorularınız Var mı?
            </h4>
            <p className="text-primary-foreground mb-6">
              Aradığınız cevabı bulamıyor musunuz? Bizimle doğrudan iletişime
              geçmekten çekinmeyin.
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
              {/* <DialogAppointment
                buttonText="Send a Message"
                className="border-secondary"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
