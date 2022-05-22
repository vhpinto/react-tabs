import './Nav.css';

interface NavProps {
    tabTitle: string[]
    currentTab: number
    onSetTab?: (n: number) => void
}

export function Nav(props: NavProps) {
    const buttons = props.tabTitle.map((txt, index) => (
        <span
            key={index}
            onClick={() => props.onSetTab && props.onSetTab(index)}>
            {txt}
        </span>
    ))

    return (
        <div className='nav'>
            {buttons}
        </div>
    );
}