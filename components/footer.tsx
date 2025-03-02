import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00512B] min-h-0">
      <div className="grid lg:grid-cols-4 lg:gap-0 gap-9 lg:w-[1200px] py-16 w-[330px] mx-auto">
        <div className="lg:justify-items-start logo">
          <Link href="/">
            <Image
              alt="MTHQ Logo"
              src="/image/logo.svg"
              width={100}
              height={100}
            ></Image>
          </Link>
          <div className="lg:mt-16">
            <h1 className="font-semibold text-white lg:mt-0 mt-3">
              Sosial Media
            </h1>
            <div className="grid grid-cols-3 lg:w-[150px] w-[130px] mt-3">
              <div>
                <Link href="https://www.facebook.com/MTHQpudingbesar">
                  <Image
                    alt="Facebook"
                    src="/icon/facebook.svg"
                    width={35}
                    height={35}
                  ></Image>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/mthq.bangka?igsh=MWd1c2ZpdG1udGVpdA==">
                  <Image
                    alt="Instagram"
                    src="/icon/instagram.svg"
                    width={35}
                    height={35}
                  ></Image>
                </Link>
              </div>
              <div>
                <Link href="https://www.youtube.com/@mthqchannel9611">
                  <Image
                    alt="Youtube"
                    src="/icon/youtube.svg"
                    width={35}
                    height={35}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-menu">
          <h1 className="font-semibold text-white">Site Menu</h1>
          <div className=" grid grid-rows-6 lg:h-[216px] mt-4 text-white">
            <Link href="" className=" hover:font-bold">
              Beranda
            </Link>
            <Link href="" className=" hover:font-bold">
              Tentang MTHQ
            </Link>
            <Link href="" className=" hover:font-bold">
              Program
            </Link>
            <Link href="" className=" hover:font-bold">
              Galeri
            </Link>
            <Link href="" className=" hover:font-bold">
              Kalender Akademik
            </Link>
            <Link href="" className=" hover:font-bold">
              Kontak
            </Link>
          </div>
        </div>
        <div className="alamat-kontak grid grid-rows-2">
          <div>
            <h1 className="font-semibold text-white">MTHQ Bangka</h1>
            <p className=" mt-2 text-white">
              Jalan Raya Mentok-Pangkalpinang, Puding Besar, Kec. Puding Besar,
              Kabupaten Bangka, Kepulauan Bangka Belitung 33179
            </p>
          </div>
          <div className=" mt-6">
            <h1 className="font-semibold text-white">Kontak</h1>
            <p className=" mt-2 text-white">Telepon : ‪+62 877‑4918‑1562‬</p>
            <p className="text-white">Facebook : MTHQ Bangka</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63763.57199884247!2d105.9223547!3d-2.0014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22e689f808e5a5%3A0x78f8b122ba26d64d!2sMA&#39;HAD%20TAHFIDZ%20HIDAYATUL%20QUR&#39;AN%20(MTHQ)%20PUDING%20BESAR!5e0!3m2!1sid!2sid!4v1699269064973!5m2!1sid!2sid"
            width="230"
            height="230"
            className="lg:ml-auto"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
