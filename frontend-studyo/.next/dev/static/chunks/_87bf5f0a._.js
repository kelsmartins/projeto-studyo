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
function TopCategoryComponent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "bg-black h-[15px] w-full rounded-t-lg"
    }, void 0, false, {
        fileName: "[project]/components/categorycomponent.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = TopCategoryComponent;
function LeftCategoryComponent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "bg-white w-[15px] h-full rounded-l-lg"
    }, void 0, false, {
        fileName: "[project]/components/categorycomponent.tsx",
        lineNumber: 10,
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
"[project]/components/formcard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormCard",
    ()=>FormCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/datepicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categorycomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dropzonecomponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function FormCard({ initialData, handleClose, handleSave }) {
    _s();
    const isEditing = !!initialData;
    // ESTADOS (Inicializados com initialData OU valores padrão vazios)
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.title ?? '');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.date ?? new Date());
    const [selectedLinks, setSelectedLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.links ?? []);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.category ?? '');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.color ?? '');
    const [quickNotes, setQuickNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.quickNotes ?? '');
    const [inputLink, setInputLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.files ?? []);
    function handlePickDate(newDate) {
        setDate(newDate);
    }
    // Sua lógica original de validação
    function atLeastTwoFilledFields() {
        if (title != '' && selectedLinks.length > 0 && selectedFiles.length > 0) {
            return true;
        } else if (title != '' && selectedLinks.length > 0 && selectedFiles.length === 0) {
            return true;
        } else if (title != '' && selectedLinks.length > 0 && selectedFiles.length > 0) {
            // Nota: essa condição é igual a primeira, mantive conforme seu original
            return true;
        } else {
            return false;
        }
    }
    function isFieldsEmpty() {
        if (title == '' && selectedLinks.length > 0 && selectedFiles.length === 0) {
            alert('titulo e uma fonte digital obrigatorios');
        } else if (selectedLinks.length > 0 && selectedFiles.length === 0) {
            alert('adicione ao menos uma fonte digital');
        } else if (title == '' && (selectedLinks.length > 0 || selectedFiles.length > 0)) {
            alert('tem fonte digital mas nao tem titulo');
        }
    }
    // Lógica de salvar adaptada
    function handleClick() {
        if (isEditing) {
            // Se for edição, salva direto (comportamento do seu UpdateCard original)
            handleSave(title, date, selectedFiles, selectedLinks, category, color, quickNotes);
            handleClose();
        } else {
            // Se for novo, valida (comportamento do seu NovoCard original)
            if (atLeastTwoFilledFields()) {
                handleSave(title, date, selectedFiles, selectedLinks, category, color, quickNotes);
                handleClose();
            } else {
                isFieldsEmpty();
            }
        }
    }
    function getSelectedFiles(newFile) {
        setSelectedFiles((prev)=>[
                ...prev,
                newFile
            ]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-[600px] h-[600px] bg-white flex flex-col rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col justify-between h-[50px] w-full items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopCategoryComponent"], {}, void 0, false, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-center text-zinc-900",
                            children: isEditing ? 'Atualizar Assunto' : 'Novo Assunto'
                        }, void 0, false, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 109,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/formcard.tsx",
                    lineNumber: 107,
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
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-zinc-800 text-sm mb-3 placeholder-italic",
                                    placeholder: "ex: Lógica de Programação",
                                    value: title,
                                    onChange: (text)=>setTitle(text.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Data Agendada"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePickerComponent"], {
                                    onPick: handlePickDate
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Categoria (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: category,
                                    onChange: (e)=>setCategory(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Cor (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "h-[40px] w-full rounded-md mb-3 flex justify-between items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-white border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-red-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-orange-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-yellow-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-green-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-blue-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-md size-8 bg-purple-400 border-2 border-zinc-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-500 font-bold",
                                    children: "Anotações rápidas (Opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 153,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "h-[80px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                                    placeholder: "ex: Curso Informática Básica",
                                    value: quickNotes,
                                    onChange: (e)=>setQuickNotes(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Links (Site ou YouTube)"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 166,
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
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 167,
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
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 178,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-sm text-zinc-600 font-bold",
                                    children: "Arquivo"
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dropzonecomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropzoneComponent"], {
                                    getSelectedFiles: getSelectedFiles
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 192,
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
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 h-full w-[90%] flex justify-start items-center truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/formcard.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/formcard.tsx",
                                            lineNumber: 197,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/formcard.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full h-[60px] flex flex-col justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[4px] bg-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 209,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-50 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                    title: "voltar",
                                    onClick: handleClose
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "bg-zinc-900 text-white font-bold hover:bg-zinc-600",
                                    title: isEditing ? "Concluir" : "Salvar",
                                    onClick: handleClick
                                }, void 0, false, {
                                    fileName: "[project]/components/formcard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/formcard.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/formcard.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/formcard.tsx",
            lineNumber: 105,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/formcard.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
_s(FormCard, "fsxXHpuGmF9t6wRsrBVUehraOY4=");
_c = FormCard;
var _c;
__turbopack_context__.k.register(_c, "FormCard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/formcard.tsx [app-client] (ecmascript)");
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopCategoryComponent"], {}, void 0, false, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 39,
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
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[20px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4",
                            children: cardData.date.toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-row flex-1 justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px] h-full flex flex-col px-4"
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 46,
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
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                cardData.links && cardData.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3",
                                    children: "links"
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 56,
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
                                                    lineNumber: 64,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: link
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/carddetalhado.tsx",
                                            lineNumber: 63,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                cardData.files && cardData.files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm text-zinc-500 font-bold h-3 flex justify-start items-center mt-3",
                                    children: "arquivos"
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 74,
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
                                                    lineNumber: 82,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-600 truncate h-full w-[90%] flex justify-start items-center",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBucket"], {
                                                    className: "text-zinc-500 size-4 font-bold hover:text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/carddetalhado.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/carddetalhado.tsx",
                                            lineNumber: 81,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full h-[60px] flex flex-col justify-between px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[4px] bg-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 91,
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
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: "bg-zinc-700 text-white font-bold hover:bg-zinc-600",
                                    title: "concluir",
                                    onClick: handleConclude
                                }, void 0, false, {
                                    fileName: "[project]/components/carddetalhado.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carddetalhado.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                showUpdateCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormCard"], {
                    cardData: cardData,
                    handleClose: handleCloseUpdateCard,
                    getFields: getFields,
                    handleSave: handleUpdateCard
                }, void 0, false, {
                    fileName: "[project]/components/carddetalhado.tsx",
                    lineNumber: 98,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/carddetalhado.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/carddetalhado.tsx",
        lineNumber: 36,
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
    const [updateCardLinks, setUpdateCardLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.linkFonteDigital ?? []);
    const [updateCardFiles, setUpdateCardFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assuntoData.arquivosFonteDigital ?? []);
    // para caso nao venha dados, continuar com oq ja tem
    const cardData = {
        title: updateCardTitle,
        date: updateCardDate,
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
    function getUpdateCardFields(newUpdatedTitle, newUpdatedDate, newUpdatedLink, newUpdatedFiles) {
        setUpdatedCard(newUpdatedTitle);
        setUpdateCarDate(newUpdatedDate);
        setUpdateCardLinks(newUpdatedLink ?? updateCardLinks);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categorycomponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftCategoryComponent"], {}, void 0, false, {
                fileName: "[project]/components/card.tsx",
                lineNumber: 62,
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
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full h-[50px] flex items-center text-md font-bold text-zinc-600",
                        children: updateCardTitle
                    }, void 0, false, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[90px] flex flex-row gap-1",
                        children: [
                            updateCardFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {
                                className: "text-zinc-600 size-6 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this),
                            updateCardLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLink"], {
                                className: "text-zinc-600 size-6 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 67,
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
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors",
                                title: "concluir",
                                onClick: handleDeleteCard
                            }, void 0, false, {
                                fileName: "[project]/components/card.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDetalhado"], {
                        cardData: cardData,
                        closeDetails: handleCloseDetails,
                        getFields: (updateCardTitle, updateCardDate, updateCardLinks, updateCardFiles)=>getUpdateCardFields(updateCardTitle, updateCardDate, updateCardLinks, updateCardFiles),
                        handleUpdateCard: handleUpdateCard
                    }, void 0, false, {
                        fileName: "[project]/components/card.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
_s(Card, "r83rAWP82vDV8JvxDq1sB1kspK0=");
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
        contexto: 'Testes',
        linkFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '2',
        // Mês 10 = Novembro. AMANHÃ (16/11/2025)
        dataAgendada: new Date(2025, 10, 18),
        assunto: 'Teste para AMANHÃ',
        contexto: 'Testes',
        linkFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '3',
        // Mês 10 = Novembro. DEPOIS DE AMANHÃ (17/11/2025)
        dataAgendada: new Date(2025, 10, 20),
        assunto: 'Teste para DEPOIS DE AMANHÃ',
        contexto: 'Testes',
        linkFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '4',
        // Mês 10 = Novembro. PRÓXIMOS DIAS (20/11/2025)
        dataAgendada: new Date(2025, 10, 20),
        assunto: 'Teste para PRÓXIMOS DIAS',
        contexto: 'Testes',
        linkFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '5',
        // Mês 11 = Dezembro. PRÓXIMOS DIAS (05/12/2025)
        dataAgendada: new Date(2025, 11, 5),
        assunto: 'Revisão de Logaritmos (Dezembro)',
        contexto: 'Matemática',
        linkFonteDigital: [
            'https://youtu.be/logaritmos-revisao',
            'https://youtu.be/logaritmos-revisao'
        ]
    },
    {
        id: '6',
        // Mês 10 = Novembro. PASSADO (07/11/2025) - Não deve aparecer
        dataAgendada: new Date(2025, 10, 7),
        assunto: 'Colocação Pronominal (Passado)',
        contexto: 'Português',
        linkFonteDigital: [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/formcard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assuntos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
    async function handleSaveNewCard(title, date, files, links) {
        // se enviou arquivo  (INICIO)  
        const uploadedUrls = []; // teste
        if (files) {
            for (const file of files){
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'primeiropreset');
                // minha url no cloudinary dil7jwa49
                const fileRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://api.cloudinary.com/v1_1/dil7jwa49/image/upload', formData // para salvar no banco de dados
                );
                // alert('url arquivo: '+ fileRes.data.secure_url); TEST TEST TEST TEST TEST
                uploadedUrls.push(fileRes.data.secure_url); // teste: adiciona urls em cada posicao do vetor se tiver
            }
        }
        // se EXISTIREM ARQUIVOS (FIM)
        // REQUISICAO PRA API DO BACKEND
        try {
            const newId = crypto.randomUUID().toString();
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('', {
                id: newId,
                dataAgendada: date,
                assunto: title,
                linkFonteDigital: links,
                arquivosFonteDigital: uploadedUrls
            });
        } catch (error) {
            console.log(error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen flex overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[300px] bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 63,
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
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer",
                                onClick: handleOpenNewCard,
                                children: "novo assunto"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 67,
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
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Amanhã",
                                code: 2,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Depois de amanhã",
                                code: 3,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Próximos dias",
                                code: 4,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            newCardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formcard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormCard"], {
                handleClose: handleCloseNewCard,
                handleSave: (title, date, files, links)=>handleSaveNewCard(title, date, files, links)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 62,
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

//# sourceMappingURL=_87bf5f0a._.js.map