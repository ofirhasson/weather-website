import dotenv from "dotenv";

dotenv.config();

class AppConfig {
    public readonly port = process.env.PORT;
}

export const appConfig = new AppConfig();
