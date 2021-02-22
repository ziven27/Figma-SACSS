import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import Header from "./component/Header/index";
import Tabs from "./component/Tabs";
import Config from "./page/Config/index";
import Token from "./page/Token/index";
import Home from "./page/Home/index";
import './index.less';
import Svg from "./component/Svg";

const DATA_TAB = ['HTML', 'ACSS', 'Token', 'Project'];


const APP = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const onTabChange = (index) => {
        setTabIndex(index);
        parent.postMessage({
            pluginMessage: {
                type: `API.onTabChange`,
                value: index
            }
        }, '*');
    };

    return (
        <>
            <Header
                extra={
                    <a className="df aic jcc fs20" href="https://github.com/ziven27/Figma-ACSS" target="_blank"
                       title="Help">
                        <Svg name="github"/>
                    </a>
                }>
                <Tabs className="fs14" data={DATA_TAB} tabIndex={tabIndex} onChange={onTabChange}></Tabs>
            </Header>
            {(() => {
                if (tabIndex === 0 || tabIndex === 1) {
                    return <Home tabIndex={tabIndex}/>;
                }
                if (tabIndex === 2) {
                    return <Token/>;
                }
                if (tabIndex === 3) {
                    return <Config/>;
                }
                return null;
            })()}
        </>
    )
};

ReactDOM.render(<APP/>, document.getElementById('react-page'));
