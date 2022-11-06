import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const ITEMS = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the famous scrappers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001, États-Unis",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorId: "uid1",
  },
  {
    id: "p2",
    title: "La tour Eiffel",
    description: "Trop belle!",
    imageUrl:
      "https://blog.toploc.com/wp-content/uploads/2020/04/Pensez-a-visiter-la-Tour-Eiffel-lors-de-votre-sejour-a-Paris.jpg",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorId: "uid1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = ITEMS.filter((place) => place.creatorId === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
