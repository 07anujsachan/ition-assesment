import { movieData } from "../data";
import React from "react";
import { useEffect, useState } from "react";

export const MovieList = () => {
  let [sortCountry, setSortCountry] = useState("");
  let [sortLanguage, setSortLanguage] = useState("");
  let [sortGenere, setSortGenere] = useState("");

  const handleChangeByLanguage = (event) => {
    setSortLanguage(event.target.value);
  };
  const handleChangeByCountry = (event) => {
    setSortCountry(event.target.value);
  };
  const handleChangeByGenere = (event) => {
    setSortGenere(event.target.value);
  };

  const allLanguages = movieData.reduce((languages, movie) => {
    movie.movielanguages.forEach((language) => {
      if (!languages.includes(language)) {
        languages.push(language);
      }
    });
    return languages;
  }, []);
  const allcountries = movieData.reduce((countries, movie) => {
    movie.moviecountries.forEach((country) => {
      if (!countries.includes(country)) {
        countries.push(country);
      }
    });
    return countries;
  }, []);

  const allgeneres = movieData.reduce((generes, movie) => {
    movie.moviegenres.forEach((genere) => {
      if (!generes.includes(genere)) {
        generes.push(genere);
      }
    });
    return generes;
  }, []);

  const filterByLanguage = (movie) => {
    if (!sortLanguage) return true;
    return movie.movielanguages.includes(sortLanguage);
  };

  const filterByGenre = (movie) => {
    if (!sortGenere) return true;
    return movie.moviegenres.includes(sortGenere);
  };

  const filterByCountry = (movie) => {
    if (!sortCountry) return true;
    return movie.moviecountries.includes(sortCountry);
  };

  const filteredMovies = movieData.filter(
    (movie) =>
      filterByLanguage(movie) && filterByGenre(movie) && filterByCountry(movie)
  );
  return (
    <div className="p-16 bg-[#2a0b2be6]">
      <h1 className="text-center text-white text-5xl font-bold mb-10">
        {" "}
        List Of Movies 🎬
      </h1>

      <div className="justify-between px-5 flex flex-col  md:flex-row  ">
        <select
          className="w-full p-4 "
          value={sortLanguage}
          onChange={handleChangeByLanguage}
        >
          {" "}
          <option value=""> Sort by Language</option>
          {allLanguages.map((language) => (
            <option value={language}> {language}</option>
          ))}
        </select>
        <select
          className="w-full p-4 "
          value={sortCountry}
          onChange={handleChangeByCountry}
        >
          {" "}
          <option value=""> Sort by Country</option>
          {allcountries.map((country) => (
            <option value={country}> {country}</option>
          ))}
        </select>
        <select
          className="w-full p-4 "
          value={sortGenere}
          onChange={handleChangeByGenere}
        >
          {" "}
          <option value=""> Sort by Genere</option>
          {allgeneres.map((genere) => (
            <option value={genere}> {genere}</option>
          ))}
        </select>
      </div>

      <div>
        {filteredMovies.map((movie) => (
          <div className="overflow-hidden flex flex-col md:flex-row  bg-gradient-to-br from-[#f9f1f9e6] to-[#831185e6] hover  w-[auto] m-4 p-4 rounded-xl ">
            <figure className="h-50">
              <img
                className="w-full h-full object-cover  "
                src={movie.moviemainphotos}
                alt="#"
              />
            </figure>
            <div className="w-[70%] md:full md:overflow-auto sm:overflow-auto">
              <h2 className="text-white text-4xl ml-8 font-semibold">
                {movie.movietitle}
              </h2>
              <p className="text-white text-xl ml-8 mt-4 font-medium">
                imdbmovieid - {movie.imdbmovieid}
              </p>
              <p className="ml-8 text-white mt-3 font-semibold">
                {" "}
                Country -{" "}
                {movie.moviecountries.map((country) => (
                  <span className="ml-2">{country}</span>
                ))}
              </p>
              <p className="text-white ml-8 mt-2 font-semibold">
                Language -{" "}
                {movie.movielanguages.map((lang) => (
                  <span className="ml-2">{lang}</span>
                ))}
              </p>
              <p className="text-white ml-8 mt-2 font-semibold">
                Gener -{" "}
                {movie.moviegenres.map((gen) => (
                  <span className="ml-2">{gen}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
