// import './tab.css';

interface TabProps {
    text: string
}

export function Tab(props: TabProps) {
    return (
        <div className='tab-text'>
            <h3> {props.text} </h3>
        </div>
    );
}