import React, { useState } from 'react';
import '../../styles/p.css'
import ProgressBar from '../../components/practice/progressBar';

function Progress() {

  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        {show && <ProgressBar />}
        <button onClick={() => setShow(!show)}>toggle</button>
      </div>
    </>
  );
}

export default Progress;