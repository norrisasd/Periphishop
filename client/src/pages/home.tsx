import React from "react";
import { HomeContent } from "../features/home";
import { BasicLayout } from "../layout";

type Props = {};

const home = (props: Props) => {
  return (
    <BasicLayout>
      <HomeContent />
    </BasicLayout>
  );
};

export default home;
