import { faCloudMoonRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const City = ({ cityName, temperature, feelsLike }) => {
  return (
    <section className="pt-10 grid grid-cols-12">
      <div className="col-start-4 col-end-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-white text-4xl font-bold">{cityName}</h1>
              <h4 className="text-gray-400 text-xs">
                Hissedilen Sıcaklık ${feelsLike}°C
              </h4>
            </div>
            <h1 className="text-white mt-8 text-4xl font-bold">
              {temperature}°C
            </h1>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCloudMoonRain}
              className="text-white text-9xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
