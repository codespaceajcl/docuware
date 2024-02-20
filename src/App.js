import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MasterAdminLayout from './Layout/MasterAdminLayout';
import Form from './Container/Pages/Form/Form';
import Table from './Container/Pages/Table/Table';
import Dashboard from './Container/Dashboard/Dashboard';
import NotFound from './Container/Pages/NotFound/NotFound';
import HomePage from './Container/Pages/HomePage/HomePage';
import DocDepartment from './Container/Pages/DocDepartment/DocDepartment';
import DepartmentEnquiry from './Container/Pages/DocDepartment/DepartmentEnquiry';

const App = () => {
  return (
    <BrowserRouter basename='/docuware'>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Routes>

        <Route path="/dashboard" element={<MasterAdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add-document" element={<Form />} />
          <Route path="/dashboard/general-enquiry" element={<Table />} />
          <Route path="/dashboard/document-department" element={<DocDepartment />} />
          <Route path="/dashboard/document-department/enquiry" element={<DepartmentEnquiry />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;