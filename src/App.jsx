import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    //console.log('Logged in user from localStorage:', loggedInUser);

    if (loggedInUser && loggedInUser !== 'null') {
      const userData = JSON.parse(loggedInUser);
      setUser(userData?.role || null);
      setLoggedInUserData(userData?.data || null);
    } else {
      //console.log('No logged-in user found in localStorage.');
      setUser(null);
      setLoggedInUserData(null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData) {
      // Check admin login
      const admin = authData.admin.find((a) => a.email === email && a.password === password);
      if (admin) {
        //console.log('Admin login successful:', admin);
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
        return;
      }

      // Check employee login
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        //console.log('Employee login successful:', employee);
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return;
      }
    }

    alert('Invalid credentials. Please try again.');
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData}  />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        <div>No user logged in</div>
      )}
    </>
  );
};

export default App;
