import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.topbar}>
        <div
          style={{
            width: '1170px',
            height: '150px',
            backgroundColor: 'gray',
            borderWidth: '2px',
            borderColor: 'black',
            borderStyle: 'solid',
          }}
        />
      </div>
      <div className={styles.rowdetail}>
        <div className={styles.columndetail}>
          <div
            style={{
              width: '540px',
              height: '410px',
              backgroundColor: 'gray',
              borderWidth: '2px',
              borderColor: 'black',
              borderStyle: 'solid',
            }}
          />
          <div
            style={{
              width: '540px',
              height: '410px',
              backgroundColor: 'gray',
              borderWidth: '2px',
              borderColor: 'black',
              borderStyle: 'solid',
              marginTop: '30px',
            }}
          />
          <div />
        </div>
        <div
          style={{
            width: '600px',
            height: '850px',
            backgroundColor: 'gray',
            borderWidth: '2px',
            borderColor: 'black',
            borderStyle: 'solid',
            marginLeft: '30px',
          }}
        />
      </div>
    </>
  );
};

export default Home;
