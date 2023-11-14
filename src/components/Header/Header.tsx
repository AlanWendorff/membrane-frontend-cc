import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";

const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar>
        <Grid container justifyContent="flex-end">
          <Button
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
