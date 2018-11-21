(function () {
    var banner = document.getElementById("recommendBannerList");
    var prev = document.getElementsByClassName("prevBtn")[0];
    var next = document.getElementsByClassName("nextBtn")[0];
    var page = document.getElementById("recommendPage");
    var num = 0;
    /*tupian*/
    function move(current) {

        banner.children[0].style.left = current + "px";
    }
    next.onclick = function (e) {

        if (num <= 0 && num > -1920) {
            num -= 960;
        } else if (num === -1920) {
            num = 0;
        }
        console.log(num);
        move(num);
        follow(num);
        return false;
    }
    prev.onclick = function () {

        if (num < 0) {
            num += 960;
        } else if (num === 0) {
            num = -1920
        }
        console.log(num);
        move(num);
        follow(num);
        return false;
    }
    //setInterval(next.onclick, 5000);
    /*yuandian*/
    function follow(num) {
        var childs = page.children;
        for (var child of childs) {
            child.className = "";
        }
        if (num === 0) {
            childs[0].className = "focus_bg";
        } else if (num === -960) {
            childs[1].className = "focus_bg";
        } else if (num === -1920) {
            childs[2].className = "focus_bg";
        }
    }
    page.onclick = function (e) {
        var childs = page.children;
        for (var child of childs) {
            child.className = "";
        }
        e.target.className = "focus_bg";
        if (e.target.getAttribute("data-toggal") === "btn1") {

            banner.children[0].style.left = 0;
        } else if (e.target.getAttribute("data-toggal") === "btn2") {

            banner.children[0].style.left = -960 + "px";
        } else if (e.target.getAttribute("data-toggal") === "btn3") {

            banner.children[0].style.left = -1920 + "px";
        }
    }
    //
    $.ajax({
        url: '/router/news',
        type: 'get',
        success: function (result) {
            console.log(result)
            var str = `<div class="news_box1">
            <h2>
                <img src="img/index/tit_news.gif" alt="">
            </h2>
            <div>
                <ul class="list_media">
                    <div>
                        <li class="media flex_row">
                            <div class="img">
                                <a href="#">
                                    <img src="${result[0].news_img}" alt="">
                                </a>
                            </div>
                            <div class="bd">
                                <div>
                                    <span>${result[0].news_time}</span>
                                </div>
                                <div>
                                    <a href="#">${result[0].news_title}</a>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li class="media flex_row">
                            <div class="img">
                                <a href="#">
                                    <img src="${result[1].news_img}" alt="">
                                </a>
                            </div>
                            <div class="bd">
                                <div>
                                    <span>${result[1].news_time}</span>
                                </div>
                                <div>
                                    <a href="#">${result[1].news_title}</a>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li class="media flex_row">
                            <div class="img">
                                <a href="#">
                                    <img src="${result[2].news_img}" alt="">
                                </a>
                            </div>
                            <div class="bd">
                                <div>
                                    <span>${result[2].news_time}</span>
                                </div>
                                <div>
                                    <a href="#">${result[2].news_title}</a>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li class="media flex_row">
                            <div class="img">
                                <a href="#">
                                    <img src="${result[3].news_img}" alt="">
                                </a>
                            </div>
                            <div class="bd">
                                <div>
                                    <span>${result[3].news_time}</span>
                                </div>
                                <div>
                                    <a href="#">${result[3].news_title}</a>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li class="media flex_row">
                            <div class="img">
                                <a href="#">
                                    <img src="${result[4].news_img}" alt="">
                                </a>
                            </div>
                            <div class="bd">
                                <div>
                                    <span>${result[4].news_time}</span>
                                </div>
                                <div>
                                    <a href="#">${result[4].news_title}</a>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                <div id="newsBtn">
                    <a href="#">新闻中心</a>
                </div>
            </div>
        </div>`;
            $('.index_media').append(str);
            //
            var str = `<div class="news_box2">
        <h2>
            <img src="img/index/tit_update.gif" alt="">
        </h2>
        <div>
            <ul class="list_media">
                <div>
                    <li class="media flex_row" style="width: 252px">
                        <div class="img">
                            <a href="#">
                                <img src="${result[5].news_img}" alt="">
                            </a>
                        </div>
                        <div class="bd">
                            <div>
                                <span>${result[5].news_time}</span>
                            </div>
                            <div>
                                <a href="#">${result[5].news_title}</a>
                            </div>
                        </div>
                    </li>
                </div>
                <div>
                    <li class="media flex_row">
                        <div class="img">
                            <a href="#">
                                <img src="${result[6].news_img}" alt="">
                            </a>
                        </div>
                        <div class="bd">
                            <div>
                                <span>${result[6].news_time}</span>
                            </div>
                            <div>
                                <a href="#">${result[6].news_title}</a>
                            </div>
                        </div>
                    </li>
                </div>
                <div>
                    <li class="media flex_row" style="width: 280px">
                        <div class="img">
                            <a href="#">
                                <img src="${result[7].news_img}" alt="">
                            </a>
                        </div>
                        <div class="bd">
                            <div>
                                <span>${result[7].news_time}</span>
                            </div>
                            <div>
                                <a href="#">${result[7].news_title}</a>
                            </div>
                        </div>
                    </li>
                </div>
                <div>
                    <li class="media flex_row">
                        <div class="img">
                            <a href="#">
                                <img src="${result[8].news_img}" alt="">
                            </a>
                        </div>
                        <div class="bd">
                            <div>
                                <span>${result[8].news_time}</span>
                            </div>
                            <div>
                                <a href="#">${result[8].news_title}</a>
                            </div>
                        </div>
                    </li>
                </div>
                <div>
                    <li class="media flex_row">
                        <div class="img">
                            <a href="#">
                                <img src="${result[9].news_img}" alt="">
                            </a>
                        </div>
                        <div class="bd">
                            <div>
                                <span>${result[9].news_time}</span>
                            </div>
                            <div>
                                <a href="#">${result[9].news_title}</a>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>`;
            $('.index_media').append(str);
            //
            var str = `<div class="news_box3">
    <h2>
        <img src="img/index/tit_notice.gif" alt="">
    </h2>
    <div>
        <ul class="list_media">
            <div>
                <li class="media flex_row">
                    <div class="img">
                        <a href="#">
                            <img src="${result[10].news_img}" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div>
                            <span>${result[10].news_time}</span>
                        </div>
                        <div>
                            <a href="#">${result[10].news_title}</a>
                        </div>
                    </div>
                </li>
            </div>
            <div>
                <li class="media flex_row">
                    <div class="img">
                        <a href="#">
                            <img src="${result[11].news_img}" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div>
                            <span>${result[11].news_time}</span>
                        </div>
                        <div>
                            <a href="#">${result[11].news_title}</a>
                        </div>
                    </div>
                </li>
            </div>
            <div>
                <li class="media flex_row">
                    <div class="img">
                        <a href="#">
                            <img src="${result[12].news_img}" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div>
                            <span>${result[12].news_time}</span>
                        </div>
                        <div>
                            <a href="#">${result[12].news_title}</a>
                        </div>
                    </div>
                </li>
            </div>
            <div>
                <li class="media flex_row">
                    <div class="img">
                        <a href="#">
                            <img src="${result[13].news_img}" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div>
                            <span>${result[13].news_time}</span>
                        </div>
                        <div>
                            <a href="#">${result[13].news_title}</a>
                        </div>
                    </div>
                </li>
            </div>
            <div>
                <li class="media flex_row">
                    <div class="img">
                        <a href="#">
                            <img src="${result[14].news_img}" alt="">
                        </a>
                    </div>
                    <div class="bd">
                        <div>
                            <span>${result[14].news_time}</span>
                        </div>
                        <div>
                            <a href="#">${result[14].news_title}</a>
                        </div>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</div>`;
            $('.index_media').append(str);
        }
    })
})()
