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
            className="text-2xl font-bold h-14 pl-4 pr-12 bg-background border-input focus:border-primary focus:ring-[var(--shadow-glow)] transition-all"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-muted-foreground">
            ₽
          </span>
        </div>
      </div>
    </Card>
  );
};
