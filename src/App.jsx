import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../src/styles/main.scss';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Performance from './pages/Performance';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Transactions from './pages/Transactions';

function App() {
	return (
		<Router>
			<div className="App">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/news" element={<News />} />
					<Route path="/performance" element={<Performance />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/support" element={<Support />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
