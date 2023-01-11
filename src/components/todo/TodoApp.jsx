import React , {useState} from 'react';
import {BrowserRouter , Routes , Route , useNavigate, Navigate} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogOutComponent from './LogOutComponent';
import TodoComponent from './TodoComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import DashboardDetails from '../pages/DashboardDetails';
import DashboardComponent from '../pages/DashboardComponent';

function AuthenticatedRoute({children}){
    const authContext = useAuth();

    if(authContext.isAuthenticated)
    return children

    return<Navigate to="/"/>
}
export default function TodoApp() {
  return (
   
          <AuthProvider>
              <BrowserRouter>
                 <HeaderComponent />
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/welcome/:username' element={
                <AuthenticatedRoute>
                    <WelcomeComponent/>
                </AuthenticatedRoute>   
                     } />
                
                <Route path='/todos' element={
                 <AuthenticatedRoute>
                <ListTodosComponent />
                </AuthenticatedRoute>
                } />

                <Route path='/todo/:id' element={
                 <AuthenticatedRoute>
                <TodoComponent />
                </AuthenticatedRoute>
                } />
                
                <Route path='/logout' element={
                <AuthenticatedRoute>
                <LogOutComponent/>
                </AuthenticatedRoute>
                } />

                <Route path='/dashboard_details' element={
                <DashboardDetails/>
                } />

                <Route path='/dashboard_detail' element={
                <DashboardComponent />
                } />

                <Route path='*' element={<ErrorComponent/>} />
            </Routes>
               <FooterComponent />
             </BrowserRouter>
         </AuthProvider>
   
  )
}

