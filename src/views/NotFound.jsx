import { useState, useEffect } from 'react';

const NotFound = () => {
  const [ct, setCt] = useState(5);
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    if (ct === 0) window.location.href = '/';
    // 清楚定时器
    doct();
    return () => {
      clearInterval(counter);
    };
  }, [ct]);

  const doct = () => {
    const _counter = setInterval(() => setCt(ct - 1), 1000);
    setCounter(_counter);
  };
  return (
    <div>
      <h1>NotFound</h1>
      <div> {ct}秒后即将跳转到首页 </div>
    </div>
  );
};

export default NotFound;
