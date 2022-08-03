import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export const afetch = (url) => axios.get(url).then((res)=> res.json())

export default fetcher