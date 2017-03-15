import React, { Component } from 'react'

import './PersonnageCard.css'

class PersonnageCard extends Component {

    render() {

        const { title, text, urlImg, url} = this.props
        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image">
                    <img src={ urlImg } height="340" style={ { maxwidth: 150 } } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="marvel-data">
                            <p>
                                <i className="material-icons">account_circle</i>
                            </p>
                            <h5>{ title }</h5>
                            <p>
                                <i className="material-icons">description</i>
                                <span>{ text }</span>
                            </p>
                            <p>

                                <span>
                                    <a href={ url } target="_blank">
                                        <i className="material-icons">link</i> Read more on the Marvel website
                                    </a>
                                </span>
                            </p>
                            <p>
                                <span>{ }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>




        )
    }

    /*   <div class="card sticky-action">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={ urlImg } />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        { title }
                        <i class="material-icons right">more_vert
                    </i>
                    </span>
                </div>
                <div class="card-action">
                    <a href="#">Share it</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        { title }
                        <i class="material-icons right">
                            close</i>
                        <p>{ text }</p>
                    </span>

                </div>
            </div>
    
    
    
    <div className="card" style={ { margin: 'auto' } }>
                     <div className="horizontal" >
                         <div className="col s12 m3 ">
                             <div className="card-image">
                                 <img src={ urlImg } />
 
                             </div>
                         </div>
                     </div>
 
 
                     <div className="col s12 m3 ">
                         <h3>
                             { title }
                         </h3>
                         <div className="card-content">
                             <p>{ text }</p>
                         </div>
                     </div>
                 </div>
 
                 <span className="card-title" style={ { fontSize: 20 } }>
                     { title }
                 </span>
                 <div className="card-stacked" />*/

}

export default PersonnageCard