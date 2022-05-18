import React, { useState } from 'react';

import { Nav } from './Nav';
import { Tab } from './Tab';
// import './Tabs.css';

interface TabsProps {
    titles: string[],
    texts: string[],
}

export function Tabs(props: TabsProps) {
    const [currentTab, setTab] = useState(0);
    const handleCurrentTab = (tabsIndex: number) => {
        setTab(tabsIndex);
    }

    return (
        <div className="tabs">
            <Nav tabTitle={ props.titles } currentTab={currentTab} onSetTab={ handleCurrentTab } />
            <Tab text={ props.texts[currentTab] } />
        </div>
    );
}