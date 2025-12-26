// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL - for global styles or small projects
// 2. MODULES - for individual components
// 3. INLINE - small components with minimal styling

import Button from "./Button";
import ButtonModule from "./ButtonModule/ButtonModule";

function App() {

    return(
        <>
            <Button/>
            <ButtonModule/>
        </>
    );
}

export default App
