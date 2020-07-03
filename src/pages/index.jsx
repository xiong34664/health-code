import styles from './index.less';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default function() {
  return (
    <div>
      <div className={styles['header']}></div>
      <SearchBar placeholder="Search" maxLength={8} />
      <div className={styles['title']}></div>
      <div ><div className={styles['header-nav']}></div>
        </div> 
    </div>
  );
}
