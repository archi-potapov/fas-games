import logo from './logo.svg';
import './App.css';
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
function App({ children }) {
  return (
    <div className="App">
        <Header />
        {children}
        <Footer />
    </div>
  );
}

export default App;
