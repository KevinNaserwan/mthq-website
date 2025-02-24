import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function ProgramBahasa() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Program Ta’lim"
        mainCategory="Program"
        currentPage="Program Ta’lim"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
        <div className=" flex flex-col items-start justify-center lg:gap-10 gap-5 lg:px-0 px-6 lg:py-0 py-6">
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              Program Ta’lim
            </h1>
            <div className=" mt-4">
              <p className=" text-base text-justify">
                <span className=" font-bold">Program Ta’lim</span> bertujuan
                untuk menghasilkan santri yang menguasai ilmu keagamaan dasar
                didukung oleh kemampuan bahasa yang memadai sebagai pondasi dan
                dasar-dasar pengembangan keilmuan lebih lanjut. Standar
                kompetensi lulusan MTHQ adalah sudah mampu memahami dan
                mendalami materi kitab-kitab dasar dalam bidang keagamaan,
                seperti akhlak, tauhid, fikih, usul fikih, ulumul qur’an,
                tafsir, hadis, ilmu hadis dan sejarah serta terbiasa membaca
                kitab kuning (al-kutub al-turats). Selain itu santri juga mampu
                mengoperasikan teknologi informasi dasar minimal penguasaan
                microsoft office di komputer.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              Program Divisi Ta’lim adalah:
            </h1>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              I. Pembinaan keagamaan (diniy)
            </h1>
            <div className=" mt-4">
              <p className=" text-base text-justify">
                Berupa KBM Materi Agama yang terdiri dari: fikih, qur’an-hadis,
                akhlak, tauhid, sejarah Islam, bahasa Arab (nahwu, saraf), ushul
                fikih, ulum al-Qur’an dan ulum al-hadis.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              II.Sistem Pendidikan
            </h1>
            <div className=" mt-4">
              <p className=" text-base text-justify">
                MTHQ menerapkan system Pendidikan Islam Terpadu. Secara formal
                para santri dibina melalui jalur Madrasah yang di pimpin dan
                dikelola oleh Kepala Madrasah, Wali, Kelas, serta Dewan Guru.
                Untuk program asrama dibina dengan sistem kekeluargaan/ukhuwah
                Islamiyah secara intensif dan selaras dengan jalur formal.
                Dipimpin oleh pengasuhan dan keamanan ditangani oleh dewan
                asatidz dibantu oleh Mudabbir (Pengurus Organisasi), musyrif
                Asrama putra dan asrama putri.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              A. Kurikulum Pendidikan
            </h1>
            <div className=" mt-4">
              <p className=" text-base text-justify">
                Divisi ta’lim bertanggungjawab atas keberlangsungan pembelajaran
                di MTHQ, baik itu formal maupun ilmu keislaman, dikelas juga di
                kajian umum.
              </p>
            </div>
            <div className=" hidden lg:flex justify-center lg:mt-16 lg:mb-0 mt-4 mb-4">
              <Image
                src="/image/kurikulum-pendidikan.png"
                width={700}
                height={264}
                alt=""
              />
            </div>
            <div className=" lg:hidden flex justify-center lg:mt-16 lg:mb-0 mt-4 mb-4">
              <Image
                src="/image/kurikulum-pendidikan-mobile.png"
                width={700}
                height={264}
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
              B. Pola Pendidikan di MTHQ
            </h1>
            <div className=" mt-4">
              <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
                I. Bersifat Integratif
              </h1>
              <div className=" mt-4">
                <p className=" text-base text-justify">
                  Memadukan Struktur kurikulum intrakurikuler, kokurikuler, dan
                  ekstra kurikuler.
                </p>
              </div>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-black">
                A. Intrakurikuler
              </h1>
              <div className=" mt-8">
                <p className=" text-base text-justify">
                  Proses belajar mengajar yang dilaksanakan di madrasah.
                </p>
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] hidden lg:flex justify-center">
                <Image
                  src="/image/intrakulikuler.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:hidden flex justify-center">
                <Image
                  src="/image/intra-mobile.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-black">
                B. Kokurikuler
              </h1>
              <div className=" mt-8">
                <p className=" text-base text-justify">
                  Penugasan dan pembiasaan untuk lebih memahami materi
                  intrakurikuler.
                </p>
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] hidden lg:flex justify-center">
                <Image
                  src="/image/kurikuler.png"
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:hidden flex justify-center">
                <Image
                  src="/image/kori-mobile.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-black">
                C. Ekstra Kurikuler
              </h1>
              <div className=" mt-8">
                <p className=" text-base text-justify">
                  Kegiatan di luar jam belajar untuk pengembangan potensi,
                  bakat, minat, kepribadian, kemandirian.
                </p>
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:flex hidden justify-center">
                <Image
                  src="/image/ekstra.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:hidden flex justify-center">
                <Image
                  src="/image/ekstra-mobile.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-[#006C39]">
                II. Bersifat Komprehensif
              </h1>
              <div className=" mt-8">
                <p className=" text-base text-justify">
                  Menyeluruh dan lengkap, bukan hanya dilaksanakan di dalam
                  kelas, namun juga dilaksanakan di luar kelas menggunakan
                  banyak aktivitas yang padat serta mendidik .
                </p>
              </div>
              <div className=" mt-8lg:w-[1200px] w-[340px] lg:fle hidden justify-center">
                <Image
                  src="/image/kompre.png"
                  className=""
                  width={1050}
                  height={300}
                  alt=""
                />
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:hidden flex justify-center">
                <Image
                  src="/image/ekstra-mobile.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-black">
                A.Evaluasi Belajar
              </h1>
              <div className=" mt-8">
                <p className=" text-base text-justify">
                  Ada empat sistem evaluasi yang digunakan di Ma’had Tahfidz
                  Hidayatul Qur’an (MTHQ), yaitu:
                </p>
              </div>
              <ul className=" list-decimal ml-8 pt-2 flex flex-col gap-4">
                <li>
                  {" "}
                  <span className=" font-bold">Ujian tulis (tahriri)</span>
                  <p>
                    Materi yang diujikan adalah seluruh mata pelajaran yang
                    telah diajarkan di dalam kelas. Tujuan dilaksanakan ujian
                    tulis ini sebagai pengukur sejauh mana peserta didik telah
                    menguasai materi yang disampaikan selama satu semester yang
                    dinyatakan dalam bentuk pertanyaan tertulis. Hasil
                    pembelajaran di sampaikan dengan Rapor Kemenag atau RDM.
                  </p>
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">
                    Ujian lisan (syafahi){" "}
                  </span>{" "}
                  <p>
                    Materi yang diujikan melingkupi 4 kelompok pembelajaran
                    yaitu bahasa Arab, bahasa Inggris, membaca kitab serta
                    al-Qur’an atau ibadah yang didalamnya termasuk ujian
                    praktek. Hasil pembelajaran di sampaikan dengan Rapor
                    pondok.
                  </p>
                </li>
                <li>
                  {" "}
                  <span className=" font-bold">
                    Ujian praktek mengajar (‘amaliyah tadris)
                  </span>{" "}
                  <p>
                    Selain mata pelajaran yang diujikan dalam ujian tulis dan
                    lisan, Ma’had Tahfidz Hidayatul Qur’an (MTHQ) juga
                    mengadakan dan mengujikan untuk praktik mengajar atau Micro
                    Teaching yang diujikan yaitu praktik mengajar atau Micro
                    Teaching yang dikhususkan untuk santri k elas 6 atau kelas
                    XII sebagai syarat kelulusan.
                  </p>
                </li>
                <li>
                  <span className=" font-bold">
                    Ujian Bahtsul Masail dan karya ilmiah{" "}
                  </span>{" "}
                  <p>
                    Merupakan ujian di kelas akhir (kelas 6) berupa riset
                    pencarian di sumbersumber kitab dan perpustakaan digital,
                    untuk kemudian dipresentasikan dan diperdebatkan, serta
                    dirangkum dalam kaya ilmiah.
                  </p>
                </li>
              </ul>
            </div>
            <div className=" mt-8">
              <h1 className=" font-bold lg:text-2xl text-lg text-black">
                B. Buku Rujukan
              </h1>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:flex hidden justify-center">
                <Image src="/image/buku.png" width={865} height={340} alt="" />
              </div>
              <div className=" mt-8 lg:w-[1200px] w-[340px] lg:hidden flex justify-center">
                <Image
                  src="/image/buku-mobile.png"
                  className=""
                  width={865}
                  height={340}
                  alt=""
                />
              </div>
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
