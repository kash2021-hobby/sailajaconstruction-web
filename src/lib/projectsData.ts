import durgaImg from "@/assets/durgaresidencyimg/sailajadurgaresidency.webp";
import sapphireImg from "@/assets/sailajasapphireimg/saphire.webp";
import bimaanImg from "@/assets/project-bimaan.jpg";
import sunshineImg from "@/assets/project-sunshine.jpg";
import xopunImg from "@/assets/xopunaloyimg/xopunaloy.webp";
import mangalImg from "@/assets/mangalmurtienclaveimg/mangalmurti.webp";
import baneswarImg from "@/assets/baneswarimg/sailajabaneswarimg.webp";
import bhaskarImg from "@/assets/bhaskarimg/sailajabhaskarresideny.webp";
import arupArcadiaImg from "@/assets/aruparcadiaimg/aruparcadia.webp";
import sailajaParadiseImg from "@/assets/sailajaparadiseimg/sailajaparadise.webp";
import madhabMansionImg from "@/assets/madhabmansionimg/madhobmansion.webp";

export type Project = {
  name: string;
  type: "Residential" | "Commercial";
  status: "Ongoing" | "Completed" | "Upcoming";
  area: string;
  location: string;
  img: string;
  desc: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    name: "Sailaja's Durga Residency",
    type: "Residential",
    status: "Completed",
    area: "32,000 sq.ft",
    location: "Guwahati",
    img: durgaImg,
    desc: "A premium residential tower combining open-concept apartments with energy-efficient design.",
  },
  {
    name: "Sailaja's Sapphire",
    type: "Residential",
    status: "Ongoing",
    area: "48,000 sq.ft",
    location: "Guwahati",
    img: sapphireImg,
    desc: "Multi-family residential community with landscaped courtyards and premium amenities.",
  },
  {
    name: "Bimaan Arcade",
    type: "Commercial",
    status: "Ongoing",
    area: "22,500 sq.ft",
    location: "Guwahati",
    img: bimaanImg,
    desc: "Mixed-use commercial arcade with retail, dining and office space in central Guwahati.",
  },
  {
    name: "Sailaja Paradise",
    type: "Residential",
    status: "Ongoing",
    area: "38,000 sq.ft",
    location: "Guwahati",
    img: sailajaParadiseImg,
    desc: "A RERA-certified residential paradise offering serene living spaces with premium amenities.",
    tags: ["RERA"],
  },
  {
    name: "Arup Arcadia",
    type: "Residential",
    status: "Ongoing",
    area: "28,000 sq.ft",
    location: "Guwahati",
    img: arupArcadiaImg,
    desc: "Modern residential arcade with thoughtfully designed homes and community spaces.",
  },
  {
    name: "Sailaja's Maanav Abode",
    type: "Residential",
    status: "Ongoing",
    area: "35,000 sq.ft",
    location: "Guwahati",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    desc: "A RERA-certified residential abode crafted for comfortable family living.",
    tags: ["RERA"],
  },
  {
    name: "MH Complex (RERA)",
    type: "Commercial",
    status: "Ongoing",
    area: "42,000 sq.ft",
    location: "Guwahati",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    desc: "A RERA-certified mixed-use complex designed for modern businesses and retail spaces.",
    tags: ["RERA"],
  },
  {
    name: "Sailaja's Sunshine Residency",
    type: "Residential",
    status: "Completed",
    area: "28,000 sq.ft",
    location: "Nagaon",
    img: sunshineImg,
    desc: "Bright, sunlit residential apartments built for comfortable family living.",
  },
  {
    name: "Sailaja's Xopun Aloy",
    type: "Residential",
    status: "Completed",
    area: "12,000 sq.ft",
    location: "Guwahati, Assam",
    img: xopunImg,
    desc: "An elegant residential development offering thoughtfully designed 2BHK and 3BHK apartments in the heart of Guwahati.",
  },
  {
    name: "Sailaja's Mangalmurti Enclave",
    type: "Residential",
    status: "Completed",
    area: "36,000 sq.ft",
    location: "Sachal, Guwahati, Assam",
    img: mangalImg,
    desc: "An elegant RERA-certified residential development offering thoughtfully designed 2 & 3BHK apartments in the heart of Guwahati.",
  },
  {
    name: "Sailaja's Baneswar",
    type: "Residential",
    status: "Completed",
    area: "22,000 sq.ft",
    location: "Baneswar, Assam",
    img: baneswarImg,
    desc: "A modern residential project offering comfort and community living.",
  },
  {
    name: "Sailaja's Bhaskar Residency",
    type: "Residential",
    status: "Completed",
    area: "18,000 sq.ft",
    location: "Mathuranagar, Guwahati",
    img: bhaskarImg,
    desc: "Thoughtfully designed homes with quality craftsmanship and modern amenities.",
  },
  {
    name: "Sailaja's Madhab Mansion",
    type: "Residential",
    status: "Completed",
    area: "25,000 sq.ft",
    location: "Guwahati, Assam",
    img: madhabMansionImg,
    desc: "An elegant residential development offering thoughtfully designed 2BHK and 3BHK apartments in the heart of Guwahati.",
  },
  {
    name: "Durga",
    type: "Residential",
    status: "Ongoing",
    area: "32,000 sq.ft",
    location: "Guwahati, Assam",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    desc: "An elegant RERA-certified residential development offering thoughtfully designed apartments in the heart of Guwahati.",
    tags: ["RERA CERTIFIED"],
  },
  {
    name: "Saikia Complex",
    type: "Commercial",
    status: "Completed",
    area: "40,000 sq.ft",
    location: "Guwahati",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    desc: "A versatile commercial complex designed for modern businesses and retail.",
  },
  {
    name: "Shree Bishnu Commercial",
    type: "Commercial",
    status: "Upcoming",
    area: "TBD",
    location: "TBD",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    desc: "An upcoming commercial project designed for modern businesses and retail spaces.",
  },
];
