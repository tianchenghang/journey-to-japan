import AgentMsg from "@/components/home/AgentMsg";
import UserMsg from "@/components/home/UserMsg";

export interface IMsgItem {
  key: string;
  role: "user" | "agent";
  content: string;
  deepSearch?: string;
  isLoading?: boolean;
}

interface IProps {
  item: IMsgItem;
}

export default function MsgItem({ item }: IProps) {
  const { role } = item;
  return role === "user" ? <UserMsg item={item} /> : <AgentMsg item={item} />;
}
