import { useRef, useEffect, FC } from "react";
import { fadeAnimation } from "../../animations";

import { IPage, ICirclePagination } from "../../models";

import "./CirclePagination.scss";

const CirclePagination: FC<ICirclePagination> = ({
  items,
  onClick,
  currentPage,
}) => {
  const circleRef = useRef(null);
  const onClickPage = (id: number) => {
    onClick(id);
  };
  useEffect(() => {
    if (items) {
      return fadeAnimation(".circle-pagination__theme");
    }
  }, [currentPage]);

  return (
    <div ref={circleRef} className="circle-pagination">
      {items?.map((item: IPage) => (
        <div
          onClick={() => onClickPage(item.id)}
          key={item.id}
          className={`circle-pagination__item circle-pagination__item_${
            item.id
          } ${currentPage === item.id ? "active" : ""}`}
        >
          <div className="circle-pagination__dot">
            <span className="circle-pagination__text">{item.id}</span>
          </div>
          {item?.theme && (
            <h3
              className={`circle-pagination__theme ${
                currentPage === item.id ? "active" : ""
              }`}
            >
              {item?.theme}
            </h3>
          )}
        </div>
      ))}
    </div>
  );
};
export default CirclePagination;
