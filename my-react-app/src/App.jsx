// props =  read-only properties that are shared betweeen components.
//          A parent component can send data to a child component.            
//          <Compontent key=value /> 

import Student from './Student'

function App() {

    return(
        <>
            <Student name='Spongebob' age={30} isStudent={true}/>
            <Student name='Patrick' age={42} isStudent={false}/>
            <Student name='Squidward' age={50} isStudent={false}/>
            <Student name='Sandy' age={18} isStudent={true}/>
            <Student/>
            <Student name="Larry"/>
        </>
    );
}

export default App
