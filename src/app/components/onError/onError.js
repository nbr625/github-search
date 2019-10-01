import React from "react"

import { ErrorMessageContainer, Title, Subtitle, ErrorMessage } from "./elements"

const OnError = ({ errMsg }) => (
  <ErrorMessageContainer>
    <Title>Looks like something went wrong...</Title>
    <Subtitle>Did you add your git token to the .env file?</Subtitle>
    {errMsg ? <ErrorMessage>{errMsg.message}</ErrorMessage> : null}
  </ErrorMessageContainer>
)

export default OnError
