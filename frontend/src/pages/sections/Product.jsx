import { Button, Card } from "antd";
import vectorIcon from "../../assets/Vector.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useGetAllProductQuery } from "../../redux/api/productApi";
import Loading from "../../components/Loading";

const Product = () => {
  const [isHovered, setIsHovered] = useState(null);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { data: products, isLoading } = useGetAllProductQuery({});

  console.log("prod", products);

  const categories = ["All Rooms", "Bedroom", "Kitchen", "Bathroom"];
  const price = [
    "$0.00-99.99",
    "$100.00-199.99",
    "$200.00-299.99",
    "$300.00-399.99",
    "400.00+",
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex gap-5 lg:px-24 px-6 my-12">
      {/* categories */}
      <div className="w-[20%]">
        <div>
          <img src={vectorIcon} alt="" />
          <span className="text-[20px] font-semibold ml-3">Filter</span>
        </div>

        {/* categories */}
        <div className="text-base font-semibold mt-8">CATEGORIES</div>
        <div className="flex flex-col gap-3 mt-3">
          {categories?.map((item, i) => (
            <div className="text-[#6C7275]" key={i}>
              {item}
            </div>
          ))}
        </div>
        <div className="text-base font-semibold mt-5">PRICE</div>
        <div className="flex flex-col gap-3 mt-3">
          {price?.map((item, i) => (
            <div className="text-[#6C7275]" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Product */}
      <div>
        <div className="w-[80%] flex justify-between mb-8 text-[20px] font-semibold">
          <div>Living Room</div>
          <div>Sort By</div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product, i) => (
            <Card
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              key={i}
              hoverable
              className="lg:w-[280px]  w-[180px] relative"
              cover={<img className=" h-[200px]" src={product.imageUrl} />}
            >
              <div className="">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <div className="text-[16px] font-semibold mb-1">
                  {product.name}
                </div>
                <div className="flex gap-3 text-[14px] font-semibold">
                  <div>{product.currentPrice}</div>
                  <div className="text-[#6C7275]  line-through">
                    {product.price}
                  </div>
                </div>
              </div>
              <div className="flex justify-between absolute inset-0 px-5">
                <div>
                  <div className="text-base font-bold uppercase">
                    {product.status}
                  </div>
                  <div className="text-white bg-[#38CB89] px-3 py-1 mt-1 w-8 rounded-md font-semibold">
                    -50%
                  </div>
                </div>

                {isHovered === i && (
                  <div className="">
                    <CiHeart className="text-[24px] bg-white p-1 shadow-lg rounded-[50%]" />
                  </div>
                )}
              </div>

              {isHovered === i && (
                <div className="flex items-center justify-center absolute inset-0 mt-10">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="h-11 text-white w-[80%] font-semibold bg-[#141718] "
                  >
                    Add to cart
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
