import { Button } from "@/shared/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { MapPin } from "lucide-react";

export const UniversityCard: React.FC<{
  name: string;
  price: string;
  grants: string;
  city?: string;
}> = ({ name, price, grants, city }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">{name}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2 text-sm text-zinc-700">
      {city && (
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" /> {city}
        </div>
      )}
      <div>
        <b>Стоимость:</b> {price}
      </div>
      <div>
        <b>Гранты:</b> {grants}
      </div>
      <div className="pt-2">
        <Button size="sm" className="rounded-xl bg-red-600 hover:bg-red-700">
          Подробнее
        </Button>
      </div>
    </CardContent>
  </Card>
);
