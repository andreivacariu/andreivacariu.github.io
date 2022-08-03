import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-28">
      <img src="../loading.gif"  className="w-[28em]"/>
      <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
      <p class="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Loading;
