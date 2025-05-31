import AgentMessage from "@/components/home/AgentMessage";
import UserMessage from "@/components/home/UserMessage";

export interface IMessageItem {
  key: string;
  role: "user" | "agent";
  content: string;
  deepSearch?: string;
}

interface IProps {
  item: IMessageItem;
}

export default function MessageItem({ item }: IProps) {
  const { role } = item;
  return role === "user" ? (
    <UserMessage item={item} />
  ) : (
    <AgentMessage item={item} />
  );
}
