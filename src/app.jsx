'use strict';

var React         =   require('react');
var ReactDOM      =   require('react-dom');
var Header        =   require('./components/Header');
var SectionHeader =   require('./components/SectionHeader');
var ExamCard      =   require('./components/ExamCard');
var SubjectCard   =   require('./components/SubjectCard');
var Footer        =   require('./components/Footer');

var navItems = [
  {href: '#', title: 'ข้อสอบ'},
  {href: '#', title: 'ราคา'},
];

var examList = [
  {
    name: 'โอเน็ท',
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'O-NET',
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
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag:  '9 วิชา',
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
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'GAT',
    subjects: [
      'GAT เชื่อมโยง',
      'GAT ภาษาอังกฤษ',
    ],
  },
  {
    name: 'PAT',
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
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
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'ทุน',
    subjects: [
      'ข้อสอบทดสอบระบบ e-pretest',
    ],
  },
  {
    name: 'ความรู้ทั่วไป',
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'Misc',
    subjects: [
      'IELTS',
      'ความรู้ทั่วไป',
      'แบบทดสอบประเมินตนเอง',
    ],
  },
  {
    name: 'ข้อสอบโควตา',
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'โควตา',
    subjects: [
      'มหาวิทยาลัยขอนแก่น',
    ],
  },
  {
    name: 'ข้อสอบเก่า',
    description: 'แฮปปี้อินดอร์ซูม สตรอเบอรี รูบิค รีสอร์ตสโตนบูติก',
    tag: 'Ex',
    subjects: [
      'ภาษาไทย',
      'สังคมศึกษา',
    ],
  },

];

var subjectList = [
  {
    name: 'เลข',
    img:  'public/img/math.svg'
  },
  {
    name: 'ฟิสิกส์',
    img:  'public/img/physics.svg'
  },
  {
    name: 'เคมี',
    img:  'public/img/chemistry.svg'
  },
  {
    name: 'ชีวะ',
    img:  'public/img/bio.svg'
  },
  {
    name: 'ภาษาอังกฤษ',
    img:  'public/img/english.svg'
  },
  {
    name: 'ภาษาไทย',
    img:  'public/img/thai.svg'
  },
  {
    name: 'ภาษาญี่ปุ่น',
    img:  'public/img/japanese.svg'
  },
  {
    name: 'ประวัติศาสตร์',
    img:  'public/img/social.svg'
  },
];


var section1 = {
    name:          'ครบถ้วนทุกการสอบ',
    descriptions:  ['เตรียมตัวเสียแต่เนิ่นๆ', 'ด้วยคลังข้อสอบพร้อมเฉลยละเอียด ให้น้องๆได้ฝึกทำจนมั่นใจ']
};

var section2 = {
    name:          'พร้อมสอบทุกวิชา',
    descriptions:  ['เรามีข้อสอบให้ฝึกทำครบถ้วนทุกวิชา ทุกหัวข้อ', 'พร้อมเฉลยละเอียดโดยทีมงานวิชาการ']
};

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header navItems={navItems} />
        <section className="section-grey">
          <div className="container">
            <SectionHeader {...section1} />
            <div className="row">
              {examList.map(function(exam) {
                return <ExamCard key={exam.tag} {...exam} />;
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <SectionHeader {...section2} />
            <div className="row">
              {subjectList.map(function(subject) {
                return <SubjectCard {...subject} />;
              })}
            </div>
          </div>
        </section>
        <section className="section-grey">
          <div className="container">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.react-root'));
