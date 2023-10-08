import type { TaskModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [tasks, setTasks] = useState<TaskModel[]>();
  const [label, setLabel] = useState('');
  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
  const fetchTasks = async () => {
    const tasks = await apiClient.tasks.$get().catch(returnNull);

    if (tasks !== null) setTasks(tasks);
  };
  const createTask = async (e: FormEvent) => {
    e.preventDefault();
    if (!label) return;

    await apiClient.tasks.post({ body: { label } }).catch(returnNull);
    setLabel('');
    await fetchTasks();
  };
  const toggleDone = async (task: TaskModel) => {
    await apiClient.tasks
      ._taskId(task.id)
      .patch({ body: { done: !task.done } })
      .catch(returnNull);
    await fetchTasks();
  };
  const deleteTask = async (task: TaskModel) => {
    await apiClient.tasks._taskId(task.id).delete().catch(returnNull);
    await fetchTasks();
  };

  useEffect(() => {
    if (!user) return;

    fetchTasks();
  }, [user]);

  if (!tasks || !user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.head}>
        <div className={styles.title} style={{}}>
          熱中した過去に
          <br />
          無駄な時間なんてない
          <br />
          俺はゲーム以外でも戦える
        </div>
      </div>
      <div className={styles.detail}>
        <div style={{ fontSize: 30, fontWeight: 'bold' }}>登録できるゲーム</div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30, marginTop: 30 }}>
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30, marginTop: 30 }}>
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
        </div>
      </div>
      {/* メールアドレスとパスワードを入力する登録 */}
      <div className={styles.submitarea}>無料登録はこちら</div>

      <form style={{ textAlign: 'center', marginTop: '80px' }} onSubmit={createTask}>
        <input value={label} type="text" onChange={inputLabel} />
        <input type="submit" value="ADD" />
      </form>
      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.done} onChange={() => toggleDone(task)} />
              <span>{task.label}</span>
            </label>
            <input
              type="button"
              value="DELETE"
              className={styles.deleteBtn}
              onClick={() => deleteTask(task)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
