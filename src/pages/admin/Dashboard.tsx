import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for Pie Chart
const studentData = [
  { name: "Grade 1", value: 50 },
  { name: "Grade 2", value: 40 },
  { name: "Grade 3", value: 30 },
  { name: "Grade 4", value: 20 },
];

// Colors for Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        School Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Pie Chart - Students per Grade */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Students per Grade</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={studentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    {studentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Placeholder for Other Widgets */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Teacher Statistics</Typography>
              <Typography variant="body2">Total Teachers: 25</Typography>
              <Typography variant="body2">Active Teachers: 20</Typography>
              <Typography variant="body2">On Leave: 5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
