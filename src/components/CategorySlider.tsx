import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CategorySliderProps {
  name: string;
  percentage: number;
  onChange: (value: number) => void;
  color: string;
}

export const CategorySlider = ({ name, percentage, onChange, color }: CategorySliderProps) => {
  return (
    <div className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-border transition-all">
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-sm font-medium text-foreground flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          {name}
        </Label>
        <div className="flex items-center gap-2">
          <Input
            id={name}
            type="number"
            value={percentage}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-16 h-8 text-sm text-center bg-background"
            min="0"
            max="100"
          />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>
      <Slider
        value={[percentage]}
        onValueChange={(values) => onChange(values[0])}
        max={100}
        step={1}
        className="cursor-pointer"
      />
    </div>
  );
};
