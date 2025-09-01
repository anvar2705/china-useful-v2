import { Badge } from "@/shared/components/badge/ui/Badge";
import { Button } from "@/shared/components/button";
import { Card, CardContent } from "@/shared/components/card";
import { Container } from "@/shared/components/container";
import { motion } from "framer-motion";
import { Globe2, Users } from "lucide-react";

export const Hero: React.FC<{ onCTA: () => void }> = ({ onCTA }) => (
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
