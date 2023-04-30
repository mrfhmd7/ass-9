import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const AssignmentMarks = [
    {
      name: "Assignment 1",
      marks: 57,
    },
    {
      name: "Assignment 2",
      marks: 56,
    },
    {
      name: "Assignment 3",
      marks: 48,
    },
    {
      name: "Assignment 4",
      marks: 48,
    },
    {
      name: "Assignment 5",
      marks: 60,
    },
    {
      name: "Assignment 6",
      marks: 58,
    },
    {
      name: "Assignment 7",
      marks: 57,
    },
    {
      name: "Assignment 8",
      marks: 42,
    },
  ];

  return (
    <div className="w-4/5 mx-auto md:mt-24 mb-8">
      <h3 className="text-2xl font-semibold text-center mb-10">
        Assignment Marks Statistics (Area Responsive Container)
      </h3>
      {/* <h2 className="text-3xl">this is statistics</h2> */}
      {/* must provide width, height, and data otherwise it will not work */}
      {/* used responsive container with percentage to make chart responsive */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={AssignmentMarks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
