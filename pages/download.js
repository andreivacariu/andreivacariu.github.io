import React from "react";
import Head from "next/head";
const download = () => {
  return (
    <div>
      <section class="text-gray-700 body-font">
      <Head>
        <link rel="icon" href="/Eternals.ico" />
        <meta property="og:title" content="Download - Eternals Capes" />
        <meta property="og:description" content="Download Eternals Capes Loader." />
        <meta property="og:url" content="https://eternalscapes.com/download" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
        <title>Download - Eternals Capes</title>
      </Head>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200   ">
              Eternals Cosmetics
            </h1>
            <p class="mb-8 leading-relaxed text-gray-500">
              Do you want free capes and cosmetics? Well, you are at the right place!
              You can join our awesome community, while enjoying the looks of Minecraft!
            </p>
            <div class="flex justify-center">
              <a
                href="https://api.eternalscapes.com/assets/EternalsLoader.exe"
                class="inline-flex text-white bg-main/75 border-0 py-2 px-28 focus:outline-none hover:bg-main rounded text-lg"
              >
                Download
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://media.discordapp.net/attachments/931272875913138246/982221226648952922/bandana.png?width=340&height=340"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              Our Partners
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              The partners that are currently helping the growth of our
              community
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://crafatar.com/avatars/0cc52926-a755-44a9-a33e-d0185d5bb366?size=512"
                />
                <div class="flex-grow">
                  <a href="/user/IamWolfTV" class="text-gray-200 hover:text-green-400 title-font font-medium">
                    <h2> IamWolfTV </h2>
                  </a>
                  <a
                    href="https://trovo.live/WolfTV"
                    class="text-gray-500 hover:text-green-400"
                  >
                    Trovo
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default download;
