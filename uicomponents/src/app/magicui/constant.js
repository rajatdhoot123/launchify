import NumberTicker from "./components/number-ticker";

export const COMPONENTS_ARRAY = [
  {
    name: "Number Ticker",
    components: [
      {
        name: "number-ticker",
        comp: NumberTicker,
        export_path: ["src/app/magicui/components/number-ticker.tsx"],
      },
    ],
  },
];

const DEPENDENCIES = {
  "framer-motion": "^11.2.10",
};
