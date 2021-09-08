import Button from './Button'

const Header = ({ title, onAdd, show }) => {
    const onClick = () => {console.log("click")}
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color={!show ? 'green' : 'red'} text={!show ?'open' : 'close'} onClick={onAdd} ></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Who Knows?'
}

export default Header