import { FC } from "react";
import { ILine } from "../../models";
import "./Line.scss";

const VerticalLine: FC<ILine> = ({ className }) => {
  return <div className={className}></div>;
};

export default VerticalLine;
