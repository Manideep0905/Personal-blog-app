import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice.js';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import { Spinner } from './components/index.js';
import { Toaster } from 'react-hot-toast';

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[#DCEDFF] font-mono'>
      <div className='w-full block'>
        <Toaster />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <Spinner />
}

export default App
