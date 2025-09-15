import { Button } from "@/shared/components/button";
import { Card, CardContent } from "@/shared/components/card";
import { Container } from "@/shared/components/container";
import { Input, Textarea } from "@/shared/components/input";
import { Check } from "lucide-react";

export const CTAForm: React.FC = () => (
  <Container outer="py-12 md:py-16">
    <Card className="rounded-3xl shadow-sm">
      <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <h4 className="text-2xl font-semibold md:text-2xl">
            Бесплатная консультация
          </h4>
          <p className="mt-1 text-md">
            Оставьте заявку — подберём вузы, гранты и подскажем оптимальный путь
            поступления
          </p>
          <ul className="mt-4 space-y-2 text-md">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" /> Поступление без ЕГЭ
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" /> Поддержка до зачисления
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" /> Прозрачные условия и сроки
            </li>
          </ul>
        </div>
        <form className="space-y-3">
          <Input placeholder="Имя" />
          <Input placeholder="Телефон/Telegram" />
          <Textarea
            placeholder="Куда хотите поступить?"
            className="min-h-[100px] rounded-2xl resize-none"
          />
          <Button className="w-full" variant="contained">
            Отправить
          </Button>
          <div className="text-xs">
            Отправляя форму, вы соглашаетесь с политикой конфиденциальности
          </div>
        </form>
      </CardContent>
    </Card>
  </Container>
);
