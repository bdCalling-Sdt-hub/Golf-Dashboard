import { PieChart, Pie, Cell } from 'recharts';
import { Select } from 'antd';
import { useState } from 'react';

const sampleData = {
  august: { totalUsers: 15457, totalEmployees: 9457, month: 'August' },
  september: { totalUsers: 10457, totalEmployees: 11457,  month: 'September' },
};

const Piechart = () => {
  const [month, setMonth] = useState('august');
  const userRatio = sampleData[month]; // Using sample data here

  const data = [
    { name: 'Total Users', value: userRatio.totalUsers },
    { name: 'Total Employees', value: userRatio.totalEmployees },
  ];

  const COLORS = ['#f1bd19', '#fef8e8',];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const handleChange = (value) => {
    setMonth(value);
  };

  return (
    <div className='w-full col-span-full md:col-span-2 bg-white rounded-lg  border border-[#f1bd19]'>
      <div className='flex justify-between items-center  border-b border-gray-300 py-3'>
        <div className='pl-3'>
          <h1 className='font-medium text-6'>User Ratio  {userRatio.month}</h1>
        </div>
        <div className='pr-3'>
          <Select
            defaultValue={month} className='border-none'
            style={{ width: 100 }}
            onChange={handleChange}
            options={[
              { value: 'august', label: 'August' },
              { value: 'september', label: 'September' },
            ]}
          />
        </div>
      </div>  
      <div className='flex justify-around items-center gap-3 mt-3 '>
        <div>
          <PieChart  width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill=""
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div>
          <div >
           <div className='flex items-center'>
           <div className='bg-[#f1bd19] w-3 h-3 mr-1'></div>
           <p className='text-[10px] font-normal'>Total Users for {userRatio.month}</p>
           </div>
            <h1 className='text-[18px] font-semibold'>{userRatio.totalUsers}k</h1>
          </div>
          <div className='mt-[23px]'>
          <div className='flex items-center'>
          <div className='bg-[#C8D7DE] w-3 h-3  mr-1'></div>
            <p className='text-[10px] font-normal'>Total Employees for {userRatio.month}</p>
          </div>
            <h1 className='text-[18px] font-semibold'>{userRatio.totalEmployees}k</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;