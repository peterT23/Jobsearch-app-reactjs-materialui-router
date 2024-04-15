import React from "react";
import JobDisplayContainer from "../components/JobDisplayContainer";

import AppBarDisplay from "../components/AppBarDisplay";

function HomePage() {
  // const datas = fetchJob();
  return (
    <div>
      <AppBarDisplay></AppBarDisplay>

      <JobDisplayContainer></JobDisplayContainer>
    </div>
  );
}

export default HomePage;
