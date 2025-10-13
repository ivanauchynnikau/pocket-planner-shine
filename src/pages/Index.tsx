import { useState } from "react";
import { IncomeInput } from "@/components/IncomeInput";
import { CategorySlider } from "@/components/CategorySlider";
import { ResultCard } from "@/components/ResultCard";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";

const Index = () => {
  const [income, setIncome] = useState<number>(100000);
  const [categories, setCategories] = useState({
    toys: 10,
    selfFund: 10,
    charity: 5,
    living: 5,
    education: 5,
    investments: 30,
  });

  const categoryColors = {
    toys: "bg-pink-500",
    selfFund: "bg-purple-500",
    charity: "bg-yellow-500",
    living: "bg-blue-500",
    education: "bg-orange-500",
    investments: "bg-primary",
  };

  const categoryNames = {
    toys: "Игрушки",
    selfFund: "Фонд себя",
    charity: "Благотворительность",
    living: "На жизнь",
    education: "Обучение",
    investments: "Инвестиции",
  };

  const updateCategory = (key: keyof typeof categories, value: number) => {
    setCategories({ ...categories, [key]: Math.max(0, Math.min(100, value)) });
  };

  const totalPercentage = Object.values(categories).reduce((sum, val) => sum + val, 0);
  const remaining = 100 - totalPercentage;

  const calculateAmount = (percentage: number) => {
    return Math.round((income * percentage) / 100);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-[var(--shadow-glow)] mb-4">
            <Calculator className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Финансовый Калькулятор
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Управляйте своим бюджетом эффективно. Распределите доход по категориям и увидьте результат.
          </p>
        </header>

        {/* Income Input */}
        <IncomeInput income={income} onChange={setIncome} />

        {/* Categories */}
        <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-medium)] border-border/50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Категории расходов</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Распределено:</span>
                <span className={`text-lg font-bold ${totalPercentage > 100 ? 'text-destructive' : totalPercentage === 100 ? 'text-primary' : 'text-foreground'}`}>
                  {totalPercentage}%
                </span>
              </div>
            </div>

            {totalPercentage !== 100 && (
              <div className={`p-4 rounded-lg border ${remaining < 0 ? 'bg-destructive/10 border-destructive/30' : 'bg-accent/10 border-accent/30'}`}>
                <p className={`text-sm font-medium ${remaining < 0 ? 'text-destructive' : 'text-accent'}`}>
                  {remaining < 0 
                    ? `Превышение на ${Math.abs(remaining)}%. Уменьшите значения категорий.`
                    : `Осталось распределить: ${remaining}%`
                  }
                </p>
              </div>
            )}

            <div className="grid gap-4">
              {Object.entries(categories).map(([key, value]) => (
                <CategorySlider
                  key={key}
                  name={categoryNames[key as keyof typeof categoryNames]}
                  percentage={value}
                  onChange={(val) => updateCategory(key as keyof typeof categories, val)}
                  color={categoryColors[key as keyof typeof categoryColors]}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Результаты расчета</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(categories).map(([key, percentage]) => (
              <ResultCard
                key={key}
                name={categoryNames[key as keyof typeof categoryNames]}
                percentage={percentage}
                amount={calculateAmount(percentage)}
                color={categoryColors[key as keyof typeof categoryColors]}
              />
            ))}
          </div>

          {/* Summary Card */}
          {totalPercentage === 100 && (
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-[var(--shadow-glow)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Распределено средств
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {income.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Покрытие бюджета
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    100%
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
