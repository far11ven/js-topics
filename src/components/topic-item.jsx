import React from "react";

const TopicItem = props => {
  return (
    <div
      className="item-body m-2"
      style={{
        padding: "2px",
        backgroundColor: "lightblue",
        border: "1px black solid",
        overflowWrap: "break-word"
      }}
    >
      <span> {props.item.title}</span>
    </div>
  );
};

export default TopicItem;
