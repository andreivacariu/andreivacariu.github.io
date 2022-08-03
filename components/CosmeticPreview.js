import React from "react";

const CosmeticPreview = ({ cosmetic }) => {
  return (
    <div className="slide">
      <div className="flex flex-col items-center justify-center">
        <div className="min-h-[200px] max-w-[200px] max-h-[200px] min-w-[200px] mt-4 flex ">
          <img
            src={cosmetic}
            className="flex items-center justify-center flex-none rounded-md object-fill"
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="relative w-full cursor-pointer px-4 py-2 m-2 overflow-hidden text-sm font-bold text-[#141414] text-center transition-all duration-300 ease-out bg-main rounded-md sm:text-base group hover:bg-gradient-to-r hover:from-main/75 hover:to-main"
            type="button"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default CosmeticPreview;
