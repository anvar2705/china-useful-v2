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

// --- Примитивные UI-компоненты ---
export const Button: React.FC<
  React.PropsWithChildren<{
    className?: string;
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md";
    onClick?: () => void;
  }>
> = ({
  className = "",
  variant = "default",
  size = "md",
  onClick,
  children,
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50";
  let styles = "";
  if (variant === "default") styles = "bg-red-600 text-white hover:bg-red-700";
  if (variant === "outline")
    styles = "border border-zinc-300 text-zinc-800 hover:bg-zinc-50";
  if (variant === "ghost") styles = "text-zinc-700 hover:bg-zinc-100";
  const padding = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles} ${padding} ${className}`}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`rounded-lg border border-zinc-200 bg-white ${className}`}>
    {children}
  </div>
);
export const CardHeader: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`px-4 pt-4 ${className}`}>{children}</div>
);
export const CardContent: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`px-4 pb-4 ${className}`}>{children}</div>
);
export const CardTitle: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <input
    {...props}
    className={`w-full border border-zinc-300 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
      props.className || ""
    }`}
  />
);
export const Textarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = (props) => (
  <textarea
    {...props}
    className={`w-full border border-zinc-300 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
      props.className || ""
    }`}
  />
);

export const Tabs: React.FC<
  React.PropsWithChildren<{ defaultValue: string; className?: string }>
> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
export const TabsList: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);
export const TabsTrigger: React.FC<
  React.PropsWithChildren<{ value: string; className?: string }>
> = ({ children, className = "" }) => (
  <button
    className={`rounded-md border px-3 py-1 text-sm hover:bg-zinc-100 ${className}`}
  >
    {children}
  </button>
);
export const TabsContent: React.FC<
  React.PropsWithChildren<{ value: string; className?: string }>
> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <span
    className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

// --- Палитра и токены (в Tailwind классы встроены, ниже — справочно) ---
// const palette = {
//   primary: "#D32F2F", // красный
//   accent: "#FBC02D", // золотой
//   text: "#212121", // тёмно-серый
//   bg: "#FFFFFF",
//   soft: "#F5F5F5",
// };

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 ${className}`}>
    {children}
  </div>
);

const Nav: React.FC<{ onNavigate: (route: string) => void; route: string }> = ({
  onNavigate,
  route,
}) => {
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

const Hero: React.FC<{ onCTA: () => void }> = ({ onCTA }) => (
  <div className="relative overflow-hidden border-b bg-gradient-to-b from-white to-red-50">
    <Container className="grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-20">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl"
        >
          Откройте мир знаний и возможностей в Китае
        </motion.h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
          300+ успешно отправленных студентов, реальные кейсы, поддержка на
          каждом этапе — от выбора университета до заселения в кампус.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            className="rounded-2xl bg-red-600 hover:bg-red-700"
            onClick={onCTA}
          >
            Бесплатная консультация
          </Button>
          <Button variant="outline" className="rounded-2xl">
            Смотреть университеты
          </Button>
          <Badge className="rounded-full bg-yellow-500/90 text-zinc-900">
            Языковой год 2025
          </Badge>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
          {[
            { k: "+300", v: "студентов" },
            { k: "200+", v: "программ" },
            { k: "2018", v: "основаны" },
          ].map((s) => (
            <Card key={s.k} className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <div className="text-2xl font-bold md:text-3xl">{s.k}</div>
                <div className="text-sm text-zinc-600">{s.v}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="aspect-[4/3] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
        <div className="absolute -bottom-4 -right-4 hidden w-36 rounded-2xl bg-white p-3 shadow-lg md:block">
          <div className="flex items-center gap-2 text-sm text-zinc-700">
            <Users className="h-4 w-4" /> Поддержка 24/7
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-zinc-700">
            <Globe2 className="h-4 w-4" /> Поступление без ЕГЭ
          </div>
        </div>
      </motion.div>
    </Container>
  </div>
);

const FeatureGrid: React.FC = () => (
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

const UniversityCard: React.FC<{
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

const UniversitiesPage: React.FC = () => {
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
      <Container className="py-10 md:py-14">
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
            <Button variant="outline" className="rounded-2xl">
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

const GrantsStrip: React.FC = () => (
  <Container className="py-12 md:py-16">
    <div className="rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-6 text-white shadow-md">
      <div className="grid items-center gap-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-semibold md:text-2xl">
            Гранты и стипендии
          </div>
          <p className="mt-1 text-sm opacity-90">
            CSC, провинциальные и университетские гранты — подберём оптимальный
            вариант под ваш профиль
          </p>
        </div>
        <ul className="space-y-2 text-sm md:space-y-1">
          {[
            "Полное/частичное покрытие обучения",
            "Страховка и ежемесячные выплаты",
            "Подготовка мотивационных писем и рекомендаций",
          ].map((it) => (
            <li key={it} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" /> {it}
            </li>
          ))}
        </ul>
        <div className="md:justify-self-end">
          <Button className="rounded-2xl bg-white text-red-600 hover:bg-zinc-50">
            Узнать о грантах
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

const Reviews: React.FC = () => (
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

const CTAForm: React.FC = () => (
  <div className="bg-zinc-50">
    <Container className="py-12 md:py-16">
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h4 className="text-xl font-semibold md:text-2xl">
              Бесплатная консультация
            </h4>
            <p className="mt-1 text-sm text-zinc-600">
              Оставьте заявку — подберём вузы, гранты и подскажем оптимальный
              путь поступления
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Поступление
                без ЕГЭ
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Поддержка до
                зачисления
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-red-600" /> Прозрачные
                условия и сроки
              </li>
            </ul>
          </div>
          <form className="space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Имя" className="rounded-2xl" />
              <Input placeholder="Телефон/Telegram" className="rounded-2xl" />
            </div>
            <Input placeholder="Email" className="rounded-2xl" />
            <Textarea
              placeholder="Куда хотите поступить?"
              className="min-h-[100px] rounded-2xl"
            />
            <Button className="w-full rounded-2xl bg-red-600 hover:bg-red-700">
              Отправить
            </Button>
            <div className="text-xs text-zinc-500">
              Отправляя форму, вы соглашаетесь с политикой конфиденциальности
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  </div>
);

const Footer: React.FC = () => (
  <footer className="border-t bg-white">
    <Container className="grid gap-8 py-8 md:grid-cols-4">
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
          <UniversitiesPage />
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
