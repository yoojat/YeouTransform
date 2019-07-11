import { stack as Menu } from "react-burger-menu";

export default ({ onMenuClick, menuOpen, handleStateChange }) => (
  <Menu
    isOpen={menuOpen}
    right
    customBurgerIcon={<img src="/static/img/main/OpenMenuBar.png" />}
    onStateChange={state => handleStateChange(state)}
  >
    <a
      id="home"
      className="menu-item"
      href="#"
      onClick={e => onMenuClick(e, "pricing")}
    >
      이용요금
    </a>
    <a
      id="about"
      className="menu-item"
      href="#"
      onClick={e => onMenuClick(e, "about")}
    >
      회사소개
    </a>

    <a
      id="cotact"
      className="menu-item"
      href="#"
      onClick={e => onMenuClick(e, "branch")}
    >
      지점안내
    </a>
  </Menu>
);
