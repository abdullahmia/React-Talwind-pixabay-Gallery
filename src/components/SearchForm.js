import React, {useState} from 'react'

const SearchForm = ({searchText}) => {
    const [text, setText] = useState('');

    const fromSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };


    return (
        <div className="max-w-sm rounded shadow-sm overflow-hidden my-10 mx-auto">
            <form onSubmit={fromSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} placeholder="Search.." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    <button className="flex-shrink-0 bg-gray-900 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
