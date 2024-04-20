import EarlyAdopters from "./components/EarlyAdopters/EarlyAdopters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import Steps from "./components/Steps/Steps";
import Subscribe from "./components/Subscribe/Subscribe";

export default function HomePage() {
  return (
    <main className="relative space-y-18 min-h-screen">
      <Header />
      <div className="space-y-32">
        <Hero />
        <div className="space-y-44">
          <Steps />
          <KeyFeatures />
        </div>
        <EarlyAdopters />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}
