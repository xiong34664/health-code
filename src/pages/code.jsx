/**
 * title: 申请人领取-学生校园通行码领取
 */
import { connect } from 'dva';
import styles from './index.less';
import QRCode from 'qrcode.react';
import back_icon from '@/assets/back-icon.png';
import school_icon from '@/assets/school-icon.png';
import more_icon from '@/assets/more-icon.png';
import { router } from 'umi';

function CodePage(props) {
  const { name, idNumber, school, studentId, startTime, endTime } = props;

  return (
    <div className={styles['basic-layout']}>
      <div className={styles['header-nav']}>
        <div className={styles['nav-left']}>
          <div className={styles['back-btn']} onClick={router.goBack}>
            <img src={back_icon} alt="" />
          </div>
        </div>
        <div className={styles['nav-title']}>
          <div className={styles['btn-default']}>通过</div>
        </div>
        <div className={styles['nav-right']}>
          <div className={styles['more-btn']}>
            <img src={more_icon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles['code-con']}>
        <img src={school_icon} alt="" className={styles['school-pic']} />
        <p className={styles['prompt-title']}>
          Everyone is responsible for epidemic prevention on campus
        </p>
        <div className={styles['item-text']}>
          {name}
          <span className={styles['mark-code']}>校园通行码</span>
          <span className={styles['mark-es']}>Campus Pass Code</span>
        </div>
        <div className={styles['item-text']}>{school || '计算机科学与技术学院、软件学院'}</div>
        <div className={styles['item-idNumber']}>{idNumber}</div>
        <div className={styles['time-lable']}>生成时间 Generation time:</div>
        <div className={styles['time-con']}>{startTime}</div>
        <div className={styles['time-lable']}>到期时间 Expire time:</div>
        <div className={styles['time-con']}>{endTime}</div>
        <QRCode
          value={`${studentId}_${name}`}
          bgColor={'rgba(0,0,0,0)'}
          fgColor={'rgb(57,131,202)'}
          className={styles['qrcode-img']}
        />
        <div className={styles['note']}>
          凭此码可在学校朝晖校区、屏峰校区、莫干山校区范围内配合有效证件通行，请主动出示，配合检查。
        </div>
        <div className={styles['note']}>
          This code can be used to pass with valid documents in the Zhaohui campus, Pingfeng campus
          and Moganshan campus. Please present it actively and cooperate with the inspection.
        </div>
      </div>
      <div className={styles['footer']}>版权所有&copy;浙江工业大学</div>
    </div>
  );
}

export default connect(state => state.global)(CodePage);
