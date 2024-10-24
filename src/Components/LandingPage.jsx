import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/Wet_Cat_Header.png";
import HeroImage from "../assets/heroCat.png";
import Twitter from "../assets/Wet_Cat _Twitter_Button.png";
import Buy from "../assets/Wet_Cat _ Buy_Button.png";
import Telegram from "../assets/Wet_Cat _telegram_BUtton.png";
import Tokenomics from "../assets/Wet_Cat _Tokenomics.png";
import Launchcanics from "../assets/Wet_Cat _Launchcanics.png";
import Roadmap from "../assets/RoadMap_Rocket.png";
import Million from "../assets/690Million.png";
import Immutable from "../assets/immutable.png";
import Deployed from "../assets/DeployedBase.png";
import Locked from "../assets/Locked.png";
import Stealth from "../assets/stealth-launch.png";
import Taxes from "../assets/Taxes.png";
import Footer from "../assets/Wet_Cat_Footer.png";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-[10px] relative">
      <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-full object-cover"
          data-aos="fade-up"
        />
      </div>
      <div className="text-[18px] lg:text-[50px] font-[400] text-[#2F160B] flex items-center justify-center gap-[20px] lg:gap-[30px] my-[33px]">
        <a href="#about">
          <p className="cursor-pointer hover:animate-pulse" data-aos="fade-up">
            About
          </p>
        </a>
        <a href="#tokenomics" className="cursor-pointer">
          <p className="cursor-pointer hover:animate-pulse" data-aos="fade-up">
            Tokenomics
          </p>
        </a>

        <a href="#buy">
          <p className="cursor-pointer hover:animate-pulse" data-aos="fade-up">
            Buy $WET
          </p>
        </a>
      </div>
      <div className="" id="about">
        <p
          className="text-center font-[400] text-[28px] lg:text-[85px] text-[#2F160B]"
          data-aos="fade-up"
        >
          This is VERY WET CAT a.k.a $WET
        </p>
        <div className="max-w-[550px] mx-auto">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full object-cover"
            data-aos="fade-up"
          />
        </div>
        <p
          className="text-center font-[400] text-[26px] lg:text-[75px] text-[#2F160B]"
          data-aos="fade-up"
        >
          Read whatever meaning <br /> you want to read into it... Either way,
          <br />
          everyone loves a VERYWETCAT
        </p>
      </div>

      <div
        className="py-[38px] flex items-center justify-between gap-[20px]"
        id="buy"
        data-aos="fade-up"
      >
        <div className="max-w-[185px]">
          <img src={Twitter} alt="Twitter button" className="w-full" />
        </div>
        <div className="max-w-[553px] animate-pulse">
          <img src={Buy} alt="Buy button" className="w-full" />
        </div>
        <div className="max-w-[185px]">
          <img src={Telegram} alt="Telegram button" className="w-full" />
        </div>
      </div>

      <div
        className="max-w-[1023px] md:max-w-full mx-auto mt-[50px] lg:mt-[200px] animate-bounce"
        data-aos="fade-up"
      >
        <img src={Roadmap} alt="Roadmap" className="w-full" />
      </div>

      <div className="my-[50px] lg:my-[132px]" id="tokenomics">
        <div className="flex items-center justify-center" data-aos="fade-up">
          <img src={Tokenomics} alt="Tokenomics" />
        </div>
        <div className="grid grid-cols-2 gap-[10px] mt-[40px] lg:mt-[70px]">
          <img src={Million} alt="Million" data-aos="fade-up" />
          <img src={Immutable} alt="Immutable" data-aos="fade-up" />
          <img src={Taxes} alt="Taxes" data-aos="fade-up" />
          <img src={Locked} alt="Locked" data-aos="fade-up" />
          <img src={Stealth} alt="Stealth" data-aos="fade-up" />
          <img src={Deployed} alt="Deployed" data-aos="fade-up" />
        </div>
      </div>

      <div id="launchcanics" className=" hidden">
        <div className="flex items-center justify-center" data-aos="fade-up">
          <img src={Launchcanics} alt="Launchcanics" />
        </div>
        <div className="text-[#2F160B] text-center text-[20px] lg:text-[60px] font-[400] flex flex-col items-center justify-center mt-[20px] lg:mt-[90px]">
          <li className="" data-aos="fade-up">
            Max Supply: 690,000,000
          </li>
          <li data-aos="fade-up">Total Supply: 690,000,000</li>
          <li data-aos="fade-up">Circulating Supply at Launch: 690,000,000</li>
          <li data-aos="fade-up">Contract Revoked/Renounced</li>
          <li data-aos="fade-up">Liquidity Locked for 69 Years</li>
          <li data-aos="fade-up">
            Anti-Whale:{"<"} 1% first 6 days post launch
          </li>
          <li data-aos="fade-up">
            Auto-Burn Mechanism (ABM): Burn Rate - 69% Every 69 Days
          </li>
        </div>
      </div>

      <div>
        <div
          className="max-w-[640px] mx-auto flex items-center justify-center my-[40px] hover:animate-pulse cursor-pointer "
          data-aos="fade-up"
        >
          <img src={Buy} alt="Buy button" className="w-[194px] md:w-full" />
        </div>

        <div data-aos="fade-up" className=" mb-[40px] lg:mb-0 ">
          <img
            src={Footer}
            alt="Footer"
            className="w-full flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
