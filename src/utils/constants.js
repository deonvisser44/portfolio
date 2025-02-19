import onlineStore from "../assets/onlinestore.JPG";
import blog from "../assets/blog.JPG";
import cryptowatch from "../assets/cryptoscreenshot.JPG";
import camboEvents from "../assets/cambo-events.JPG";
import ipLookup from "../assets/ip-lookup.jpeg";

export const PERSONAL_PROJECTS = [
  {
    title: "Crypto Watch",
    description: "ReactJS / Firebase / CSS",
    isDesktop: false,
    github: "https://github.com/deonvisser44/crypto-watch/tree/master",
    site: "https://deonvisser44.github.io/crypto-watch/",
    image: cryptowatch,
  },
  {
    title: "Cambo Events",
    description: "NextJS / NestJS / Postgres",
    isDesktop: false,
    github: "https://github.com/deonvisser44/cambo-events-frontend",
    site: "",
    image: camboEvents,
  },
  {
    title: "Mock Online Store",
    description: "ReactJS / Redux / CSS",
    isDesktop: true,
    github: "https://github.com/deonvisser44/online-store/tree/master",
    site: "https://deonvisser44.github.io/online-store",
    image: onlineStore,
  },
  {
    title: "Personal Blog",
    description: "ReactJS / Firebase / CSS",
    isDesktop: true,
    github: "https://github.com/deonvisser44/my-blog/tree/master/src",
    site: "",
    image: blog,
  },

  {
    title: "IP Lookup",
    description: "ReactJS / CSS",
    isDesktop: false,
    github: "https://github.com/deonvisser44/ip-lookup/tree/master/src",
    site: "https://ip-lookup-lf7ycnu3b-deonvisser44gmailcoms-projects.vercel.app/",
    image: ipLookup,
  },
];
