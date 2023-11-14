import { Grid, List, ListItem, ListItemText } from "@mui/material";

const QuizResult = () => (
  <Grid
    sx={{ pt: 5, gap: 2 }}
    container
    flexDirection="column"
    alignItems="center"
  >
    <h2>Your answers:</h2>

    <List sx={{ width: "184px" }}>
      <ListItem>
        <ListItemText primary="Question1" secondary="Answer1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Question2" secondary="Answer2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Question3" secondary="Answer3" />
      </ListItem>
    </List>
  </Grid>
);

export default QuizResult;
