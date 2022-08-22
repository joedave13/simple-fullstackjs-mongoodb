import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserCreate from './components/UserCreate';
import UserList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
