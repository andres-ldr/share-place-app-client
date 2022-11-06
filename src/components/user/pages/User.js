import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 'uid1',
      name: 'Andres',
      image:
        'https://imgs.search.brave.com/pdhIT8GMxNeASsJ6uILi7_6cAxFuD6km_mbSK0wFx1E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2Fj/L2EzL2ExYWNhM2Iw/MTU2MTA3ZWQ3ZGNl/YzhjZTA3NWVjOWZl/LmpwZw',
      places: 5,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
