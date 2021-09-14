import axios from 'axios';

const GET_MISSIONS = 'Space-Travelers-Hub/missions/GET_MISSIONS';

const initialState = [];
const BASE_URL = 'https://api.spacexdata.com/v3';

export const getMissions = async () => {
  const missions = await axios.get(`${BASE_URL}/missions`);
  // const data = await fetch(`${BASE_URL}/missions`);
  // const missionsObj = await missions.data;
  // const missions = await data.json();
  console.log(missions.data);
  /*
  const list = Object.keys(booksObj);
  const fetchedBooks = [];
  list.map((book) => fetchedBooks.push({
    id: book,
    title: booksObj[book][0].title,
    category: booksObj[book][0].category,
    author: 'SomeOne',
    progress: '15%',
    currentChapter: 'Chapter 5',
  }));
  await dispatch({
    type: GET_MISSIONS,
    payload: fetchedBooks,
  }); */
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
