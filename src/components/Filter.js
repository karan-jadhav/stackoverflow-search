const Filter = ({ onResult, res }) => {
  return (
    <div className="flex  justify-center mt-3">
      <div className="flex flex-col border border-gray-700 rounded-lg shadow-lg p-7">
        <div className="flex flex-row mb-5">
          <div>
            <label className="mr-2">accepted</label>
            <input
              type="checkbox"
              name="accepted"
              id="accepted"
              onChange={(e) =>
                onResult([e.target.name, e.target.checked ? true : ""])
              }
              defaultChecked={res.accepted === "" ? false : true}
            />
          </div>
          <div className="ml-5">
            <label className="mr-2">closed</label>
            <input
              type="checkbox"
              value={res === "" ? false : true}
              name="closed"
              id="closed"
              onChange={(e) =>
                onResult([e.target.name, e.target.checked ? true : ""])
              }
              defaultChecked={res.closed === "" ? false : true}
            />
          </div>
          <div className="ml-5">
            <label className="mr-2">wiki</label>
            <input
              type="checkbox"
              value={res === "" ? false : true}
              name="wiki"
              id="wiki"
              onChange={(e) =>
                onResult([e.target.name, e.target.checked ? true : ""])
              }
              defaultChecked={res.wiki === "" ? false : true}
            />
          </div>
          <div className="ml-5">
            <label className="mr-2">order</label>
            <select
              name="order"
              id="order"
              onChange={(e) => onResult([e.target.name, e.target.value])}
              value={res.order}
            >
              <option value="desc">desc</option>
              <option value="asc">asc</option>
            </select>
          </div>
          <div className="ml-5">
            <label className="mr-2">sort</label>
            <select
              name="sort"
              id="sort"
              onChange={(e) => onResult([e.target.name, e.target.value])}
              value={res.sort}
            >
              <option value="activity">activity</option>
              <option value="creation">creation</option>
              <option value="votes">votes</option>
              <option value="relevance">relevance</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row ">
          <div>
            <label className="mr-2">Tags</label>
            <input
              type="text"
              placeholder="tags"
              name="tags"
              className="border border-black text-grey-darkest px-2 rounded-lg"
              onChange={(e) => onResult([e.target.name, e.target.value])}
              value={res.tags}
            />
          </div>
          <div className="ml-5">
            <label className="mr-2">nottagged</label>
            <input
              type="text"
              name="nottagged"
              placeholder="nottagged"
              className="border border-black text-grey-darkest px-2 rounded-lg"
              onChange={(e) => onResult([e.target.name, e.target.value])}
              value={res.nottagged}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
