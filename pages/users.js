import React, { useState } from "react";
import useSWR from "swr";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fuse from "fuse.js";
import UserSearch from "../components/UserSearch";
import fetcher from "../lib/utils";
import Head from "next/head";
import Loading from "../components/Loading";
const users = () => {
  const url = "api/v1/user";
  const [query, setQuery] = useState("");
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>

  const fuse = new Fuse(data, {
    keys: ["username"],
    includeScore: true,
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }
  function isBigEnough(x) {
    return x.score < 0.2;
  }
  const results = fuse.search(query);
  const res =
    results.length > 0 ? results.filter(isBigEnough).map((x) => x.item) : data;
  return (
    <>
      <div className="flex flex-col justify-between w-full h-full min-h-screen">
        <head>
          <link rel="icon" href="/Eternals.ico" />
          <meta property="og:title" content="Users - Eternals Capes" />
          <meta property="og:description" content="Check out other users skins!." />
          <meta property="og:url" content="https://eternalscapes.com/users" />
          <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
          <title>Users - Eternals Capes</title>
        </head>
        <div className="container mt-12 mb-auto">
          <h1 className="text-3xl font-bold text-white md:ml-2">
            Find Eternals Users
          </h1>
          <div className="flex items-center mt-4 mb-4">
            <div className="relative w-full md:ml-2">
              <div className="relative w-full md:w-11/12 xl:w-2/3">
                <div className="relative flex flex-row w-full px-2 border-0 bg-[#131313] rounded-lg focus:outline-none shadow-none">
                  <div className="relative w-full mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      value={query}
                      onChange={handleChange}
                      className="w-full p-5 font-semibold align-baseline outline-none border-0 md:pl-14 text-gray-300 placeholder-gray-500 placeholder-opacity-60 bg-[#131313]"
                      placeholder="Search users by Minecraft name"
                    />
                    <div className="absolute inset-y-0 items-center hidden ml-2 left-3 md:flex">
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
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {res.map((item) => {
                return <UserSearch user={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default users;
