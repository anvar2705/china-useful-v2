import { Button } from "@/shared/components/button";
import { Card, CardContent } from "@/shared/components/card";
import { Container } from "@/shared/components/container";
import { Input, Textarea } from "@/shared/components/input";
import { Check } from "lucide-react";

export const CTAForm: React.FC = () => (
  <div className="bg-zinc-50">
    <Container className="py-12 md:py-16">
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h4 className="text-xl font-semibold md:text-2xl">
              Бесплатная консультация
            </h4>
            <p className="mt-1 text-sm text-zinc-600">
              Оставьте заявку — подберём вузы, гранты и подскажем оптимальный
              путь поступления
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Поступление
                без ЕГЭ
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Поддержка до
                зачисления
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Прозрачные
                условия и сроки
              </li>
            </ul>
          </div>
          <form className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Имя" className="rounded-2xl" />
              <Input placeholder="Телефон/Telegram" className="rounded-2xl" />
            </div>
            <Input placeholder="Email" className="rounded-2xl" />
            <Textarea
              placeholder="Куда хотите поступить?"
              className="min-h-[100px] rounded-2xl"
            />
            <Button className="w-full rounded-2xl bg-red-600 hover:bg-red-700">
              Отправить
            </Button>
            <div className="text-xs text-zinc-500">
              Отправляя форму, вы соглашаетесь с политикой конфиденциальности
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  </div>
);
