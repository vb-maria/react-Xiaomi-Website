import React from 'react'
import GooglePlay from "/src/assets/global/google-play-logo.svg"
{/*Quick implementation, will be properly implemented later on*/}
const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#191919] text-white flex justify-center">
    <div
      id="footer-wrapper"
      className="p-5 md:p-20 max-w-[1500px] pt-[64px] flex  h-full w-full flex-col"
    >
      <div>
        <div
          id="list"
          className="hidden md:flex flex-row text-left lg:w-[65%]  h-full"
        >
          <div className="w-[40%] xl:w-[30%] h-full pr-5 ">
            <h3 className="mb-[16px]">PRODUK</h3>
            <ul className="flex flex-col">
              <li>
                <a href="">Redmi Note 11</a>
              </li>
              <li>
                <a href="">Redmi 10A</a>
              </li>
              <li>
                <a href="">Redmi 10C</a>
              </li>
            </ul>
          </div>
          <div className=" w-[auto] h-full pr-5 ">
            <h3 className="mb-[16px]">DUKUNGAN</h3>
            <ul className="flex flex-col flex-nowrap">
              <li>
                <a href="">Panduan Pengguna</a>
              </li>
              <li>
                <a href="">Kewajiban pendaftaran IMEI ponsel Anda</a>
              </li>
              <li>
                <a href="">Garansi</a>
              </li>
              <li>
                <a href="">Service Center resmi</a>
              </li>
            </ul>
          </div>
          <div className=" w-auto h-full px-10 ">
            <h3 className="mb-[16px]">TENTANG</h3>
            <ul className="flex flex-col">
              <li>
                <a href="./about.html">Tentang Kita</a>
              </li>
              <li>
                <a href="./founders.html">Leadership Team</a>
              </li>
              <li>
                <a href="./privacy.html">Kebijakan privasi</a>
              </li>
              <li>
                <a href="./agreement.html">Integrity and compliance</a>
              </li>
              <li>
                <a href="./index.html">Trust Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="info"
          className="p-0 lg:pl-20 md:flex flex-col w-full lg:w-[35%] bg-[#191919] h-full items-start justify-between"
        >
          <div id="info-warpper" className="w-full">
            <div className="flex lg:flex-col w-full justify-between">
              <div id="footer-follow">
                <h3 className="footer_title">Ikuti sosial media Xiaomi</h3>
                <ul className="flex gap-5 pt-4">
                  <li>
                    <a
                      href="https://www.facebook.com/XiaomiIndonesia"
                      target="_blank"
                      rel="noopenner noreferrer nofollow "
                      aria-label="Social Media-facebook"
                    >
                      <i
                        className="micon micon-facebook"
                        id="facebook-social"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/xiaomi.indonesia?igshid=4e0hzv0q2nmu"
                      target="_blank"
                      rel="noopenner noreferrer nofollow "
                      aria-label="Social Media-instagram"
                    >
                      <i className="micon micon-instagram" id="ig-social"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/xiaomiindonesia"
                      target="_blank"
                      rel="noopenner noreferrer nofollow"
                      aria-label="Social Media-twitter"
                    >
                      <i
                        className="micon micon-twitter"
                        id="twitter-social"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC4qeOFEmsAHF2jQ4y0qHikw"
                      target="_blank"
                      rel="noopenner noreferrer nofollow"
                      aria-label="Social Media-youtube"
                    >
                      <i className="micon micon-youtube" id="yt-social"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="footer-connect">
                <h3 className="footer_title lg:pt-5">
                  Untuk berlangganan buletin kami
                </h3>
                <div id="footer_form" className="w-full pt-4">
                  <div id="footer_input" className="w-full block relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full h-[48px] bg-[#191919] border border-white border-2  p-3 focus:border-[#FFA500] rounded-md"
                      placeholder="Masukkan alamat email di sini"
                    />
                    <button
                      id="submitt-icon"
                      className="absolute top-0 right-[10px] px-1 flex h-full items-center"
                    >
                      <i className="micon micon-forward text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer-app" className="py-5">
            <h3 className="footer-title py-4">Unduh Aplikasi Mi Store</h3>
            <button className="w-fit h-[48px] border border-white border-2 flex items-center pr-[15px] py-2 rounded-md">
              <a
                href="https://www.mi.co.id/id/appdownload/"
                target="_blank"
                rel="noreferrer"
                aria-label="Temukan di Google Play Store"
                className="flex justify-between"
              >
                <img
                  src={GooglePlay}
                  className="h-[20px]"
                  alt=""
                  loading="lazy"
                  height="40"
                  width="40"
                />
                <span className="text-white">
                  Temukan di Google Play Store
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="w-auto flex flex-col justify-start md:flex-row-reverse ">
        <div class="flex w-full flex-col justify-start md:flex-row md:justify-between md:items-center">
          <div class="w-fit">
            <a
              href="//www.mi.co.id/id/sitemap/"
              target="_blank"
              class="text-white flex items-center"
            >
              Peta Situs
            </a>
          </div>
          <div class="w-fit">
            <a
              href="//www.mi.co.id/id/select-location/"
              class="text-white flex items-center"
            >
              Indonesia / Indonesia
              <i class="micon micon-language-earth locale__icon text-md ml-[10px] text-white"></i>
            </a>
          </div>
        </div>
        <div class="flex w-full justify-left gap-5 lg:min-w-fit lg:w-max md:px-5 items-center border-t-2 border-white md:border-0">
          <p class="text-white">
            Copyright © 2010 - 2023 Xiaomi. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer