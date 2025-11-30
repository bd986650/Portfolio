import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/Home'
import PortfolioPage from '@/pages/Portfolio'
import { DesktopOnly } from '@/components/DesktopOnly'

function App() {
  return (
    <BrowserRouter>
      <DesktopOnly>
        <div className="font-dm-sans antialiased" style={{ '--font-montserrat': 'Montserrat', '--font-dm-sans': 'DM Sans', '--font-unbounded': 'Unbounded' } as React.CSSProperties}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<PortfolioPage />} />
          </Routes>
        </div>
      </DesktopOnly>
    </BrowserRouter>
  )
}

export default App