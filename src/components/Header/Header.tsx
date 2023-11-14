import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import { useWeb3 } from "react-dapp-web3";
import "./Header.css";

const Header = () => {
  const { connect } = useWeb3();

  return (
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
              onClick={connect}
            >
              CONNECT WALLET
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
