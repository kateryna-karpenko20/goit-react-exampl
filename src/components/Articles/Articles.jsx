import React from 'react';

const Articles = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>; // Graceful fallback for empty data
  }

  return (
    <div>
      <ul>
        {articles.map(post => (
          <li key={post.objectID}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.title || "Untitled Article"} {/* Handle missing titles */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
