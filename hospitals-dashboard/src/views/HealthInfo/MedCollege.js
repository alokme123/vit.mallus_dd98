import React from 'react';
import './App.css';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SplitButton from "./splitbutton";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);

export default class FTable extends React.Component{
    constructor(){
        super();
        this.state={
            mydata:false,
            stateselect:false,
        }
    }

    
    componentDidMount(){
        let url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
        fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json',
            }
        }).then((result)=>{
             result.json().then((resp)=>{
                 this.setState({
                     mydata:resp
                 });
                 console.warn(resp);
             })
        })
    }

    changeMe(mystate){
        console.warn("Clicked");
        this.setState(
            {
                stateselect:mystate
            }
        );
    }
    
    render(){
        const mydata = this.state.mydata;
        const state  = this.state.stateselect;
        console.warn("my"+state);
        const dataarray = mydata?.data?.medicalColleges ?? [];
        console.warn(dataarray[0]);
        const tablearray = dataarray.map((e)=>{
          return [e.state,e.name,e.city,e.ownership,e.admissionCapacity,e.hospitalBeds]})

        {/*console.warn(mydata?.data?.contacts?.primary?.);*/}
        
        
        return(
            <GridContainer>
                
                {
                    mydata?
      <GridItem xs={12} sm={12} md={12}>
        <Card>
        
          <CardHeader color="primary">
          
            <h4 >Medical Colleges Information</h4>
            <SplitButton />
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["State Name", "Name","City","Ownership","Admission Capacity","Hospital Beds"]}
              tableData={tablearray}
            />
          </CardBody>
        </Card>
        <p></p>
      </GridItem>
      

                    
                    :<p>Please Wait</p>
            }
            </GridContainer>
        )
            
    }

} 

