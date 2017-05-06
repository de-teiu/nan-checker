# NanChecker
文字列がNanかどうかを判定するライブラリです.
  
## 使い方
jsファイル読み込み  
`<script src="./nanchecker.js"></script>`  
  
こんな感じで呼ぶ  
`NanChecker.isNan('文字列')`  
  
文字列が以下のいずれかに合致した時trueが返されます  
* 'نان'
* 'nān'
* 'नान'
* 'நான்' 
* 'naan'
* 'nan'
* 'Naan'
* 'Nan'
* 'NAAN'
* 'NAN'  
* 'ナーン'
* 'ナン'
* 'なーん'
* 'なん'
* 'ﾅｰﾝ'
* 'ﾅﾝ'  
  

以上
