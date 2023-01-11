import React,{useEffect,useState} from 'react'
import {Formik , Form ,Field,ErrorMessage}  from 'formik'
import { retrieveAllDashboardDetailsForUsernameApi } from '../todo/api/DashboardApiService'

function DashboardComponent() {

    const [userid, setUserid] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [active, setActive] = useState('')
    const [superuser, setSuperuser] = useState('')
    const [verified, setVerified] = useState('')


    useEffect ( () =>  refreshDashboardDetails() ,[])

    function refreshDashboardDetails() {

        retrieveAllDashboardDetailsForUsernameApi(1)
        .then( (response) => {
            console.log(response.data) 
            setUserid(response.data.userid)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setUsername(response.data.username)
            setActive(response.data.active)
            setSuperuser(response.data.superuser)
            setVerified(response.data.verified)

        }
        )
        .catch((error) => console.log(error) )
        .finally(() => console.log('cleanup'))
    
        }


  return (
    <div className="container">
                <h1>Edit Your Dashboard Details</h1>
                 <div>
                    <Formik initialValues={{userid, email,password,firstName,lastName,username,active,superuser,verified}}
                    enableReinitialize={true}
                    >
                    
                     {
                         (props) => (
                             <Form className="form-group">
                                 <ErrorMessage 
                                 name="description"
                                 component="div"
                                 className="alert alert-warning"
    
                                 />
                                  <ErrorMessage 
                                 name="targetDate"
                                 component="div"
                                 className="alert alert-warning"
    
                                 />
                                 <fieldset>
                                     <label>UserId</label>
                                     <Field type="text" className="form-control" name="userid"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>Email</label>
                                     <Field type="text" className="form-control" name="email"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>Password</label>
                                     <Field type="text" className="form-control" name="password"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>First Name</label>
                                     <Field type="text" className="form-control" name="firstName"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>Last Name</label>
                                     <Field type="text" className="form-control" name="lastName"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>User Name</label>
                                     <Field type="text" className="form-control" name="username"/>
                                 </fieldset>
                                 <fieldset>
                                     <label>Active</label>
                                     <Field type="text" className="form-control" name="active"/>
                                 </fieldset>
    
                                 <fieldset>
                                     <label>Superuser</label>
                                     <Field type="text" className="form-control" name="superuser"/>
                                 </fieldset>
    
                                
                                 <fieldset>
                                     <label>Verified</label>
                                     <Field type="text" className="form-control" name="verified"/>
                                 </fieldset>
    
    
                                 <div>
                                     <button className="btn btn-success m-5" type="submit">Save</button>
                                 </div>
    
                             </Form>
                         )
                     }
    
                    </Formik>
    
                 </div>
             </div>
  )
}

export default DashboardComponent
































// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
// import { useAuth } from "./security/AuthContext"
// import {Formik , Form ,Field,ErrorMessage}  from 'formik'
// import moment from "moment/moment"

// export default function DashboardComponent(){

//     return (
//         <div className="container">
//             <h1>Enter Todo Details</h1>
//             <div>
//                <Formik
//                >
                
//                 {
//                     (props) => (
//                         <Form className="form-group">
//                             <ErrorMessage 
//                             name="description"
//                             component="div"
//                             className="alert alert-warning"

//                             />
//                              <ErrorMessage 
//                             name="targetDate"
//                             component="div"
//                             className="alert alert-warning"

//                             />
//                             <fieldset>
//                                 <label>UserId</label>
//                                 <Field type="text" className="form-control" name="userid"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>Email</label>
//                                 <Field type="text" className="form-control" name="email"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>Password</label>
//                                 <Field type="text" className="form-control" name="password"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>First Name</label>
//                                 <Field type="text" className="form-control" name="firstname"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>Last Name</label>
//                                 <Field type="text" className="form-control" name="lastname"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>User Name</label>
//                                 <Field type="text" className="form-control" name="username"/>
//                             </fieldset>
//                             <fieldset>
//                                 <label>Active</label>
//                                 <Field type="text" className="form-control" name="active"/>
//                             </fieldset>

//                             <fieldset>
//                                 <label>Superuser</label>
//                                 <Field type="text" className="form-control" name="superuser"/>
//                             </fieldset>

                            
//                             <fieldset>
//                                 <label>Verified</label>
//                                 <Field type="text" className="form-control" name="verified"/>
//                             </fieldset>


//                             <div>
//                                 <button className="btn btn-success m-5" type="submit">Save</button>
//                             </div>

//                         </Form>
//                     )
//                 }

//                </Formik>

//             </div>
//         </div>
//     )
// }