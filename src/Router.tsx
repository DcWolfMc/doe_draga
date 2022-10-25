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
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliverySend" element={<DeliverySend />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
