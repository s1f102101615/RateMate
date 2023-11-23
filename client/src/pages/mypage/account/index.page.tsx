import { useAtom } from 'jotai';
import Tabmenu from 'src/pages/@components/Tabmenu/Tabmenu';
import { userAtom } from '../../../atoms/user';
import AccountDetail from '../../@components/AccountDetail/AccountDetail';
import { BasicHeaderLogined } from '../../@components/BasicHeaderLogined/BasicHeaderLogined';
import styles from './index.module.css';

function AccountMyPage() {
  const [user] = useAtom(userAtom);
  const name = user?.displayName?.split(' ');
  const firstName = name?.[1];
  const lastName = name?.[0];
  console.log(`名字: ${lastName}`);
  console.log(`名前: ${firstName}`);
  return (
    <div>
      <BasicHeaderLogined user={user} />
      <div className={styles.container}>
        {/* ここにdivでタブを作りたい */}
        <Tabmenu />
        <AccountDetail />
      </div>
    </div>
  );
}

export default AccountMyPage;
