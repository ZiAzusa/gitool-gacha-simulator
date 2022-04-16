# gitool-gacha-simulator
这是一个使用jQuery做前端调用，PHP做后端处理的原神抽卡模拟器
#### 建议PHP版本：7.x
## 基本使用方法：
将本仓库clone到您的网站目录下即可开始使用<br>
items.json文件是设置抽卡内容的文件，您可以查看 [如何使用items.json](#如何使用itemsjson) 来获取详细使用方法
## 这个项目可以做什么
支持抽取原神的角色UP池，武器UP池和常驻池，且已实现角色池90发小保底和180发大保底，武器池80发保底的机制<br>
同时实现了70发之后递增出货概率的平衡机制<br>
## 如何使用items.json
### items.json的结构
```
{
    "r5": {----------------->五星物品
        "now-chr": [],------>当期限定五星角色
        "now-arm": [],------>当期限定五星武器
        "always-chr": [],--->常驻五星角色
        "always-arm": []---->常驻五星武器
    },
    "r4": {----------------->四星物品
        "now-chr": [],------>当期提高概率的四星角色
        "now-arm": [],------>当期提高概率的四星武器
        "always": []-------->全部四星物品
    },
    "r3": {----------------->三星物品
        "always": []-------->全部三星物品
    }
}
```
