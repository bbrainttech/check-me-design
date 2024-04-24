import { LucideProps } from "lucide-react";
import {
  img_BreastCancerWarriors,
  img_client1,
  img_client2,
  img_MedicalSpecialist,
  img_phone_screen,
  img_user1,
  img_user2,
} from "~/assets/images";
import Icons from "~/components/Icons";

type NavLinkType = {
  title: string;
  href: string;
  hasDropDown?: boolean;
}[];

export const NAV_LINKS = [
  { title: "home", href: "/" },
  { title: "about us", href: "/about" },
  { title: "services", hasDropDown: true, href: "/s" },
  { title: "blog", href: "/blog" },
  { title: "careers", href: "/careers" },
] as const satisfies NavLinkType;

export type Languages = "English" | "French" | "Kinyarwanda" | "Swahili";

export const LANGUAGES = [
  "English",
  "French",
  "Kinyarwanda",
  "Swahili",
] as const satisfies Languages[];

export type FAQTypes = {
  question: string;
  answer: string;
  isDrop: boolean;
};

export const FAQ = [
  {
    question: "What resources are available on Check Me Patient",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
  {
    question: "Is my personal health information safe on Check Me Patient",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
  {
    question: "Is my patient data secure on Check Me Specialist",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
  {
    question: "How can I schedule appointments with healthcare providers",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
  {
    question:
      "Can I track my treatment progress and medications on Check Me Patient",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
  {
    question: "How do I join the Check Me Specialist network",
    answer:
      "Check Me Patient offers a variety of educational resources, articles, and videos to help you learn more about breast cancer, treatment options, and supportive care.",
  },
].map((data, i) => ({ ...data, isDrop: i === 0 })) satisfies FAQTypes[];

export type ClientTypes = {
  img: string;
  name: string;
  star: 1 | 2 | 3 | 4 | 5;
  content: string;
  job: string;
};

export const CLIENTS = [
  {
    img: img_client1,
    name: "Jenny Wilson",
    star: 5,
    job: "Breast Cancer Warrior",
    content:
      "The personalized support and guidance I've received have made all the difference in my recovery. I'm grateful for Check Me team",
  },
  {
    img: img_client2,
    name: "Devon Lane",
    star: 5,
    job: "Medical Specialist",
    content:
      "The platform's intuitive interface and comprehensive features allowing me to provide the highest quality care to my patients",
  },
] as const satisfies ClientTypes[];

export type PerkTypes = {
  title: string;
  sub_title: string;
  content: string;
  list_items: string[];
  img: string;
};
export const PERKS = [
  {
    sub_title: "CheckMe for breast cancer warriors",
    title: "Your Personalized Breast Cancer Hub",
    content:
      "Join Check Me Patient on the web and mobile to Access Support, Resources, and Expert Guidance. Some key features include:",
    list_items: [
      " Access personalized support tailored to your unique needs and preferences.",
      "Locate and navigate to the nearest healthcare facilities.",
      "Easily schedule and manage appointments with healthcare providers, ensuring timely access to care.",
    ],
    img: img_BreastCancerWarriors,
  },
  {
    sub_title: "CheckMe for medical Specialists",
    title: "Elevate Your Practice with Check Me Specialist.",
    content:
      "Join Check Me Specialist on the web and mobile to revolutionize the way you provide care and collaborate with colleagues. Some key features include:",
    list_items: [
      "Schedule, reschedule, and manage appointments efficiently.",
      "Secure Communication with Patients",
      "Eliminate paper prescriptions &  streamline medication management.",
    ],
    img: img_MedicalSpecialist,
  },
] as const satisfies PerkTypes[];

export interface OldPerkType {
  title: string;
  content: string;
  Icon: (props: LucideProps) => JSX.Element;
  img: string;
}

export const OLD_PERKS = [
  {
    title: "Interactive Self-Check Tutorials",
    content: "Learn from others and get notified about health tips.",
    img: img_user1,
    Icon: Icons.PlayCircleFill,
  },
  {
    title: "Access to Specialists",
    content: "Search for and connect with healthcare specialists.",
    img: img_phone_screen,
    Icon: Icons.Dot,
  },
  {
    title: "Geolocalization to Hospitals",
    content: "Locate and navigate to the nearest healthcare facilities.",
    img: img_user2,
    Icon: Icons.Map,
  },
] as const satisfies OldPerkType[];

export type RateType = {
  value: string;
  state: "+" | "%";
  quote: string;
};
export const RATES = [
  {
    value: "100",
    quote: "Active",
    state: "+",
  },
  {
    value: "1k",
    quote: "Medical",
    state: "+",
  },
  {
    value: "100",
    quote: "Free for",
    state: "%",
  },
] as const satisfies RateType[];
export const CONTROL_KEYS = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
