import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddMovieForm from './components/AddMovieForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/add-movie" element={<AddMovieForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
