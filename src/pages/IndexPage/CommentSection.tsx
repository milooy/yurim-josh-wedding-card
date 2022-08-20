import React, { useEffect, useState } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { formatDate } from 'utils/common';
import { Comment, createComment, fetchCommentList } from 'utils/firebase';

const CommentSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3}>
      <CommentForm />
      <CommentList />
    </Section>
  );
};

const CommentForm = () => {
  const [username, setUsername] = useState('');
  const [contents, setContents] = useState('');

  const submitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    createComment({
      username,
      contents,
    });
    clearForm();
  };

  const clearForm = () => {
    setUsername('');
    setContents('');
  };

  const handleUsername = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handleContents = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setContents(event.currentTarget.value);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="username">이름: </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="contents">내용: </label>
        <textarea
          id="contents"
          cols={30}
          rows={10}
          value={contents}
          onChange={handleContents}
        ></textarea>
      </div>
      <button disabled={username === '' || contents === ''}>작성</button>
    </form>
  );
};

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchCommentList().then((commentItems: Comment[]) => {
      setComments(commentItems);
    });
  }, []);

  return (
    <ul>
      {comments &&
        comments.map((comment, index) => (
          <li key={index}>
            <span>{comment.username}</span>
            <span>{comment.contents}</span>
            <span>{formatDate(comment.date)}</span>
          </li>
        ))}
    </ul>
  );
};

export default CommentSection;
