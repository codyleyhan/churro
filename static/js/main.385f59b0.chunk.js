(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(15),c=t.n(r),o=(t(22),t(46)),l=t(45),m=t(5),u=t(6),i=t(8),d=t(7),f=t(9),h=t(44),g=(t(13),function(e){return s.a.createElement("button",Object.assign({className:"button button--call-to-action"},e),e.children)}),p=function(e){var a="";return e&&e.stylename&&(a=e.stylename),s.a.createElement("button",Object.assign({className:"button ".concat(a)},e),e.children)},E=(t(25),function(e){return s.a.createElement("input",Object.assign({className:"input"},e),e.children)}),k=(t(14),t(28),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).formFlow=function(e,a){return function(n){var s={step:a};"group-name"==e&&(s.groupName=document.getElementById("group-name-input").value),t.setState(s)}},t.addRoommate=function(){var e=t.state.roommates,a={name:document.getElementById("roommate-name-input").value,email:document.getElementById("roommate-email-input").value};e.push(a),document.getElementById("roommate-name-input").value="",document.getElementById("roommate-email-input").value="",t.setState({roommates:e})},t.state={step:"group-name",groupName:"",roommates:[]},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"getFormElement",value:function(){var e,a=this.state.roommates;return"group-name"==this.state.step?e=s.a.createElement("div",{className:"form group-name"},s.a.createElement(E,{id:"group-name-input",placeholder:"Group Name"}),s.a.createElement(p,{stylename:"button--next",onClick:this.formFlow("group-name","roommates")})):"roommates"==this.state.step&&(e=s.a.createElement("div",{className:"form roommates"},s.a.createElement("h4",{className:"form-title"},this.state.groupName),s.a.createElement("p",null,"Who are the roommates in this group?"),a.map(function(e,a){return s.a.createElement("div",{key:a},e.name)}),s.a.createElement(E,{id:"roommate-name-input",placeholder:"Roommate Name"}),s.a.createElement(E,{id:"roommate-email-input",placeholder:"Roommate Email"}),s.a.createElement("div",null,s.a.createElement(p,{stylename:"button--back",onClick:this.formFlow("roommates","group-name")}),s.a.createElement(p,{stylename:"button--call-to-action",onClick:this.addRoommate}," Add Roommate +"),s.a.createElement(p,null,"Added All Roommates >")))),e}},{key:"render",value:function(){var e=this.getFormElement();return s.a.createElement("div",{className:"Main"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"NewGroup"},e)))}}]),a}(n.Component)),y=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"transitionOut",value:function(){var e=document.getElementById("landing");e.style.left="-10%",e.style.opacity=0,setTimeout(function(){window.location.href+="new"},500)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Main"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{id:"landing"},s.a.createElement("h2",{className:"welcome-header"},"Welcome to Churro!"),s.a.createElement("h4",{className:"welcome-subheader"},"The New Way to Manage Chores"),s.a.createElement("div",{className:"button-container"},s.a.createElement(g,{onClick:this.transitionOut},"START A NEW GROUP"),s.a.createElement(h.a,{to:"/tasks"},s.a.createElement(p,null,"LOGIN"))))))}}]),a}(n.Component),v={users:{"345345dafasdf":{name:"Martin Kong",color:"tomato"},adf89dsaf980809df:{name:"Mihir Mathur",color:"teal"},gfg09h8dfs0g98df09g:{name:"Hao Nguyen",color:"turquoise"},"908fdsg09dfg809":{name:"Cody Ley-Han",color:"forestGreen"}},tasks:[{id:"3124lk1234",name:"Take out trash",schedule:"As needed",description:"Take out the trash and make sure that you put a new bag in the thing, also don't throw recyclables in the trash",currentQueue:["345345dafasdf","adf89dsaf980809df","gfg09h8dfs0g98df09g","908fdsg09dfg809"]},{id:"432jadffia0d9f",name:"Get the mail",schedule:"Daily",description:"Just grab the mail and put it on the table when you get it",currentQueue:["908fdsg09dfg809","adf89dsaf980809df","gfg09h8dfs0g98df09g","345345dafasdf"]},{id:"fasdf89sadf8",name:"Sweep the kitchen",description:"Make sure to do a good job so it doesn't get all nasty",schedule:"Monthly",currentQueue:["gfg09h8dfs0g98df09g","908fdsg09dfg809","345345dafasdf","adf89dsaf980809df"]},{id:"a90f8sad9fas",name:"Maintanence Request",description:"The forms are in the closet if we need something done, hopefully not.  This also includes being there when someone comes",schedule:"As needed",currentQueue:["908fdsg09dfg809","345345dafasdf","adf89dsaf980809df","gfg09h8dfs0g98df09g"]},{id:"dsf9sdaf0asd89f9asdf",name:"Vaccum carpet",schedule:"Biweekly",description:"Pretty easy just make sure to clean out the thing after you\re done",currentQueue:["908fdsg09dfg809","345345dafasdf","adf89dsaf980809df","gfg09h8dfs0g98df09g"]},{id:"jkll2k5j4l3k5",name:"Clean counters",description:"Use the chlorox wipes under the sink",schedule:"Daily",currentQueue:["908fdsg09dfg809","345345dafasdf","adf89dsaf980809df","gfg09h8dfs0g98df09g"]},{id:"h8439582435",name:"Put trash out",schedule:"Weekly",description:"Has to be put out every week by 5AM Monday morning",currentQueue:["908fdsg09dfg809","345345dafasdf","adf89dsaf980809df","gfg09h8dfs0g98df09g"]}]},N=(t(32),t(34),function(e){var a=e.name,t=e.color,n=a.split(" "),r=n[0][0]+n[1][0];return s.a.createElement("p",{style:{backgroundColor:t},className:"circle-initials"},r)}),b=function(e){var a=e.title,t=e.tasks;if(0===t.length)return null;var n=t.map(function(e){var a=v.users[e.currentQueue[0]];return s.a.createElement("li",{key:e.id,className:"task-card-item"},s.a.createElement("span",null,s.a.createElement("span",{className:"task-card-check"},s.a.createElement("i",{className:"far fa-check-circle"})),e.name,s.a.createElement("span",{className:"task-card-right"},s.a.createElement(N,{name:a.name,color:a.color}),s.a.createElement(h.a,{className:"task-card-focus-button",to:"/tasks/"+e.id},s.a.createElement("i",{className:"fas fa-angle-right"})))))});return s.a.createElement("section",{className:"task-card"},s.a.createElement("header",{className:"task-card-title"},a),s.a.createElement("ul",{className:"task-card-list"},n))},w=(t(36),function(e){var a=e.task,t=a.currentQueue.map(function(e){var a=v.users[e];return s.a.createElement("li",{key:e,className:"focused-task-queue-item"},s.a.createElement("span",null,s.a.createElement(N,{name:a.name,color:a.color,style:{display:"inline"}})," ",a.name))});return s.a.createElement("section",{className:"focused-task-card"},s.a.createElement("div",{className:"focused-task-content"},s.a.createElement("div",{className:"focused-task-close"},s.a.createElement(h.a,{className:"focused-task-close-button",to:"/tasks"},"x")),s.a.createElement("header",{className:"focused-task-card-name"},s.a.createElement("h2",null,a.name)),s.a.createElement("p",{className:"focused-task-card-desc"},a.description),s.a.createElement("ul",{className:"focused-task-queue"},t),s.a.createElement(g,null,"COMPLETE TASK")))}),j=(t(38),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e,a=this,t=v.tasks.reduce(function(t,n){return a.props.match.params.id&&n.id===a.props.match.params.id&&(e=n),"908fdsg09dfg809"===n.currentQueue[0]?t[n.schedule].push(n):"908fdsg09dfg809"===n.currentQueue[1]&&t["Coming up"].push(n),t},{Daily:[],Weekly:[],Biweekly:[],Monthly:[],"As needed":[],"Coming up":[]}),n=Object.entries(t).map(function(e){return s.a.createElement(b,{key:e[0],title:e[0],tasks:e[1]})});return console.log(e),s.a.createElement("div",{className:"MyTasks"},s.a.createElement("h1",null,"The CSS Slayers"),s.a.createElement("h2",null,"My Tasks"),s.a.createElement("section",{className:"my-tasks-columns"},s.a.createElement("div",{className:"my-tasks-cards"},n),e&&s.a.createElement(w,{task:e})))}}]),a}(n.Component)),O=(t(40),function(){return s.a.createElement(o.a,{basename:"/churro"},s.a.createElement("main",null,s.a.createElement(l.a,{path:"/",exact:!0,component:y}),s.a.createElement(l.a,{path:"/new",exact:!0,component:k}),s.a.createElement(l.a,{path:"/tasks",exact:!0,component:j}),s.a.createElement(l.a,{path:"/tasks/:id",component:j})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.385f59b0.chunk.js.map