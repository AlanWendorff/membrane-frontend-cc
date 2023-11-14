import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import { useWeb3 } from "react-dapp-web3";
import useQuiz from "../../hooks/contract/useQuiz";
import shortenWalletAddress from "../../utils/scripts/ShortenWalletAddress";
import "./Header.css";

const Header = () => {
  const { isWalletConnected, walletAddress, connect } = useWeb3();

  const { accountBalance } = useQuiz();

  return (
    <AppBar position="fixed" className="header">
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container justifyContent="flex-end" alignItems="center">
            {isWalletConnected && (
              <p>Account balance: {accountBalance} $QUIZ</p>
            )}

            <Button
              sx={{ ml: 3 }}
              variant="contained"
              color="secondary"
              aria-label="Connect to wallet"
              onClick={connect}
            >
              {isWalletConnected
                ? shortenWalletAddress(walletAddress)
                : "CONNECT WALLET"}
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
