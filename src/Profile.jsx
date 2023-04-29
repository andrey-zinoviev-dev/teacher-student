import React from "react";

function Profile({ user }) {
  return (
    <div>
      <img>
      </img>
      <div>
        <span>
          {`${user.name}, ${user.surname}`}
        </span>
        <span>
          {user.profession}
        </span>
      </div>
      {/* <ul>
        <li>
          <button>Уведомления</button>
          <button>Сообщения</button>
        </li>
      </ul> */}
    </div>
  )
}

export default Profile;