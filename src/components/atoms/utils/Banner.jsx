
const Banner = ({ children, style = 'info' }) => {
    return (
        <div className={"banner banner-" + style}>
            {children}
        </div>
    );
};

export default Banner;