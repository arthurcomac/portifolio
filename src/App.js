import './index.css';
import { Navbar } from './components/Navbar.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
