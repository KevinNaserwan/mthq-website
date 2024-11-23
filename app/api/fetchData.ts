// app/api/fetchData.ts
import { axiosInstance } from "@/lib/utils/AxiosInstances";

async function fetchData(): Promise<Data[]> {
  const response = await axiosInstance.get<Data[]>("/api/data");
  return response.data;
}

export default fetchData;

// types.ts
export type Data = {
  id: number;
  name: string;
};
