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
function CardDetalhado({ assuntoData, handleCloseDetails }) {
    function handleConclude() {
        // fazer algo: excluir ou add à pasta 'concluídos'
        handleCloseDetails();
    }
    function handleChange() {
    // fazer algo: atualizar campos
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: handleCloseDetails,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[350px] h-[400px] bg-white flex flex-col rounded-lg shadow-xl shadow-zinc-400",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-black h-[20px] w-full rounded-t-lg"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col p-4",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[70px] flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "w-full h-[40px] text-base flex items-center justify-center font-bold text-zinc-600",
                                    children: assuntoData.assunto
                                }, void 0, false, {
                                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "w-full h-[15px] text-base flex items-center justify-center font-bold text-zinc-500 mb-4",
                                    children: new Date(assuntoData.dataAgendada).toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[200px] flex flex-col bg-green-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 text-base font-bold text-zinc-600",
                                    children: "Fontes digitais"
                                }, void 0, false, {
                                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 bg-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[40px] bg-red-200 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                            title: "salvar",
                                            onClick: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            style: "bg-zinc-700 text-white font-bold hover:bg-zinc-600",
                                            title: "concluir",
                                            onClick: handleConclude
                                        }, void 0, false, {
                                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                            lineNumber: 36,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/carddetalhado.tsx",
        lineNumber: 21,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/data/assuntos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Card({ assuntoData }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updatedAssuntos, setUpdatedAssuntos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Assuntos"]);
    const [updatedTitle, setUpdateTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updatedDate, setUpdatedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [updatedLink, setUpdatedLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function handleShowDetails() {
        setShow(!show);
    }
    function handleCloseDetails() {
        setShow(false);
    }
    // funções atualizar card
    function handlePickDate(newDate) {
        setUpdatedDate(newDate);
    }
    function isFieldsFilled() {
        if (updatedTitle != '' && updatedLink != '') {
            return true;
        } else {
            return false;
        }
    }
    function isFieldsEmpty() {
        if (updatedTitle == '' && updatedLink != '') {
            alert('titulo obrigatório');
        } else if (updatedLink == '' && updatedTitle != '') {
            alert('link obrigatório');
        } else if (updatedTitle == '' && updatedLink == '') {
            alert('título e link obrigatórios');
        }
    }
    function handleUpdateCard(title, date, link) {
        setUpdatedAssuntos((current)=>[
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
        className: "h-[200px] w-[300px] rounded-lg flex-shrink-0 bg-white flex shadow-md shadow-zinc-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-white w-[20px] h-full rounded-l-lg"
            }, void 0, false, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded-r-lg flex flex-col p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "w-full h-[25px] flex items-center text-sm font-bold text-zinc-500",
                        children: new Date(assuntoData.dataAgendada).toLocaleDateString()
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full h-[80px] flex items-center text-sm font-bold text-zinc-600",
                        children: assuntoData.assunto
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[60px] flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white transition-colors font-bold",
                                title: "ver tudo",
                                onClick: handleShowDetails
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/components/card.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                style: "bg-zinc-700 font-bold hover:bg-zinc-600 transition-colors",
                                title: "concluir"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/components/card.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDetalhado"], {
                        assuntoData: assuntoData,
                        handleCloseDetails: handleCloseDetails
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/components/card.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(Card, "+eg4lDzrx3eXPX29qQjDHg/4XyA=");
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
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
;
var _s = __turbopack_context__.k.signature();
;
;
function CardArea({ title, code, assuntos }) {
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
            setToday([]); // para nao ter objetos duplicados
            setTomorrow([]);
            setAfterTomorrow([]);
            setNextDays([]);
            assuntos.forEach({
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
    }["CardArea.useEffect"], [
        assuntos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[200px] w-[100%] mx-auto flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[40px] flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl px-4 font-bold text-zinc-800",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/cardarea.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-estudos/components/cardarea.tsx",
                lineNumber: 76,
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
                            lineNumber: 82,
                            columnNumber: 25
                        }, this)) : code === 2 ? tomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 84,
                            columnNumber: 25
                        }, this)) : code === 3 ? afterTomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 86,
                            columnNumber: 24
                        }, this)) : nextDays.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            assuntoData: card
                        }, card.id, false, {
                            fileName: "[project]/app-estudos/components/cardarea.tsx",
                            lineNumber: 88,
                            columnNumber: 24
                        }, this)),
                    code === 1 && today.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar hoje :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    code === 2 && tomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this),
                    code === 3 && afterTomorrow.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar depois de amanhã :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this),
                    code === 4 && nextDays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black/40 text-md italic",
                        children: "Nada para estudar nos próximos dias :D"
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/components/cardarea.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/components/cardarea.tsx",
        lineNumber: 75,
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
        className: "w-full h-[40px] border-1 border-zinc-700 rounded-md mb-3 text-zinc-600 text-md",
        dateFormat: `dd/MM/yyyy`,
        minDate: new Date()
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/datepicker.tsx",
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
function NovoCard({ handleCloseNewCard, handleSaveNewCard }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function handlePickDate(newDate) {
        setDate(newDate);
    }
    function isFieldsFilled() {
        if (title != '' && link != '') {
            return true;
        } else {
            return false;
        }
    }
    function isFieldsEmpty() {
        if (title == '' && link != '') {
            alert('titulo obrigatório');
        } else if (link == '' && title != '') {
            alert('link obrigatório');
        } else if (title == '' && link == '') {
            alert('título e link obrigatórios');
        }
    }
    function handleClick() {
        if (isFieldsFilled()) {
            handleSaveNewCard(title, date, link); // enviar esses parametros para o componente pai
            handleCloseNewCard();
        } else {
            isFieldsEmpty();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/30 fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm",
        onClick: handleCloseNewCard,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[350px] h-[500px] bg-white flex flex-col p-4 rounded-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "w-full h-[35px] text-base flex items-center justify-center font-bold text-center uppercase text-zinc-900",
                    children: "novo assunto"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase text-zinc-600 font-bold",
                    children: "título"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "h-[40px] w-full border-1 border-zinc-600 rounded-md p-2 text-white text-sm mb-3 placeholder-italic text-zinc-600",
                    value: title,
                    onChange: (text)=>setTitle(text.target.value)
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase text-zinc-600 font-bold",
                    children: "data agendada"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$datepicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePickerComponent"], {
                    onPick: handlePickDate
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[100px] border border-dashed rounded-md border-zinc-700 mb-3"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-1 text-sm uppercase text-zinc-600 font-bold",
                    children: "link (Site ou YouTube)"
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 66,
                    columnNumber: 18
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "h-[40px] w-full border border-zinc-600 rounded-md p-2 text-zinc-600 text-sm mb-3",
                    value: link,
                    onChange: (text)=>setLink(text.target.value)
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    style: "bg-zinc-900 m-auto h-[40px] w-[150px] font-bold",
                    title: "concluir",
                    onClick: handleClick
                }, void 0, false, {
                    fileName: "[project]/app-estudos/components/novocard.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-estudos/components/novocard.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/novocard.tsx",
        lineNumber: 48,
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
                className: "h-screen w-[300px] bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            "                                               ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[100%] flex-1 bg-gray-200 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[10%] w-[100%] flex flex-row items-center px-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-zinc-800",
                                children: "Estudos"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-[110px] h-[40px] bg-zinc-800 rounded-md font-bold p-1 text-sm text-white/80 hover:bg-zinc-700 transition-colors cursor-pointer",
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
                                code: 1,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Amanhã",
                                code: 2,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Depois de amanhã",
                                code: 3,
                                assuntos: assuntos
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Próximos dias",
                                code: 4,
                                assuntos: assuntos
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
                handleCloseNewCard: handleCloseNewCard,
                handleSaveNewCard: (title, date, link)=>handleSaveNewCard(title, date, link)
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

//# sourceMappingURL=app-estudos_66feddfa._.js.map