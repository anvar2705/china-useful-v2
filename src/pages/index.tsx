import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Globe2,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/shared/components/button";
import { Nav } from "@/widgets/nav";
import { Hero } from "@/widgets/hero";
import { FeatureGrid } from "@/widgets/feature-grid";
import { GrantsStrip } from "@/widgets/grants-strip";
import { Universities } from "@/widgets/universities";
import { CTAForm } from "@/widgets/cta-form";
import { Footer } from "@/widgets/footer";
import { Reviews } from "@/widgets/reviews";
import { Container } from "@/shared/components/container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Input, Textarea } from "@/shared/components/input";

// --- Палитра и токены (в Tailwind классы встроены, ниже — справочно) ---
// const palette = {
//   primary: "#D32F2F", // красный
//   accent: "#FBC02D", // золотой
//   text: "#212121", // тёмно-серый
//   bg: "#FFFFFF",
//   soft: "#F5F5F5",
// };

export default function ChinaUsefulPrototype() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav onNavigate={setRoute} route={route} />

      {route === "home" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <FeatureGrid />
          <GrantsStrip />
          <Reviews />
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "universities" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <Universities />
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "services" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <Container className="py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">Услуги</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                "Подбор университета",
                "Оформление документов",
                "Подготовка к экзаменам",
              ].map((s) => (
                <Card key={s} className="rounded-2xl shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-lg font-medium">{s}</div>
                    <p className="mt-2 text-sm text-zinc-700">
                      Подробное сопровождение на каждом этапе
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "grants" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <GrantsStrip />
          <Container className="py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">Виды грантов</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "CSC (China Scholarship Council)",
                  items: [
                    "Полное/частичное покрытие",
                    "Страховка и стипендия",
                    "Бакалавр/магистр/PhD",
                  ],
                },
                {
                  title: "Провинциальные стипендии",
                  items: [
                    "Финансирование от провинций",
                    "Ежемесячные выплаты",
                    "Скидки на обучение",
                  ],
                },
                {
                  title: "Университетские гранты",
                  items: [
                    "Собственные фонды вузов",
                    "Скидки и академ.стипендии",
                    "Исследовательские гранты",
                  ],
                },
              ].map((g) => (
                <Card key={g.title} className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{g.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-zinc-700">
                    {g.items.map((i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-red-600" /> {i}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "path" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <Container className="py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Путь студента
            </h2>
            <ol className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                "Первичная консультация",
                "Подбор учебного заведения",
                "Требования к поступлению",
                "Подписание договора",
                "Оформление документов",
                "Подготовка к интервью",
                "Мотивационное письмо",
                "Приглашение и JW 202",
              ].map((step, idx) => (
                <li key={step} className="rounded-2xl bg-zinc-50 p-4 shadow-sm">
                  <div className="text-sm text-zinc-500">Шаг {idx + 1}</div>
                  <div className="text-base font-medium">{step}</div>
                </li>
              ))}
            </ol>
          </Container>
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "reviews" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <Reviews />
          <CTAForm />
          <Footer />
        </>
      )}

      {route === "contacts" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <Container className="py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">Контакты</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm text-zinc-700">
                    Китай, пров. Чжэцзян, Тайчжоу
                  </div>
                  <div className="text-sm text-zinc-700">
                    Россия, г. Астрахань
                  </div>
                  <div className="mt-2 text-sm text-zinc-700">
                    Email: info@china-useful.com
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <form className="space-y-3">
                    <Input placeholder="Имя" className="rounded-2xl" />
                    <Input placeholder="Email" className="rounded-2xl" />
                    <Textarea
                      placeholder="Ваш вопрос"
                      className="min-h-[120px] rounded-2xl"
                    />
                    <Button className="rounded-2xl bg-red-600 hover:bg-red-700">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
}
