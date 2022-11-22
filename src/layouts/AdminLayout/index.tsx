import { Outlet } from "react-router-dom";
import { AdminHeader } from "../../components/AdminHeader";
import { Container } from "./styles";

export const AdminLayout = () => {
  return (
    <Container>
      <AdminHeader />
      <Outlet />
    </Container>
  );
};
