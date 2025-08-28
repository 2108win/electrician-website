"use client";
import { Phone } from "lucide-react";

function FormAppointment({ onSuccess }: { onSuccess?: () => void }) {
  return (
    <div className="flex flex-col gap-4 text-center p-6">
      <h3 className="text-xl font-bold text-gray-900">
        Cần Dịch Vụ Điện Ngay?
      </h3>
      <p className="text-gray-600">
        Thay vì điền form, hãy gọi trực tiếp để được hỗ trợ nhanh chóng!
      </p>
      
      <a
        href="tel:18007654321"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        <Phone size={20} className="inline mr-2" />
        GỌI NGAY: 1 (800) 765-4321
      </a>
      
      <p className="text-sm text-gray-500">
        ⚡ Phản hồi ngay lập tức - Không cần chờ email!
      </p>
    </div>
  );
}

export default FormAppointment;
