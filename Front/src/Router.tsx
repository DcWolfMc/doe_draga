import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { AdList } from "./pages/AdList";
import { NewAnnounce } from "./pages/NewAnnounce";
import { AdDetails } from "./pages/AdDetails";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminAuth } from "./pages/AdminAuth";
import { AdminAdList } from "./pages/AdminAdList";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/adList" element={<AdList />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/newAd" element={<NewAnnounce />} />
          <Route path="/ad/:id" element={<AdDetails />} />
        </Route>

        <Route path="/adAdmin" element={<AdminLayout />}>
          <Route index element={<AdminAuth />} />
          <Route path="/adAdmin/list" element={<AdminAdList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
