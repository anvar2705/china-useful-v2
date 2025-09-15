import { CardProps } from "../types";

export const Card = (props: CardProps) => {
  const { content, color } = props;
  const { chineseName, emoji, name, title, options } = content;

  const borderColorCalc =
    color === "gray"
      ? "border-gray-400"
      : color === "lime"
      ? "border-lime-500"
      : "border-red-500";
  const bgColorCalc =
    color === "gray"
      ? "bg-gray-400"
      : color === "lime"
      ? "bg-lime-500"
      : "bg-red-500";

  console.log("color", color);

  return (
    <div
      className={`bg-white border-2 ${borderColorCalc} rounded-2xl shadow-lg p-6 hover:shadow-xl transition relative`}
    >
      <div
        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${bgColorCalc} text-white text-sm px-4 py-1 rounded-full shadow`}
      >
        {chineseName}
      </div>
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h3>
      <p className="text-gray-600 mb-3">{title}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};
