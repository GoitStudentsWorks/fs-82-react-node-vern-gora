"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{4508:(e,a,s)=>{s.r(a),s.d(a,{default:()=>xe});const t="DayProducts_productsContainer__sTDqB",r="DayProducts_productsTopBar__UqvsE",i="DayProducts_Link__8XDl6",c="DayProducts_productsBottomBar__7gA7j",d="DayProducts_productsTitle__9no8u",n="DayProducts_noProductsText__MKECa",l="DayProducts_adaptiveTitlesList__KY6ed",_="DayProducts_productsList__SJjzc",o="DayProducts_productData__bVnIa",h="DayProducts_productListLarge__I9IM8",m="DayProducts_productListSmallProperties__BOMBk",y="DayProducts_productListSmall__E9rT8",x="DayProducts_deleteProductButton__78E0u",p="DayProducts_deleteProductButtonIcon__zzLcE",u="DayProducts_adaptiveTitle__o8Gkp",D="DayProducts_productListItem__oTpbc";var j=s(1087),k=s(2791);const v=s.p+"static/media/symbol-exer.6f3484e1d5e9ad1c396894d5c2ce2b57.svg";var g=s(5119),N=s(3855),b=s(3550),E=s(184);const S=e=>{let{data:a}=e;const{title:s,category:t,calories:r,amount:i,recommend:c,_id:d}=a,n=(0,N.I0)();return(0,E.jsxs)("li",{className:D,children:[(0,E.jsxs)("div",{className:h,children:[(0,E.jsx)("p",{children:" Title "}),(0,E.jsx)("span",{className:o,children:s})]}),(0,E.jsxs)("div",{className:h,children:[(0,E.jsx)("p",{children:"Category"}),(0,E.jsx)("span",{className:o,children:t})]}),(0,E.jsxs)("div",{className:m,children:[(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("p",{children:"Calories "}),(0,E.jsx)("span",{className:o,children:r})]}),(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("p",{children:" Weight "}),(0,E.jsx)("span",{className:o,children:i})]}),(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("p",{children:"Recommend"}),(0,E.jsxs)("span",{className:o,children:[(0,E.jsx)("div",{style:{width:"14px",height:"14px",borderRadius:"50%",backgroundColor:c?"#419B09":"#E9101D"}}),c?"Yes":"No"]})]}),(0,E.jsx)("button",{type:"button",className:x,onClick:()=>{n((0,g.DC)(d)),n((0,b.bJ)(d))},children:(0,E.jsx)("svg",{className:p,children:(0,E.jsx)("use",{href:v+"#trash_icon"})})})]})]})},f=e=>e.diary.data.consumedProduct,C=e=>e.diary.data.exerciseDone,P=e=>e.diary.isLoadingProducts,T=e=>e.diary.isLoadingExercise,B=e=>e.diary.error,w=e=>e.auth.user.bmr,I=e=>e.auth.user.dailyExerciseTime;var L=s(618),M=s(3430),R=s(5125);const W=e=>{let{productsData:a}=e;const s=(0,L.v9)(P),o=(0,L.v9)(B);return(0,E.jsxs)("div",{className:t,children:[(0,E.jsxs)("div",{className:r,children:[(0,E.jsx)("p",{className:d,children:"Products"}),(0,E.jsxs)(j.rU,{to:"/products",className:i,children:["Add product",(0,E.jsx)("svg",{width:"16px",height:"16px",children:(0,E.jsx)("use",{href:R.Z+"#icon-arrow-right"})})]})]}),s?(0,E.jsx)(M._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}):(0,E.jsxs)(E.Fragment,{children:[(!a||0===a.length||o)&&(0,E.jsx)("p",{className:n,children:"Not found products"}),0!==a.length&&(0,E.jsxs)("div",{className:c,children:[(0,E.jsxs)("ul",{className:l,children:[(0,E.jsx)("li",{className:u,children:"Title"}),(0,E.jsx)("li",{className:u,children:"Category"}),(0,E.jsx)("li",{className:u,children:"Calories"}),(0,E.jsx)("li",{className:u,children:"Weight"}),(0,E.jsx)("li",{className:u,children:"Recommend"})]}),(0,E.jsx)("ul",{className:_,children:a.map(((e,a)=>(0,E.jsx)(S,{data:e},a)))})]})]})]})},q={DayExercises:"DayExercises_DayExercises__KLynK",DayExercisesHead:"DayExercises_DayExercisesHead__zesXe",tdDellete:"DayExercises_tdDellete__6hi1O",trashIcon:"DayExercises_trashIcon__DaGMJ",tdBodyPart:"DayExercises_tdBodyPart__Voi5S",thBodyPart:"DayExercises_thBodyPart__RMOZ3",tdEquipment:"DayExercises_tdEquipment__O-17K",thEquipment:"DayExercises_thEquipment__ZhAZp",tdName:"DayExercises_tdName__GvY1c",thName:"DayExercises_thName__Mycbr",tdTarget:"DayExercises_tdTarget__pzis2",thTarget:"DayExercises_thTarget__Fv+SA",tdBurnedCalories:"DayExercises_tdBurnedCalories__DYQcS",thBurnedCalories:"DayExercises_thBurnedCalories__9ZgDV",tdTime:"DayExercises_tdTime__soRWs",thTime:"DayExercises_thTime__ysL61",btnAddExersisec:"DayExercises_btnAddExersisec__DQKz-",arrowIcon:"DayExercises_arrowIcon__lfbGY",tdDelete:"DayExercises_tdDelete__mluiN",btnAddExercises:"DayExercises_btnAddExercises__WTfnH",DayExercisesTable:"DayExercises_DayExercisesTable__gZWW7",not_found:"DayExercises_not_found__Xy9jr",linkExercises:"DayExercises_linkExercises__lK8uj",recommendCircle:"DayExercises_recommendCircle__W3SSF"},Y=e=>{let{doneExercises:a,date:s}=e;const t=(0,N.I0)(),r=a.map(((e,a)=>{const s=e._id;return(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:q.tdBodyPart,children:(0,E.jsx)("div",{children:e.bodyPart})}),(0,E.jsx)("td",{className:q.tdEquipment,children:(0,E.jsx)("div",{children:e.equipment})}),(0,E.jsx)("td",{className:q.tdName,children:(0,E.jsx)("div",{children:e.name})}),(0,E.jsx)("td",{className:q.tdTarget,children:(0,E.jsx)("div",{children:e.target})}),(0,E.jsx)("td",{className:q.tdBurnedCalories,children:(0,E.jsx)("div",{children:e.calories})}),(0,E.jsx)("td",{className:q.tdTime,children:(0,E.jsx)("div",{children:e.time})}),(0,E.jsx)("td",{className:q.tdDelete,children:(0,E.jsx)("button",{onClick:()=>{return e=s,t((0,g.Z1)(e)),void t((0,b.BT)(e));var e},children:(0,E.jsx)("svg",{className:q.trashIcon,width:"20",height:"20",children:(0,E.jsx)("use",{href:v+"#trash_icon"})})})})]},s)})),i=(0,L.v9)(T),c=(0,L.v9)(B);return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:q.DayExercises,children:[(0,E.jsxs)("div",{className:q.DayExercisesHead,children:[(0,E.jsx)("h2",{children:"Exercises"}),(0,E.jsx)(j.rU,{to:"/exercises",className:q.linkExercises,children:(0,E.jsxs)("p",{className:q.btnAddExercises,children:["Add exercise",(0,E.jsx)("svg",{className:q.arrowIcon,children:(0,E.jsx)("use",{href:v+"#arrow-icon"})})]})})]}),i?(0,E.jsx)(M._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}):(0,E.jsxs)(E.Fragment,{children:[(c||0===r.length)&&(0,E.jsx)("div",{className:q.DayExercisesTable,children:(0,E.jsx)("p",{className:q.not_found,children:"Not found exercises"})}),0!==r.length&&(0,E.jsx)("div",{className:q.DayExercisesTable,children:(0,E.jsxs)("table",{children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{className:q.thBodyPart,children:"Body Part"}),(0,E.jsx)("th",{className:q.thEquipment,children:"Equipment"}),(0,E.jsx)("th",{className:q.thName,children:"Name"}),(0,E.jsx)("th",{className:q.thTarget,children:"Target"}),(0,E.jsx)("th",{className:q.thBurnedCalories,children:"Burned Calories"}),(0,E.jsx)("th",{className:q.thTime,children:"Time"}),(0,E.jsx)("th",{className:q.thDelete})]})}),(0,E.jsx)("tbody",{children:r})]})})]})]})})};const A=s.p+"static/media/symbol.18e692888c0d4f7c50745a2fcdf535b4.svg",F="DiaryDashboardItem_diary_item__z1YeZ",K="DiaryDashboardItem_svg__+TQ6J",V="DiaryDashboardItem_header__ha4nJ",Z="DiaryDashboardItem_title__TBV7G",z="DiaryDashboardItem_content__pr7jx",O="DiaryDashboardItem_colorSvg__cR139",J="DiaryDashboardItem_red__hEBsT",Q="DiaryDashboardItem_gren__n7Ncl",U=e=>{let{svg:a="",title:s="",content:t=0,className:r="",type:i="",measurement:c=""}=e;return(0,E.jsxs)("div",{className:" ".concat(F,"   ").concat(r," ").concat(i&&("sport"===i&&t<0?Q:"calories"===i&&t<0?J:void 0)),children:[(0,E.jsxs)("div",{className:V,children:[(0,E.jsx)("div",{className:K,children:(0,E.jsx)("svg",{className:O,width:"20",height:"20",children:(0,E.jsx)("use",{href:A+"#".concat(a)})})}),(0,E.jsx)("div",{className:Z,children:s})]}),(0,E.jsxs)("div",{className:z,children:[(e=>"sport"===i&&e<0?"+ ".concat(-e):e)(Math.round(t)),(0,E.jsx)("span",{children:c})]})]})},G="DayDashboard_day_dashboard_container__nwdmu",H="DayDashboard_day_dashboard__7L9sU",X="DayDashboard_diary_left__x77fj",$="DayDashboard_rigth__EmFul",ee="DayDashboard_btns1__wZ7yP",ae="DayDashboard_btns2__XPpWW",se="DayDashboard_diary_item_red__D35IU",te=e=>{let{diary:a,bodyData:s}=e;const{burnedCalories:t,consumedCalories:r,timeSport:i}=a;return(0,E.jsx)("div",{className:G,children:(0,E.jsxs)("div",{className:H,children:[(0,E.jsxs)("div",{className:X,children:[(0,E.jsx)(U,{svg:"fork-and-knife-icon",title:"Daily calorie intake",content:s.dailyRateCalories,className:se}),(0,E.jsx)(U,{svg:"dumbbell-icon",title:"Daily norm of sports",content:s.dailySportMin,className:se,measurement:"min"})]}),(0,E.jsxs)("div",{className:$,children:[(0,E.jsxs)("div",{className:ee,children:[(0,E.jsx)(U,{svg:"apple-icon",title:"Calories consumed",content:r}),(0,E.jsx)(U,{svg:"fire-icon",title:"Calories burned",content:t})]}),(0,E.jsxs)("div",{className:ae,children:[(0,E.jsx)(U,{svg:"bubble-icon",title:"The rest of the calories",content:s.dailyRateCalories-r,type:"calories"}),(0,E.jsx)(U,{svg:"run-icon",title:"The rest of sports",content:s.dailySportMin-i,type:"sport",measurement:"min"})]})]})]})})};var re=s(1951),ie=s(6753),ce=s(9040),de=s(9513),ne=s.n(de);s(8639);const le={dataBtn:"StyledDatepicker_dataBtn__rknKd",reactDatepickerWrapper:"StyledDatepicker_reactDatepickerWrapper__y6tDV",reactDatepicker:"StyledDatepicker_reactDatepicker__NoLQF","react-datepicker__month-container":"StyledDatepicker_react-datepicker__month-container__npOuz",header:"StyledDatepicker_header__Ml4Yy","react-datepicker__day-names":"StyledDatepicker_react-datepicker__day-names__mU8SR","react-datepicker__header":"StyledDatepicker_react-datepicker__header__R21EY","react-datepicker__header--has-time-select":"StyledDatepicker_react-datepicker__header--has-time-select__9KcQi","react-datepicker__day":"StyledDatepicker_react-datepicker__day__Ee1Nl","react-datepicker__day--selected":"StyledDatepicker_react-datepicker__day--selected__vzqMF","react-datepicker__current-month":"StyledDatepicker_react-datepicker__current-month__7AiaV","react-datepicker__day-name":"StyledDatepicker_react-datepicker__day-name__2qWVq","react-datepicker__navigation":"StyledDatepicker_react-datepicker__navigation__TVvhB","react-datepicker__navigation--previous":"StyledDatepicker_react-datepicker__navigation--previous__SrMwE","react-datepicker__navigation--next":"StyledDatepicker_react-datepicker__navigation--next__PfYfs","react-datepicker__navigation-icon":"StyledDatepicker_react-datepicker__navigation-icon__SLHfR","react-datepicker__week":"StyledDatepicker_react-datepicker__week__TsKk0","react-datepicker__month":"StyledDatepicker_react-datepicker__month__ofVpd","react-datepicker__day--keyboard-selected":"StyledDatepicker_react-datepicker__day--keyboard-selected__o8qd7","react-datepicker__day--weekend":"StyledDatepicker_react-datepicker__day--weekend__QvhoX","react-datepicker__day--outside-month":"StyledDatepicker_react-datepicker__day--outside-month__nOpAe","react-datepicker__view-calendar-icon":"StyledDatepicker_react-datepicker__view-calendar-icon__kYOrH","react-datepicker__triangle":"StyledDatepicker_react-datepicker__triangle__Vrku6",titleWrapper:"StyledDatepicker_titleWrapper__0+LeG"},_e=()=>{const[e,a]=(0,k.useState)(new Date),s=a=>{let{value:s,onClick:t}=a;return(0,E.jsx)("button",{className:le.titleWrapper,onClick:t,children:(0,re.default)(e,"dd-MM-yyyy")})};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ne(),{selected:e,onChange:e=>{a(e)},customInput:(0,E.jsx)(s,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:e=>e.substr(0,1),className:le.reactDatepicker}),(0,E.jsxs)("div",{className:le.datepickerControls,children:[(0,E.jsx)("button",{onClick:()=>{a((e=>(0,ie.default)(e,1)))},children:"\u2190"}),(0,E.jsx)("button",{onClick:()=>{a((e=>(0,ce.default)(e,1)))},children:"\u2192"})]})]})},oe={diaryPage:"DiaryPage_diaryPage__pKsQy",header:"DiaryPage_header__Y4gql",topBar:"DiaryPage_topBar__X5lfZ",reminder:"DiaryPage_reminder__k8ug3",reminderIcon:"DiaryPage_reminderIcon__IBhOu",bottomBar:"DiaryPage_bottomBar__UbJos",bottomRightBar:"DiaryPage_bottomRightBar__YMyCC"};var he=s(5705),me=s(9831),ye=s(4217);const xe=()=>{const e=(0,N.I0)(),a=(0,L.v9)(ye.dy),s={birthday:(0,me.default)(a.birthday)||"2005-01-01"};function t(){const e=new Date,a=e.getDate().toString().padStart(2,"0"),s=(e.getMonth()+1).toString().padStart(2,"0"),t=e.getFullYear();return"".concat(a,"/").concat(s,"/").concat(t)}const r=(0,L.v9)(f),i=(0,L.v9)(C),c=(0,L.v9)(w),d=(0,L.v9)(I);(0,k.useEffect)((()=>{const a=t();e((0,g.kc)(a))}),[e]);const n={dailyRateCalories:c,dailySportMin:d},l={};{const e=[...r].reduce(((e,a)=>e+a.calories),0);l.consumedCalories=e}{const e=[...i].reduce(((e,a)=>e+a.calories),0);l.burnedCalories=e}{const e=[...i].reduce(((e,a)=>e+Number(a.time)),0);l.timeSport=e}return(0,E.jsxs)("section",{className:oe.diaryPage,children:[(0,E.jsxs)("div",{className:oe.topBar,children:[(0,E.jsx)("h1",{className:oe.header,children:"Diary"}),(0,E.jsx)(he.J9,{initialValues:s,onSubmit:e=>{},children:(0,E.jsx)(_e,{selectedDate:t(),setSelectedDate:e=>{}})})]}),(0,E.jsxs)("div",{className:oe.bottomBar,children:[(0,E.jsxs)("div",{className:oe.bottomRightBar,children:[(0,E.jsx)(te,{diary:l,bodyData:n}),(0,E.jsxs)("div",{className:oe.reminder,children:[(0,E.jsx)("svg",{className:oe.reminderIcon,width:"50px",height:"24px",children:(0,E.jsx)("use",{href:R.Z+"#exclamation_mark_icon"})}),(0,E.jsx)("p",{className:oe.reminderText,children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]}),(0,E.jsxs)("div",{className:oe.diaryLists,children:[(0,E.jsx)(W,{productsData:[...r]}),(0,E.jsx)(Y,{doneExercises:i,date:t()})]})]})]})}}}]);
//# sourceMappingURL=508.476d9f33.chunk.js.map