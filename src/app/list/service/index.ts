import endpoints from "@/app/utils/endpoints";
import { getData } from "@/libs/axios";

export async function getAllUsers() {
    const response = await getData(endpoints.list.getAllUsers);
    return response.data;
}
