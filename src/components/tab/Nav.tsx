// import './Nav.css';

interface NavProps {
    tabTitle: string[]
    currentTab: number
    onSetTab?: (n: number) => void
}

export function Nav(props: NavProps) {
    const buttons = props.tabTitle.map((txt, index) => (
        <button className={ index === props.currentTab ? 'nav-button-selected' : 'nav-button' }
            key={index}
            onClick={() => props.onSetTab && props.onSetTab(index)}>
            {txt}
        </button>
    ))

    return (
        <div className='nav-menu'>
            {buttons}
        </div>
    );
}