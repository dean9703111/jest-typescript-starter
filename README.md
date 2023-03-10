# 想幫前端專案導入測試框架？也許我的想法與學習地圖能給你一點方向

```
大綱

一、前端為什麼需要寫測試？
二、寫測試對開發人員有哪些幫助？
三、筆者的學習地圖
```

### 一、前端為什麼需要寫測試？

筆者自首，過去我只撰寫後端測試，總是忽略前端測試的重要性。

當初會這樣，是因為經手的專案規格變動頻繁，感覺測試寫完沒多久就要棄用；但近期與業界的朋友聊天時，他們跟我強調了 TDD（Test-Driven Development），也就是「測試驅動開發」的概念。

這名詞也不是第一次聽到，但是否對專案有幫助我也是心存懷疑。

針對這個疑問，朋友很認真的回應我，這邊整理概要如下：

```
規格之所以會頻繁變更，大多數的原因是前期規劃不良所導致。

有些 PM 甚至沒有技術背景只能當傳聲筒，在這種前提下訂出的規格往往非常模糊。

而工程師面對這種模糊的規格，他有兩條路，一條路是不管那麼多，先開發再說，如果選擇這條路，那日後頻繁的遇到規格變更實屬正常。

而另一條路則是「確定規格後」再開發，我們常常把沒寫測試歸咎於專案時程太緊；但其實在專案完成後做 Review 時，發現很多時候都是在白忙一場。

所以如果能先把模糊的地方定義清楚，並將其納入測試程式，有時反而是在節省時間，要是日後規格有異動時，也方便確認哪一塊需要調整。
```

每個人學習新技術的理由不盡相同，但我就是在這次聊天後開始學習的。

> 其實有時候也不是沒時間，只是因為自己不熟悉測試程式，而用其他藉口逃避。

### 二、寫測試對開發人員有哪些幫助？

系統會越來越複雜，公司的同事會來來去去，不管是為了自己還是同事，有測試程式對我們最直接的幫助有：
- **減少人工測試**：如果每次 release 新的版本就要全部手動測試一次，你絕對會崩潰。
- **減少測試上的遺漏**：如果是人工測試，那就可能有「啊！這功能之前都沒問題，這次就不用測了」的想法，然後上線後就爆了；不過交給機器跑就不會有這個問題。
- **避免調整程式後，一堆功能壞掉而不自知**：無論是重構程式/新增功能/解決 Bug，你勢必都會動到程式邏輯，很有可能你完成了新功能，但上線後才發現其他相依的功能壞掉了（程式也是有蝴蝶效應的）。
- **未來的同事（自己）會感謝你**：專案可能上線後一兩年都沒事，但當需要新增/調整功能時，如果維護的人發現前人沒有測試程式，那改程式就跟走鋼索一樣（那個人很可能是自己）。

### 三、筆者的學習地圖

把知識集中在一篇文章會讀得太辛苦，這邊筆者將其規劃成以下主題供大家閱讀。

- 認識 Jest 測試框架，開始動手寫測試程式：[連結](jest-basic/README.md)
    - 初始化專案、設定測試環境
    - 了解單元測試的結構，撰寫程式
    - 了解 Jest 常用的匹配器（Matchers）
- Jest 框架進階應用（describe、Setup and Teardown、Mock function）：[連結](jest-advanced/README.md)
    - 測試分組（describe）
    - 在測試前、後要執行的任務（Setup and Teardown）
    - 用 Mock Function 減少測試時的相依性
    - VSCode 的 Jest 外掛
- 在 Vuetify（Vite & TypeScript）中導入單元測試 Unit Testing
    - 初始化專案、安裝必要套件
    - 調整專案各項設定檔，讓單元測試可以運行
    - 撰寫第一隻測試程式
    - 運行測試程式確認結果符合預期
- 透過實際案例了解在 Vuetify（Vite & TypeScript）中如何運用 @vue/test-utils
    - 從測試的角度來設計頁面規格（以登入頁為範例）
    - 撰寫登入頁程式
    - 從測試案例了解 @vue/test-utils 常用的功能（ex：getComponent、setValue、wrapper.vm、trigger button、Vue Router）