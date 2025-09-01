import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { Sparkles } from "lucide-react";

export const Nav: React.FC<{
  onNavigate: (route: string) => void;
  route: string;
}> = ({ onNavigate, route }) => {
  const links = [
    { id: "home", label: "Главная" },
    { id: "universities", label: "Университеты" },
    { id: "services", label: "Услуги" },
    { id: "grants", label: "Гранты" },
    { id: "path", label: "Путь студента" },
    { id: "reviews", label: "Отзывы" },
    { id: "contacts", label: "Контакты" },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <Container className="flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="font-semibold tracking-tight">China Useful</div>
        </div>
        <div className="hidden gap-2 md:flex">
          {links.map((l) => (
            <Button
              key={l.id}
              variant={route === l.id ? "default" : "ghost"}
              className="rounded-2xl"
              onClick={() => onNavigate(l.id)}
            >
              {l.label}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button className="rounded-2xl bg-red-600 hover:bg-red-700">
            Оставить заявку
          </Button>
        </div>
      </Container>
    </div>
  );
};
