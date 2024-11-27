/* eslint-disable no-unused-vars */
import { FaAngleLeft  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../../redux/features/category/categoryApi";


import { Spin } from "antd";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  // const {
  //   data: boxesData
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetAllCategoriesQuery();
  const data = [
    {
        name: "Concert",
        image: { url: "https://i.ibb.co.com/x5VFyb0/Screenshot-2024-11-20-135157.png" }
    },
    {
        name: "Sports",
        image: { url: "https://i.ibb.co.com/x5VFyb0/Screenshot-2024-11-20-135157.png" }
    },
    {
        name: "Show",
        image: { url: "https://i.ibb.co.com/x5VFyb0/Screenshot-2024-11-20-135157.png" }
    },
    {
        name: "Olympic game",
        image: { url: "https://i.ibb.co.com/x5VFyb0/Screenshot-2024-11-20-135157.png" }
    }
];

  // let content = null;
  // if (isLoading) {
  //   content = (
  //     <div className="w-full flex justify-center py-10">
  //       <Spin />
  //     </div>
  //   );
  // } else if (isError && error) {
  //   content = (
  //     <h3 className="font-semibold text-rose-500 text-center py-5">
  //       Something went wrong
  //     </h3>
  //   );
  // } else if (!data?.length) {
  //   content = (
  //     <div className="w-full h-full text-center py-5 flex flex-col justify-center items-center">
  //       <img
  //         src="/src/assets/nodata/not-data.svg"
  //         alt="No results"
  //         className="w-[256px] mx-auto h-[256px] mb-4"
  //       />
  //       <h2 className="text-xl font-bold mb-2">No Bud Box Found</h2>
  //     </div>
  //   );
  // } else {
  //   content = (
  //     <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-5">
  //       {data?.map((item, index) => {
  //         return <CategoriesCard key={index + 1} item={item} />;
  //       })}
  //     </div>
  //   );
  // }
  return (
    <section>
      <div className="w-full md:flex justify-between items-center py-6">
        <h1 className="text-2xl  flex items-center"><FaAngleLeft /> Categories</h1>
          <Link to={`/categories/add-box`}>
            <button className="px-2  md:px-5 py-3 bg-[#f1bd19] text-white flex justify-center items-center gap-1 rounded text-sm  md:mb-0">
              Category & Program
            </button>
          </Link>
      </div>
      {/* {content} */}
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {data?.map((item, index) => {
          return <CategoriesCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
