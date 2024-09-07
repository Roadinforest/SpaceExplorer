'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HomePage from './HomePage';
import SideBar from './SideBar';

import ChatRoomPage from './ChatRoomPage/page';

function CustomTabPanel(props: { children: React.ReactNode; value: number; index: number }) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center'
      }}>
        <SideBar />
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="home tabs"
          sx={{ 
            flexGrow: 1,
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center'
            }
          }}
        >
          <Tab label="主页" />
          <Tab label="论坛页面" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {/* <SideBar/> */}
        <HomePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <HomePage /> */}
        <ChatRoomPage />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        其他页面内容
      </CustomTabPanel> */}
    </Box>
  );
}
