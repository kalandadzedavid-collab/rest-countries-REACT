const Searchbar = () => {
  return (
    <section className="w-full flex flex-col gap-10">
      <label
        className="flex gap-7 w-full bg-white py-4 px-8.75 rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)]"
        htmlFor="searchbar"
      >
        <img src="/search.svg" alt="" />
        <input
          id="searchbar"
          className="text-neutral-900
text-xs
font-normal
leading-5 focus:outline-none"
          placeholder="Search for a country…"
          type="text"
        />
      </label>

      <select name="filter-region" className="w-50 bg-white px-6 py-3.5">
        <option className="focus:outline-none" disabled>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Oceania</option>
      </select>
    </section>
  );
};

export default Searchbar;
