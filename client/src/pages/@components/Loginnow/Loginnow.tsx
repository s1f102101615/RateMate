import { useEffect } from 'react';
import { BasicHeader } from '../BasicHeader/BasicHeader';
import styles from './Loginnow.module.css';

export type LoginnowProps = {
  registered: boolean;
  account: boolean;
};

const Loginnow = (props: LoginnowProps) => {
  // eslint-disable-next-line complexity
  useEffect(() => {
    if (props.account) {
      const line = document.getElementById('line1');
      const number = document.getElementById('number2');
      if (line) {
        // 一秒待ってから実行
        setTimeout(() => {
          line.style.backgroundPosition = 'left top';
        }, 1);
        setTimeout(() => {
          number?.classList.remove(styles.number);
          number?.classList.add(styles.active);
        }, 680);
      }
    } else if (props.registered) {
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      const number1 = document.getElementById('number2');
      const number2 = document.getElementById('number3');
      if (line1 && line2) {
        line1.style.backgroundPosition = 'left bottom';
        number1?.classList.remove(styles.number);
        number1?.classList.add(styles.active);
        setTimeout(() => {
          line2.style.backgroundPosition = 'left top';
        }, 1);
        setTimeout(() => {
          number2?.classList.remove(styles.number);
          number2?.classList.add(styles.active);
        }, 680);
      }
    }
  });

  return (
    <>
      <BasicHeader user={null} />
      <div style={{ paddingTop: 60 }}>
        <div className={styles.stepbar}>
          <ul>
            <li className={styles.li}>
              <div className={styles.active}>1</div>
              <div>セットアップ</div>
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number2">
                2
              </div>
              <div>個人情報</div>
              <div id="line1" className={styles.line} />
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number3">
                3
              </div>
              <div>仮登録</div>
              <div id="line2" className={styles.line} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Loginnow;
