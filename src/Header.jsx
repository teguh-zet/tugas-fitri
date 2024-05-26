const Header = () =>{
    const nama =null;
    return(
        <div className="header">
            <h1>planet-planer</h1>
            <span>
            <h1>{nama || "Tanpa nama"}</h1>
            </span>
        </div>
    )
}
export default Header;
