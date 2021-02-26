import React from 'react';
import TableChart from './TableChart';
import BootstrapDatatable from './BootstrapDatatable';
import datas from './datas.json';

function App() {
    return(
        <div className="App">
            <TableChart />
            
            <BootstrapDatatable datas={datas} />

        </div>
    );
}

export default App;