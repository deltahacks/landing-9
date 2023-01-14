import logoImage from "../../public/logo.svg";
import mlh_logo from "../../public/mlh-logo.svg";
import clouds from "../../public/Clouds.png";

const Intro = () => {
  return (
    <>
      <div className="relative flex items-center justify-center flex-col font-minecraft px-14 pt-32 md:pt-0 min-h-fit sm:min-h-screen">
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={clouds} alt="clouds" />
        </div>
        <div className="z-10">
          <img src={logoImage} className="w-full h-full z-10" alt="logo" />
          {/*<div className="flex justify-center align-center md:flex-row md:justify-end md:items-center p-1">*/}

          {/*</div>*/}
        </div>
        <div className="text-4xl font-bold mb-5"></div>
        <div className="flex flex-col items-center justify-center font-normal text-lg leading-9 tracking-wider z-10">
          <p className=" text-center  text-white ">
            <span className="text-shadow">JANUARY 13-15, 2023</span>
          </p>
          <p className=" text-center  text-white">
            <span className="text-shadow">IN-PERSON</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://portal.deltahacks.com/"
            className="text-white text-center text-xl md:text-3xl tracking-wider md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]"
          >
            <span className="flex flex-col items-center mt-10 md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]">
              <span className="flex items-center justify-center mBG mt-3 absolute z-50 md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]">
                APPLY NOW
              </span>
            </span>
          </a>
          <a
            href="https://portal.deltahacks.com/schedule"
            className="text-white text-center text-xl md:text-3xl tracking-wider md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]"
          >
            <span className="flex flex-col items-center mt-10 md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]">
              <span className="flex items-center justify-center mBG mt-3 absolute z-50 md:w-[373px!important] md:h-[76px!important] w-[238px!important] h-[44px!important]">
                SCHEDULE
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
