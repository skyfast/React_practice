import Button from './Button'

const Header = ({ title, onAdd }) => {
    const onClick = () => {console.log("click")}
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAdd} ></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Who Knows?'
}

export default Header