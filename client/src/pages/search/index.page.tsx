import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <BasicHeader user={user} />
      {/* マイページ */}
      {/* 偏差値やオファーなどが見える */}
    </>
  );
};

export default Home;
