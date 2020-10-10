import React from 'react';
import './App.css';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import SearchAppBar from 'appbar.js'



export default class GTable extends React.Component{
    constructor(){
        super();
        this.state={
            mydata:false
        }
    }
    datetest = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    componentDidMount(){
        let url = "https://api.rootnet.in/covid19-in/notifications";
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
                            <table className="tableC">
                                <thead className="tableH">
                                    <tr>
                                        <th>Date</th>
                                        <th>Notification Title</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>{mydata.data.notifications.map(((datas,index)=>{
                            return(
                                    <tr>{console.warn(datas.title.split(" ",2)[0])}
                                        <td>{this.datetest.test((datas.title.split(' ')[0]))?datas.title.split(' ')[0]:'-----'}</td>
                                        <td id="hl">{this.datetest.test((datas.title.split(' ')[0]))?datas.title.slice(10,):datas.title}</td>
                                        <td id="hl"><a href={datas.link} target="__blank">{datas.link}</a></td>
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

