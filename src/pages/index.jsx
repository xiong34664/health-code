/**
 * title: undefined
 */
import { useState } from 'react';
import router from 'umi/router';
import styles from './index.less';
import left_icon from '@/assets/left-icon.png';
import search_icon from '@/assets/search-icon.png';
import { Drawer } from 'antd-mobile';
import UserForm from '@/components/form';

const lists = [
  '浙江工业大学本科生选课流程',
  '本科毕业生就业协议书遗失补办',
  '企业校园招聘管理',
  '校内活动(室外)许可审批',
  '经济困难毕业生求职补贴申请',
  '浙江工业大学本科生转专业申请',
  '研究生生源地贷款审核手续',
  '学生校园通行码领取',
  '新办、补办团员证',
  '毕业研究生就业协议书遗失补办',
  '研究生查询离校办理情况流程',
  '留级办理流程',
  '本科学生各类奖助学金申请与评审管理、荣誉称号申请与评审管理',
  '毕业研究生就业协议书改签。论文投稿',
  '学生校园通行码申请',
  '修改资料',
];

export default function() {
  const [keyword, setKeyword] = useState(lists);
  const [searchList, setSearchList] = useState(lists.slice(0, 8));
  const [open, setOpen] = useState(false);

  const sidebar = (
    <div className={styles['drawer-con']}>
      <span className={styles['close']} onClick={() => setOpen(!open)}>
        关闭
      </span>
      <UserForm />
    </div>
  );

  return (
    <div>
      <Drawer
        style={{ minHeight: document.documentElement.clientHeight }}
        open={open}
        onOpenChange={value => setOpen(!value)}
        sidebar={sidebar}
        position="bottom"
      >
        <div className={styles['header-search']}>
          <div className={styles['left-btn']}>
            <img src={left_icon} alt="" />
          </div>
          <div className={styles['search-con']}>
            <img src={search_icon} alt="" />
            <input placeholder="搜索" onChange={e => setKeyword(e.target.value)} />
          </div>
          <div
            className={styles['search-btn']}
            onClick={() => setSearchList(lists.filter(item => item.includes(keyword)))}
          >
            搜索
          </div>
        </div>
        <div className={styles['search-title']}>您是不是要找 :</div>
        <div className={styles['search-items']}>
          {searchList.map((item, index) => (
            <div
              key={index}
              className={styles['search-item']}
              onClick={() => {
                if (item === '学生校园通行码领取') {
                  router.push('/code');
                }
                if (item === '修改资料') {
                  setOpen(!open);
                }
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
