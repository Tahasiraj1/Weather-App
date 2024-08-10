import axios from 'axios';

// Define the type for the weather response.
interface WeatherResponse {
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
    }[];
    name: string; // Location name.
}

// Function to get weather data.
async function getWeather(location: string): Promise<void> {
    const apiKey = '438e80b3bc14e314abc2e78f2c620418';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get<WeatherResponse>(url);
        const weatherData = response.data;

        console.log(`Weather in: ${weatherData.name}`); // This excess the name element from weatherResponse.
        console.log(`Temperature: ${weatherData.main.temp}`); //This excess the temperature in main main element from weatherResponse.
        console.log(`Humidity: ${weatherData.main.humidity}`); // This is simmilar to upper one.
        console.log(`Description: ${weatherData.weather[0].description}`); // This excess the the index 0 of description which is most accurate in weather element from weatherResponse.
    } catch (error) {
        console.error(`Error fetching weather data:`, error)
    }
}

// Example usage
getWeather('Pakistan,karachi');


