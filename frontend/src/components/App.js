import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

function App ()
{
    return (
        <DataProvider endpoint="api/lead/"
            render={data => <Table data={data} />} />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);