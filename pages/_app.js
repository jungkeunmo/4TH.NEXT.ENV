import React, { useMemo } from "react";
import "antd/dist/antd.css";
import wrapper from "../store/storeConfigure";

const AppShell = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default wrapper.withRedux(AppShell);
