import React from "react";
import * as FcIcons from "react-icons/fc";
import * as cssModule from "../sass/index";

const BlankPage = () => {
  return (
    <div className={cssModule.Components.blankPage}>
      <span>
        <FcIcons.FcServices />
      </span>
      <h1>Sorry.. Page not found</h1>
    </div>
  );
};

export default BlankPage;
