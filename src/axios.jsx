import axios from 'axios';

const instance = axios.create({
	baseURL: "http://us-central1-clone-7a750.cloudfunctions.net/api",
});
export default instance;


// http://localhost:4001/fir-9e294/us-central1/api