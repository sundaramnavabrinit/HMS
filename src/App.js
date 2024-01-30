import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Topbar from "./components/Topbar/Topbar";
import SideNav from "./components/SideNav/SideNav";
import CreateBooking from "./pages/CreateBooking/CreateBooking";
import RoomsManagement from "./pages/RoomsManagement/RoomsManagement";
import GuestMgmt from "./pages/GuestMgmt/GuestMgmt";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">
          <div className="page-side">
            <SideNav />
          </div>
          <div className="page-body">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/dashboard/create/:currentTab"
                element={<CreateBooking />}
              />
              <Route path="/roomsmgmt" element={<RoomsManagement />} />
              <Route path="/guest/:currentTab" element={<GuestMgmt />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
