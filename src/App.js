import logo from './logo.svg';
import './App.css';
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
function App({ children }) {
  return (
    <div className="App">
        <h1 style={{color:'#344322'}}>Привет!</h1>
        <h2>На нашем сайте временно ведутся технические работы</h2>
        <h2>Следите за новостями в нашем паблике <a href="https://vk.com/funadvstudio" style={{color:'blue'}}>ВКонтакте</a></h2>
        {/*<Header />*/}
        {/*{children}*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;
