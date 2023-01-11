import React ,{useState}  from 'react'
import { useParams ,Link } from 'react-router-dom';

import { retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService';

export default function WelcomeComponent() {

      const {username} = useParams()

      const[message ,setMessage] = useState(null)

      function callHelloWorldRestApi(){
         console.log('called')
        

       
        retrieveHelloWorldBeanPathVariable('safan')       
        .then( (response) => successfulResponse(response) )
        .catch((error) => errorResponse(error) )
        .finally(() => console.log('cleanup'))


        }

      function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)

      }
      function errorResponse(error){
        console.log(error)
      }
  return (
    <>
    <h1>Welcome {username}</h1>
    <div>Here manage your todos - <Link to='/todo' > Go here!</Link>
    </div>
    <div>
      <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World </button>
    </div>
    <div className='text-info'>{message}</div>
    </>
  )
}

