import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcards } from "./cardSlice";

const CardsView = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcards());
  }, []);
  return (
    <div>
      <h2>List of cards</h2>
      {card.loading && <div>Loading...</div>}
      {!card.loading && card.error ? <div>Error: {card.error}</div> : null}
      {!card.loading && card.cards.length ? (
        <ul>
          {card.cards.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CardsView;
