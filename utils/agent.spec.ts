import { describe, it } from "vitest";
import { ChatEventType, RoleType } from "@coze/api";
import { agentBotId } from "../constants/agent";
import { agentClient, agentUserId } from "./agent";

describe("Test agent", () => {
  it("Should response text", async () => {
    let respContent = "";
    try {
      const agentStream = agentClient.chat.stream({
        bot_id: agentBotId,
        user_id: agentUserId,
        auto_save_history: true,
        additional_messages: [
          {
            content: "Hello",
            content_type: "text",
            role: RoleType.User,
            type: "question",
          },
        ],
      });

      __anchor: for await (const chunk of agentStream) {
        switch (chunk.event) {
          case ChatEventType.CONVERSATION_MESSAGE_DELTA:
            if (chunk.data.content) {
              respContent += chunk.data.content;
            }
            console.log("Agent delta", respContent);
            break;

          case ChatEventType.CONVERSATION_MESSAGE_COMPLETED:
            if (chunk.data.type !== "answer") {
              console.log("chunk.data.type", chunk.data.type);
              break;
            }
            console.log("Agent completed", respContent);
            break;

          case ChatEventType.CONVERSATION_CHAT_COMPLETED:
            break __anchor;
        }
      }
    } catch (err) {
      console.error("Agent error", err);
    }
  });
});
