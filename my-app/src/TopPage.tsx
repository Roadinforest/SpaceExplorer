import * as React from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomePage from "./app/HomePage";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };

}
  export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="主页" {...a11yProps(0)} />
            <Tab label="待定页面1" {...a11yProps(1)} />
            <Tab label="待定页面2" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <HomePage />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          待定页面1的内容
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          待定页面2的内容
        </TabPanel>
      </Box>
    );
  }

// 如果在更高层级的组件中还没有设置 ThemeProvider，你可能需要这样包装 FullWidthTabs：
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FullWidthTabs />
    </ThemeProvider>
  );
}

