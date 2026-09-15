import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex flex-nowrap rounded-4xl gap-10 overflow-x-auto p-6 w-2/3"
    >
      {props.users.map(function (ele, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={ele.img}
            tag={ele.tag}
            intro={ele.intro}
            color={ele.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
