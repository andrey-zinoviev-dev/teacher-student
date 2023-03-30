import React from "react";
import SideMenu from "./SideMenu";
import Profile from "./Profile";
import Calendar from "./Calendar";
import { user } from './utils';

function UserDashboard () {
  //states
  const [lessonsAmount, setLessonsAmount] = React.useState(0);
  // const [loggedInProfile]
  return (
    <section style={{display: "flex", justifyContent:"space-between", alignItems: "flex-start", height: "100vh", width: "100%", padding: "50px 45px 50px 0", boxSizing: "border-box"}}>
      <SideMenu />
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
      <Profile user={user}>
        
      </Profile>
      {/* <Calendar></Calendar> */}
    </section>
  )
};

export default UserDashboard;