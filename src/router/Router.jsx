import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects/electronic-voting-machine"
          element={<ProjectDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default Router;