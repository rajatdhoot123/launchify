const generateRootPage = ({
  sequence,
  navbar,
  hero,
  pricing,
  testimonials,
  table,
  cards,
  random_varient,
}) => {
  return `import Navbar from "@/app/components/navbar/${navbar}";
import Hero from "@/app/components/hero/${hero}";
import Pricing from "@/app/components/pricing/${pricing}";
import Testinomial from "@/app/components/testimonials/${testimonials}";
import Table from "@/app/components/table/${table}";
import Card from "@/app/components/cards/${cards}";
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
