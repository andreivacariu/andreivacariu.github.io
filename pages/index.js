import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCardAlt,
  faStarAndCrescent,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div className="pt-16">
      <Head>
        <link rel="icon" href="/Eternals.ico" />
        <meta property="og:title" content="Eternals Capes & Cosmetics" />
        <meta property="og:description" content="The free system for Minecraft Capes & Cosmetics, made for you." />
        <meta property="og:url" content="https://eternalscapes.com/" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
        <title>Eternals Capes</title>
      </Head>
      <div className="max-w-full">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img src="logo.png" className="w-[14em]" />
          </div>
          <div className="flex flex-col items-center px-[20em] text-white">
            <h1 className="text-4xl font-bold text-center lg:text-4xl">
              Easiest way to get capes is with Eternals Capes & Cosmetics
            </h1>
            <p className="max-w-screen-md mt-6 text-2xl text-center opacity-75 lg:text-2xl lg:mt-8">
              All you need is to join our Discord server or download our app.
            </p>
          </div>
          <div className="flex flex-col items-center px-8 mt-8 mb-8 lg:flex-row lg:justify-center lg:mt-10 lg:mb-10">
            <a
              href="https://discord.gg/3NyePhvapf"
              className="w-64 px-4 py-2 text-lg font-bold text-center cursor-pointer text-black duration-150 ease-in-out bg-main/75 rounded-md lg:text-xl lg:py-3 lg:px-6 lg:mx-2 hover:bg-main"
            >
              Join our Discord
            </a>
            <a
              href="#commands"
              className="w-64 px-4 py-2 mt-4 text-lg font-bold text-center duration-150 ease-in-out bg-white rounded-md cursor-pointer lg:text-xl bg-gray-lightest lg:py-3 lg:px-6 lg:mt-0 lg:mx-2 hover:bg-gray-400"
            >
              View Commands
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap justify-center py-8 mx-8 overflow-hidden text-center">
          <div className="w-full px-4 my-auto space-y-2 overflow-hidden lg:w-1/2 xl:w-1/2">
            <div className="text-3xl font-bold text-gray-100 md:text-2xl">
              <FontAwesomeIcon
                icon={faIdCardAlt}
                className="w-8 mr-2 text-main"
              />
              Link your Minecraft account with ease
            </div>
            <div className="text-lg font-semibold text-gray-300 md:text-2xl">
              Eternals allows you to link your Minecraft username quickly, even if you play on cracked Minecraft.
            </div>
          </div>
          <div className="flex justify-center px-4 my-4 overflow-hidden lg:w-1/2 xl:w-1/2">
            <img
              src="landing1.png"
              className="border border-gray-800 rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-center py-8 mx-8 overflow-hidden text-center">
          <div className="w-full px-4 my-auto space-y-2 overflow-hidden lg:w-1/2 xl:w-1/2">
            <div className="text-3xl font-bold text-gray-100 md:text-3xl">
              <FontAwesomeIcon
                icon={faStarAndCrescent}
                className="w-4 mr-2 text-purple-500"
              />
              Eternals Cosmetics
            </div>
            <div className="text-lg font-semibold text-gray-300 md:text-2xl">
              With Eternals Capes you can get the most awesome cosmetics and capes,
              completely for free.
            </div>
          </div>
          <div className="flex justify-center px-4 my-4 overflow-hidden lg:w-1/2 xl:w-1/2">
            <img
              src="https://media.discordapp.net/attachments/911963826864394250/912072477750988842/unknown.png"
              className="border border-gray-800 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-8 space-y-4 text-white">
        <div className="max-w-3xl mx-auto my-8 space-y-4 text-white">
          <div
            id="commands"
            className="max-w-screen-md py-4 mx-auto text-4xl font-bold text-center text-white lg:text-6xl"
          >
            Bot Commands
          </div>
          {["link", "unlink", "cape", "cosmetic", "profile", "list"].map((x) => {
            return (
              <div className="flex flex-col w-full p-4 overflow-hidden rounded shadow-md cursor-pointer bg-gray-800/25">
                <div className="flex flex-row items-center">
                  <div className="flex flex-row items-center justify-between flex-grow">
                    <h2 className="ml-5 text-xl font-bold xl:text-2xl">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 mr-2 text-main"
                      />
                      /{x}
                      <span className="ml-2 font-normal opacity-50"> </span>
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
