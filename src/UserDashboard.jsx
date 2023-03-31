import React from "react";
import SideMenu from "./SideMenu";
import Profile from "./Profile";
import Calendar from "./Calendar";
import MainDashboard from "./MainDashboard";
import { user } from './utils';
import { useLocation, useSearchParams, Link } from "react-router-dom";
function UserDashboard () {
  //variables
  let [searchParams, setSearchParams] = useSearchParams();
  const urlProfileMode = searchParams.get('mode');
  // const queryData = useSearchParams.get('mode');
  // console.log(queryData);
  //states
  const [lessonsAmount, setLessonsAmount] = React.useState(0);
  const [profileMode, setProfileMode] = React.useState(urlProfileMode);

  // const [loggedInProfile]
  React.useEffect(() => {
    console.log(profileMode);
  }, [profileMode])
  return (
    <section style={{display: "flex", justifyContent:"space-between", alignItems: "flex-start", height: "100vh", width: "100%", padding: "50px 45px 50px 0", boxSizing: "border-box"}}>
      <SideMenu profileMode={profileMode} setProfileMode={setProfileMode}/>
      <div>
        {profileMode === 'main' &&<>
          <MainDashboard user={user} lessonsAmount={lessonsAmount}>

          </MainDashboard>
          <Profile user={user}>

          </Profile>
        </>}
        {profileMode === 'mylessons' && <>
          Мои уроки
        </>}
        {
          profileMode === 'preferences' && <>
          Мои настройки</>
        }
      </div>

      {/* <Calendar></Calendar> */}
    </section>
  )
};

export default UserDashboard;