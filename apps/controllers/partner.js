var express = require("express");
var router = express.Router();
var ac_helpers = require("../helpers/account");
var DB = require("../common/DB");
var conn = DB.getConnection;

var web_title = "Partner - Cứu Hộ Giao Thông, Cứu Hộ Xe Cơ Giới Tại Khu Vực Đà Nẵng",
    app_name = "XXX Partner",
    logo = "/static/img/logo.png",
    favicon = "/static/img/favicon.ico",
    decription = "Đây là trang web dành cho Partner",
    date = new Date(),
    base_url = "CuuHoXe.TK";
var menu = [{
        name: "Home",
        path: "/"
    },
    {
        name: "Chi nhánh",
        path: "/chi-nhanh"
    },
    {
        name: "Dịch vụ",
        path: "/dich-vu"
    },
    {
        name: "Ưu đãi",
        path: "/uu-dai"
    },
    {
        name: "Tài khoản",
        path: "/"
    }
];


router.route("/")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "thongtintaikhoan",
                    web_title: web_title,
                    page_name: "Thông tin tài khoản",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Thông tin tài khoản",
                            path: "/"
                        }
                    ]
                }
            });
        else
            res.redirect("/account");
    });
router.route("/chi-nhanh")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "chinhanh",
                    web_title: web_title,
                    page_name: "Quản lí chi nhánh",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí chi nhánh",
                            path: "/chi-nhanh"
                        }
                    ]
                }
            });
        else
            res.redirect("/account");
    });
router.route("/chi-nhanh/them-chi-nhanh")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "themchinhanh",
                    web_title: web_title,
                    page_name: "Thêm chi nhánh mới",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí chi nhánh",
                            path: "/chi-nhanh"
                        },
                        {
                            name: "Thêm chi nhánh",
                            path: "/"
                        }
                    ]
                }
            });
        else
            res.redirect("/account");
    });
router.route("/chi-nhanh/sua-chi-nhanh/:id")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "suachinhanh",
                    web_title: web_title,
                    page_name: "Sửa chi nhánh mới",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí chi nhánh",
                            path: "/chi-nhanh"
                        },
                        {
                            name: "Sửa chi nhánh",
                            path: "/"
                        }
                    ],
                    id: req.params.id
                }
            });
        else
            res.redirect("/account");
    });
router.route("/chi-nhanh/xoa-chi-nhanh/:id")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.json({
                data: "Xóa " + req.params.id + " thành công"
            });
        else
            res.redirect("/account");
    });

router.route("/dich-vu")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "dichvu",
                    web_title: web_title,
                    page_name: "Quản lí dịch vụ",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí dịch vụ",
                            path: "/dich-vu"
                        }
                    ]
                }
            });
        else
            res.redirect("/account");
    });
router.route("/dich-vu/them-dich-vu")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "themdichvu",
                    web_title: web_title,
                    page_name: "Thêm dịch vụ mới",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí dịch vụ",
                            path: "/dich-vu"
                        },
                        {
                            name: "Thêm dịch vụ",
                            path: "/"
                        }
                    ]
                }
            });
        else
            res.redirect("/account");
    });
router.route("/dich-vu/sua-dich-vu/:id")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.render("partner", {
                data: {
                    page: "suadichvu",
                    web_title: web_title,
                    page_name: "Sửa dịch vụ mới",
                    app_name: app_name,
                    logo: logo,
                    favicon: favicon,
                    decription: decription,
                    year: date.getFullYear(),
                    base_url: base_url,
                    username: ac_helpers.getSessionUser(req).username,
                    hoten: ac_helpers.getSessionUser(req).hoten,
                    avatar: ac_helpers.getSessionUser(req).avatar,
                    menu: menu,
                    breadcrumb: [{
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: "Quản lí dịch vụ",
                            path: "/dich-vu"
                        },
                        {
                            name: "Sửa dịch vụ",
                            path: "/"
                        }
                    ],
                    id: req.params.id
                }
            });
        else
            res.redirect("/account");
    });
router.route("/dich-vu/xoa-dich-vu/:id")
    .get(function(req, res) {
        if (ac_helpers.kiemTraDangNhap(req))
            res.json({
                data: "Xóa " + req.params.id + " thành công"
            });
        else
            res.redirect("/account");
    });
module.exports = router;