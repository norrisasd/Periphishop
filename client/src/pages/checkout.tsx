import React from "react";
import { CheckoutContent } from "../features/checkout";
import { BasicLayout } from "../layout";

const Checkout = (props: any) => {
  return (
    <BasicLayout>
      <CheckoutContent />
    </BasicLayout>
  );
};

export default Checkout;
