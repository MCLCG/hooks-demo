(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),s=n("ahKI"),r=n.n(s),a=n("RGYn"),u=n("DBVu"),l=n("GAyR"),i=n("7JWa"),c="import React from 'react';\nimport useToggle from '..';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",g="import { useState, useMemo } from 'react';\n\n// \u5b9a\u4e49\u7528\u6237\u7684\u884c\u4e3a\nexport interface UserAction<T> {\n  set: (value: T) => void;\n  // \u72b6\u6001\u5411\u5de6\u5207\u6362,\u5207\u6362\u5230\u7b2c\u4e00\u4e2a\n  setLeft: () => void;\n  setRight: () => void;\n  toggle: () => void;\n}\n\n// \u4e0d\u4f20\u53c2\u7684ts\u5b9a\u4e49\nfunction useToggle<T = boolean>(): [boolean, UserAction<boolean>];\n\n// \u4ec0\u4e48\u6837\u5b50\u7684\u4f20\u53c2/\u8fd4\u56de\u503c\nfunction useToggle<T>(defaultValue: T): [T, UserAction<T>];\n// \u4e24\u4e2a\u503c\u4e4b\u95f4\u7684\u5207\u6362\nfunction useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, UserAction<T | U>];\n\n// \u5b9e\u73b0\u529f\u80fd\n// D = false\u8868\u793a\u53ef\u4ee5\u4e0d\u4f20\nfunction useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {\n  const [state, setState] = useState<D | R>(defaultValue);\n\n  const actions = useMemo(() => {\n    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;\n\n    const set = (value) => setState(value);\n    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));\n    const setLeft = () => setState(defaultValue);\n    const setRight = () => setState(reverseValueOrigin);\n\n    return {\n      set,\n      setLeft,\n      setRight,\n      toggle,\n    };\n  }, []);\n  return [state, actions];\n}\n\nexport default useToggle;",p="import React from 'react';\nimport useToggle from '..';\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>\n          Set Hello\n        </button>\n        <button type=\"button\" onClick={() => set('World')}>\n          Set World\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Left\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Set Right\n        </button>\n      </p>\n    </div>\n  );\n};",d={"usetoggle-demo1":{component:Object(i["dynamic"])({loader:function(){var e=Object(l["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c},"index.ts":{import:"..",content:g}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(i["dynamic"])({loader:function(){var e=Object(l["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p},"index.ts":{import:"..",content:g}},dependencies:{react:{version:"18.2.0"}},title:"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",description:'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}}},f=n("Zs1V"),b=n("Y+gX"),m=n.n(b);t["default"]=e=>r.a.createElement(m.a,Object(o["a"])({},e,{config:a,demos:d,apis:f}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"}]},{"title":"\u9ad8\u7ea7"}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"encode react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);