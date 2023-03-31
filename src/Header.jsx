import React from "react";
import { Link } from "react-router-dom";
function Header () {
  const query = new URL(`${window.location.origin}/profile`);
  query.searchParams.set("mode", "main");
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
        <button>
          <Link to={`${query.toString()}`}>Перейти в профиль</Link>
        </button>
      </div>
    </header>
  )
};

export default Header;