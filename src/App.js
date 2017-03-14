/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PersonnageCard from './components/PersonnageCard'

//import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Marvel App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS, MARVEL_API_KEY } from './utils/api'

//components
class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            marvel: undefined,
            personnage: ''
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchPersonnage }>

                            <button type="submit" className="waves-effect waves-light btn">
                                Get some marvel!
                            </button>

                        </form>

                        <input type='text' value={ this.state.personnage } onChange={ this.handleChange } />

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        { this.displayMarvel() }
                    </div>
                </div>
            </div>
        )
    }

    handleChange = ( event ) => {
        this.setState( {
            personnage: event.target.value
        })
    }

    //method triggered by onSubmit event of the form or by onClick event of the "Get some marvel!" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchPersonnage = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const marvel = await get( ENDPOINTS.MARVEL_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                apikey: MARVEL_API_KEY,
                name: this.state.personnage
            })

            console.log( marvel )

            this.setState( {
                marvel: marvel
            })

        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received marvel object
    displayMarvel = () => {
        if ( this.state.marvel ) {
            const characters = this.state.marvel.data.results

            return characters.map(
                function ( character ) {
                    return <PersonnageCard key={ character.name }
                        title={ character.name }
                        text={ character.description }
                        urlImg={ character.thumbnail.path + "/portrait_xlarge." + character.thumbnail.extension }


                        />
                }
            )
        }



        return null
    }

}

export default App
