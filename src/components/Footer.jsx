var React = require('React');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <img src="public/img/logo.png" />
        <div className="info">
          <div className="text">
            บริษัท เอ็ดดูเคชั่น สตูดิโอ จำกัด สำนักงานใหญ่: ชั้น 26 อาคารเสริมมิตรทาวเวอร์ 159/40 ถนนสุขุมวิท 21 (อโศก) แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110
          </div>
          <div className="text">
            Tel: 02-665-7445 Fax: 02-665-7405 Facebook:epretest
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
