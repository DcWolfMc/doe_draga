import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { DeliverySend } from "./pages/DeliverySend";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/adList" element={<Cart />} />
          <Route path="/newAd" element={<Cart />} />
          <Route path="/ad/:id" element={<Cart />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliverySend" element={<DeliverySend />} />
        </Route>
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/admin/list" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
