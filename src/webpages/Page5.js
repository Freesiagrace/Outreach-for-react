// src/pages/Page1.js
import React from 'react';

const Page5 = () => {
  return (
    <div style={styles.page}>
      <h1>Welcome to Page 5</h1>
      <p>This is the content of Page 5.</p>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
};
export default Page5;
