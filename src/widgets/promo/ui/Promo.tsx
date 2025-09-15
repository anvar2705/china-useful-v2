import { Button } from "@/shared/components/button";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/shared/components/container";

export function Promo() {
  return (
    <Container
      outer="py-16 px-6 lg:px-20 bg-gradient-primary"
      inner="grid lg:grid-cols-2 gap-10 items-center"
    >
      <div className="leading-relaxed">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
          Образование в Китае: знания, карьера и приключения в одном пути
        </h2>
        <p className="text-lg mb-4">
          Представьте, что перед вами открыты двери более чем{" "}
          <span className="font-semibold text-primary">300 ведущих вузов</span>{" "}
          и{" "}
          <span className="font-semibold text-primary">
            200 уникальных программ
          </span>
          . Выбирайте то, что по-настоящему вас увлекает и мотивирует на успех.
          Это ваш шанс войти в международное академическое сообщество.
        </p>
        <p className="text-lg mb-4">
          Обучение и языковые курсы в Китае — это не только лекции и семинары.
          Это приключение с ценными знакомствами, новыми идеями и незабываемыми
          эмоциями. Экскурсии, практические занятия и живое общение помогут вам
          быстро адаптироваться и глубже понять язык и культуру.
        </p>
        <p className="text-lg mb-4">
          Мы в <span className="font-semibold">China Useful</span> также
          помогаем решать финансовые вопросы: предоставляем информацию о
          стипендиях и грантах, которые делают обучение за рубежом доступнее.
        </p>
        <p className="text-lg mb-6">
          Для нас важно, чтобы вы чувствовали себя уверенно и комфортно на
          каждом этапе. Присоединяйтесь к нам, найдите свою идеальную программу
          и позвольте себе стремиться к большему.
        </p>
        <div className="flex gap-4">
          <Link href="/universities">
            <Button>Найти программу</Button>
          </Link>
          <Link href="/grants">
            <Button variant="outlined">Узнать о стипендиях</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="w-full h-full col-span-2 relative">
          <Image
            src={`photos/promo/IMG_5774.jpg`}
            alt="Университет в Китае"
            fill
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
        <Image
          src={`photos/promo/IMG_1654.jpg`}
          alt="Диплом"
          width={600}
          height={600}
          className="rounded-2xl shadow-md object-cover row-start-2"
        />
        <Image
          src={`photos/promo/IMG_5663.jpg`}
          alt="Выпускники"
          width={600}
          height={600}
          className="rounded-2xl shadow-md object-cover row-start-2"
        />
      </div>
    </Container>
  );
}
