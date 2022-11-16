import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
export const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
