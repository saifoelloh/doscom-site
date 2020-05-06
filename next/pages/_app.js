import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import { Provider } from "react-redux"

import store from "../redux/store"

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
