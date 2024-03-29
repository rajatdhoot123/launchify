"use client";
export const ShadesGreen = () => {
  return (
    <>
      <div className="shades absolute -top-40 left-0 w-1/3 h-[550px] block overflow-hidden"></div>
      <style jsx>
        {`
          .shades {
            -webkit-filter: blur(123.13432312011719px);
            filter: blur(123.13432312011719px);
            background: radial-gradient(
              50% 49.99999999999999% at 50% 49.99999999999999%,
              #45c9c1 39.0625%,
              rgba(69, 201, 193, 0) 100%
            );
            z-index: 0;
            aspect-ratio: 1 / 1;
            border-radius: 100%;
          }
        `}
      </style>
    </>
  );
};

export const ShadeRed = () => {
  return (
    <>
      <div className="shade_red absolute -bottom-40 right-0 w-1/3 h-[550px] block overflow-hidden"></div>
      <style jsx>
        {`
          .shade_red {
            width: 35%;
            height: 584px;
            display: block;
            -webkit-filter: blur(130.74627685546875px);
            filter: blur(130.74627685546875px);
            background: radial-gradient(
              50% 49.99999999999999% at 50% 49.99999999999999%,
              #f480d4 39.0625%,
              rgba(244, 128, 212, 0) 100%
            );
            z-index: 0;
            aspect-ratio: 1 / 1;
            border-radius: 100%;
          }
        `}
      </style>
    </>
  );
};
