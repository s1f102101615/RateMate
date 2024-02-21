import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { createAuth } from 'src/utils/firebase';
import { logout } from 'src/utils/login';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  console.log(createAuth().currentUser?.emailVerified);
  if (user && createAuth().currentUser?.emailVerified === true) {
    router.push('/home');
    return null;
  }
  if (createAuth().currentUser?.emailVerified === false) {
    logout();
    // alert('メールアドレスの認証が完了していません。');
    // アラートを表示すると２回表示されてしまう(おそらくlogout処理のせい)
    // メッセージは表示したい為変わりがあれば採用したい
    // 認証してなかったら認証してくださいと書いたページに飛ばしてそこから再度メールを送れるようにする案あり
    return null;
  }

  return (
    <>
      <BasicHeader user={user} />
      {/* 画像とモチベーティブな言葉のhead */}
      <div className={styles.head}>
        <img src="/images/progame.jpg" alt="My Image" width="100%" />

        {/* <div className={styles.title} style={{}}>
          熱中した過去に
          <br />
          無駄な時間なんてない
          <br />
          俺はゲーム以外でも戦える
        </div> */}
      </div>
      {/* <div className={styles.pagedetail}>
        <span style={{ fontSize: 45, fontWeight: '600', marginBottom: 15, color: 'green' }}>
          Gamers新卒とは？ <br />
        </span>
        <div style={{ display: 'inline-block' }}>
          あなたの<b>ゲームのレート</b>や実績に基づいて、企業からオファーが届くサイトです。
          <br />
          自信のあるゲームのレートを登録して、オファーを受け取りましょう。
        </div>
        <div style={{ height: 75, marginTop: 80 }}>
          <a href="" className={styles.yellow}>
            新規登録はこちらから
          </a>
        </div>
        <div style={{ fontSize: 20 }}>およそ3分程度で作成することが出来ます。</div>
      </div> */}
      <div className={styles.pagedetail}>
        <div style={{ display: 'inline-block', marginTop: '35px', fontWeight: 570 }}>
          あなたの
          <b>
            <span style={{ color: 'green' }}>ゲームのレート</span>
          </b>
          や実績に基づいて、企業からオファーが届くサイトです。
          <br />
          自信のあるゲームのレートを登録して、オファーを受け取りましょう。
        </div>
      </div>
      <div className={styles.detail}>
        <div style={{ fontSize: 40, fontWeight: 'bold', color: 'green' }} className={styles.font}>
          登録できるゲーム一覧
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <img
            src="/images/valorantLogo.svg"
            alt="Valorant"
            width={140}
            height={140}
            className={styles.valoicon}
          />
          <img src="/images/LoL_icon.svg" alt="League of Legends" width={140} height={140} />
          <img src="/images/apexLogo.png" alt="Apex Legends" width={140} height={140} />
          <img src="/images/ow2Logo.jpg" alt="OverWatch2" width={140} height={140} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <img src="/images/r6sLogo.webp" alt="Rainbow Six Siege" width={140} height={140} />
          <img src="/images/hearthstoneLogo.jpg" alt="Hearthtone" width={140} height={140} />
          <img src="/images/fortniteLogo.jpg" alt="Fortnite" width={140} height={140} />
          <img src="/images/sf6Logo.png" alt="SF6" width={140} height={140} />
        </div>
        <div style={{ height: 75, marginTop: 60 }}>
          <a href="" className={styles.yellow}>
            ゲームの追加申請はこちらから
          </a>
        </div>
        <div style={{ fontSize: 24 }}>申請から運営が判断して実装します</div>
      </div>
      {/* ご利用の流れ */}
      <div className={styles.infoarea}>
        <span style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 15, color: 'green' }}>
          採用までの流れ
        </span>
        <div className={styles.flow}>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/registration.png" alt="register" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>1.登録</div>
            <div className={styles.flowdetail}>
              ゲームのレートや <br />
              あなたの情報を登録します。
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/trophy.png" alt="trophy" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>2.プロフィールの確認</div>
            <div className={styles.flowdetail}>
              各自情報を記入して <br />
              スカウト率アップ
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/job-offer.png" alt="job-offer" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>3.オファー</div>
            <div className={styles.flowdetail}>企業からオファーが届きます</div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/handshake.png" alt="handshake" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>4.採用</div>
            <div className={styles.flowdetail}>人気の企業からの内定ゲット</div>
          </div>
        </div>
        <div className={styles.submitarea}>
          <div className={styles.submitbox}>
            <div
              style={{ fontSize: 32, color: 'green', fontWeight: 'bold' }}
              className={styles.font}
            >
              さあ、登録であなたを証明しよう
            </div>
            <div style={{ height: 75, marginTop: 40 }}>
              <a href="" className={styles.yellow}>
                新規登録はこちらから
              </a>
            </div>
            <div style={{ fontSize: 20 }}>およそ3分程度で作成することが出来ます。</div>
          </div>
        </div>
      </div>
      {/* 演出方法を考えなければいけない */}
      <div className={styles.wid}>
        <div className={styles.poem}>
          <h1 style={{ marginBottom: 27 }}>
            <span style={{ borderBottom: '3px solid #55ec82' }}>
              「RateMate就活」 - ゲームから社会への新たな可能性
            </span>
          </h1>
          昨今、メディアやSNSで一度は聞いたことがある「e-sports」という業界。
          <br />
          これはゲームを通してクラブチームに所属し大会に出場したり、個人でアマチュア大会に出場または養った知識を活かし大会の運営に携わる仕事など幅広い活躍の場をみせています。
          <br />
          一昔前では「息抜きの遊び」「暇つぶし」「趣味」といったあくまで個人的に楽しむコンテンツであったゲームという存在はプレイヤーの意識力が高まり、
          <br />
          「練習を重ね技術力を向上させる」「最新の情報を取り入れる為に知識を養う」「チームと円滑にゲームをする為に作戦を練る」
          <br />
          といった現代の学生から社会人まで個人、団体問わず運動部活動や社会人クラブと同様な活動量をみせる程までに急成長しました。
          <br />
          対戦中に思考するのが得意、コミュニケーションを交わし連携を取るのが得意、オリジナルなプレイスタイルを考案するのが得意、といった
          <br />
          プレイヤー自身が自発的にクォリティを求め、発揮できるマインドを備えているという点に我々は着目し、社会への取り組み方に活かせるのではないかと考えました。{' '}
          <br />
          思考力、精神力、体力、忍耐力、あなた自身に備わっている人間性としての優秀な素質や潜在能力を最大限に引き出し人生をより良く豊かにする。
          <br />
          それが「RateMate就活」です。
        </div>
      </div>
    </>
  );
};

export default Home;
