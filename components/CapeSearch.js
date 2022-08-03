import Link from "next/link";

const CapeSearch = ({ cape, url }) => {
  return (
    <div className="flex flex-col justify-between w-full p-2 m-2 mx-auto md:mx-0 my-4 mt-2 overflow-hidden transition duration-300 ease-in-out transform rounded-lg shadow-lg max-w-[200px] bg-black/25 hover:-translate-y-1 hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        <p className="flex items-center capitalize justify-center mt-4 text-[1.4vw] font-semibold text-center text-gray-100">
          {cape.name}
        </p>
        <div className="min-h-[200px] max-w-[200px] max-h-[200px] min-w-[200px] flex flex-grow">
          <img
            loading="lazy"
            className="flex items-center justify-center flex-none rounded-t-lg object-fit"
            src={url}
          />
        </div>
        <div className="min-h-[30px] max-w-[200px] max-h-[30px] min-w-[200px] flex">
          <Link href={`/cape/${cape.id}`}>
          <a className="text-[16px] font-bold md:text-[16px] w-full overflow-hidden text-center text-[1.4vw] text-black/75 rounded-b-lg transition ease-in-out bg-green-600 hover:bg-green-300 duration-300">
              View
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CapeSearch;
