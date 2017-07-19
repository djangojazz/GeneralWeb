import {Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import { TempConverter } from "./tempConverter"

let name = new Name("Brett", "Morin");
let loc = new WeatherLocation("raining", "Portland");
let other = new OtherName();

let cTemp = TempConverter.convertFtoC(38);

let tuple: [string, string, string];
tuple = ["Portland", "raining", TempConverter.convertFtoC("68")]

console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);