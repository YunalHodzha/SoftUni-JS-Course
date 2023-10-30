import * as userService from "./services/userService";
import { useEffect, useState } from 'react';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css'
import { UserList } from "./components/UserList";



function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => {
                setUsers(users);
                console.log(users);
            })
            .catch(err => {
                console.log('Error' + err);
            })
    }, []);

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />

                </section>

            </main>

            <Footer />
        </>
    );
}

export default App;
