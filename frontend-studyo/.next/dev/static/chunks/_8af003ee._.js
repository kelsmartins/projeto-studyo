(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ style, title, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `w-[100px] h-[30px] ${style} rounded-md cursor-pointer text-sm`,
        onClick: onClick,
        children: title
    }, void 0, false, {
        fileName: "[project]/components/button.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/datepicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatePickerComponent",
    ()=>DatePickerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/pt-BR.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerLocale"])('pt-BR', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ptBR"]);
const DatePickerComponent = ({ onPick })=>{
    _s();
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    function handleSetDate(newDate) {
        if (newDate) {
            setDate(newDate);
            onPick(newDate); // pegou a data da state e levou para a comp-pai(novocard)
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        selected: date,
        onChange: handleSetDate,
        locale: `pt-BR`,
        className: `w-full h-[40px] border border-zinc-700 rounded-md mb-3 text-zinc-600 text-md p-2`,
        dateFormat: `dd/MM/yyyy`,
        minDate: new Date()
    }, void 0, false, {
        fileName: "[project]/components/datepicker.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
} // npm install react-dactepicker --save +  npm install date-fns + npm install @types/react-datepicker --save-dev
;
_s(DatePickerComponent, "rW+rxy2mJ1oFEB1Cqg4Z2uVJym0=");
_c = DatePickerComponent;
var _c;
__turbopack_context__.k.register(_c, "DatePickerComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dropzonecomponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropzoneComponent",
    ()=>DropzoneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DropzoneComponent = ({ getSelectedFiles })=>{
    _s();
    const { getRootProps, getInputProps, acceptedFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DropzoneComponent.useEffect": ()=>{
            acceptedFiles.forEach({
                "DropzoneComponent.useEffect": (file)=>{
                    getSelectedFiles(file);
                }
            }["DropzoneComponent.useEffect"]);
        }
    }["DropzoneComponent.useEffect"], [
        acceptedFiles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[80px] border border-dashed rounded-md border-zinc-700 mb-3 flex flex-col justify-center items-center",
        ...getRootProps(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...getInputProps()
            }, void 0, false, {
                fileName: "[project]/components/dropzonecomponent.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {
                className: "text-zinc-600 size-5 my-1"
            }, void 0, false, {
                fileName: "[project]/components/dropzonecomponent.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-600 text-sm",
                children: "Arraste um arquivo ou clique aqui"
            }, void 0, false, {
                fileName: "[project]/components/dropzonecomponent.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dropzonecomponent.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
} // npm install react-dropzone
;
_s(DropzoneComponent, "aqk9+Pdb+0nHhcSSIy4dCc/SuK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = DropzoneComponent;
var _c;
__turbopack_context__.k.register(_c, "DropzoneComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/categorycomponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftCategoryComponent",
    ()=>LeftCategoryComponent,
    "TopCategoryComponent",
    ()=>TopCategoryComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TopCategoryComponent({ defColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${defColor} h-[15px] w-full rounded-t-lg`
    }, void 0, false, {
        fileName: "[project]/components/categorycomponent.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = TopCategoryComponent;
function LeftCategoryComponent({ defColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${defColor} w-[15px] h-full rounded-l-lg`
    }, void 0, false, {
        fileName: "[project]/components/categorycomponent.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c1 = LeftCategoryComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "TopCategoryComponent");
__turbopack_context__.k.register(_c1, "LeftCategoryComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/cores.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cores",
    ()=>Cores
]);
const Cores = [
    {
        id: 1,
        nome: 'white',
        hex: 'bg-white'
    },
    {
        id: 2,
        nome: 'red',
        hex: 'bg-red-400'
    },
    {
        id: 3,
        nome: 'orange',
        hex: 'bg-orange-400'
    },
    {
        id: 4,
        nome: 'yellow',
        hex: 'bg-yellow-400'
    },
    {
        id: 5,
        nome: 'green',
        hex: 'bg-green-400'
    },
    {
        id: 6,
        nome: 'blue',
        hex: 'bg-blue-400'
    },
    {
        id: 7,
        nome: 'purple',
        hex: 'bg-purple-400'
    }
] // {id: 1, nome: 'white', hex: '#ffffff'},
 //     {id: 2, nome: 'red', hex: '#ff5e5e'},
 //     {id: 3, nome: 'orange', hex: '#f97e1a'},
 //     {id: 4, nome: 'yellow', hex: '#faee15ff'},
 //     {id: 5, nome: 'green', hex: '#4ade80'},
 //     {id: 6, nome: 'blue', hex: '#3892ff'},
 //     {id: 7, nome: 'purple', hex: '#8000ff'}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/colorcomponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorComponent",
    ()=>ColorComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cores.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ColorComponent = ({ getColor })=>{
    _s();
    const [isSelected, setIsSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleClick(cor) {
        setIsSelected(cor.id);
        getColor(cor.hex);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "h-[40px] w-full rounded-md mb-3 flex justify-between items-center gap-1",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cores"].map((cor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: `rounded-md size-8 ${cor.hex} ${isSelected == cor.id ? 'border-4' : 'border-2'}  border-zinc-600`,
                onClick: ()=>handleClick(cor)
            }, cor.id, false, {
                fileName: "[project]/components/colorcomponent.tsx",
                lineNumber: 22,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/colorcomponent.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ColorComponent, "8OllkIm28xHrmO+1eQgVctpcyL8=");
_c = ColorComponent;
var _c;
__turbopack_context__.k.register(_c, "ColorComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/updatecard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateCard",
    ()=>UpdateCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/datepicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dropzonecomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categorycomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$colorcomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/colorcomponent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function UpdateCard({ cardData, handleCloseUpdateCard, getFields, handleUpdateCard }) {
    _s();
    const [updateTitle, setUpdateTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cardData.title);
    const [updateDate, setUpdateDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cardData.date);
    const [updateLinks, setUpdateLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cardData.links ?? []);
    const [updateCategory, setUpdateCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updateColor, setUpdateColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updateQuickNotes, setUpdateQuickNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputLink, setInputLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updateFiles, setUpdateFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cardData.files ?? []);
    // funcoes pick fields
    function handlePickNewDate(date) {
        setUpdateDate(date); // setar a data q pegou, antes eu tava setando a data como ela msm ou seja a antiga, nao a q quero como nova
    }
    function getNewSelectedFiles(newUpdatedFile) {
        setUpdateFiles((prevFiles)=>[
                ...prevFiles,
                newUpdatedFile
            ]); // "concatenar" com oq ja tem lá
    }
    function handleGeNewtLinks() {
        if (inputLink != '') {
            setUpdateLinks((prev)=>[
                    ...prev,
                    inputLink
                ]);
            setInputLink('');
        } else {
            alert('link não pode ser vazio');
        }
    }
    function getColor(color) {
        setUpdateColor(color);
    }
    // fim funcoes pick fields
    function saveUpdateCard() {
        // fazer algo: mostrar div para atualizar
        getFields(updateTitle, updateDate, updateCategory, updateColor, updateQuickNotes, updateLinks || [], updateFiles || []); // vai executar a chamada da funcao, adicionando os parâmetros necessarios
        handleCloseUpdateCard();
        handleUpdateCard();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full fixed inset-0 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-[600px] h-[600px] bg-white flex flex-col rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col justify-between h-[50px] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopCategoryComponent"], {
                            defColor: updateColor
                        }, void 0, false, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900",
                            children: "Atualizar assunto"
                        }, void 0, false, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 71,
                            columnNumber: 22
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/updatecard.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-row flex-1 justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm uppercase text-zinc-600 font-bold",
                                    children: "Título"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600",
                                    placeholder: "ex: Lógica de Programação",
                                    value: updateTitle,
                                    onChange: (text)=>setUpdateTitle(text.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Data Agendada"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePickerComponent"], {
                                    onPick: handlePickNewDate
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Categoria (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: updateCategory,
                                    onChange: (e)=>setUpdateCategory(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Cor (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$colorcomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorComponent"], {
                                    getColor: getColor
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Anotações rápidas (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[80px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: updateQuickNotes,
                                    onChange: (e)=>setUpdateQuickNotes(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Links (Site ou YouTube)"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "Pressione Enter para adicionar",
                                    value: inputLink,
                                    onChange: (e)=>setInputLink(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            handleGeNewtLinks();
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "w-full h-[140px] rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2",
                                    children: updateLinks && updateLinks.length > 0 && updateLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLink"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/updatecard.tsx",
                                            lineNumber: 135,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold mt-3",
                                    children: "Arquivos"
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropzoneComponent"], {
                                    getSelectedFiles: getNewSelectedFiles
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "w-full h-[140px] rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2",
                                    children: updateFiles && updateFiles.length > 0 && updateFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 h-full w-[90%] flex justify-start items-center truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/updatecard.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/updatecard.tsx",
                                            lineNumber: 150,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/updatecard.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full h-[60px] flex flex-col justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[4px] bg-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-50 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                    title: "voltar",
                                    onClick: handleCloseUpdateCard
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "bg-zinc-700 text-white font-bold hover:bg-zinc-600",
                                    title: "concluir",
                                    onClick: saveUpdateCard
                                }, void 0, false, {
                                    fileName: "[project]/components/updatecard.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/updatecard.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/updatecard.tsx",
                    lineNumber: 160,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/updatecard.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/updatecard.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(UpdateCard, "TBGyag+g2NfcCXU0iC32OG/zcUY=");
_c = UpdateCard;
var _c;
__turbopack_context__.k.register(_c, "UpdateCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/carddetalhado.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardDetalhado",
    ()=>CardDetalhado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$updatecard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/updatecard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categorycomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function CardDetalhado({ cardData, closeDetails, getFields, handleUpdateCard }) {
    _s();
    const [showUpdateCard, setShowUpdateCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleShowUpdateCard() {
        setShowUpdateCard(true);
    }
    function handleCloseUpdateCard() {
        setShowUpdateCard(false);
    }
    function handleConclude() {
        closeDetails();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: closeDetails,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-[600px] h-[600px] bg-white flex flex-col rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopCategoryComponent"], {
                    defColor: cardData.color || 'text-white'
                }, void 0, false, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full h-[80px] flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-zinc-600 text-center leading-tight",
                            children: cardData.title
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[20px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4",
                            children: cardData.date.toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-row flex-1 justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col px-4"
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm uppercase text-zinc-600 font-bold h-3 flex justify-start items-center",
                                    children: "FONTES DIGITAIS"
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this),
                                cardData.links && cardData.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3",
                                    children: "links"
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 59,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "min-h-0 max-h-[185px] w-full mt-1 overflow-y-auto no-scrollbar",
                                    children: cardData.links && cardData.links.length > 0 && cardData.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLink"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/carddetalhado.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                cardData.files && cardData.files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3",
                                    children: "arquivos"
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "min-h-0 max-h-[185px] w-full mt-1 overflow-y-auto no-scrollbar",
                                    children: cardData.files && cardData.files.length > 0 && cardData.files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/carddetalhado.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full h-[60px] flex flex-col justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[4px] bg-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-50 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                    title: "editar",
                                    onClick: handleShowUpdateCard
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "bg-zinc-700 text-white font-bold hover:bg-zinc-600",
                                    title: "concluir",
                                    onClick: handleConclude
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this),
                showUpdateCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$updatecard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateCard"], {
                    cardData: cardData,
                    handleCloseUpdateCard: handleCloseUpdateCard,
                    getFields: getFields,
                    handleUpdateCard: handleUpdateCard
                }, void 0, false, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 101,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/carddetalhado.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/carddetalhado.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(CardDetalhado, "953+gezPNUP9Jsvki4vdy+MRXp4=");
_c = CardDetalhado;
var _c;
__turbopack_context__.k.register(_c, "CardDetalhado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/carddetalhado.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categorycomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Card({ assuntoData }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // valores salvos no componente updatecard
    const [cardId, setCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.id);
    const [updateCardTitle, setUpdatedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.assunto);
    const [updateCardDate, setUpdateCarDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.dataAgendada);
    const [UpdateCardCategory, setUpdateCardCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.categoria ?? '');
    const [updateCardColor, setUpdateCardColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.cor ?? 'bg-zinc-700');
    const [updateCardQuickNotes, setUpdateCardQuickNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.notasRapidas ?? '');
    const [updateCardLinks, setUpdateCardLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.linksFonteDigital ?? []);
    const [updateCardFiles, setUpdateCardFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.arquivosFonteDigital ?? []);
    // para caso nao venha dados, continuar com oq ja tem
    const cardData = {
        title: updateCardTitle,
        date: updateCardDate,
        category: UpdateCardCategory,
        color: updateCardColor,
        quickNotes: updateCardQuickNotes,
        links: updateCardLinks,
        files: updateCardFiles
    };
    function handleShowDetails() {
        setShow(true);
    }
    function handleCloseDetails() {
        setShow(false);
    }
    // ataualizar states com novos valores
    function getUpdateCardFields(newUpdatedTitle, newUpdatedDate, newUpdateCategory, newUpdateColor, newUpdateQuickNotes, newUpdatedLinks, newUpdatedFiles) {
        setUpdatedCard(newUpdatedTitle);
        setUpdateCarDate(newUpdatedDate);
        setUpdateCardCategory(newUpdateCategory ?? UpdateCardCategory);
        setUpdateCardColor(newUpdateColor ?? updateCardColor);
        setUpdateCardQuickNotes(newUpdateQuickNotes ?? updateCardQuickNotes);
        setUpdateCardLinks(newUpdatedLinks ?? updateCardLinks);
        setUpdateCardFiles(newUpdatedFiles ?? updateCardFiles);
    }
    // requisicao atualizar dados de card
    async function handleUpdateCard() {
        alert('> ' + updateCardTitle + '> ' + updateCardDate + '> ' + updateCardFiles + '> ' + updateCardLinks);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('');
    }
    async function handleDeleteCard() {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete('');
        console.log(res);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-white flex shadow-md shadow-zinc-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftCategoryComponent"], {
                defColor: updateCardColor
            }, void 0, false, {
                fileName: "[project]/components/card.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded-r-lg flex flex-col p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "w-full h-[20px] flex items-center text-sm font-bold text-zinc-500",
                        children: updateCardDate.toLocaleDateString()
                    }, void 0, false, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full h-[50px] flex items-center text-md font-bold text-zinc-600",
                        children: updateCardTitle
                    }, void 0, false, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[90px] flex flex-row gap-1",
                        children: [
                            updateCardLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLink"], {
                                className: "text-zinc-600 size-6 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            updateCardFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
                                className: "text-zinc-600 size-6 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[60px] flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                title: "ver tudo",
                                onClick: handleShowDetails
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors",
                                title: "concluir",
                                onClick: handleDeleteCard
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDetalhado"], {
                        cardData: cardData,
                        closeDetails: handleCloseDetails,
                        getFields: (updateCardTitle, updateCardDate, UpdateCardCategory, updateCardColor, updateCardQuickNotes, updateCardLinks, updateCardFiles)=>getUpdateCardFields(updateCardTitle, updateCardDate, UpdateCardCategory, updateCardColor, updateCardQuickNotes, updateCardLinks, updateCardFiles),
                        handleUpdateCard: handleUpdateCard
                    }, void 0, false, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
}
_s(Card, "2ebAbnV+BNpzBquzxyXQjbrGBc0=");
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cardarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardArea",
    ()=>CardArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CardArea({ title, code, assuntos }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardArea.useEffect": ()=>{
            console.log("Assuntos recebidos:", assuntos);
            assuntos.forEach({
                "CardArea.useEffect": (a)=>{
                    console.log("DataAgendada original:", a.dataAgendada);
                    console.log("Convertido para Date:", new Date(a.dataAgendada));
                }
            }["CardArea.useEffect"]);
        }
    }["CardArea.useEffect"], [
        assuntos
    ]);
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tomorrow, setTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [afterTomorrow, setAfterTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nextDays, setNextDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // setar default meia noite
    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);
    amanha.setHours(0, 0, 0, 0); // setar default meia noite
    const depoisAmanha = new Date();
    depoisAmanha.setDate(hoje.getDate() + 2);
    depoisAmanha.setHours(0, 0, 0, 0); // setar default meia noite
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardArea.useEffect": ()=>{
            setToday([]); // para nao ter objetos duplicados
            setTomorrow([]);
            setAfterTomorrow([]);
            setNextDays([]);
            assuntos.forEach({
                "CardArea.useEffect": (assunto)=>{
                    const dataAssunto = new Date(assunto.dataAgendada); // precisa criar nova data e atribuir a atual a ela
                    dataAssunto.setHours(0, 0, 0, 0); // depois setar default meia noite
                    // assim, comparação fica mais simples
                    if (dataAssunto.getTime() === hoje.getTime()) {
                        setToday({
                            "CardArea.useEffect": (today)=>[
                                    ...today,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else if (dataAssunto.getTime() === amanha.getTime()) {
                        setTomorrow({
                            "CardArea.useEffect": (tomorrow)=>[
                                    ...tomorrow,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else if (dataAssunto.getTime() === depoisAmanha.getTime()) {
                        setAfterTomorrow({
                            "CardArea.useEffect": (afterTomorrow)=>[
                                    ...afterTomorrow,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else if (dataAssunto.getTime() > depoisAmanha.getTime()) {
                        setNextDays({
                            "CardArea.useEffect": (nextDays)=>[
                                    ...nextDays,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    }
                }
            }["CardArea.useEffect"]);
        }
    }["CardArea.useEffect"], [
        assuntos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[200px] w-[100%] mx-auto flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[40px] flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl px-4 font-bold text-zinc-800",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/cardarea.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cardarea.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            "                           ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar",
                children: [
                    code === 1 ? today.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/components/cardarea.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this)) : code === 2 ? tomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/components/cardarea.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)) : code === 3 ? afterTomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/components/cardarea.tsx",
                            lineNumber: 75,
                            columnNumber: 24
                        }, this)) : code === 4 ? nextDays.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/components/cardarea.tsx",
                            lineNumber: 77,
                            columnNumber: 24
                        }, this)) : '',
                    code === 1 && today.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar hoje :D"
                    }, void 0, false, {
                        fileName: "[project]/components/cardarea.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this),
                    code === 2 && tomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/components/cardarea.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    code === 3 && afterTomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar depois de amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/components/cardarea.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    code === 4 && nextDays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar nos próximos dias :D"
                    }, void 0, false, {
                        fileName: "[project]/components/cardarea.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cardarea.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cardarea.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(CardArea, "I8baQHGppRpWZS3xhzmZb1xBHNM=");
_c = CardArea;
var _c;
__turbopack_context__.k.register(_c, "CardArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/novocard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NovoCard",
    ()=>NovoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/datepicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categorycomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dropzonecomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$colorcomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/colorcomponent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function NovoCard({ handleCloseNewCard, handleSaveNewCard }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [selectedLinks, setSelectedLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bg-zinc-700');
    const [quickNotes, setQuickNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputLink, setInputLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // inicio funcoes pickfield
    function handlePickDate(newDate) {
        setDate(newDate);
    }
    function getSelectedFiles(newFile) {
        setSelectedFiles((prev)=>[
                ...prev,
                newFile
            ]); // adicionar à lista existente
    }
    function handleGetLinks() {
        if (inputLink != '') {
            setSelectedLinks((prev)=>[
                    ...prev,
                    inputLink
                ]);
            setInputLink('');
        } else {
            alert('link não pode ser vazio');
        }
    }
    function getColor(color) {
        setColor(color);
    }
    // fim funcoes pickfield
    function atLeastTwoFilledFields() {
        if (title != '' && selectedLinks && selectedFiles) {
            return true;
        } else if (title != '' && selectedLinks && !selectedFiles) {
            return true;
        } else if (title != '' && selectedLinks && selectedFiles) {
            return true;
        } else {
            return false;
        }
    }
    function isFieldsEmpty() {
        if (title == '' && selectedLinks && !selectedFiles) {
            alert('titulo e uma fonte digital obrigatorios');
        } else if (selectedLinks && !selectedFiles) {
            alert('adicione ao menos uma fonte digital');
        } else if (title == '' && (selectedLinks || selectedFiles)) {
            alert('tem fonte digital mas nao tem titulo');
        }
    }
    function handleClick() {
        if (atLeastTwoFilledFields()) {
            handleSaveNewCard(title, date, category, color, quickNotes, selectedLinks, selectedFiles); // enviar esses parametros para o componente pai
            handleCloseNewCard();
        } else {
            isFieldsEmpty();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: handleCloseNewCard,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-[600px] h-[600px] bg-white flex flex-col rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col justify-between h-[50px] w-full items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopCategoryComponent"], {
                            defColor: color
                        }, void 0, false, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-center text-zinc-700",
                            children: "Novo Assunto"
                        }, void 0, false, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 93,
                            columnNumber: 22
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/novocard.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-row flex-1 justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Título"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600",
                                    placeholder: "ex: Lógica de Programação",
                                    value: title,
                                    onChange: (text)=>setTitle(text.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Data Agendada"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePickerComponent"], {
                                    onPick: handlePickDate
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Categoria (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: category,
                                    onChange: (e)=>setCategory(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Cor (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$colorcomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorComponent"], {
                                    getColor: getColor
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Anotações rápidas (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[80px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: quickNotes,
                                    onChange: (e)=>setQuickNotes(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Links (Site ou YouTube)"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "Pressione Enter para adicionar",
                                    value: inputLink,
                                    onChange: (e)=>setInputLink(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            handleGetLinks();
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2",
                                    children: selectedLinks && selectedLinks.length > 0 && selectedLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLink"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/novocard.tsx",
                                            lineNumber: 156,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Arquivo"
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropzoneComponent"], {
                                    getSelectedFiles: getSelectedFiles
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "w-full h-[120px] mb-3 rounded-md overflow-y-auto no-scrollbar border border-zinc-300 px-2",
                                    children: selectedFiles && selectedFiles.length > 0 && selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "w-full h-10 bg-zinc-100 my-2 flex flex-row justify-start items-center gap-1 px-2 shadow-xs shadow-zinc-300 rounded-md hover:bg-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
                                                    className: "text-zinc-500 size-4 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 h-full w-[90%] flex justify-start items-center truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/novocard.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/novocard.tsx",
                                            lineNumber: 171,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/novocard.tsx",
                                    lineNumber: 167,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/novocard.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full h-[60px] flex flex-col justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[4px] bg-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-50 flex justify-end items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "bg-zinc-700 text-white font-bold hover:bg-zinc-600",
                                title: "salvar",
                                onClick: handleClick
                            }, void 0, false, {
                                fileName: "[project]/components/novocard.tsx",
                                lineNumber: 184,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/novocard.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/novocard.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/novocard.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/novocard.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
} /*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/ 
_s(NovoCard, "1ZdjdvMUDM6Rpke1UmQGJcFa+yc=");
_c = NovoCard;
var _c;
__turbopack_context__.k.register(_c, "NovoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/assuntos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Assuntos",
    ()=>Assuntos
]);
const Assuntos = [
    {
        id: '1',
        // Mês 10 = Novembro. HOJE (15/11/2025)
        dataAgendada: new Date(2025, 10, 19),
        assunto: 'Teste para HOJE',
        categoria: 'Testes',
        cor: 'bg-red-400',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '2',
        // Mês 10 = Novembro. AMANHÃ (16/11/2025)
        dataAgendada: new Date(2025, 10, 18),
        assunto: 'Teste para AMANHÃ',
        categoria: 'Testes',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '3',
        // Mês 10 = Novembro. DEPOIS DE AMANHÃ (17/11/2025)
        dataAgendada: new Date(2025, 10, 20),
        assunto: 'Teste para DEPOIS DE AMANHÃ',
        categoria: 'Testes',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '4',
        // Mês 10 = Novembro. PRÓXIMOS DIAS (20/11/2025)
        dataAgendada: new Date(2025, 10, 20),
        assunto: 'Teste para PRÓXIMOS DIAS',
        categoria: 'Testes',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '5',
        // Mês 11 = Dezembro. PRÓXIMOS DIAS (05/12/2025)
        dataAgendada: new Date(2025, 11, 5),
        assunto: 'Revisão de Logaritmos (Dezembro)',
        categoria: 'Matemática',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '6',
        // Mês 10 = Novembro. PASSADO (07/11/2025) - Não deve aparecer
        dataAgendada: new Date(2025, 10, 7),
        assunto: 'Colocação Pronominal (Passado)',
        categoria: 'Português',
        linksFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cardarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$novocard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/novocard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assuntos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const [newCardVisible, setNewCardVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assuntos, setAssuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Assuntos"]);
    function handleOpenNewCard() {
        setNewCardVisible(true);
    }
    function handleCloseNewCard() {
        setNewCardVisible(false);
    }
    // hospedando imagens em servidor online (banco de dados nao guarda arquivos) - CLOUDINARY
    async function handleSaveNewCard(title, date, category, color, quickNotes, links, files) {
        const cardTest = {
            id: crypto.randomUUID.toString(),
            assunto: title,
            dataAgendada: date,
            categoria: category,
            cor: color,
            notasRapidas: quickNotes,
            linksFonteDigital: links,
            arquivosFonteDigital: files
        };
        setAssuntos((prev)=>[
                ...prev,
                cardTest
            ]);
    // // se enviou arquivo  (INICIO)  
    // const uploadedUrls: string[] = []; // teste
    // if(files){ // se existir arquivo
    //   for (const file of files) { // PARA CADA FILE EM FILES, FACA REQUISICAO  CLOUDINARY SO ACEITA UM ARQUIVO POR REQUISIÇÃO 
    //     const formData = new FormData();
    //       formData.append('file', file);
    //       formData.append('upload_preset', 'primeiropreset');
    //                                                               // minha url no cloudinary dil7jwa49
    //     const fileRes = await axios.post('https://api.cloudinary.com/v1_1/dil7jwa49/image/upload', // enviar somente imagem e devolver url
    //     formData                                                                               // para salvar no banco de dados
    //     );
    //     // alert('url arquivo: '+ fileRes.data.secure_url); TEST TEST TEST TEST TEST
    //     uploadedUrls.push(fileRes.data.secure_url); // teste: adiciona urls em cada posicao do vetor se tiver
    //   }
    // }
    // // se EXISTIREM ARQUIVOS (FIM)
    // // REQUISICAO PRA API DO BACKEND
    // try {
    //   const newId = crypto.randomUUID().toString();
    //   const res = axios.post('', {
    //     id: newId,
    //     dataAgendada: date,
    //     assunto: title,
    //     categoria: category,
    //     cor: color,
    //     notasRapidas: quickNotes,
    //     linkFonteDigital: links,
    //     arquivosFonteDigital: uploadedUrls
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen flex overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[300px] bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            "                                               ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[100%] flex-1 bg-gray-200 min-w-0",
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[10%] w-[100%] flex flex-row items-center px-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-zinc-800",
                                children: "Estudos"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer",
                                onClick: handleOpenNewCard,
                                children: "novo assunto"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " w-full h-[90%] overflow-y-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Hoje",
                                code: 1,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Amanhã",
                                code: 2,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Depois de amanhã",
                                code: 3,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Próximos dias",
                                code: 4,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            newCardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$novocard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NovoCard"], {
                handleCloseNewCard: handleCloseNewCard,
                handleSaveNewCard: (title, date, category, color, quickNotes, links, files)=>handleSaveNewCard(title, date, category, color, quickNotes, links, files)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(Home, "Iy0mXWPi52jzxQ0phReWjcWLM7U=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8af003ee._.js.map