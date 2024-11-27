
import { FaAngleLeft, FaClipboardList } from "react-icons/fa";
import {Link } from "react-router-dom";
import eventImage from "../../../assets/auth/Rectangle.png";
import Flogo from "../../../assets/auth/Flogoo.png";
import { Form, Select } from "antd";
import AppliedUser from "./AppliedUser";
import ContributionUser from "./ContributionUser";


const EventViewItem = () => {
 return (
      <section className="pb-5">
      <div className="flex justify-between items-center p-5 md:mr-36">
          <Link to={"/allevent"}>
           <h1 className="text-xl font-semibold flex items-center"><FaAngleLeft /> Event Details</h1>
          </Link>
          <div className="flex space-x-4">
              <button className="  flex justify-center items-center bg-red-500 border border-red-500   px-5 py-2 rounded-md">
                  Disable
              </button>
              <button className="  flex justify-center items-center border border-[#f1bd19]   px-5 py-2 rounded-md">
                 Edit
              </button>
              <button className=" flex justify-center items-center bg-[#f1bd19] text-white px-5 py-2 rounded-md">
                 Delete
              </button>
          </div>
      </div>

      <div className="md:w-[80%] mx-auto">
         {/*  image section  */}
         <img
            src={eventImage}
            alt="eventImage"
            className="w-full md:h-[428px] h-[228px] mt-8  rounded-[16px] mx-auto"
         />

         {/* program section  */}
         <div className="md:w-[60%] mx-auto py-3">
         <div className="flex items-center justify-between mx-auto p-3 border-b-2 border-[#85594B]">
               <div className="pl-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Program</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">Piano</p>
               </div>
               <div className="md:w-[25%]">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Competition Level</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">Primary Round</p>
               </div>
            </div>
         <div className="flex items-center justify-between mx-auto p-3 border-b-2 border-[#85594B]">
               <div className="pl-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Type</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">Onsite Event</p>
               </div>
               <div className="md:w-[25%]">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Registration Open</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">1-1-2025       7.00 AM </p>
               </div>
            </div>
         <div className="flex items-center justify-between mx-auto p-3 border-b-2 border-[#85594B]">
               <div className="md:pl-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Location</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">Dhaka Bangladesh</p>
               </div>
               <div className="md:w-[25%]">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Repeat Function</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">Never</p>
               </div>
            </div>
         <div className="flex items-center justify-between mx-auto p-3 border-b-2 border-[#85594B]">
               <div className="pl-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Deadline</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">1-5-2025    7.00 PM</p>
               </div>
               <div className="md:w-[25%]">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Cost</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">100</p>
               </div>
            </div>
         <div className="flex items-center justify-between mx-auto p-3 border-b-2 border-[#85594B]">
               <div className="pl-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Final Deadline</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">1-5-2025</p>
               </div>
               <div className="md:w-[25%]">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="text-xl">Late fee</h1>
                  </div>
                  <p className="text-sm md:text-base ml-5">100</p>
               </div>
            </div>
         </div>

         {/* Description Section */}
         <div className="md:w-[60%] mx-auto py-3">
         <h1 className="text-xl pb-1 font-semibold">Description</h1>
         <p >Lorem ipsum dolor sit amet consectetur. Ultrices id feugiat venenatis habitant mattis viverra elementum purus volutpat. Lacus eu molestie pulvinar rhoncus integer proin elementum. Pretium sit fringilla massa tristique aenean commodo leo. Aliquet viverra amet sit porta elementum et pellentesque posuere. Ullamcorper viverra tortor lobortis viverra auctor egestas. Nulla condimentum ac metus quam turpis gravida ut velit. Porta justo lacus consequat sed platea. Ut dui massa quam elit faucibus consectetur sapien aenean auctor. Felis ipsum amet justo in. Netus amet in egestas sed auctor lorem. Justo ullamcorper velit habitasse lorem eu arcu. Non enim a elit urna eget nibh quisque donec condimentum. Elit ut pellentesque neque in quis at viverra. Nisl etiam tristique odio eget convallis.</p>
         </div>

         {/* Note Section */}
         <div className="md:w-[60%] mx-auto py-3 border-b-2 border-[#85594B]">
         <h1 className="text-xl pb-1 font-semibold">Note</h1>
         <p>Lorem ipsum dolor sit amet consectetur. Ultrices id feugiat venenatis habitant mattis viverra elementum purus volutpat. Lacus eu molestie pulvinar rhoncus integer proin elementum. Pretium sit fringilla massa tristique aenean commodo leo. Aliquet viverra amet sit porta elementum et pellentesque posuere.</p>
         </div>

         {/* Group/Category */}
         <div className="md:w-[60%] mx-auto py-3">
         <Form  layout="vertical" className="mt-5">
         <Form.Item
            label="Group/Category"
            name="groupCategory"
            className="w-full"
         >
            <Select size="large" placeholder="type Category name" className="border border-black rounded-md">
               <Select.Option value="g">6 Year - 10 Year</Select.Option>
               <Select.Option value="mg">11 Year - 16 Year</Select.Option>
               <Select.Option value="oz">17 Year+</Select.Option>
               </Select>
         </Form.Item>
         </Form>
         </div>

         {/* Preliminary section */}
         <div className="md:w-[60%] mx-auto py-3 border-b-2 border-[#85594B] pt-5">
            <div className="flex items-center space-x-2 ">
               <FaClipboardList />
               <h1 className="text-xl font-semibold">Preliminary</h1>
            </div>
            <div className="">
               <div className="flex items-center space-x-5 md:space-x-60 mx-auto py-2">
                     <div className="flex items-center  space-x-2 ">
                        <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                        <h1 className="">Type</h1>
                     </div>
                     
                     <div className="">
                        <div className="flex items-center  space-x-2 ">
                           <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                           <h1 className="">Registration Open</h1>
                        </div>
                     </div>
               </div>
               <div className="flex items-center  space-x-2  ">
                  <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                  <h1 className="">Type:  Onsite Event</h1>
               </div>
               <div className="md:flex items-start space-x-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Description:</h1>
                  </div>
                  <h1 className="pb-2 ">Lorem ipsum dolor sit amet consectetur. Ultrices id feugiat venenatis habitant mattis viverra elementum purus volutpat. Lacus eu molestie pulvinar rhoncus integer proin elementum. Pretium sit fringilla massa tristique aenean commodo leo. Aliquet viverra amet sit porta elementum et pellentesque posuere.</h1>
               </div>
            </div> 
         </div>

         {/* Semi-Final section */}
         <div className="md:w-[60%] mx-auto py-3 border-b-2 border-[#85594B]  pt-5">
            <div className="flex items-center space-x-2 ">
               <FaClipboardList />
               <h1 className="text-xl font-semibold">Semi-Final</h1>
            </div>
            <div className="">
               <div className="flex items-center space-x-5 md:space-x-60 mx-auto py-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Deadline: 1-1-2024</h1>
                  </div>
                     
                     
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Cost :  $100</h1>
                  </div>
               </div>
               <div className="flex items-center  space-x-2 ">
                  <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                  <h1 className="">Type:  Onsite Event</h1>
               </div>
               <div className="md:flex items-start space-x-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Description:</h1>
                  </div>
                  <h1 className="pb-2 ">Lorem ipsum dolor sit amet consectetur. Ultrices id feugiat venenatis habitant mattis viverra elementum purus volutpat. Lacus eu molestie pulvinar rhoncus integer proin elementum. Pretium sit fringilla massa tristique aenean commodo leo. Aliquet viverra amet sit porta elementum et pellentesque posuere.</h1>
               </div>
            </div> 
         </div>

         {/* Final section */}
         <div className="md:w-[60%] mx-auto py-3  pt-5">
            <div className="flex items-center space-x-2">
               <FaClipboardList />
               <h1 className="text-xl font-semibold">Final</h1>
            </div>
            <div className="">
               <div className="flex items-center space-x-5 md:space-x-60 mx-auto py-2">
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Deadline: 1-1-2024</h1>
                  </div>
                  <div className="flex items-center  space-x-2 ">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Cost :  $100</h1>
                  </div>
               </div>
               <div className="flex items-center  space-x-2">
                  <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                  <h1 className="">Type:  Onsite Event</h1>
               </div>
               <div className="md:flex items-start space-x-2">
                  <div className="flex items-center  space-x-2">
                     <p className="bg-[#f1bd19] h-3 w-3 rounded-full"></p>
                     <h1 className="">Description:</h1>
                  </div>
                  <h1 className="pb-2 ">Lorem ipsum dolor sit amet consectetur. Ultrices id feugiat venenatis habitant mattis viverra elementum purus volutpat. Lacus eu molestie pulvinar rhoncus integer proin elementum. Pretium sit fringilla massa tristique aenean commodo leo. Aliquet viverra amet sit porta elementum et pellentesque posuere.</h1>
               </div>
            </div> 
         </div>
         {/* Footer */}
         <div className="md:w-[60%] mx-auto py-3  pt-5">
            <div className="flex items-center space-x-16 md:space-x-40">
               <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-semibold">Created By</h1>
                  <img
                  src={Flogo}
                  alt="eventImage"
                  className="w-[48px] h-[48px] rounded-full"
               />
               </div>
               <div>
               <h1 className="text-xl font-semibold">Created date</h1>
               <h1>12-12-2024</h1>
               </div>
            </div>
         </div>

         {/* Applied User */}
         <div className="w-full mx-auto py-3  pt-5">
            <h1 className="text-xl font-semibold pb-3">Applied User</h1>
            <AppliedUser />
         </div>

         {/* Contribution User */}
         <div className="w-full mx-auto py-3  pt-5">
            <h1 className="text-xl font-semibold pb-3">Contribution User</h1>
            <ContributionUser />
         </div>
      </div>


      
   </section>
 );
}; 

export default EventViewItem;