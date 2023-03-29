import React from "react";
import Header from "./Header";
import Workflow from "./Workflow";
function Welcome () {
  return (
    <>
      <Header></Header>
      <section>
        <div>
          <h1>Занятия для всех по любому направлению</h1>
          <p>Подберите преподавателя для занятий по любому интересующему направлению, наберитесь опыта, приобретите новые навыки</p>
        </div>
        <form>
          <input autoComplete="off"></input>
          <button type="button">Найти</button>
        </form>
      </section>
      <section>
        <ul>
          <li>Вокал</li>
          <li>Рисование</li>
          <li>Татуировки</li>
          <li>Фехтование</li>
          <li>Озвучание</li>
          <li>Яхтинг</li>
          <li>Пикап для мальчиков</li>
          <li>Пикап для девочек</li>
        </ul>
      </section>
      <Workflow />
    </>

  );
}

export default Welcome;