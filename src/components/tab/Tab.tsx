import './Tab.css';

interface TabProps {
    text: string
}

export function Tab(props: TabProps) {
    return (
        <div className='tab'>
            <h3> {props.text} </h3>
        </div>
    );
}