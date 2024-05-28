import axios from 'axios';

export default function createGameSlice(set, get) {
  const ROOT_URL = 'https://pengulingo-api.onrender.com';
  // const ROOT_URL = 'http://localhost:9090';

  return {
    all: [],
    current: {},
    // a slice action to get a game's state
    getState: async (id) => {
      try {
        const response = await axios.get(`${ROOT_URL}/rooms/${id}`);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/getState');
      } catch (error) {
        console.error('Error fetching game state: ', error.message);
      }
    },
    createRoom: async (data) => {
      try {
        const response = await axios.post(`${ROOT_URL}/rooms/`, data);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/createRoom');
      } catch (error) {
        console.error('Error creating room: ', error.message);
      }
    },
    changeGameStatus: async (id, status) => {
      // PUT
      // takes in updated data (could include the ID of the post to update in the post object or add a separate parameter
      try {
        const response = await axios.put(`${ROOT_URL}/rooms/${id}`, status);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/changeGameStatus');
      } catch (error) {
        console.error('Error updating game status: ', error.message);
      }
    },
    changePlayerStatus: async (id, active) => {
      try {
        const response = await axios.put(`${ROOT_URL}/rooms/${id}/players`, active);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/changePlayerStatus');
      } catch (error) {
        console.error('Error updating player status: ', error.message);
      }
    },
    joinRoom: async (data) => {
      try {
        const response = await axios.post(`${ROOT_URL}/rooms/joinRoom`, data);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/joinRoom');
      } catch (error) {
        console.error('Error joining room: ', error.message);
      }
    },
    submitAnswer: async (id, data) => {
      try {
        const response = await axios.post(`${ROOT_URL}/rooms/${id}/submissions`, data);
        set(({ gameSlice }) => { gameSlice.current = response.data; }, false, 'rooms/submitAnswer');
      } catch (error) {
        console.error('Error submitting answer: ', error.message);
      }
    },
  };
}
