import React, { useState } from "react";
import useSWR from "swr";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CapeSearch from "../components/CapeSearch";
import Fuse from "fuse.js";
import fetcher from "../lib/utils";
import Head from "next/head";
import Loading from "../components/Loading";

const capes = () => {
  const url = "api/v1/cape";
  const [query, setQuery] = useState('');
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>
  
  const fuse = new Fuse(data, { keys: ["id"], includeScore: true });

  function handleChange(e) {
    setQuery(e.target.value);
  }
  function isBigEnough(x) {
    return x.score < 0.2
  }
  const results = fuse.search(query);
  const res = results.length > 0 ? results.filter(isBigEnough).map(x => x.item) : data
  
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen">
      <Head>
        <link rel="icon" href="/Eternals.ico" />
        <meta property="og:title" content="Capes - Eternals Capes" />
        <meta name="description" content="Check our awesome capes." />
        <link rel="canonical" href="https://eternalscapes.com/capes" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
        <title>Capes - Eternals Capes</title>
      </Head>
      <div className="container mt-12 mb-auto">
        <h3 className="text-3xl font-bold text-gray-100">Eternals Capes</h3>
        <div className="flex items-center mt-4 mb-4">
          <div className="relative w-full">
            <div className="relative w-full md:w-11/12 xl:w-2/3">
              <div className="relative flex flex-row w-full px-2 border-0 rounded-lg shadow-none">
                <div className="relative w-full mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => handleChange(e)}
                    placeholder="Search for capes"
                    className="w-full p-5 focus:outline-none font-semibold align-baseline border-0 md:pl-14 text-[#c4c4c4] placeholder-[#616161] bg-black/25"
                  />
                </div>
                <div className="absolute inset-y-0 items-center hidden ml-5 md:flex">
                  <span className="flex items-center justify-start w-auto">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="w-5 h-5 text-white opacity-60 fa-lg hover:text-main focus:outline-none"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {res.map((item) => {
            return (
              <CapeSearch
                url={`https://api.eternalscapes.com/assets/preview/capes/${item.id}.png`}
                cape={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default capes;
