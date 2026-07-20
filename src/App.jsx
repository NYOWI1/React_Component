import { Navigate, Route, Routes } from "react-router-dom";
import PageCard from "./components/PageCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/greetings" replace />} />

      <Route
        path="/greetings"
        element={
          <PageCard
            title="Greetings"
            message="Hello! Welcome to my React application."
          />
        }
      />

      <Route
        path="/profiles"
        element={
          <PageCard
            title="Profile"
            message="My name is Kaung Zaw Hein. I am studying International Business and Entrepreneurship."
          />
        }
      />

      <Route
        path="/my-hobbies"
        element={
          <PageCard
            title="My Hobbies"
            message="I enjoy listening to music, watching movies, travelling, and coding."
          />
        }
      />

      <Route path="*" element={<Navigate to="/greetings" replace />} />
    </Routes>
  );
}

export default App;
