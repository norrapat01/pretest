import Menu from "../menu/menu";
import Sidebar from "./side-bar";

const SidebarWithMenu: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Menu />
    </>
  );
};
export default SidebarWithMenu;
