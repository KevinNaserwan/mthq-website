import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";
import Link from "next/link";

export default function Kontak() {
  const phoneNumber = "+6287749181562"; // WhatsApp phone number
  const message = encodeURIComponent(
    `Assalamu’alaikum MTHQ,\nSaya ingin bertanya tentang pendaftaran murid baru. Mohon informasinya, terima kasih.\nWassalamu'alaikum`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Kontak MTHQ"
        mainCategory="Beranda"
        currentPage="Kontak"
      />
      <div className="lg:px-36 lg:py-16 py-6 px-7 bg-white">
        <h1 className="text-black lg:font-medium font-semibold lg:text-center text-start text-[16px]">
          Hubungi MTHQ untuk informasi lebih lanjut!
        </h1>
        <div className="lg:mt-12 mt-6">
          <div className="flex lg:flex-row flex-col justify-center">
            <div className=" lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none  rounded-t-lg bg-[#E6F0EB] flex flex-col gap-5 py-5 px-10 drop-shadow-lg">
              <h1 className="font-bold text-2xl text-[#006C39]">
                Detail Kontak
              </h1>
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  alt="Facebook"
                  src="/icon/facebook-kontak.svg"
                  className=" lg:w-[50px] lg:h-[50px]"
                  width={50}
                  height={50}
                />
                <div className=" flex flex-col">
                  <h1 className=" font-bold text-xl text-[#006C39]">
                    Facebook
                  </h1>
                  <p className=" text-black font-medium text-base">
                    mthq.pudingbesar
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  alt="Instagram"
                  src="/icon/ig-kontak.svg"
                  className=" lg:w-[50px] lg:h-[50px]"
                  width={50}
                  height={50}
                />
                <div className=" flex flex-col">
                  <h1 className=" font-bold text-xl text-[#006C39]">
                    Instagram
                  </h1>
                  <p className=" text-black font-medium text-base">
                    MTHQ Bangka
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  alt="Youtube"
                  src="/icon/yt-kontak.svg"
                  className=" lg:w-[50px] lg:h-[50px]"
                  width={50}
                  height={50}
                />
                <div className=" flex flex-col">
                  <h1 className=" font-bold text-xl text-[#006C39]">Youtube</h1>
                  <p className=" text-black font-medium text-base">
                    MTHQ Channel
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  alt="Phone"
                  src="/icon/phone-kontak.svg"
                  className=" lg:w-[50px] lg:h-[50px]"
                  width={50}
                  height={50}
                />
                <div className=" flex flex-col">
                  <h1 className=" font-bold text-xl text-[#006C39]">Telepon</h1>
                  <p className=" text-black font-medium text-base">
                    ‪+62 877‑4918‑1562‬
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-bl-none rounded-b-lg  bg-white shadow-2xl">
              <Image
                alt="Whatsapp"
                src="/image/wa-kontak.svg"
                className="lg:w-[382px] lg:h-[356px] w-[350px] h-[320px]"
                width={382}
                height={356}
              />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#25D366] rounded-full flex-row items-center gap-3 inline-flex p-3 px-5 absolute bottom-10 lg:right-12 right-8">
                  <h1 className="font-bold text-base text-white">
                    Hubungi MTHQ
                  </h1>
                  <Image
                    alt="send"
                    src="/icon/send.svg"
                    width={19}
                    height={17}
                  />
                </button>
              </a>
            </div>
          </div>
          <div className=" flex lg:flex-row flex-col lg:p-0 p-6 mb-6 lg:mb-0 lg:gap-0 gap-6 justify-center items-center bg-[#E6F0EB] rounded-lg lg:mt-20 mt-10">
            <Image
              alt=""
              src="/image/hand.svg"
              className=" lg:w-[200px] lg:h-[200px]"
              width={200}
              height={200}
            />
            <div className=" flex flex-col lg:w-[50%]">
              <h1 className=" font-bold lg:text-2xl text-xl text-[#006C39]">
                MTHQ Mobile “Kemudahan Akses Informasi & Prestasi Siswa”
              </h1>
              <p className=" text-black font-medium text-base lg:mt-5 mt-3">
                Akses cepat informasi murid, laporan tahfidz, pembayaran,
                berita, absensi, dan transaksi dalam satu aplikasi.
              </p>
            </div>
            <Link
              href={"https://play.google.com/store/apps/details?id=com.mthq"}
            >
              {" "}
              <Image
                alt=""
                src="/image/playstore.svg"
                className=" lg:w-[200px] lg:h-[200px]"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
