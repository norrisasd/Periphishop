import React from "react";
import { ProductContent } from "../features/products";
import { BasicLayout } from "../layout";

type Props = {};

const home = (props: Props) => {
  return (
    <BasicLayout>
      <ProductContent />
    </BasicLayout>
  );
};

export default home;
