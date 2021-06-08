import React, { useState, createContext } from "react";
import Panel from "./Panel/Panel";
import Tab from "./Tab/Tab";

export const TabsContext = createContext(undefined);

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState("registration");
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
};

Tabs.Panel = Panel;
Tabs.Tab = Tab;

export default Tabs;
