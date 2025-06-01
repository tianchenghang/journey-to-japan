import { CozeAPI } from "@coze/api";

// import "react-native-get-random-values";
// import { v4 as uuid } from "uuid";

export const agentClient = new CozeAPI({
  token: "pat_xDAuDfaMCcj0WtDezTu0qIIFF9B6EYNaLtGfItH6CDVGjPi3PI7zVA71oBz5SD0W",
  baseURL: "https://api.coze.cn",
  allowPersonalAccessTokenInBrowser: true,
});

export const agentUserId = "journey-to-japan";
