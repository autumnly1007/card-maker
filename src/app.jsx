import "./app.css";
import Login from "./common/components/login/login";

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
