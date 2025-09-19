import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { Input } from "@/shared/components/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/tabs";
import { useMemo } from "react";
import { UniversityCard } from "./UniversityCard";

export const Universities: React.FC = () => {
  const items = useMemo(
    () => [
      {
        name: "Zhejiang University (ZJU)",
        price: "20 000 – 45 000 CNY/год",
        grants: "CSC, ZJU Scholarship",
        city: "Ханчжоу",
      },
      {
        name: "Nanjing University (NJU)",
        price: "20 000 – 40 000 CNY/год",
        grants: "CSC, NJU Scholarship",
        city: "Нанкин",
      },
      {
        name: "Fudan University",
        price: "23 000 – 48 000 CNY/год",
        grants: "CSC, Fudan Scholarships",
        city: "Шанхай",
      },
      {
        name: "Shanghai Jiao Tong University (SJTU)",
        price: "25 000 – 50 000 CNY/год",
        grants: "CSC, SJTU Scholarships",
        city: "Шанхай",
      },
      {
        name: "Zhejiang University of Finance and Economics (ZUFE)",
        price: "15 000 – 25 000 CNY/год",
        grants: "Zhejiang Gov. Scholarship",
        city: "Ханчжоу",
      },
    ],
    []
  );

  return (
    <div className="bg-zinc-50">
      <Container outer="py-10 md:py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Университеты Китая
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              ТОП-партнёры, ориентировочная стоимость и гранты
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Поиск по названию"
              className="w-56 rounded-2xl"
            />
            <Button variant="outlined" className="rounded-2xl">
              Фильтры
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-2xl">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="grants">С грантами</TabsTrigger>
            <TabsTrigger value="top">ТОП-вузы</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((u) => (
                <UniversityCard key={u.name} {...u} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="grants" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items
                .filter((u) => u.grants)
                .map((u) => (
                  <UniversityCard key={u.name} {...u} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="top" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items
                .filter((u) =>
                  [
                    "Zhejiang University (ZJU)",
                    "Fudan University",
                    "Shanghai Jiao Tong University (SJTU)",
                  ].includes(u.name)
                )
                .map((u) => (
                  <UniversityCard key={u.name} {...u} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};
