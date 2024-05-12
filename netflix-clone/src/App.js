
import './App.css';
import Banner from './Components/Banner/Banner';
import RowContainer from './Components/Rows/RowList/RowContainer';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <RowContainer/>
      <Footer />
    </div>
  );
}

export default App;
