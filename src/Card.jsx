/* eslint-disable react/prop-types */
import './App.css'


export default function Card( { content, author }) {

    return (
        <div>
            <blockquote id="text">&quot;{content}&quot;</blockquote>
            <cite id="author">-{author}</cite>
        </div>
    );
}
