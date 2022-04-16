var chr = document.getElementById("chr");
var arm = document.getElementById("arm");
var nov = document.getElementById("nov");
function start() {
    $().setValue(1);
}
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
    $().setValue(id);
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
    }
    $.fn.setValue = function(id) {
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
            var postdata = {};
            postdata['askup'] = true;
            postdata['poolname'] = poolname;
            $("[name='up']").css('display', 'block');
            $.ajax({
                type: "post",
                url: "api.php",
                data: postdata,
                dataType: 'json',
                success: function(rs) {
                    if (rs.upr5 == null) {
                        rs.upr5 = "无UP";
                    }
                    if (rs.upr4 == null) {
                        rs.upr4 = "无UP";
                    }
                    $("[name='upr5']").html(rs.upr5);
                    $("[name='upr4']").html(rs.upr4);
                }
            });
        } else {
            $("[name='up']").css('display', 'none');
        }
    }
    async function gacha(poolname, times) {
        var postdata = {};
        postdata['poolname'] = poolname;
        $('#loading').css('display', 'block');
        i = 1;
        while (i <= times) {
            postdata['gachalog'] = gachalog;
            await $.ajax({
                type: "post",
                url: "api.php",
                data: postdata,
                dataType: 'json',
                success: function(rs) {
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
                            gachalog['chr']['lastr5'] = rs.name;
                            CR5num = CR5num + 1;
                        } else if ($('#arm').css("display") == "block") {
                            gachalog['arm']['r5c'] = gachalog['arm']['c'];
                            gachalog['arm']['lastr5'] = rs.name;
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
                    $.fn.setValue(id);
                    i++;
                }
            });
        }
        $('#loading').css('display', 'none');
    }
    $("button[name=only]").on('click', function() {
        if ($('#chr').css("display") == "block") {
            poolname = 'chr';
        } else if ($('#arm').css("display") == "block") {
            poolname = 'arm';
        } else if ($('#nov').css("display") == "block") {
            poolname = 'nov';
        }
        gacha(poolname, 1);
    });
    $("button[name=ten]").on('click', function() {
        if ($('#chr').css("display") == "block") {
            poolname = 'chr';
        } else if ($('#arm').css("display") == "block") {
            poolname = 'arm';
        } else if ($('#nov').css("display") == "block") {
            poolname = 'nov';
        }
        gacha(poolname, 10);
    });
});
