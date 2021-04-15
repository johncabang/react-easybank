import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">Home</SidebarLink>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
          <SidebarLink to="blog">Blog</SidebarLink>
          <SidebarLink to="careers">Careers</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
