import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./config/routes";

function App() {
  const isAuthenticated = false; // You would get this from your auth context or state

  return (
    <Router>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </Router>
  );
}

export default App;
