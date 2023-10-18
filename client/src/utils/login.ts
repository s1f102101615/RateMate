import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
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

export const loginWithEmail = async (email: string, password: string) => {
  await signInWithEmailAndPassword(createAuth(), email, password).catch(returnNull);
};

export const sendEmailVerification = async (email: string) => {
  const actionCodeSettings = {
    url: 'http://localhost:3000/home/', // リンクを踏んだ後のリダイレクト先URL
    handleCodeInApp: true, // アプリ内でリンクを処理する場合はtrueに設定
  };
  await sendSignInLinkToEmail(email, actionCodeSettings).catch(returnNull);
};

// emailとpasswordからユーザー登録
export const createUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(createAuth(), email, password).catch(returnNull);
};
