import { useState, useEffect } from "react";
import { Galeri } from "@/types/galeri";
import { galeriApi } from "@/api/galeriApi";

export const useGaleri = () => {
  const [galeri, setGaleri] = useState<Galeri[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGaleri = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await galeriApi.getAllGaleri();
      setGaleri(data);
    } catch (err) {
      setError("Failed to fetch galeri data");
      console.error("Error in useGaleri:", err);
    } finally {
      setLoading(false);
    }
  };

  const getGaleriByJenis = (jenisGaleri: string): Galeri[] => {
    return galeri.filter((item) => item.jenis_galeri === jenisGaleri);
  };

  const getGaleriCategories = (): string[] => {
    return [...new Set(galeri.map((item) => item.jenis_galeri))];
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  return {
    galeri,
    loading,
    error,
    getGaleriByJenis,
    getGaleriCategories,
    refetch: fetchGaleri,
  };
};
