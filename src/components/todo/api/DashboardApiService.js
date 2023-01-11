import axios from 'axios';


// export function retrieveHelloWorldBean(){

// return axios.get('http://localhost:8080/hello-world-bean')
// }
const apiClient = axios.create (
    {
        baseURL:'https://bafb1cba-763c-4083-ae59-ed8888e0fda1.mock.pstmn.io'
    }
);


// export const retrieveAllDashboardsForUsernameApi
//    = (title) =>('/test-mock-tableau-details')

      export const retrieveAllDashboardsForUsernameApi
   = () => apiClient.get('/test-mock-tableau-details')

   
   export const retrieveAllDashboardDetailsForUsernameApi
   = (id) => apiClient.get(`/mocks/${id}`)

   
 


//    export const deleteDashboardApi
//     = (username , id) => apiClient.delete(`/update-dashboard-details/${id}`)

//    export const retrieveTodoApi
//    = (username , id) => apiClient.get(`/users/${username}/todos/${id}`)

//    export const updateTodoApi
//    = (username , id ,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)

//    export const createTodoApi
//    = (username  ,todo) => apiClient.post(`/users/${username}/todos/`,todo)