import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
    return <main>
        <section>
            <h2>Why work with us?</h2>
            <Accordion classname={"accordion"}>
                <Accordion.Item id={"experience"} className={"accordion-item"} title={"We got 20 years of experience"}>
                    <article>
                        <p>You cannot go wrong with us!</p>
                    </article>
                </Accordion.Item>
                <Accordion.Item id={"local"} className={"accordion-item"} title={"We are working with local guides"}>
                    <article>
                        <p>We are mot doing it alone from our office</p>
                    </article>
                </Accordion.Item>
            </Accordion>
        </section>
    </main>;
}

export default App;
