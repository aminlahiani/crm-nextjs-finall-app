import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin1.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link"
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function TableList(props) {

    console.log(props.currentUser);
    console.log(props.abonnements);
  
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [Abonnements, setAbonnemet] = React.useState(props.abonnements);
  
    const ActionSection = (props) => {
      console.log(props._id);
      const router = useRouter();
      const handleInfoAction = () => {
        console.log(props._id);
        router.push(`/admin/abonnement/${props._id}`);
      };
  
      const handleDeleteAction = async () => {
        const response = await axios.delete(
          `http://localhost:3000/employee/${props._id}`
        );
        console.log(response);
        if (response.statusText === "OK") {
            setAbonnemet((prevData) => prevData.filter((i) => i._id !== props._id));
        }
      };
  
      return (
        <div>
          <Button color="info" onClick={handleInfoAction}>
            getbyid
          </Button>
          <Button color="danger" onClick={handleDeleteAction}>
            delete
          </Button>
        </div>
      );
    };
    return (
    
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Abonnemet Table</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <Link href="/admin/employee/create">
            <Button color="success" >
            Create Abonnemet
          </Button>
          </Link>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Raison-Social", "Name", "Email", "Gerant" ,"Action"]}
                tableData={Abonnements.map((x) => [
                    x.Registredecommerce,
                    x.raisonsosial,
                    x.email,
                    x.gerant.name,  
                    <ActionSection {...x} />,
                  ])}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      
    );
  }

export async function getServerSideProps(ctx) {
  
   const res = await axios.get("http://localhost:3000/api/users", {
 
    headers: ctx.req.headers,
  });
  console.log(ctx.req.headers);
  const  data  =  res.data
 console.log(data)
  if (!data) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  const abonnement = await axios.get("http://localhost:3000/api/abonnement")
  


  return {
    props: { currentUser: data , abonnements : abonnement.data }, // will be passed to the page component as props
  };
}
TableList.layout = Admin;

export default TableList;