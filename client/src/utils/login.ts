import { GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
