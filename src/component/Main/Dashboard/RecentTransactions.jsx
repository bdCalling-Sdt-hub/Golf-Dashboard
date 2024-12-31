import { ConfigProvider, Space, Table, DatePicker, Input } from "antd";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [pageSize, setPageSize] = useState(5); // Items per page

  const data = [
    {
      id: 1,
      accountID: 2010,
      image: { url: "https://randomuser.me/api/portraits/men/1.jpg" },
      transactionId: "TRX001",
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      email: "doe@example.com",
      phone: "123-456-7890",
      location: "US , New-wark",
      date: "2023-11-01",
    },
    {
      id: 2,
      accountID: 2010,
      image: { url: "https://randomuser.me/api/portraits/women/1.jpg" },
      transactionId: "TRX002",
      firstName: "Jane",
      lastName: "Smith",
      gender: "Female",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      location: "US , New-wark",
      date: "2023-10-25",
    },
    {
      id: 3,
      accountID: 2020,
      image: { url: "https://randomuser.me/api/portraits/men/2.jpg" },
      transactionId: "TRX003",
      firstName: "Mike",
      lastName: "Brown",
      gender: "Male",
      email: "mikeb@example.com",
      phone: "555-123-4567",
      location: "US , New-wark",
      date: "2023-10-20",
    },
    {
      id: 4,
      accountID: 2021,
      image: { url: "https://randomuser.me/api/portraits/women/2.jpg" },
      transactionId: "TRX004",
      firstName: "Emily",
      lastName: "Davis",
      gender: "Female",
      email: "emilyd@example.com",
      phone: "444-555-6666",
      location: "US , New-wark",
      date: "2023-11-05",
    },
    {
      id: 5,
      accountID: 2022,
      image: { url: "https://randomuser.me/api/portraits/men/3.jpg" },
      transactionId: "TRX005",
      firstName: "Chris",
      lastName: "Wilson",
      gender: "Male",
      email: "chrisw@example.com",
      phone: "111-222-3333",
      location: "US , New-wark",
      date: "2023-11-10",
    },
  ];

  const handleDelete = (record) => {
    console.log("Deleting record:", record);
    // Add delete logic here (e.g., update state or call API)
  };

  const columns = [
    {
      title: "#SL",
      dataIndex: "si",
      key: "si",
      align: "center",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle" className="flex flex-row justify-center">
          <button
            onClick={() => handleDelete(record)}
            style={{
              fontSize: "14px",
              color: "#fff",
              background: "#e74c3c",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <Link to={`/user-request/${record.key}`}
            style={{
              fontSize: "14px",
              color: "#fff",
              background: "#62d49f",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            Approved
          </Link>
        </Space>
      ),
    },
  ];

  const filteredData = data.filter((user) => {
    const matchesText =
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchText.toLowerCase());
    const matchesDate = selectedDate
      ? user.date === selectedDate.format("YYYY-MM-DD")
      : true;

    return matchesText && matchesDate;
  });

  const dataSource = filteredData.map((user, index) => ({
    key: user.id,
    si: index + 1,
    userName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    location: user.location,
    joinDate: user.date,
  }));

  return (
    <div className="w-full col-span-full md:col-span-6 bg-white rounded-lg">
      <div className="flex items-center justify-between flex-wrap my-10">
        <h1 className="text-2xl  flex items-center ">
          <FaAngleLeft /> Super User Request
        </h1>
        {/* Search Filters */}
        <div className="flex flex-wrap items-center gap-5">
          <Link className="px-4 py-2 bg-[#f1bd19] text-black rounded" to={"/user-request/user-list"}>All Super User </Link>
          <DatePicker
            onChange={(date) => setSelectedDate(date)}
            placeholder="Select Join Date"
            className="w-64 border rounded-md py-2 px-4"
          />
          <Input
            placeholder="Search by User Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-64 border rounded-md py-2 px-4"
          />
        </div>
      </div>
      {/* Table */}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#f1bd19",
              headerColor: "#000",
              headerBorderRadius: 5,
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            position: ["bottomRight"], // Position pagination on the bottom-right
            current: currentPage,
            pageSize: pageSize,
            total: filteredData.length,
            onChange: (page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            },
          }}
          scroll={{ x: 500 }}
          className="text-center"
        />
      </ConfigProvider>
    </div>
  );
};

export default RecentTransactions;
