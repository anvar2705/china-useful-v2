import { Card, CardContent } from "@/shared/components/card";
import { Container } from "@/shared/components/container";
import { Star } from "lucide-react";

export const Reviews: React.FC = () => (
  <Container className="py-12 md:py-16">
    <h3 className="text-xl font-semibold md:text-2xl">Отзывы студентов</h3>
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="rounded-2xl shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-amber-500">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm text-zinc-700">
              «С China Useful поступить оказалось проще, чем я думал(а). Помогли
              выбрать программу и оформить документы без стресса!»
            </p>
            <div className="mt-4 text-xs text-zinc-500">Алексей, Ханчжоу</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </Container>
);
