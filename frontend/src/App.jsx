import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './modules/user/compnents/Layout';
import Home from './modules/user/pages/Home';
import VendorSidebar from './modules/vendor/components/Sidebar';
import VendorLogin from './modules/vendor/pages/Login';
import VendorDashboard from './modules/vendor/pages/Dashboard'


// const SuperadminRoutes = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Login />} />
//       <Route path='/' element={<Sidebar />} >
//         <Route path='/dashboard' element={<Dashboard />} />
//         <Route path='/departments' element={<Departments />} />
//         <Route path='/employees' element={<Employees />} />
//         <Route path='/managers' element={<Managers />} />
//         <Route path='/tickets' element={<Tickets />} />
//         <Route path='/notifications' element={<Notifications />} />
//       </Route>
//     </Routes>
//   );
// };

const VendorRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<VendorLogin />} />
      <Route path='/' element={<VendorSidebar />} >
        <Route path='/dashboard' element={<VendorDashboard />} />
      </Route>
    </Routes>
  );
};

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};


const App = () => {

  return (
    <>
      <Routes>
        <Route index element={<UserRoutes />} />
        <Route path="/home/*" element={<UserRoutes />} />
        <Route path='/vendor/*' element={<VendorRoutes />} />
        {/* <Route path='/superadmin/*' element={<SuperadminRoutes />} /> */}
      </Routes>
    </>

  )
}

export default App