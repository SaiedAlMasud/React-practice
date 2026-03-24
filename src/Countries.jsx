export default function Countries({ countries }) {
    return (
        <div>
            {countries.map((country) => (
                <div key={country.name.common}>
                    <h2>{country.name.common}</h2>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            ))}
        </div>
    )
}