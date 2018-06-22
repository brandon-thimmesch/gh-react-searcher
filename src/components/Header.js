import React from 'react';
import Search from './Search';

const Header = () => (
    <header>
        <nav class="navbar navbar-dark bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Search />
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;
