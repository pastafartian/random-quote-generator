/* eslint-disable react/prop-types */
import './App.css'


export default function Card( { quote }) {

    return (
        <div>
            <blockquote id="text">&quot;{quote.content}&quot;</blockquote>
            <cite id="author">-{quote.author}</cite>
        </div>
    );
}
