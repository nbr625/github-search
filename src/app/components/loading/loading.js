import React from "react"
import { BarLoader } from "react-spinners"

import { LoadingIndicator } from "./elements"

const Loading = () => (
  <LoadingIndicator>
    <BarLoader color="#363636" />
  </LoadingIndicator>
)

export default Loading
