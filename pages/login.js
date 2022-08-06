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
        <title>Login | Eternals Capes</title>
          </Head>
          <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-4/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                          <div className="rounded-t mb-0 px-6 py-6">
                              <div className="text-center mb-3">
                                  <h6 className="text-gray-600 text-sm font-bold">
                                      Sign in with
                                  </h6>
                              </div>
                              <div className="btn-wrapper text-center">
                                  <button
                                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                      type="button"
                                      style={{ transition: "all .15s ease" }}
                                  >

                                      Github
                                  </button>
                                  <button
                                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                      type="button"
                                      style={{ transition: "all .15s ease" }}
                                  >

                                      Google
                                  </button>
                              </div>
                              <hr className="mt-6 border-b-1 border-gray-400" />
                          </div>
                          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                              <div className="text-gray-500 text-center mb-3 font-bold">
                                  <small>Or sign in with credentials</small>
                              </div>
                              <form>
                                  <div className="relative w-full mb-3">
                                      <label
                                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-password"
                                      >
                                          Email
                                      </label>
                                      <input
                                          type="email"
                                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                          placeholder="Email"
                                          style={{ transition: "all .15s ease" }}
                                      />
                                  </div>

                                  <div className="relative w-full mb-3">
                                      <label
                                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-password"
                                      >
                                          Password
                                      </label>
                                      <input
                                          type="password"
                                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                          placeholder="Password"
                                          style={{ transition: "all .15s ease" }}
                                      />
                                  </div>
                                  <div>
                                      <label className="inline-flex items-center cursor-pointer">
                                          <input
                                              id="customCheckLogin"
                                              type="checkbox"
                                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                              style={{ transition: "all .15s ease" }}
                                          />
                                          <span className="ml-2 text-sm font-semibold text-gray-700">
                                              Remember me
                                          </span>
                                      </label>
                                  </div>

                                  <div className="text-center mt-6">
                                      <button
                                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                          type="button"
                                          style={{ transition: "all .15s ease" }}
                                      >
                                          Sign In
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="flex flex-wrap mt-6">
                          <div className="w-1/2">
                              <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                  className="text-gray-300"
                              >
                                  <small>Forgot password?</small>
                              </a>
                          </div>
                          <div className="w-1/2 text-right">
                              <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                  className="text-gray-300"
                              >
                                  <small>Create new account</small>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>

  );
}
