import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import CreatePage from "./pages/Create";


export default function App() {
  return (
    <Routes>
     <Route index element={<LoginPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  )
}
