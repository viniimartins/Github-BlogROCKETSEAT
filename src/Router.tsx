import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./page/Home";
import { Overview } from "./page/Overview";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/overview/:id" element={<Overview />} />
      </Route>
    </Routes>
  );
}
