import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";

const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar>
        <Grid container justifyContent="flex-end" alignItems="center">
          <p>Account balance: 0.314 $QUIZ</p>
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            color="secondary"
            aria-label="Connect to wallet"
          >
            CONNECT WALLET
          </Button>
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
