
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css'
import { UserList } from "./components/UserList";



function App() {
    return (
        <>
            <Header />

            <main className="main">
                <section class="card users-container">
                    <Search />

                    <UserList />

                </section>

            </main>

            <Footer />
        </>
    );
}

export default App;
