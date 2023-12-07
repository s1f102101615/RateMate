import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createAuth } from 'src/utils/firebase';
import { logout } from 'src/utils/login';
import { userAtom } from '../../atoms/user';

//ログインしないと見れないページにログインせずにアクセスしたらTopページに戻されるようにする

const useAuthRedirect = (): void => {
  const [user] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (user && createAuth().currentUser?.emailVerified === true) {
      console.log(createAuth().currentUser?.emailVerified);
      console.log('メール認証済み');
      return;
    } else {
      console.log(createAuth().currentUser?.emailVerified);
      alert('メールアドレスの認証が完了していません。');
      logout();
      router.push('/');
      return;
    }
  }, [user, router]);
};
export default useAuthRedirect;
