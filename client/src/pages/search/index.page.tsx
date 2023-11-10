import type { CompanyModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';

import { useEffect, useRef, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { useFetchInfo, useFetchInfoDetail, useSearchInfo } from 'src/utils/fetchinfo';
import { userAtom } from '../../atoms/user';
import styles from './index.module.css';
import styles2 from './index2.module.css';
import styles3 from './index3.module.css';
import styles4 from './index4.module.css';
import styles5 from './index5.module.css';
import styles6 from './index6.module.css';
import styles7 from './index7.module.css';
import { useRouter } from 'next/router';

const Home = ({ totalItems, currentPage, onPageChange }) => {

  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const itemsPerPage = 10;
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedSalary2, setSelectedSalary2] = useState('');
  const [selectedSalary3, setSelectedSalary3] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedCategory3, setSelectedCategory3] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [activePage, setActivePage] = useState(currentPage || 1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [data, setData] = useState<CompanyModel[]>([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [checkedItems2, setCheckedItems2] = useState({});
  const [checkedItems3, setCheckedItems3] = useState({});

  const handleCategoryCheckboxChange = (e) => {
    if (selectedCategory !== null) {
      const isChecked = e.target.checked;

      setCheckedItems((prevItems) => {
        // 新しいアイテムリストを生成
        let newItems;
        if (isChecked) {
          // チェックされた場合、新しいアイテムリストは以前のアイテムとカテゴリ内のアイテムの結合
          newItems = [...new Set([...prevItems, ...categories[selectedCategory]])];
        } else {
          // チェックが外された場合、カテゴリのアイテムを除外したリストを生成
          newItems = prevItems.filter((item) => !categories[selectedCategory].includes(item));
        }
        return newItems;
      });

      setCheckedCategories((prevCategories) => {
        // 新しいカテゴリリストを生成
        const newCategories = new Set(prevCategories);
        if (isChecked) {
          newCategories.add(selectedCategory);
        } else {
          newCategories.delete(selectedCategory);
          // カテゴリに属するアイテムが一つでもチェックされていれば、カテゴリを保持
          if (categories[selectedCategory].some((catItem) => prevItems.includes(catItem))) {
            newCategories.add(selectedCategory);
          }
        }
        return [...newCategories];
      });
    }
  };
  const handleItemCheckboxChange = (item, e) => {
    const isChecked = e.target.checked;

    // 新しいアイテムリストを状態として保存する
    setCheckedItems((prevItems) => {
      const newItems = isChecked
        ? [...prevItems, item] // チェックしたアイテムを追加
        : prevItems.filter((existingItem) => existingItem !== item); // チェックを外したアイテムを削除

      // この新しい状態を基にしてカテゴリリストを更新する
      updateCategories(newItems, isChecked, item);
      return newItems;
    });
  };

  // カテゴリの更新を行う独立した関数
  const updateCategories = (newItems, isChecked, item) => {
    setCheckedCategories((prevCategories) => {
      const updatedCheckedCategories = new Set(prevCategories);

      if (isChecked) {
        updatedCheckedCategories.add(selectedCategory);
      } else {
        // 新しいアイテムリストを利用して確認する
        const someItemsChecked = categories[selectedCategory].some((catItem) =>
          newItems.includes(catItem)
        );
        if (!someItemsChecked) {
          updatedCheckedCategories.delete(selectedCategory);
        }
      }

      return [...updatedCheckedCategories];
    });
  };

  const fetchinfo = useFetchInfo();

  const FetchInfo = async () => {
    const fetchInfo = await fetchinfo();
    console.log(fetchInfo);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchInfoResponse = await fetchinfo();

      setData(fetchInfoResponse.body);
    };
    fetchData();
  }, []);

  const fetchinfodetail = useFetchInfoDetail();

  const FetchInfoDetail = async (companyId: number) => {
    console.log(companyId);
    const fetchInfo = await fetchinfodetail(companyId);
    console.log(fetchInfo);
    router.push(`/details/${data[0].companyId}`);
  };

  function handleClick(companyId: number) {
    FetchInfoDetail(companyId);
  }

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

  const [selectedRegion, setSelectedRegion] = useState([]);

  const categories = {
    'IT・インターネット': ['インターネットサービス', 'Sler', 'Nler', '...'],

    メーカー: ['項目132', '項目212', '...'],
    商社: ['項目132', '項目2', '...'],
    '323': ['項目1', '項目2', '...'],
    商: ['項目1', '項目2', '...'],
    商444: ['項目1', '項目2', '...'],
    商5454: ['項目1', '項目2', '...'],
    商23: ['項目1', '項目2', '...'],
    商22: ['項目1', '項目2', '...'],
    商2332: ['項目1', '項目2', '...'],
    商23542: ['項目1', '項目2', '...'],

    // ... 他のカテゴリーと項目を追加
  };

  const categories2 = {
    '北海道・東北': ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
    関東: ['東京都', '神奈川県', '千葉県', '埼玉県', '茨城県', '栃木県', '群馬県'],
    関西: ['大阪府', '兵庫県', '京都府', '滋賀県', '奈良県', '和歌山県'],
    中部: [
      '愛知県',
      '静岡県',
      '岐阜県',
      '三重県',
      '長野県',
      '新潟県',
      '石川県',
      '福井県',
      '富山県',
    ],
    '九州・沖縄': [
      '福岡県',
      '佐賀県',
      '長崎県',
      '熊本県',
      '大分県',
      '宮崎県',
      '鹿児島県',
      '沖縄県',
    ],
    中国: ['岡山県', '広島県', '鳥取県', '島根県', '山口県'],
    四国: ['香川県', '徳島県', '愛媛県', '高知県'],
    // 必要に応じて他の地域を追加
  };

  const categories3 = {
    kanagawa: ['インターネットサービス', 'Sler', 'Nler', '...'],
    メーカー: ['項目1', '項目2', '...'],
    東京: ['項目1', '項目2', '...'],

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


  const handleCategoryClick2 = (category2) => {
    setSelectedCategory2(category2);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleCategoryClick3 = (category3) => {
    setSelectedCategory3(category3);
  };

  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };


  const searchInfo = useSearchInfo();

  const fetchFilteredInfo = async () => {
    const params = {
      category1: checkedItems,
      category2: checkedCategories,
      category3: selectedCategory3,
      minSalary: selectedSalary,
      maxSalary: selectedSalary2,
      label,
      // ...他の条件もここに追加...
    };
    console.log(params);
    console.log(checkedCategories);
    console.log(checkedItems);

    const filteredData = await searchInfo(params);
    console.log(filteredData);
    setData(filteredData.body);
  };

  const handleSearchButtonClick = () => {
    fetchFilteredInfo();
  };

  const modalBodyRef = useRef<HTMLDivElement | null>(null);

  const handleScrollUp = () => {
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop -= 40; // 30px分上にスクロール
    }
  };

  const handleScrollDown = () => {
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop += 40; // 30px分下にスクロール
    }
  };



  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.milkyWay}>
        <div className={styles.background}>
          <div className={styles3.registerBox}>
            <div className={styles3.blueBox2}>まだ会員でない人</div>
            <div className={styles3.roundedButton}>新規登録はこちら</div>{' '}
          </div>
          <div className={styles4.rightBox}>
            <div className={styles4.blueBox}>特集求人情報一覧</div>
            <div className={styles4.rightBox2}>
              <div className={styles4.rightBox3}>
                <img src="/favicon.png" alt="logo" />
              </div>
              株式会社　フル
            </div>
            <div className={styles4.line} />
          </div>


          <div className={styles2.theme}>
            <a>転職・求人情報一覧</a>
          </div>
          <div className={styles2.leftBox}>
            <div className="container">
              <div className={styles2['ribbon20-wrapper']}>
                <h3 className={styles2.ribbon20}>ご希望の求人情報を入力してください</h3>
              </div>

              <div className={styles2.horizontalContainer}>
                <div className={styles2.theme2}>
                  <a>業種</a>
                </div>

                <button className={styles2.shinybtn} onClick={openModal}>
                  条件を選択する
                </button>
              </div>
              {isModalOpen && (
                <div className={styles6.modal}>
                  <div className={styles6.modalContent}>
                    <div className={styles6.modalHeader}>
                      <h2 className={styles6.theme2}>業種を選択</h2>
                      <button className={styles6.closeButton} onClick={closeModal}>
                        ✖️
                      </button>
                    </div>
                    <body>
                      <button className={styles6.topbutton} onClick={handleScrollUp}>
                        <div className={styles6.arrowup} />
                      </button>
                    </body>

                    <div className={styles6.modalBody}>
                      <div className={styles6.modalBody2} ref={modalBodyRef}>
                        <div className={styles6.leftPanel}>
                          <ul>
                            {Object.keys(categories).map((category) => (
                              <li
                                key={category}
                                className={selectedCategory === category ? styles6.selected : ''}
                                onClick={() => handleCategoryClick(category)}
                              >
                                {category}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button className={styles6.buttombutton} onClick={handleScrollDown}>
                        <div className={styles6.arrowdown} />
                      </button>

                      <div className={styles6.rightPanel}>
                        {selectedCategory && (
                          <>
                            <div className={styles6.flexContainer}>
                              <input
                                type="checkbox"
                                className={styles6.checkboxSize}
                                onChange={handleCategoryCheckboxChange}
                              />
                              <h3 className={styles6.rightPanel2}>{selectedCategory}</h3>
                            </div>
                            <div className={styles6.line} />
                            <ul>
                              {categories[selectedCategory].map((item) => (
                                <li key={item}>
                                  <input
                                    type="checkbox"
                                    checked={checkedItems.includes(item)}
                                    onChange={(e) => handleItemCheckboxChange(item, e)}
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    <div className={styles6.modalFooter}>
                      <button className={styles6.submitButton}>決定</button>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles2.horizontalContainer}>
                <div className={styles2.theme2}>
                  <a>職種</a>
                </div>

                <button className={styles2.shinybtn} onClick={openModal2}>
                  条件を選択する
                </button>
              </div>
              {isModalOpen2 && (
                <div className={styles6.modal}>
                  <div className={styles6.modalContent}>
                    <div className={styles6.modalHeader}>
                      <h2>業種を選択</h2>
                      <button className={styles6.closeButton} onClick={closeModal2}>
                        ✖️
                      </button>
                    </div>

                    <div className={styles6.modalBody}>
                      <div className={styles6.leftPanel}>
                        <ul>
                          {Object.keys(categories2).map((category) => (
                            <li key={category} onClick={() => handleCategoryClick2(category)}>
                              {selectedCategory2 === category ? '✓' : ''} {category}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles6.rightPanel}>
                        {selectedCategory2 && (
                          <>
                            <h3>{selectedCategory2}</h3>
                            <ul>
                              {categories2[selectedCategory2].map((item) => (
                                <li key={item}>
                                  <input type="checkbox" /> {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    <div className={styles6.modalFooter}>
                      <button className={styles6.submitButton}>決定</button>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles2.horizontalContainer2}>
                <div className={styles2.theme2}>
                  <a>勤務地</a>
                </div>

                <button className={styles2.shinybtn} onClick={openModal3}>
                  条件を選択する
                </button>
              </div>
              {isModalOpen3 && (
                               <div className={styles6.modal}>
                               <div className={styles6.modalContent}>
                <div className={styles7.container}>
                  <h2 className={styles7.title}>都道府県を選択</h2>

                  {Object.entries(categories2).map(([region, prefectures]) => (
                    <div key={region} className={styles7.region}>
                      <h3 className={styles7.regionTitle}>{region}</h3>
                      <ul className={styles7.prefectureList}>
                        {prefectures.map((prefecture) => (
                          <li key={prefecture} className={styles7.prefectureItem}>
                            <input type="checkbox" className={styles7.checkbox} />
                            {prefecture}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  ))}

                  <button className={styles7.submitButton}>決定</button>
                </div>
                </div>
                </div>
              )}

              <div className={styles2.horizontalContainer4}>
                <div className={styles2.theme2}>
                  <a>年収</a>
                </div>

                <div>
                  <select
                    id="salary-select"
                    value={selectedSalary}
                    onChange={(e) => setSelectedSalary(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      border: '2px solid #aaa',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      marginRight: '10px',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                    }}
                  >
                    <option value="" disabled>
                      指定しない
                    </option>
                    <option value="300万円">300万円</option>
                    <option value="400万円">400万円</option>
                    <option value="500万円">500万円</option>
                    <option value="600万円">600万円</option>
                    <option value="700万円">700万円</option>
                    {/* 必要に応じて他のオプションも追加できます */}
                  </select>

                  <span style={{ margin: '0 10px', fontSize: '16px', fontWeight: 'bold' }}>～</span>

                  <select
                    id="salary-select-2"
                    value={selectedSalary2}
                    onChange={(e) => setSelectedSalary2(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      border: '2px solid #aaa',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      marginRight: '0',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                    }}
                  >
                    <option value="" disabled>
                      指定しない
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

              <div className={styles2.horizontalContainer3}>
                <div className={styles2.theme2}>
                  <a>こだわり条件</a>
                </div>

                <button className={styles2.shinybtn2} onClick={openModal2}>
                  条件を選択する
                </button>
              </div>
              <div className={styles2.line} />

              <button onClick={handleSearchButtonClick} className={styles2.shinybtn3}>
                検索
              </button>
            </div>
          </div>
          <div className={styles5.leftBoxAll}>
            <div className={styles5.pagination}>
              <span>1ページ〜50ページ</span>
              <span>（全251636件中）</span>
              <ul>
                <li>
                  <a href="#page1" className={styles5.active}>
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

            <div className={styles5.leftBox2}>
              <div>
                {data.map((company) => (
                  <div className={styles5.joblisting} key={company.id}>
                    <div className={styles5.header}>
                      <div className={styles5.newtag}>NEW</div>
                      <div className={styles5.jobtitle}>{company.companyName}</div>
                      <div className={styles5.searchbutton}>いいね</div>
                    </div>
                    <div className={styles5.company}>{company.companyName}</div>

                    <div className={styles5.jobdetails}>
                      <div className={styles5.detail}>
                        <div className={styles5.container}>
                          <div className={styles5.result}>業種</div>
                          <div className={styles5.undefined}>{company.industry}</div>
                        </div>
                        <div className={styles5.container}>
                          <div className={styles5.result}>職種</div>
                          <div className={styles5.undefined}>{company.occupation}</div>
                        </div>

                        <div className={styles5.container}>
                          <div className={styles5.result}>勤務地</div>
                          <div className={styles5.undefined}>{company.local}</div>
                        </div>

                        <div className={styles5.container}>
                          <div className={styles5.result}>仕事内容</div>
                          <div className={styles5.undefined}>{company.jobdescription}</div>
                        </div>

                        <div className={styles5.container}>
                          <div className={styles5.result}>業務内容</div>
                          <div className={styles5.undefined}>{company.businesscontent}</div>
                        </div>

                        <div className={styles5.container}>
                          <div className={styles5.result}>必要な能力</div>
                          <div className={styles5.undefined}>{company.requiredability}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles5.date}>
                      掲載開始日：{company.publicationstartdate}{' '}
                      {/* 掲載終了日のデータがまだ見当たらないので空にしています */}
                    </div>
                    <button
                      onClick={() => handleClick(company.companyId)}
                      className={styles5.applybutton}
                    >
                      応募する
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
