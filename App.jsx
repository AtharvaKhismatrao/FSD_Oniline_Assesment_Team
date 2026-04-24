import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>Team Full Stack</h1>
          <div className="nav-links">
            <Link to="/" className="nav-btn">Home</Link>
            <Link to="/add-member" className="nav-btn">Add Member</Link>
            <Link to="/members" className="nav-btn">View Members</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
