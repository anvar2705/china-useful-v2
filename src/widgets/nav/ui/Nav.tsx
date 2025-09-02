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
    <Container
      outer="fixed top-0 z-50 w-full border-b border-border-primary bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background-secondary/20"
      inner="h-18 flex items-center justify-between py-3 md:py-4"
    >
      <div className="flex items-center gap-2">
        <div className="font-semibold tracking-tight">China Useful</div>
      </div>
      <div className="hidden gap-2 md:flex">
        {links.map((l) => (
          <a key={l.id} className="p-3">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outlined">Оставить заявку</Button>
      </div>
    </Container>
  );
};
