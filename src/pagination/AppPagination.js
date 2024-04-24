// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { useEffect, useState } from "react";
// import service from "../data/fetchData";
// // import { pageSize } from "./AppPagination";
// const pageSize = 5;

// export default function AppPagination({ setJobs }) {
//   const [pagination, setPagination] = useState({
//     count: 0,
//     from: 0,
//     to: pageSize,
//   });

//   useEffect(() => {
//     service
//       .fetchJobsInfo({ from: pagination.from, to: pagination.to })
//       .then((response) => {
//         setPagination({ ...pagination, count: response.count });
//         setJobs(response.data);
//         console.log(response);
//       });
//     //eslint-disable-next-line
//   }, [pagination.from, pagination.to]);

//   const handlePageChange = (event, page) => {
//     const from = (page - 1) * pageSize;
//     const to = (page - 1) * pageSize + pageSize;
//     setPagination({ ...pagination, from: from, to: to });
//   };
//   return (
//     <Stack alignItems="center" sx={{ pb: "150px" }}>
//       <Pagination
//         color="primary"
//         count={Math.ceil(pagination.count / pageSize)}
//         onChange={handlePageChange}
//       ></Pagination>
//     </Stack>
//   );
// }
