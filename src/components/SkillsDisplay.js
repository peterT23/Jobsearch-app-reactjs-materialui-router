import Chip from "@mui/material/Chip";
export default function SkillsDisplay({ skill }) {
  return <Chip sx={{ margin: "2px" }} label={skill} color="success"></Chip>;
}
