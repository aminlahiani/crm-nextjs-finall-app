// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    layout: "/user",
  },
  {
    path: "/deligues",
    name: "Deligues",
    icon: Place,
    layout: "/user",
  },
  {
    path: "/medecins",
    name: "Medecins",
    icon: Place,
    layout: "/user",
  },
  {
    path: "/pharmaciens",
    name: "Pharmaciens",
    icon: Place,
    layout: "/user",
  },
  {
    path: "/grossistes",
    name: "Grossistes",
    icon: Place,
    layout: "/user",
  },
  {
    path: "/products",
    name: "Products",
    icon: Place,
    layout: "/user",
  },

];
export default dashRoutes;
