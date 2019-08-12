import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer.component';

const Layout = props => (
  <>
    <CssBaseline />
    <Navbar />
    { props.children }
    <Footer />
  </>
);

export default Layout;