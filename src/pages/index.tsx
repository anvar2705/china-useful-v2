import { Hero } from "@/widgets/hero";
import { Grants } from "@/widgets/grants";
import { CTAForm } from "@/widgets/cta-form";
import { ForWho } from "@/widgets/for-who";
import { Promo } from "@/widgets/promo";
import { LanguageYear } from "@/widgets/language-year";

export default function ChinaUsefulPrototype() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Promo />
      <ForWho />
      <Grants />
      <LanguageYear />
      <CTAForm />

      {/* {route === "home" && (
        <>
          <Hero onCTA={() => setRoute("contacts")} />
          <FeatureGrid />
          <Grants />
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
          <Container outer="py-12 md:py-16">
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
          <Grants />
          <Container outer="py-12 md:py-16">
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
          <Container outer="py-12 md:py-16">
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
          <Container outer="py-12 md:py-16">
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
          </Container> */}
      {/* <Footer />
        </>
      )} */}
    </div>
  );
}
