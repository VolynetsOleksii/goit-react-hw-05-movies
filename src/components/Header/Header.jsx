import { Head, Link, Nav } from "./Header.styled";

const Header = () => {
    return (
      <Head>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Head>
    );
  };
  
  export default Header;