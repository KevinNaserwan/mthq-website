export interface GaleriSection {
  id: number;
  item: string;
  section: string;
  created_at: string;
  updated_at: string;
}

export interface Galeri {
  id: number;
  section_id: string | null;
  nama_attribute: string;
  jenis_galeri: string;
  tipe_konten: string;
  konten_teks: string | null;
  konten_gambar: string;
  created_at: string;
  updated_at: string;
  section: GaleriSection | null;
}

export interface GaleriResponse {
  data: Galeri[];
}
