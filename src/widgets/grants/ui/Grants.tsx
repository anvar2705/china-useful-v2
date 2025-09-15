import { Container } from "@/shared/components/container";
import { Title } from "@/shared/components/title";
import { GRANTS_ITEMS } from "../constants";
import { Card } from "./Card";

export const Grants = () => (
  <Container outer="bg-gradient-primary" inner="pb-20">
    <Title>Гранты</Title>

    <div className="mt-4 grid md:grid-cols-3 gap-8">
      {GRANTS_ITEMS.map((item) => {
        const { color, ...rest } = item;
        return <Card key={item.name} content={rest} color={item.color} />;
      })}
    </div>

    <div className="mt-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-8">
        Как <span className="text-primary">China Useful</span> может вам помочь
      </h2>
    </div>

    <div className="max-w-3xl space-y-8 text-gray-700">
      <div className="flex items-start gap-4">
        <div className="text-2xl">🔍</div>
        <div>
          <h3 className="font-semibold text-xl">Подбор подходящих грантов</h3>
          <p>Анализируем ваш профиль и предлагаем оптимальные варианты.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-2xl">📝</div>
        <div>
          <h3 className="font-semibold text-xl">Подготовка документов</h3>
          <p>
            Помогаем с мотивационными письмами, рекомендациями, планом и другими
            требованиями.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-2xl">💡</div>
        <div>
          <h3 className="font-semibold text-xl">Консультации по поступлению</h3>
          <p>Рассказываем о нюансах выбора вуза и программы.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-2xl">🤝</div>
        <div>
          <h3 className="font-semibold text-xl">Сопровождение до зачисления</h3>
          <p>Контролируем процесс подачи и коммуникацию с университетами.</p>
        </div>
      </div>
    </div>

    <div className="mt-12 text-gray-800">
      <p className="text-lg md:text-xl mb-4">
        С <span className="font-semibold text-primary">China Useful</span> вы
        увеличиваете шансы на получение финансирования и сосредотачиваетесь на
        своей цели — учебе в Китае!
      </p>
      <p className="text-lg md:text-xl font-medium">
        📩 Свяжитесь с нами сегодня, и мы поможем вам сделать первый шаг к
        образованию в Китае!
      </p>
    </div>
  </Container>
);
