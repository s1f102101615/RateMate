/* eslint-disable max-lines */

/* eslint-disable complexity */

import type { CompanyModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import type { ChangeEvent, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useFetchInfo, useFetchInfoDetail, useSearchInfo } from 'src/utils/fetchinfo';
import { userAtom } from '../../atoms/user';
import { BasicHeaderLogined } from '../@components/BasicHeaderLogined/BasicHeaderLogined';
import styles from './index.module.css';
import styles2 from './index2.module.css';
import styles3 from './index3.module.css';
import styles4 from './index4.module.css';
import styles5 from './index5.module.css';
import styles6 from './index6.module.css';
import styles7 from './index7.module.css';

// eslint-disable-next-line complexity
const Home = () => {
  //ボタンの選択肢

  interface Categories2 {
    [key: string]: string[];
  }

  const categories: Categories2 = {
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
  };

  const categories2: Categories2 = {
    chovu: ['管理', 'Swewwe', '1111', '.2333'],
    chovy: ['2', '項目212', '...'],
    chovy2: ['項目132', '項目2', '...'],
    '323': ['項目1', '項目2', '...'],
    商: ['項目1', '項目2', '...'],
    商4: ['項目1', '項目2', '...'],
    商5454: ['項目1', '項目2', '...'],
    商23: ['項目1', '項目2', '...'],
    商22: ['項目1', '項目2', '...'],
    商2332: ['項目1', '項目2', '...'],
    商23542: ['項目1', '項目2', '...'],
  };

  const categories3 = {
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
  };

  const router = useRouter();

  const [user] = useAtom(userAtom);
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedSalary2, setSelectedSalary2] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategory2, setSelectedCategory2] = useState<string | null>(null);

  const [data, setData] = useState<CompanyModel[]>([]);
  const [checkedItemsIndustry, setCheckedItemsIndustry] = useState<string[]>([]);
  const [checkedItemsOccupation, setCheckedItemsOccupation] = useState<string[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const [checkedCategories2, setCheckedCategories2] = useState([]);
  const [checkedPrefectures, setCheckedPrefectures] = useState<{ [key: string]: boolean }>({});

  //一つ目のボタン

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryClickIndustry = (category: SetStateAction<string | null>) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const categoryCheckboxIndustry = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCategory !== null && selectedCategory !== undefined) {
      const isChecked = e.target.checked;

      setCheckedItemsIndustry((prevItems) => {
        let newItems: string | string[];
        if (isChecked) {
          // 新しいアイテムを追加する場合、重複を排除して追加
          newItems = prevItems.concat(
            categories[selectedCategory].filter((item: string) => !prevItems.includes(item))
          );
        } else {
          // アイテムを削除する場合、指定されたカテゴリーに含まれるアイテムを除外
          newItems = prevItems.filter((item) => !categories[selectedCategory].includes(item));
        }

        // ここでsetCheckedCategoriesを更新
        setCheckedCategories((prevCategories) => {
          const newCategories = new Set(prevCategories);
          if (isChecked) {
            newCategories.add(selectedCategory);
          } else {
            if (
              !categories[selectedCategory]?.every((catItem: string) => newItems.includes(catItem))
            ) {
              newCategories.delete(selectedCategory);
            }
          }
          // newCategories を配列に変換して返す
          return Array.from(newCategories);
        });

        return newItems;
      });
    }
  };

  const handleItemCheckboxIndustry = (item: string, e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    // 新しいアイテムリストを状態として保存する
    setCheckedItemsIndustry((prevItems) => {
      const newItems = isChecked
        ? [...prevItems, item] // チェックしたアイテムを追加
        : prevItems.filter((existingItem) => existingItem !== item); // チェックを外したアイテムを削除

      // この新しい状態を基にしてカテゴリリストを更新する
      updateIndustry(newItems, isChecked, item);
      return newItems;
    });
  };

  // カテゴリの更新を行う独立した関数
  const updateIndustry = (newItems: string[], isChecked: boolean, item: string) => {
    setCheckedCategories((prevCategories) => {
      const updatedCheckedCategories = new Set(prevCategories);

      if (selectedCategory !== null) {
        if (isChecked) {
          updatedCheckedCategories.add(selectedCategory);
        } else {
          const categoryArray = Array.from(updatedCheckedCategories);
          const someItemsChecked = categoryArray.some((catItem) =>
            categories[catItem].some((item: string) => newItems.includes(item))
          );

          // eslint-disable-next-line max-depth
          if (!someItemsChecked) {
            updatedCheckedCategories.delete(selectedCategory);
          }
        }
      }

      return Array.from(updatedCheckedCategories);
    });
  };

  //二つ目のボタン

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleCategoryClickOccupation = (
    category: string | ((prevState: string | null) => string | null)
  ) => {
    if (typeof category === 'function') {
      // category が関数の場合、その関数を使用して状態を更新
      setSelectedCategory2(category);
    } else {
      // category が文字列の場合、直接状態を設定
      setSelectedCategory2(category);
    }
    console.log(category);
  };

  const categoryCheckboxOccupation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCategory !== null && selectedCategory !== undefined) {
      const isChecked = e.target.checked;

      setCheckedItemsOccupation((prevItems) => {
        let newItems: string | string[];
        if (isChecked) {
          // 新しいアイテムを追加する場合、重複を排除して追加
          newItems = prevItems.concat(
            categories[selectedCategory].filter((item: string) => !prevItems.includes(item))
          );
        } else {
          // アイテムを削除する場合、指定されたカテゴリーに含まれるアイテムを除外
          newItems = prevItems.filter((item) => !categories[selectedCategory].includes(item));
        }

        // ここでsetCheckedCategoriesを更新
        setCheckedCategories((prevCategories) => {
          const newCategories = new Set(prevCategories);
          if (isChecked) {
            newCategories.add(selectedCategory);
          } else {
            if (
              !categories[selectedCategory]?.every((catItem: string) => newItems.includes(catItem))
            ) {
              newCategories.delete(selectedCategory);
            }
          }
          // newCategories を配列に変換して返す
          return Array.from(newCategories);
        });

        return newItems;
      });
    }
  };

  const handleItemCheckboxOccupation = (item: string, e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    // 新しいアイテムリストを状態として保存する
    setCheckedItemsOccupation((prevItems) => {
      const newItems = isChecked
        ? [...prevItems, item] // チェックしたアイテムを追加
        : prevItems.filter((existingItem) => existingItem !== item); // チェックを外したアイテムを削除

      // この新しい状態を基にしてカテゴリリストを更新する
      updateOccupation(newItems, isChecked, item);
      return newItems;
    });
  };

  // カテゴリの更新を行う独立した関数
  const updateOccupation = (newItems: string[], isChecked: boolean, item: string) => {
    setCheckedCategories((prevCategories) => {
      const updatedCheckedCategories = new Set(prevCategories);

      if (selectedCategory !== null) {
        if (isChecked) {
          updatedCheckedCategories.add(selectedCategory);
        } else {
          const categoryArray = Array.from(updatedCheckedCategories);
          const someItemsChecked = categoryArray.some((catItem) =>
            categories[catItem].some((item: string) => newItems.includes(item))
          );

          // eslint-disable-next-line max-depth
          if (!someItemsChecked) {
            updatedCheckedCategories.delete(selectedCategory);
          }
        }
      }

      return Array.from(updatedCheckedCategories);
    });
  };

  //都道府県のボタン

  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  const [local, setLocal] = useState('');

  const handleCheckboxChange = (prefecture: string) => {
    setLocal((prevLocal) => {
      // 都道府県が既に選択されているか確認
      const isSelected = prevLocal === prefecture;

      // 選択されている場合は空文字列を設定して選択を解除、そうでない場合は都道府県を設定
      return isSelected ? '' : prefecture;
    });
  };
  //検索ボタン
  const fetchinfo = useFetchInfo();

  useEffect(() => {
    const fetchData = async () => {
      const fetchInfoResponse = await fetchinfo();

      setData(fetchInfoResponse.body);
      // eslint-disable-next-line max-lines
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const searchInfo = useSearchInfo();

  const fetchFilteredInfo = async () => {
    try {
      const params = {
        category1: checkedItemsIndustry,
        category2: checkedItemsOccupation,
        category3: local,
        minSalary: selectedSalary,
        maxSalary: selectedSalary2,
        label: checkedCategories,
      };
      console.log(params);
      console.log(checkedCategories);

      const filteredData = await searchInfo(params);
      console.log(filteredData);
      setData(filteredData.body);
    } catch (error) {
      // エラーハンドリング
      console.error('エラーが発生しました:', error);
      // エラーメッセージをユーザーに表示するか、適切な手順を提供するなどのアクションを実行することができます
    }
  };

  const handleSearchButtonClick = () => {
    fetchFilteredInfo();
  };

  const modalBodyRef = useRef<HTMLDivElement | null>(null);

  // スクロールボタンのハンドラ
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

  const itemsPerPage = 5;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // 現在のページに表示するアイテムの配列を取得
  const currentItems = data.slice(startIndex, endIndex);

  // ページを切り替える関数
  const changePage = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BasicHeaderLogined user={user} />

      <div className={styles.milkyWay}>
        <div className={styles.background2}>
          <div className={styles.background}>
            <div className={styles.container1}>
              <div className={styles.container3}>
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
                  </div>
                  <div className={styles4.rightBox4}>株式会社 フル</div>
                </div>
              </div>
              <div className={styles.container2}>
                <div className={styles2.theme}>
                  <a>転職・求人情報一覧</a>
                </div>
                <div className={styles2.leftBox}>
                  <div className={styles2['ribbon20-wrapper']}>
                    <h3 className={styles2.ribbon20}>ご希望の求人情報を入力してください</h3>
                  </div>

                  <div className={styles.container5}>
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
                                      className={
                                        selectedCategory === category ? styles6.selected : ''
                                      }
                                      onClick={() => handleCategoryClickIndustry(category)}
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
                              {selectedCategory !== null && (
                                <>
                                  <div className={styles6.flexContainer}>
                                    <input
                                      type="checkbox"
                                      className={styles6.checkboxSize}
                                      onChange={categoryCheckboxIndustry}
                                    />
                                    <h3 className={styles6.rightPanel2}>{selectedCategory}</h3>
                                  </div>
                                  <div className={styles6.line} />
                                  <ul>
                                    {categories[selectedCategory].map((item) => (
                                      <li key={item}>
                                        <input
                                          type="checkbox"
                                          checked={checkedItemsIndustry.includes(item)}
                                          onChange={(e) => handleItemCheckboxIndustry(item, e)}
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
                            <button className={styles6.submitButton} onClick={closeModal}>
                              決定
                            </button>
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
                            <h2 className={styles6.theme2}>職種を選択</h2>
                            <button className={styles6.closeButton} onClick={closeModal2}>
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
                                  {Object.keys(categories2).map((category) => (
                                    <li
                                      key={category}
                                      className={
                                        selectedCategory2 === category ? styles6.selected : ''
                                      }
                                      onClick={() => handleCategoryClickOccupation(category)}
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
                              {selectedCategory2 !== null && (
                                <>
                                  <div className={styles6.flexContainer}>
                                    <input
                                      type="checkbox"
                                      className={styles6.checkboxSize}
                                      onChange={categoryCheckboxOccupation}
                                    />
                                    <h3 className={styles6.rightPanel2}>{selectedCategory2}</h3>
                                  </div>
                                  <div className={styles6.line} />
                                  <ul>
                                    {categories2[selectedCategory2].map((item) => (
                                      <li key={item}>
                                        <input
                                          type="checkbox"
                                          checked={checkedItemsOccupation.includes(item)}
                                          onChange={(e) => handleItemCheckboxOccupation(item, e)}
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
                            <button className={styles6.submitButton} onClick={closeModal2}>
                              決定
                            </button>
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
                            <button className={styles6.closeButton2} onClick={closeModal3}>
                              ✖️
                            </button>

                            {Object.entries(categories3).map(([region, prefectures]) => (
                              <div key={region} className={styles7.region}>
                                <h3 className={styles7.regionTitle}>{region}</h3>
                                <ul className={styles7.prefectureList}>
                                  {prefectures.map((prefecture) => (
                                    <li key={prefecture} className={styles7.prefectureItem}>
                                      <input
                                        type="checkbox"
                                        className={styles7.checkbox}
                                        checked={checkedPrefectures[prefecture]}
                                        onChange={() => handleCheckboxChange(prefecture)}
                                      />
                                      {prefecture}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            <button className={styles7.submitButton} onClick={closeModal3}>
                              決定
                            </button>
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

                        <span style={{ margin: '0 10px', fontSize: '16px', fontWeight: 'bold' }}>
                          ～
                        </span>

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
                    <div>
                      <div>
                        <button
                          onClick={() => changePage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                          <button
                            key={index}
                            onClick={() => changePage(index + 1)}
                            disabled={index + 1 === currentPage}
                          >
                            {index + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => changePage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles5.leftBox2}>
                    <div>
                      {currentItems.map((company) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
