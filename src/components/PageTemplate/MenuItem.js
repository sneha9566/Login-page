import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  DashboardIcon,
  ListItemText,
  ShoppingCartIcon,
} from "../../includes";
import { Link } from "react-router-dom";
export const mainListItems = (
  <Fragment>
    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home page" />
      </ListItem>
    </Link>
    <Link to="/order" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="My Orders" />
      </ListItem>
    </Link>

  </Fragment>
);
