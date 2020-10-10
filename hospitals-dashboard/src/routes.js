/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import ContactInfo from "views/UserProfile/ContactInfo.js";
import TableList from "views/TableList/TableList.js";
import Guidelines from "views/Typography/Guidelines.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import ContactInfov2 from "views/UserProfile/ContactInfov2.js";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MedCollege from "views/HealthInfo/MedCollege.js";
import HospitalsInfo from "views/HealthInfo/HospitalsInfo.js";
import Redirect from "views/Redirect.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/contactinfo",
    name: "Hospitals Info",
    icon: LocalHospitalIcon,
    component: HospitalsInfo,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Medical Colleges",
    icon: LocalHospitalIcon,
    component: MedCollege,
    layout: "/admin"
  },
];

export default dashboardRoutes;
