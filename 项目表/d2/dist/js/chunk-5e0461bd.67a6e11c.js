(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0461bd"],{"2d0c":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"comment"},[t.showLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:i("4045")}})]):t._e(),a("van-nav-bar",{attrs:{title:t.tit,"left-text":"返回","left-arrow":""},on:{"click-left":t.backs}}),a("div",{staticClass:"assess"},[a("van-list",{staticClass:"popup-list",attrs:{finished:t.load.finished,"finished-text":t.load.loadingMsg,offset:50},on:{load:t.onLoad},model:{value:t.load.loading,callback:function(s){t.$set(t.load,"loading",s)},expression:"load.loading"}},t._l(t.shortRevi,(function(s,i){return a("div",{key:i,staticClass:"assess-list clearfix",on:{click:function(i){return t.ComDetail(s._id)}}},[a("div",{staticClass:"assess-l fl"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgKey(s.book.cover),expression:"imgKey(i.book.cover)"}]})]),a("div",{staticClass:"assess-r fl"},[a("div",{staticClass:"assess-name"},[t._v(t._s(s.author.nickname))]),a("div",{staticClass:"assess-text"},[t._v(t._s(s.content))])])])})),0)],1)],1)},o=[],e=(i("fb6a"),i("a434"),i("2909")),n={data:function(){return{showLoading:!1,id:this.$route.query.id,tit:this.$route.query.tit,shortRevi:[],shortReviDat:[],loadCount:10,load:{loading:!0,finished:!1,loadingMsg:"数据加载完毕..."}}},methods:{backs:function(){this.$router.go(-1)},MakeShort:function(){var t=this;this.axios.get("http://novel.kele8.cn/book/short-reviews?book="+this.id).then((function(s){console.log(s,"0000000000res"),200==s.status&&(t.shortReviDat=s.data.docs,t.shortRevi=t.shortReviDat.splice(0,t.loadCount),t.shortReviDat.length>0?t.load.loading=!1:(t.load.loading=!0,t.load.finished=!0))})).catch((function(t){console.log(t,"0---------err")}))},onLoad:function(){var t=this;setTimeout((function(){var s;(s=t.shortRevi).push.apply(s,Object(e["a"])(t.shortReviDat.splice(0,t.loadCount))),t.load.loading=!1,0==t.shortReviDat.length&&(t.load.loading=!0,t.load.finished=!0)}),1e3)},imgKey:function(t){return unescape(t).slice(7)}},created:function(){this.MakeShort(),console.log(this.id,"-")}},l=n,c=(i("7324"),i("2877")),d=Object(c["a"])(l,a,o,!1,null,"0ebfd54c",null);s["default"]=d.exports},"5af1":function(t,s,i){},7324:function(t,s,i){"use strict";var a=i("5af1"),o=i.n(a);o.a}}]);
//# sourceMappingURL=chunk-5e0461bd.67a6e11c.js.map