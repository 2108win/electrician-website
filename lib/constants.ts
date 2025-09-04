import {
  AirVent,
  Cctv,
  Cpu,
  Facebook,
  Heater,
  Instagram,
  Lightbulb,
  Linkedin,
  Twitter,
} from "lucide-react";
import { NavType, ServiceType } from "./types";

export const navigation: NavType[] = [
  { name: "Ana Sayfa", href: "#home" },
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#services" },
  { name: "Galeri", href: "#gallery" },
  { name: "SSS", href: "#faq" },
  { name: "İletişim", href: "#contact" },
];

export const serviceList: ServiceType[] = [
  {
    name: "Elektrik Hizmetleri",
    description:
      "Tam kapsamlı elektrik tasarımı ve montaj hizmetleri sunuyoruz.",
    icon: Lightbulb,
    image: "/images/cctv.jpg",
  },
  {
    name: "Isıtma Sistemleri",
    description:
      "Enerji verimli elektrikli ısıtma ürünleri ve profesyonel montaj sağlıyoruz.",
    icon: Heater,
    image: "/images/air.jpg",
  },
  {
    name: "Klima ve Havalandırma",
    description: "Doğru klima seçimi ve montajı ile konforlu ortam sağlıyoruz.",
    icon: AirVent,
    image: "/images/air.jpg",
  },
  {
    name: "Güvenlik Sistemleri",
    description:
      "Ev ve iş yerleriniz için kamera ve güvenlik çözümleri sunuyoruz.",
    icon: Cctv,
    image: "/images/cctv.jpg",
  },
  {
    name: "Pano Değişimleri",
    description:
      "Elektrik panoları sisteminizin kalbidir; güvenli ve modern çözümler sağlıyoruz.",
    icon: Cpu,
    image: "/images/air.jpg",
  },
];

export const heroSlider = [
  {
    title: "Her Zaman Güvende",
    description: "Elektrikte Uzman Çözümler",
    image: "/images/mainslide-01.jpg",
  },
  {
    title: "Müşteri Memnuniyeti Önceliğimizdir",
    description: "Aileniz İçin En İyi Hizmetler",
    image: "/images/mainslide-02.jpg",
  },
  {
    title: "Hayatınızı Aydınlatıyoruz",
    description: "Bizim İçin Hiçbir Şey İmkânsız Değil",
    image: "/images/mainslide-03.jpg",
  },
];

export const services = {
  title: "7/24 Elektrikçi Hizmetleri – Güvenli ve Etkin",
  titleDescription: "Tam kapsamlı elektrik yüklenici firmasıyız",
  items: serviceList,
};

export const projects = [
  {
    id: 1,
    title: "Modern Ofis Aydınlatması",
    category: "Ofisler",
    image: "/images/job-1.jpg",
    description:
      "500 kişilik bir ofis binası için komple elektrik tesisatı kurulumu",
  },
  {
    id: 2,
    title: "Konut Yeniden Kablolama",
    category: "Konutlar",
    image: "/images/job-2.jpg",
    description: "Akıllı ev entegrasyonu ile tam kapsamlı elektrik yenileme",
  },
  {
    id: 3,
    title: "Endüstriyel Güç Sistemleri",
    category: "Sanayi Tesisleri",
    image: "/images/job-3.jpg",
    description: "Üretim tesisleri için yüksek voltajlı elektrik sistemleri",
  },
  {
    id: 4,
    title: "Mağaza Elektrik Kurulumu",
    category: "Perakende Alanları",
    image: "/images/job-4.jpg",
    description: "Perakende zinciri için özel aydınlatma ve elektrik çözümleri",
  },
  {
    id: 5,
    title: "Acil Jeneratör Montajı",
    category: "Konutlar",
    image: "/images/job-5.jpg",
    description: "Konut kompleksleri için yedek enerji çözümleri",
  },
  {
    id: 6,
    title: "Veri Merkezi Elektrik Sistemleri",
    category: "Sanayi Tesisleri",
    image: "/images/job-2.jpg",
    description: "Veri merkezleri için kritik enerji altyapısı kurulumu",
  },
  {
    id: 7,
    title: "Restoran Mutfak Kurulumu",
    category: "Perakende Alanları",
    image: "/images/job-3.jpg",
    description: "Ticari mutfaklar için profesyonel elektrik montajı",
  },
  {
    id: 8,
    title: "Akıllı Ev Otomasyonu",
    category: "Konutlar",
    image: "/images/job-4.jpg",
    description: "Tam kapsamlı akıllı ev elektrik entegrasyonu",
  },
];

