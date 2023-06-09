import axios from "axios";

export async function getData(endpoint: string) {
    const response = await axios.get(endpoint);
    return response;
}
