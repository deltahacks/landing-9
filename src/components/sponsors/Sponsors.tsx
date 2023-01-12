import RBC from "../../../public/RBC.png";
import Arcelor from "../../../public/ArcelorMittal.png";
import Balsamiq from "../../../public/balsamiq-logo.png";
import FDM from "../../../public/FDM.svg";
import Fireball from "../../../public/fireball_eng.png";
import Verbwire from "../../../public/Verbwire.svg";
import Stickeryou from "../../../public/SY_Logo.png";
import Siemens from "../../../public/Siemens.svg";
import DigitalOcean from "../../../public/digitalocean-logo-vector-1.png";
import Wolfram from "../../../public/WolframHackathonLogo2023-1.png";
import MacEngFull from "../../../public/mcm-eng_right-rev_png.png";

const Sponsors = () => {
  return (
    <div className="w-full sm:pb-10 font-minecraft text-white flex justify-center items-center flex-col h-fit">
      <div className="p-12">
        <div className="shadow-none outline-none transform px-12 py-2 md:px-10 md:py-4 text-center focus:bg-transparent text-xl">
          Our Sponsors
        </div>
        <div className="text-center text-2xl md:text-4xl align-middle rotate-90 transform">
          {">"}
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center lg:px-44 flex-wrap flex-col">
        <div className="flex justify-evenly items-center lg:gap-32 pb-8">
          <a className="w-2/5" href="https://www.eng.mcmaster.ca/">
            <img
              src={Fireball}
              className="w-2/3 align:center"
              alt="McMaster Fireball Logo"
            ></img>
          </a>
          <a
            className="w-2/5"
            href="https://www.eng.mcmaster.ca/about/history-and-achievements"
          >
            <img
              src={MacEngFull}
              alt="McMaster Faculty of Engineering Logo"
            ></img>
          </a>
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center lg:px-44 flex-wrap flex-col">
        <div className="w-1/5 lg:w-1/2 flex items-center justify-center">
          <a href="https://www.rbc.com/canada.html">
            <img src={RBC} className="" alt="RBC logo"></img>
          </a>
        </div>
        <div className="flex justify-evenly items-center lg:gap-32 py-8">
          <a className="w-2/5" href="https://corporate.arcelormittal.com/">
            <img src={Arcelor} alt="ArcelorMittal logo"></img>
          </a>
          <a className="w-2/5" href="https://www.siemens.com/global/en.html">
            <img src={Siemens} alt="Siemens logo"></img>
          </a>
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center lg:px-44 lg:pb-32 flex-wrap flex-col">
        <div className="w-1/5 lg:w-1/3 flex items-center justify-center pb-8"></div>
        <div className="flex justify-evenly items-center lg:gap-32 py-8">
          <a
            className="w-2/5 pb-8"
            href="https://www.fdmgroup.com/en-us/home-us/"
          >
            <img src={FDM} className="" alt="FDM logo"></img>
          </a>

          <a className="w-2/5" href="https://www.digitalocean.com/">
            <img src={DigitalOcean} alt="Digital Ocean logo"></img>
          </a>
        </div>
        <div className="flex justify-evenly items-center lg:gap-32 py-8">
          <a className="w-2/5" href="https://www.wolfram.com/language/">
            <img src={Wolfram} alt="Wolfram Language logo"></img>
          </a>
          <a className="w-2/5" href="https://www.verbwire.com/">
            <img src={Verbwire} alt="VerbWire Logo"></img>
          </a>
        </div>
        <div className="flex justify-evenly items-center lg:gap-32 py-8">
          <a className="w-2/5" href="https://www.stickeryou.com/">
            <img src={Stickeryou} alt="StickerYou Logo"></img>
          </a>
          <a className="w-2/5 pb-8" href="https://balsamiq.com/">
            <img src={Balsamiq} alt="Balsamiq logo"></img>
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Sponsors;
