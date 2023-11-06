const generateRootPage = ({
  sequence,
  nav_varient,
  hero_varient,
  pricing_varient,
  testimonials_varient,
  table_varient,
  card_varient,
  random_varient,
}) => {
  return `import Navbar from "@/app/components/navbar/${nav_varient}";
import Hero from "@/app/components/hero/${hero_varient}";
import Pricing from "@/app/components/pricing/${pricing_varient}";
import Testinomial from "@/app/components/testimonials/${testimonials_varient}";
import Table from "@/app/components/table/${table_varient}";
import Card from "@/app/components/cards/${card_varient}";
import RandomCard from "@/app/components/random-cards/${random_varient}";


export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll">
            <Navbar />
            <Hero />
            <Pricing />
            <Testinomial />
            <Table />
            <Card />
            <RandomCard />
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
