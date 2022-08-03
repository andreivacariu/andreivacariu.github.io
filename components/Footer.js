import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faDiscord,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container px-6 py-10 pb-6 mx-auto border-t border-gray-700 text-gray-100">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <div className="flex flex-col items-center">
            <Link href="/">
              <img
                loading="lazy"
                src="../logo.png"
                className="mb-2 w-28 cursor-pointer"
              />
            </Link>

            <div className="flex flex-wrap gap-2 py-4">
              <a
                href="https://discord.gg/3NyePhvapf"
                className="flex items-center justify-center w-12 h-12 duration-150 ease-in-out rounded-lg shadow cursor-pointer bg-black/25 group hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-5" />
              </a>
              <a
                href="https://twitter.com/eternalscapes"
                className="flex items-center justify-center w-12 h-12 duration-150 ease-in-out rounded-lg shadow cursor-pointer bg-black/25 group hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5" />
              </a>
              <a
                href="https://github.com/andreivacariu"
                className="flex items-center justify-center w-12 h-12 duration-150 ease-in-out rounded-lg shadow cursor-pointer bg-black/25 group hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5" />
              </a>
            </div>
            <p className="py-2 text-xs text-gray-500">
              @ eternalscapes.com | Not affiliated with Optifine or Mojang
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <p className="mb-4 font-bold text-main">About</p>
          <ul className="flex flex-col items-center mb-4 space-y-3 text-sm">
            <li>
            </li>
            <li>
              <Link href="https://patreon.com/eternalscapes">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Support Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/eternalscapes">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Github
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <p className="mb-4 font-bold text-main">Navigation</p>
          <ul className="flex flex-col items-center mb-4 space-y-3 text-sm">
            <li>
              <Link href="/users">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link href="/capes">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Capes
                </span>
              </Link>
            </li>
            <li>
              <Link href="/cosmetics">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Cosmetics
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <p className="mb-4 font-bold text-main">Legal</p>
          <ul className="flex flex-col items-center mb-4 space-y-3 text-sm">
            <li>
              <Link href="/legal">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Terms of Service
                </span>
              </Link>
            </li>
            <li>
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  office@eternalscapes.com
                </span>
            </li>
            <li>
              <Link href="/legal">
                <span className="text-white duration-200 ease-in-out cursor-pointer hover:text-main">
                  Privacy Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
