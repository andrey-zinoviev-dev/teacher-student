import React from "react";
import Header from "./Header";
import Workflow from "./Workflow";
import SearchImg from './assets/magnifying-glass-solid.png';
import { categories } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Welcome () {
  return (
    <>
      <Header></Header>
      <section>
        <div>
          <h1 style={{margin: "0 auto", fontSize: 64, lineHeight: "1.5", width: "100%"}}>Занятия по любому направлению</h1>
          <p>Подберите преподавателя для занятий по любому интересующему направлению, наберитесь опыта, приобретите новые навыки</p>
        </div>
        <form style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 30}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative"}}>
            <input autoComplete="off" placeholder="Направление" style={{width: 420, height: 40, boxSizing: "border-box", padding: "5px 0 5px 25px", border: "none", borderBottom: "2px solid black", outline: "none", backgroundColor: "transparent"}}></input>
            <img style={{position: "absolute", top: 8, left: 0, width: 20}} alt="лупа"  src={SearchImg} />
          </div>
          
          <button type="button">Найти</button>
        </form>
      </section>
      <section style={{margin: "50px 0 0 0", display: "flex"}}>
        <ul style={{padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 920, margin: "0 auto", gap: 25}}>
          {categories.map((category) => {
            return <li key={category.id} style={{width: 240, height: 320, borderRadius: 9, boxShadow: "5px 5px 65px rgba(0, 0, 0, 0.1)", padding: 20, boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
              <p>{category.title}</p>
              <button style={{fontSize: 20, color: "#86c5c6", backgroundColor: "transparent", border: "none", alignSelf: "flex-end"}}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </li>
          })}

        </ul>
      </section>
      <Workflow />
    </>

  );
}

export default Welcome;