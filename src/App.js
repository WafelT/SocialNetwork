/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from './components/Header';
import Nav from  './components/Nav';
import Profile from './components/Profile';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Profile />
        </div>
    );
}

export default App;
