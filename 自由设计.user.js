// ==UserScript==
// @name         自由设计
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  自由设计网页
// @author       Zhangsq37
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant    none
// @grant    GM_registerMenuCommand
// @updateURL    https://gitee.com/zhangsongqiang/userscript/raw/main/自由设计.user.js
// @noframes
// ==/UserScript==

(function() {
    var title = document.title;
    var url = window.location.href;

    console.log(title);
    console.log(url);

    var topwindow_html = document.createElement("div");
    topwindow_html.innerHTML = '<div id="topwindow_btn"></div><div id="topwindow"></div><style> div#topwindow_btn{    width: 32px;    height: 32px;  position: fixed;    z-index: 100001;    top:10%;    left: 90%;}div#topwindow_btn>div{   width: 96px;   height:96px;   border-radius: 48px;   border: 1px solid black;   box-shadow: 2px 2px 20px 0px;   zoom: 0.333;   transition: 0.5s;}div#topwindow_btn div:hover{   box-shadow: 6px 6px 20px 5px;}div#topwindow{   width: 400px;   height: 600px;   opacity: 0.5;   border-radius: 16px;   border: 1px solid black;   background-color: lightgray;   z-index: 100000;   position: fixed;   top:10%;   left: calc(90% - 368px);   resize:vertical;   overflow: hidden;}<\style>';

    document.body.appendChild(topwindow_html);
    //document.body.appendChild(css);

    var btn = document.querySelector("div#topwindow_btn");
    btn.innerHTML = '<div class="open_btn" title="点击进入编辑模式"><svg width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><path fill="#666666" stroke="#000" d="m53.31026,60.49986l-2.06517,-7.22811c0.60522,-0.53089 1.17327,-1.09895 1.70948,-1.70682l7.2228,2.06517c0.76183,-1.10957 1.41748,-2.28815 2.00412,-3.51186l-5.37529,-5.20275c0.25748,-0.76449 0.48046,-1.54224 0.63973,-2.34389l7.24403,-1.81565c0.05309,-0.66893 0.10352,-1.3405 0.10352,-2.02536s-0.05309,-1.35378 -0.10352,-2.0227l-7.24403,-1.81565c-0.16192,-0.80165 -0.3849,-1.57941 -0.63973,-2.34389l5.37795,-5.20275c-0.58929,-1.22105 -1.24494,-2.40229 -2.00678,-3.51186l-7.2228,2.06252c-0.53355,-0.60522 -1.10426,-1.17327 -1.70948,-1.70682l2.06517,-7.22545c-1.10957,-0.75918 -2.2908,-1.41748 -3.51451,-2.00412l-5.20275,5.37795c-0.76183,-0.25748 -1.54224,-0.4778 -2.34389,-0.63973l-1.813,-7.24669c-0.67158,-0.05043 -1.3405,-0.10352 -2.02536,-0.10352s-1.35378,0.05309 -2.0227,0.10352l-1.81565,7.24669c-0.80165,0.16192 -1.57941,0.38224 -2.34389,0.63973l-5.20275,-5.37795c-1.22105,0.5946 -2.39964,1.25025 -3.5092,2.01208l2.06517,7.22545c-0.60522,0.53089 -1.17593,1.1016 -1.70682,1.70417l-7.22545,-2.06517c-0.76183,1.10957 -1.41748,2.2908 -2.00412,3.51451l5.37795,5.20275c-0.25483,0.76449 -0.4778,1.54224 -0.63973,2.34389l-7.24669,1.81565c-0.05043,0.66893 -0.10352,1.3405 -0.10352,2.0227s0.05309,1.35378 0.10352,2.02536l7.24669,1.81565c0.16192,0.80165 0.3849,1.57941 0.63973,2.34389l-5.37795,5.20275c0.58664,1.22105 1.24229,2.40229 2.00412,3.51186l7.22545,-2.06517c0.53089,0.60787 1.1016,1.17327 1.70682,1.70682l-2.06517,7.22811c1.10957,0.75918 2.2908,1.41483 3.51186,2.00412l5.20275,-5.37795c0.76449,0.25748 1.54224,0.48046 2.34389,0.63973l1.81565,7.24403c0.66893,0.05309 1.3405,0.10352 2.02536,0.10352s1.35378,-0.05309 2.02536,-0.10352l1.813,-7.24403c0.80165,-0.16192 1.58206,-0.3849 2.34389,-0.63973l5.20275,5.37795c1.2184,-0.5946 2.39964,-1.25025 3.5092,-2.00943l-0.00001,0zm-14.89685,-12.74408c-4.98243,0 -9.02252,-4.0401 -9.02252,-9.02252s4.0401,-9.01987 9.02252,-9.01987s9.01987,4.03744 9.01987,9.01987s-4.03744,9.02252 -9.01987,9.02252zm41.12296,18.85997c0.05043,-1.45199 -0.15927,-2.93053 -0.61053,-4.39048l3.30215,-4.70637c-0.49904,-0.92906 -1.06179,-1.81034 -1.70151,-2.61199l-5.63277,1.18124c-1.13611,-0.96623 -2.42884,-1.72009 -3.81181,-2.25895l-1.62188,-5.51863c-1.02462,-0.1805 -2.06252,-0.27872 -3.11369,-0.28137l-2.58545,5.13904c-0.7406,0.14334 -1.48119,0.33977 -2.20851,0.61849c-0.6822,0.26014 -1.31927,0.58398 -1.9298,0.93703l-5.32486,-2.17401c-0.78838,0.69547 -1.50774,1.44668 -2.15808,2.2616l2.4076,5.22399c-0.68751,1.31396 -1.16,2.72879 -1.37767,4.20733l-5.01959,2.81373c0.05043,1.02993 0.20174,2.05986 0.43533,3.09245l5.58499,1.37767c0.61318,1.39094 1.43607,2.63588 2.43149,3.69767l-0.93437,5.67525c0.84943,0.61053 1.75195,1.13611 2.68897,1.59268l4.55241,-3.50389c1.42279,0.37428 2.91195,0.51762 4.41172,0.39817l3.85428,4.26572c0.53089,-0.1513 1.05913,-0.31323 1.58206,-0.51231c0.46453,-0.17519 0.90252,-0.38224 1.3405,-0.59195l0.09822,-5.74692c1.20778,-0.89986 2.23771,-1.98288 3.05794,-3.20128l5.7363,-0.3557c0.40348,-0.95295 0.7406,-1.94307 0.97684,-2.95973l-4.4303,-3.66847l0.00002,-0.00001zm-11.05054,5.32751c-3.18801,1.21574 -6.75561,-0.38224 -7.97401,-3.57025s0.37959,-6.75827 3.5676,-7.97667c3.18801,-1.21574 6.76092,0.38224 7.97932,3.57025c1.21574,3.18801 -0.3849,6.75827 -3.57291,7.97667z" id="svg_3" stroke-width="2"/></g></svg></div>';
    var topwindow = document.querySelector("div#topwindow");
    topwindow.style.visibility = "hidden";

    // document.onkeydown = handlekey;
    // function handlekey(event) {
    //     // 当然还要组织浏览器的默认事件
    //     event.preventDefault();
    //     var key = event.keyCode || event.which
    //     var ctrlKey = event.ctrlKey || event.metaKey;
    //     if (ctrlKey && key == 85) {
    //         alert('你按了组合键: ctrl + U' );
    //         btn_clicked();
    //     }
    //     event.initEvent();
    // }

    btn.onclick = btn_clicked;

    function btn_clicked(){
        if(document.designMode=="on"){
            // topwindow.style.visibility = "hidden";
            //关闭窗口函数
            document.designMode="off";
            btn.innerHTML = '<div class="open_btn" title="点击进入编辑模式"><svg width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><path fill="#666666" stroke="#000" d="m53.31026,60.49986l-2.06517,-7.22811c0.60522,-0.53089 1.17327,-1.09895 1.70948,-1.70682l7.2228,2.06517c0.76183,-1.10957 1.41748,-2.28815 2.00412,-3.51186l-5.37529,-5.20275c0.25748,-0.76449 0.48046,-1.54224 0.63973,-2.34389l7.24403,-1.81565c0.05309,-0.66893 0.10352,-1.3405 0.10352,-2.02536s-0.05309,-1.35378 -0.10352,-2.0227l-7.24403,-1.81565c-0.16192,-0.80165 -0.3849,-1.57941 -0.63973,-2.34389l5.37795,-5.20275c-0.58929,-1.22105 -1.24494,-2.40229 -2.00678,-3.51186l-7.2228,2.06252c-0.53355,-0.60522 -1.10426,-1.17327 -1.70948,-1.70682l2.06517,-7.22545c-1.10957,-0.75918 -2.2908,-1.41748 -3.51451,-2.00412l-5.20275,5.37795c-0.76183,-0.25748 -1.54224,-0.4778 -2.34389,-0.63973l-1.813,-7.24669c-0.67158,-0.05043 -1.3405,-0.10352 -2.02536,-0.10352s-1.35378,0.05309 -2.0227,0.10352l-1.81565,7.24669c-0.80165,0.16192 -1.57941,0.38224 -2.34389,0.63973l-5.20275,-5.37795c-1.22105,0.5946 -2.39964,1.25025 -3.5092,2.01208l2.06517,7.22545c-0.60522,0.53089 -1.17593,1.1016 -1.70682,1.70417l-7.22545,-2.06517c-0.76183,1.10957 -1.41748,2.2908 -2.00412,3.51451l5.37795,5.20275c-0.25483,0.76449 -0.4778,1.54224 -0.63973,2.34389l-7.24669,1.81565c-0.05043,0.66893 -0.10352,1.3405 -0.10352,2.0227s0.05309,1.35378 0.10352,2.02536l7.24669,1.81565c0.16192,0.80165 0.3849,1.57941 0.63973,2.34389l-5.37795,5.20275c0.58664,1.22105 1.24229,2.40229 2.00412,3.51186l7.22545,-2.06517c0.53089,0.60787 1.1016,1.17327 1.70682,1.70682l-2.06517,7.22811c1.10957,0.75918 2.2908,1.41483 3.51186,2.00412l5.20275,-5.37795c0.76449,0.25748 1.54224,0.48046 2.34389,0.63973l1.81565,7.24403c0.66893,0.05309 1.3405,0.10352 2.02536,0.10352s1.35378,-0.05309 2.02536,-0.10352l1.813,-7.24403c0.80165,-0.16192 1.58206,-0.3849 2.34389,-0.63973l5.20275,5.37795c1.2184,-0.5946 2.39964,-1.25025 3.5092,-2.00943l-0.00001,0zm-14.89685,-12.74408c-4.98243,0 -9.02252,-4.0401 -9.02252,-9.02252s4.0401,-9.01987 9.02252,-9.01987s9.01987,4.03744 9.01987,9.01987s-4.03744,9.02252 -9.01987,9.02252zm41.12296,18.85997c0.05043,-1.45199 -0.15927,-2.93053 -0.61053,-4.39048l3.30215,-4.70637c-0.49904,-0.92906 -1.06179,-1.81034 -1.70151,-2.61199l-5.63277,1.18124c-1.13611,-0.96623 -2.42884,-1.72009 -3.81181,-2.25895l-1.62188,-5.51863c-1.02462,-0.1805 -2.06252,-0.27872 -3.11369,-0.28137l-2.58545,5.13904c-0.7406,0.14334 -1.48119,0.33977 -2.20851,0.61849c-0.6822,0.26014 -1.31927,0.58398 -1.9298,0.93703l-5.32486,-2.17401c-0.78838,0.69547 -1.50774,1.44668 -2.15808,2.2616l2.4076,5.22399c-0.68751,1.31396 -1.16,2.72879 -1.37767,4.20733l-5.01959,2.81373c0.05043,1.02993 0.20174,2.05986 0.43533,3.09245l5.58499,1.37767c0.61318,1.39094 1.43607,2.63588 2.43149,3.69767l-0.93437,5.67525c0.84943,0.61053 1.75195,1.13611 2.68897,1.59268l4.55241,-3.50389c1.42279,0.37428 2.91195,0.51762 4.41172,0.39817l3.85428,4.26572c0.53089,-0.1513 1.05913,-0.31323 1.58206,-0.51231c0.46453,-0.17519 0.90252,-0.38224 1.3405,-0.59195l0.09822,-5.74692c1.20778,-0.89986 2.23771,-1.98288 3.05794,-3.20128l5.7363,-0.3557c0.40348,-0.95295 0.7406,-1.94307 0.97684,-2.95973l-4.4303,-3.66847l0.00002,-0.00001zm-11.05054,5.32751c-3.18801,1.21574 -6.75561,-0.38224 -7.97401,-3.57025s0.37959,-6.75827 3.5676,-7.97667c3.18801,-1.21574 6.76092,0.38224 7.97932,3.57025c1.21574,3.18801 -0.3849,6.75827 -3.57291,7.97667z" id="svg_3" stroke-width="2"/></g></svg></div>';
        }
        else{
            // topwindow.style.visibility = "visible";
            //打开窗口函数
            document.designMode="on";
            btn.innerHTML = '<div class="close_btn" title="点击关闭编辑模式"><svg width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><ellipse fill="#cccccc" cx="48" cy="48" id="svg_13" rx="41.46341" ry="41.46341" stroke="#000" stroke-width="0" filter="url(#svg_13_blur)"/><path fill="#7f0000" stroke="#000" d="m78.73171,68.29783l-20.29599,-20.29599l20.2923,-20.29599l-10.43203,-10.43941l-20.29599,20.29599l-20.29599,-20.29599l-10.43203,10.43941l20.2923,20.29599l-20.29599,20.29599l10.43941,10.43572l20.2923,-20.29599l20.2923,20.29599" id="svg_12" filter="url(#svg_12_blur)"/></g><defs><filter id="svg_13_blur"><feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/></filter><filter id="svg_12_blur"><feGaussianBlur in="SourceGraphic" stdDeviation="1.7"/></filter></defs></svg></div></div>';
        }


    }
    //topwindow是窗口节点元素，宽400px；高600px
})();