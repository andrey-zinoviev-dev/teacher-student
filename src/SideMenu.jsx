import React from "react";
import { Link } from "react-router-dom";
function SideMenu({ setProfileMode }) {

  return (
    <aside style={{alignSelf: "stretch", minWidth: 320}}>
      <div>
        <img src="https://img.tmstor.es/sleeptoken/small_header_image.png?id=bc277d400d7eba584c24d30116a26621"></img>
      </div>
      
      <ul>
        <li>
          <button onClick={() => {
            setProfileMode("main");
          }}>
            <Link to="../profile?mode=main">
              Главная панель
            </Link>
            
          </button>
        </li>
        <li>
          <button onClick={() => {
            setProfileMode("mylessons");
          }}>
            <Link to="../profile?mode=mylessons">Мои занятия</Link>
          </button>
        </li>
        <li>
          <button onClick={() => {
            setProfileMode("preferences");
          }}>
            <Link to="../profile?mode=preferences">Настройки</Link>
            
          </button>
        </li>
      </ul>
    </aside>
  )
};

export default SideMenu;