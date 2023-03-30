import React from "react";

function SideMenu() {
  return (
    <aside style={{alignSelf: "stretch", minWidth: 320}}>
      <img></img>
      <ul>
        <li>
          <button>
            Главная панель
          </button>
        </li>
        <li>
          <button>
            Мои занятия
          </button>
        </li>
        <li>
          <button>
            Настройки
          </button>
        </li>
      </ul>
    </aside>
  )
};

export default SideMenu;