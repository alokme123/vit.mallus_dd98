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
            mydata:false
        }
    }

    
    componentDidMount(){
        let url = "https://api.rootnet.in/covid19-in/contacts";
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

    
    render(){
        const mydata = this.state.mydata;
        const dataarray = mydata?.data?.contacts?.regional ?? [];
        console.warn(dataarray[0]);
        const tablearray = dataarray.map((e)=>{
          return [e.loc,e.number]
        })
        {/*console.warn(mydata?.data?.contacts?.primary?.);*/}
        
        
        return(
          
            <GridContainer>
                {
                    mydata?
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 >Contact & Helpline Information</h4>
            <p>
              Number: {mydata.data.contacts.primary.number}<br/>
              Toll-Free Number: {mydata.data.contacts.primary['number-tollfree']}<br/>
              <Link href={"mailto:"+mydata.data.contacts.primary.email}><MailIcon color="action" style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
              <Link href={mydata.data.contacts.primary.facebook}><FacebookIcon color="action" style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
              <Link href={mydata.data.contacts.primary.twitter}><TwitterIcon color="action" style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
              <Link href={mydata.data.contacts.primary.media}><WebIcon color="action" style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country"]}
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

