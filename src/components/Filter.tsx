import SearchBox from "./SearchBox";
import SelectRegion from "./SelectRegion";

export default function Filter() {
  return (
    <div className="mx-4 my-5 flex items-center flex-col gap-3 sm:flex-row sm:justify-between sm:items-stretch">
      <SearchBox />
      <SelectRegion />
    </div>
  );
}
