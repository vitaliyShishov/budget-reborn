import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import WoonkamerPage from '@pages/Woonkamer'
import Bespaarweken from '@pages/Bespaarweken'
import Welcome from '@pages/Welcome'
function App() {
  const currentRouteId = ''
  return (
    <div className="app relative flex flex-col">
      <Router>
        <Header {...{ currentRouteId }} />
        <div className="flex flex-1 flex-col items-start content-holder">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/bespaarweken" element={<Bespaarweken />} />
            <Route path="/wookamer" element={<WoonkamerPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
