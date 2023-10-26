import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BasicHeaderLogined } from 'src/pages/@components/BasicHeaderLogined/BasicHeaderLogined';
import { userAtom } from '../../atoms/user';
import styles from './index.module.css';
const Home = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedSalary2, setSelectedSalary2] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(currentPage || 1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const createPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={i === activePage ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const categories = {
    'IT・インターネット': ['インターネットサービス', 'Sler', 'Nler', '...'],
    メーカー: ['項目1', '項目2', '...'],
    商社: ['項目1', '項目2', '...'],
    // ... 他のカテゴリーと項目を追加
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <BasicHeaderLogined user={user} />
        <div className={styles.registerBox}>
          <div className={styles.blueBox2}>まだ会員でない人</div>
          <div className={styles.roundedButton}>新規登録はこちら</div>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.blueBox}>特集求人情報一覧</div>
          <div className={styles.rightBox2}>
            <div className={styles.rightBox3}>
              <img src="/favicon.png" alt="logo" />
            </div>
            株式会社　フル
          </div>
          <div className={styles.rightBox4}>
            <div className={styles.rightBox3}>
              <img src="/favicon.png" alt="logo" />
            </div>
            株式会社　フル
          </div>
        </div>

        <div className={styles.theme}>
          <a>転職・求人情報一覧</a>
        </div>
        <div className={styles.leftBox}>
          <div className="container">
            <div className={styles['ribbon20-wrapper']}>
              <h3 className={styles.ribbon20}>ご希望の求人情報を入力してください</h3>
            </div>

            <div className={styles.horizontalContainer}>
              <div className={styles.theme2}>
                <a>業種</a>
              </div>

              <button className={styles.shinybtn} onClick={openModal}>
                条件を選択する
              </button>
            </div>
            {isModalOpen && (
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                  <div className={styles.modalHeader}>
                    <h2>業種を選択</h2>
                    <button className={styles.closeButton} onClick={closeModal}>
                      ✖️
                    </button>
                  </div>

                  <div className={styles.modalBody}>
                    <div className={styles.leftPanel}>
                      <ul>
                        {Object.keys(categories).map((category) => (
                          <li key={category} onClick={() => handleCategoryClick(category)}>
                            {selectedCategory === category ? '✓' : ''} {category}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.rightPanel}>
                      {selectedCategory && (
                        <>
                          <h3>{selectedCategory}</h3>
                          <ul>
                            {categories[selectedCategory].map((item) => (
                              <li key={item}>
                                <input type="checkbox" /> {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={styles.modalFooter}>
                    <button className={styles.submitButton}>決定</button>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.horizontalContainer1}>
              <div className={styles.theme2}>
                <a>職種</a>
              </div>

              <button className={styles.shinybtn}>条件を選択する</button>
            </div>

            <div className={styles.horizontalContainer2}>
              <div className={styles.theme2}>
                <a>勤務地</a>
              </div>

              <button className={styles.shinybtn}>条件を選択する</button>
            </div>

            <div className={styles.horizontalContainer2}>
              <div className={styles.theme2}>
                <a>年収</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <select
                  id="salary-select"
                  value={selectedSalary}
                  onChange={(e) => setSelectedSalary(e.target.value)}
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="300万円">300万円</option>
                  <option value="400万円">400万円</option>
                  <option value="500万円">500万円</option>
                  <option value="600万円">600万円</option>
                  <option value="700万円">700万円</option>
                  {/* 必要に応じて他のオプションも追加できます */}
                </select>

                <span style={{ margin: '0 10px' }}>～</span>

                <select
                  id="salary-select-2" // 注意: 同じidはページ内で2回以上使用しないように変更しています。
                  value={selectedSalary2} // 2つのselectボックスのための別のステート
                  onChange={(e) => setSelectedSalary2(e.target.value)} // 2つ目のselectボックスのためのonChangeハンドラ
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="300万円">300万円</option>
                  <option value="400万円">400万円</option>
                  <option value="500万円">500万円</option>
                  <option value="600万円">600万円</option>
                  <option value="700万円">700万円</option>
                  {/* 必要に応じて他のオプションも追加できます */}
                </select>
              </div>
            </div>

            <div className={styles.horizontalContainer1}>
              <div className={styles.theme2}>
                <a>こだわり条件</a>
              </div>

              <button className={styles.shinybtn}>条件を選択する</button>
            </div>

            <button className={styles.button2}>検索</button>
          </div>
        </div>
        <div className={styles.leftBoxAll}>
          <div className={styles.pagination}>
            <span>1ページ〜50ページ</span>
            <span>（全251636件中）</span>
            <ul>
              <li>
                <a href="#page1" className={styles.active}>
                  1
                </a>
              </li>
              <li>
                <a href="#page2">2</a>
              </li>
              <li>
                <a href="#page3">3</a>
              </li>
              <li>
                <a href="#page4">4</a>
              </li>
            </ul>
          </div>
          <div className={styles.leftBox2}>
            <div className={styles.joblisting}>
              <div className={styles.header}>
                <div className={styles.newtag}>NEW</div>
                <div className={styles.jobtitle}>学術サポート（研究所、未経験OK）福岡の拠点</div>
                <div className={styles.searchbutton}>いいね</div>
              </div>
              <div className={styles.company}>外資企業 / 製造関連製造業</div>
              <div className={styles.location}>勤務地：福岡県</div>
              <div className={styles.jobdetails}>
                <div className={styles.detail}>
                  <strong>職務内容</strong>
                  未経験、代理店などの経験者を... (続きは省略)
                </div>
                <div className={styles.detail}>
                  <strong>対象者</strong>
                  未経験から経験者の方まで... (続きは省略)
                </div>
                <div className={styles.detail}>
                  <strong>給与・待遇</strong>
                  未経験の場合は月給... (続きは省略)
                </div>
              </div>
              <div className={styles.date}>掲載開始日：2023/10/16 掲載終了日：2023/10/16</div>
              <button className={styles.applybutton}>応募する</button>
            </div>
          </div>
          <div className={styles.leftBox3}>
            <div className={styles.joblisting}>
              <div className={styles.header}>
                <div className={styles.newtag}>NEW</div>
                <div className={styles.jobtitle}>学術サポート（研究所、未経験OK）福岡の拠点</div>
                <div className={styles.searchbutton}>いいね</div>
              </div>
              <div className={styles.company}>外資企業 / 製造関連製造業</div>
              <div className={styles.location}>勤務地：福岡県</div>
              <div className={styles.jobdetails}>
                <div className={styles.detail}>
                  <strong>職務内容</strong>
                  未経験、代理店などの経験者を... (続きは省略)
                </div>
                <div className={styles.detail}>
                  <strong>対象者</strong>
                  未経験から経験者の方まで... (続きは省略)
                </div>
                <div className={styles.detail}>
                  <strong>給与・待遇</strong>
                  未経験の場合は月給... (続きは省略)
                </div>
              </div>
              <div className={styles.date}>掲載開始日：2023/10/16 掲載終了日：2023/10/16</div>
              <button className={styles.applybutton}>応募する</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
