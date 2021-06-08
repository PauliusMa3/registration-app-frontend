import React, { useContext } from "react";
import { TabsContext } from "../Tabs";
import { PanelWrapper } from "./Panel.styles";


const Panel = ({ children, label }) => {
    const { activeTab } = useContext(TabsContext);

    return label === activeTab ? <PanelWrapper>{children}</PanelWrapper> : null;
};

export default Panel;
