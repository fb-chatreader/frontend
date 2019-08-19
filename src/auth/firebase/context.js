import React, { useState } from 'react';

const FirebaseContext = React.createContext(null);

export default withFirsebase = Component => props => {
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
}
