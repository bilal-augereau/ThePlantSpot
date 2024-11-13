import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  const [plant, setPlant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://house-plants2.p.rapidapi.com/all';

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9db15f58b8msh5101d3f3e72beaep175fadjsn258b615b608e',
        'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur s'est produite lors de la récupération des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setPlant(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
