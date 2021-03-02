const Search = ({ onFilter, onResult, search }) => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col">
          <div className="">
            <div className="text-3xl font-bold mb-4 text-center">
              Search Questions ?
            </div>
            <input
              name="q"
              placeholder="  Search..."
              type="text"
              onChange={(e) => onResult([e.target.name, e.target.value])}
              className="focus:outline-none focus:ring focus:border-blue-300 border border-black shadow-md focus:shadow-2xl py-2 px-3 text-grey-darkest w-96 rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <div>
              <button
                onClick={search}
                className="bg-blue-300 p-2 rounded-md m-2 shadow-lg"
              >
                Search
              </button>
            </div>
            <div>
              <button
                onClick={onFilter}
                className="bg-gray-500 p-2 rounded-md m-2 shadow-lg"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
