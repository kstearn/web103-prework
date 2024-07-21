import { useState, useEffect } from 'react';
import { supabase } from './client';
import ShowCreators from './pages/ShowCreators';
import Header from './components/Header';

import './App.css';

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
      .from('creators')
      .select('*')
      .order('id', { ascending: false });

      setCreators(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ShowCreators creators={creators} />
    </div>
  )
}

export default App;
