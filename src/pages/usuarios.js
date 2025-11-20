import React from 'react';
import NavbarPrincipal  from './components/navbar';
import SideMenu from './components/sidemenu';
import ListaUsuarios from './components/lista_usuarios';

function ListadoUsuarios() {
    return (
        <div>
            <NavbarPrincipal/>
            <SideMenu/>
            <ListaUsuarios/>    
        </div>
    );
}
export default ListadoUsuarios;