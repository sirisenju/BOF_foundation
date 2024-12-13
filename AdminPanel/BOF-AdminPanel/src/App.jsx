import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Auth/login";
import CreateEvent from "./component/createEvent";
import PrivateRoute from "./component/PrivateRoute";
import ViewEvents from "./component/viewEvent";
import UpdateEvent from "./component/updateEvents";
import DeleteEvent from "./component/deleteEvents";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateEvent/>
            </PrivateRoute>
          }
        />
        <Route
          path="/view"
          element={
            <PrivateRoute>
              <ViewEvents/>
            </PrivateRoute>
          }
        />
                <Route
          path="/update/:id"
          element={
            <PrivateRoute>
              <UpdateEvent/>
            </PrivateRoute>
          }
        />
        <Route
          path="/delete/:id"
          element={
            <PrivateRoute>
              <DeleteEvent/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
