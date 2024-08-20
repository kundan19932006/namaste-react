/*<div id="parent">
        <div id="child">
            <h1>I am in h1</h1>
            <h2>I am in h2</h2> 
        </div>
</div>
<div id="parent">
        <div id="child">
            <h1>I am in h1</h1>
            <h2>I am in h2</h2> 
        </div>
</div>
*/
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am in h1"),React.createElement("h2",{},"i am in h2")]
),React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am in h1"),React.createElement("h2",{},"i am in h2")]
)]);
    console.log(parent);
     const root=ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent);
