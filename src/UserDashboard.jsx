import React from "react";
import SideMenu from "./SideMenu";

function UserDashboard () {
  //states
  const [lessonsAmount, setLessonsAmount] = React.useState(0);
  return (
    <section>
      <SideMenu />
      <div>
        <p>Здарвуствуйте, пользователь!</p>
        <p>У вас сегодня {lessonsAmount} занятий</p>
      </div>
    </section>
  )
};

export default UserDashboard;