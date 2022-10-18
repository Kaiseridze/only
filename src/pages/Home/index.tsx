import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Article from "../../components/Article";
import Pagination from "../../components/Pagination";
import Counter from "../../components/Counter";
import CirclePagination from "../../components/CirclePagination";

import db from "../../db.json";

import "./Home.scss";
import "swiper/scss";
import "swiper/scss/navigation";

import { IArticle, IData } from "../../models";

import { fadeAnimation } from "../../animations";
import Line from "../../components/Line";

const Home = () => {
  // Init period and init page
  const [mockData, setMockData] = useState<IData | any>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Reference for animate articles block
  const articlesRef = useRef(null);

  /* Since theoretically the request can be asynchronous, 
  it should be moved to a separate function and used "async/await" */
  const fetchApi = () => {
    setMockData(db);
  };

  // Find index of first and last element for client pagination
  const indexOfLastData = currentPage * mockData?.dataPerPage;
  const indexOfFirstData = indexOfLastData - mockData?.dataPerPage;

  // Get current element of array
  const currentData = mockData?.data?.slice(
    indexOfFirstData,
    indexOfLastData
  )[0];

  // Call data and animation
  useEffect(() => {
    fetchApi();
    fadeAnimation(".swiper");
  }, [currentPage]);

  return (
    <div className="home">
      <Line className="vertical" />
      <Line className="horizontal" />
      <h1 className="home__title">Исторические даты</h1>
      <CirclePagination
        onClick={setCurrentPage}
        items={mockData.data}
        currentPage={currentPage}
      />
      <main className="main">
        <div className="main__title">
          <Counter
            number={currentData?.from}
            className="main__text main__text_blue"
          />
          <Counter
            number={currentData?.to}
            className="main__text main__text_pink"
          />
        </div>
        <div className="desktop-pagination">
          <Pagination
            onClick={setCurrentPage}
            currentPage={currentPage}
            allPages={mockData?.data?.length}
          />
        </div>
      </main>
      <section ref={articlesRef} className="articles">
        {currentData?.theme && <h3 className="articles__title">{currentData.theme}</h3>}
        <Swiper
          grabCursor={true}
          modules={[Navigation]}
          spaceBetween={50}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          scrollbar={{ draggable: true }}
          className="swiper"
        >
          {currentData?.articles?.map((article: IArticle) => (
            <SwiperSlide key={article.key}>
              <Article
                key={article.key}
                text={article.text}
                title={article.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <footer className="mobile-pagination">
        <Pagination
          onClick={setCurrentPage}
          currentPage={currentPage}
          allPages={mockData?.data?.length}
          allData={mockData?.data}
        />
      </footer>
    </div>
  );
};

export default Home;
