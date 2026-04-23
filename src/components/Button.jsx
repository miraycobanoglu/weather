import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({
  text,
  startIcon,
  endIcon,
  iconClassName,
  textClassName,
  classNames,
  ...props
}) => {
  return (
    <button
      className={`bg-gray-700 text-gray-400 rounded-lg px-4 py-2 col-start-9 col-end-10 ${classNames}`}
      {...props}
    >
      {startIcon && (
        <FontAwesomeIcon
          icon={startIcon}
          className={`text-gray-400 pr-1 ${iconClassName}`}
        />
      )}
      {text && <span className={`text-gray-400 ${textClassName}`}>{text}</span>}
      {!startIcon && endIcon && (
        <FontAwesomeIcon
          icon={endIcon}
          className={`text-gray-400 pl-1 ${iconClassName}`}
        />
      )}
    </button>
  );
};
