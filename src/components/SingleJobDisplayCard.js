import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SkillsDisplay from "./SkillsDisplay";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
export default function SingleJobDisplayCard({ job }) {
  const day = job.postedDate.slice(0, 10);
  const time = job.postedDate.slice(12, 20);
  return (
    <Grid item xl={3} lg={4} md={6} xs={12}>
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

          {/* <SkillsDisplay></SkillsDisplay>
          <SkillsDisplay></SkillsDisplay>
          <SkillsDisplay></SkillsDisplay>
          <SkillsDisplay></SkillsDisplay>
          <SkillsDisplay></SkillsDisplay> */}
          {job.skills.map((skill, index) => (
            <SkillsDisplay
              skill={skill}
              key={`${job.id}+${index}`}
            ></SkillsDisplay>
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
            PostedDate: {day} at {time}
          </Typography>
        </Box>
        <Stack mt={2} alignItems="center">
          <Button variant="contained">Learn More</Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
