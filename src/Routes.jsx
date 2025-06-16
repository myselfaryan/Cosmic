import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from "pages/homepage";
import AstrologyServices from "pages/astrology-services";
import GemsCategory from "pages/gems-category";
import IndividualGemProduct from "pages/individual-gem-product";
import RudrakshaCategory from "pages/rudraksha-category";
import IndividualRudrakshaProduct from "pages/individual-rudraksha-product";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/astrology-services" element={<AstrologyServices />} />
          <Route path="/gems-category" element={<GemsCategory />} />
          <Route path="/individual-gem-product" element={<IndividualGemProduct />} />
          <Route path="/rudraksha-category" element={<RudrakshaCategory />} />
          <Route path="/individual-rudraksha-product" element={<IndividualRudrakshaProduct />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;