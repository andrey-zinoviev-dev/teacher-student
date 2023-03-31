import React from "react";

function MainDashboard({user, lessonsAmount}) {
  return (
    <div>
      <p>Здарвуствуйте, {user.name}</p>
        <p>У вас сегодня {lessonsAmount} занятий</p>
        <div>
          
          <h3>Мои ближайшие занятия</h3>
          <ul>
            <li>
              <button>Ближайшие</button>
            </li>
            <li>
              <button>Сегодня</button>
            </li>
            <li>
              <button>Завтра</button>
            </li>
            <li>
              <button>На неделе</button>
            </li>
          </ul>
          <ul>
            <li>Занятие 1</li>
            <li>Занятие 2</li>
          </ul>
        </div>
    </div>
  )
};

export default MainDashboard