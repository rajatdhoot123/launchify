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

export const MAGIC_UI_DEPENDENCIES = {
  "framer-motion": "^11.2.10",
};
