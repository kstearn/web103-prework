import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="creators" element={<ShowCreators />} />
        <Route path="view" element={<ViewCreator />} />
        <Route path="add" element={<AddCreator />} />
        <Route path="edit" element={<EditCreator />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
