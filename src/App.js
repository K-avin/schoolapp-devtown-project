import './App.css';
import NavBar from './common/navBar';
import Footer from './common/footer';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/students.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div class="row">
        <div class="col-md-3">
          {data.map(user => (
            <a>{user}</a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
