(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app-estudos/components/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ style, title, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `w-[100px] h-[30px] ${style} rounded-md cursor-pointer text-sm`,
        onClick: onClick,
        children: title
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/button.tsx",
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
"[project]/app-estudos/components/carddetalhado.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardDetalhado",
    ()=>CardDetalhado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/button.tsx [app-client] (ecmascript)");
;
;
function CardDetalhado({ assuntoData, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[350px] h-[400px] bg-zinc-800 flex flex-col p-4 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[70px] flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[40px] text-base flex items-center justify-center font-bold text-center",
                            children: assuntoData.assunto
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[15px] text-base flex items-center justify-center font-bold text-white/60 mb-4",
                            children: new Date(assuntoData.dataAgendada).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[200px] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 text-base font-bold",
                            children: "Fontes digitais"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-red-500"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            style: "w-[100px] h-[30px] bg-red-400 mt-4",
                            title: "concluir",
                            onClick: onClose
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/carddetalhado.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = CardDetalhado;
var _c;
__turbopack_context__.k.register(_c, "CardDetalhado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-estudos/components/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/carddetalhado.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Card({ assuntoData }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleShowDetails() {
        setShow(!show);
    }
    function handleCloseDetails() {
        setShow(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-zinc-800 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-red-500 w-[20px] h-full rounded-l-lg"
            }, void 0, false, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded-r-lg flex flex-col p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "w-full h-[25px] flex items-center text-sm font-bold text-white/50",
                        children: new Date(assuntoData.dataAgendada).toLocaleDateString()
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full h-[80px] flex items-center text-sm font-bold",
                        children: assuntoData.assunto
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[60px] flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "w-[100px] h-[30px] text-zinc-500 border border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors font-bold",
                                title: "ver tudo",
                                onClick: handleShowDetails
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/components/card.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "w-[100px] h-[30px] bg-zinc-700 font-bold",
                                title: "concluir"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/components/card.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDetalhado"], {
                        assuntoData: assuntoData,
                        onClose: handleCloseDetails
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/components/card.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(Card, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-estudos/data/assuntos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Assuntos",
    ()=>Assuntos
]);
const Assuntos = [
    {
        id: 1,
        // Original: new Date(2025, 11, 5) -> 05 de DEZEMBRO
        // Corrigido para 05 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 11, 5),
        assunto: 'Revisão de Logaritmos',
        contexto: 'Matemática',
        linkRepositorio: 'https://youtu.be/logaritmos-revisao'
    },
    {
        id: 2,
        // Corrigido para 05 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 11, 5),
        assunto: 'A Expansão Marítima Europeia',
        contexto: 'História',
        linkRepositorio: 'https://artigo.com/expansao-maritima'
    },
    {
        id: 3,
        // Corrigido para 06 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 11, 6),
        assunto: 'Ciclo de Krebs e Fosforilação Sei lá blá blá blá ai ai ai',
        contexto: 'Biologia',
        linkRepositorio: 'https://pdf-resumo.org/ciclo-krebs.pdf',
        anotacoesRapidas: 'Revisar a produção de ATP.'
    },
    {
        id: 4,
        // Corrigido para 07 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 10, 7),
        assunto: 'Colocação Pronominal',
        contexto: 'Português',
        linkRepositorio: 'https://youtu.be/colocacao-pronominal'
    },
    {
        id: 5,
        // Corrigido para 08 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 10, 8),
        assunto: 'Balanceamento de Equações Redox',
        contexto: 'Química',
        linkRepositorio: 'https://simulador.quimica.app/redox'
    },
    {
        id: 6,
        // Corrigido para 09 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 11, 9),
        assunto: 'Formação e Estrutura do Solo',
        contexto: 'Geografia',
        linkRepositorio: 'https://manual.terra.br/solos-geografia'
    },
    {
        id: 7,
        // Corrigido para 20 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 10, 20),
        assunto: 'Argumentação e Coerência',
        contexto: 'Redação',
        linkRepositorio: 'https://e-book.redacao.net/coerencia.pdf',
        anotacoesRapidas: 'Focar em operadores argumentativos.'
    },
    {
        id: 8,
        // Original: new Date(2025, 12, 1) -> 01 de JANEIRO de 2026
        // Corrigido para 01 de DEZEMBRO (mês 11)
        dataAgendada: new Date(2025, 11, 1),
        assunto: 'Leis de Newton e Dinâmica',
        contexto: 'Física',
        linkRepositorio: 'https://youtu.be/leis-de-newton-completo'
    },
    {
        id: 9,
        // Corrigido para 02 de DEZEMBRO (mês 11)
        dataAgendada: new Date(2025, 11, 2),
        assunto: 'Phrasal Verbs Comuns',
        contexto: 'Inglês',
        linkRepositorio: 'https://quizlet.com/phrasal-verbs-lista'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-estudos/components/cardarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardArea",
    ()=>CardArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/data/assuntos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CardArea({ title, code }) {
    _s();
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tomorrow, setTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [afterTomorrow, setAfterTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nextDays, setNextDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);
    const depoisAmanha = new Date();
    depoisAmanha.setDate(hoje.getDate() + 2);
    const proximosDias = new Date();
    proximosDias.setDate(hoje.getDate() + 3);
    proximosDias.setHours(0, 0, 0, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardArea.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Assuntos"].forEach({
                "CardArea.useEffect": (assunto)=>{
                    const dataAssunto = assunto.dataAgendada;
                    if (dataAssunto.getFullYear() === hoje.getFullYear() && dataAssunto.getMonth() === hoje.getMonth() && dataAssunto.getDate() === hoje.getDate()) {
                        setToday({
                            "CardArea.useEffect": (today)=>[
                                    ...today,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else if (dataAssunto.getFullYear() === amanha.getFullYear() && dataAssunto.getMonth() === amanha.getMonth() && dataAssunto.getDate() === amanha.getDate()) {
                        setTomorrow({
                            "CardArea.useEffect": (tomorrow)=>[
                                    ...tomorrow,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else if (dataAssunto.getFullYear() === depoisAmanha.getFullYear() && dataAssunto.getMonth() === depoisAmanha.getMonth() && dataAssunto.getDate() === depoisAmanha.getDate()) {
                        setAfterTomorrow({
                            "CardArea.useEffect": (afterTomorrow)=>[
                                    ...afterTomorrow,
                                    assunto
                                ]
                        }["CardArea.useEffect"]);
                    } else {
                        const dataAssuntoNormalizada = new Date(dataAssunto);
                        dataAssuntoNormalizada.setHours(0, 0, 0, 0);
                        if (dataAssuntoNormalizada.getTime() >= proximosDias.getTime()) {
                            setNextDays({
                                "CardArea.useEffect": (nextDays)=>[
                                        ...nextDays,
                                        assunto
                                    ]
                            }["CardArea.useEffect"]);
                        }
                    }
                }
            }["CardArea.useEffect"]);
        }
    }["CardArea.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[200px] w-[100%] mx-auto flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[40px] flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl px-4 font-bold",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/cardarea.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-estudos/components/cardarea.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            "                           ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar",
                children: [
                    code === 1 ? today.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)) : code === 2 ? tomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this)) : code === 3 ? afterTomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 81,
                            columnNumber: 24
                        }, this)) : nextDays.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 83,
                            columnNumber: 24
                        }, this)),
                    code === 1 && today.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/40 text-lg italic",
                        children: "Nada para estudar hoje :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    code === 2 && tomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/40 italic",
                        children: "Nada para estudar amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this),
                    code === 3 && afterTomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/40 italic",
                        children: "Nada para estudar depois de amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    code === 4 && nextDays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/40 italic",
                        children: "Nada para estudar nos próximos dias :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/components/cardarea.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/components/cardarea.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(CardArea, "bmnzfmHQKGnc7E1X0LokHhTc33o=");
_c = CardArea;
var _c;
__turbopack_context__.k.register(_c, "CardArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-estudos/components/datepicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatePickerComponent",
    ()=>DatePickerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
// import { format } from 'date-fns'
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
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    function handleSetDate(newDate) {
        if (newDate) {
            setDate(newDate);
            onPick(newDate); // pegou a data da state e levou para a comp-pai(novocard)
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        selected: date,
        onChange: handleSetDate,
        locale: `pt-BR`,
        className: "w-full h-[40px] border-1 border-zinc-700 rounded-md mb-3",
        dateFormat: `dd/MM/yyyy`
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/datepicker.tsx",
        lineNumber: 26,
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
"[project]/app-estudos/components/novocard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NovoCard",
    ()=>NovoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/datepicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function NovoCard({ onClick, onConcluir }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function handlePickDate(date) {
        setDate(date);
    }
    function handleOnConcluir() {
        onConcluir(title, date, link);
        onClick();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[350px] h-[500px] bg-zinc-800 flex flex-col p-4 rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase",
                    children: "novo assunto"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase",
                    children: "título"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "h-[40px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3 placeholder-italic",
                    value: title,
                    onChange: (text)=>setTitle(text.target.value)
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase",
                    children: "data agendada"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePickerComponent"], {
                    onPick: ()=>handlePickDate(date)
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[100px] border-2 border-dashed rounded-md border-zinc-700 mb-3"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase",
                    children: "link (Site ou YouTube)"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 44,
                    columnNumber: 18
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "h-[40px] w-full border-1 border-zinc-700 rounded-md p-2 text-white text-sm mb-3",
                    value: link,
                    onChange: (text)=>setLink(text.target.value)
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    style: "bg-red-400 m-auto h-[40px] w-[150px]",
                    title: "concluir",
                    onClick: handleOnConcluir
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-estudos/components/novocard.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/novocard.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
} /*  
    STOPPROPAGATION É TIPO:

        "Ei, o clique aconteceu aqui neste card. Execute esta função (stopPropagation) e pare aqui.
        Não 'borbulhe' este evento de clique para nenhum componente pai."
*/ 
_s(NovoCard, "kt2VvwHzkDgWaTRWEdHL+6rqGEU=");
_c = NovoCard;
var _c;
__turbopack_context__.k.register(_c, "NovoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app-estudos/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/cardarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$novocard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/novocard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/data/assuntos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const [newCardVisible, setNewCardVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assuntos, setAssuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Assuntos"]);
    function handleOpenNewCard() {
        setNewCardVisible(true);
    }
    function handleCloseNewCard() {
        setNewCardVisible(false);
    }
    function handleSaveNewCard(title, date, link) {
        setAssuntos((current)=>[
                ...current,
                {
                    id: current.length + 1,
                    assunto: title,
                    dataAgendada: date,
                    linkRepositorio: link
                }
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen flex overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[300px] bg-zinc-800"
            }, void 0, false, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            "                                               ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[100%] flex-1 bg-zinc-900 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[10%] w-[100%] flex flex-row items-center px-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold",
                                children: "Estudos"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-[110px] h-[40px] bg-zinc-700 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors",
                                onClick: handleOpenNewCard,
                                children: "novo assunto"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " w-full h-[90%] overflow-y-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Hoje",
                                code: 1
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Amanhã",
                                code: 2
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Depois de amanhã",
                                code: 3
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Próximos dias",
                                code: 4
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            newCardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$novocard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NovoCard"], {
                onClick: handleCloseNewCard,
                onConcluir: (title, date, link)=>handleSaveNewCard(title, date, link)
            }, void 0, false, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/app/page.tsx",
        lineNumber: 36,
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

//# sourceMappingURL=app-estudos_44bd72a0._.js.map