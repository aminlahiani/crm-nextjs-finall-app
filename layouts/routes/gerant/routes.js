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
    layout: "/gerant",
  },
  {
    path: "/superviseurs",
    name: "Superviseurs",
    icon: Timeline,
    layout: "/gerant",
  },
  {
    path: "/deligues",
    name: "Deligues",
    icon: Place,
    layout: "/gerant",
  },
  {
    path: "/medecins",
    name: "Medecins",
    icon: WidgetsIcon,
    layout: "/gerant",
  },
  {
    path: "/pharmaciens",
    name: "Pharmaciens",
    icon: Timeline,
    layout: "/gerant",
  },
  {
    path: "/grossistes",
    name: "Grossistes",
    icon: GridOn,
    layout: "/gerant",
  },
  {
    path: "/products",
    name: "Products",
    icon: Place,
    layout: "/gerant",
  },

];
export default dashRoutes;
