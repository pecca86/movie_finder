const Container = ({ children }) => {

    return (
        <div className="main">
            {children && children.map((child, index) => {
                return <div className="container" key={index}>{child}</div>;
            })};
        </div>
    )

};

export default Container;