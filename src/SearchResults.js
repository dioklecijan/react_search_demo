import React from "react";

const ListItem = ({ item }) => {
  // inspired by
  // http://tachyons.io/components/lists/contact-phone/index.html
  return (
    <li
      className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
      style={{ maxWidth: "44em" }}
    >
      <img alt=" " className="w2 h2 w3-ns h3-ns br-100" src={item.img} />
      <div className="pl3 flex-auto">
        <a className="f4 b db black-70 hover-black pointer">
          {item.first_name} {item.last_name}
        </a>
        <span className="f6 db black-70">
          {item.city}, {item.country}
        </span>

        <a
          href={item.website}
          target="_blank"
          className="f6 link blue hover-dark-gray truncate db pointer"
        >
          {item.url}
        </a>
      </div>
      <div>
        <a
          href={`tel:${item.MSISDN}`}
          className="f6 link blue truncate hover-dark-gray"
        >
          {item.MSISDN}
        </a>
      </div>
    </li>
  );
};

const SearchResults = ({ data }) => (
  <div className="pa4">
    <h2 className="f2 black-70">Results</h2>
    <p className="i">
      {data.length} document{data.length !== 1 ? "s" : ""} found.
    </p>
    <ul className="list pl0 mt0 center">
      {data.map((d, idx) => <ListItem key={"li_" + idx} item={d} />)}
    </ul>
  </div>
);

export default SearchResults;
