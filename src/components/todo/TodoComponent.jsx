import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import {Formik , Form ,Field,ErrorMessage}  from 'formik'
import moment from "moment/moment"

export default function ListTodosComponent(){
   const {id} = useParams()

   const [description, setDescription] = useState('')
   const [targetDate, setTargetDate] = useState('')
   
   const authContext = useAuth()
   const navigate =useNavigate()

   const username = authContext.username

   useEffect(() => retrieveTodos(), [id])

    function retrieveTodos() {

        if(id != -1){
            retrieveTodoApi(username , id)
            .then(response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
        }
    }

    function onSubmit(values){
        console.log(values)
        const todo ={
            id,
            username:username,
            description: values.description,
            targetDate: values.targetDate,
            done:false
        }
        
        if(id==1){
            
            createTodoApi(username,todo)
            .then(response => {
               navigate('/todos')
           })
           .catch(error => console.log(error))

        }
        else{
            
         updateTodoApi(username , id ,todo)
         .then(response => {
            navigate('/todos')
        })
        .catch(error => console.log(error))
        }

    }



    function validate(values){
        let errors={
            // description :'enter the valid description',
            // targetDate:'enter valid date'
        }
        if(values.description.length<5){
            errors.description = 'Enter atleast 5 characters'
        }
        // if(values.targetDate ==null || values.targetDate =='' || moment(values.targetDate).isValid)

            if(values.targetDate ==null){
                errors.targetDate = 'Enter a target date'
        }
        console.log(values)
        return errors
    }
    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
               <Formik initialValues={ { description , targetDate} }
                    enableReinitialize={true}
                    onSubmit ={onSubmit}
                    validate ={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
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
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>

                            <fieldset>
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
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