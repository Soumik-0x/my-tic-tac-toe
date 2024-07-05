import React from 'react';
import '../styles/AuthorInfo.css';

const AuthorInfo = () => {
  return (
    <div className="author-info">
      <h2>Contact Information</h2>
      <p><strong>Name:</strong>Soumik Sadhu</p>
      <p><strong>Email:</strong><a href="mailto:itsmesoumiksadhu@gmail.com"> Send email</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Soumik-0x">Soumik-0x</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile">Soumik Sadhu</a></p>
      <p><strong>X.com:</strong> <a href="https://x.com/Sadhu_Soumik"> Soumik Sadhu</a></p>
    </div>
  );
};

export default AuthorInfo;
