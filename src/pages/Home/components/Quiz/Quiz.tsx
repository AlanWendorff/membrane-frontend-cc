import { Grid } from "@mui/material";

const Quiz = () => (
  <Grid
    sx={{ pt: 5, gap: 2 }}
    container
    flexDirection="column"
    alignItems="center"
  >
    <p>
      <b>Question 1</b>
    </p>

    <select name="select correct option" id="select">
      <option value="1">Opt1</option>
      <option value="2">Opt2</option>
      <option value="3">Opt3</option>
    </select>
  </Grid>
);

export default Quiz;
