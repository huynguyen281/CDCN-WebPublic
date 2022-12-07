import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Contact} from './features/Public/components/Contact/Contact';
import {MainPage} from './features/Public/components/MainPage/MainPage';
import {OurTeam} from './features/Public/components/OurTeam/OurTeam';
import {PublicPage} from './features/Public/PublicPage';

function App() {
  return (
    <div className="App">
		<Routes>
				<Route element={<PublicPage />}>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<MainPage />} />
					<Route path="/team" element={<OurTeam />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
		</Routes>
    </div>
  );
}

export default App;
