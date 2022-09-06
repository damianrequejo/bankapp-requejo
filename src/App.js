//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';



function App() {

  const saludo = "Bienvenido a BankApp";
  
  return (
    <BrowserRouter>
      <Header />
      <Main test="BankApp" />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={saludo}/>}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/count' element={<ItemCount stock={5} initial={1} onAdd={0}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
