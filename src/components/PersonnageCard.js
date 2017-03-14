import React, { Component } from 'react'

import './NewsCard.css'

class PersonnageCard extends Component {

    render() {

        const { title, text, urlImg} = this.props
        return (
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


        )
    }/*<span className="card-title" style={ { fontSize: 20 } }>
                                { title }
                            </span>
    <div className="card-stacked">*/

}

export default PersonnageCard