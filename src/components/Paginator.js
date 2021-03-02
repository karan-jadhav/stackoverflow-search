import Pagination from "react-js-pagination";
const Paginator = ({ activePage, len, handlePageChange }) => {
  return (
    <div className="py-2">
      <nav className="block">
        <div className="flex justify-end mb-5">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={len}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            //   itemClass="p-2"
            linkClass="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-800 bg-white text-gray-800"
          />
        </div>
      </nav>
    </div>
  );
};

export default Paginator;
