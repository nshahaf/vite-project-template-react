// import reactLogo from './assets/icons/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

import './assets/styles/main.scss'
function App() {

  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

function NotFoundPage() {
  return <HomePage/>;
}

export default App
