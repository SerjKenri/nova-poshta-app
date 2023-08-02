import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Layout from "./page/Layout/Layout";
import Parcel from "./page/Parcel/Parcel";
import Department from "./page/Department/Department";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Parcel />} />
          <Route path="departament" element={<Department />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
