import React, { useState } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const CommentSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3}>
      <CommentForm />
    </Section>
  );
};

const CommentForm = () => {
  const [username, setUsername] = useState('');
  const [contents, setContents] = useState('');

  const submitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hi');
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
      <button>작성</button>
    </form>
  );
};

export default CommentSection;
