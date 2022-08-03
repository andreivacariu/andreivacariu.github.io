import React from "react";

function getId(playername) {
  return fetch(`https://api.mojang.com/users/profiles/minecraft/${user.minecraftUsername}`)
    .then(data => data.json())
    .then(player => player.id);
}

const UserSearch = ({ user }) => {
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      throw err
    }

  };

  return (
    <div className="w-full p-2 m-2 mx-auto my-4 mt-2 overflow-hidden transition duration-300 ease-in-out transform rounded-lg shadow-lg md:ml-2 md:mr-2 bg-[#151616] hover:-translate-y-1 hover:scale-105">
      <div className="flex">
        <img
          loading="lazy"
          src={`https://mc-heads.net/avatar/${user.minecraftUsername}/100.png`}
          className="flex-none m-2 w-[100px] h-[100px] xxs:w-[64px] xxs:h-[64px] xxs:min-h-[64px] xxs:min-w-[64px] min-h-[100px] min-w-[100x] md:w-[128px] md:h-[128px] md:min-h-[128px] md:min-w-[128px] rounded-md"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col">
            <h3 className="w-full ml-2 xxs:mt-0 md:mt-[12px] font-bold text-white break-all xxs:text-xl">
              {user.minecraftUsername}
            </h3>
          </div>

          <div className="flex items-center justify-between xxs:hidden md:mt-3">
            <a
              type="button"
              href={`/user/${user.minecraftUsername}`}
              className="text-[12px] font-bold md:text-[14px] relative w-full px-2 py-2 m-2 overflow-hidden text-center transition-all duration-300 ease-out bg-main rounded-md group hover:bg-gradient-to-r hover:from-main/75 hover:to-main/100"
            >
              View
            </a>
            <button
              type="button"
              onClick={() => copyToClipBoard(getId(user.minecraftUsername))}
              className="text-[12px] md:text-[11px] font-bold relative w-full px-2 py-2 m-2 overflow-hidden text-center text-white transition-all duration-300 ease-out border border-main rounded-md bg-card hover:bg-white/5"
            >
              Copy Username
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
