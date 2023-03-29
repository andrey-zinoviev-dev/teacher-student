import React from "react";

function Header () {
  return (
    <header>
      <div>
        <img alt="лого"></img>
        <span>Учитель-ученик</span>
      </div>
      <select>
        <option value="">Город</option>
        <option value="Москва">Москва</option>
        <option value="Питер">Санкт-Петербург</option>
      </select>
      <div>
        <button>Зарегистрироваться</button>
      </div>
    </header>
  )
};

export default Header;