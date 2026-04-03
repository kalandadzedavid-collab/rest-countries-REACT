import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Country = () => {
  function DetailCountry() {
    let { id } = useParams();
    id = id.toLowerCase();

    const [country, setCountry] = useState({});

    useEffect(() => {
      // Call your async function here
      const loadData = async () => {
        const data = await getDetails(id);
        setCountry(data);
      };
      loadData();
    }, []);

    console.log(country.flags);

    const languages = country.languages
      ? Object.values(country.languages).join(", ")
      : "None";

    return (
      <CountryCard
        tld={country.tld}
        languages={languages}
        capital={country?.capital}
        subRegion={country?.subregion}
        region={country?.region}
        population={country?.population}
        native={country?.name?.nativeName?.eng?.common}
        name={country?.name?.common}
        flag={country?.flags?.svg}
      ></CountryCard>
    );
  }

  return (
    <main className="px-8">
      <Link to="/">
        <button
          className="mt-10 w-24 h-7 bg-white rounded-sm shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)] text-neutral-900
text-xs
font-light"
        >
          Go back
        </button>
      </Link>
      <DetailCountry></DetailCountry>
    </main>
  );
};

export default Country;

async function getDetails(id) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${id}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
    );

    if (!response.ok) {
      throw new Error("something went wrong");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function CountryCard({
  flag,
  name,
  native,
  population,
  region,
  subRegion,
  capital,
  languages,
  tld,
}) {
  return (
    <div className="w-full flex flex-col pt-16">
      <img className="rounded self-center mb-5 w-80" src={flag} alt="" />

      <h3
        className="text-neutral-900
text-xl
font-extrabold mb-4"
      >
        {name}
      </h3>

      <div className="mb-8 text-neutral-900 text-sm font-semibold leading-4">
        <p>
          Native Name: <span className="font-light">{native}</span>
        </p>
        <p>
          Population: <span className="font-light">{population}</span>
        </p>
        <p>
          Region: <span className="font-light">{region}</span>
        </p>
        <p>
          Sub Region: <span className="font-light">{subRegion}</span>
        </p>
        <p>
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>

      <div className="mb-8.5 text-neutral-900 text-sm font-semibold leading-4">
        <p>
          Top Level Domain: <span className="font-light">{tld}</span>
        </p>
        <p>
          Currencies: <span className="font-light">0</span>
        </p>
        <p>
          Languages: <span className="font-light">{languages}</span>
        </p>
      </div>

      <div>
        <h4
          className="text-neutral-900
text-base
font-semibold leading-6 mb-4"
        >
          Border Countries:
        </h4>

        <div>
          <button
            className=" w-24 h-7 bg-white rounded-sm shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)] text-neutral-900
text-xs
font-light"
          >
            France
          </button>
        </div>
      </div>
    </div>
  );
}
