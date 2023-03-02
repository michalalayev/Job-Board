import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const navbarItems = [
  {
    id: 0,
    icon: <WorkIcon />,
    label: "Jobs",
    route: "/",
  },
  {
    id: 1,
    icon: <PeopleIcon />,
    label: "Networking",
    route: "/networking",
  },
  {
    id: 2,
    icon: <EventIcon />,
    label: "Events",
    route: "/events",
  },
  {
    id: 3,
    icon: <AccountCircleIcon />,
    label: "User",
    route: "/user",
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    label: "Settings",
    route: "/settings",
  },
  {
    id: 5,
    icon: <EqualizerIcon />,
    label: "Analytics",
    route: "/analytics",
  },
];

export default navbarItems;
