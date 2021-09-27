import React from 'react'
import styled from 'styled-components'

const WraperHeader = styled.div`
    background-color: blue;
`

class Header extends React.Component {
    render() {
        return (
            <WraperHeader>Bonjour</WraperHeader>
        )
    }
}

export default Header