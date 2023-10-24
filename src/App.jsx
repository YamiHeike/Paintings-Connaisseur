import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import PaintingsArr from './PaintingsArr';
import Footer from './Footer';
import {useState} from 'react';
import WorkList from './WorkList';


function App() {
  const [isList, setIsList] = useState(false);

  const swap = () => {
    setIsList(!isList);
  }

  return (
    <div class="App">
    <Navbar listArray={[{header: isList? 'Return' : 'List of Works', func: swap}]}/>
    {isList? <WorkList onClickFunc={swap}/> : <Card imgList={PaintingsArr} />}
    <Footer/>
    </div>
  )
}

export default App
