// import react modules //
import React from "react";
// import project components //
import LinkComponent from "../../Components/LinkComponent";

class Error extends React.Component{

  render() {
    return (
      <div>
        ERROR 404
        <LinkComponent  pageRedirect={'/'} place={'error'} text={'Retourner sur la page d’accueil'} />
      </div>
    )
  }
}

export default Error