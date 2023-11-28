// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const response = await fetch(
//           "https://api.hearthstonejson.com/v1/189017/enUS/cards.collectible.json"
//         );
//         const data = await response.json();
//         setCards(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchCards();
//   }, []);

//   return (
//     <div>
//       <h1>Hearthstone Cards</h1>
//       <ul>
//         {cards.map((card) => (
//           <li key={card.id}>{card.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import CardsView from "./CardsView";
function App() {
  return (
    <div className="App">
      <CardsView />
    </div>
  );
}

export default App;
