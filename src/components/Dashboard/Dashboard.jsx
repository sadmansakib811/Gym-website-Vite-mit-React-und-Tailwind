import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const data = [
        { id: 1, year: 2020, basic: 345, premium: 675, platinum: 823 },
        { id: 2, year: 2021, basic: 712, premium: 876, platinum: 678 },
        { id: 3, year: 2022, basic: 123, premium: 478, platinum: 765 },
        { id: 4, year: 2023, basic: 234, premium: 567, platinum: 899 },
       
      ];
    return (
        <div className=' mt-20 ml-96 mb-10 justify-center items-center'>
           <div>
           <LineChart
            width={800}
            height={500}
            data={data}
            
            >
                <XAxis dataKey="year" />
                <YAxis dataKey=""></YAxis>
                
                <Tooltip />
                <Legend />
                <Line dataKey='basic' stroke="blue"></Line>
                <Line dataKey='premium' stroke="green"></Line>
                <Line dataKey='platinum'stroke='red'></Line>
            </LineChart>
           </div>
            
        </div>
    );
};

export default Dashboard;