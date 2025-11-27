import React from 'react';
import NavbarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Profile from './components/profile';

function Perfil() {
    return (
        <div>
            <NavbarPrincipal />
            <SideMenu />
            <Profile />
        </div>
    );
}

export default Perfil;