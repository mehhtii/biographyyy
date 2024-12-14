import AdminContent from "./content";
import AdminNavbar from "./navbar";

const IndexNavAndContent = ({children}) => {
    return ( 
        <div className="container h-100">
        <AdminNavbar/>
        <AdminContent children={children}/>
        </div>
     );
}
 
export default IndexNavAndContent;