import devImg from "./dev.png";
import seoImg from "./seo.png";
import administrationImg from "./administration.png";
import consultancyImg from "./consultancy.png";

export interface servicesData {
  id: string;
  label: string;
  shortLabel: string;
  image: string;
}

export const images: servicesData[] = [
  {
    id: "1",
    label: "DEVELOPMENT",
    shortLabel: "D",
    image: devImg,
  },
  {
    id: "2",
    label: "SEO",
    shortLabel: "S",
    image: seoImg,
  },
  {
    id: "3",
    label: "ADMINISTRATION",
    shortLabel: "A",
    image: administrationImg,
  },
  {
    id: "4",
    label: "CONSULTANCY",
    shortLabel: "C",
    image: consultancyImg,
  },
];
