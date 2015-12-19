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
    tag: 'o-net',
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
    tag:  '๙',
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
    tag: 'GAT',
    subjects: [
      'GAT เชื่อมโยง',
      'GAT ภาษาอังกฤษ',
    ],
  },
  {
    name: 'PAT',
    tag: 'PAT',
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
    tag: 'ทุน',
    subjects: [
      'ข้อสอบทดสอบระบบ e-pretest',
    ],
  },
  {
    name: 'ความรู้ทั่วไป',
    tag: 'Misc',
    subjects: [
      'IELTS',
      'ความรู้ทั่วไป',
      'แบบทดสอบประเมินตนเอง',
    ],
  },
  {
    name: 'ข้อสอบโควตา',
    tag: 'โควตา',
    subjects: [
      'มหาวิทยาลัยขอนแก่น',
    ],
  },
  {
    name: 'ข้อสอบเก่า',
    tag: 'Ex',
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
          <SectionTitle name="เตรียมตัวเสียแต่เนิ่นๆ" description="ด้วยคลังข้อสอบพร้อมเฉลยละเอียด ให้น้องๆได้ฝึกทำจนมั่นใจ" />
          {examList.map(function(exam) {
            return <ExamCard key={exam.tag} {...exam} />;
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.react-root'));
