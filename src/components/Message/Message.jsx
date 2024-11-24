import { FcAbout } from "react-icons/fc";
import css from './Message.module.css';
const Message = ({ text, author = 'Anonim'}) => {
    return (
        <div>
            <h4>{text}
                <FcAbout className={css.icon} />
            </h4>
            <p>{author}</p>
        </div>
    );
};

export default Message;
