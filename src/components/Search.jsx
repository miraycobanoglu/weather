import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = () => {
  return (
    <div className="relative col-start-4 col-end-9">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-700 text-gray-400 rounded-lg pl-4 pr-10 py-2 outline-none w-full"
      />
      <FontAwesomeIcon
        icon={faLocationDot}
        className="text-gray-400 absolute right-4 top-3"
      />
    </div>
  );
};
