import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Container } from "@/shared/components/container";
import { GraduationCap, Layers, MapPin } from "lucide-react";

export const FeatureGrid: React.FC = () => (
  <Container className="py-12 md:py-16">
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          icon: GraduationCap,
          title: "Подбор университета",
          text: "Анализ профиля и рекомендации по 300+ вузам",
        },
        {
          icon: Layers,
          title: "Документы и подача",
          text: "Готовим пакет, сопровождаем до зачисления",
        },
        {
          icon: MapPin,
          title: "Кампус и быт",
          text: "Проживание, страховка, сим-карта, адаптация",
        },
      ].map((f) => (
        <Card key={f.title} className="rounded-2xl shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <f.icon className="h-5 w-5 text-red-600" />
              {f.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-700">{f.text}</CardContent>
        </Card>
      ))}
    </div>
  </Container>
);
