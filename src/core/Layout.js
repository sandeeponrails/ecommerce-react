import React from 'react';
import Menu from './Menu'
const Layout = ({title="Title", description="Ecommerce app", className, children}) => {

    return(
        <div>
            <Menu />
            <div className="jumbotron">
                <div>{title}</div>
                <p>{description}</p>
            </div>
            <div className = {className}>{children}</div>
        </div>
    )
}
export default Layout;