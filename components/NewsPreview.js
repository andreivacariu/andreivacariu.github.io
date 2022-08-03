const NewsPreview = ({title, img, desc}) => {
  return (
    <div className="flex flex-col items-start w-9/10 col-span-12 ml-2 mr-2 space-y-3 sm:col-span-6 xl:col-span-8">
      <a className="relative block w-full h-56 mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 group">
        <img
          loading="lazy"
          src={img}
          className="absolute w-full h-full transition duration-150 ease-in-out transform bg-center bg-cover object-cover group-hover:scale-110 mb-[20px]"
        />
      </a>
      <div className="inline-flex w-full text-xs text-white">
        <span className="font-semibold text-[14px] opacity-60">
          <time dateTime="Thu Dec 02 2021 18:00:41 GMT+0200 (Eastern European Standard Time)">
            December 1st 2021
          </time>
        </span>
      </div>
      <p className="text-lg font-bold text-white duration-150 ease-in-out sm:text-xl md:text-2xl group-hover:text-green-300">
        <a>{title}</a>
      </p>
      <p className="text-sm text-white opacity-60 overflow-hidden overflow-ellipsis w-50">
        {desc}
      </p>
    </div>
  );
};

export default NewsPreview;
