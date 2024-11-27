/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineSearch } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { Form, Pagination } from "antd";
import EventItemCard from "./EventItemCard";
import CustomInput from "../../../utils/CustomInput";

const { Item } = Form;

const EventItems = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("search box");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const options = ["Today", "Upcoming", "History", "All Events"];

  const items = [
    { id: 1, name: "Piano Star Event", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Piano", type: "Onsite Event", address: "Dhaka", cost: 100, deadline: "2024-11-20" },
    { id: 2, name: "Guitar Concert", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Guitar", type: "Online Event", address: "Chittagong", cost: 80, deadline: "2024-12-01" },
    { id: 3, name: "Drum Session", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Drums", type: "Onsite Event", address: "Sylhet", cost: 90, deadline: "2024-10-01" },
    { id: 4, name: "Flute Workshop", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Flute", type: "Onsite Event", address: "Khulna", cost: 75, deadline: "2024-12-15" },
    { id: 5, name: "Singing Competition", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Singing", type: "Online Event", address: "Rajshahi", cost: 50, deadline: "2024-11-22" },
    { id: 6, name: "Violin Recital", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Violin", type: "Onsite Event", address: "Barisal", cost: 120, deadline: "2025-01-05" },
    { id: 7, name: "Piano Masterclass", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Piano", type: "Onsite Event", address: "Mymensingh", cost: 110, deadline: "2025-01-10" },
    { id: 8, name: "Jazz Performance", image: { url: "https://i.ibb.co/gzTFS5h/Rectangle-34624152.png" }, program: "Jazz", type: "Online Event", address: "Dhaka", cost: 100, deadline: "2024-11-19" },
  ];

  const getCurrentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  const filterByOption = (item) => {
    const today = getCurrentDate();
    switch (selectedOption) {
      case "Today":
        return item.deadline === today;
      case "Upcoming":
        return new Date(item.deadline) > new Date(today);
      case "History":
        return new Date(item.deadline) < new Date(today);
      case "All Events":
        return true;
      default:
        return true;
    }
  };

  const filteredItems = items
    .filter(filterByOption)
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <>
      <div className="w-full flex justify-between items-center py-4">
        <h1 className="text-2xl flex items-center">
          <FaAngleLeft /> All Events
        </h1>
        <div className="relative inline-block">
          <Form className="md:flex md:space-x-4">
            <Item name="username">
              <CustomInput
                className="rounded-lg w-[65%] md:w-full py-2"
                placeholder="Search Name"
                icon={MdOutlineSearch}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Item>
            <div>
              <button
                className="px-4 py-2 border border-black flex justify-center items-center rounded-lg bg-white text-[16px]"
                onClick={toggleDropdown}
              >
                {selectedOption}
                {isDropdownOpen ? (
                  <MdKeyboardArrowUp className="ml-2" />
                ) : (
                  <MdKeyboardArrowDown className="ml-2" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form>
        </div>
      </div>
      <div className="w-full">
        {filteredItems.slice((currentPage - 1) * 4, currentPage * 4).map((item) => (
          <EventItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center py-4">
        <Pagination
          current={currentPage}
          total={filteredItems.length}
          pageSize={4}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default EventItems;
