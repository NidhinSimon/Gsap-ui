import React, { useState, useEffect } from 'react';
import { Slider, Button, Typography, Paper, Grid, Link } from '@mui/material';

const Dashboard = () => {
  const [endYear, setEndYear] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [data, setData] = useState([
    // Your dummy data here
  ]);

  useEffect(() => {
    // Fetch data based on filters (dummy data for now)
    setData([
      {
        end_year: '',
        intensity: 6,
        sector: 'Energy',
        topic: 'Oil',
        region: 'North America',
        start_year: 2017,
        country: 'USA',
        relevance: 3,
        pestle: 'Industries',
        source: 'Abq',
        title: '2017 could be another record-breaking year in oil production.',
        likelihood: 2,
      },
      // Add more dummy data entries as needed
    ]);
  }, [endYear, selectedTopics]);

  const calculateAverageIntensity = () => {
    // Dummy function for average intensity calculation
    const sumIntensity = data.reduce((acc, entry) => acc + entry.intensity, 0);
    return data.length === 0 ? 0 : sumIntensity / data.length;
  };

  const findMostCommonTopic = () => {
    // Dummy function for finding the most common topic
    const topicsCount = data.reduce((acc, entry) => {
      acc[entry.topic] = (acc[entry.topic] || 0) + 1;
      return acc;
    }, {});
    const mostCommonTopic = Object.keys(topicsCount).reduce(
      (a, b) => (topicsCount[a] > topicsCount[b] ? a : b),
      null
    );
    return mostCommonTopic || 'N/A';
  };

  return (
    <Grid container spacing={2}>
      {/* Sidebar Section */}
      <Grid item xs={3}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6">Filters</Typography>
          {/* End Year Filter */}
          <Typography>End Year:</Typography>
          <Slider
            value={endYear}
            min={2017}
            max={2024}
            onChange={(e) => setEndYear(e.target.value)}
          />
          {/* Other Filters */}
          {/* ... */}
          {/* Apply Button */}
          <Button variant="contained" color="primary">
            Apply Filters
          </Button>
          <hr />
          {/* Summary Statistics */}
          <Typography variant="h6">Summary Statistics</Typography>
          <Typography>Average Intensity: {calculateAverageIntensity()}</Typography>
          <Typography>Most Common Topic: {findMostCommonTopic()}</Typography>
          {/* Quick Links */}
          <Typography variant="h6">Quick Links</Typography>
          <Link href="https://example.com" target="_blank" rel="noopener">
            External Link 1
          </Link>
          <Link href="https://example.com" target="_blank" rel="noopener">
            External Link 2
          </Link>
        </Paper>
      </Grid>

      {/* Main Content Section */}
      <Grid item xs={9}>
        {/* Visualizations Section */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">Yearly Trends</Typography>
              {/* Replace the following div with your LineChart component */}
              <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                {data.map((entry) => (
                  <div key={entry.start_year}>
                    Year: {entry.start_year}, Intensity: {entry.intensity}, Relevance: {entry.relevance}
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">Topic Distribution</Typography>
              {/* Replace the following div with your BarChart component */}
              <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                {data.map((entry) => (
                  <div key={entry.topic}>
                    Topic: {entry.topic}, Count: 1
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">Country Distribution</Typography>
              {/* Replace the following div with your Map component */}
              <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                {data.map((entry) => (
                  <div key={entry.country}>
                    Country: {entry.country}, Intensity: {entry.intensity}, Relevance: {entry.relevance}
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
