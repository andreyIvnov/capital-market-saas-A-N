import './App.css'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        </Routes>
      </div>
    </>
  )
}

export default App
