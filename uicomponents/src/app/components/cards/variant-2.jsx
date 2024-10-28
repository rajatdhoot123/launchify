import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

const CARD_DATA = [
  {
    title: "Super Value Pizza",
    price: "$12.99",
    image: "https://source.unsplash.com/random/200x100?pizza",
  },
  {
    title: "Super Value Pizza",
    price: "$12.99",
    image: "https://source.unsplash.com/random/200x100?pizza",
  },
  {
    title: "Super Value Pizza",
    price: "$12.99",
    image: "https://source.unsplash.com/random/200x100?pizza",
  },
  {
    title: "Super Value Pizza",
    price: "$12.99",
    image: "https://source.unsplash.com/random/200x100?pizza",
  },
];

const CardComp = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
        {CARD_DATA.map((card, index) => (
          <Card key={index}>
            <CardContent className="px-0">
              <div>
                <div className="absolute top-0 right-0 mr-2 p-4 z-10 flex justify-between">
                  <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 fill-current text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="relative block h-full">
                  <div className="bg-cover bg-center bg-no-repeat h-32 rounded-lg bg-[url('https://source.unsplash.com/random/200x100?pizza')]"></div>
                </div>
              </div>
              <div className="px-6 mt-6">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Super Value Pizza
                </h4>
                <p className="leading-7">$12.99</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Order</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardComp;
