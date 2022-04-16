<?php
$items = file_get_contents("items.json");
$itemsArr = json_decode($items, true);
if ($_POST['askup'] != array()){
    $arrayName = "now-".$_POST['poolname'];
    $r5up = $itemsArr['r5'][$arrayName];
    if (count($r5up) != 10 || count($r5up) != 13){
        foreach ($r5up as $r5k => $r5v) $r5upText .= $r5v[1]." ";
    }else{
        $r5upText = $r5up[1];
    };
    $r4up = $itemsArr['r4'][$arrayName];
    if (count($r4up) != 10 || count($r4up) != 13){
        foreach ($r4up as $r4k => $r4v) $r4upText .= $r4v[1]." ";
    }else{
        $r4upText = $r4up[1];
    };
    print_r(json_encode(['upr5' => $r5upText, 'upr4' => $r4upText]));
    exit;
};
$info = $_POST['gachalog'][$_POST['poolname']];
switch ($_POST['poolname']){
    case 'arm':
        $flootnum = 80;
        $pluscell = 99400;
        break;
    default:
        $flootnum = 90;
        $pluscell = 49700;
        break;
};
$info['c'] += 1;
$count = $info['c'] - $info['r5c'];
$r5per = 6000;
$r4per = 51000;
if ($count >= 70) $r5per += ($count - 70) * $pluscell;
$seed = mt_rand(1, 1000000);
if ($count == 1 && $info['r5c'] != 0 && ($info['r5c'] % 10) == 0 && $seed >= $r5per){
    $seed = 500000;
};
if ($seed <= $r5per || $count == $flootnum){
    switch ($_POST['poolname']) {
        case 'chr':
            $chrseed = mt_rand(1, 1000000);
            foreach ($itemsArr['r5']['always-chr'] as $ar5v) $ar5[] = $ar5v[1];
            if (($chrseed <= 500000 || in_array($info['lastr5'], $ar5v)) && $itemsArr['r5']['now-chr'] != array()){
                if (is_array($itemsArr['r5']['now-chr'])){
                    $result = $itemsArr['r5']['now-chr'][array_rand($itemsArr['r5']['now-chr'])];
                }else{
                    $result = $itemsArr['r5']['now-chr'];
                };
            }else{
                $result = $itemsArr['r5']['always-chr'][array_rand($itemsArr['r5']['always-chr'])];
            };
            break;
        case 'arm':
            $armseed = mt_rand(1, 1000000);
            foreach ($itemsArr['r5']['always-arm'] as $ar5v) $ar5[] = $ar5v[1];
            if (($armseed <= 500000 || in_array($info['lastr5'], $ar5v)) && $itemsArr['r5']['now-arm'] != array()){
                if (is_array($itemsArr['r5']['now-arm'])){
                    $result = $itemsArr['r5']['now-arm'][array_rand($itemsArr['r5']['now-arm'])];
                }else{
                    $result = $itemsArr['r5']['now-arm'];
                };
            }else{
                $result = $itemsArr['r5']['always-arm'][array_rand($itemsArr['r5']['always-arm'])];
            };
            break;
        default:
            $fullR5Arr = array_merge($itemsArr['r5']['always-chr'], $itemsArr['r5']['always-arm']);
            $result = $fullR5Arr[array_rand($fullR5Arr)];
            break;
    };
}elseif (($seed > $r5per && $seed <= ($r5per + $r4per)) || ($info['c'] % 10) == 0){
    switch ($_POST['poolname']) {
        case 'chr':
            $chrseed = mt_rand(1, 1000000);
            if ($chrseed <= 500000 && $itemsArr['r4']['now-chr'] != array()){
                $result = $itemsArr['r4']['now-chr'][array_rand($itemsArr['r4']['now-chr'])];
            }else{
                $result = $itemsArr['r4']['always'][array_rand($itemsArr['r4']['always'])];
            };
            break;
        case 'arm':
            $armseed = mt_rand(1, 1000000);
            if ($armseed <= 500000 && $itemsArr['r4']['now-arm'] != array()){
                $result = $itemsArr['r4']['now-arm'][array_rand($itemsArr['r4']['now-arm'])];
            }else{
                $result = $itemsArr['r4']['always'][array_rand($itemsArr['r4']['always'])];
            };
            break;
        default:
            $result = $itemsArr['r4']['always'][array_rand($itemsArr['r4']['always'])];
            break;
    };
}else{
    $result = $itemsArr['r3']['always'][array_rand($itemsArr['r3']['always'])];
};
if (count($result) == 13){
    $rank = $result[2];
}elseif (count($result) == 10){
    $rank = $result[3];
};
print_r(json_encode(['rank' => $rank, 'img' => "<div><img src=\"".$result[0]."\" style='hight:40px;width:40px' align='absmiddle'/>",'name' => $result[1]]));
exit;
?>
