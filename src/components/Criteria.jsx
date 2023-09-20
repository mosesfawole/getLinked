import data from "../lib/data";
const Criteria = () => {
  const { criteria } = data;
  return (
    <div>
      <div className="bg-no-repeat criteria text-center relative p-8 flex flex-col justify-center items-center gap-6 md:flex-row md:justify-evenly ">
        <div className="first   ">
          <img
            // className="w-[264px] h-[257px] md:w-[490px] md:h-[477px]"
            src={criteria.image}
            alt="big idea"
          />
        </div>

        <div className="second ">
          <div className="title font-title font-bold text-xl md:text-3xl">
            <h1 className="">{criteria.title}</h1>
            <p className="text-common">tech Hackathon 1.0</p>
          </div>
          <div className="flex gap-8 flex-col text-body">
            {criteria.text.map((item, index) => (
              <div className="font-body" key={index}>
                <h1 className=" font-bold text-sm text-[#FF26B9]">
                  {" "}
                  {item.title}
                  <p className="text-xs font-normal text-white ">
                    {item.body}
                  </p>{" "}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
