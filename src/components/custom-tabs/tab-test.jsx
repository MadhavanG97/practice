import Tabs from "./tabs";
import './tabs.css';
function RandomComponent() {

    return <h1>some random component</h1>
}

export default function Tabtest() {

    const tabs = [
        {
            label: "Tab 1",
            content: <div>this is for tab 1</div>,
        },
         
        {
            label: "Tab 2",
            content: <div>this is for tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <RandomComponent />,
        },

    ];
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)

    }
    return <Tabs tabsContent={tabs} onChange={handleChange} />
}