import { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Future Vision Academy',
  shortName: 'ফিউচার ভিশন একাডেমি',
  url: 'https://futurevisionacademy.edu.bd',
  tagline: 'জ্ঞান, শৃঙ্খলা ও আধুনিক ইংরেজি চর্চার আদর্শ বিদ্যাপীঠ',
  description:
    'গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে মনোরম ও সম্পূর্ণ সিসিটিভি নিয়ন্ত্রিত নিরাপদ পরিবেশে প্লে থেকে ১০ম শ্রেণির আধুনিক শিক্ষা প্রতিষ্ঠান। বাংলা মাধ্যমের পাশাপাশি রয়েছে বিশেষ English Language Club। বর্তমানে প্লে থেকে ৮ম শ্রেণিতে নতুন শিক্ষাবর্ষে ভর্তি চলছে।',
  eiin: 'গফরগাঁও, ময়মনসিংহ',
  established: 2025,
  contact: {
    address: '৪২৪, পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা, ময়মনসিংহ, বাংলাদেশ',
    phone: '01713-503854',
    email: 'info@futurevisionacademy.edu.bd',
    hours: 'শনিবার – বৃহস্পতিবার: সকাল ৮:০০ – দুপুর ২:০০',
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61595188603461',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
};

export const googleMapsConfig = {
  placeName: 'Future Vision Academy',
  url: 'https://www.google.com/maps/place/Future+Vision+Academy/@24.4512248,90.5512077,18z/data=!4m6!3m5!1s0x3756610033613fb3:0xdf861c3aebdb9a0f!8m2!3d24.4512248!4d90.5512077!16s%2Fg%2F11zyj_5q4_',
  latitude: 24.4512248,
  longitude: 90.5512077,
};

export const mainNavItems: NavItem[] = [
  { label: 'হোম', href: '/' },
  { label: 'পরিচিতি ও শিক্ষক', href: '/about' },
  { label: 'শিক্ষা কার্যক্রম', href: '/academics' },
  { label: 'ইংলিশ ক্লাব', href: '/english-club', badge: 'Special' },
  { label: 'ভর্তি তথ্য', href: '/admissions', badge: '২০২৬' },
  { label: 'ক্যাম্পাস জীবন', href: '/campus-life' },
  { label: 'যোগাযোগ', href: '/contact' },
];

export const footerNavItems: NavItem[] = [
  { label: 'মূল পাতা (Home)', href: '/' },
  { label: 'আমাদের পরিচিতি (About Us)', href: '/about' },
  { label: 'শিক্ষা কার্যক্রম (Academics)', href: '/academics' },
  { label: 'ইংলিশ ক্লাব (English Club)', href: '/english-club' },
  { label: 'ভর্তি তথ্য ২০২৬ (Admissions)', href: '/admissions' },
  { label: 'ক্যাম্পাস গ্যালারি (Campus Life)', href: '/campus-life' },
  { label: 'যোগাযোগ ও মানচিত্র (Contact)', href: '/contact' },
];
