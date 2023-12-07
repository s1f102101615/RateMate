import { useAtom } from 'jotai';
import { userAtom } from '../../../atoms/user';
import { BasicHeaderLogined } from '../../@components/BasicHeaderLogined/BasicHeaderLogined';
import ExperienceDetail from '../../@components/ExperienceDetail/ExperienceDetail';
import Tabmenu from '../../@components/Tabmenu/Tabmenu';
import styles from './index.module.css';

function ExperienceMyPage() {
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
        <ExperienceDetail />
      </div>
    </div>
  );
}

export default ExperienceMyPage;
