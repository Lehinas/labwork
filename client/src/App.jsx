import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import "./App.css"
import {Outlet, useLocation, useNavigate} from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import AuthService from "./services/AuthService"
import {setUser} from "./store/userSlice"

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()
	const check = async () => {
		try {
			const response = await AuthService.checkAuth()
			localStorage.setItem("token", response.data.tokens.accessToken)
			dispatch(setUser(response.data.user))
			navigate("/main")
		} catch (e) {
			if (e.response && (e.response.status === 400 || e.response.status === 401)) {
				if (location.pathname !== "/login" && location.pathname !== "/registration") {
					navigate("/login")
				}
			}
		}
	}

	useEffect(() => {
		if (!isAuth) {
			check()
		}
	}, [isAuth, navigate, location.pathname])
	return (
		<div className="App">
			<Navbar />
			<Outlet/>
			<Footer/>
		</div>
	)
}

export default App
