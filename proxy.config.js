var mockjs = require('mockjs');
module.exports = {

    '/api/*': 'http://localhost:3334',

    'OPTIONS *': function (req, res) {
        // res.set("Access-Control-Allow-Origin", "*"); // dora 自己会加上
        res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, dealer-id, api-auth-method,x-auth-token,request-id");
        // res.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS");

        res.status(200).end();
    },
    'GET /api/users': mockjs.mock({
        code: '0000',
        msg: '请求成功',
        data: {
            lists:[{name: '@Name'}],
            'list|10': [{
                'id|+1': 1
                , name: '@cname'
                , date: '@date(yyyymmdd)'
                , phone: /^[1][358][0-9]{9}/
                , 'sex|1-2': 1
                , 'age|1-100': 1
                , birthday: '@datetime("yyyy-MM-dd")'
                , 'mode|1-3': 1
                , value: '@cname'
                , 'permission|1-15': 1

            }],
            total:20,
        },
    }),
    '/api/permissions': function (req, res) {
        res.json(mockjs.mock({
            status: 1,
            data: {
                'permissions|10': [{
                    'id|+1': 1
                    , name: '@cname'
                    , date: '@date(yyyymmdd)'
                    , phone: /^[1][358][0-9]{9}/
                    , 'sex|1-2': 1
                    , 'age|1-100': 1
                    , birthday: '@datetime("yyyy-MM-dd")'
                    , 'mode|1-3': 1
                    , value: '@cname'
                    , 'permission|1-15': 1

                }],
                total: 20
            }
        }));
    }
};
