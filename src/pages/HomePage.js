import React from "react";
import JobDisplayContainer from "../components/JobDisplayContainer";

import AppBarDisplay from "../components/AppBarDisplay";
import { Outlet } from "react-router-dom";
// import service from "../data/fetchData";
// import { useLoaderData } from "react-router-dom";

// export async function loader() {
//   const jobs = service.fetchJobsInfo();
//   return { jobs };
// }
function HomePage() {
  // const datas = fetchJob();
  // const { jobs } = useLoaderData();
  return (
    <div>
      <AppBarDisplay></AppBarDisplay>
      <JobDisplayContainer />
      <Outlet />
    </div>
  );
}

export default HomePage;
