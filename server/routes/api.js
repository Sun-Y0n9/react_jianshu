var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/home/hotList', function(req, res, next) {
  res.json({
    success: true,
    data: ["高考","区块链","三生三世","崔永元","vue","小程序","茶点微小说","萨沙讲史堂","夜幕下的地安门","擦亮你的眼","理财","毕业","手帐","简书交友","spring","古风","故事","暖寄归人","旅行","连载","教育","简书","生活","投稿","历史","PHP","考研","docker","EOS","微信小程序","PPT","职场","大数据","创业","书评","东凤","饱醉豚","雨落荒原","程序员","爬虫","时间管理","kotlin","数据分析","阴阳合同","设计","红楼梦","父亲节","女人和衣服","swift","高考作文"]
  });
});

module.exports = router;