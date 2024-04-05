const Navbar = ({ children }) => {
    return (
        <nav className="navbar">
            {children && children.map((child, index) => {
                return <div key={index}>{child}</div>
            })}
        </nav>
    );
}

export default Navbar;