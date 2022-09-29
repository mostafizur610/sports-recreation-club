import React from 'react';
import './Accordion.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Accordion = () => {
    return (
        <div className='frequent-question'>
            <div>
                <h2>Q.01=> How does React work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2>Q.02=> Difference between props and states?</h2>
                <p><strong>PROPS:</strong> <br /> The Data is passed from one component to another.It is Immutable (cannot be modified).Props are read-only. <br /><strong>STATE:</strong> <br />	The Data is passed within the component only.It is Mutable ( can be modified).	State is both read and write.</p>
            </div>
            <div>
                <h2>Q.03=> With useEffect without loading data and what is it used for?</h2>
                <p>
                    With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.

                    The goal of this comprehensive article is to gather information about the underlying concepts of useEffect and, in addition, to provide learnings from my own experience with the useEffect Hook.</p>
            </div>
        </div>

    );
};

export default Accordion;



















{/* <div>
            <div className='accordion accordion-flush' id="accordionFlushExample">
                <div className='accordion-item'>
                    <h2 className='accordion-header' id="flush-headingOne">
                        <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className='accordion-collapse collapse' aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div> */}