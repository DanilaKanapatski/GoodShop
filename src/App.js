import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import './App.css';
import { Loader, withPageWrapper } from "./components";

const MainPage = lazy(() => import('./pages/MainPage'))
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const GoodPage = lazy(() => import('./pages/GoodPage'));

const router = createBrowserRouter([
	{ path: '/', element: withPageWrapper(<MainPage />) },
	{ path: '/cart', element: withPageWrapper(<CartPage />) },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/registration', element: <RegistrationPage /> },
	{ path: '/category/:categoryType', element: withPageWrapper(<CategoryPage />) },
	{ path: '/category/:categoryType/:goodId', element: withPageWrapper(<GoodPage />) },
]);

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Suspense fallback={<Loader initial={true}/>}>
				<RouterProvider router={router} />
			</Suspense>
		</LocalizationProvider>
	);
}

export default App;
