(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fe5c8b"],{"0be8":function(t,s,a){},"23eb":function(t,s,a){"use strict";var i=a("0be8"),e=a.n(i);e.a},"2d0c":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"comment"},[t.showLoading?i("div",{staticClass:"loading"},[i("img",{attrs:{src:a("4045")}})]):t._e(),i("van-nav-bar",{attrs:{title:t.tit,"left-text":"返回","left-arrow":""},on:{"click-left":t.backs}}),i("div",{staticClass:"assess"},[i("van-list",{staticClass:"popup-list",attrs:{finished:t.load.finished,"finished-text":t.load.loadingMsg,offset:50},on:{load:t.onLoad},model:{value:t.load.loading,callback:function(s){t.$set(t.load,"loading",s)},expression:"load.loading"}},t._l(t.shortRevi,(function(s,a){return i("div",{key:a,staticClass:"assess-list clearfix",on:{click:function(a){return t.ComDetail(s._id)}}},[i("div",{staticClass:"assess-l fl"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgKey(s.book.cover),expression:"imgKey(i.book.cover)"}]})]),i("div",{staticClass:"assess-r fl"},[i("div",{staticClass:"assess-name"},[t._v(t._s(s.author.nickname))]),i("div",{staticClass:"assess-text"},[t._v(t._s(s.content))])])])})),0)],1)],1)},e=[],o=(a("fb6a"),a("a434"),a("2909")),n={data:function(){return{showLoading:!1,id:this.$route.query.id,tit:this.$route.query.tit,shortRevi:[],shortReviDat:[],loadCount:10,load:{loading:!0,finished:!1,loadingMsg:"数据加载完毕..."}}},methods:{backs:function(){this.$router.go(-1)},MakeShort:function(){var t=this;this.axios.get("http://novel.kele8.cn/book/short-reviews?book="+this.id).then((function(s){200==s.status&&(t.shortReviDat=s.data.docs,t.shortRevi=t.shortReviDat.splice(0,t.loadCount),t.shortReviDat.length>0?t.load.loading=!1:(t.load.loading=!0,t.load.finished=!0))})).catch((function(t){}))},onLoad:function(){var t=this;setTimeout((function(){var s;(s=t.shortRevi).push.apply(s,Object(o["a"])(t.shortReviDat.splice(0,t.loadCount))),t.load.loading=!1,0==t.shortReviDat.length&&(t.load.loading=!0,t.load.finished=!0)}),1e3)},imgKey:function(t){return unescape(t).slice(7)}},created:function(){this.MakeShort()}},l=n,c=(a("23eb"),a("2877")),d=Object(c["a"])(l,i,e,!1,null,"787a4ef8",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-36fe5c8b.53d51c03.js.map