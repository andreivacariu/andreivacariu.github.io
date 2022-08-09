import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useSession, signOut } from "next-auth/react";

const Dropdown = ({ img }) => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="dropdown">
      <img
        onClick={(e) => {
          setOpen(!isOpen);
        }}
        src={img}
        className="rounded-full w-10 border-2 border-gray-500 hover:border-main"
      />
      {isOpen && (
        <div className="dropdown-container">
          <a href={`/user/${session.profile.id}`} className="dropdown-item flex items-center gap-x-3">
            <FontAwesomeIcon
              icon={faUserAlt}
              className="w-4"
            />
            View Profile
          </a>
          <a href={`/linkmc`} className="dropdown-item flex items-center gap-x-3">
            <FontAwesomeIcon
              icon={faUserAlt}
              className="w-4"
            />
            Link MC
          </a>
          <div className="dropdown-item flex items-center gap-3 hover:text-[#e03434]" onClick={e=> {signOut()}}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="w-4"
            />
            Sign out
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
