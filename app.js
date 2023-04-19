import { BrowserRouter, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return <h1>Bem-vindo à minha aplicação</h1>;
}

function About() {
  return <h1>aplicaçao em construçao</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
