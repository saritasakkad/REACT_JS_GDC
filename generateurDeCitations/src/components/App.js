import React from 'react';
import Citation from './Citation';
import citations from '../citations';


class App extends React.Component {

    state = {

       // citation: 'hephep',
       // auteur: 'akkad'

    };

    componentWillMount() {
        this.genererCitation();
    }

    genererCitation = event => {

        // on transforme les citation en Array
        const keyArray = Object.keys(citations);
        // une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if (this.state.citation === citations[randomKey].citation) {
            this.genererCitation();
            return;
        }
        this.setState(citations[randomKey]);
        
    };

    render() {

        return (
            
            <div>
             <Citation details={this.state} />
             <button onClick={e => this.genererCitation(e)} >Une autrecitation !</button>
             </div>

        )

    }


}

export default App;