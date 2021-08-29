const Header = ({ title, }) => {
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Who Knows?'
}

export default Header