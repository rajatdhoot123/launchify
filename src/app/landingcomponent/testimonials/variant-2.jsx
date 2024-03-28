import { TESTINOMIAL_COLORS } from "../constant";

const TESTINOMIALS = [
  {
    x_handle: "@jane_doe1",
    name: "Jane",
    message:
      "The Next.js Boilerplate is a game-changer. It has significantly reduced development time and increased productivity. I highly recommend it!",
  },
  { x_handle: "@john_doe", name: "Alice", message: "I love this product" },
  {
    x_handle: "@jane_doe2",
    name: "Jane",
    message:
      "The boilerplate is easy to use and has great out-of-the-box solutions.",
  },
  { x_handle: "@john_doe", name: "Alice", message: "I love this product" },
  {
    x_handle: "@jane_doe3",
    name: "Jane",
    message:
      "The boilerplate has an efficient structure and is a reliable starting point.",
  },
  { x_handle: "@john_doe4", name: "Alice", message: "I love this product" },
  {
    x_handle: "@jane_doe5",
    name: "Jane",
    message: "The boilerplate has helped me to jump-start my project quickly.",
  },
  { x_handle: "@john_doe5", name: "Alice", message: "I love this product" },
  {
    x_handle: "@jane_doe7",
    name: "Jane",
    message: "The boilerplate is a must-have for any Next.js developer.",
  },
];

const Testinomials = () => {
  return (
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 space-y-6">
      {TESTINOMIALS.map((testimonial, index) => (
        <div
          className="aspect-auto break-inside-avoid rounded-md p-5 space-y-4"
          style={{
            backgroundColor:
              TESTINOMIAL_COLORS[Math.floor(Math.random() * TESTINOMIAL_COLORS.length)].hex,
          }}
          key={testimonial.x_handle}
        >
          <div className="flex items-center">
            <div className="h-12 w-12 bg-red-500 rounded-full"></div>
            <div className="ml-2">
              <div>{testimonial.name}</div>
              <div>{testimonial.x_handle}</div>
            </div>
          </div>
          <div>{testimonial.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Testinomials;
