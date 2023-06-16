import React from "react";
import { Link } from "react-router-dom";
function Header () {
  const query = new URL(`${window.location.origin}/profile`);
  query.searchParams.set("mode", "main");
  return (
    <header style={{display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", padding: "20px 0", margin: "0 0 50px 0"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15}}>
        <img alt="лого" style={{width: 160}} src="https://img.tmstor.es/sleeptoken/small_header_image.png?id=bc277d400d7eba584c24d30116a26621"></img>
        <select style={{padding: 5}}>
          <option value="">Город</option>
          <option value="Москва">Москва</option>
          <option value="Питер">Санкт-Петербург</option>
        </select>
      </div>

      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15}}>
        <button>Зарегистрироваться</button>
        <button>
          <Link to={`${query.toString()}`}>Перейти в профиль</Link>
        </button>
      </div>
    </header>
  )
};

export default Header;