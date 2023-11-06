const generateRootPage = ({
  sequence,
  nav_varient,
  hero_varient,
  pricing_varient,
  testimonials_varient,
  table_varient,
}) => {
  return `import Navbar from "@/app/components/navbar/${nav_varient}";
import Hero from "@/app/components/hero/${hero_varient}";
import Pricing from "@/app/components/pricing/${pricing_varient}";
import Testinomial from "@/app/components/testimonials/${testimonials_varient}";
import Table from "@/app/components/testimonials/${table_varient}";

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll">
            <Navbar />
            <Hero />
            <Pricing />
            <Testinomial />
            <Table />
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
