import Tag from "./Tag";

const Test = () => {
  return (
    <div className="flex justify-center m-10">
      <div className="border border-gray-400 shadow-md hover:shadow-2xl w-auto pl-14 pr-14 pt-5 pb-5 ">
        <div className="text-2xl font-bold">
          This is Title skjdhksjdhfkshkdshksjhfksdhfskdhk The Question
        </div>
        <div className="pt-4">
          <a href="" className="text-gray-700 underline">
            Go To Stackoverflow
          </a>
        </div>
        <div className="flex flex-row mt-3">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default Test;
