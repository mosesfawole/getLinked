import data from "../lib/data";
import Button from "./Button";

const Hero = () => {
  const { hero } = data;
  return (
    <div className="hero flex flex-col gap-6 p-4 md:px-14">
      <div className="top flex items-center justify-center md:justify-end md:px-11 ">
        <p className="font-body font-bold text-[16px] leading-5 md:text-4xl italic  ">
          Igniting a Revolution in HR Innovation
        </p>
        <span></span>
      </div>
      <div className="">
        <div className=" flex  flex-col justify-center items-center md:flex-row">
          <div className="wrap flex flex-col justify-center items-center md:block">
            <div className="title font-title">
              <div className="absolute left-0 top-0">
                <img
                  className="w-full h-full "
                  src="/src/assets/Purple-Lens-Flare-PNG.png"
                  alt="purple"
                />
              </div>
              <div className="relative md:flex flex-col ">
                <span className="flex justify-end">
                  <img
                    className="md:w-[53px] h-[73px]"
                    width={18}
                    height={26}
                    src={hero.creative}
                    alt="creative"
                  />
                </span>
                <p className=" text-3xl font-bold md:text-[80px]  md:mb-16">
                  {hero.titleTop}
                </p>
                <p className="flex gap-1 text-3xl font-bold md:text-[80px]  md:mb-8">
                  {`${hero.titleDown}`}{" "}
                  <span className="text-common"> 1.0</span>{" "}
                  <span className="flex">
                    <img
                      className="md:w-[86px]"
                      width={32.8}
                      src={hero.chain}
                      alt="chain"
                    />{" "}
                    <img
                      className="md:w-[56px]"
                      width={22.12}
                      src={hero.fire}
                      alt="spark"
                    />
                  </span>{" "}
                </p>{" "}
              </div>
            </div>
            <div className="text flex mt-2 mb-4 ">
              <p className="font-body px-10 font-regular text-[13px] md:text-xl text-start md:px-0">
                {hero.text}
              </p>
            </div>
            <div className="button mt-2 mb-4 md:mb-14">
              <Button />
            </div>
            <div className="countdown flex gap-4 ">
              <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
                00<span className="font-body text-xs">H</span>
              </p>
              <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
                00<span className="font-body text-xs">M</span>
              </p>
              <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
                00<span className="font-body text-xs">S</span>
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="behind-image absolute z-10">
              <img
                className="bg-cover bg-center"
                src="/src/assets/Image 1.svg"
                alt="image 1"
              />
            </div>
            <div className="bannerImage  relative z-0">
              <img
                className=""
                src="/src/assets/man-wearing-smart-glasses-touching-virtual-screen 1.png"
                alt="banner image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
