
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NotFound from './NotFound';
import Attendance from './pages/Attendance';

 import Login from './pages/Login';

import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/attendance" element={<Attendance />} />
    <Route path="*" element={<NotFound />} />

    </Routes>
    </>
  );
}

export default App;
