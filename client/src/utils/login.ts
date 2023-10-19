import type { User } from 'firebase/auth';
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from './returnNull';

export const loginWithGitHub = async () => {
  const ghProvider = new GithubAuthProvider();
  ghProvider.addScope('read:user');

  await signInWithPopup(createAuth(), ghProvider).catch(returnNull);
};

export const logout = async () => {
  await createAuth().signOut();
};

// eslint-disable-next-line complexity
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredencial = await signInWithEmailAndPassword(createAuth(), email, password);
    const isNotVerified = !userCredencial.user.emailVerified;
    if (isNotVerified) {
      console.log('メールを送信しました');
      await reSendVerifyMail(userCredencial.user);
    }
    return;
  } catch (error) {
    switch ((error as { code: string }).code) {
      case 'auth/user-not-found':
        console.log('ユーザが見つかりません');
        // ユーザが存在しなかったときの処理
        break;
      case 'auth/invalid-email':
        console.log('メールアドレスかパスワードが間違っています');
        // パスワードが合致しない、ユーザが存在しなかったときの処理
        break;
      case 'auth/wrong-password':
        console.log('メールアドレスかパスワードが間違っています');
        // パスワードが合致しない、ユーザが存在しなかったときの処理
        break;
      default:
        // その他のエラー時の処理
        console.log('エラーが発生しました');
    }
    return;
  }
};

// emailとpasswordからユーザー登録
export const createUser = async (email: string, password: string, displayName: string) => {
  const userCredencial = await createUserWithEmailAndPassword(createAuth(), email, password);
  // ユーザーの表示名を設定する
  const user = createAuth().currentUser;
  if (user) {
    await updateProfile(user, { displayName });
  }
  const isNotVerified = !userCredencial.user.emailVerified;
  if (isNotVerified) {
    console.log('メールを送信しました');
    await reSendVerifyMail(userCredencial.user);
  }
};

//確認メール送信
const reSendVerifyMail = async (user: User) => {
  try {
    await sendEmailVerification(user);
    return;
  } catch (error) {
    switch ((error as { code: string }).code) {
      case 'auth/too-many-requests':
        // 1分以内は再送できずこのエラーになる.その時の処理.
        break;
      default:
      // その他のメール送信失敗時の処理
    }
    return;
  }
};
