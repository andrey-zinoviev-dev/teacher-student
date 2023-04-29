import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { dashboardButtons } from './utils';
import { motion } from "framer-motion"
function SideMenu() {
  //navigate
  const navigate = useNavigate();

  return (
    <aside style={{alignSelf: "stretch", width: 240, textAlign: "left"}}>
      {/* <div>
        
      </div> */}
      <img style={{width: 160}} src="https://img.tmstor.es/sleeptoken/small_header_image.png?id=bc277d400d7eba584c24d30116a26621"></img>
      <ul style={{display: "flex", alignItems: "stretch", flexDirection: "column", gap: 15, padding: 0, listStyle: "none"}}>
        {dashboardButtons.map((button, index) => {
          return <li key={button.title} style={{width: "100%"}}>
            <motion.button whileHover={{backgroundColor: "rgb(0 0 0)"}} style={{width: "100%"}} onClick={() => {
              navigate({
                pathname: "/profile",
                search: `${createSearchParams({mode: button.url})}`
              })
            }}>{button.title}</motion.button>
          </li>
        })}
        {/* <li>
          <button onClick={() => {
            
            navigate({
              pathname: "/profile",
              search: `?${createSearchParams({mode: params && params})}`
            });
          }}>
            Профиль
          </button>
        </li>
        <li>
          <button onClick={() => {
           
            navigate({
              pathname: "/profile",
              search: `?${createSearchParams({mode: })}`
            });
          }}>
            Мои занятия
            
          </button>
        </li>
        <li>
          <button onClick={() => {
            
            navigate({
              pathname: "/profile",
              search: `?${createSearchParams({mode: })}`
            });
          }}>
            Настройки
          </button>
        </li> */}
      </ul>
    </aside>
  )
};

export default SideMenu;