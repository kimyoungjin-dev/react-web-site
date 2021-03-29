import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const IsNotShowMenu = ({ setClick, setMobileMenu, click }) => {
  return (
    <div onClick={() => setClick((prev) => !prev)}>
      {click ? (
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 35 }}
          onClick={() => setMobileMenu(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faWindowClose}
          style={{ fontSize: 35 }}
          onClick={() => setMobileMenu(false)}
        />
      )}
    </div>
  );
};

export default IsNotShowMenu;
