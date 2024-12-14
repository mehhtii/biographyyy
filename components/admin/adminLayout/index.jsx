import IndexNavAndContent from "./Content&Navbar";
import AdminSideBar from "./sideBar/sidebar";

const AdminLayoutCustomize = () => {
    return ( 
        
        <div className="container-fluid">
            <div className="row">
                <div className="col col-4">
                    <AdminSideBar/>
                </div>
                <div className="col col-8">
                    <IndexNavAndContent/>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLayoutCustomize;