import React from 'react';
 
function Base({title,description,children}){
    return(
        <div className="main-component">
            <header>
                <h1 className ="heading">{title}</h1>
            </header>
            <main className="main-segment">
                <h2>{description}</h2>
                <div className="child-segment">
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Base