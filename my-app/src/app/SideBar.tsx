"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ProfileCard from './ProfileCard';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Link from 'next/link'; // Add this import

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen:boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" >
        <ProfileCard profileName='Astronaut'></ProfileCard>

        {/* <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>LINKS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>NASA</Link><br />
                <Divider /><br />
                <Link href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>SpaceX</Link><br />
                <Divider /><br />
                <Link href="https://www.esa.int" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline' }}>ESA</Link><br />
                <Divider /><br />
                <Link href="https://www.cnsa.gov.cn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>中国国家航天局</Link><br />
                <Divider /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

    </Box>
  );

  return (
    <div>
      <Button 
        onClick={toggleDrawer(true)} 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          height: '100%',
          left: '12px'
        }}
      >
        个人页面
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
