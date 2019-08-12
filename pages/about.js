import { Container, Typography, Box } from '@material-ui/core';
import Layout from '../components/Layout';
import DigitalEconomyAboutUs from '../components/DigitalEconomyAboutUs/DigitalEconomy.component';

export default function Index() {
  const MissionComponent = () => (
    <Container maxWidth="lg" style={{ marginBottom: '3.5rem' }}>
      <Box py={4}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Mission
        </Typography>
      </Box>
      <Box py={5}>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Container>
  );
  return (
    <Layout>
      <MissionComponent />
      <DigitalEconomyAboutUs />
    </Layout>
  );
}
