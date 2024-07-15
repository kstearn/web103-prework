import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { supabase } from './client';
import ShowCreators from './pages/ShowCreators';

import './App.css';

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
      .from('creators')
      .select('*');

      setCreators(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <nav>
      </nav>
      <ShowCreators creators={creators} />
      <Outlet />
    </div>
  )
}

export default App;
