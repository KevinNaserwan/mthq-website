import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";

export default function ProgramBahasa() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Program Tahfidz"
        mainCategory="Program"
        currentPage="Program Tahfidz"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
        <div className=" flex flex-col items-start justify-center lg:gap-10 gap-5 lg:px-0 px-6 lg:py-0 py-6">
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              A. Halaqoh Tahfidz
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                <span className=" font-bold">Halaqoh Tahfidz</span>, kegiatan
                rutin harian dalam halaqoh/kumpulan kecil bersama seorang
                pembimbing/musyrif. Meliputi:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>
                  {" "}
                  <span className=" font-bold">ZIYADAH</span> (Setoran hafalan)
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">TAKRIR</span> (mengulang 5/rubu’
                  hafalan baru)
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">MUTQIN</span> (mengulang hafalan
                  1 juz lama)
                </li>
                <li>
                  <span className=" font-bold">MUTQIN FARDHI</span> (mengulang
                  hafalan sebanyak-banyaknya secara mandiri)
                </li>
              </ul>
            </div>
            <div className=" mt-4">
              <p className=" text-base">
                <span className=" font-bold">Target hafalan</span> tergantung
                kemampuan santri masing-masing, yaitu:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>
                  Target hafalan minimal pertahun mutqin 2,5 juz, target lulus
                  15 Juz
                </li>
                <li>
                  Target hafalan normal pertahun mutqin 5 juz, target lulus
                  khatam 30 juz
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              B. Murojaah Jama’i
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                <span className=" font-bold">Murojaah Jama’i</span>, yaitu
                kegiatan rutin harian dibimbing oleh asatidz piket. Meliputi:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>
                  {" "}
                  <span className=" font-bold">Isti’dad</span> (Persiapan
                  hafalan)
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">Muroja’ah</span> (Mengulang
                  hafalan)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              C. Imtihan Tahfidz Mutqin
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                <span className=" font-bold">Imtihan Tahfidz Mutqin</span>,
                adalah ujian hafalan sebelum naik ke juz berikutnya. Meliputi:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>
                  {" "}
                  <span className=" font-bold">Imtihan Juz’i</span> yaitu ujian
                  satu juz mutqin diujikan dari awal sampai akhir juz dalam satu
                  majlis/satu kali duduk.
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">Imtihan Kubro</span> diujikan
                  dari juz pertama terdiri dari ujian 5 juz, 10 juz, 15 juz, 20
                  juz, 25 juz dan 30 juz.
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">Imtihan Akbar</span> ujian akhir
                  30 juz yang diujikan dari juz pertama hingga juz 30 dan
                  disaksikan seluruh santri, dewan guru, wali santri.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              D. Tasmi’ Khotmil Qur’an
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                Simaan ujian akhir santri yang telah khatam 30 juz. Disimak oleh
                seluruh santri, dewan guru dan wali santri yang bersangkutan.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              E. Wisuda Akbar
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                <span className=" font-bold">Wisuda Akbar</span>, adalah acara
                besar tahunan untuk mewisuda serta pemberian sertiﬁkat dan
                penghargaan bagi yang lulus ujian tahﬁdz 5 juz, 10 juz, 15 juz,
                20 juz, 25 juz, serta 30 juz.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              F. Karantina Intensif Tahfidz
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                Adalah kegiatan full tahfidz yang dilaksanakan pada tiap awal
                semester, setelah selesai ujian pada waktu menunggu pembagian
                rapot dan selama bulan ramadhan.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              G. Tahsinul Qiro’ah
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                Mencakup beberapa jenis kegiatan, yaitu;
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>
                  {" "}
                  <span className=" font-bold">
                    Karantina tahsin santri baru
                  </span>{" "}
                  setiap awal tahun ajaran baru untuk santri baru.
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">
                    Tahsin jama’i (massal)
                  </span>{" "}
                  untuk semua santri untuk menjaga kualitas bacaan.
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">
                    Tahsin fardi (individual)
                  </span>{" "}
                  di setiap halaqah masing-masing.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              H. Program Apresiasi Santri Berprestasi
            </h1>
            <div className=" mt-4">
              <p className=" text-base">
                Program apresiasi santri berprestasi, meliputi:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li> Ziyadah terbanyak bulanan</li>
                <li>Muroja’ah terbanyak</li>
                <li>
                  Seleksi tahunan beasantri tahfidz dari pemerintah provinsi
                </li>
                <li>Pemberian Tasyrih, Syahadah, dan Ijazah Tahfiz</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-12">
          <div className=" flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
