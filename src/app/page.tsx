import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Services } from "@/components/services";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-img-header-hero flex flex-col">
        <Header />
        <Hero />
      </div>
      <Services />
    </>
  );
}
