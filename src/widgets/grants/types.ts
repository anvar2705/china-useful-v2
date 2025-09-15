export type CardContent = {
  chineseName: string;
  emoji: string;
  name: string;
  title: string;
  options: string[];
};

export type CardProps = {
  content: CardContent;
  color: "red" | "gray" | "lime";
};
