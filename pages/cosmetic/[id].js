import React, { useEffect } from "react";
import { useRouter } from "next/router";
import fetcher from "../../lib/utils";
import useSWR from "swr";
import Head from "next/head";
import Loading from "../../components/Loading";

const cosmeticPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const url = `../api/v1/cosmetic/${id}`;
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>
  return (
    <>
      <Head>
        <title>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</title>
        <link rel="icon" href="/Eternals.ico" />
      </Head>
      <div className="w-full h-full overflow-hidden">
        <div className="flex items-center justify-center h-auto pt-16 mb-10">
          <div className="w-10/12 max-w-4xl p-2 m-2 mx-auto mt-2 overflow-hidden rounded-lg shadow-lg bg-black/50">
            <div className="flex flex-col md:flex-row md:ml-10 md:mt-10 md:mb-10">
              <div className="flex items-center justify-center flex-none w-full rounded-md object-fit md:w-1/3 min-h-100 py-[0em] bg-bg-main">
                <div className="w-full">
                  <div className="flex items-center justify-center">
                    <img
                      src={`https://api.eternalscapes.com/assets/preview/cosmetics/${data.id}.png`}
                      className="w-[300px]  rounded-md"

                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:px-4 md:w-2/3 justify-center">
                <h3 className="flex items-center justify-center my-4 text-3xl font-bold text-white capitalize">
                  {data.name}
                </h3>
                <div className="flex justify-center w-full mt-4 text-white md:w-3/4 md:ml-16">
                  <div className="items-center justify-center w-32 px-2 py-2 text-center rounded-l-lg md:pl-4 bg-gray-700/50">
                    <p className="font-semibold">Get Cosmetic</p>
                  </div>
                  <div className="flex items-center justify-center w-full pl-2 pr-2 rounded-r-lg bg-gray-700/75">
                    <div className="font-semibold truncate">
                      /cosmetic {data.id}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4 text-white md:w-3/4 md:ml-16">
                  <div className="items-center justify-center w-32 px-2 py-2 text-center rounded-l-lg md:pl-4 bg-gray-700/50">
                    <p className="font-semibold">Type</p>
                  </div>
                  <div className="flex items-center justify-center w-full pl-2 pr-2 rounded-r-lg bg-gray-700/75">
                    <div className="font-semibold truncate capitalize">
                      {data.type}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4 text-white md:w-3/4 md:ml-16">
                  <div className="items-center justify-center w-32 px-2 py-2 text-center rounded-l-lg md:pl-4 bg-gray-700/50">
                    <p className="font-semibold">Description</p>
                  </div>
                  <div className="flex items-center justify-center w-full pl-2 pr-2 rounded-r-lg bg-gray-700/75">
                    <div className="font-semibold truncate capitalize">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cosmeticPage;
