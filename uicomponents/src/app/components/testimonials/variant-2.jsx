import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CARDS = [
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
  {
    title: "Join thousands of happy clients",
    name: "Clara Megan",
    handle: "@claramegan",
    fancy: "@FancyTailwind",
    image: "https://i.pravatar.cc/300",
    description:
      "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
  },
];

const Testimonials = () => {
  return (
    <div className="container grid grid-cols-3 mx-auto gap-5">
      {CARDS.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
              {card.title}
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="object-cover"
                />
              </span>
              <div className="text-left">
                <h3 className="text-base font-semibold">{card.name}</h3>
                <p className="text-sm text-gray-400">{card.handle}</p>
              </div>
            </div>
            <div className="mt-4 flex text-sm">
              <p className="text-sm">
                <span className="text-blue-400 font-semibold">
                  {card.fancy}
                </span>
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
