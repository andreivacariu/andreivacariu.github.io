import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import Head from "next/head";
export async function getServerSideProps(context) {
  const { id } = context.params;
    const res = await fetch(`http://localhost:3000/api/v1/user/${id}`);
  const data = await res.json();


  return {
    props: {
      user: data,
    },
  };
}

const userPage = ({ user }) => {
  if(!user) return <Loading/>
  var cosmetics = JSON.parse(user.currentCosmetics);
  useEffect(() => {
    let aScript = document.createElement("script");
    aScript.src = "../../skinview3d.bundle.js";
    aScript.type = "text/javascript";

    document.head.appendChild(aScript);

    aScript.onload = function () {
      let skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 400,
        skin: `https://mc-heads.net/skin/${user.minecraftUsername}.png`
      });
   
      var keys = Object.keys(skinViewer);
        skinViewer.loadCape(`http://129.151.135.15/capes/${user.minecraftUsername}.png`).catch(e => { console.error("help idiot " + e); });
      skinViewer.fov = 90;

      let control = skinview3d.createOrbitControls(skinViewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;
      skinViewer.animations.add(skinview3d.RotatingAnimation);
    };
  }, []);
    var test = user.minecraftUsername + " - Eternals Capes";
    var url = "https://eternalscapes.com/user/" + user.minecraftUsername;
  return (
      <>
        <div className="w-full h-full overflow-hidden">
          <Head>
            <link rel="icon" href="/Eternals.ico" />
            <meta property="og:title" content={test} />
            <meta property="og:description" content="Check {test2}'s inventory" />
            <link rel="canonical" href={url} />
            <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
            <title>{test}</title>
          </Head>
          <div className="flex items-center justify-center h-auto">
            <div className="w-full">
              <div className="w-full pt-4 pb-2 bg-black/50">
                <div className="w-full px-4 m-2 mx-auto max-w-80 sm:px-8 lg:px-6">
                  <div className="flex md:justify-between">
                    <div className="flex flex-col">
                      <div className="flex">
                        <a
                            href="/users"
                            className="flex items-center justify-center text-white rounded-full cursor-pointer bg-gray-800/50 w-9 h-9 md:ml-0 group"
                        >
                          <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="duration-150 ease-in-out group-hover:text-main"
                          />
                        </a>
                        <div className="ml-2 cursor-pointer w-9">
                          <img
                              className="rounded-md"
                                                  src={`https://mc-heads.net/avatar/${user.minecraftUsername}`}
                          />
                        </div>
                        <div className="flex items-center ml-2 text-2xl font-bold text-white">
                                              {user.minecraftUsername}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4 border-gray-200/25" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col w-full gap-2 m-2 mx-auto md:flex-row max-w-80">
                  <div className="flex flex-col w-full pb-4 md:w-1/3 bg-black/50 rounded-xl">
                    <p className="mt-2 ml-4 text-xl text-white text-bold">
                      Active skin
                    </p>
                    <p className="mb-2 ml-4 text-xs text-white opacity-60">
                      Skin preview
                    </p>
                    <hr className="mx-4 border-gray-200/50" />
                    <div className="flex items-center justify-center flex-none w-full object-fit">
                      <div className="w-full">
                        <div className="flex items-center justify-center">
                          <div>
                            <canvas id="skin_container"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col w-full pb-2 h-3/5 bg-black/50 rounded-xl">
                      <p className="mt-2 ml-4 text-xl text-white text-bold">
                        Inventory
                      </p>
                      <p className="mb-2 ml-4 text-xs text-white opacity-60">
                                          {user.minecraftUsername}'s exlusive cape collection
                      </p>
                      <hr className="mx-4 border-gray-200/25" />
                      <div className="p-4 grid grid-cols-4 gap-4">
                                          {cosmetics &&
                            cosmetics.map((img) => {
                              return (
                                  <img
                                      className="w-44 bg-gray-600/[5%] cursor-pointer hover:bg-main/[10%] rounded-xl"
                                      src={`https://api.eternalscapes.com/assets/preview/cosmetics/${img}.png`}
                                  />
                              );
                            })}
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

export default userPage;
