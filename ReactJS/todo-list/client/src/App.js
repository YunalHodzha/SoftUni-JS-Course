import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import TodoList from "./components/TodoList";



function App() {


    return (
        <div>
            <>
                <Header />


                <main className="main">
                    {/* Section container */}

                    {/* Loading spinner - show the load spinner when fetching the data from the server*/}
                    {/* <div className="loading-container">
                <div className="loading-spinner">
                  <span className="loading-spinner-text">Loading</span>
                </div>
              </div> */}
                    {/* Todo list table */}
                    <TodoList />

                </main>


                <Footer />
            </>

        </div>
    );
}

export default App;
