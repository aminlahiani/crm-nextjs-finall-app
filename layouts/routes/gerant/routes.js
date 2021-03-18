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
    collapse: true,
    name: "Profiles",
    icon: Apps,
    state: "profilesCollapse",
    views: [
      {
        path: "/profiles/superviseurs",
        name: "Superviseurs",
        mini: "S",
        layout: "/gerant",
      },
      {
        path: "/profiles/deligues",
        name: "Deligues",
        mini: "D",
        layout: "/gerant",
      },
    ],
  },
  {
    collapse: true,
    name: "Paramaitre",
    icon: GridOn,
    state: "paramaitreCollapse",
    views: [
      {
        path: "/paramaitre/products",
        name: "Produits",
        mini: "P",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/familleproduct",
        name: "Famille de Produit",
        mini: "FP",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/echantillons",
        name: "Echantillons",
        mini: "E",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/medecins",
        name: "Medecins",
        mini: "M",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/specialitemedecins",
        name: "Specialite medecine",
        mini: "M",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/pharmaciens",
        name: "Pharmaciens",
        mini: "P",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/grossistes",
        name: "Grossistes",
        mini: "G",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/secteur",
        name: "Secteur",
        mini: "S",
        layout: "/gerant",
      },
      {
        path: "/paramaitre/gouvernorat",
        name: "Gouvernorat",
        mini: "G",
        layout: "/gerant",
      },
    ],
  },

];
export default dashRoutes;
