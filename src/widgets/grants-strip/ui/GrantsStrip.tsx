import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { Check } from "lucide-react";

export const GrantsStrip: React.FC = () => (
  <Container className="py-12 md:py-16">
    <div className="rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-6 text-white shadow-md">
      <div className="grid items-center gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-semibold md:text-2xl">
            Гранты и стипендии
          </div>
          <p className="mt-1 text-sm opacity-90">
            CSC, провинциальные и университетские гранты — подберём оптимальный
            вариант под ваш профиль
          </p>
        </div>
        <ul className="space-y-2 text-sm md:space-y-1">
          {[
            "Полное/частичное покрытие обучения",
            "Страховка и ежемесячные выплаты",
            "Подготовка мотивационных писем и рекомендаций",
          ].map((it) => (
            <li key={it} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" /> {it}
            </li>
          ))}
        </ul>
        <div className="md:justify-self-end">
          <Button className="rounded-2xl bg-white text-red-600 hover:bg-zinc-50">
            Узнать о грантах
          </Button>
        </div>
      </div>
    </div>
  </Container>
);
