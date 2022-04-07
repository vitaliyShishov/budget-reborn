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
      <Header {...{ currentRouteId }} />
      <div className="flex flex-1 flex-col items-start content-holder">
        <Router>
          <Routes>
            <Route path="/" element={<WoonkamerPage />} />
            <Route path="/bespaarweken" element={<Bespaarweken />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
