/* eslint-disable no-unused-vars */
import { FaAngleLeft } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


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
        <h1 className="text-2xl  flex items-center"><FaAngleLeft /> Subscription</h1>
        <Link to={`/subscription/add-box`}>
          <button className="px-2  md:px-5 py-3 bg-[#f1bd19] text-white flex justify-center items-center gap-1 rounded text-sm  md:mb-0">
            Add Subscription
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {
          [...Array(3)].map((_, index) => (
            <div key={index} className='bg-[#f1bf191f]  pb-5 rounded-lg '>
              <h2 className='text-4xl font-semibold  text-center border-b-2 py-10 border-[#ffffff50]'>Starter {++index}</h2>
              <div className='my-6 flex gap-3 items-center pl-10'>
                <h2 className='text-6xl font-bold'>49.99</h2>
                <h3 className='text-xl '> $ <br />Per Month</h3>
              </div>
              <ul className='space-y-3 text-sm my-10 pl-10'>
                <li className='flex items-center gap-2'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Unlimited product updates
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Custom Analytics
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  24/7 Support
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Free hosting
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Free hosting
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Free hosting
                </li>
                <li className='flex items-center gap-2 my-5'>
                  <FaCircleCheck className='text-[#f1bd19] text-2xl' />
                  Free hosting
                </li>
              </ul>
              <div className='grid grid-cols-2 gap-3 px-5'>
                <Link to={`/subscription/edit-box/:id`} className='w-full bg-[#f1bd19] text-black  block text-center bg-gradientBtn-to-top text-secondary py-3 px-6 rounded-lg hover:shadow-lg'>
                  Edit
                </Link>
                <button className='w-full py-3 px-6 border border-[#f1bd19] rounded-lg'>
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  );
};

export default Categories;
