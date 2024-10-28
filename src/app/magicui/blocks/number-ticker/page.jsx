"use client";
import NumberTicker from "../../components/number-ticker";

const NumberTickerComponent = () => {
  return (
    <div className="container flex">
      <div className="inline-flex m-auto text-xl border p-2 rounded-lg">
        <NumberTicker value={100} />
      </div>
    </div>
  );
};

export default NumberTickerComponent;
