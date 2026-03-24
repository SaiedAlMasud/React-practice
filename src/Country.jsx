import Countries from "./Countries"
import { Suspense } from "react"

const countryInfo = fetch(`https://restcountries.com/v3.1/name/`)
    .then(response => response.json())

function Country() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Countries countryInfo={countryInfo}>

            </Countries>
        </Suspense>
    )

}