export interface Berita {
  id: number;
  section_id: string;
  kategori_berita: string;
  judul_berita: string;
  tanggal_upload: string;
  highlight_berita: string;
  tipe_konten: string;
  konten_teks: string | null;
  konten_gambar: string | null;
  created_at: string;
  updated_at: string;
}

export interface DetailBerita {
  id: number;
  section_id: string;
  list_berita_id: string;
  nama_attribute: string;
  konten_teks: string | null;
  konten_gambar: string | null;
  created_at: string;
  updated_at: string;
  list_berita?: Berita;
}

export interface TestimoniSection {
  id: number;
  item: string;
  section: string;
  created_at: string;
  updated_at: string;
}

export interface TestimoniItem {
  id: number;
  section_id: string;
  nama_attribute: string;
  tipe_konten: string;
  konten_teks: string | null;
  konten_gambar: string | null;
  created_at: string;
  updated_at: string;
  section: TestimoniSection;
}