export const reviewList = [
  {
    title: "Müşteri Yorumlarımız",
    main: "Hızlı ve Güvenilir Hizmet",
    description:
      "Gece yarısı elektrik arızası için aradık ve ekip yarım saat içinde geldi. Sorunumuzu hızlıca çözdüler, gerçekten profesyonel bir yaklaşım.",
    client: "Ahmet Y. - Sultanbeyli",
    image: "/images/review-avatar.jpg",
  },
  {
    title: "Müşteri Yorumlarımız",
    main: "Kaliteli İşçilik",
    description:
      "Yeni evimizin tüm elektrik tesisatını BUEM Elektrik yaptı. Hem malzeme kalitesi hem de işçilik çok iyiydi. Hiçbir sorun yaşamadık.",
    client: "Melis & Onur K. - Pendik",
    image: "/images/review-avatar.jpg",
  },
  {
    title: "Müşteri Yorumlarımız",
    main: "7/24 Destek Harika",
    description:
      "Pazar günü ani bir kesinti yaşadık, aradığımızda hemen dönüş yaptılar. Böyle bir hizmeti her zaman bulmak kolay değil.",
    client: "Zeynep T. - Kurtköy",
    image: "/images/review-avatar.jpg",
  },
  {
    title: "Müşteri Yorumlarımız",
    main: "Müşteri Memnuniyeti Öncelikli",
    description:
      "Ofisimiz için aydınlatma sistemleri kuruldu. Ekip her detayı bizimle paylaştı ve isteklerimize göre çözüm üretti. Sonuçtan çok memnun kaldık.",
    client: "Ali & Seda B. - İstanbul",
    image: "/images/review-avatar.jpg",
  },
];

export const reviews = {
  title: "İstatistiklerimiz",
  titleDescription: "Önemli Bazı Rakamlar",
  statistics: [
    { value: "5000+", label: "Konut Projeleri" },
    { value: "1500+", label: "Ticari Projeler" },
    { value: "1000+", label: "Sanayi Projeleri" },
  ],
  reviewList: reviewList,
};

export const callToAction = {
  telephone: "+90 537 258 56 94",
};

export const companyDetails = {
  tag: "@buem.elektrik",
  name: "BUEM Elektrik",
  address: "Sultanbeyli Kurtköy Pendik ve tüm İstanbul Anadolu bölgesi",
  city: "Marmara",
  state: "İstanbul",
  zip: "34912",
  email: "iletisim@buemelektrik.com",
  phone: "+90 537 258 56 94",
  hours:
    "Haftanın her günü 07:00 – 23:59 saatleri arasında hizmet vermekteyiz. Ayrıca tüm işleriniz için 7/24 aktif destek sağlamaktayız.",
  description:
    "BUEM Elektrik, İstanbul Anadolu bölgesinde güvenilir ve profesyonel elektrik hizmetleri sunmaktadır. Uzman ekibimizle her türlü elektrik ihtiyacınızı karşılamak için buradayız.",
  mainService: "7/24 Acil Durum Hizmeti",
  copyright: "© 2025 BUEM Elektrik. Tüm Hakları Saklıdır.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39885.55676561088!2d29.25771499959356!3d40.96836062115177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad05ff4c5d567%3A0xb011010aa2dc68c0!2sSultanbeyli%2C%20%C4%B0stanbul!5e1!3m2!1str!2str!4v1756980418627!5m2!1str!2str",
};

export const faqs = [
  {
    question: "Acil elektrik arızası için ne kadar sürede geliyorsunuz?",
    answer:
      "İstanbul Anadolu Yakası’nda acil durum çağrılarınıza genellikle 30–45 dakika içinde ulaşmaktayız. Trafik ve lokasyona göre süre değişiklik gösterebilir.",
  },
  {
    question: "7/24 elektrikçi hizmetiniz gerçekten her gün geçerli mi?",
    answer:
      "Evet. Haftanın 7 günü, günün 24 saati acil elektrik arızaları için aktif destek sağlıyoruz. Mesai saatleri dışında da bize ulaşabilirsiniz.",
  },
  {
    question: "Elektrik panosu değişimi ne kadar sürer?",
    answer:
      "Pano değişimi yapılacak sistemin büyüklüğüne göre değişmekle birlikte ortalama 2–4 saat arasında tamamlanmaktadır. Tüm işlemler güvenlik standartlarına uygun yapılır.",
  },
  {
    question: "Akıllı ev otomasyonu hizmetiniz hangi sistemleri kapsıyor?",
    answer:
      "Aydınlatma, güvenlik kameraları, ısıtma-soğutma sistemleri ve enerji yönetimi dahil olmak üzere tüm akıllı ev sistemlerini entegre ediyoruz.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Sultanbeyli, Kurtköy, Pendik başta olmak üzere tüm İstanbul Anadolu Yakası’nda elektrik arıza, bakım ve montaj hizmetleri sunuyoruz.",
  },
  {
    question: "Hizmetleriniz garantili mi?",
    answer:
      "Evet. Yaptığımız tüm işler ve kullandığımız malzemeler garantilidir. Her işlem sonrası müşterilerimize yazılı garanti veriyoruz.",
  },
  {
    question: "Ödeme seçenekleriniz nelerdir?",
    answer:
      "Nakit, kredi kartı ve banka havalesi ile ödeme kabul ediyoruz. Kurumsal müşterilerimiz için faturalı hizmet sunmaktayız.",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
];
