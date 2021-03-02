import Card from "./Card";
import { useState } from "react";
import Paginator from "./Paginator";
const Result = ({ res, setRes }) => {
  const [activePage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;
  const indexOfLastResult = activePage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = res.slice(indexOfFirstResult, indexOfLastResult);
  const renderResults = currentResults.map((result, index) => {
    return (
      <Card
        title={result.title}
        url={result.link}
        tags={result.tags}
        key={index}
      />
    );
  });
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex justify-center m-10 flex-col">
      <Paginator
        activePage={activePage}
        len={res.length}
        handlePageChange={handlePageChange}
      />
      {renderResults}
      {/* <Paginator
        activePage={activePage}
        len={res.length}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Result;
