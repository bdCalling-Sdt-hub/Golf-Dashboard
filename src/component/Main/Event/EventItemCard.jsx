/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";

const EventItemCard = ({ item }) => {
  // Destructuring the item properties
  const {
    id,
    name,
    image,
    location,
    program,
    type,
    cost,
    deadline,
  } = item;

  return (
    <div className="w-full rounded-lg border shadow-sm bg-[#faf9f2] px-1 py-2 grid grid-cols-12 gap-2 lg:gap-5 mb-5">
      {/* Image Handling with Fallback */}
      <div className="col-span-12 md:col-span-2">
        <img
          src={image.url ? image.url : "/images/default.png"} // Display image or fallback if URL is invalid
          alt={name || "Product Image"}
          className="w-full h-26 md:h-36 lg:h-46 object-cover mt-1"
        />
      </div>
      <div className="col-span-12 md:col-span-10">
        <div className="border-b-2 border-[#f1bd19] pb-3 mb-1">
          <h1 className="text-[24px] font-outfit font-medium">{name}</h1>
          <div className="flex items-center space-x-2 font-outfit font-normal text-[16px]">
            <GrMapLocation className="text-base" />
            <span>{location}Dhaka Bangladesh</span>
          </div>
        </div>

        <div className="py-2 md:flex lg:flex items-center justify-between">
          {/* Program Section */}
          <div>
            <h1 className="lg:text-xl font-bold text-gray-800">Program</h1>
            <div className="flex items-center space-x-2">
              <p className="bg-[#f1bd19] h-2 w-2 rounded-full"></p>
              <p className="text-sm md:text-base">{program}</p>
            </div>
          </div>

          {/* Type Section */}
          <div>
            <h1 className="lg:text-xl font-bold text-gray-800">Type</h1>
            <div className="flex items-center space-x-2">
              <p className="bg-[#f1bd19] h-2 w-2 rounded-full"></p>
              <p className="text-sm md:text-base">{type}</p>
            </div>
          </div>


          {/* Cost Section */}
          <div>
            <h1 className="lg:text-xl font-bold text-gray-800">Cost</h1>
            <div className="flex items-center space-x-2">
              <p className="bg-[#f1bd19] h-2 w-2 rounded-full"></p>
              <p className="text-sm md:text-base">${cost}</p>
            </div>
          </div>

          {/* Deadline Section */}
          <div>
            <h1 className="lg:text-xl font-bold text-gray-800">Deadline</h1>
            <div className="flex items-center space-x-2">
              <p className="bg-[#f1bd19] h-2 w-2 rounded-full"></p>
              <p className="text-sm md:text-base">{deadline}</p>
            </div>
          </div>

          {/* View Details Button */}
          <div className="flex justify-center">
            <Link to={`/allevent/view-item/${id}`}>
              <button className="= text-black font-semibold bg-[#f1bd19] rounded text-sm md:text-base md:px-10 px-5 md:py-3 py-1">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
EventItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventItemCard;
