import { FC } from "react";
import { ILayout } from "../../models";

import "./Layout.scss";

const Layout: FC<ILayout> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
