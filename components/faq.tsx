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

export function FAQ() {
  const tel = callToAction.telephone;
  const faqs = [
    {
      question: "Bạn cung cấp những dịch vụ điện nào? / What types of electrical services do you provide?",
      answer:
        "Chúng tôi cung cấp đầy đủ các dịch vụ điện dân dụng bao gồm: sửa chữa điện, lắp đặt điện, nâng cấp tủ điện, kiểm tra điện, và dịch vụ khẩn cấp 24/7. We provide comprehensive electrical services including installations, repairs, maintenance, emergency services, panel upgrades, wiring, lighting, and inspections.",
    },
    {
      question: "Có dịch vụ điện khẩn cấp 24/7 không? / Do you offer 24/7 emergency electrical services?",
      answer:
        "Có, chúng tôi có dịch vụ điện khẩn cấp 24/7. Sự cố điện có thể xảy ra bất cứ lúc nào. Gọi ngay 1 (800) 765-4321 để được hỗ trợ ngay lập tức. Yes, we provide 24/7 emergency electrical services for immediate assistance.",
    },
    {
      question: "Thợ điện có giấy phép và bảo hiểm không? / Are your electricians licensed and insured?",
      answer:
        "Hoàn toàn có! Tất cả thợ điện của chúng tôi đều có đầy đủ giấy phép, bảo hiểm. Chúng tôi tuân thủ nghiêm ngặt các quy định về an toàn điện. All of our electricians are fully licensed, bonded, and insured with up-to-date certifications.",
    },
    {
      question: "Có tư vấn miễn phí không? / Do you provide free estimates?",
      answer:
        "Có, chúng tôi cung cấp tư vấn miễn phí cho tất cả công việc điện. Thợ điện giàu kinh nghiệm sẽ đánh giá nhu cầu và đưa ra báo giá chi tiết, không ràng buộc. Yes, we provide free estimates for all electrical work with detailed, no-obligation quotes.",
    },
    {
      question: "Phục vụ khu vực nào? / What areas do you serve?",
      answer:
        "Chúng tôi phục vụ chính tại Manassas, VA và các khu vực xung quanh. Liên hệ để xác nhận chúng tôi có phục vụ tại địa điểm cụ thể của bạn. We serve Manassas, VA and surrounding communities. Contact us to confirm service in your specific location.",
    },
    {
      question: "Phản hồi nhanh như thế nào? / How quickly can you respond to service calls?",
      answer:
        "Đối với cuộc gọi khẩn cấp, chúng tôi thường phản hồi trong vòng 1-2 giờ. Đối với lịch hẹn, chúng tôi có thể sắp xếp trong ngày hoặc ngày hôm sau. For emergency calls, we typically respond within 1-2 hours. For scheduled appointments, same-day or next-day service is usually available.",
    },
    {
      question: "Có bảo hành công việc điện không? / Do you offer warranties on your electrical work?",
      answer:
        "Có, chúng tôi cam kết chất lượng với bảo hành toàn diện. Tất cả công việc điện đều có bảo đảm hài lòng và bảo hành cụ thể cho linh kiện và nhân công. Yes, we stand behind our work with comprehensive warranties and satisfaction guarantee on all electrical services.",
    },
    {
      question: "Can you help with electrical code compliance and permits?",
      answer:
        "Absolutely! We handle all necessary permits and ensure that all work meets local electrical codes and regulations. We'll take care of the paperwork and inspections required for your project.",
    },
    {
      question: "Trường hợp khẩn cấp điện làm gì? / What should I do in case of an electrical emergency?",
      answer:
        "Trong trường hợp khẩn cấp về điện, trước tiên hãy đảm bảo an toàn bằng cách tắt điện tại cầu dao chính nếu có thể. Không chạm vào dây điện trần hoặc nước đọng gần nguồn điện. Gọi ngay cho chúng tôi 1 (800) 765-4321. In case of electrical emergency, ensure safety by turning off power at main breaker, avoid exposed wires or water near electrical sources, and call us immediately.",
    },
    {
      question: "Có gói bảo trì hệ thống điện không? / Do you offer maintenance plans for electrical systems?",
      answer:
        "Có, chúng tôi cung cấp gói bảo trì toàn diện cho cả khách hàng dân dụng và thương mại. Bảo trì định kỳ giúp ngăn ngừa sự cố điện, đảm bảo an toàn và kéo dài tuổi thọ hệ thống điện. Yes, we offer comprehensive maintenance plans for both residential and commercial customers to prevent problems and ensure safety.",
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
            Câu Hỏi Thường Gặp
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Câu Hỏi Thường Gặp - Dịch Vụ Điện Dân Dụng
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Tìm hiểu thêm về dịch vụ điện của chúng tôi, phản hồi khẩn cấp và những gì 
            bạn có thể mong đợi khi làm việc với thợ điện chuyên nghiệp tại Manassas, VA.
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
            <h4 className="mb-4 text-2xl font-bold">Vẫn Có Thắc Mắc?</h4>
            <p className="text-primary-foreground mb-6">
              Không tìm thấy câu trả lời bạn cần? Đừng ngần ngại gọi trực tiếp cho chúng tôi. 
              Chúng tôi luôn sẵn sàng hỗ trợ!
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
              <Link
                href={`tel:${tel}`}
                className={cn(
                  buttonVariants({
                    size: "xl",
                  }),
                  "bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700",
                )}
              >
                <Phone size={16} />
                Gọi Tư Vấn Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
