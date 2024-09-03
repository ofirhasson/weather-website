import express, { NextFunction, Request, Response } from "express";
import { weatherService } from "../5-services/weather-service";

class WeatherController {

    public readonly router = express.Router();

    public constructor() {
        this.registerRoutes();
    }

    private registerRoutes(): void {
        this.router.get("/weather/:cityName", this.getWeather);
    }

    // GET http://localhost:4000/api/weather/:cityName
    private async getWeather(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const cityName = request?.params?.cityName;
            const weatherJson = await weatherService.getWeather(cityName);
            response.json(weatherJson);
        }
        catch (err: any) { next(err); }
    }
}

const weatherController = new WeatherController();
export const weatherRouter = weatherController.router;
