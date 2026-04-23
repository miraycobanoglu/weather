import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="grid grid-cols-12 gap-4 gap-x-2 pb-10">
      <Search />
      <Button
        text={"Refresh"}
        // startIcon={faArrowsRotate}
        endIcon={faArrowsRotate}
        iconClassName={""}
        onClick={() => {
          console.log("Button clicked");
        }}
      />
    </header>
  );
};
