import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Patients from "./pages/Patients";
import Workups from "./pages/Workups";
import Layout from "./components/Layout";
import WdxPulmonaryEmbolism from "./pages/workups/WdxPulmonaryEmbolism";

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Layout>
                    <Routes>
                        <Route path={""} element={<Patients />}></Route>
                        <Route path={"/home"} element={<Patients />}></Route>
                        <Route path={"/signup"} element={<Patients />}></Route>
                        <Route path={"/patients"} element={<Patients />}></Route>
                        <Route path={"/workups"} element={<Workups />}></Route>
                        <Route path="workups/pulmonary_embolism" element={<WdxPulmonaryEmbolism />} />
                    </Routes>
                </Layout>
            </Router>
        </React.StrictMode>
    );
}

export default App;
