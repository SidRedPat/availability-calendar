import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Calender from "./Calender";
import Tasks from "./Tasks";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Calender />} />
          <Route exact path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
