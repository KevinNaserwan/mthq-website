import { axiosInstance } from "@/lib/utils/AxiosInstances";
import { Galeri } from "@/types/galeri";

export const galeriApi = {
  // Fetch all galeri data
  getAllGaleri: async (): Promise<Galeri[]> => {
    try {
      const response = await axiosInstance.get("/api/galeri");
      return response.data;
    } catch (error) {
      console.error("Error fetching galeri:", error);
      throw error;
    }
  },

  // Get galeri by jenis_galeri
  getGaleriByJenis: async (jenisGaleri: string): Promise<Galeri[]> => {
    try {
      const response = await axiosInstance.get("/api/galeri");
      const allGaleri = response.data;
      return allGaleri.filter(
        (galeri: Galeri) => galeri.jenis_galeri === jenisGaleri
      );
    } catch (error) {
      console.error("Error fetching galeri by jenis:", error);
      throw error;
    }
  },

  // Get unique jenis_galeri categories
  getGaleriCategories: async (): Promise<string[]> => {
    try {
      const response = await axiosInstance.get("/api/galeri");
      const allGaleri = response.data;
      const categories = [
        ...new Set(allGaleri.map((galeri: Galeri) => galeri.jenis_galeri)),
      ] as string[];
      return categories;
    } catch (error) {
      console.error("Error fetching galeri categories:", error);
      throw error;
    }
  },
};
