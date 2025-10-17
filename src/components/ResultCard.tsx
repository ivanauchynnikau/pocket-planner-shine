import { Card } from "@/components/ui/card";

interface ResultCardProps {
  name: string;
  percentage: number;
  amount: number;
  color: string;
}

export const ResultCard = ({ name, percentage, amount, color }: ResultCardProps) => {
  return (
    <Card className="p-5 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-soft)] border-border/50 hover:shadow-[var(--shadow-medium)] transition-all">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          <span className="text-sm font-medium text-muted-foreground">{name}</span>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground">
            {amount.toLocaleString('ru-RU')} Р
          </div>
          <div className="text-sm text-muted-foreground">
            {percentage}% от дохода
          </div>
        </div>
      </div>
    </Card>
  );
};
