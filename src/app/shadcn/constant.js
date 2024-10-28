import Dasboard1 from "./components/dashboard-1";
import Dasboard2 from "./components/dashboard-2";
import Dasboard3 from "./components/dashboard-3";
import Dasboard4 from "./components/dashboard-4";
import Dasboard5 from "./components/dashboard-5";
import Dasboard6 from "./components/dashboard-6";
import Dasboard7 from "./components/dashboard-7";

export const COMPONENTS_ARRAY = [
  {
    name: "Dashboard",
    components: [
      {
        name: "dashboard-1",
        comp: Dasboard1,
        export_path: ["src/app/shadcn/components/dashboard-1.jsx"],
      },
      {
        name: "dashboard-2",
        comp: Dasboard2,
        export_path: ["src/app/shadcn/components/dashboard-2.jsx"],
      },
      {
        name: "dashboard-3",
        comp: Dasboard3,
        export_path: ["src/app/shadcn/components/dashboard-3.jsx"],
      },
      {
        name: "dashboard-4",
        comp: Dasboard4,
        export_path: ["src/app/shadcn/components/dashboard-4.jsx"],
      },
      {
        name: "dashboard-5",
        comp: Dasboard5,
        export_path: ["src/app/shadcn/components/dashboard-5.jsx"],
      },
      {
        name: "dashboard-6",
        comp: Dasboard6,
        export_path: ["src/app/shadcn/components/dashboard-6.jsx"],
      },
      {
        name: "dashboard-7",
        comp: Dasboard7,
        export_path: ["src/app/shadcn/components/dashboard-7.jsx"],
      },
    ],
  },
];
