var chr = document.getElementById("chr");
var arm = document.getElementById("arm");
var nov = document.getElementById("nov");
function pool(id) {
    pool1 = document.getElementById("pool1");
    pool2 = document.getElementById("pool2");
    pool3 = document.getElementById("pool3");
    if (chr.style.display == "block") {
        all = document.getElementById("Call-table");
        r5 = document.getElementById("Cr5-table");
        r4 = document.getElementById("Cr4-table");
    } else if (arm.style.display == "block") {
        all = document.getElementById("Aall-table");
        r5 = document.getElementById("Ar5-table");
        r4 = document.getElementById("Ar4-table");
    } else if (nov.style.display == "block") {
        all = document.getElementById("Nall-table");
        r5 = document.getElementById("Nr5-table");
        r4 = document.getElementById("Nr4-table");
    }
    if (all.style.display == "block") {
        showid = 1;
    } else if (r5.style.display == "block") {
        showid = 2;
    } else if (r4.style.display == "block") {
        showid = 3;
    }
    if (id == 1) {
        pool1.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        chr.style.display = "block";
        arm.style.display = "none";
        nov.style.display = "none";
    } else if (id == 2) {
        pool2.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        arm.style.display = "block";
        nov.style.display = "none";
        chr.style.display = "none";
    } else if (id == 3) {
        pool3.style = "border-width:0px;background:#FFB31E;color:#FFFFFF";
        pool1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        pool2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#FFB31E";
        nov.style.display = "block";
        chr.style.display = "none";
        arm.style.display = "none";
    }
    show(showid);
    $().setValue(id, "with");
}
function show(id) {
    show1 = document.getElementById("show1");
    show2 = document.getElementById("show2");
    show3 = document.getElementById("show3");
    if (chr.style.display == "block") {
        all = document.getElementById("Call-table");
        r5 = document.getElementById("Cr5-table");
        r4 = document.getElementById("Cr4-table");
    } else if (arm.style.display == "block") {
        all = document.getElementById("Aall-table");
        r5 = document.getElementById("Ar5-table");
        r4 = document.getElementById("Ar4-table");
    } else if (nov.style.display == "block") {
        all = document.getElementById("Nall-table");
        r5 = document.getElementById("Nr5-table");
        r4 = document.getElementById("Nr4-table");
    }
    if (id == 1) {
        show1.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        all.style.display = "block";
        r5.style.display = "none";
        r4.style.display = "none";
    } else if (id == 2) {
        show2.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show3.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        r5.style.display = "block";
        r4.style.display = "none";
        all.style.display = "none";
    } else if (id == 3) {
        show3.style = "border-width:0px;background:#32EB00;color:#FFFFFF";
        show1.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        show2.style = "border-width:2px;background:rgba(255,255,255,0.8);color:#32EB00";
        r4.style.display = "block";
        all.style.display = "none";
        r5.style.display = "none";
    }
}
function setpool(name) {
    undo = document.getElementById("undo");
    if (chr.style.display == "block") {
        $().choice(name, 'chr');
    } else if (arm.style.display == "block") {
        $().choice(name, 'arm');
        document.getElementById("upr5note").style.display = "inline";
    }
    undo.style.display = "inline";
    undo.setAttribute("onclick", "undopool('" + name + "');");
}
function undopool(name) {
    undo = document.getElementById("undo");
    if (chr.style.display == "block") {
        $().choice("", 'chr');
    } else if (arm.style.display == "block") {
        $().choice("", 'arm');
        document.getElementById("upr5note").style.display = "none";
    }
    undo.style.display = "none";
    document.getElementById(name + "radio").checked = false;
}
$(function() {
    var CR5num = 0;
    var CR4num = 0;
    var AR5num = 0;
    var AR4num = 0;
    var NR5num = 0;
    var NR4num = 0;
    var gachalog = {};
    gachalog['chr'] = {};
    gachalog['arm'] = {};
    gachalog['nov'] = {};
    for (var key in gachalog) {
        gachalog[key]['c'] = 0;
        gachalog[key]['r5c'] = 0;
        gachalog[key]['choice'] = "";
        gachalog[key]['r5times'] = 0;
    }
    var htmlSave = {};
    htmlSave['chr'] = "";
    htmlSave['arm'] = "";
    var itemsdata = $.ajax({
        type: "get",
        url: "items.json",
        async: false,
        dataType: 'json'
    });
    var items = itemsdata.responseJSON;
    function askup(poolname) {
        arrayname = "now-" + poolname;
        r5up = items.r5[arrayname];
        var r5upArr = [];
        if (r5up.length != 10 || r5up.length != 13) {
            for (var r5k in r5up) {
                r5upArr.push(r5up[r5k][1]);
            }
        } else {
            r5upArr.push(r5up[1]);
        }
        r4up = items.r4[arrayname];
        var r4upArr = [];
        if (r4up.length != 10 || r4up.length != 13) {
            for (var r4k in r4up) {
                r4upArr.push(r4up[r4k][1]);
            }
        } else {
            r4upArr.push(r4up[1]);
        }
        var result = [];
        result.upr5 = r5upArr;
        result.upr4 = r4upArr;
        return(result);
    }
    function action(poolname) {
        let info = gachalog[poolname];
        if (poolname == arm) {
            flootnum = 80;
            pluscell = 0.0994;
        } else {
            flootnum = 90;
            pluscell = 0.0497;
        }
        info['cx'] = info['c'] + 1;
        count = info['cx'] - info['r5c'];
        r5per = 0.006;
        r4per = 0.051;
        if (count >= 70) {
            r5per = r5per + (count - 70) * pluscell;
        }
        var seed = Math.random();
        var cseed = Math.random();
        if (count == 1 && info['r5c'] != 0 && (info['r5c'] % 10) == 0 && seed >= r5per) {
            seed = 0.05;
        }
        if (seed <= r5per || count == flootnum) {
            if (poolname == 'chr') {
                if ((cseed <= 0.5 || info['r5times'] == 1) && items.r5['now-chr'] != []) {
                    if (info['choice'] == "") {
                        crs = items.r5['now-chr'][Math.floor(Math.random() * items.r5['now-chr'].length)];
                    } else {
                        for (var r5nck in items.r5['now-chr']) {
                            if (items.r5['now-chr'][r5nck][1] == info['choice']) {
                                crs = items.r5['now-chr'][r5nck];
                            }
                        }
                    }
                } else {
                    crs = items.r5['always-chr'][Math.floor(Math.random() * items.r5['always-chr'].length)];
                }
            } else if (poolname == 'arm') {
                if ((cseed <= 0.5 || info['r5times'] == 2) && items.r5['now-arm'] != []) {
                    if (info['choice'] == "" || info['r5times'] != 2) {
                        crs = items.r5['now-arm'][Math.floor(Math.random() * items.r5['now-arm'].length)];
                    } else {
                        for (var r5nck in items.r5['now-arm']) {
                            if (items.r5['now-arm'][r5nck][1] == info['choice']) {
                                crs = items.r5['now-arm'][r5nck];
                            }
                        }
                    }
                } else {
                    crs = items.r5['always-arm'][Math.floor(Math.random() * items.r5['always-arm'].length)];
                }
            } else {
                if (cseed <= 0.5) {
                    crs = items.r5['always-chr'][Math.floor(Math.random() * items.r5['always-chr'].length)];
                } else {
                    crs = items.r5['always-arm'][Math.floor(Math.random() * items.r5['always-arm'].length)];
                }
            }
        } else if ((seed > r5per && seed <= (r5per + r4per)) || (info['cx'] % 10) == 0) {
            if (poolname == 'chr') {
                if (cseed <= 0.5 && items.r4['now-chr'].length != 0) {
                    crs = items.r4['now-chr'][Math.floor(Math.random() * items.r4['now-chr'].length)];
                } else {
                    crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
                }
            } else if (poolname == 'arm') {
                 console.log(items.r4['now-arm']);
                if (cseed <= 0.5 && items.r4['now-arm'].length != 0) {
                    crs = items.r4['now-arm'][Math.floor(Math.random() * items.r4['now-arm'].length)];
                } else {
                    crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
                }
            } else {
                crs = items.r4['always'][Math.floor(Math.random() * items.r4['always'].length)];
            }
        } else {
            crs = items.r3['always'][Math.floor(Math.random() * items.r3['always'].length)];
        }
        if (crs.length == 13) {
            rank = crs[2];
        } else if (crs.length == 10) {
            rank = crs[3];
        }
        var result = [];
        result.rank = rank;
        result.img = "<div><img src=\"" + crs[0] + "\" style='hight:40px;width:40px' align='absmiddle'/>";
        result.name = crs[1];
        return(result);
    }
    $.fn.setValue = function(id, option) {
        if (id == 1) {
            poolname = 'chr';
            flootnum = 90;
            R5num = CR5num;
            R4num = CR4num;
        } else if (id == 2) {
            poolname = 'arm';
            flootnum = 80;
            R5num = AR5num;
            R4num = AR4num;
        } else if (id == 3) {
            poolname = 'nov';
            flootnum = 90;
            R5num = NR5num;
            R4num = NR4num;
        }
        $("[name='times']").html(gachalog[poolname]['c']);
        $("[name='spend']").html(gachalog[poolname]['c'] * 160);
        $("[name='r3num']").html(gachalog[poolname]['c'] - R5num - R4num);
        $("[name='r3per']").html(((gachalog[poolname]['c'] - R5num - R4num) / gachalog[poolname]['c'] * 100).toFixed(2));
        $("[name='r4num']").html(R4num);
        $("[name='r4per']").html((R4num / gachalog[poolname]['c'] * 100).toFixed(2));
        $("[name='r5num']").html(R5num);
        $("[name='r5per']").html((R5num / gachalog[poolname]['c'] * 100).toFixed(2));
        $("[name='floot']").html(flootnum - (gachalog[poolname]['c'] - gachalog[poolname]['r5c']));
        if (id != 3) {
            $("[name='up']").css('display', 'block');
            if (option != "without") {
                if (htmlSave[poolname] != "") {
                    $("[name='up']").html = htmlSave[poolname];
                    return;
                }
                rs = askup(poolname);
                var upr5text = "";
                var upr4text = "";
                for (var r5id in rs.upr5) {
                    if (rs.upr5.length > 1) {
                        upr5tag = "<input type='radio' id='" + rs.upr5[r5id] + "radio' name='choice' onclick=\"setpool('" + rs.upr5[r5id] + "');\"> ";
                    } else {
                        if (poolname == 'chr') {
                            $.fn.choice(rs.upr5[r5id], "chr");
                        }
                        upr5tag = "";
                    }
                    upr5text = upr5text + upr5tag + rs.upr5[r5id] + " ";
                    gachalog[poolname]['upr5'] = rs.upr5;
                }
                for (var r4id in rs.upr4) {
                    upr4text = upr4text + rs.upr4[r4id] + " ";
                    gachalog[poolname]['upr4'] = rs.upr4;
                }
                if (rs.upr5.length > 1) {
                    if (poolname == 'chr') {
                        upr5text = "(点击单选框选择角色)<br>" + upr5text + "<button id='undo' onclick='' style='display:none'>撤销</button>";
                    } else if (poolname == 'arm') {
                        upr5text = "(点击单选框设置定轨)<br>" + upr5text + "<button id='undo' onclick='' style='display:none'>撤销</button><span id='upr5note' style='display:none;color:#FF0000'><br>警告：撤销或修改定轨后会重置记录!</span>";
                    }
                }
                $("[name='upr5']").html(upr5text);
                $("[name='upr4']").html(upr4text);
                if (rs.upr5.length == 0) {
                    $("[name='upr5']").html("无UP");
                }
                if (rs.upr4.length == 0) {
                    $("[name='upr4']").html("无UP");
                }
            }
        } else {
            $("[name='up']").css('display', 'none');
        }
    }
    $.fn.choice = function(name, poolname) {
        if (poolname == 'arm' && gachalog['arm']['choice'] != "") {
            gachalog['arm']['c'] = 0;
            gachalog['arm']['r5c'] = 0;
            gachalog['arm']['r5times'] = 0;
            AR5num = 0;
            AR4num = 0;
            $("#AAtbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $("#AR5tbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $("#AR4tbMain").after("<tr><td>重置</td><td>重置</td><td style='text-align:center'>重置</td></tr>");
            $.fn.setValue(2, "without");
        }
        gachalog[poolname]['choice'] = name;
        htmlSave[poolname] = $("[name='up']").html;
        if (name = "") {
            htmlSave[poolname] = "";
        }
    }
    function gacha(poolname, times) {
        $('#loading').css('display', 'block');
        i = 1;
        while (i <= times) {
            rs = action(poolname);
            if ($('#chr').css("display") == "block") {
                AtbMain = "#CAtbMain";
                R5tbMain = "#CR5tbMain";
                R4tbMain = "#CR4tbMain";
                id = 1;
                gachalog['chr']['c'] = gachalog['chr']['c'] + 1;
                num = gachalog['chr']['c'];
            } else if ($('#arm').css("display") == "block") {
                AtbMain = "#AAtbMain";
                R5tbMain = "#AR5tbMain";
                R4tbMain = "#AR4tbMain";
                id = 2;
                gachalog['arm']['c'] = gachalog['arm']['c'] + 1;
                num = gachalog['arm']['c'];
            } else if ($('#nov').css("display") == "block") {
                AtbMain = "#NAtbMain";
                R5tbMain = "#NR5tbMain";
                R4tbMain = "#NR4tbMain";
                id = 3;
                gachalog['nov']['c'] = gachalog['nov']['c'] + 1;
                num = gachalog['nov']['c'];
            }
            $(AtbMain).after("<tr><td>" + num + "</td><td>" + rs.rank + "</td><td style='text-align:left'>" + rs.img + " " + rs.name + "</td></tr>");
            if (rs.rank == "5星") {
                $(R5tbMain).after("<tr><td>" + num + "</td><td>" + rs.rank + "</td><td style='text-align:left'>" + rs.img + " " + rs.name + "</td></tr>");
                if ($('#chr').css("display") == "block") {
                    gachalog['chr']['r5c'] = gachalog['chr']['c'];
                    if (rs.name == gachalog['chr']['choice'] || gachalog['chr']['choice'] == "") {
                        gachalog['chr']['r5times'] = 0;
                    } else {
                        gachalog['chr']['r5times'] = gachalog['chr']['r5times'] + 1;
                    }
                    CR5num = CR5num + 1;
                } else if ($('#arm').css("display") == "block") {
                    gachalog['arm']['r5c'] = gachalog['arm']['c'];
                    if (rs.name == gachalog['arm']['choice'] || gachalog['arm']['choice'] == "") {
                        gachalog['arm']['r5times'] = 0;
                    } else {
                        gachalog['arm']['r5times'] = gachalog['arm']['r5times'] + 1;
                    }
                    AR5num = AR5num + 1;
                } else if ($('#nov').css("display") == "block") {
                    gachalog['nov']['r5c'] = gachalog['nov']['c'];
                    NR5num = NR5num + 1;
                }
            } else if (rs.rank == "4星") {
                $(R4tbMain).after("<tr><td>" + num + "</td><td>" + rs.rank + "</td><td style='text-align:left'>" + rs.img + " " + rs.name + "</td></tr>");
                if ($('#chr').css("display") == "block") {
                    CR4num = CR4num + 1;
                } else if ($('#arm').css("display") == "block") {
                    AR4num = AR4num + 1;
                } else if ($('#nov').css("display") == "block") {
                    NR4num = NR4num + 1;
                }
            }
            $.fn.setValue(id, "without");
            i++;
        }
        $('#loading').css('display', 'none');
    }
    $("button[name=only]").on('click', function() {
        if ($('#loading').css("display") == "block") {
            return;
        } else if ($('#chr').css("display") == "block") {
            poolname = 'chr';
        } else if ($('#arm').css("display") == "block") {
            poolname = 'arm';
        } else if ($('#nov').css("display") == "block") {
            poolname = 'nov';
        }
        gacha(poolname, 1);
    });
    $("button[name=ten]").on('click', function() {
        if ($('#loading').css("display") == "block") {
            return;
        }else if ($('#chr').css("display") == "block") {
            poolname = 'chr';
        } else if ($('#arm').css("display") == "block") {
            poolname = 'arm';
        } else if ($('#nov').css("display") == "block") {
            poolname = 'nov';
        }
        gacha(poolname, 10);
    });
});
