(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "986fb02f8eff7aed7fa1c0e75175fd0596ffd7cada998201647b9341b52b3ce9") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "986fb02f8eff7aed7fa1c0e75175fd0596ffd7cada998201647b9341b52b3ce9";
    }
    const { text, onClick, isLoading, className } = t0;
    const t1 = `w-full text-white bg-transparent border border-gray-300
		    focus:outline-none hover:bg-[#7D7F8A] focus:ring-1 focus:ring-gray-100
		    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer
		    ${className}
     `;
    let t2;
    if ($[1] !== isLoading || $[2] !== onClick || $[3] !== t1 || $[4] !== text) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t1,
            onClick: onClick,
            disabled: isLoading,
            children: text
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Button.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = isLoading;
        $[2] = onClick;
        $[3] = t1;
        $[4] = text;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/weatherHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>weatherHandler
]);
async function weatherHandler(user) {
    const res = await fetch(`/api/weather?lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}`);
    const weather = await res.json();
    return weather;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/usersApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSavedUser",
    ()=>getSavedUser,
    "saveUser",
    ()=>saveUser
]);
async function saveUser(user) {
    try {
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!res.ok) {
            throw new Error('Failed to save user');
        }
        return await res.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}
async function getSavedUser() {
    try {
        const res = await fetch('http://localhost:3001/users', {
            method: 'GET'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        return res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/UserCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$weatherHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/weatherHandler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/context/WeatherContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/usersApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function UserCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "e34a520242c97214552f3e9e1545339f83ef591538cfc7c2ffcaa4bdc8f0a67a") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e34a520242c97214552f3e9e1545339f83ef591538cfc7c2ffcaa4bdc8f0a67a";
    }
    const { user, isSaveOptionAvailable } = t0;
    const { setIsModalWindowActive, setWeatherData, setLocation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherContext"])();
    let t1;
    if ($[1] !== setIsModalWindowActive || $[2] !== setLocation || $[3] !== setWeatherData || $[4] !== user) {
        t1 = ({
            "UserCard[handleWeatherClick]": async ()=>{
                const weather = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$weatherHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(user);
                setWeatherData(weather);
                setIsModalWindowActive(true);
                setLocation({
                    country: user.location.country,
                    city: user.location.city
                });
            }
        })["UserCard[handleWeatherClick]"];
        $[1] = setIsModalWindowActive;
        $[2] = setLocation;
        $[3] = setWeatherData;
        $[4] = user;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleWeatherClick = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            objectFit: "cover"
        };
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== user.picture.large) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-28 h-28 relative rounded-full bg-gray-200 overflow-hidden mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: user.picture.large,
                width: 112,
                height: 112,
                style: t2,
                alt: "avatar",
                loading: "eager"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UserCard.tsx",
                lineNumber: 62,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = user.picture.large;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = user.name.title + " " + user.name.first + " " + user.name.last;
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-white mb-4",
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-100",
            children: "Gender: "
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== user.gender) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-left flex-col",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-thin text-gray-200",
                    children: user.gender
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UserCard.tsx",
                    lineNumber: 86,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[12] = user.gender;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-100",
            children: "Location: "
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const t9 = user.location.street.name + " " + user.location.street.number;
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-left",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-thin text-gray-200",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UserCard.tsx",
                    lineNumber: 102,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-100",
            children: "Email: "
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== user.email) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-left",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-thin text-gray-200",
                    children: user.email
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UserCard.tsx",
                    lineNumber: 117,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[18] = user.email;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t5 || $[23] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-1 mb-4",
            children: [
                t5,
                t7,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t12;
        $[22] = t5;
        $[23] = t7;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== isSaveOptionAvailable || $[26] !== user) {
        t14 = isSaveOptionAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "save",
            onClick: {
                "UserCard[<Button>.onClick]": async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUser"])(user);
                    if (result) {
                        alert("User saved successfully!");
                    } else {
                        alert("Failed to save user");
                    }
                }
            }["UserCard[<Button>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 136,
            columnNumber: 36
        }, this);
        $[25] = isSaveOptionAvailable;
        $[26] = user;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== handleWeatherClick) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "weather",
            onClick: {
                "UserCard[<Button>.onClick]": ()=>handleWeatherClick()
            }["UserCard[<Button>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[28] = handleWeatherClick;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t14 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t13 || $[34] !== t16 || $[35] !== t3) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex flex-col items-center\n    backdrop-blur-sm rounded-xl shadow-md\n    border border-white/30 h-fit 2xl:w-full\n    hover:shadow-lg transition-shadow duration-300",
            children: [
                t3,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/UserCard.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t16;
        $[35] = t3;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    return t17;
}
_s(UserCard, "taJExGthmpDy5elbFHi0cRyGdXM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherContext"]
    ];
});
_c = UserCard;
var _c;
__turbopack_context__.k.register(_c, "UserCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/types/WeatherIcons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWeatherIcon",
    ()=>getWeatherIcon
]);
const weatherIcons = {
    0: 'sunny.svg',
    1: 'sunny-cloudy.svg',
    2: 'cloudy.svg',
    3: 'cloudy.svg',
    45: 'cloudy.svg',
    48: 'cloudy.svg',
    51: 'cloudy-rainy.svg',
    53: 'cloudy-rainy.svg',
    55: 'cloudy-rainy.svg',
    61: 'rain.svg',
    63: 'rain.svg',
    65: 'rain.svg',
    71: 'heavy-rain-storm.svg',
    73: 'heavy-rain-storm.svg',
    75: 'heavy-rain-storm.svg',
    95: 'thunder.svg',
    96: 'thunder.svg',
    99: 'thunder.svg'
};
function getWeatherIcon(code) {
    return weatherIcons[code] || 'sunny.svg';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Date.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function DateComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "288658a308629602d6bfbfcf6dd2e1d6998afba98bdf679fa35ff0fcf52f870f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288658a308629602d6bfbfcf6dd2e1d6998afba98bdf679fa35ff0fcf52f870f";
    }
    const { dayName, finalDate } = t0;
    let t1;
    if ($[1] !== dayName) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium block",
            children: dayName
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Date.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = dayName;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== finalDate) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-thin block",
            children: finalDate
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Date.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = finalDate;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white flex justify-between w-full text-lg sm:flex-col\n\t\t\tsm:w-auto items-start sm:text-2xl xl:text-4xl xl:leading-13\n\t\t",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Date.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = DateComponent;
var _c;
__turbopack_context__.k.register(_c, "DateComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/WeatherMetrics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeatherMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function WeatherMetrics(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "871bee839a50108fddcd294d7885063869d4149ed5ff87abc828cd0e86854806") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "871bee839a50108fddcd294d7885063869d4149ed5ff87abc828cd0e86854806";
    }
    const { weatherData } = t0;
    const t1 = weatherData?.currentTemperature || 0;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-thin text-8xl xl:text-9xl",
            children: [
                t1,
                "°C"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-4 h-4 relative xl:w-7 xl:h-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/arrow-top.svg",
                alt: "arrow-top",
                fill: true,
                style: {
                    objectFit: "contain"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
                lineNumber: 29,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = weatherData?.highestTemperature || 0;
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 text-xl items-center xl:text-4xl",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t4,
                        "°C"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
                    lineNumber: 39,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-4 h-4 relative xl:w-7 xl:h-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/arrow-bottom.svg",
                alt: "arrow-bottom",
                fill: true,
                style: {
                    objectFit: "contain"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
                lineNumber: 47,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = weatherData?.lowestTemperature || 0;
    let t8;
    if ($[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 text-xl items-center xl:text-4xl",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t7,
                        "°C"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
                    lineNumber: 57,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t5 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-5 xl:flex-col",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t2 || $[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white flex flex-col items-center w-[40%] gap-3\n\t\t\tmd:w-[50%] xl:flex-row xl:w-[45%] xl:justify-between\n\t\t",
            children: [
                t2,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherMetrics.tsx",
            lineNumber: 74,
            columnNumber: 11
        }, this);
        $[12] = t2;
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    return t10;
}
_c = WeatherMetrics;
var _c;
__turbopack_context__.k.register(_c, "WeatherMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/getDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDate",
    ()=>getDate
]);
function getDate() {
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', {
        weekday: 'long'
    });
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).replace(',', '');
    const finalDate = formattedDate.replace(' ', ',');
    return [
        dayName,
        finalDate
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/CurrentLocation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrentLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function CurrentLocation(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "44d3aaa9fab910afc89959ac2115efa11d443e22fdf6d6e4ce5640fbf9513434") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44d3aaa9fab910afc89959ac2115efa11d443e22fdf6d6e4ce5640fbf9513434";
    }
    const { location } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[14px] h-[14px] sm:w-[22px] sm:h-[22px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "images/location.svg",
                fill: true,
                alt: "location"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/CurrentLocation.tsx",
                lineNumber: 20,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/CurrentLocation.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== location.city || $[3] !== location.country) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#363636]/50 py-[9px] px-4 gap-2 rounded-2xl h-fit\n\t\t\tw-full flex items-center justify-center mb-4 sm:w-auto sm:flex-row\n\t\t",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xs sm:text-lg xl:text-3xl",
                    children: [
                        location.country,
                        ", ",
                        location.city
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/CurrentLocation.tsx",
                    lineNumber: 27,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/CurrentLocation.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = location.city;
        $[3] = location.country;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c = CurrentLocation;
var _c;
__turbopack_context__.k.register(_c, "CurrentLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/WeatherModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeatherModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/context/WeatherContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$types$2f$WeatherIcons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/types/WeatherIcons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Date$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Date.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$WeatherMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/WeatherMetrics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$getDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/getDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CurrentLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/CurrentLocation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function WeatherModal() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "8d9d428dfd70e33d7032b6f7374467260761b025b010b5fd69b0735c2c84996c") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d9d428dfd70e33d7032b6f7374467260761b025b010b5fd69b0735c2c84996c";
    }
    const { weatherData, location, isModalWindowActive, setIsModalWindowActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherContext"])();
    const weatherCode = Number(weatherData?.icon) || 0;
    let T0;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== isModalWindowActive || $[2] !== location || $[3] !== weatherCode) {
        t7 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const weatherName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$types$2f$WeatherIcons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeatherIcon"])(weatherCode);
            const weatherPath = `images/weather-icons/${weatherName}`;
            let t8;
            if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$getDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])();
                $[13] = t8;
            } else {
                t8 = $[13];
            }
            const [dayName, finalDate] = t8;
            if (!isModalWindowActive) {
                t7 = null;
                break bb0;
            }
            t5 = " mx-6 bg-[#1E1E1E]/20 rounded-xl px-2 py-8\n\t\t\t\tfixed backdrop-blur-sm w-[calc(100%-48px)]\n\t\t\t\tborder border-white/20 shadow-lg sm:px-6 md:h-[350px]\n\t\t\t\tmax-w-[780px] top-1/2 -translate-y-1/2\n\t\t\t\txl:w-[80%] xl:h-[500px] xl:flex xl:flex-col xl:justify-between\n\t\t\t\txl:max-w-[1050px] xl:pt-12\n\t\t\t";
            let t9;
            if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Date$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    finalDate: finalDate,
                    dayName: dayName
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/WeatherModal.tsx",
                    lineNumber: 53,
                    columnNumber: 14
                }, this);
                $[14] = t9;
            } else {
                t9 = $[14];
            }
            let t10;
            if ($[15] !== location) {
                t10 = location || {
                    country: "",
                    city: ""
                };
                $[15] = location;
                $[16] = t10;
            } else {
                t10 = $[16];
            }
            if ($[17] !== t10) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col-reverse justify-between items-center\n\t\t\t\tsm:flex-row\n\t\t\t",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CurrentLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            location: t10
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
                            lineNumber: 70,
                            columnNumber: 117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/WeatherModal.tsx",
                    lineNumber: 70,
                    columnNumber: 14
                }, this);
                $[17] = t10;
                $[18] = t6;
            } else {
                t6 = $[18];
            }
            t4 = "flex flex-col items-center justify-between\n\t\t\t\tmd:flex-row\n\t\t\t";
            t3 = "md:w-[50%] h-full flex items-center justify-center xl:w-[45%]";
            t2 = "w-[250px] h-[250px] xl:h-[350px] xl:w-full\n\t\t\t\t\t\trelative\n\t\t\t\t\t";
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            t0 = weatherPath;
            t1 = weatherName.split(".");
        }
        $[1] = isModalWindowActive;
        $[2] = location;
        $[3] = weatherCode;
        $[4] = T0;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        T0 = $[4];
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    if (t7 !== Symbol.for("react.early_return_sentinel")) {
        return t7;
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            objectFit: "contain"
        };
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== T0 || $[21] !== t0 || $[22] !== t1[0]) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            src: t0,
            alt: t1[0],
            fill: true,
            loading: "eager",
            style: t8
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[20] = T0;
        $[21] = t0;
        $[22] = t1[0];
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== t2 || $[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t9
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[24] = t2;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10 || $[28] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t10
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t3;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== weatherData) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$WeatherMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            weatherData: weatherData
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[30] = weatherData;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== t11 || $[33] !== t12 || $[34] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t12;
        $[34] = t4;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== setIsModalWindowActive) {
        t14 = ({
            "WeatherModal[<button>.onClick]": ()=>setIsModalWindowActive(false)
        })["WeatherModal[<button>.onClick]"];
        $[36] = setIsModalWindowActive;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/x.svg",
            fill: true,
            alt: "x"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute right-2 top-2 w-[14px] h-[14px] xl:w-[28px] xl:h-[28px]\n\t\t\t\t\txl:right-4 xl:top-4 cursor-pointer\n\t\t\t\t",
            onClick: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[39] = t14;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== t13 || $[42] !== t16 || $[43] !== t5 || $[44] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/WeatherModal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[41] = t13;
        $[42] = t16;
        $[43] = t5;
        $[44] = t6;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    return t17;
}
_s(WeatherModal, "CN4nNzjxkHymA1JKeqpjYfiuUb0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$WeatherContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherContext"]
    ];
});
_c = WeatherModal;
var _c;
__turbopack_context__.k.register(_c, "WeatherModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/store/useUserStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserStore",
    ()=>useUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        users: [],
        setUsers: (users)=>set({
                users
            }),
        addUser: (user)=>set((state)=>({
                    users: [
                        ...state.users,
                        user
                    ]
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/useLoadUsers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLoadUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/store/useUserStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/usersApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useLoadUsers() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "ba56b6141965bec1f3292cc5c4dfe18a22cc11f3f7710cf5d4342341a8f5946a") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba56b6141965bec1f3292cc5c4dfe18a22cc11f3f7710cf5d4342341a8f5946a";
    }
    const setUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])(_useLoadUsersUseUserStore);
    let t0;
    let t1;
    if ($[1] !== setUsers) {
        t0 = ({
            "useLoadUsers[useEffect()]": ()=>{
                const fetchUsers = async function fetchUsers() {
                    const users = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedUser"])();
                    setUsers(users);
                };
                fetchUsers();
            }
        })["useLoadUsers[useEffect()]"];
        t1 = [
            setUsers
        ];
        $[1] = setUsers;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
_s(useLoadUsers, "VH9C/SWs0jjASC+Jj22qgfsftF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
function _useLoadUsersUseUserStore(state) {
    return state.setUsers;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/saved/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SavedUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UserCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UserCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$WeatherModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/WeatherModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/store/useUserStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useLoadUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useLoadUsers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SavedUsers() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "04c1ce2e34a4539d1cd90c20eed7fe0f43f4fff2874d0a032beb0a7402a7cbb3") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04c1ce2e34a4539d1cd90c20eed7fe0f43f4fff2874d0a032beb0a7402a7cbb3";
    }
    const savedUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])(_SavedUsersUseUserStore);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useLoadUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    let t0;
    if ($[1] !== savedUsers) {
        t0 = savedUsers.map(_SavedUsersSavedUsersMap);
        $[1] = savedUsers;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3\n\t\t\t\txl:grid-cols-4 gap-4 mb-6 w-full",
            children: t0
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/saved/page.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$WeatherModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/frontend/src/app/saved/page.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 w-full flex flex-col items-center max-w-[1536px] mx-auto",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/saved/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(SavedUsers, "uWApZBWMNFRyovuKLpjVHKRTwm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useLoadUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SavedUsers;
function _SavedUsersSavedUsersMap(u) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UserCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        user: u,
        isSaveOptionAvailable: false
    }, u.login.uuid, false, {
        fileName: "[project]/frontend/src/app/saved/page.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
function _SavedUsersUseUserStore(state) {
    return state.users;
}
var _c;
__turbopack_context__.k.register(_c, "SavedUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getInitialState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
]);

//# sourceMappingURL=frontend_6b7a146c._.js.map