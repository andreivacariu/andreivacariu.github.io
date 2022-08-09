import Link from "next/link";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useSession, signIn } from "next-auth/react";

const Navbar = () => {
  const {data:profile} = useSession()

  return (
    <header className="top-0 sticky z-40 bg-bg-main">
      <div className="mx-auto max-w-5xl px-5 md:max-w-[74.5em]">
        <div className="relative flex items-center justify-center h-20">
          <div className="absolute left-0">
            <Link href="/">
              <a>
                <img src="../logo.png" className="w-11" />
              </a>
            </Link>
          </div>
          <div className="justify-center hidden lg:flex">
            <div>
              <div className="relative flex xl:space-x-4">
                <NavLink href="/" className="nav-button">
                  Home
                </NavLink>
                <NavLink href="/capes" className="nav-button">
                  Capes
                </NavLink>
                <NavLink href="/cosmetics" className="nav-button">
                  Cosmetics
                </NavLink>
                <NavLink href="/users" className="nav-button">
                  Users
                </NavLink>
                <NavLink href="/download" className="nav-button">
                  Download
                </NavLink>
              </div>
            </div>
          </div>
                  <div className="absolute right-0">
                      <div>
                          {!profile && (
                              <>
                                  <button className="discord" onClick={() => signIn("discord")}>
                                      <a className="flex">
                                          <FontAwesomeIcon
                                              icon={faDiscord}
                                              className="w-5 mr-4 mt-1"
                                          />
                                          <p> Sign in </p>
                                      </a>
                                  </button>
                              </>
                          )}

                          {profile && (
                              <>
                                  <div className="relative inline-block text-left">
                                      <div>
                                          <Dropdown img={profile.user.image} />
                                      </div>
                                  </div>
                              </>
                          )}
                      </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
