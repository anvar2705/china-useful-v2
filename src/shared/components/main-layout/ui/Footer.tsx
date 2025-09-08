import { Container } from "@/shared/components/container";
import { Badge, Sparkles } from "lucide-react";

export const Footer = () => (
  <footer className="border-t bg-white">
    <Container inner="grid gap-8 py-8 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="font-semibold">China Useful</div>
        </div>
        <p className="mt-2 text-sm text-zinc-600">
          Организация обучения в Китае для иностранных студентов
        </p>
      </div>
      <div>
        <div className="text-sm font-semibold">Навигация</div>
        <ul className="mt-2 space-y-2 text-sm text-zinc-700">
          <li>О компании</li>
          <li>Университеты</li>
          <li>Услуги</li>
          <li>Гранты</li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold">Контакты</div>
        <ul className="mt-2 space-y-2 text-sm text-zinc-700">
          <li>Китай, пров. Чжэцзян, Тайчжоу</li>
          <li>Россия, Астрахань</li>
          <li>info@china-useful.com</li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold">Соцсети</div>
        <div className="mt-2 flex gap-2">
          <Badge className="rounded-full">Telegram</Badge>
          <Badge className="rounded-full">WhatsApp</Badge>
          <Badge className="rounded-full">VK</Badge>
        </div>
      </div>
      <div className="md:col-span-4 text-xs text-zinc-500">
        © 2018–2025 China Useful
      </div>
    </Container>
  </footer>
);
