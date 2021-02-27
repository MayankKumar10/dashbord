import React from 'react';
import TableChart from './TableChart';
import BootstrapDatatable from './BootstrapDatatable';
import TileCard from './TileCard';
import './App.css';

function App() {
    return(
        <div className="App">
            <TableChart />

            
            <div className="titleCard">
            <TileCard />
            </div>
            
            <div className="dataTable">
            <BootstrapDatatable />
            </div>
            

        </div>
    );
}

export default App;