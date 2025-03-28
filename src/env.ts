import { Bot } from "grammy";
import { BotContext } from "./telegram/context";

export type Bindings = {
  BASE_URL: string;
  JWT_SECRET: string;
  TELEGRAM_BOT_SECRET: string;
  TELEGRAM_BOT_TOKEN: string;
  DB: D1Database;
};

export type Variables = {
  bot: Bot<BotContext>;
};

export type Env = {
  Bindings: Bindings;
  Variables: Variables;
};
