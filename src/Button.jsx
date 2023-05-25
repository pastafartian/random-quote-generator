import './App.css'

// eslint-disable-next-line react/prop-types
export default function Button( {text} ) {

    return (
        <button className="btn btn-primary">
            {text}
        </button>
    )
}
