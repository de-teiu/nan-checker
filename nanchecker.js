window.NanChecker = {
  nameList : ['نان','nān','नान','நான்',
  'naan','nan','Naan','Nan','NAAN','NAN',
  'ナーン','ナン','なーん','なん','ﾅｰﾝ','ﾅﾝ'],

  isNan: function(val){
    if(val.length === 0){
      return false;
    }
    for(var i=0;i<this.nameList.length;i++){
      if(this.nameList[i] == val){
        return true;
      }
    }
    return false;
  }
};
