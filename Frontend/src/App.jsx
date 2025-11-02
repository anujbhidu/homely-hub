import "./App.css";
import Main from "./components/home/Main";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PropertyList from "./components/home/PropertyList" 
import PropertyListing from "./components/propertyListing/PropertyListing";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "./store/User/user-slice";
import { currentUser } from "./store/User/user-action";

function App() {
  const dispatch = useDispatch();
  const { errors, user } = useSelector((state) => state.user)
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearErrors());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<PropertyList />} />
            <Route path="propertylist/:id" element={<PropertyListing />} />
            
            {/* {user routes} */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
