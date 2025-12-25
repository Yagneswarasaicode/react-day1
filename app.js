 const parent=React.createElement("div",
   {id:"parent"},
   [ React.createElement("div",
    {id:"child"},
    [ React.createElement("h1",{},"it is h1 tag"),React.createElement("h2",{},"it is h2 tag")]),

    React.createElement("div",
    {id:"child1"},
    [ React.createElement("h1",{},"it is h1 tag"),React.createElement("h2",{},"it is h2 tag")])]
)

 const element=React.createElement("h1",{id:"sai"},"hello yagnesh");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        

