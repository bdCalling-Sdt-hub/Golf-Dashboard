import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Modal } from "antd";

const Earnings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const data = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", location: "New York, USA", date: "2024-01-01" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", location: "London, UK", date: "2024-02-01" },
    { id: 3, name: "Mike Brown", email: "mike.brown@example.com", location: "Paris, France", date: "2024-03-01" },
    { id: 4, name: "Alice Johnson", email: "alice.johnson@example.com", location: "Sydney, Australia", date: "2024-04-01" },
  ];

  const showModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="w-full p-5">
      <div className="w-full md:flex justify-between items-center py-6">
        <h1 className="text-2xl flex items-center"><FaAngleLeft /> Earnings</h1>
        <div className="flex items-center justify-end gap-5 flex-wrap">
          <button className="px-2 md:px-5 py-3 bg-[#f1bd19] text-white flex justify-center items-center gap-1 rounded text-sm md:mb-0">
            <FaArrowRightArrowLeft /> Today’s Earning <span>$100</span>
          </button>
          <button className="px-2 md:px-5 py-3 bg-[#f1bd19] text-white flex justify-center items-center gap-1 rounded text-sm md:mb-0">
            <FaArrowRightArrowLeft /> All Earning <span>$100</span>
          </button>
        </div>
      </div>

      <table className="w-full border-collapse border-[#f1bd19]">
        <thead className="bg-[#f1bd19]">
          <tr>
            <th className="border-gray-300 px-4 py-2 text-left">#SL</th>
            <th className="border-gray-300 px-4 py-2 text-left">User Name</th>
            <th className="border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border-gray-300 px-4 py-2 text-left">Location</th>
            <th className="border-gray-300 px-4 py-2 text-left">Join Date</th>
            <th className="border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border-gray-300 px-4 py-2">{row.name}</td>
              <td className="border-gray-300 px-4 py-2">{row.email}</td>
              <td className="border-gray-300 px-4 py-2">{row.location}</td>
              <td className="border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  onClick={() => showModal(row)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal 
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedTransaction && (
          <div className="text-black">
            <h2 className="text-2xl font-semibold mb-4 text-center">Transaction Details</h2>
            <p className="flex items-center justify-between py-3 border-b"><strong>Transaction ID:</strong> #12345678</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>User Name:</strong> {selectedTransaction.name}</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Address:</strong> Dhaka Bangladesh</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Date:</strong> {selectedTransaction.date}</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>A/C Number:</strong> **** **** **** *545</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Withdraw Amount:</strong> $2.99</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Subscription Type:</strong> Basic Subscription</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Class:</strong> A</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Subscription:</strong> Gold</p>
            <p className="flex items-center justify-between py-3 border-b"><strong>Additional Information:</strong> P550</p>
            <div className="flex gap-3 mt-4">
              <button className="bg-[#19f148] w-[50%] px-4 py-2 rounded text-black font-semibold">Download</button>
              <button className="bg-[#f1bd19] w-[50%] px-4 py-2 rounded text-black font-semibold">Print</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Earnings;
