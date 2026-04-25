import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Search, Filter } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchAppData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/posts');
                const result = await response.json();
                setData(result.posts);
                setFilteredData(result.posts);
                setLoading(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setLoading(false);
            }
        };

        fetchAppData();
    }, [user, navigate]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        const filtered = data.filter(item => 
            item.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const findSpecificPost = (id) => {
        const post = data.find(p => p.id === id);
        alert(`Found Post: ${post?.title}`);
    };

    if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-2xl">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <LayoutDashboard className="text-blue-500" />
                    <h1 className="text-xl font-bold">Guru Dashboard</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-gray-400">Welcome, <b className="text-white">{user?.username}</b></span>
                    <button 
                        onClick={logout}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                    >
                        <LogOut size={18} />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </nav>

            <main className="p-6 max-w-7xl mx-auto">
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <h2 className="text-2xl font-bold text-white">Your Feed</h2>
                    
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Filter by title (Filter API)..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 transition"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map(post => (
                        <div key={post.id} className="bg-gray-800 border border-gray-700 p-6 rounded-2xl hover:border-blue-500 transition-all hover:shadow-lg group">
                            <div className="text-xs font-mono text-blue-400 mb-2">POST ID: {post.id}</div>
                            <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.body}</p>
                            <button 
                                onClick={() => findSpecificPost(post.id)}
                                className="text-blue-500 text-sm font-medium hover:text-blue-400 transition"
                            >
                                Find Details →
                            </button>
                        </div>
                    ))}
                    
                    {filteredData.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-500 italic">
                            No posts found matching your search.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
