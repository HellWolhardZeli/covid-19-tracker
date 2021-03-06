import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";
export default function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchedCountries]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(event) => {
            handleCountryChange(event.target.value);
          }}
        >
          <option value="global">global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
