import { Header } from "../components/Header";
import { City } from "../components/City";
import { Card } from "../components/Card";

export const WeatherPage = () => {
  return (
    <main className="bg-gray-900 h-screen py-10">
      <Header />
      <City cityName={"Istanbul"} temperature={26} feelsLike={29} />
      <Card title={"Bugünlük Hava Durumu"} />
    </main>
  );
};
