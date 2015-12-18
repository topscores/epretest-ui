'use strict';

var React       =   require('react');
var ReactDOM    =   require('react-dom');
var Header      =   require('./components/Header');
var SectionTitle=   require('./components/SectionTitle');
var ExamCard    =   require('./components/ExamCard');

var navItems = [
  {href: '#', title: 'ข้อสอบ'},
  {href: '#', title: 'ราคา'},
];

var examList = [
  {
    name: 'โอเน็ท',
    subjects: [
      'ภาษาไทย',
      'สังคม',
      'ภาษาอังกฤษ',
      'คณิตศาสตร์',
      'วิทยาศาสตร์',
      'สุขศึกษาและพลศึกษา',
      'ศิลปะ',
      'การงานพื้นฐานอาชีพ',
    ],
  },
  {
    name: '9 วิชาสามัญ',
    subjects: [
      'ภาษาไทย',
      'สังคม',
      'ภาษาอังกฤษ',
      'คณิตศาสตร์ 1',
      'ฟิสิกส์',
      'เคมี',
      'ชีวะ',
    ],
  },
  {
    name: 'GAT',
    subjects: [
      'GAT เชื่อมโยง',
      'GAT ภาษาอังกฤษ',
    ],
  },
  {
    name: 'PAT',
    subjects: [
      'PAT 1 ความถนัดทางคณิตศาสตร์',
      'PAT 2 ความถนัดทางวิทยาศาสตร์',
      'PAT 3 ความถนัดทางวิศวกรรมศาสตร์',
      'PAT 4 ความถนัดทางสถาปัต ฯ',
      'PAT 7.1 ความถนัดทางภาษาฝรั่งเศส',
      'PAT 7.2 ความถนัดทางภาษาเยอรมัน',
      'PAT 7.3 ความถนัดทางภาษาญี่ปุ่น',
      'PAT 7.4 ความถนัดทางภาษาจีน',
      'PAT 7.5 ความถนัดทางภาษาอาหรับ',
      'PAT 7.6 ความถนัดทางภาษาบาลี',
    ],
  },
  {
    name: 'ข้อสอบทุน',
    subjects: [
      'ข้อสอบทดสอบระบบ e-pretest',
    ],
  },
  {
    name: 'ความรู้ทั่วไป',
    subjects: [
      'IELTS',
      'ความรู้ทั่วไป',
      'แบบทดสอบประเมินตนเอง',
    ],
  },
  {
    name: 'ข้อสอบโควตา',
    subjects: [
      'มหาวิทยาลัยขอนแก่น',
    ],
  },
  {
    name: 'ข้อสอบเก่า',
    subjects: [
      'ภาษาไทย',
      'สังคมศึกษา',
    ],
  },

];

var addClearfixes = [
  {className: 'visible-xs', examCount: '2'},
  {className: 'visible-md', examCount: '3'},
  {className: 'visible-lg', examCount: '3'},
];

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header navItems={navItems} />
        <div className="container">
          <SectionTitle name="เรามีข้อสอบครบถ้วนทุกวิชา" description="เริ่มเตรียมตัวสอบเสียแต่เนิ่นๆ" />
            {examList.map(function(exam) {
            return <ExamCard exam={exam} />;
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.react-root'));
