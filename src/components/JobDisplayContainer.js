import Container from "@mui/material/Container";
import SingleJobDisplayCard from "./SingleJobDisplayCard";
import AppPagination from "../pagination/AppPagination";
import { useState } from "react";

import Grid from "@mui/material/Grid";

export default function JobDisplayContainer() {
  const [jobs, setJobs] = useState([]);
  return (
    <Container maxWidth="xl" sx={{ alignItems: "center" }}>
      <Grid container spacing={3} sx={{ p: 7 }}>
        {/* <SingleJobDisplayCard></SingleJobDisplayCard>
        <SingleJobDisplayCard></SingleJobDisplayCard>
        <SingleJobDisplayCard></SingleJobDisplayCard>
        <SingleJobDisplayCard></SingleJobDisplayCard> */}
        {jobs.map((job) => (
          <SingleJobDisplayCard job={job} key={job.id}></SingleJobDisplayCard>
        ))}
      </Grid>
      <AppPagination setJobs={(p) => setJobs(p)}></AppPagination>
    </Container>
  );
}
