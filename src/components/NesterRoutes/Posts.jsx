import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostByUserId } from '../../services/api';

const Posts = () => {
    const { userId } = useParams(); // Отримання userId через деструктуризацію
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Стан завантаження
    const [isError, setIsError] = useState(false); // Стан помилки

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true); // Початок завантаження
            setIsError(false); // Скидаємо помилки
            try {
                const data = await fetchPostByUserId(userId); // Передаємо userId
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setIsError(true);
            } finally {
                setIsLoading(false); // Завершення завантаження
            }
        };
        getData();
    }, [userId]);

    // Рендеринг залежно від стану
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading posts. Please try again.</p>;
    if (posts.length === 0) return <p>No posts found for this user.</p>;

    return (
        <div>
            <h2>Posts by User {userId}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
