import Tag from "./Tag";
const Card = ({ title, url, tags }) => {
  const renderTags = tags.map((tag, index) => <Tag key={index} tag={tag} />);
  return (
    <div className="border border-gray-400 shadow-md hover:shadow-2xl w-auto pl-14 pr-14 pt-5 pb-5 mb-7">
      <div className="text-2xl font-bold">{title}</div>
      <div className="pt-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 underline"
        >
          Go To Stackoverflow
        </a>
      </div>
      <div className="flex flex-row mt-3">{renderTags}</div>
    </div>
  );
};

export default Card;
