import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  retrieveAllDashboardDetailsForUsernameApi, retrieveAllDashboardsForUsernameApi } from '../todo/api/DashboardApiService'



function DashboardDetails() {

    // const [title , setTitle]=useState('')
    // const [description, setDescription] = useState('')
    // const [url, setUrl] = useState('')
    // const [email, setEmail] = useState('')

    const [dashboardDetail, setDashboardDetail] = useState('')
    const navigate = useNavigate()

    useEffect ( () =>  refreshDashboardDetails() ,[])

    function refreshDashboardDetails() {

        retrieveAllDashboardDetailsForUsernameApi(1)
        .then( (response) => {
            console.log(response.data) 
             setDashboardDetail(response.data)
        }
        )
        .catch((error) => console.log(error) )
        .finally(() => console.log('cleanup'))
    
        }

        function updateDashboardDetails(id){
            console.log('clicked' )
            navigate(`/dashboard_detail`)
        }
    
    
 
 

    //  const  dashboardDetails= [
    //     {
    //         tableauEmail: "shankara.sukumaran@notionuniversegroup.com",
    //         appEmail: "shankara25@yahoo.com",
    //         password: "abc1onmfa",
    //         clientId: "0990a8aa-7af4-498a-8169-fc3bd7a28590",
    //         secretId: "c27da7b8-ee2b-4dc5-ae9f-4a00c1d9dece",
    //         secretValue: "TRLBbNTCMXV4zmCy1JDBdUKCOCzf1fRjXsj/ZH03b+o=",
    //         url: "https://prod-apnortheast-a.online.tableau.com/t/jaisingtechno/views/WebEngagement/WebEngagement"
    //     },
    // ]

    

    return (
        <div className='container'>
            {/* <h1>Things What You Do Want!!!</h1>
            {message && <div className='alert alert-warning'>{message}</div>} */}
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                        
                            <th>UserID</th>
                            <th>Email</th>
                            
                            <th>Delete</th>
                            <th>Update</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            dashboardDetail.map(
                                (dashboardDetail) => ( */}
                                <tr key={dashboardDetail.id}>
                                <td>{dashboardDetail.userid}</td>
                                     <td>{dashboardDetail.email}</td>
                                    <td><button className='btn btn-warning' >Delete</button></td>
                                    <td><button className='btn btn-success'  onClick={() => updateDashboardDetails()}>Update</button></td>
                                </tr>
                                     {/* )
                            )
                        }   
                          */}
                    </tbody>
                </table>
            </div>
            <div className='btn btn-success m-5' >Add New Dashboard Details</div>
        </div>
      )
}

export default DashboardDetails