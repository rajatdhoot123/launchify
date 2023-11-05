import Navbar1 from "@/app/components/navbar/varient-1";
import Hero1 from "@/app/components/hero/varient-1";
import Pricing1 from "@/app/components/pricing/varient-1";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll">
        <Navbar1 />
        <Hero1 />
        <Pricing1 />
      </div>
    </>
  );
}
