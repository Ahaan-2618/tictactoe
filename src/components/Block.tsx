import React from "react";

type Props = {
  value: string;
  onClick: () => void;
};
const Block: React.FC<Props> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Block;
