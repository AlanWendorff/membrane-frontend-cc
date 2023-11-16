import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import { useWeb3 } from "react-dapp-web3";
import useQuizContract from "../../hooks/contract/useQuizContract";
import shortenWalletAddress from "../../utils/scripts/ShortenWalletAddress";
import "./Header.css";
import useNetwork from "../../hooks/app/useNetwork";

const Header = () => {
  const { isWalletConnected, walletAddress, connect } = useWeb3();
  const { accountBalance } = useQuizContract();
  const { isTargetNetworkSelected, switchNetwork } = useNetwork();

  if (!isTargetNetworkSelected) {
    return (
      <AppBar position="fixed" className="header">
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container justifyContent="flex-end" alignItems="center">
              <Button
                sx={{ ml: 3 }}
                variant="contained"
                color="warning"
                aria-label="Change network"
                onClick={switchNetwork}
              >
                Switch Network to begin
              </Button>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

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
