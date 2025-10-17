import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Shield, GraduationCap, Heart, Home, PiggyBank } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: Heart,
      percentage: 10,
      title: "Себе",
      description: "Первый и важный пункт. Эти деньги вы тратите на свои «хотелки» — то, что приносит радость и мотивацию. Если постоянно отказывать себе, пропадает желание зарабатывать больше.",
      examples: "кафе, хобби, поездки, маленькие радости",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: GraduationCap,
      percentage: 10,
      title: "Обучение",
      description: "Самые выгодные инвестиции — это вложения в себя. Новые знания и навыки напрямую влияют на рост вашего дохода.",
      examples: "книги, курсы, тренинги, вебинары",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      percentage: 10,
      title: "Безопасность",
      description: "Ваш финансовый резерв. Эти деньги лежат на случай непредвиденных обстоятельств и создают чувство защищенности.",
      examples: "накопить «подушку безопасности» и не трогать ее без крайней необходимости",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Home,
      percentage: 10,
      title: "Помощь другим",
      description: "Деньги, которые вы направляете на поддержку важных для вас дел. Это формирует здоровые отношения с финансами и чувство ответственности.",
      examples: "благотворительность, помощь близким или проектам",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Home,
      percentage: 40,
      title: "Текущие расходы",
      description: "Основные траты на жизнь: жилье, еда, транспорт, коммунальные услуги. Система помогает удерживать эти расходы в рамках 40% от дохода.",
      examples: "жилье, еда, транспорт, коммунальные услуги",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: PiggyBank,
      percentage: 20,
      title: "Инвестиции",
      description: "Деньги, которые работают на ваше будущее. Они создают капитал и пассивный доход, открывая путь к финансовой независимости.",
      examples: "ценные бумаги, вклады, другие финансовые инструменты",
      color: "from-green-500 to-green-600",
    },
  ];

  const benefits = [
    {
      title: "Баланс",
      description: "Вы не отказываете себе во всем, а осознанно находите место и для трат, и для накоплений.",
    },
    {
      title: "Стабильность",
      description: "Резерв и инвестиции дают уверенность в завтрашнем дне.",
    },
    {
      title: "Рост",
      description: "Вложения в обучение закономерно увеличивают ваш доход со временем.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg mb-4">
            <Calculator className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Как распределять деньги:<br />
            <span className="text-primary">простая и рабочая схема</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Часто кажется, что денег не хватает не потому, что вы мало зарабатываете, а потому, что нет понятного плана. 
            Беспокойство о будущем и неразбериха в тратах мешают чувствовать себя уверенно.
          </p>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate('/calculator')}
            >
              Рассчитать мое распределение
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-border/50">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Эта схема — не строгий бюджет, а <strong>система приоритетов</strong>. 
              Она помогает распределить доход так, чтобы хватало и на жизнь сегодня, и на уверенность в завтрашнем дне.
            </p>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Куда уходят ваши 100%
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">
                          {category.percentage}%
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          {category.title}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm font-medium text-muted-foreground">
                        <span className="text-foreground">На что:</span> {category.examples}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Почему это работает
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-primary/5 to-card border-primary/20 text-center"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-border/50 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Эта схема — не догма, а проверенный ориентир. Вы можете начать с примерного распределения 
              и постепенно адаптировать его под свою жизнь.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Рассчитайте, как эта система будет работать именно с вашим доходом
          </h2>
          <p className="text-xl text-muted-foreground">
            Это займет меньше минуты.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate('/calculator')}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Рассчитать мое распределение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Финансовый Калькулятор — инструмент для осознанного распределения бюджета
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

