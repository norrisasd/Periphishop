import React from "react";
import { HomeContent } from "./features/home";
import { BasicLayout } from "./layout";

function App() {
  return (
    <BasicLayout>
      <HomeContent />
    </BasicLayout>
  );
}

export default App;
