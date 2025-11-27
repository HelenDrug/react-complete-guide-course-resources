import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/Search/SearchableList.jsx";
import {PLACES} from "./data/places.js";
import Place from "./components/Place.jsx";

function App() {
    return <main>
        <section>
            <h2>Why work with us?</h2>
            <Accordion classname={"accordion"}>
                <Accordion.Item id={"experience"} className={"accordion-item"}>
                    <Accordion.Title className={"accordion-item-title"}>
                        We got 20 years of experience
                    </Accordion.Title>
                    <Accordion.Content className={"accordion-item-content"}>
                        <article>
                            <p>You cannot go wrong with us!</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
                <Accordion.Item id={"local"} className={"accordion-item"}>
                    <Accordion.Title className={"accordion-item-title"}>
                        We are working with local guides
                    </Accordion.Title>
                    <Accordion.Content className={"accordion-item-content"}>
                        <article>
                            <p>We are mot doing it alone from our office</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </section>
        <section>
            <SearchableList items={PLACES}>
                {(item) => <Place item={item}/>}
            </SearchableList>
        </section>
    </main>;
}

export default App;
