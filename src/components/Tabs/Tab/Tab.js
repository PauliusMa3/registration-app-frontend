import React, { useContext } from "react";
import { TabsContext } from "../Tabs";
import { StyledTab } from "./Tab.styles";

const Tab = ({ label, children }) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    return (
        <StyledTab
            activeTab={activeTab === label}
            onClick={() => setActiveTab(label)}
        >
            {children}
        </StyledTab>
    );
};

export default Tab;
