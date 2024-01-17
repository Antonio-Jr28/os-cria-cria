import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../page/home.page'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
