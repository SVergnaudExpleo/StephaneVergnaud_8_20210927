import { Children, createContext } from "react"
import React from "react"
 
 const ScreenSizeContext = createContext()
 
 class ScrennSize extends React.Component {
    constructor({ children }){
        super(children)
        this.setState((state,props) => ({
            
        }))

    }
    
    render() {
        return (
            <ScreenSizeContext>
                {Children}
            </ScreenSizeContext>
        )
    }
}

export {ScreenSizeContext, ScrennSize }