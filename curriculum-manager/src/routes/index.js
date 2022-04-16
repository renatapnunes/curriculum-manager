import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as pages from '../pages';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="/add" element={<pages.AddCurriculum />} />
      <Route path="/view/:id" element={<pages.ViewCurriculum />} />
    </Routes>
  );
}

export default MainRoutes;
