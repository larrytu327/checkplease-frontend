import { Routes, Route } from "react-router-dom"
import RestaurantBills from "../pages/RestaurantBills"
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RestaurantBills />} />
      </Routes>
    </main>
  )
}

export default Main
