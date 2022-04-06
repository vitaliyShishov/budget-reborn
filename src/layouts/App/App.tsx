import Header from '../Header'
import Footer from '../Footer'
import WoonkamerPage from '@pages/Woonkamer'
import 'tippy.js/dist/tippy.css'

function App() {
  const currentRouteId = ''
  return (
    <div className="app relative flex flex-col">
      <Header {...{ currentRouteId }} />
      <div className="flex flex-1 flex-col items-start">
        <WoonkamerPage />
      </div>
      <Footer />
    </div>
  )
}

export default App
