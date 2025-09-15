import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import Link from "next/link";

export const Header = () => {
  const links = [
    { id: "/", label: "Главная" },
    { id: "/about", label: "О нас" },
    { id: "/universities", label: "Университеты Китая" },
    { id: "/services", label: "Услуги" },
    { id: "/grants", label: "Гранты" },
    { id: "/reviews", label: "Отзывы" },
    { id: "/contacts", label: "Контакты" },
  ];

  return (
    <Container
      outer="fixed top-0 z-50 w-full border-b border-gray-500 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-black/30"
      inner="h-18 flex items-center justify-between py-3 md:py-4 text-white"
    >
      <div className="flex items-center gap-2">
        <div className="font-semibold tracking-tight">China Useful</div>
      </div>
      <div className="hidden gap-2 md:flex">
        {links.map((l) => (
          <Link key={l.id} className="p-3" href={l.id}>
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outlined">Оставить заявку</Button>
      </div>
    </Container>
  );
};
