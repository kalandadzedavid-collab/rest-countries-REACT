import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <main className="w-full pt-6 pb-16.25 px-3.5">
        <Searchbar />

        <section className="mt-8 flex flex-col items-center gap-10">
          <AllCountries />
        </section>
      </main>
    </>
  );
};

export default Home;

async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3"
    );

    if (!response.ok) {
      throw new Error("something went wrong");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

getCountries();

function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Call your async function here
    const loadData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    loadData();
  }, []);

  // Use 'return' before the .map so the JSX actually renders
  return (
    <>
      {countries.map((country) => (
        <Country
          id={country.cca3}
          capital={country.capital[0]}
          region={country.region}
          population={country.population}
          name={country.name.common}
          key={crypto.randomUUID()}
          flag={country.flags.svg}
        />
      ))}
    </>
  );
}

function Country({ flag, name, population, region, capital, id }) {
  return (
    <Link to={`/country/${id}`}>
    <div className="overflow-hidden w-64 h-80 bg-white rounded-[5px] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.03)]">
      <img className="pb-6" src={flag} alt="" />
      <div className="px-6 ">
        <h2
          className="text-neutral-900
text-lg
font-extrabold
leading-6 mb-4"
        >
          {name}
        </h2>

        <div className="flex flex-col gap-2">
          <p
            className="text-neutral-900
text-sm
font-semibold
leading-4"
          >
            Population: <span className="font-light">{population}</span>
          </p>

          <p
            className="text-neutral-900
text-sm
font-semibold
leading-4"
          >
            Region: <span className="font-light">{region}</span>
          </p>

          <p
            className="text-neutral-900
text-sm
font-semibold
leading-4"
          >
            Capital: <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
}
