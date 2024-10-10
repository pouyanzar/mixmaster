import { useRouteError } from "react-router-dom"

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error.message)
  return (
    // <h2>{error.message}</h2>
    <h2>There as an error...</h2>
  )
}

export default SinglePageError