import { Dispatch, SetStateAction } from "react";

export interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export interface IPagination {
  currentPage: number;
  allPages: number;
  allData?: IPage[];
  onClick: Dispatch<SetStateAction<number>>;
}

export interface ICirclePagination {
  currentPage: number;
  items: IPage[];
  onClick: Dispatch<SetStateAction<number>>;
}

export interface IArticle {
  title: string;
  text: string;
  key: string;
}

export interface ICounter {
  className: string;
  number: number;
}

export interface ILine {
  className: string;
}

export interface IData {
  dataPerPage: number;
  data: IPage[];
}

export interface IPage {
  id: number;
  theme?: string;
  from: number;
  to: number;
  articles: IArticle[];
}
