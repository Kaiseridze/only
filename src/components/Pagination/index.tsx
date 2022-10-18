import { FC } from "react";
import leftArrowSvg from "../../images/leftArrow.svg";
import rightArrowSvg from "../../images/rightArrow.svg";
import { IPagination } from "../../models";
import "./Pagination.scss";

const Pagination: FC<IPagination> = ({
  currentPage,
  allPages,
  onClick,
  allData,
}) => {
  const onClickPrev = () => {
    onClick((prev) => prev - 1);
  };
  const onClickNext = () => {
    onClick((prev) => prev + 1);
  };

  const onClickPage = (id: number) => {
    onClick(id);
  };
  return (
    <>
      <div className="pagination">
        <span>
          0{currentPage}/0{allPages}
        </span>
        <div className="pagination__buttons">
          <button onClick={onClickPrev} disabled={currentPage === 1}>
            <img src={leftArrowSvg} alt="prev page" />
          </button>
          <button onClick={onClickNext} disabled={currentPage === allPages}>
            <img src={rightArrowSvg} alt="next page" />
          </button>
        </div>
      </div>

      <div className="pagination-items">
        {allData?.map((page) => (
          <span
            className={`pagination-items__item ${
              currentPage === page.id ? "active" : ""
            }`}
            onClick={() => onClickPage(page.id)}
            key={page.id}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Pagination;
