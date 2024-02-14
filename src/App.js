import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <CiForkAndKnife />
          <Logo to={'/'}>Great Tasting Food</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default App;
