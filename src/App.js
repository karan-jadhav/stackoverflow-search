import Nav from "./components/Nav";
import Search from "./components/Search";
import Result from "./components/Result";
import Filter from "./components/Filter";
import Throttle from "./components/Throttle";
import { useState } from "react";
import axios from "axios";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [showThrottle, setShowThrottle] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState({
    q: "",
    accepted: "",
    closed: "",
    wiki: "",
    order: "desc",
    sort: "activity",
    tags: "",
    nottagged: "",
  });
  const [result, setResult] = useState([]);
  const setFilter = () => {
    setShowFilter(!showFilter);
  };
  const setUpQuery = (e) => {
    console.log(query);
    setQuery({ ...query, [e[0]]: e[1] });
  };
  const search = async () => {
    console.log(query);
    setShowLoading(true);
    await axios
      .get("/api/", {
        params: {
          ...query,
        },
      })
      .then((res) => {
        setShowLoading(false);
        setResult(res.data);
      })
      .catch((e) => {
        setShowLoading(false);
        setResult([]);
        setShowThrottle(true);
      });
    // .then((res) => console.log(res.data));
  };
  return (
    <Router>
      <div className="app">
        <Nav />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Search
                onFilter={setFilter}
                onResult={setUpQuery}
                search={search}
              />
              {showLoading && (
                <h1 className="flex justify-center font-serif text-xl mt-11">
                  Loading...
                </h1>
              )}
              {showFilter && <Filter onResult={setUpQuery} res={query} />}
              {result.length !== 0 && (
                <Result res={result} setRes={setResult} />
              )}
              {showThrottle && <Throttle />}
            </>
          )}
        ></Route>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
