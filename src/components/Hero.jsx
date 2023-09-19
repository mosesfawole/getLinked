import data from "../lib/data";
import Button from "./Button";

const Hero = () => {
  const { hero } = data;
  return (
    <div className="hero flex flex-col gap-6 p-4">
      <div className="top flex items-center justify-center md:justify-end md:px-11 ">
        <p className="font-body font-bold text-[16px] leading-5 md:text-4xl italic  ">
          Igniting a Revolution in HR Innovation
        </p>
        <span></span>
      </div>
      <div className="">
        <div className=" flex  flex-col justify-center items-center md:flex-row">
          <div className="wrap">
            <div className="title font-title">
              <div className="absolute left-0 top-0">
                <img
                  className="w-full h-full "
                  src="/src/assets/Purple-Lens-Flare-PNG.png"
                  alt="purple"
                />
              </div>
              <div className="relative">
                <span>
                  <img
                    width={18}
                    height={26}
                    src={hero.creative}
                    alt="creative"
                  />
                </span>
                <p className=" text-3xl font-bold md:">{hero.titleTop}</p>
                <p className="flex gap-1 text-3xl font-bold md:">
                  {`${hero.titleDown}`}{" "}
                  <span className="text-common"> 1.0</span>{" "}
                  <span className="flex">
                    <img width={32.8} src={hero.chain} alt="chain" />{" "}
                    <img width={22.12} src={hero.fire} alt="spark" />
                  </span>{" "}
                </p>{" "}
              </div>
            </div>
            <div className="text flex mt-2 mb-4 ">
              <p className="font-body px-10 font-regular text-[13px] text-start">
                {hero.text}
              </p>
            </div>
            <div className="button mt-2 mb-4">
              <Button />
            </div>
            <div className="countdown flex gap-4 ">
              <p className="font-unica text-5xl">
                00<span className="font-body text-xs">H</span>
              </p>
              <p className="font-unica text-5xl">
                00<span className="font-body text-xs">M</span>
              </p>
              <p className="font-unica text-5xl">
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
