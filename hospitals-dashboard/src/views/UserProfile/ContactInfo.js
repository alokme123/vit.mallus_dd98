import React from 'react';
import './App.css';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import Link from '@material-ui/core/Link';

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
        console.warn(mydata.success);
        return(
            <div>
                {
                    mydata?
                    <div>
                        <div>
                            <h3>Contact Us</h3>
                            <p className="mytext">
                                Telephone: {mydata.data.contacts.primary.number}<br/>
                                Toll-Free No.: {mydata.data.contacts.primary['number-tollfree']}<br/>
                                    <br/>
                                    <Link href={"mailto:"+mydata.data.contacts.primary.email}><MailIcon style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
                                    <Link href={mydata.data.contacts.primary.facebook}><FacebookIcon style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
                                    <Link href={mydata.data.contacts.primary.twitter}><TwitterIcon style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
                                    <Link href={mydata.data.contacts.primary.media}><WebIcon style={{ fontSize: 30 }}/></Link>&nbsp;&nbsp;&nbsp;
                            </p>
                            <h3>State-wise Helplines</h3>
                        </div>
                            <table className="tableC">
                                <thead className="tableH">
                                    <tr>
                                        <th>State</th>
                                        <th>Helpline</th>
                                    </tr>
                                </thead>
                                <tbody>{mydata.data.contacts.regional.map(((datas,index)=>{
                            return(
                                    <tr>
                                        <td>{datas.loc}</td>
                                        <td id="hl">{datas.number}</td>
                                    </tr>
                            )}))}</tbody>
                            </table>
                        
                    </div>
                    
                    :<p>Please Wait</p>
                }
            </div>
        )
            
    }

} 

