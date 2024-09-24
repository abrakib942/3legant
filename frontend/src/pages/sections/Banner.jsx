import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        textAlign: "center",
      }}
      className="flex flex-col justify-center gap-5"
    >
      <div className="text-[54px] font-semibold">Shop Page</div>
      <div className="text-[20px]">
        Let’s design the place you always imagined.
      </div>
    </div>
  );
};

export default Banner;
