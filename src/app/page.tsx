import styles from "./page.module.css";
import Cards from "../Coms/Cards/Cards";
import Title from "../Coms/Title/Title";
import Contact from "../Coms/Contact/Contact";


export const metadata = {
  title: "Cosmetics Imane - Premium Cosmetic Products in Morocco",
  description: "لحسة الصحراوية منتج طبيعي 100%  تحاميل",
  keywords: "cosmetics, makeup, skincare, Morocco, beauty products, Cosmetics Imane, premium cosmetics, لحسة, الصحراوية,تحاميل ",
  openGraph: {
    title: "Cosmetics Imane - Premium Cosmetic Products in Morocco",
    description: "لحسة الصحراوية منتج طبيعي 100%  تحاميل",
    url: "https://imane-cosmetic.github.io/home/",
    siteName: "Cosmetics Imane",
    images: [
      {
        url: "	https://imane-cosmetic.github.io/home/_next/static/media/lahsa.4e20c821.png",
        width: 800,
        height: 600,
        alt: "Cosmetics Imane Logo",
      },
    ],
    locale: "ar_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetics Imane - Premium Cosmetic Products in Morocco",
    description: "لحسة الصحراوية منتج طبيعي 100%  تحاميل",
    images: ["https://imane-cosmetic.github.io/home/_next/static/media/lahsa.4e20c821.png"],
  },
};

function Home() {

  return (
    <>
      <main className={styles.main}>
        <Title/>
        <Cards/>
        <br></br>
        <br></br>
        <Contact/>
      </main>
    </>
  );
}
export default Home;