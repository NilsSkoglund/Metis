import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Patients from "./pages/Patients";
import Layout from "./components/Layout";

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
                        <Route path={"/workups"} element={<Patients />}></Route>
                    </Routes>
                </Layout>
            </Router>
        </React.StrictMode>
    );
}

export default App;
