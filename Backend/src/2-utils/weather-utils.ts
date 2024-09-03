import { HourModel } from "../3-models/weather-api-model";
import { HourDegree } from "../3-models/weather-model";

//get 5 hours arr - two before current hour and two after
export function get5HoursArr(hoursArr: HourModel[], currentHour: string): HourDegree[] {
    const hour = +currentHour.substring(0, 2);
    const newHoursArr: HourDegree[] = [];
    for (let i = - 2; i <= 2; i++) {
        const newHour = (hour + i + 24) % 24;
        const hourDegree = new HourDegree();
        hourDegree.hour = newHour.toString().padStart(2, '0');;
        hourDegree.degree = roundDegree(hoursArr[newHour].temp_c);
        newHoursArr.push(hourDegree);
    }
    return newHoursArr;
}

//round degree
export function roundDegree(degree: string): string {
    return Math.round(parseFloat(degree)).toString();
}

//get date in Format dd/mm/yyyy
export function getFormatDate(date: string): string {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return day + "/" + month + "/" + year;
}