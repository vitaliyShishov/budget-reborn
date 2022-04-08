import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import WoonkamerPage from '@pages/Woonkamer'
import Bespaarweken from '@pages/Bespaarweken'
import Welcome from '@pages/Welcome'
function App() {
  const [hideLayouts, setHideLayouts] = useState<Boolean>(false)
  const currentRouteId = ''
  return (
    <div className="app relative flex flex-col">
      <Router>
        {!hideLayouts && <Header {...{ currentRouteId }} />}
        <div className="flex flex-1 flex-col items-start content-holder">
          <Routes>
            <Route path="/" element={<Welcome setHideLayouts={setHideLayouts} />} />
            <Route
              path="/bespaarweken"
              element={<Bespaarweken setHideLayouts={setHideLayouts} />}
            />
            <Route
              path="/wookamer"
              element={<WoonkamerPage setHideLayouts={setHideLayouts} />}
            />
          </Routes>
        </div>
        {!hideLayouts && <Footer />}
      </Router>
    </div>
  )
}

export default App
