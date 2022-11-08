import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { AdList } from "./pages/AdList";
import { NewAnnounce } from "./pages/NewAnnounce";
import { AdDetails } from "./pages/AdDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/adList" element={<AdList />} />
          <Route path="/faq" element={<Cart />} />
          <Route path="/newAd" element={<NewAnnounce />} />
          <Route path="/ad/:id" element={<AdDetails />} />
        </Route>

        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/admin/list" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
