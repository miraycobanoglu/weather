import CardItem from "./CardItem";

export const Card = ({ title }) => {
  const weathers = [
    {
      time: "13:00",
      temperature: "26°C",
    },
    {
      time: "14:00",
      temperature: "27°C",
    },
    {
      time: "15:00",
      temperature: "28°C",
    },
    {
      time: "16:00",
      temperature: "29°C",
    },
    {
      time: "17:00",
      temperature: "30°C",
    },
    {
      time: "18:00",
      temperature: "31°C",
    },
    {
      time: "19:00",
      temperature: "32°C",
    },
    {
      time: "15:00",
      temperature: "28°C",
    },
    {
      time: "16:00",
      temperature: "29°C",
    },
    {
      time: "17:00",
      temperature: "30°C",
    },
    {
      time: "18:00",
      temperature: "31°C",
    },
    {
      time: "19:00",
      temperature: "32°C",
    },
  ];

  return (
    <section className="grid grid-cols-12 mt-20">
      <div className="col-start-4 col-end-10 bg-gray-600 rounded-xl p-4">
        <h1 className="text-gray-900 text-md font-bold mb-4">{title}</h1>
        <div className="flex gap-x-6 overflow-auto">
          {weathers.map(({ time, temperature }) => (
            <CardItem time={time} temperature={temperature}></CardItem>
          ))}
        </div>
      </div>
    </section>
  );
};
