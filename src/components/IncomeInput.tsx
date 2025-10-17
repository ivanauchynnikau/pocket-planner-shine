import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface IncomeInputProps {
  income: number;
  onChange: (value: number) => void;
}

export const IncomeInput = ({ income, onChange }: IncomeInputProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-medium)] border-border/50">
      <div className="space-y-3">
        <Label htmlFor="income" className="text-lg font-semibold text-foreground">
          Доход в текущем месяце
        </Label>
        <div className="relative">
          <Input
            id="income"
            type="number"
            value={income || ""}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder="0"
            className="text-3xl md:text-4xl lg:text-5xl font-bold h-14 md:h-18 lg:h-20 pl-4 pr-12 md:pr-14 lg:pr-16 bg-background border-input focus:border-primary focus:ring-[var(--shadow-glow)] transition-all"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
            Р
          </span>
        </div>
      </div>
    </Card>
  );
};
