const Message = ({ text, author = 'Anonim' }) => {
    return (
        <div>
            <h4>{text}</h4>
            <p>{author}</p>
        </div>
    );
};

export default Message;
