(this["webpackJsonpdemo-react-pyodide"]=this["webpackJsonpdemo-react-pyodide"]||[]).push([[0],{54:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(9),o=t.n(r),i=t(100),s=(t(54),t(16)),c=t(13),l=t(25),u=t(24),d=t(4),p=t(99),b=t(98),h=t(34),m=t(97),j=t(96),g=t(101),f=t(102),O=t(35),x=t.n(O),y=t(40);function v(e,n){return"\nimport random\nimport numpy as np\n\nm = random.randint(1, ".concat(n,")\nn = random.randint(1, ").concat(e,")\np = random.randint(1, ").concat(e,")\n\nrng = np.random.default_rng()\nA = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)\nB = rng.integers(low=-10, high=10, size=(n, p), dtype=np.int32)\nC = A @ B\n  ")}function w(){return(w=Object(y.a)(x.a.mark((function e(n,t,a){var r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v(t,a),e.next=3,n.runPythonAsync(r);case 3:return o={m:n.globals.get("m"),n:n.globals.get("n"),p:n.globals.get("p"),A:n.globals.get("A").toJs().map((function(e){return Array.from(e)})),B:n.globals.get("B").toJs().map((function(e){return Array.from(e)})),C:n.globals.get("C").toJs().map((function(e){return Array.from(e)}))},e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=t(19),N=t(6),P=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e,n=this.props,t=n.values,a=n.readOnly,r=n.onChange,o=n.classes,i=[(e=t).length,0===e.length?0:e[0].length],s=Object(C.a)(i,2),c=s[0],l=s[1];return console.log(t,c,l),Object(N.jsx)("div",{className:o.divTable,children:t.map((function(e,n){return Object(N.jsx)("div",{className:o.divTableRow,children:e.map((function(e,t){return Object(N.jsx)("div",{className:o.divTableCol,children:Object(N.jsx)(g.a,{className:o.cell,value:e,readOnly:a,onChange:function(e){return r(n,t,e.target.value)}})},"cell-".concat(n,"-").concat(t))}))},"row-".concat(n))}))})}}]),t}(a.Component);P.defaultProps={readonly:!1,onChange:function(){}};var A=Object(d.a)((function(e){return{button:{margin:e.spacing(1,1,0,0)},cell:{width:"4ch",margin:e.spacing(1),"& .MuiInputBase-input":{textAlign:"center"}},divTable:{display:"inline-flex",width:"auto",borderLeft:"1px solid #666666",borderRight:"1px solid #666666",borderSpacing:"5px",margin:e.spacing(1)},divTableRow:{display:"table-row",width:"auto",clear:"both"},divTableCol:{display:"tableColumn",width:"auto"}}}))(P),k=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).generateExercise=function(){var e=a.state,n=e.maxNumberOfRows,t=e.maxNumberOfColumns;(function(e,n,t){return w.apply(this,arguments)})(e.pyodide,n,t).then((function(e){a.setState(Object(h.a)(Object(h.a)({},e),{},{hasExercise:!0})),console.log(e)})).catch((function(e){console.log(e)}))},a.handleSubmit=function(e){e.preventDefault(),console.log("handleSubmit"),a.generateExercise()},a.state={pyodide:e.pyodide,maxNumberOfRows:4,maxNumberOfColumns:4,hasExercise:!1,m:1,n:1,p:1,A:[[0]],B:[[0]],C:[[0]]},a}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,n=e.maxNumberOfRows,t=e.maxNumberOfColumns,a=e.hasExercise,r=(e.m,e.n,e.p,e.A),o=e.B,i=e.C,s=this.props.classes;return Object(N.jsx)(m.a,{maxWidth:"lg",children:Object(N.jsxs)(j.a,{className:s.paper,children:[Object(N.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(N.jsx)(g.a,{className:s.parameter,type:"number",value:n,label:"Max Rows"}),Object(N.jsx)(g.a,{className:s.parameter,type:"number",value:t,label:"Max Columns"}),Object(N.jsx)(f.a,{type:"submit",variant:"outlined",color:"primary",className:s.button,children:"New Exercise"})]}),Object(N.jsx)("div",{className:s.exercise,children:a?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(A,{values:r,readOnly:!0}),Object(N.jsx)(A,{values:o,readOnly:!0}),Object(N.jsx)("span",{children:"="}),Object(N.jsx)(A,{values:i,readOnly:!1})]}):Object(N.jsx)(b.a,{variant:"body1",children:"Click the button to generate a new exercise"})})]})})}}]),t}(a.Component),L=Object(d.a)((function(e){return{paper:{height:"100vh"},button:{margin:e.spacing(1,1,0,0),float:"right"},parameter:{width:"12ch",margin:e.spacing(1)},exercise:{display:"flex",flexDirection:"row",alignItems:"center"}}}))(k),B=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).loadPythonPackages=function(e){return e.loadPackage(["numpy"])},a.getPythonVersion=function(e){return e.runPythonAsync("\nimport sys\nsys.version\n")},a.pyodideLoadedHandler=function(e){a.loadPythonPackages(e).then((function(){return a.getPythonVersion(e)})).then((function(n){a.setState({isLoaded:!0,version:n,pyodide:e})}))},a.state={isLoaded:!1,version:null},a}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/"}).then((function(n){e.pyodideLoadedHandler(n)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,t=e.version,a=e.pyodide,r=this.props.classes;return n?Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:t}),Object(N.jsx)(L,{pyodide:a})]}):Object(N.jsxs)("div",{className:r.progress,children:[Object(N.jsx)(b.a,{variant:"h2",children:"Loading Python"}),Object(N.jsx)(p.a,{})]})}}]),t}(a.Component),R=Object(d.a)((function(e){return{progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}))(B),S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),o(e),i(e)}))};o.a.render(Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(i.a,{}),Object(N.jsx)(R,{})]}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.1fc6fdd1.chunk.js.map