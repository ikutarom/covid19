(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{424:function(t,e,r){var content=r(513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7d6df0e2",content,!1,{sourceMap:!1})},425:function(t,e,r){var content=r(515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("695bbd6c",content,!1,{sourceMap:!1})},429:function(t){t.exports=JSON.parse('{"date":"2020/3/12 21:00","datasets":[{"label":"2月10日~14日","data":[-0.96,-2.94,-7.48]},{"label":"2月17日~21日","data":[-0.36,-4.11,-6.95]},{"label":"2月25日~28日","data":[3.06,-9.47,-7.31]},{"label":"3月02日~05日","data":[1.08,-21.64,-9.92]},{"label":"3月09日~12日","data":[-0.78,-24.51,-12.13]}],"labels":["6:30~7:30","7:30~9:30","9:30~10:30"],"base_period":"1月20日~1月24日"}')},430:function(t){t.exports=JSON.parse('{"date":"2020/3/16 18:00","labels":["1/1~1/5","1/6~1/12","1/13~1/19","1/20~1/26","1/27~2/2","2/3~2/9","2/10~2/16","2/17~2/23","2/24~3/1","3/2~3/8","3/9~3/15"],"datasets":[{"label":"第一庁舎計","data":[0,12572,10267,12387,12248,12924,10221,12690,8841,9468,8930]},{"label":"第二庁舎計","data":[0,14656,11548,13963,13611,13711,10997,14374,10734,12271,12045]},{"label":"議事堂計","data":[0,422,316,321,632,492,464,553,492,381,540]}]}')},512:function(t,e,r){"use strict";var n=r(424);r.n(n).a},513:function(t,e,r){(e=r(10)(!1)).push([t.i,".MetroGraph-Desc{margin-top:10px;margin-bottom:0 !important;font-size:12px;color:#707070}",""]),t.exports=e},514:function(t,e,r){"use strict";var n=r(425),o=r.n(n);e.default=o.a},515:function(t,e,r){(e=r(10)(!1)).push([t.i,".DataViewDesc_3od6x{margin-top:10px;margin-bottom:0 !important;font-size:12px;color:#707070}",""]),e.locals={DataViewDesc:"DataViewDesc_3od6x"},t.exports=e},518:function(t,e,r){"use strict";r.r(e);var n=r(383),o=r(429),c=r(430),d=r(432),l=r(435),h=r(433),f=r(434),m=r(436),y=r(388),$={components:{TimeBarChart:r(426).a},data:function(){var t=Object(y.a)(n.querents.data),data={Data:n,querentsGraph:t};return data}},v=r(5),x=Object(v.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Data.querents.date,unit:this.$t("件.reports"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070"}})],1)}),[],!1,null,null,null).exports,k=r(2),C=r(384),D={components:{DataView:C.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartData:Object,chartOption:Object,chartId:{type:String,default:"metro-bar-chart"},date:{type:String,required:!0}},computed:{displayData:function(){var t=this,e=["#a6e29f","#63c765","#008b41"],r=this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:e[i],borderWidth:0}}));return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:r}}}},_=k.default.extend(D),w=(r(512),{components:{MetroBarChart:Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[r("p",{staticClass:"MetroGraph-Desc"},[t._v("\n      "+t._s(t.$t("{range}の利用者数*の平均値を基準としたときの相対値",{range:t.$t(t.chartData.base_period)}))+"\n      "),r("br"),t._v("\n      *"+t._s(t.$t("都営地下鉄4路線の自動改札出場数"))+"\n    ")])]},proxy:!0}])},[t._v(" "),r("bar",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.chartOption,height:240}})],1)}),[],!1,null,null,null).exports},data:function(){var t=this,e=o,data={Data:n,metroGraph:e,metroGraphOption:{responsive:!0,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"},labels:{boxWidth:20}},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){return t.toFixed(2)+"%"}}}]},tooltips:{displayColors:!1,callbacks:{title:function(e,r){var label=e[0].label;return t.$t("期間: {duration}",{duration:t.$t(label)})},label:function(r,data){var n=data.datasets[r.datasetIndex],o="".concat(n.data[r.index],"%");return t.$t("{duration}の利用者数との相対値: {percentage}",{duration:t.$t(e.base_period),percentage:o})}}}}};return data}}),O=Object(v.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("metro-bar-chart",{attrs:{title:this.$t("都営地下鉄の利用者数の推移"),"title-id":"predicted-number-of-toei-subway-passengers","chart-id":"metro-bar-chart","chart-data":this.metroGraph,"chart-option":this.metroGraphOption,date:this.metroGraph.date}})],1)}),[],!1,null,null,null).exports,S={components:{DataView:C.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"agency-bar-chart"},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""}},data:function(){var t=this,e=[this.$t("第一庁舎計"),this.$t("第二庁舎計"),this.$t("議事堂計")];return c.datasets.map((function(e){e.label=t.$t(e.label)})),{chartData:c,date:c.date,agencies:e}},computed:{displayData:function(){var t=this,e=["#008b41","#63c765","#a6e29f"];return{labels:this.chartData.labels,datasets:this.chartData.datasets.map((function(r,n){return{label:t.agencies[n],data:r.data,backgroundColor:e[n]}}))}},displayOption:function(){var t=this;return{tooltips:{displayColors:!1,callbacks:{title:function(e){var r=e[0].label;return t.$t("期間: {duration}",{duration:r})},label:function(e,data){var r=e.datasetIndex,title=t.$t(data.datasets[r].label),n=parseInt(e.value).toLocaleString(),o=t.$t(t.unit);return"".concat(title,": ").concat(n," ").concat(o)}}},legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"},labels:{boxWidth:20}},scales:{xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"#808080"}}],yAxes:[{stacked:!0,gridLines:{display:!0},ticks:{fontSize:9,fontColor:"#808080",maxTicksLimit:10,callback:function(label){return"".concat(label).concat(t.unit)}}}]}}}}},j=k.default.extend(S),I=r(514);var T={components:{AgencyBarChart:Object(v.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[r("small",{class:t.$style.DataViewDesc},[t._v("\n      "+t._s(t.$t("※土・日・祝日を除く庁舎開庁日の1週間累計数"))+"\n    ")])]},proxy:!0}])},[t._v(" "),r("bar",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}})],1)}),[],!1,(function(t){this.$style=I.default.locals||I.default}),null,null).exports}},A=Object(v.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("agency-bar-chart",{attrs:{title:this.$t("都庁来庁者数の推移"),"title-id":"agency","chart-id":"agency",url:"",unit:this.$t("人")}})],1)}),[],!1,null,null,null).exports,L={components:{ConfirmedCasesDetailsCard:d.a,ConfirmedCasesNumberCard:l.a,ConfirmedCasesAttributesCard:h.a,TestedNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:m.a,ConsultationDeskReportsNumberCard:x,MetroCard:O,AgencyCard:A},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=n.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=n.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=n.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),t=n.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=n.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=n.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=o.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=c.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},G=Object(v.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):this._e()],1)}),[],!1,null,null,null);e.default=G.exports}}]);