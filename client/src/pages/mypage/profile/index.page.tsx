import { useAtom } from 'jotai';
import ProfileDetail from 'src/pages/@components/ProfileDetail/ProfileDetail';
import Tabmenu from 'src/pages/@components/Tabmenu/Tabmenu';
import { userAtom } from '../../../atoms/user';
import { BasicHeaderLogined } from '../../@components/BasicHeaderLogined/BasicHeaderLogined';
import styles from './index.module.css';

function ProfielMyPage() {
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
        <ProfileDetail />
      </div>
    </div>
  );
}

export default ProfielMyPage;
