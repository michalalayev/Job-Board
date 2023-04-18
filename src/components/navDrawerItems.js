import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Jobs from "../pages/jobs";
import Networking from "../pages/networking";
import Events from "../pages/events";
import User from "../pages/user";
import Settings from "../pages/settings";
import Analytics from "../pages/analytics";

const navDrawerItems = [
  {
    id: 0,
    icon: WorkIcon,
    label: "Jobs",
    route: "/",
    page: Jobs,
  },
  {
    id: 1,
    icon: PeopleIcon,
    label: "Networking",
    route: "/networking",
    page: Networking,
  },
  {
    id: 2,
    icon: EventIcon,
    label: "Events",
    route: "/events",
    page: Events,
  },
  {
    id: 3,
    icon: AccountCircleIcon,
    label: "User",
    route: "/user",
    page: User,
  },
  {
    id: 4,
    icon: SettingsIcon,
    label: "Settings",
    route: "/settings",
    page: Settings,
  },
  {
    id: 5,
    icon: EqualizerIcon,
    label: "Analytics",
    route: "/analytics",
    page: Analytics,
  },
];

export default navDrawerItems;
