import { faCloudMoonRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardItem({ time, temperature }) {
  return (
    <div className="flex flex-col items-center w-32 rounded-xl hover:bg-gray-800 py-4 px-4">
      <h4 className=" text-gray-400">{time}</h4>
      <FontAwesomeIcon
        icon={faCloudMoonRain}
        className="text-white text-6xl py-2"
      />
      <h4 className=" text-gray-400">{temperature}</h4>
    </div>
  );
}

export default CardItem;
