import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RapperContent } from "../App";


function ProtectedRoutes(){

	const {isAuthenticated, loading } = useContext(RapperContent)
	//If there is admin authentication 
	return <>
	{loading === false ? <>
	{isAuthenticated ? <Outlet/> : <Navigate to='/login'/>}
	</>:
	<></>
	}
	</>
	
}

export default ProtectedRoutes;