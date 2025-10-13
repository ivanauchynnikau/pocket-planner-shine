import { useState } from "react";
import { IncomeInput } from "@/components/IncomeInput";
import { CategorySlider } from "@/components/CategorySlider";
import { ResultCard } from "@/components/ResultCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingUp, Plus } from "lucide-react";

interface Category {
  id: string;
  name: string;
  percentage: number;
  color: string;
}

const availableColors = [
  "bg-pink-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-primary",
  "bg-green-500",
  "bg-red-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const Index = () => {
  const [income, setIncome] = useState<number>(100000);
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Игрушки", percentage: 10, color: "bg-pink-500" },
    { id: "2", name: "Фонд себя", percentage: 10, color: "bg-purple-500" },
    { id: "3", name: "Благотворительность", percentage: 5, color: "bg-yellow-500" },
    { id: "4", name: "На жизнь", percentage: 5, color: "bg-blue-500" },
    { id: "5", name: "Обучение", percentage: 5, color: "bg-orange-500" },
    { id: "6", name: "Инвестиции", percentage: 30, color: "bg-primary" },
  ]);
  const [newCategoryName, setNewCategoryName] = useState("");

  const updateCategory = (id: string, value: number) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, percentage: Math.max(0, Math.min(100, value)) } : cat
    ));
  };

  const updateCategoryName = (id: string, newName: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, name: newName } : cat
    ));
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const addCategory = () => {
    if (!newCategoryName.trim()) return;
    
    const usedColors = categories.map(cat => cat.color);
    const availableColor = availableColors.find(color => !usedColors.includes(color)) || availableColors[0];
    
    const newCategory: Category = {
      id: Date.now().toString(),
      name: newCategoryName.trim(),
      percentage: 0,
      color: availableColor,
    };
    
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
  };

  const totalPercentage = categories.reduce((sum, cat) => sum + cat.percentage, 0);
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
              {categories.map((category) => (
                <CategorySlider
                  key={category.id}
                  name={category.name}
                  percentage={category.percentage}
                  onChange={(val) => updateCategory(category.id, val)}
                  onNameChange={(newName) => updateCategoryName(category.id, newName)}
                  onDelete={() => deleteCategory(category.id)}
                  color={category.color}
                  canDelete={categories.length > 1}
                />
              ))}
            </div>

            {/* Add Category Form */}
            <div className="flex gap-2 pt-2">
              <Input
                placeholder="Название новой категории"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCategory()}
                className="flex-1 bg-background"
              />
              <Button 
                onClick={addCategory}
                disabled={!newCategoryName.trim()}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Добавить
              </Button>
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
            {categories.map((category) => (
              <ResultCard
                key={category.id}
                name={category.name}
                percentage={category.percentage}
                amount={calculateAmount(category.percentage)}
                color={category.color}
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
                    {income.toLocaleString('ru-RU')} руб
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
