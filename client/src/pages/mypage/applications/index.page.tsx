import { useAtom } from 'jotai';
import { userAtom } from '../../../atoms/user';
import ApplicationsDetail from '../../@components/ApplicationsDetail/ApplicationsDetail';
import { BasicHeaderLogined } from '../../@components/BasicHeaderLogined/BasicHeaderLogined';
import Tabmenu from '../../@components/Tabmenu/Tabmenu';
import styles from './index.module.css';

function ApplicationsMyPage() {
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
        <ApplicationsDetail />
      </div>
    </div>
  );
}

export default ApplicationsMyPage;
