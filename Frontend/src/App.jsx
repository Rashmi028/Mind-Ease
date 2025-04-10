import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Landing from "./Pages/Landing";
import TherapistAI from "./Pages/TherapistAI/TherapistAI";
import Meditations from "./Pages/Meditations/Meditations";
import MoodTracker from "./Pages/MoodTracker/MoodTracker";
import Community from "./Pages/Community/Community";
import Journal from "./Pages/Journal/Journal";
import Settings from "./Pages/Settings/settings";
import Overview from "./Pages/Dashboard/Overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="journal" element={<Journal />} />
          <Route path="meditations" element={<Meditations />} />
          <Route path="therapist" element={<TherapistAI />} />
          <Route path="mood-tracker" element={<MoodTracker />} />
          <Route path="community" element={<Community />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Navigate to="overview" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
