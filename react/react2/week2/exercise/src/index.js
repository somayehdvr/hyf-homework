import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoPage } from './todosPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><TodoPage /><App /></>);

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={Home} />
                    <Route path='*' element={<h1>not found</h1>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

function Home() {
    return (
        <>
        home
        </>
    )
}