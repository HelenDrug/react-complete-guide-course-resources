import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
    return <main>
        <section>
            <h2>Why work with us?</h2>
            <Accordion classname={"accordion"}>
                <Accordion.Item className={"accordion-item"}>
                    <Accordion.Title id={"experience"} className={"accordion-item-title"}>
                        We got 20 years of experience
                    </Accordion.Title>
                    <Accordion.Content id={"experience"} className={"accordion-item-content"}>
                        <article>
                            <p>You cannot go wrong with us!</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
                <Accordion.Item className={"accordion-item"}>
                    <Accordion.Title id={"local"} className={"accordion-item-title"}>
                        We are working with local guides
                    </Accordion.Title>
                    <Accordion.Content id={"local"} className={"accordion-item-content"}>
                        <article>
                            <p>We are mot doing it alone from our office</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </section>
    </main>;
}

export default App;
