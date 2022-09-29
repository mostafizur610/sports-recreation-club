import React from 'react';
import './Accordion.css'

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