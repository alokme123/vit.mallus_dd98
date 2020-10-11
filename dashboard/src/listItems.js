import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CallIcon from '@material-ui/icons/Call';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
      <ListItemText primary="CONTACT" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="HOSPITALS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsNoneIcon />
      </ListItemIcon>
      <ListItemText primary="NOTIFICATIONS" />
    </ListItem>
     
    </div>
);

