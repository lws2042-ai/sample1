import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <h1>헬로우 리액트</h1>
      <Body />
      <Footer />
    </>
  );
}

export default App;
