import React, { useRef, useState } from 'react';
import styles from './Comment.module.scss';
import Input from '../../element/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentRequestAction } from '../../../store/actions/post';
import { BsSend, BsFillPersonFill } from "react-icons/bs";
import { RootState } from '../../../store/reducers';
import { IPost, IComment } from '../PostCard/PostCard';

const Comment = ({ post } : { post: IPost }) => {
    const inputRef = useRef(null);
    const [comment, setComment] = useState('');
    const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value);
    };

    const { user } = useSelector((state : RootState) => state.auth);
    const dispatch = useDispatch();
    const onClickComment = () => {
        if (!comment.replace(/\s/g, "")) return;

        //TODO: 댓글 추가 API 완료 시 맞추기
        const commentObj = {
            postid: post.id,
            userid: user.userid,
            comment
        }
        dispatch(addCommentRequestAction(commentObj));
        setComment('');
    };

    return (
        <div className={styles.comments}>
            <p className={styles.length}>{post.comments.length}개의 댓글이 있습니다.</p>
            <div className={styles.form}>
                <Input type="text" placeholder="댓글을 입력하세요." varient="primary" ref={inputRef} value={comment} onChange={onChangeForm} />
                <button onClick={onClickComment}>
                    <BsSend />
                </button>
            </div>
            <ul>
                {post.comments.map((comment: IComment) => (
                    <li key={comment.id} className={styles.list}>
                        <div className={styles.img}>
                            {post.user.profileImagePath ? <img src={post.user.profileImagePath} alt="profile" /> : <BsFillPersonFill />}
                        </div>
                        <div className={styles.content}>
                            <p className={styles.name}>{comment.username}</p>
                            <p className={styles.text}>
                                {comment.comment}
                                <span className={styles.date}>{comment.createAt}</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
            
    );
};

export default Comment;