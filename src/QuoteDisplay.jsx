/* eslint-disable react/prop-types */
import './App.css'

export default function QuoteDisplay({ quote, author }) {

    return (
        <div className="quote">
            <p>&quot;{quote}&quot;</p>
            <p>-{author}</p>
        </div>
    );
}
