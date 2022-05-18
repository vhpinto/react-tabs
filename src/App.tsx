import React from 'react';
// import './App.css';
import { Tabs } from './components/tab/Tabs';

function App() {  
    const tabsContent = 
        {
            titles: [
                "Tab 1 title",
                "Tab 2 title",
                "Tab 3 title",
                "Tab 4 title"
              ],
            texts: [
                "Tab 1 content",
                "Tab 2 content",
                "Tab 3 content",
                "Tab 4 content"
              ]
        };

    return <Tabs titles={tabsContent.titles} texts={tabsContent.texts}/>;
}

export default App;