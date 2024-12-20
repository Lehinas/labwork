import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App"
import About from "./pages/About/About"
import Auth from "./pages/Auth/Auth"
import Main from "./pages/Main/Main"
import News from "./pages/News/News"
import Shop from "./pages/Shop/Shop"

import {store} from "./store/store"


const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/registration",
				element: <Auth type={"reg"}/>
			},
			{
				path: "/login",
				element: <Auth type={"login"}/>
			},
			{
				path: "/main",
				element: <Main/>
			},
			{
				path: "/shop",
				element: <Shop/>
			},
			{
				path: "/news",
				element: <News/>
			},
			{
				path: "/about",
				element: <About/>
			},
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<RouterProvider router={router}/>
	</Provider>
)

