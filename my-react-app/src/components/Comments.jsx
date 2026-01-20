import { useEffect, useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=30')
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center p-4 text-gray-600">Loading comments...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">User Comments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 capitalize line-clamp-1" title={comment.name}>
                            {comment.name}
                        </h3>
                        <p className="text-sm text-indigo-600 mb-4 font-medium">{comment.email}</p>
                        <p className="text-gray-600 text-sm leading-relaxed grow">{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
