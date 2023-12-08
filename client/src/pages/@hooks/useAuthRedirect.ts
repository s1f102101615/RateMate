import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createAuth } from 'src/utils/firebase';
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
      // logout();
      // alert('メールアドレスの認証が完了していません。');
      // 未認証ユーザーはlogout()をしないと不具合が起きる可能性あり
      // 普通に利用していたら未認証ユーザーはこのページにたどり着くことはないのでいったんコメントアウト
      router.push('/');
      return;
    }
  }, [user, router]);
};
export default useAuthRedirect;
