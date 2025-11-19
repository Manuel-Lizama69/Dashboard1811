import React from 'react';
import NavbarPrincipal  from './components/navbar';
import SideMenu from './components/sidemenu';
import Kpis from './components/kpis';

function Dashboard(){
    return(
        <div>
            <NavbarPrincipal/>
            <SideMenu/>
            <Kpis/>
        </div>
    );
}

export default Dashboard;