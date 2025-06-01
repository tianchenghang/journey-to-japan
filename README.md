# Your Japan travel assistant

- Use camelCase for variable and function names.
- Use PascalCase for class names and interface names.
- Use camelCase for interface members.
- Use PascalCase for type names and enum names.
- Name files with camelCase (for example, ebsVolumes.tsx or storage.ts)

```js
// Our official coze sdk for JavaScript [coze-js](https://github.com/coze-dev/coze-js)
import { CozeAPI } from "@coze/api";

const apiClient = new CozeAPI({
  token: "pat_xDAuDfaMCcj0WtDezTu0qIIFF9B6EYNaLtGfItH6CDVGjPi3PI7zVA71oBz5SD0W",
  baseURL: "https://api.coze.cn",
});
const res = await apiClient.chat.stream({
  bot_id: "7510893638935838770",
  user_id: "tianchenghang",
  additional_messages: [
    {
      content: "Which is bigger, 1 or 2?",
      content_type: "text",
      role: "user",
      type: "question",
    },
  ],
});
```
