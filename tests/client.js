import axios from "axios";

jest.setTimeout(60000);

export default axios.create({ baseURL: process.env.BASE_URL });
