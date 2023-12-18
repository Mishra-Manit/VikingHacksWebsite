'use client'

import React from 'react';
import { Widget } from '@typeform/embed-react'

const ComingSoon: React.FC = () => {
  return (
    <div>
      <h1>Coming Soon</h1>
      <p>Stay tuned for updates!</p>
      <Widget id="01HHXVTFJX8GCDA5SXNYKZE620" style={{ width: '100%', height: '600px' }} className="my-form" />
    </div>
  );
};

export default ComingSoon;
