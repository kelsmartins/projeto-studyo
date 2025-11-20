module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app-estudos/components/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Card({ assuntoData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[150px] w-[300px] rounded-lg flex-shrink-0 bg-zinc-800 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-red-500 w-[20px] h-full rounded-l-lg"
            }, void 0, false, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded-r-lg flex flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: new Date(assuntoData.dataAgendada).toLocaleDateString()
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: assuntoData.assunto
                    }, void 0, false, {
                        fileName: "[project]/app-estudos/components/card.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/components/card.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/components/card.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/app-estudos/data/assuntos.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        dataAgendada: new Date(2025, 10, 5),
        assunto: 'Revisão de Logaritmos',
        contexto: 'Matemática',
        linkRepositorio: 'https://youtu.be/logaritmos-revisao'
    },
    {
        id: 2,
        // Corrigido para 05 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 10, 5),
        assunto: 'A Expansão Marítima Europeia',
        contexto: 'História',
        linkRepositorio: 'https://artigo.com/expansao-maritima'
    },
    {
        id: 3,
        // Corrigido para 06 de NOVEMBRO (mês 10)
        dataAgendada: new Date(2025, 10, 6),
        assunto: 'Ciclo de Krebs e Fosforilação',
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
        dataAgendada: new Date(2025, 10, 9),
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
}),
"[project]/app-estudos/components/cardarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardArea",
    ()=>CardArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/data/assuntos.ts [app-ssr] (ecmascript)");
;
;
;
;
function CardArea({ title, code }) {
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tomorrow, setTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [afterTomorrow, setAfterTomorrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nextDays, setNextDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);
    const depoisAmanha = new Date();
    depoisAmanha.setDate(hoje.getDate() + 2);
    const proximosDias = new Date();
    proximosDias.setDate(hoje.getDate() + 3);
    proximosDias.setHours(0, 0, 0, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$data$2f$assuntos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Assuntos"].forEach((assunto)=>{
            const dataAssunto = assunto.dataAgendada;
            if (dataAssunto.getFullYear() === hoje.getFullYear() && dataAssunto.getMonth() === hoje.getMonth() && dataAssunto.getDate() === hoje.getDate()) {
                setToday((today)=>[
                        ...today,
                        assunto
                    ]);
            } else if (dataAssunto.getFullYear() === amanha.getFullYear() && dataAssunto.getMonth() === amanha.getMonth() && dataAssunto.getDate() === amanha.getDate()) {
                setTomorrow((tomorrow)=>[
                        ...tomorrow,
                        assunto
                    ]);
            } else if (dataAssunto.getFullYear() === depoisAmanha.getFullYear() && dataAssunto.getMonth() === depoisAmanha.getMonth() && dataAssunto.getDate() === depoisAmanha.getDate()) {
                setAfterTomorrow((afterTomorrow)=>[
                        ...afterTomorrow,
                        assunto
                    ]);
            } else {
                const dataAssuntoNormalizada = new Date(dataAssunto);
                dataAssuntoNormalizada.setHours(0, 0, 0, 0);
                if (dataAssuntoNormalizada.getTime() >= proximosDias.getTime()) {
                    setNextDays((nextDays)=>[
                            ...nextDays,
                            assunto
                        ]);
                }
            }
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[190px] w-[100%] mx-auto flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[40px] flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl px-4",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[170px] p-4 gap-x-4 flex flex-row justify-start items-center overflow-x-auto flex-nowrap no-scrollbar",
                children: code === 1 ? today.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        assuntoData: card
                    }, card.id, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 77,
                        columnNumber: 25
                    }, this)) : code === 2 ? tomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        assuntoData: card
                    }, card.id, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 79,
                        columnNumber: 25
                    }, this)) : code === 3 ? afterTomorrow.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        assuntoData: card
                    }, card.id, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 81,
                        columnNumber: 24
                    }, this)) : nextDays.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        assuntoData: card
                    }, card.id, false, {
                        fileName: "[project]/app-estudos/components/cardarea.tsx",
                        lineNumber: 83,
                        columnNumber: 24
                    }, this))
            }, void 0, false, {
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
}),
"[project]/app-estudos/components/carddetalhado.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardDetalhado",
    ()=>CardDetalhado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CardDetalhado() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black/60 fixed flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[350px] h-[400px] bg-zinc-800 flex flex-col p-4 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[70px] bg-red-400 flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[40px] text-base flex items-center justify-center font-bold",
                            children: "Matemática: funções aaaaa aaaa aaaaaa"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 6,
                            columnNumber: 21
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "w-full h-[15px] text-sm flex items-center justify-center font-bold text-white/60 mb-4",
                            children: "25/10/2025"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 7,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[200px] bg-green-200 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 bg-yellow-600",
                            children: "Fontes digitais"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-cyan-300"
                        }, void 0, false, {
                            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                            lineNumber: 11,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app-estudos/components/carddetalhado.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app-estudos/components/carddetalhado.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app-estudos/components/carddetalhado.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}),
"[project]/app-estudos/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/cardarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-estudos/components/carddetalhado.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen flex overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[300px] bg-zinc-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$carddetalhado$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDetalhado"], {}, void 0, false, {
                    fileName: "[project]/app-estudos/app/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            "                                               ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-[100%] flex-1 bg-zinc-900 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[10%] w-[100%] flex flex-row items-center px-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl",
                                children: "Estudos"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-[50px] h-[50px] bg-red-200",
                                children: "oi"
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " w-full h-[90%] overflow-y-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Hoje",
                                code: 1
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Amanhã",
                                code: 2
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Depois de amanhã",
                                code: 3
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$estudos$2f$components$2f$cardarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardArea"], {
                                title: "Próximos dias",
                                code: 4
                            }, void 0, false, {
                                fileName: "[project]/app-estudos/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app-estudos/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app-estudos/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app-estudos/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/app-estudos/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__153e6a78._.js.map