import './App.css';
import Landing from './components/landing.js';
import Room from './components/room.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';


function App() {
  return (

    
    <BrowserRouter>
      <GlobalStyle />
      <Routes>

        <Route path="/rooms/:roomId" element={<Room />}/>
        <Route path="/" element={<Landing />}/>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
