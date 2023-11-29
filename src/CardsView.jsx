import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcards } from "./cardSlice";
// import { ShimmerText } from "react-shimmer-effects";
// import "animate.css";

const CardsView = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const numbers = Array(100).fill(null);
  const numberList = numbers.map((number) => (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td class="px-6 py-4">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-36 mb-4"></div>

              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </td>
        <td class="px-6 py-4">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-24 mb-4"></div>

              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </td>
        <td class="px-6 py-4">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-96 mb-4"></div>

              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  ));
  useEffect(() => {
    dispatch(fetchcards());
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <div className="text-4xl font-extrabold">List of hearthstone cards </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Flavor text
              </th>
            </tr>
          </thead>

          {card.loading && numberList}
          {!card.loading && card.error ? <div>Error: {card.error}</div> : null}
          {!card.loading && card.cards.length ? (
            <tbody>
              {card.cards.map((card) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {" "}
                    {card.name}
                  </th>
                  <td class="px-6 py-4">{card.id}</td>
                  <td class="px-6 py-4">{card.flavor}</td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default CardsView;
