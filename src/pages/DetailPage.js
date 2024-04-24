import React from "react";
import service from "../data/fetchData";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Modal, Typography, Box, Card, CardContent, Chip } from "@mui/material";

export async function loader({ params }) {
  console.log("params", params);
  const job = await service.fetchJobDetailInfo(params.jobid);
  console.log("jobid", job);
  if (!job) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { job };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  bgcolor: "background.paper",
  borderRadius: 2,
  border: "none",
};

function DetailPage() {
  const { job } = useLoaderData();
  const navigate = useNavigate();
  function handleClose() {
    navigate(-1);
  }

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box sx={style}>
          <Card
            sx={{
              border: "none",
              boxShadow: 0,
              // backgroundColor: (theme) => theme.palette.primary.dark,
              // color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {job?.title}
              </Typography>
              {job.skills.map((skill, index) => (
                <Chip
                  key={`${job.id}+${index}`}
                  sx={{ margin: "2px" }}
                  label={skill}
                  color="success"
                />
              ))}
              <Typography>{job?.description}</Typography>
              <Typography variant="h6" component="div" sx={{ color: "red" }}>
                City: {job?.city}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "0.9rem" }}
              >
                PostedDate: {job?.postedDate.slice(0, 10)} at{" "}
                {job?.postedDate.slice(12, 20)}
              </Typography>
              Require: {job.yrsXPExpected.toString()} years of experience
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default DetailPage;
