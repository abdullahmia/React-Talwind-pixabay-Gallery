import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
            <img src={image.webformatURL} className="w-full h-96" />
            <div className="px-6 py-4">
                <div className='font-semibold text-purple-500 mb-2 text-xl'>
                Photo by {image.user}
                </div>

                <ul>
                    <li><strong>Views: </strong>{ image.views }</li>
                    <li><strong>Downloads: </strong>{ image.downloads }</li>
                    <li><strong>Likes: </strong>{ image.likes }</li>
                </ul>

            </div>

            <div className="px-6 py-4">
                {tags.map(tag => (
                    <span className="inline-block bg-gray-200 rounded-full py-1 px-3 text-sm font-semibold text-gray-700 mr-2 mb-1 hover:bg-gray-900 hover:text-gray-100 transition">{tag}</span>
                ))}
                
            </div>

        </div>
    )
}

export default ImageCard
