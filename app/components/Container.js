import React, { useEffect } from "react"

function Container(props) {
  // return <div className={"container py-md-5 " + (props.wide ? ' ':'container--narrow')}>{props.children}</div>
  return <div className={props.wide && props.home ? "container-fluid" : props.wide ? "container py-md-5" : "container py-md-5  container--narrow"}>{props.children}</div>
}

export default Container
