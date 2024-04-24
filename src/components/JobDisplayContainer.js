import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { Paper, Box, Typography, Chip, Stack, Button } from "@mui/material";

import Grid from "@mui/material/Grid";
import { Link, useLoaderData } from "react-router-dom";
import service from "../data/fetchData";

export async function loader({ request }) {
  console.log("request", request);

  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const sjobs = await service.fetchJobsInfo(q);
  const jobs = sjobs.jobs;
  return { jobs, q };
}

const pageSize = 5;

export default function JobDisplayContainer() {
  const { jobs, q } = useLoaderData();

  const [page, setPage] = useState(1);

  console.log("jobs", jobs);

  const [jobsDisplay, setJobsDisplay] = useState(jobs);

  useEffect(() => {
    setJobsDisplay(jobs.slice(0, pageSize));
  }, [jobs]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    const subjobs = jobs.slice(from, to);
    console.log("subjobs", subjobs);
    setJobsDisplay(subjobs);

    setPage(page);
  };

  return (
    <Container maxWidth="xl" sx={{ alignItems: "center" }}>
      <Grid container spacing={3} sx={{ p: 7 }}>
        {jobsDisplay.map((job) => (
          <Grid key={job.id} item xl={3} lg={4} md={6} xs={12}>
            <Paper
              sx={{
                p: 2,
                height: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              elevation={6}
              variant="elevation"
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1.2rem", color: "red" }}
                >
                  {job.title}
                </Typography>

                {job.skills.map((skill, index) => (
                  <Chip
                    key={`${job.id}+${index}`}
                    sx={{ margin: "2px" }}
                    label={skill}
                    color="success"
                  />
                ))}
                <Typography
                  noWrap={true}
                  mt={2}
                  sx={{ fontSize: "1rem" }}
                  variant="subtitle2"
                >
                  {job.description}
                </Typography>
                <Typography sx={{ color: "red" }}>City: {job.city}</Typography>
                <Typography sx={{ color: "inherit", fontSize: "0.9rem" }}>
                  PostedDate: {job.postedDate.slice(0, 10)} at{" "}
                  {job.postedDate.slice(12, 20)}
                </Typography>
              </Box>
              <Stack mt={2} alignItems="center">
                <Button
                  component={Link}
                  variant="contained"
                  to={`jobs/${job.id}`}
                >
                  Learn More
                </Button>
                {/* <Link to={`jobs/${job.id}`}>Learn more</Link> */}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* <AppPagination setJobs={(p) => setJobs(p)}></AppPagination> */}
      <Stack alignItems="center" sx={{ pb: "150px" }}>
        <Pagination
          color="primary"
          count={Math.ceil(jobs.length / pageSize)}
          onChange={handlePageChange}
          page={page}
        ></Pagination>
      </Stack>
    </Container>
  );
}
