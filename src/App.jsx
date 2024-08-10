import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Notification from "./Pages/Dashboard/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import Preset from "./Pages/Dashboard/Preset";
import ChangePassword from "./Pages/Dashboard/ChangePassword";
import Profile from "./Pages/Dashboard/Profile";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import TotalTeacher from "./Pages/Dashboard/TotalTeacher";
import PrivacyPolicy from "./Pages/Dashboard/privacyPolicy";
import TermsCondition from "./Pages/Dashboard/TermsCondition";
import AllStudent from "./Pages/Dashboard/AllStudent";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  {" "}
                  <Dashboard />{" "}
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />

              <Route path="/preset" element={<Preset />} />
              <Route path="/all-student" element={<AllStudent />} />
              <Route
                path="/setting-change-password"
                element={<ChangePassword />}
              />

              <Route path="/profile" element={<Profile />} />
              <Route path="/total-teacher" element={<TotalTeacher />} />

              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsCondition />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp/:email" element={<Otp />} />
            <Route path="/update-password/:token" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Toaster/>
        </Router>
      </div>
    </>
  );
}

export default App;
