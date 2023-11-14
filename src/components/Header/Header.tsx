import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import "./Header.css";

const Header = () => (
  <AppBar position="fixed" className="header">
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
