'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');

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
            {this.renderExam()}
        </div>
      </div>
    );
  },
  renderExam: function() {
    var result = [];
    for (var i = 0;i < examList.length; i++) {
      var exam = examList[i];
      result.push(<div key={exam.name} className="col-lg-4 col-md-4 col-sm-6">
        <div className="exam-card">
          <div className="title"><h3>{exam.name}</h3></div>
          {this.renderSubjects(exam.name, exam.subjects)}
        </div>
      </div>);
      result.push(addClearfixes.map(function(clearfix) {
        if ((i + 1) % clearfix.examCount == 0) {
          return <div className={"clearfix " + clearfix.className}></div>
        }
      }));
    }

    return (
      <div className="row">
        {result}
      </div>
    );
  },

  renderSubjects: function(exam, subjects) {
    return (
      <div className="subject-list">
        {subjects.map(function(subject) {
          return <li key={exam + '_' + subject}>{subject}</li>
        })}
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.react-root'));
