import { axiosInstance } from "@/lib/utils/AxiosInstances";
import { Berita, DetailBerita } from "@/types/berita";

export async function getListBerita(): Promise<Berita[]> {
  const res = await axiosInstance.get("/api/list-berita");
  return res.data.data;
}

export async function getDetailBerita(
  list_berita_id: string
): Promise<DetailBerita[]> {
  const res = await axiosInstance.get("/api/detail-berita", {
    params: { list_berita_id },
  });
  return res.data;
}

export async function getTestimoni() {
  const res = await axiosInstance.get("/api/testimoni");
  return res.data;
}
