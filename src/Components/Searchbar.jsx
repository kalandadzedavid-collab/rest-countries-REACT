import { useFilter } from "../store/useFilter";

const Searchbar = () => {

  const countryName = useFilter((state) => state.countryName)
  const findCountry = useFilter((state) => state.findCountry)

  const region = useFilter((state) => state.region)
  const findRegion = useFilter((state) => state.findRegion)
  console.log(region)
  return (
    <section className="w-full flex flex-col gap-10">
      <label
        className="flex gap-7 w-full bg-white py-4 px-8.75 rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)]"
        htmlFor="searchbar"
      >
        <img src="/search.svg" alt="" />
        <input value={countryName}
        onChange={(e) => findCountry(e.target.value)}
          id="searchbar"
          className="w-full text-neutral-900
text-xs
font-normal
leading-5 focus:outline-none"
          placeholder="Search for a country…"
          type="text"
        />
      </label>

      <select onChange={(e) => findRegion(e.target.value)} name="filter-region" className="w-50 bg-white px-6 py-3.5">
        <option className="focus:outline-none" defaultValue selected value="">
          Region: none
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Searchbar;
