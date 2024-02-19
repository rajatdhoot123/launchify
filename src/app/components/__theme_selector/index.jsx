import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { THEMES } from "@/app/constants__/theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const [localTheme, setLocalTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme, setTheme]);
  return (
    <Card className="p-2">
      <CardHeader className="p-2">Select Theme</CardHeader>
      <CardContent className="p-2">
        <RadioGroup
          value={localTheme}
          onValueChange={(val) => setLocalTheme(val)}
          className="flex overflow-scroll"
        >
          {THEMES.map(({ label, value }) => {
            return (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default ThemeSelector;
