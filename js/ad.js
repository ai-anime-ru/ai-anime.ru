"use strict";
var _createClass = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function() {
    var e, t, n, i;

    function C() {
        return {
            hostname: window.location.hostname,
            protocol: window.location.protocol,
            port: "80" === window.location.port ? "" : ":" + window.location.port
        }
    }

    function T() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            n = JSON.parse(urlParams);
        $.isEmptyObject(e) || $.each(e, function(e, t) {
            n[e] = t
        });
        var i = [];
        return $.each(n, function(e, t) {
            i.push(e + "=" + t)
        }), i.join("&")
    }

    function E(e) {
        var t = e.attr("data-media-id"),
            n = e.attr("data-media-hash"),
            i = e.attr("data-media-type"),
            o = C();
        return o.protocol + "//" + o.hostname + o.port + "/" + i + "/" + t + "/" + n + "/720p?" + T()
    }
    e = "undefined" != typeof window ? window : this, t = function(k, e) {
            var d = [],
                h = k.document,
                c = d.slice,
                v = d.concat,
                s = d.push,
                o = d.indexOf,
                n = {},
                t = n.toString,
                m = n.hasOwnProperty,
                g = {},
                C = function e(t, n) {
                    return new e.fn.init(t, n)
                },
                i = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                r = /^-ms-/,
                a = /-([\da-z])/gi,
                l = function(e, t) {
                    return t.toUpperCase()
                };

            function u(e) {
                var t = !!e && "length" in e && e.length,
                    n = C.type(e);
                return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "1.12.4",
                constructor: C,
                selector: "",
                length: 0,
                toArray: function() {
                    return c.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(n) {
                    return this.pushStack(C.map(this, function(e, t) {
                        return n.call(e, t, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(c.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: s,
                sort: d.sort,
                splice: d.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, n, i, o, r, a = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == (void 0 === a ? "undefined" : _typeof(a)) || C.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                    if (null != (o = arguments[s]))
                        for (i in o) e = a[i], a !== (n = o[i]) && (u && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? (r = t ? (t = !1, e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {}, a[i] = C.extend(u, r, n)) : void 0 !== n && (a[i] = n));
                return a
            }, C.extend({
                expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === C.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === C.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (!g.ownFirst)
                        for (t in e) return m.call(e, t);
                    for (t in e);
                    return void 0 === t || m.call(e, t)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? n[t.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
                },
                globalEval: function(e) {
                    e && C.trim(e) && (k.execScript || function(e) {
                        k.eval.call(k, e)
                    })(e)
                },
                camelCase: function(e) {
                    return e.replace(r, "ms-").replace(a, l)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (u(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(i, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (u(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (o) return o.call(t, e, n);
                        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
                    if (n != n)
                        for (; void 0 !== t[i];) e[o++] = t[i++];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var i, o, r = 0,
                        a = [];
                    if (u(e))
                        for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
                    else
                        for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                    return v.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, o;
                    return "string" == typeof t && (o = e[t], t = e, e = o), C.isFunction(e) ? (n = c.call(arguments, 2), (i = function() {
                        return e.apply(t || this, n.concat(c.call(arguments)))
                    }).guid = e.guid = e.guid || C.guid++, i) : void 0
                },
                now: function() {
                    return +new Date
                },
                support: g
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = d[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
            var f = function(n) {
                var e, h, w, r, o, v, d, m, x, l, u, _, k, a, C, g, s, c, y, T = "sizzle" + 1 * new Date,
                    b = n.document,
                    E = 0,
                    i = 0,
                    f = oe(),
                    p = oe(),
                    S = oe(),
                    N = function(e, t) {
                        return e === t && (u = !0), 0
                    },
                    $ = {}.hasOwnProperty,
                    t = [],
                    A = t.pop,
                    I = t.push,
                    L = t.push,
                    j = t.slice,
                    D = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    P = "[\\x20\\t\\r\\n\\f]",
                    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    H = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
                    R = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    q = new RegExp(P + "+", "g"),
                    B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                    F = new RegExp("^" + P + "*," + P + "*"),
                    W = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                    z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                    U = new RegExp(R),
                    V = new RegExp("^" + M + "$"),
                    X = {
                        ID: new RegExp("^#(" + M + ")"),
                        CLASS: new RegExp("^\\.(" + M + ")"),
                        TAG: new RegExp("^(" + M + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + R),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + O + ")$", "i"),
                        needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    G = /[+~]/,
                    Z = /'|\\/g,
                    ee = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                    te = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    ne = function() {
                        _()
                    };
                try {
                    L.apply(t = j.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
                } catch (e) {
                    L = {
                        apply: t.length ? function(e, t) {
                            I.apply(e, j.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ie(e, t, n, i) {
                    var o, r, a, s, l, u, c, d, f = t && t.ownerDocument,
                        p = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                    if (!i && ((t ? t.ownerDocument || t : b) !== k && _(t), t = t || k, C)) {
                        if (11 !== p && (u = Y.exec(e)))
                            if (o = u[1]) {
                                if (9 === p) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (f && (a = f.getElementById(o)) && y(t, a) && a.id === o) return n.push(a), n
                            } else {
                                if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = u[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(o)), n
                            } if (h.qsa && !S[e + " "] && (!g || !g.test(e))) {
                            if (1 !== p) f = t, d = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(Z, "\\$&") : t.setAttribute("id", s = T), r = (c = v(e)).length, l = V.test(s) ? "#" + s : "[id='" + s + "']"; r--;) c[r] = l + " " + he(c[r]);
                                d = c.join(","), f = G.test(e) && fe(t.parentNode) || t
                            }
                            if (d) try {
                                return L.apply(n, f.querySelectorAll(d)), n
                            } catch (e) {} finally {
                                s === T && t.removeAttribute("id")
                            }
                        }
                    }
                    return m(e.replace(B, "$1"), t, n, i)
                }

                function oe() {
                    var i = [];
                    return function e(t, n) {
                        return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
                    }
                }

                function re(e) {
                    return e[T] = !0, e
                }

                function ae(e) {
                    var t = k.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function se(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
                }

                function le(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ue(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ce(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }

                function de(a) {
                    return re(function(r) {
                        return r = +r, re(function(e, t) {
                            for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function fe(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in h = ie.support = {}, o = ie.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, _ = ie.setDocument = function(e) {
                        var t, n, i = e ? e.ownerDocument || e : b;
                        return i !== k && 9 === i.nodeType && i.documentElement && (a = (k = i).documentElement, C = !o(k), (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), h.attributes = ae(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), h.getElementsByTagName = ae(function(e) {
                            return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
                        }), h.getElementsByClassName = K.test(k.getElementsByClassName), h.getById = ae(function(e) {
                            return a.appendChild(e).id = T, !k.getElementsByName || !k.getElementsByName(T).length
                        }), h.getById ? (w.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && C) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }, w.filter.ID = function(e) {
                            var t = e.replace(ee, te);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete w.find.ID, w.filter.ID = function(e) {
                            var n = e.replace(ee, te);
                            return function(e) {
                                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }), w.find.TAG = h.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" !== e) return r;
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, w.find.CLASS = h.getElementsByClassName && function(e, t) {
                            return void 0 !== t.getElementsByClassName && C ? t.getElementsByClassName(e) : void 0
                        }, s = [], g = [], (h.qsa = K.test(k.querySelectorAll)) && (ae(function(e) {
                            a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
                        }), ae(function(e) {
                            var t = k.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (h.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function(e) {
                            h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", R)
                        }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, N = t ? function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === b && y(b, e) ? -1 : t === k || t.ownerDocument === b && y(b, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !r) return e === k ? -1 : t === k ? 1 : o ? -1 : r ? 1 : l ? D(l, e) - D(l, t) : 0;
                            if (o === r) return le(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[i] === s[i];) i++;
                            return i ? le(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0
                        }), k
                    }, ie.matches = function(e, t) {
                        return ie(e, null, null, t)
                    }, ie.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== k && _(e), t = t.replace(z, "='$1']"), h.matchesSelector && C && !S[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
                            var n = c.call(e, t);
                            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {}
                        return 0 < ie(t, k, null, [e]).length
                    }, ie.contains = function(e, t) {
                        return (e.ownerDocument || e) !== k && _(e), y(e, t)
                    }, ie.attr = function(e, t) {
                        (e.ownerDocument || e) !== k && _(e);
                        var n = w.attrHandle[t.toLowerCase()],
                            i = n && $.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                        return void 0 !== i ? i : h.attributes || !C ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ie.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ie.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            o = 0;
                        if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(N), u) {
                            for (; t = e[o++];) t === e[o] && (i = n.push(o));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return l = null, e
                    }, r = ie.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (w = ie.selectors = {
                        cacheLength: 50,
                        createPseudo: re,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = v(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ee, te).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = f[e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && f(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(n, i, o) {
                                return function(e) {
                                    var t = ie.attr(e, n);
                                    return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(q, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                                }
                            },
                            CHILD: function(h, e, t, v, m) {
                                var g = "nth" !== h.slice(0, 3),
                                    y = "last" !== h.slice(-4),
                                    b = "of-type" === e;
                                return 1 === v && 0 === m ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, n) {
                                    var i, o, r, a, s, l, u = g !== y ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        d = b && e.nodeName.toLowerCase(),
                                        f = !n && !b,
                                        p = !1;
                                    if (c) {
                                        if (g) {
                                            for (; u;) {
                                                for (a = e; a = a[u];)
                                                    if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                                l = u = "only" === h && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? c.firstChild : c.lastChild], y && f) {
                                            for (p = (s = (i = (o = (r = (a = c)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (p = s = 0) || l.pop();)
                                                if (1 === a.nodeType && ++p && a === e) {
                                                    o[h] = [E, s, p];
                                                    break
                                                }
                                        } else if (f && (p = s = (i = (o = (r = (a = e)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && i[1]), !1 === p)
                                            for (;
                                                (a = ++s && a && a[u] || (p = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((o = (r = a[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] = [E, p]), a !== e)););
                                        return (p -= m) === v || p % v == 0 && 0 <= p / v
                                    }
                                }
                            },
                            PSEUDO: function(e, r) {
                                var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                return a[T] ? a(r) : 1 < a.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                                    for (var n, i = a(e, r), o = i.length; o--;) e[n = D(e, i[o])] = !(t[n] = i[o])
                                }) : function(e) {
                                    return a(e, 0, t)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: re(function(e) {
                                var i = [],
                                    o = [],
                                    s = d(e.replace(B, "$1"));
                                return s[T] ? re(function(e, t, n, i) {
                                    for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                                }) : function(e, t, n) {
                                    return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop()
                                }
                            }),
                            has: re(function(t) {
                                return function(e) {
                                    return 0 < ie(t, e).length
                                }
                            }),
                            contains: re(function(t) {
                                return t = t.replace(ee, te),
                                    function(e) {
                                        return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                                    }
                            }),
                            lang: re(function(n) {
                                return V.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === a
                            },
                            focus: function(e) {
                                return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return !1 === e.disabled
                            },
                            disabled: function(e) {
                                return !0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !w.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: de(function() {
                                return [0]
                            }),
                            last: de(function(e, t) {
                                return [t - 1]
                            }),
                            eq: de(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: de(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: de(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: de(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                                return e
                            }),
                            gt: de(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = w.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[e] = ue(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[e] = ce(e);

                function pe() {}

                function he(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ve(s, e, t) {
                    var l = e.dir,
                        u = t && "parentNode" === l,
                        c = i++;
                    return e.first ? function(e, t, n) {
                        for (; e = e[l];)
                            if (1 === e.nodeType || u) return s(e, t, n)
                    } : function(e, t, n) {
                        var i, o, r, a = [E, c];
                        if (n) {
                            for (; e = e[l];)
                                if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                        } else
                            for (; e = e[l];)
                                if (1 === e.nodeType || u) {
                                    if ((i = (o = (r = e[T] || (e[T] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && i[0] === E && i[1] === c) return a[2] = i[2];
                                    if ((o[l] = a)[2] = s(e, t, n)) return !0
                                }
                    }
                }

                function me(o) {
                    return 1 < o.length ? function(e, t, n) {
                        for (var i = o.length; i--;)
                            if (!o[i](e, t, n)) return !1;
                        return !0
                    } : o[0]
                }

                function ge(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
                    return a
                }

                function ye(p, h, v, m, g, e) {
                    return m && !m[T] && (m = ye(m)), g && !g[T] && (g = ye(g, e)), re(function(e, t, n, i) {
                        var o, r, a, s = [],
                            l = [],
                            u = t.length,
                            c = e || function(e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            d = !p || !e && h ? c : ge(c, s, p, n, i),
                            f = v ? g || (e ? p : u || m) ? [] : t : d;
                        if (v && v(d, f, n, i), m)
                            for (o = ge(f, l), m(o, [], n, i), r = o.length; r--;)(a = o[r]) && (f[l[r]] = !(d[l[r]] = a));
                        if (e) {
                            if (g || p) {
                                if (g) {
                                    for (o = [], r = f.length; r--;)(a = f[r]) && o.push(d[r] = a);
                                    g(null, f = [], o, i)
                                }
                                for (r = f.length; r--;)(a = f[r]) && -1 < (o = g ? D(e, a) : s[r]) && (e[o] = !(t[o] = a))
                            }
                        } else f = ge(f === t ? f.splice(u, f.length) : f), g ? g(null, t, f, i) : L.apply(t, f)
                    })
                }

                function be(e) {
                    for (var o, t, n, i = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = ve(function(e) {
                            return e === o
                        }, a, !0), u = ve(function(e) {
                            return -1 < D(o, e)
                        }, a, !0), c = [function(e, t, n) {
                            var i = !r && (n || t !== x) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
                            return o = null, i
                        }]; s < i; s++)
                        if (t = w.relative[e[s].type]) c = [ve(me(c), t)];
                        else {
                            if ((t = w.filter[e[s].type].apply(null, e[s].matches))[T]) {
                                for (n = ++s; n < i && !w.relative[e[n].type]; n++);
                                return ye(1 < s && me(c), 1 < s && he(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(B, "$1"), t, s < n && be(e.slice(s, n)), n < i && be(e = e.slice(n)), n < i && he(e))
                            }
                            c.push(t)
                        } return me(c)
                }
                return pe.prototype = w.filters = w.pseudos, w.setFilters = new pe, v = ie.tokenize = function(e, t) {
                    var n, i, o, r, a, s, l, u = p[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, s = [], l = w.preFilter; a;) {
                        for (r in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = W.exec(a)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(B, " ")
                            }), a = a.slice(n.length)), w.filter) !(i = X[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: r,
                            matches: i
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
                }, d = ie.compile = function(e, t) {
                    var n, m, g, y, b, i, o = [],
                        r = [],
                        a = S[e + " "];
                    if (!a) {
                        for (t || (t = v(e)), n = t.length; n--;)(a = be(t[n]))[T] ? o.push(a) : r.push(a);
                        (a = S(e, (m = r, y = 0 < (g = o).length, b = 0 < m.length, i = function(e, t, n, i, o) {
                            var r, a, s, l = 0,
                                u = "0",
                                c = e && [],
                                d = [],
                                f = x,
                                p = e || b && w.find.TAG("*", o),
                                h = E += null == f ? 1 : Math.random() || .1,
                                v = p.length;
                            for (o && (x = t === k || t || o); u !== v && null != (r = p[u]); u++) {
                                if (b && r) {
                                    for (a = 0, t || r.ownerDocument === k || (_(r), n = !C); s = m[a++];)
                                        if (s(r, t || k, n)) {
                                            i.push(r);
                                            break
                                        } o && (E = h)
                                }
                                y && ((r = !s && r) && l--, e && c.push(r))
                            }
                            if (l += u, y && u !== l) {
                                for (a = 0; s = g[a++];) s(c, d, t, n);
                                if (e) {
                                    if (0 < l)
                                        for (; u--;) c[u] || d[u] || (d[u] = A.call(i));
                                    d = ge(d)
                                }
                                L.apply(i, d), o && !e && 0 < d.length && 1 < l + g.length && ie.uniqueSort(i)
                            }
                            return o && (E = h, x = f), c
                        }, y ? re(i) : i))).selector = e
                    }
                    return a
                }, m = ie.select = function(e, t, n, i) {
                    var o, r, a, s, l, u = "function" == typeof e && e,
                        c = !i && v(e = u.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && h.getById && 9 === t.nodeType && C && w.relative[r[1].type]) {
                            if (!(t = (w.find.ID(a.matches[0].replace(ee, te), t) || [])[0])) return n;
                            u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = X.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
                            if ((l = w.find[s]) && (i = l(a.matches[0].replace(ee, te), G.test(r[0].type) && fe(t.parentNode) || t))) {
                                if (r.splice(o, 1), !(e = i.length && he(r))) return L.apply(n, i), n;
                                break
                            }
                    }
                    return (u || d(e, c))(i, t, !C, n, !t || G.test(e) && fe(t.parentNode) || t), n
                }, h.sortStable = T.split("").sort(N).join("") === T, h.detectDuplicates = !!u, _(), h.sortDetached = ae(function(e) {
                    return 1 & e.compareDocumentPosition(k.createElement("div"))
                }), ae(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || se("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), h.attributes && ae(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || se("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), ae(function(e) {
                    return null == e.getAttribute("disabled")
                }) || se(O, function(e, t, n) {
                    var i;
                    return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), ie
            }(k);
            C.find = f, C.expr = f.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = f.uniqueSort, C.text = f.getText, C.isXMLDoc = f.isXML, C.contains = f.contains;
            var p = function(e, t, n) {
                    for (var i = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && C(e).is(n)) break;
                            i.push(e)
                        } return i
                },
                y = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                b = C.expr.match.needsContext,
                w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                x = /^.[^:#\[\.,]*$/;

            function _(e, n, i) {
                if (C.isFunction(n)) return C.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== i
                });
                if (n.nodeType) return C.grep(e, function(e) {
                    return e === n !== i
                });
                if ("string" == typeof n) {
                    if (x.test(n)) return C.filter(n, e, i);
                    n = C.filter(n, e)
                }
                return C.grep(e, function(e) {
                    return -1 < C.inArray(e, n) !== i
                })
            }
            C.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function(e) {
                    var t, n = [],
                        i = this,
                        o = i.length;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < o; t++)
                            if (C.contains(i[t], this)) return !0
                    }));
                    for (t = 0; t < o; t++) C.find(e, i[t], n);
                    return (n = this.pushStack(1 < o ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
                },
                filter: function(e) {
                    return this.pushStack(_(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(_(this, e || [], !0))
                },
                is: function(e) {
                    return !!_(this, "string" == typeof e && b.test(e) ? C(e) : e || [], !1).length
                }
            });
            var T, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (C.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || T, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : E.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : h, !0)), w.test(i[1]) && C.isPlainObject(t))
                        for (i in t) C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((o = h.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return T.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = h, this.selector = e, this
            }).prototype = C.fn, T = C(h);
            var S = /^(?:parents|prev(?:Until|All))/,
                N = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function $(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t, n = C(e, this),
                        i = n.length;
                    return this.filter(function() {
                        for (t = 0; t < i; t++)
                            if (C.contains(this, n[t])) return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, i = 0, o = this.length, r = [], a = b.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            } return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return p(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return p(e, "parentNode", n)
                },
                next: function(e) {
                    return $(e, "nextSibling")
                },
                prev: function(e) {
                    return $(e, "previousSibling")
                },
                nextAll: function(e) {
                    return p(e, "nextSibling")
                },
                prevAll: function(e) {
                    return p(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return p(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return p(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return y((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return y(e.firstChild)
                },
                contents: function(e) {
                    return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
                }
            }, function(i, o) {
                C.fn[i] = function(e, t) {
                    var n = C.map(this, o, e);
                    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (N[i] || (n = C.uniqueSort(n)), S.test(i) && (n = n.reverse())), this.pushStack(n)
                }
            });
            var A, I, L = /\S+/g;

            function j() {
                h.addEventListener ? (h.removeEventListener("DOMContentLoaded", D), k.removeEventListener("load", D)) : (h.detachEvent("onreadystatechange", D), k.detachEvent("onload", D))
            }

            function D() {
                (h.addEventListener || "load" === k.event.type || "complete" === h.readyState) && (j(), C.ready())
            }
            for (I in C.Callbacks = function(i) {
                    var e, n;
                    i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(L) || [], function(e, t) {
                        n[t] = !0
                    }), n) : C.extend({}, i);
                    var o, t, r, a, s = [],
                        l = [],
                        u = -1,
                        c = function() {
                            for (a = i.once, r = o = !0; l.length; u = -1)
                                for (t = l.shift(); ++u < s.length;) !1 === s[u].apply(t[0], t[1]) && i.stopOnFalse && (u = s.length, t = !1);
                            i.memory || (t = !1), o = !1, a && (s = t ? [] : "")
                        },
                        d = {
                            add: function() {
                                return s && (t && !o && (u = s.length - 1, l.push(t)), function n(e) {
                                    C.each(e, function(e, t) {
                                        C.isFunction(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== C.type(t) && n(t)
                                    })
                                }(arguments), t && !o && c()), this
                            },
                            remove: function() {
                                return C.each(arguments, function(e, t) {
                                    for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                                }), this
                            },
                            has: function(e) {
                                return e ? -1 < C.inArray(e, s) : 0 < s.length
                            },
                            empty: function() {
                                return s && (s = []), this
                            },
                            disable: function() {
                                return a = l = [], s = t = "", this
                            },
                            disabled: function() {
                                return !s
                            },
                            lock: function() {
                                return a = !0, t || d.disable(), this
                            },
                            locked: function() {
                                return !!a
                            },
                            fireWith: function(e, t) {
                                return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || c()), this
                            },
                            fire: function() {
                                return d.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return d
                }, C.extend({
                    Deferred: function(e) {
                        var r = [
                                ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", C.Callbacks("memory")]
                            ],
                            o = "pending",
                            a = {
                                state: function() {
                                    return o
                                },
                                always: function() {
                                    return s.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var o = arguments;
                                    return C.Deferred(function(i) {
                                        C.each(r, function(e, t) {
                                            var n = C.isFunction(o[e]) && o[e];
                                            s[t[1]](function() {
                                                var e = n && n.apply(this, arguments);
                                                e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                            })
                                        }), o = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? C.extend(e, a) : a
                                }
                            },
                            s = {};
                        return a.pipe = a.then, C.each(r, function(e, t) {
                            var n = t[2],
                                i = t[3];
                            a[t[1]] = n.add, i && n.add(function() {
                                o = i
                            }, r[1 ^ e][2].disable, r[2][2].lock), s[t[0]] = function() {
                                return s[t[0] + "With"](this === s ? a : this, arguments), this
                            }, s[t[0] + "With"] = n.fireWith
                        }), a.promise(s), e && e.call(s, s), s
                    },
                    when: function(e) {
                        var o, t, n, i = 0,
                            r = c.call(arguments),
                            a = r.length,
                            s = 1 !== a || e && C.isFunction(e.promise) ? a : 0,
                            l = 1 === s ? e : C.Deferred(),
                            u = function(t, n, i) {
                                return function(e) {
                                    n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === o ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                                }
                            };
                        if (1 < a)
                            for (o = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) r[i] && C.isFunction(r[i].promise) ? r[i].promise().progress(u(i, t, o)).done(u(i, n, r)).fail(l.reject) : --s;
                        return s || l.resolveWith(n, r), l.promise()
                    }
                }), C.fn.ready = function(e) {
                    return C.ready.promise().done(e), this
                }, C.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? C.readyWait++ : C.ready(!0)
                    },
                    ready: function(e) {
                        (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (A.resolveWith(h, [C]), C.fn.triggerHandler && (C(h).triggerHandler("ready"), C(h).off("ready"))))
                    }
                }), C.ready.promise = function(e) {
                    if (!A)
                        if (A = C.Deferred(), "complete" === h.readyState || "loading" !== h.readyState && !h.documentElement.doScroll) k.setTimeout(C.ready);
                        else if (h.addEventListener) h.addEventListener("DOMContentLoaded", D), k.addEventListener("load", D);
                    else {
                        h.attachEvent("onreadystatechange", D), k.attachEvent("onload", D);
                        var n = !1;
                        try {
                            n = null == k.frameElement && h.documentElement
                        } catch (e) {}
                        n && n.doScroll && function t() {
                            if (!C.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return k.setTimeout(t, 50)
                                }
                                j(), C.ready()
                            }
                        }()
                    }
                    return A.promise(e)
                }, C.ready.promise(), C(g)) break;
            g.ownFirst = "0" === I, g.inlineBlockNeedsLayout = !1, C(function() {
                    var e, t, n, i;
                    (n = h.getElementsByTagName("body")[0]) && n.style && (t = h.createElement("div"), (i = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", g.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
                }),
                function() {
                    var e = h.createElement("div");
                    g.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        g.deleteExpando = !1
                    }
                    e = null
                }();
            var O, P = function(e) {
                    var t = C.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
                },
                M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                H = /([A-Z])/g;

            function R(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var i = "data-" + t.replace(H, "-$1").toLowerCase();
                    if ("string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? C.parseJSON(n) : n)
                        } catch (e) {}
                        C.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function q(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function B(e, t, n, i) {
                if (P(e)) {
                    var o, r, a = C.expando,
                        s = e.nodeType,
                        l = s ? C.cache : e,
                        u = s ? e[a] : e[a] && a;
                    if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = d.pop() || C.guid++ : a), l[u] || (l[u] = s ? {} : {
                        toJSON: C.noop
                    }), "object" != (void 0 === t ? "undefined" : _typeof(t)) && "function" != typeof t || (i ? l[u] = C.extend(l[u], t) : l[u].data = C.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[C.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[C.camelCase(t)]) : o = r, o
                }
            }

            function F(e, t, n) {
                if (P(e)) {
                    var i, o, r = e.nodeType,
                        a = r ? C.cache : e,
                        s = r ? e[C.expando] : C.expando;
                    if (a[s]) {
                        if (t && (i = n ? a[s] : a[s].data)) {
                            o = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in i ? [t] : (t = C.camelCase(t)) in i ? [t] : t.split(" ")).length;
                            for (; o--;) delete i[t[o]];
                            if (n ? !q(i) : !C.isEmptyObject(i)) return
                        }(n || (delete a[s].data, q(a[s]))) && (r ? C.cleanData([e], !0) : g.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                    }
                }
            }
            C.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !q(e)
                },
                data: function(e, t, n) {
                    return B(e, t, n)
                },
                removeData: function(e, t) {
                    return F(e, t)
                },
                _data: function(e, t, n) {
                    return B(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return F(e, t, !0)
                }
            }), C.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0],
                        a = r && r.attributes;
                    if (void 0 !== e) return "object" == (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function() {
                        C.data(this, e)
                    }) : 1 < arguments.length ? this.each(function() {
                        C.data(this, e, t)
                    }) : r ? R(r, e, C.data(r, e)) : void 0;
                    if (this.length && (o = C.data(r), 1 === r.nodeType && !C._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (0 === (i = a[n].name).indexOf("data-") && R(r, i = C.camelCase(i.slice(5)), o[i]));
                        C._data(r, "parsedAttrs", !0)
                    }
                    return o
                },
                removeData: function(e) {
                    return this.each(function() {
                        C.removeData(this, e)
                    })
                }
            }), C.extend({
                queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = C._data(e, t), n && (!i || C.isArray(n) ? i = C._data(e, t, C.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = C._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                        C.dequeue(e, t)
                    }, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return C._data(e, n) || C._data(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            C._removeData(e, t + "queue"), C._removeData(e, n)
                        })
                    })
                }
            }), C.fn.extend({
                queue: function(t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = C.queue(this, t, n);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        o = C.Deferred(),
                        r = this,
                        a = this.length,
                        s = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = C._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            }), g.shrinkWrapBlocks = function() {
                return null != O ? O : (O = !1, (t = h.getElementsByTagName("body")[0]) && t.style ? (e = h.createElement("div"), (n = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(h.createElement("div")).style.width = "5px", O = 3 !== e.offsetWidth), t.removeChild(n), O) : void 0);
                var e, t, n
            };
            var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                z = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
                U = ["Top", "Right", "Bottom", "Left"],
                V = function(e, t) {
                    return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
                };

            function X(e, t, n, i) {
                var o, r = 1,
                    a = 20,
                    s = i ? function() {
                        return i.cur()
                    } : function() {
                        return C.css(e, t, "")
                    },
                    l = s(),
                    u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                    c = (C.cssNumber[t] || "px" !== u && +l) && z.exec(C.css(e, t));
                if (c && c[3] !== u)
                    for (u = u || c[3], n = n || [], c = +l || 1; c /= r = r || ".5", C.style(e, t, c + u), r !== (r = s() / l) && 1 !== r && --a;);
                return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
            }
            var J, Q, K, Y = function e(t, n, i, o, r, a, s) {
                    var l = 0,
                        u = t.length,
                        c = null == i;
                    if ("object" === C.type(i))
                        for (l in r = !0, i) e(t, n, l, i[l], !0, a, s);
                    else if (void 0 !== o && (r = !0, C.isFunction(o) || (s = !0), c && (n = s ? (n.call(t, o), null) : (c = n, function(e, t, n) {
                            return c.call(C(e), n)
                        })), n))
                        for (; l < u; l++) n(t[l], i, s ? o : o.call(t[l], l, n(t[l], i)));
                    return r ? t : c ? n.call(t) : u ? n(t[0], i) : a
                },
                G = /^(?:checkbox|radio)$/i,
                Z = /<([\w:-]+)/,
                ee = /^$|\/(?:java|ecma)script/i,
                te = /^\s+/,
                ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

            function ie(e) {
                var t = ne.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }
            J = h.createElement("div"), Q = h.createDocumentFragment(), K = h.createElement("input"), J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", g.leadingWhitespace = 3 === J.firstChild.nodeType, g.tbody = !J.getElementsByTagName("tbody").length, g.htmlSerialize = !!J.getElementsByTagName("link").length, g.html5Clone = "<:nav></:nav>" !== h.createElement("nav").cloneNode(!0).outerHTML, K.type = "checkbox", K.checked = !0, Q.appendChild(K), g.appendChecked = K.checked, J.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue, Q.appendChild(J), (K = h.createElement("input")).setAttribute("type", "radio"), K.setAttribute("checked", "checked"), K.setAttribute("name", "t"), J.appendChild(K), g.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, g.noCloneEvent = !!J.addEventListener, J[C.expando] = 1, g.attributes = !J.getAttribute(C.expando);
            var oe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: g.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };

            function re(e, t) {
                var n, i, o = 0,
                    r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!r)
                    for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || C.nodeName(i, t) ? r.push(i) : C.merge(r, re(i, t));
                return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], r) : r
            }

            function ae(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++) C._data(n, "globalEval", !t || C._data(t[i], "globalEval"))
            }
            oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
            var se = /<|&#?\w+;/,
                le = /<tbody/i;

            function ue(e) {
                G.test(e.type) && (e.defaultChecked = e.checked)
            }

            function ce(e, t, n, i, o) {
                for (var r, a, s, l, u, c, d, f = e.length, p = ie(t), h = [], v = 0; v < f; v++)
                    if ((a = e[v]) || 0 === a)
                        if ("object" === C.type(a)) C.merge(h, a.nodeType ? [a] : a);
                        else if (se.test(a)) {
                    for (l = l || p.appendChild(t.createElement("div")), u = (Z.exec(a) || ["", ""])[1].toLowerCase(), d = oe[u] || oe._default, l.innerHTML = d[1] + C.htmlPrefilter(a) + d[2], r = d[0]; r--;) l = l.lastChild;
                    if (!g.leadingWhitespace && te.test(a) && h.push(t.createTextNode(te.exec(a)[0])), !g.tbody)
                        for (r = (a = "table" !== u || le.test(a) ? "<table>" !== d[1] || le.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; r--;) C.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (C.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                    l = p.lastChild
                } else h.push(t.createTextNode(a));
                for (l && p.removeChild(l), g.appendChecked || C.grep(re(h, "input"), ue), v = 0; a = h[v++];)
                    if (i && -1 < C.inArray(a, i)) o && o.push(a);
                    else if (s = C.contains(a.ownerDocument, a), l = re(p.appendChild(a), "script"), s && ae(l), n)
                    for (r = 0; a = l[r++];) ee.test(a.type || "") && n.push(a);
                return l = null, p
            }! function() {
                var e, t, n = h.createElement("div");
                for (e in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) t = "on" + e, (g[e] = t in k) || (n.setAttribute(t, "t"), g[e] = !1 === n.attributes[t].expando);
                n = null
            }();
            var de = /^(?:input|select|textarea)$/i,
                fe = /^key/,
                pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                he = /^(?:focusinfocus|focusoutblur)$/,
                ve = /^([^.]*)(?:\.(.+)|)/;

            function me() {
                return !0
            }

            function ge() {
                return !1
            }

            function ye() {
                try {
                    return h.activeElement
                } catch (e) {}
            }

            function be(e, t, n, i, o, r) {
                var a, s;
                if ("object" == (void 0 === t ? "undefined" : _typeof(t))) {
                    for (s in "string" != typeof n && (i = i || n, n = void 0), t) be(e, s, n, i, t[s], r);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ge;
                else if (!o) return e;
                return 1 === r && (a = o, (o = function(e) {
                    return C().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                    C.event.add(this, t, o, i, n)
                })
            }
            C.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, a, s, l, u, c, d, f, p, h, v, m = C._data(e);
                    if (m) {
                        for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = C.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                                return void 0 === C || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(c.elem, arguments)
                            }).elem = e), s = (t = (t || "").match(L) || [""]).length; s--;) p = v = (r = ve.exec(t[s]) || [])[1], h = (r[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({
                            type: p,
                            origType: v,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, l), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), C.event.global[p] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, i, o) {
                    var r, a, s, l, u, c, d, f, p, h, v, m = C.hasData(e) && C._data(e);
                    if (m && (c = m.events)) {
                        for (u = (t = (t || "").match(L) || [""]).length; u--;)
                            if (p = v = (s = ve.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = C.event.special[p] || {}, f = c[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !o && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                                l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || C.removeEvent(e, p, m.handle), delete c[p])
                            } else
                                for (p in c) C.event.remove(e, p + t[u], n, i, !0);
                        C.isEmptyObject(c) && (delete m.handle, C._removeData(e, "events"))
                    }
                },
                trigger: function(e, t, n, i) {
                    var o, r, a, s, l, u, c, d = [n || h],
                        f = m.call(e, "type") ? e.type : e,
                        p = m.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = u = n = n || h, 3 !== n.nodeType && 8 !== n.nodeType && !he.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), r = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), l = C.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                        if (!i && !l.noBubble && !C.isWindow(n)) {
                            for (s = l.delegateType || f, he.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                            u === (n.ownerDocument || h) && d.push(u.defaultView || u.parentWindow || k)
                        }
                        for (c = 0;
                            (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || f, (o = (C._data(a, "events") || {})[e.type] && C._data(a, "handle")) && o.apply(a, t), (o = r && a[r]) && o.apply && P(a) && (e.result = o.apply(a, t), !1 === e.result && e.preventDefault());
                        if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && P(n) && r && n[f] && !C.isWindow(n)) {
                            (u = n[r]) && (n[r] = null), C.event.triggered = f;
                            try {
                                n[f]()
                            } catch (e) {}
                            C.event.triggered = void 0, u && (n[r] = u)
                        }
                        return e.result
                    }
                },
                dispatch: function(e) {
                    e = C.event.fix(e);
                    var t, n, i, o, r, a = [],
                        s = c.call(arguments),
                        l = (C._data(this, "events") || {})[e.type] || [],
                        u = C.event.special[e.type] || {};
                    if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (a = C.event.handlers.call(this, e, l), t = 0;
                            (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, a = [],
                        s = t.delegateCount,
                        l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                                for (i = [], n = 0; n < s; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [l]).length), i[o] && i.push(r);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                            } return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                fix: function(e) {
                    if (e[C.expando]) return e;
                    var t, n, i, o = e.type,
                        r = e,
                        a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = pe.test(o) ? this.mouseHooks : fe.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
                    return e.target || (e.target = r.srcElement || h), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, o, r = t.button,
                            a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || h).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== ye() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === ye() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return C.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return C.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n) {
                    var i = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
                }
            }, C.removeEvent = h.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
            }, C.Event = function(e, t) {
                return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? me : ge) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(e, t)
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: ge,
                isPropagationStopped: ge,
                isImmediatePropagationStopped: ge,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = me, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = me, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = me, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, o) {
                C.event.special[e] = {
                    delegateType: o,
                    bindType: o,
                    handle: function(e) {
                        var t, n = e.relatedTarget,
                            i = e.handleObj;
                        return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
                    }
                }
            }), g.submit || (C.event.special.submit = {
                setup: function() {
                    return !C.nodeName(this, "form") && void C.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = C.nodeName(t, "input") || C.nodeName(t, "button") ? C.prop(t, "form") : void 0;
                        n && !C._data(n, "submit") && (C.event.add(n, "submit._submit", function(e) {
                            e._submitBubble = !0
                        }), C._data(n, "submit", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e))
                },
                teardown: function() {
                    return !C.nodeName(this, "form") && void C.event.remove(this, "._submit")
                }
            }), g.change || (C.event.special.change = {
                setup: function() {
                    return de.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }), C.event.add(this, "click._change", function(e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event.simulate("change", this, e)
                    })), !1) : void C.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        de.test(t.nodeName) && !C._data(t, "change") && (C.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e)
                        }), C._data(t, "change", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return C.event.remove(this, "._change"), !de.test(this.nodeName)
                }
            }), g.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, i) {
                var o = function(e) {
                    C.event.simulate(i, e.target, C.event.fix(e))
                };
                C.event.special[i] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i);
                        t || e.addEventListener(n, o, !0), C._data(e, i, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = C._data(e, i) - 1;
                        t ? C._data(e, i, t) : (e.removeEventListener(n, o, !0), C._removeData(e, i))
                    }
                }
            }), C.fn.extend({
                on: function(e, t, n, i) {
                    return be(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return be(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" != (void 0 === e ? "undefined" : _typeof(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ge), this.each(function() {
                        C.event.remove(this, e, n, t)
                    });
                    for (o in e) this.off(o, t, e[o]);
                    return this
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? C.event.trigger(e, t, n, !0) : void 0
                }
            });
            var we = / jQuery\d+="(?:null|\d+)"/g,
                xe = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
                _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                ke = /<script|<style|<link/i,
                Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Te = /^true\/(.*)/,
                Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Se = ie(h).appendChild(h.createElement("div"));

            function Ne(e, t) {
                return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function $e(e) {
                return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
            }

            function Ae(e) {
                var t = Te.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Ie(e, t) {
                if (1 === t.nodeType && C.hasData(e)) {
                    var n, i, o, r = C._data(e),
                        a = C._data(t, r),
                        s = r.events;
                    if (s)
                        for (n in delete a.handle, a.events = {}, s)
                            for (i = 0, o = s[n].length; i < o; i++) C.event.add(t, n, s[n][i]);
                    a.data && (a.data = C.extend({}, a.data))
                }
            }

            function Le(e, t) {
                var n, i, o;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !g.noCloneEvent && t[C.expando]) {
                        for (i in (o = C._data(t)).events) C.removeEvent(t, i, o.handle);
                        t.removeAttribute(C.expando)
                    }
                    "script" === n && t.text !== e.text ? ($e(t).text = e.text, Ae(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), g.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && G.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }

            function je(n, i, o, r) {
                i = v.apply([], i);
                var e, t, a, s, l, u, c = 0,
                    d = n.length,
                    f = d - 1,
                    p = i[0],
                    h = C.isFunction(p);
                if (h || 1 < d && "string" == typeof p && !g.checkClone && Ce.test(p)) return n.each(function(e) {
                    var t = n.eq(e);
                    h && (i[0] = p.call(this, e, t.html())), je(t, i, o, r)
                });
                if (d && (e = (u = ce(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === u.childNodes.length && (u = e), e || r)) {
                    for (a = (s = C.map(re(u, "script"), $e)).length; c < d; c++) t = u, c !== f && (t = C.clone(t, !0, !0), a && C.merge(s, re(t, "script"))), o.call(n[c], t, c);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument, C.map(s, Ae), c = 0; c < a; c++) t = s[c], ee.test(t.type || "") && !C._data(t, "globalEval") && C.contains(l, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, "")));
                    u = e = null
                }
                return n
            }

            function De(e, t, n) {
                for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(re(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && ae(re(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e.replace(_e, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, o, r, a, s, l = C.contains(e.ownerDocument, e);
                    if (g.html5Clone || C.isXMLDoc(e) || !xe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Se.innerHTML = e.outerHTML, Se.removeChild(r = Se.firstChild)), !(g.noCloneEvent && g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (i = re(r), s = re(e), a = 0; null != (o = s[a]); ++a) i[a] && Le(o, i[a]);
                    if (t)
                        if (n)
                            for (s = s || re(e), i = i || re(r), a = 0; null != (o = s[a]); a++) Ie(o, i[a]);
                        else Ie(e, r);
                    return 0 < (i = re(r, "script")).length && ae(i, !l && re(e, "script")), i = s = o = null, r
                },
                cleanData: function(e, t) {
                    for (var n, i, o, r, a = 0, s = C.expando, l = C.cache, u = g.attributes, c = C.event.special; null != (n = e[a]); a++)
                        if ((t || P(n)) && (r = (o = n[s]) && l[o])) {
                            if (r.events)
                                for (i in r.events) c[i] ? C.event.remove(n, i) : C.removeEvent(n, i, r.handle);
                            l[o] && (delete l[o], u || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), d.push(o))
                        }
                }
            }), C.fn.extend({
                domManip: je,
                detach: function(e) {
                    return De(this, e, !0)
                },
                remove: function(e) {
                    return De(this, e)
                },
                text: function(e) {
                    return Y(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || h).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return je(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return je(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ne(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && C.cleanData(re(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && C.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Y(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(we, "") : void 0;
                        if ("string" == typeof e && !ke.test(e) && (g.htmlSerialize || !xe.test(e)) && (g.leadingWhitespace || !te.test(e)) && !oe[(Z.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(re(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var n = [];
                    return je(this, arguments, function(e) {
                        var t = this.parentNode;
                        C.inArray(this, n) < 0 && (C.cleanData(re(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, a) {
                C.fn[e] = function(e) {
                    for (var t, n = 0, i = [], o = C(e), r = o.length - 1; n <= r; n++) t = n === r ? this : this.clone(!0), C(o[n])[a](t), s.apply(i, t.get());
                    return this.pushStack(i)
                }
            });
            var Oe, Pe = {
                HTML: "block",
                BODY: "block"
            };

            function Me(e, t) {
                var n = C(t.createElement(e)).appendTo(t.body),
                    i = C.css(n[0], "display");
                return n.detach(), i
            }

            function He(e) {
                var t = h,
                    n = Pe[e];
                return n || ("none" !== (n = Me(e, t)) && n || ((t = ((Oe = (Oe || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Oe[0].contentDocument).document).write(), t.close(), n = Me(e, t), Oe.detach()), Pe[e] = n), n
            }
            var Re = /^margin/,
                qe = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
                Be = function(e, t, n, i) {
                    var o, r, a = {};
                    for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                    for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
                    return o
                },
                Fe = h.documentElement;
            ! function() {
                var i, o, r, a, s, l, u = h.createElement("div"),
                    c = h.createElement("div");
                if (c.style) {
                    var e = function() {
                        var e, t, n = h.documentElement;
                        n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = l = !1, o = s = !0, k.getComputedStyle && (t = k.getComputedStyle(c), i = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, r = "4px" === (t || {
                            width: "4px"
                        }).width, c.style.marginRight = "50%", o = "4px" === (t || {
                            marginRight: "4px"
                        }).marginRight, (e = c.appendChild(h.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((k.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(u)
                    };
                    c.style.cssText = "float:left;opacity:.5", g.opacity = "0.5" === c.style.opacity, g.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = h.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), g.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, C.extend(g, {
                        reliableHiddenOffsets: function() {
                            return null == i && e(), a
                        },
                        boxSizingReliable: function() {
                            return null == i && e(), r
                        },
                        pixelMarginRight: function() {
                            return null == i && e(), o
                        },
                        pixelPosition: function() {
                            return null == i && e(), i
                        },
                        reliableMarginRight: function() {
                            return null == i && e(), s
                        },
                        reliableMarginLeft: function() {
                            return null == i && e(), l
                        }
                    })
                }
            }();
            var We, ze, Ue = /^(top|right|bottom|left)$/;

            function Ve(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            k.getComputedStyle ? (We = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = k), t.getComputedStyle(e)
            }, ze = function(e, t, n) {
                var i, o, r, a, s = e.style;
                return "" !== (a = (n = n || We(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), n && !g.pixelMarginRight() && qe.test(a) && Re.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), void 0 === a ? a : a + ""
            }) : Fe.currentStyle && (We = function(e) {
                return e.currentStyle
            }, ze = function(e, t, n) {
                var i, o, r, a, s = e.style;
                return null == (a = (n = n || We(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), qe.test(a) && !Ue.test(t) && (i = s.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
            });
            var Xe = /alpha\([^)]*\)/i,
                Je = /opacity\s*=\s*([^)]*)/i,
                Qe = /^(none|table(?!-c[ea]).+)/,
                Ke = new RegExp("^(" + W + ")(.*)$", "i"),
                Ye = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ge = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ze = ["Webkit", "O", "Moz", "ms"],
                et = h.createElement("div").style;

            function tt(e) {
                if (e in et) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ze.length; n--;)
                    if ((e = Ze[n] + t) in et) return e
            }

            function nt(e, t) {
                for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (r[a] = C._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && V(i) && (r[a] = C._data(i, "olddisplay", He(i.nodeName)))) : (o = V(i), (n && "none" !== n || !o) && C._data(i, "olddisplay", o ? n : C.css(i, "display"))));
                for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
                return e
            }

            function it(e, t, n) {
                var i = Ke.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }

            function ot(e, t, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += C.css(e, n + U[r], !0, o)), i ? ("content" === n && (a -= C.css(e, "padding" + U[r], !0, o)), "margin" !== n && (a -= C.css(e, "border" + U[r] + "Width", !0, o))) : (a += C.css(e, "padding" + U[r], !0, o), "padding" !== n && (a += C.css(e, "border" + U[r] + "Width", !0, o)));
                return a
            }

            function rt(e, t, n) {
                var i = !0,
                    o = "width" === t ? e.offsetWidth : e.offsetHeight,
                    r = We(e),
                    a = g.boxSizing && "border-box" === C.css(e, "boxSizing", !1, r);
                if (o <= 0 || null == o) {
                    if (((o = ze(e, t, r)) < 0 || null == o) && (o = e.style[t]), qe.test(o)) return o;
                    i = a && (g.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + ot(e, t, n || (a ? "border" : "content"), i, r) + "px"
            }

            function at(e, t, n, i, o) {
                return new at.prototype.init(e, t, n, i, o)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = ze(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: g.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, a, s = C.camelCase(t),
                            l = e.style;
                        if (t = C.cssProps[s] || (C.cssProps[s] = tt(s) || s), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                        if ("string" === (r = void 0 === n ? "undefined" : _typeof(n)) && (o = z.exec(n)) && o[1] && (n = X(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                            l[t] = n
                        } catch (e) {}
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, a, s = C.camelCase(t);
                    return t = C.cssProps[s] || (C.cssProps[s] = tt(s) || s), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = ze(e, t, i)), "normal" === r && t in Ge && (r = Ge[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), C.each(["height", "width"], function(e, o) {
                C.cssHooks[o] = {
                    get: function(e, t, n) {
                        return t ? Qe.test(C.css(e, "display")) && 0 === e.offsetWidth ? Be(e, Ye, function() {
                            return rt(e, o, n)
                        }) : rt(e, o, n) : void 0
                    },
                    set: function(e, t, n) {
                        var i = n && We(e);
                        return it(0, t, n ? ot(e, o, n, g.boxSizing && "border-box" === C.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), g.opacity || (C.cssHooks.opacity = {
                get: function(e, t) {
                    return Je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        o = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        r = i && i.filter || n.filter || "";
                    ((n.zoom = 1) <= t || "" === t) && "" === C.trim(r.replace(Xe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Xe.test(r) ? r.replace(Xe, o) : r + " " + o)
                }
            }), C.cssHooks.marginRight = Ve(g.reliableMarginRight, function(e, t) {
                return t ? Be(e, {
                    display: "inline-block"
                }, ze, [e, "marginRight"]) : void 0
            }), C.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function(e, t) {
                return t ? (parseFloat(ze(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Be(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(o, r) {
                C.cssHooks[o + r] = {
                    expand: function(e) {
                        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + U[t] + r] = i[t] || i[t - 2] || i[0];
                        return n
                    }
                }, Re.test(o) || (C.cssHooks[o + r].set = it)
            }), C.fn.extend({
                css: function(e, t) {
                    return Y(this, function(e, t, n) {
                        var i, o, r = {},
                            a = 0;
                        if (C.isArray(t)) {
                            for (i = We(e), o = t.length; a < o; a++) r[t[a]] = C.css(e, t[a], !1, i);
                            return r
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, 1 < arguments.length)
                },
                show: function() {
                    return nt(this, !0)
                },
                hide: function() {
                    return nt(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        V(this) ? C(this).show() : C(this).hide()
                    })
                }
            }), ((C.Tween = at).prototype = {
                constructor: at,
                init: function(e, t, n, i, o, r) {
                    this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = at.propHooks[this.prop];
                    return e && e.get ? e.get(this) : at.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = at.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
                }
            }).init.prototype = at.prototype, (at.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = at.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = at.prototype.init, C.fx.step = {};
            var st, lt, ut, ct, dt, ft, pt, ht = /^(?:toggle|show|hide)$/,
                vt = /queueHooks$/;

            function mt() {
                return k.setTimeout(function() {
                    st = void 0
                }), st = C.now()
            }

            function gt(e, t) {
                var n, i = {
                        height: e
                    },
                    o = 0;
                for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = U[o])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function yt(e, t, n) {
                for (var i, o = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                    if (i = o[r].call(n, t, e)) return i
            }

            function bt(r, e, t) {
                var n, a, i = 0,
                    o = bt.prefilters.length,
                    s = C.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (a) return !1;
                        for (var e = st || mt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(n);
                        return s.notifyWith(r, [u, n, t]), n < 1 && o ? t : (s.resolveWith(r, [u]), !1)
                    },
                    u = s.promise({
                        elem: r,
                        props: C.extend({}, e),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: st || mt(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function(e, t) {
                            var n = C.Tween(r, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                            return u.tweens.push(n), n
                        },
                        stop: function(e) {
                            var t = 0,
                                n = e ? u.tweens.length : 0;
                            if (a) return this;
                            for (a = !0; t < n; t++) u.tweens[t].run(1);
                            return e ? (s.notifyWith(r, [u, 1, 0]), s.resolveWith(r, [u, e])) : s.rejectWith(r, [u, e]), this
                        }
                    }),
                    c = u.props;
                for (function(e, t) {
                        var n, i, o, r, a;
                        for (n in e)
                            if (o = t[i = C.camelCase(n)], r = e[n], C.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                                for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                            else t[i] = o
                    }(c, u.opts.specialEasing); i < o; i++)
                    if (n = bt.prefilters[i].call(u, r, c, u.opts)) return C.isFunction(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = C.proxy(n.stop, n)), n;
                return C.map(c, yt, u), C.isFunction(u.opts.start) && u.opts.start.call(r, u), C.fx.timer(C.extend(l, {
                    elem: r,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            C.Animation = C.extend(bt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return X(n.elem, e, z.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    for (var n, i = 0, o = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; i < o; i++) n = e[i], bt.tweeners[n] = bt.tweeners[n] || [], bt.tweeners[n].unshift(t)
                },
                prefilters: [function(t, e, n) {
                    var i, o, r, a, s, l, u, c = this,
                        d = {},
                        f = t.style,
                        p = t.nodeType && V(t),
                        h = C._data(t, "fxshow");
                    for (i in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || l()
                        }), s.unqueued++, c.always(function() {
                            c.always(function() {
                                s.unqueued--, C.queue(t, "fx").length || s.empty.fire()
                            })
                        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = C.css(t, "display")) ? C._data(t, "olddisplay") || He(t.nodeName) : u) && "none" === C.css(t, "float") && (g.inlineBlockNeedsLayout && "inline" !== He(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", g.shrinkWrapBlocks() || c.always(function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        })), e)
                        if (o = e[i], ht.exec(o)) {
                            if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                                if ("show" !== o || !h || void 0 === h[i]) continue;
                                p = !0
                            }
                            d[i] = h && h[i] || C.style(t, i)
                        } else u = void 0;
                    if (C.isEmptyObject(d)) "inline" === ("none" === u ? He(t.nodeName) : u) && (f.display = u);
                    else
                        for (i in h ? "hidden" in h && (p = h.hidden) : h = C._data(t, "fxshow", {}), r && (h.hidden = !p), p ? C(t).show() : c.done(function() {
                                C(t).hide()
                            }), c.done(function() {
                                var e;
                                for (e in C._removeData(t, "fxshow"), d) C.style(t, e, d[e])
                            }), d) a = yt(p ? h[i] : 0, i, c), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                }],
                prefilter: function(e, t) {
                    t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var i = e && "object" == (void 0 === e ? "undefined" : _typeof(e)) ? C.extend({}, e) : {
                    complete: n || !n && t || C.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !C.isFunction(t) && t
                };
                return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
                }, i
            }, C.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(V).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = C.isEmptyObject(t),
                        r = C.speed(e, n, i),
                        a = function() {
                            var e = bt(this, C.extend({}, t), r);
                            (o || C._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(o, e, r) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = C.timers,
                            i = C._data(this);
                        if (t) i[t] && i[t].stop && a(i[t]);
                        else
                            for (t in i) i[t] && i[t].stop && vt.test(t) && a(i[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                        !e && r || C.dequeue(this, o)
                    })
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each(function() {
                        var e, t = C._data(this),
                            n = t[a + "queue"],
                            i = t[a + "queueHooks"],
                            o = C.timers,
                            r = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(e, i) {
                var o = C.fn[i];
                C.fn[i] = function(e, t, n) {
                    return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
                }
            }), C.each({
                slideDown: gt("show"),
                slideUp: gt("hide"),
                slideToggle: gt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, i) {
                C.fn[e] = function(e, t, n) {
                    return this.animate(i, e, t, n)
                }
            }), C.timers = [], C.fx.tick = function() {
                var e, t = C.timers,
                    n = 0;
                for (st = C.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || C.fx.stop(), st = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
            }, C.fx.interval = 13, C.fx.start = function() {
                lt || (lt = k.setInterval(C.fx.tick, C.fx.interval))
            }, C.fx.stop = function() {
                k.clearInterval(lt), lt = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(i, e) {
                return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                    var n = k.setTimeout(e, i);
                    t.stop = function() {
                        k.clearTimeout(n)
                    }
                })
            }, ct = h.createElement("input"), dt = h.createElement("div"), ft = h.createElement("select"), pt = ft.appendChild(h.createElement("option")), (dt = h.createElement("div")).setAttribute("className", "t"), dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ut = dt.getElementsByTagName("a")[0], ct.setAttribute("type", "checkbox"), dt.appendChild(ct), (ut = dt.getElementsByTagName("a")[0]).style.cssText = "top:1px", g.getSetAttribute = "t" !== dt.className, g.style = /top/.test(ut.getAttribute("style")), g.hrefNormalized = "/a" === ut.getAttribute("href"), g.checkOn = !!ct.value, g.optSelected = pt.selected, g.enctype = !!h.createElement("form").enctype, ft.disabled = !0, g.optDisabled = !pt.disabled, (ct = h.createElement("input")).setAttribute("value", ""), g.input = "" === ct.getAttribute("value"), ct.value = "t", ct.setAttribute("type", "radio"), g.radioValue = "t" === ct.value;
            var wt = /\r/g,
                xt = /[\x20\t\r\n\f]+/g;
            C.fn.extend({
                val: function(n) {
                    var i, e, o, t = this[0];
                    return arguments.length ? (o = C.isFunction(n), this.each(function(e) {
                        var t;
                        1 === this.nodeType && (null == (t = o ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function(e) {
                            return null == e ? "" : e + ""
                        })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                    })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : C.trim(C.text(e)).replace(xt, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                                if (((n = i[l]).selected || l === o) && (g.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = C(n).val(), r) return t;
                                    a.push(t)
                                } return a
                        },
                        set: function(e, t) {
                            for (var n, i, o = e.options, r = C.makeArray(t), a = o.length; a--;)
                                if (i = o[a], -1 < C.inArray(C.valHooks.option.get(i), r)) try {
                                    i.selected = n = !0
                                } catch (e) {
                                    i.scrollHeight
                                } else i.selected = !1;
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0
                    }
                }, g.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var _t, kt, Ct = C.expr.attrHandle,
                Tt = /^(?:checked|selected)$/i,
                Et = g.getSetAttribute,
                St = g.input;
            C.fn.extend({
                attr: function(e, t) {
                    return Y(this, C.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (t = t.toLowerCase(), o = C.attrHooks[t] || (C.expr.match.bool.test(t) ? kt : _t)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!g.radioValue && "radio" === t && C.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i, o = 0,
                        r = t && t.match(L);
                    if (r && 1 === e.nodeType)
                        for (; n = r[o++];) i = C.propFix[n] || n, C.expr.match.bool.test(n) ? St && Et || !Tt.test(n) ? e[i] = !1 : e[C.camelCase("default-" + n)] = e[i] = !1 : C.attr(e, n, ""), e.removeAttribute(Et ? n : i)
                }
            }), kt = {
                set: function(e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : St && Et || !Tt.test(n) ? e.setAttribute(!Et && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var r = Ct[t] || C.find.attr;
                St && Et || !Tt.test(t) ? Ct[t] = function(e, t, n) {
                    var i, o;
                    return n || (o = Ct[t], Ct[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, Ct[t] = o), i
                } : Ct[t] = function(e, t, n) {
                    return n ? void 0 : e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }), St && Et || (C.attrHooks.value = {
                set: function(e, t, n) {
                    return C.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
                }
            }), Et || (_t = {
                set: function(e, t, n) {
                    var i = e.getAttributeNode(n);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
                }
            }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
                var i;
                return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
            }, C.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0
                },
                set: _t.set
            }, C.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    _t.set(e, "" !== t && t, n)
                }
            }, C.each(["width", "height"], function(e, n) {
                C.attrHooks[n] = {
                    set: function(e, t) {
                        return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
                    }
                }
            })), g.style || (C.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Nt = /^(?:input|select|textarea|button|object)$/i,
                $t = /^(?:a|area)$/i;
            C.fn.extend({
                prop: function(e, t) {
                    return Y(this, C.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return e = C.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (e) {}
                    })
                }
            }), C.extend({
                prop: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Nt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), g.hrefNormalized || C.each(["href", "src"], function(e, t) {
                C.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), g.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }), g.enctype || (C.propFix.enctype = "encoding");
            var At = /[\t\r\n\f]/g;

            function It(e) {
                return C.attr(e, "class") || ""
            }
            C.fn.extend({
                addClass: function(t) {
                    var e, n, i, o, r, a, s, l = 0;
                    if (C.isFunction(t)) return this.each(function(e) {
                        C(this).addClass(t.call(this, e, It(this)))
                    });
                    if ("string" == typeof t && t)
                        for (e = t.match(L) || []; n = this[l++];)
                            if (o = It(n), i = 1 === n.nodeType && (" " + o + " ").replace(At, " ")) {
                                for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                o !== (s = C.trim(i)) && C.attr(n, "class", s)
                            } return this
                },
                removeClass: function(t) {
                    var e, n, i, o, r, a, s, l = 0;
                    if (C.isFunction(t)) return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, It(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof t && t)
                        for (e = t.match(L) || []; n = this[l++];)
                            if (o = It(n), i = 1 === n.nodeType && (" " + o + " ").replace(At, " ")) {
                                for (a = 0; r = e[a++];)
                                    for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                                o !== (s = C.trim(i)) && C.attr(n, "class", s)
                            } return this
                },
                toggleClass: function(o, t) {
                    var r = void 0 === o ? "undefined" : _typeof(o);
                    return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : C.isFunction(o) ? this.each(function(e) {
                        C(this).toggleClass(o.call(this, e, It(this), t), t)
                    }) : this.each(function() {
                        var e, t, n, i;
                        if ("string" === r)
                            for (t = 0, n = C(this), i = o.match(L) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== o && "boolean" !== r || ((e = It(this)) && C._data(this, "__className__", e), C.attr(this, "class", e || !1 === o ? "" : C._data(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && -1 < (" " + It(n) + " ").replace(At, " ").indexOf(t)) return !0;
                    return !1
                }
            }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
                C.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            }), C.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Lt = k.location,
                jt = C.now(),
                Dt = /\?/,
                Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            C.parseJSON = function(e) {
                if (k.JSON && k.JSON.parse) return k.JSON.parse(e + "");
                var o, r = null,
                    t = C.trim(e + "");
                return t && !C.trim(t.replace(Ot, function(e, t, n, i) {
                    return o && t && (r = 0), 0 === r ? e : (o = n || t, r += !i - !n, "")
                })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
            }, C.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    k.DOMParser ? t = (new k.DOMParser).parseFromString(e, "text/xml") : ((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (e) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
            };
            var Pt = /#.*$/,
                Mt = /([?&])_=[^&]*/,
                Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Rt = /^(?:GET|HEAD)$/,
                qt = /^\/\//,
                Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Ft = {},
                Wt = {},
                zt = "*/".concat("*"),
                Ut = Lt.href,
                Vt = Bt.exec(Ut.toLowerCase()) || [];

            function Xt(r) {
                return function(e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, i = 0,
                        o = e.toLowerCase().match(L) || [];
                    if (C.isFunction(t))
                        for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
                }
            }

            function Jt(t, o, r, a) {
                var s = {},
                    l = t === Wt;

                function u(e) {
                    var i;
                    return s[e] = !0, C.each(t[e] || [], function(e, t) {
                        var n = t(o, r, a);
                        return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1)
                    }), i
                }
                return u(o.dataTypes[0]) || !s["*"] && u("*")
            }

            function Qt(e, t) {
                var n, i, o = C.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
                return n && C.extend(!0, e, n), e
            }
            C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ut,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Vt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": zt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": C.parseJSON,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Qt(Qt(e, C.ajaxSettings), t) : Qt(C.ajaxSettings, e)
                },
                ajaxPrefilter: Xt(Ft),
                ajaxTransport: Xt(Wt),
                ajax: function(e, t) {
                    "object" == (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};
                    var n, i, c, d, f, p, h, o, v = C.ajaxSetup({}, t),
                        m = v.context || v,
                        g = v.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                        y = C.Deferred(),
                        b = C.Callbacks("once memory"),
                        w = v.statusCode || {},
                        r = {},
                        a = {},
                        x = 0,
                        s = "canceled",
                        _ = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === x) {
                                    if (!o)
                                        for (o = {}; t = Ht.exec(d);) o[t[1].toLowerCase()] = t[2];
                                    t = o[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? d : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return x || (e = a[n] = a[n] || e, r[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return x || (v.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (x < 2)
                                        for (t in e) w[t] = [w[t], e[t]];
                                    else _.always(e[_.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || s;
                                return h && h.abort(t), l(0, t), this
                            }
                        };
                    if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, v.url = ((e || v.url || Ut) + "").replace(Pt, "").replace(qt, Vt[1] + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = C.trim(v.dataType || "*").toLowerCase().match(L) || [""], null == v.crossDomain && (n = Bt.exec(v.url.toLowerCase()), v.crossDomain = !(!n || n[1] === Vt[1] && n[2] === Vt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Vt[3] || ("http:" === Vt[1] ? "80" : "443")))), v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)), Jt(Ft, v, t, _), 2 === x) return _;
                    for (i in (p = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), c = v.url, v.hasContent || (v.data && (c = v.url += (Dt.test(c) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (v.url = Mt.test(c) ? c.replace(Mt, "$1_=" + jt++) : c + (Dt.test(c) ? "&" : "?") + "_=" + jt++)), v.ifModified && (C.lastModified[c] && _.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && _.setRequestHeader("If-None-Match", C.etag[c])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && _.setRequestHeader("Content-Type", v.contentType), _.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) _.setRequestHeader(i, v.headers[i]);
                    if (v.beforeSend && (!1 === v.beforeSend.call(m, _, v) || 2 === x)) return _.abort();
                    for (i in s = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) _[i](v[i]);
                    if (h = Jt(Wt, v, t, _)) {
                        if (_.readyState = 1, p && g.trigger("ajaxSend", [_, v]), 2 === x) return _;
                        v.async && 0 < v.timeout && (f = k.setTimeout(function() {
                            _.abort("timeout")
                        }, v.timeout));
                        try {
                            x = 1, h.send(r, l)
                        } catch (e) {
                            if (!(x < 2)) throw e;
                            l(-1, e)
                        }
                    } else l(-1, "No Transport");

                    function l(e, t, n, i) {
                        var o, r, a, s, l, u = t;
                        2 !== x && (x = 2, f && k.clearTimeout(f), h = void 0, d = i || "", _.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (o)
                                for (a in s)
                                    if (s[a] && s[a].test(o)) {
                                        l.unshift(a);
                                        break
                                    } if (l[0] in n) r = l[0];
                            else {
                                for (a in n) {
                                    if (!l[0] || e.converters[a + " " + l[0]]) {
                                        r = a;
                                        break
                                    }
                                    i || (i = a)
                                }
                                r = r || i
                            }
                            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                        }(v, _, n)), s = function(e, t, n, i) {
                            var o, r, a, s, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                            for (r = c.shift(); r;)
                                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                if (!(a = u[l + " " + r] || u["* " + r]))
                                    for (o in u)
                                        if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(v, s, _, o), o ? (v.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (C.lastModified[c] = l), (l = _.getResponseHeader("etag")) && (C.etag[c] = l)), 204 === e || "HEAD" === v.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, r = s.data, o = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || u) + "", o ? y.resolveWith(m, [r, u, _]) : y.rejectWith(m, [_, u, a]), _.statusCode(w), w = void 0, p && g.trigger(o ? "ajaxSuccess" : "ajaxError", [_, v, o ? r : a]), b.fireWith(m, [_, u]), p && (g.trigger("ajaxComplete", [_, v]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return _
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function(e, o) {
                C[o] = function(e, t, n, i) {
                    return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                        url: e,
                        type: o,
                        dataType: i,
                        data: t,
                        success: n
                    }, C.isPlainObject(e) && e))
                }
            }), C._evalUrl = function(e) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, C.fn.extend({
                wrapAll: function(t) {
                    if (C.isFunction(t)) return this.each(function(e) {
                        C(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(n) {
                    return C.isFunction(n) ? this.each(function(e) {
                        C(this).wrapInner(n.call(this, e))
                    }) : this.each(function() {
                        var e = C(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function(t) {
                    var n = C.isFunction(t);
                    return this.each(function(e) {
                        C(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), C.expr.filters.hidden = function(e) {
                return g.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
                    if (!C.contains(e.ownerDocument || h, e)) return !0;
                    for (; e && 1 === e.nodeType;) {
                        if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type) return !0;
                        e = e.parentNode
                    }
                    var t;
                    return !1
                }(e)
            }, C.expr.filters.visible = function(e) {
                return !C.expr.filters.hidden(e)
            };
            var Kt = /%20/g,
                Yt = /\[\]$/,
                Gt = /\r?\n/g,
                Zt = /^(?:submit|button|image|reset|file)$/i,
                en = /^(?:input|select|textarea|keygen)/i;

            function tn(n, e, i, o) {
                var t;
                if (C.isArray(e)) C.each(e, function(e, t) {
                    i || Yt.test(n) ? o(n, t) : tn(n + "[" + ("object" == (void 0 === t ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, i, o)
                });
                else if (i || "object" !== C.type(e)) o(n, e);
                else
                    for (t in e) tn(n + "[" + t + "]", e[t], i, o)
            }
            C.param = function(e, t) {
                var n, i = [],
                    o = function(e, t) {
                        t = C.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (n in e) tn(n, e[n], t, o);
                return i.join("&").replace(Kt, "+")
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !G.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Gt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Gt, "\r\n")
                        }
                    }).get()
                }
            }), C.ajaxSettings.xhr = void 0 !== k.ActiveXObject ? function() {
                return this.isLocal ? sn() : 8 < h.documentMode ? an() : /^(get|post|head|put|delete|options)$/i.test(this.type) && an() || sn()
            } : an;
            var nn = 0,
                on = {},
                rn = C.ajaxSettings.xhr();

            function an() {
                try {
                    return new k.XMLHttpRequest
                } catch (e) {}
            }

            function sn() {
                try {
                    return new k.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            k.attachEvent && k.attachEvent("onunload", function() {
                for (var e in on) on[e](void 0, !0)
            }), g.cors = !!rn && "withCredentials" in rn, (rn = g.ajax = !!rn) && C.ajaxTransport(function(l) {
                var u;
                if (!l.crossDomain || g.cors) return {
                    send: function(e, r) {
                        var t, a = l.xhr(),
                            s = ++nn;
                        if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                            for (t in l.xhrFields) a[t] = l.xhrFields[t];
                        for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                        a.send(l.hasContent && l.data || null), u = function(e, t) {
                            var n, i, o;
                            if (u && (t || 4 === a.readyState))
                                if (delete on[s], u = void 0, a.onreadystatechange = C.noop, t) 4 !== a.readyState && a.abort();
                                else {
                                    o = {}, n = a.status, "string" == typeof a.responseText && (o.text = a.responseText);
                                    try {
                                        i = a.statusText
                                    } catch (e) {
                                        i = ""
                                    }
                                    n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                                } o && r(n, i, o, a.getAllResponseHeaders())
                        }, l.async ? 4 === a.readyState ? k.setTimeout(u) : a.onreadystatechange = on[s] = u : u()
                    },
                    abort: function() {
                        u && u(void 0, !0)
                    }
                }
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), C.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var i, o = h.head || C("head")[0] || h.documentElement;
                    return {
                        send: function(e, n) {
                            (i = h.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                                (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                            }, o.insertBefore(i, o.firstChild)
                        },
                        abort: function() {
                            i && i.onload(void 0, !0)
                        }
                    }
                }
            });
            var ln = [],
                un = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = ln.pop() || C.expando + "_" + jt++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
                var i, o, r, a = !1 !== e.jsonp && (un.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(un, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return r || C.error(i + " was not called"), r[0]
                }, e.dataTypes[0] = "json", o = k[i], k[i] = function() {
                    r = arguments
                }, n.always(function() {
                    void 0 === o ? C(k).removeProp(i) : k[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, ln.push(i)), r && C.isFunction(o) && o(r[0]), r = o = void 0
                }), "script") : void 0
            }), C.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || h;
                var i = w.exec(e),
                    o = !n && [];
                return i ? [t.createElement(i[1])] : (i = ce([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes))
            };
            var cn = C.fn.load;

            function dn(e) {
                return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            C.fn.load = function(e, t, n) {
                if ("string" != typeof e && cn) return cn.apply(this, arguments);
                var i, o, r, a = this,
                    s = e.indexOf(" ");
                return -1 < s && (i = C.trim(e.slice(s, e.length)), e = e.slice(0, s)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (o = "POST"), 0 < a.length && C.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), C.expr.filters.animated = function(t) {
                return C.grep(C.timers, function(e) {
                    return t === e.elem
                }).length
            }, C.offset = {
                setOffset: function(e, t, n) {
                    var i, o, r, a, s, l, u = C.css(e, "position"),
                        c = C(e),
                        d = {};
                    "static" === u && (e.style.position = "relative"), s = c.offset(), r = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === u || "fixed" === u) && -1 < C.inArray("auto", [r, l]) ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
                }
            }, C.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e)
                    });
                    var e, n, i = {
                            top: 0,
                            left: 0
                        },
                        o = this[0],
                        r = o && o.ownerDocument;
                    return r ? (e = r.documentElement, C.contains(e, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = dn(r), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            i = this[0];
                        return "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (n = e.offset()), n.top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - C.css(i, "marginTop", !0),
                            left: t.left - n.left - C.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || Fe
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, o) {
                var r = /Y/.test(o);
                C.fn[t] = function(e) {
                    return Y(this, function(e, t, n) {
                        var i = dn(e);
                        return void 0 === n ? i ? o in i ? i[o] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(r ? C(i).scrollLeft() : n, r ? n : C(i).scrollTop()) : e[t] = n)
                    }, t, e, arguments.length, null)
                }
            }), C.each(["top", "left"], function(e, n) {
                C.cssHooks[n] = Ve(g.pixelPosition, function(e, t) {
                    return t ? (t = ze(e, n), qe.test(t) ? C(e).position()[n] + "px" : t) : void 0
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(r, a) {
                C.each({
                    padding: "inner" + r,
                    content: a,
                    "": "outer" + r
                }, function(i, e) {
                    C.fn[e] = function(e, t) {
                        var n = arguments.length && (i || "boolean" != typeof e),
                            o = i || (!0 === e || !0 === t ? "margin" : "border");
                        return Y(this, function(e, t, n) {
                            var i;
                            return C.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                        }, a, n ? e : void 0, n, null)
                    }
                })
            }), C.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), C.fn.size = function() {
                return this.length
            }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return C
            });
            var fn = k.jQuery,
                pn = k.$;
            return C.noConflict = function(e) {
                return k.$ === C && (k.$ = pn), e && k.jQuery === C && (k.jQuery = fn), C
            }, e || (k.jQuery = k.$ = C), C
        }, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e),
        function(e) {
            var t = !1;
            if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), !t) {
                var n = window.Cookies,
                    i = window.Cookies = e();
                i.noConflict = function() {
                    return window.Cookies = n, i
                }
            }
        }(function() {
            function v() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) t[i] = n[i]
                }
                return t
            }
            return function e(p) {
                function h(e, t, n) {
                    var i;
                    if ("undefined" != typeof document) {
                        if (1 < arguments.length) {
                            if ("number" == typeof(n = v({
                                    path: "/"
                                }, h.defaults, n)).expires) {
                                var o = new Date;
                                o.setMilliseconds(o.getMilliseconds() + 864e5 * n.expires), n.expires = o
                            }
                            n.expires = n.expires ? n.expires.toUTCString() : "";
                            try {
                                i = JSON.stringify(t), /^[\{\[]/.test(i) && (t = i)
                            } catch (e) {}
                            t = p.write ? p.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var r = "";
                            for (var a in n) n[a] && (r += "; " + a, !0 !== n[a] && (r += "=" + n[a]));
                            return document.cookie = e + "=" + t + r
                        }
                        e || (i = {});
                        for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, u = 0; u < s.length; u++) {
                            var c = s[u].split("="),
                                d = c.slice(1).join("=");
                            this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                            try {
                                var f = c[0].replace(l, decodeURIComponent);
                                if (d = p.read ? p.read(d, f) : p(d, f) || d.replace(l, decodeURIComponent), this.json) try {
                                    d = JSON.parse(d)
                                } catch (e) {}
                                if (e === f) {
                                    i = d;
                                    break
                                }
                                e || (i[f] = d)
                            } catch (e) {}
                        }
                        return i
                    }
                }
                return (h.set = h).get = function(e) {
                    return h.call(h, e)
                }, h.getJSON = function() {
                    return h.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, h.defaults = {}, h.remove = function(e, t) {
                    h(e, "", v(t, {
                        expires: -1
                    }))
                }, h.withConverter = e, h
            }(function() {})
        }), n = window, i = function() {
            return function(n) {
                var i = {};

                function o(e) {
                    if (i[e]) return i[e].exports;
                    var t = i[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
                }
                return o.m = n, o.c = i, o.d = function(e, t, n) {
                    o.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, o.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, o.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return o.d(t, "a", t), t
                }, o.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, o.p = "", o(o.s = 1)
            }([function(e, t, n) {
                n.r(t);
                var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    },
                    o = window.device,
                    r = {},
                    a = [];
                window.device = r;
                var s = window.document.documentElement,
                    l = window.navigator.userAgent.toLowerCase(),
                    u = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];

                function c(e) {
                    return -1 !== l.indexOf(e)
                }

                function d(e) {
                    return s.className.match(new RegExp(e, "i"))
                }

                function f(e) {
                    var t = null;
                    d(e) || (t = s.className.replace(/^\s+|\s+$/g, ""), s.className = t + " " + e)
                }

                function p(e) {
                    d(e) && (s.className = s.className.replace(" " + e, ""))
                }

                function h() {
                    r.landscape() ? (p("portrait"), f("landscape"), v("landscape")) : (p("landscape"), f("portrait"), v("portrait")), y()
                }

                function v(e) {
                    for (var t in a) a[t](e)
                }
                r.macos = function() {
                    return c("mac")
                }, r.ios = function() {
                    return r.iphone() || r.ipod() || r.ipad()
                }, r.iphone = function() {
                    return !r.windows() && c("iphone")
                }, r.ipod = function() {
                    return c("ipod")
                }, r.ipad = function() {
                    return c("ipad")
                }, r.android = function() {
                    return !r.windows() && c("android")
                }, r.androidPhone = function() {
                    return r.android() && c("mobile")
                }, r.androidTablet = function() {
                    return r.android() && !c("mobile")
                }, r.blackberry = function() {
                    return c("blackberry") || c("bb10") || c("rim")
                }, r.blackberryPhone = function() {
                    return r.blackberry() && !c("tablet")
                }, r.blackberryTablet = function() {
                    return r.blackberry() && c("tablet")
                }, r.windows = function() {
                    return c("windows")
                }, r.windowsPhone = function() {
                    return r.windows() && c("phone")
                }, r.windowsTablet = function() {
                    return r.windows() && c("touch") && !r.windowsPhone()
                }, r.fxos = function() {
                    return (c("(mobile") || c("(tablet")) && c(" rv:")
                }, r.fxosPhone = function() {
                    return r.fxos() && c("mobile")
                }, r.fxosTablet = function() {
                    return r.fxos() && c("tablet")
                }, r.meego = function() {
                    return c("meego")
                }, r.cordova = function() {
                    return window.cordova && "file:" === location.protocol
                }, r.nodeWebkit = function() {
                    return "object" === i(window.process)
                }, r.mobile = function() {
                    return r.androidPhone() || r.iphone() || r.ipod() || r.windowsPhone() || r.blackberryPhone() || r.fxosPhone() || r.meego()
                }, r.tablet = function() {
                    return r.ipad() || r.androidTablet() || r.blackberryTablet() || r.windowsTablet() || r.fxosTablet()
                }, r.desktop = function() {
                    return !r.tablet() && !r.mobile()
                }, r.television = function() {
                    for (var e = 0; e < u.length;) {
                        if (c(u[e])) return !0;
                        e++
                    }
                    return !1
                }, r.portrait = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("portrait") : 1 < window.innerHeight / window.innerWidth
                }, r.landscape = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("landscape") : window.innerHeight / window.innerWidth < 1
                }, r.noConflict = function() {
                    return window.device = o, this
                }, r.ios() ? r.ipad() ? f("ios ipad tablet") : r.iphone() ? f("ios iphone mobile") : r.ipod() && f("ios ipod mobile") : r.macos() ? f("macos desktop") : r.android() ? r.androidTablet() ? f("android tablet") : f("android mobile") : r.blackberry() ? r.blackberryTablet() ? f("blackberry tablet") : f("blackberry mobile") : r.windows() ? r.windowsTablet() ? f("windows tablet") : r.windowsPhone() ? f("windows mobile") : f("windows desktop") : r.fxos() ? r.fxosTablet() ? f("fxos tablet") : f("fxos mobile") : r.meego() ? f("meego mobile") : r.nodeWebkit() ? f("node-webkit") : r.television() ? f("television") : r.desktop() && f("desktop"), r.cordova() && f("cordova"), r.onChangeOrientation = function(e) {
                    "function" == typeof e && a.push(e)
                };
                var m = "resize";

                function g(e) {
                    for (var t = 0; t < e.length; t++)
                        if (r[e[t]]()) return e[t];
                    return "unknown"
                }

                function y() {
                    r.orientation = g(["portrait", "landscape"])
                }
                Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (m = "orientationchange"), window.addEventListener ? window.addEventListener(m, h, !1) : window.attachEvent ? window.attachEvent(m, h) : window[m] = h, h(), r.type = g(["mobile", "tablet", "desktop"]), r.os = g(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"]), y(), t.default = r
            }, function(e, t, n) {
                e.exports = n(0)
            }]).default
        }, "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = i() : "function" == typeof define && define.amd ? define([], i) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports.device = i() : n.device = i(),
        function(e, t, n) {
            var u = [],
                c = [],
                i = {
                    _version: "3.5.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function(e, t, n) {
                        c.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        c.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                d = function() {};
            d.prototype = i, d = new d;
            var o = t.documentElement,
                r = "svg" === o.nodeName.toLowerCase();
            d.addTest("csspointerevents", function() {
                    var e = function() {
                        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : r ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
                    }("a").style;
                    return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
                }),
                function() {
                    var e, t, n, i, o, r, a, s;
                    for (var l in c)
                        if (c.hasOwnProperty(l)) {
                            if (e = [], (t = c[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (a = t.fn, s = "function", i = (void 0 === a ? "undefined" : _typeof(a)) === s ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (r = e[o].split(".")).length ? d[r[0]] = i : (!d[r[0]] || d[r[0]] instanceof Boolean || (d[r[0]] = new Boolean(d[r[0]])), d[r[0]][r[1]] = i), u.push((i ? "" : "no-") + r.join("-"))
                        }
                }(),
                function(e) {
                    var t = o.className,
                        n = d._config.classPrefix || "";
                    if (r && (t = t.baseVal), d._config.enableJSClass) {
                        var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(i, "$1" + n + "js$2")
                    }
                    d._config.enableClasses && (t += " " + n + e.join(" " + n), r ? o.className.baseVal = t : o.className = t)
                }(u), delete i.addTest, delete i.addAsyncTest;
            for (var a = 0; a < d._q.length; a++) d._q[a]();
            e.Modernizr = d
        }(window, document), Array.prototype.find || (Array.prototype.find = function(e) {
            if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var t, n = Object(this), i = n.length >>> 0, o = arguments[1], r = 0; r < i; r++)
                if (t = n[r], e.call(o, t, r, n)) return t
        });
    var o = function() {
        function e() {
            _classCallCheck(this, e), this.lib = {}
        }
        return _createClass(e, [{
            key: "on",
            value: function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "on",
                    i = /(.+)\.(.+)/,
                    o = null;
                if (i.test(e)) {
                    var r = i.exec(e);
                    e = r[1], o = r[2]
                }
                "function" == typeof t && (void 0 === this.lib[e] && (this.lib[e] = []), this.lib[e].push({
                    f: t,
                    type: n,
                    id: o
                }))
            }
        }, {
            key: "one",
            value: function(e, t) {
                this.on(e, t, "one")
            }
        }, {
            key: "off",
            value: function(n) {
                var i = this;
                $.each(this.lib, function(e, t) {
                    i.lib[e] = t.filter(function(e) {
                        return e.id !== n
                    })
                })
            }
        }, {
            key: "run",
            value: function(e) {
                var n = this,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                Array.isArray(this.lib[e]) && this.lib[e].forEach(function(t) {
                    t.f(i), "one" === t.type && (n.lib[e] = n.lib[e].filter(function(e) {
                        return e !== t
                    }))
                })
            }
        }]), e
    }();
    window.playerQueue = new o;
    var S = function() {
        function n(e, t) {
            _classCallCheck(this, n), this.arrow_svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 451.847 451.847'><path d='M226 354.7c-8.2 0-16.3-3-22.4-9.3L9.3 151.2C-3 138.8-3 118.8 9.3 106.4 21.6 94 41.7 94 54 106.4l172 172 171.8-172c12.4-12.3 32.4-12.3 44.8 0 12.3 12.4 12.3 32.4 0 44.8L248.3 345.4c-6.2 6.2-14.3 9.3-22.4 9.3z' class='fill'/></svg>", this.block = $(e), this.id = t, this.body = $("body"), this.select = this.block.find("select"), this.mobileCheck(), this.setListeners(), !0 !== this.isRawMobile && (this.updateValues(), this.createButton(), this.createDropdown(), this.outsideClick(), this.windowResize())
        }
        return _createClass(n, [{
            key: "update",
            value: function() {
                !0 !== this.isRawMobile && (this.updateValues(), this.updateButton(), this.updateDropdown())
            }
        }, {
            key: "show",
            value: function() {
                0 === this.buttonWidth && this.calculateSizes(), this.block.css("width", this.buttonWidth + "px"), this.block[0].offsetHeight, this.block.addClass("active").css("width", this.dropdownWidth + "px"), this.body.addClass("active-" + this.id + "-selector")
            }
        }, {
            key: "hide",
            value: function() {
                var e = this;
                this.block.removeClass("active"), this.body.removeClass("active-" + this.id + "-selector"), this.block.css("width", this.buttonWidth + "px"), setTimeout(function() {
                    e.block.css("width", "")
                }, 250)
            }
        }, {
            key: "mobileCheck",
            value: function() {
                if (device.mobile()) {
                    if (!Modernizr.csspointerevents) return this.isRawMobile = !0, this.block.addClass("raw-mobile"), !1;
                    this.block.addClass("mobile")
                }
            }
        }, {
            key: "updateValues",
            value: function() {
                var i = this;
                this.values = [], this.select.find("option").each(function(e, t) {
                    var n = t.getAttribute("data-title").replace(".Subtitles", "").replace("FSG ", "");
                    i.values.push({
                        name: n,
                        link: t.value,
                        translationType: t.getAttribute("data-translation-type"),
                        episodeCount: t.getAttribute("data-episode-count"),
                        selected: i.select.val() === t.value
                    })
                })
            }
        }, {
            key: "createDropdown",
            value: function() {
                this.select.after("<div class='dropdown'><div class='dropdown-content'></div></div>"), this.dropdown = this.block.find(".dropdown-content"), this.updateDropdown()
            }
        }, {
            key: "updateDropdown",
            value: function() {
                var o = this;
                this.dropdown.empty(), this.values.forEach(function(e) {
                    var t = e.selected ? "selected" : "",
                        n = "";
                    "subtitles" === e.translationType && (n = '<span class="subtitle-icon">SUB</span>');
                    var i = "";
                    !0 === window.translationEpisodeCount && "string" == typeof e.episodeCount && "" !== e.episodeCount && (i = '<span class="subtitle-icon">' + e.episodeCount + " эп.</span>"), o.dropdown.append("\n          <div data-link='" + e.link + "' class='item " + t + '\'>\n            <div class="inner-item">\n              <span>' + e.name + "</span>" + i + n + "\n            </div>\n          </div>\n        ")
                }), this.createSearchBar(), this.dropdown.find("div.item").on("click", function(e) {
                    var t = $(e.currentTarget),
                        n = t.attr("data-link");
                    t.hasClass("selected") || t.hasClass("search-block") || (o.select.val(n).change(), o.dropdown.find("div").removeClass("selected"), t.addClass("selected"), o.updateValues(), o.updateButton(), o.calculateButtonWidth(), o.hide())
                }), setTimeout(function() {
                    var e = o.dropdown.find(".selected")[0].offsetTop;
                    o.dropdown[0].scrollTop = e - 90
                }, 300), this.calculateSizes()
            }
        }, {
            key: "calculateSizes",
            value: function() {
                this.calculateButtonWidth(), this.calculateDropdownWidth(), this.calculateDropdownHeight()
            }
        }, {
            key: "calculateButtonWidth",
            value: function() {
                this.block.hasClass("active") || (this.buttonWidth = this.block[0].getBoundingClientRect().width)
            }
        }, {
            key: "calculateDropdownWidth",
            value: function() {
                var i = this;
                this.dropdownWidth = this.buttonWidth, this.dropdown.find(".inner-item").each(function(e, t) {
                    var n = t.getBoundingClientRect().width + 30;
                    n > i.buttonWidth && n > i.dropdownWidth && (i.dropdownWidth = n)
                })
            }
        }, {
            key: "calculateDropdownHeight",
            value: function() {
                var e = window.innerHeight,
                    t = this.dropdown[0].getBoundingClientRect().y;
                this.dropdown.css("max-height", e - (t + 25))
            }
        }, {
            key: "createSearchBar",
            value: function() {
                var t = this;
                this.block.find(".search-block").remove(), 15 < this.values.length && this.dropdown.parent().prepend("<div class='search-block'><input placeholder='Поиск' /><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.966 56.966\"><path class='fill' d=\"M55 52L41.7 37.7C45 33.6 47 28.4 47 23 47 10.3 36.7 0 24 0S1 10.3 1 23s10.3 23 23 23c4.7 0 9.3-1.4 13.2-4.2L50.8 56c.6.6 1.4 1 2.2 1 .8 0 1.5-.3 2-1 1.3-1 1.3-3 0-4zM24 6c9.4 0 17 7.6 17 17s-7.6 17-17 17S7 32.4 7 23 14.6 6 24 6z\"/></svg></div>"), this.block.find(".search-block input").on("input", function(e) {
                    var i = $(e.currentTarget).val().toLowerCase();
                    t.dropdown.find("div span:first-child").each(function(e, t) {
                        var n = $(t);
                        n.html().toLowerCase().substr(0, i.length) === i ? n.parent().parent().show() : n.parent().parent().hide()
                    })
                })
            }
        }, {
            key: "createButton",
            value: function() {
                var t = this,
                    e = "";
                "subtitles" === this.selectedValue.translationType && (e = '<span class="subtitle-icon">SUB</span>'), this.select.after("\n        <div class='select-button'>\n          <span>" + this.selectedValue.name + "</span>\n          " + e + "\n          " + this.arrow_svg + "\n        </div>\n      "), this.selectButton = this.block.find(".select-button"), this.selectButton.on("click", function() {
                    if (t.block.hasClass("active")) t.hide();
                    else {
                        t.show();
                        var e = t.block.find(".search-block input");
                        e.length && setTimeout(function() {
                            e.focus()
                        }, 300)
                    }
                })
            }
        }, {
            key: "updateButton",
            value: function() {
                var e = "";
                "subtitles" === this.selectedValue.translationType && (e = '<span class="subtitle-icon">SUB</span>'), this.selectButton.html("\n        <span>" + this.selectedValue.name + "</span>\n        " + e + "\n        " + this.arrow_svg + "\n      ")
            }
        }, {
            key: "outsideClick",
            value: function() {
                var t = this;
                $(document).on("click", function(e) {
                    $(e.target).closest(t.block).length || t.hide()
                })
            }
        }, {
            key: "setListeners",
            value: function() {
                var t = this,
                    e = function(e) {
                        "click" === e.data.title && t.hide()
                    };
                window.addEventListener ? window.addEventListener("message", e) : window.attachEvent("onmessage", e)
            }
        }, {
            key: "windowResize",
            value: function() {
                var e = this;
                $(window).on("resize", function() {
                    e.calculateSizes()
                })
            }
        }, {
            key: "isBrowser",
            value: function(e) {
                return -1 !== navigator.userAgent.indexOf(e)
            }
        }, {
            key: "selectedOption",
            get: function() {
                var e = this.select.val();
                return this.select.find("option[value='" + e + "']")
            }
        }, {
            key: "selectedValue",
            get: function() {
                return this.values.find(function(e) {
                    return !0 === e.selected
                })
            }
        }]), n
    }();
    $(function() {
        $("body").on("change", ".serial-translations-box select, .movie-translations-box select", function(e) {
            var t = $(e.currentTarget),
                n = E(t.find("option[value='" + t.val() + "']")),
                i = null,
                o = null;
            $(".serial-seasons-box").length && (i = $(".serial-seasons-box select option:selected").val()), $(".serial-series-box").length && (o = $(".serial-series-box select option:selected").val()), null !== i && (n += "&season=" + i), null !== o && (n += "&episode=" + o), window.location.replace(n)
        })
    }), window.isIframe = function() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    };
    var r = function() {
        function e() {
            _classCallCheck(this, e), this.fns = [], this.ready = !1, this._getData()
        }
        return _createClass(e, [{
            key: "onReady",
            value: function(e) {
                if ("function" != typeof e) return !1;
                this.ready ? e.call() : this.fns.push(e)
            }
        }, {
            key: "get",
            value: function(e) {
                return !!this.ready && window.localStorage.getItem(String(e))
            }
        }, {
            key: "set",
            value: function(e, t) {
                return !!this.ready && window.localStorage.setItem(String(e), String(t))
            }
        }, {
            key: "remove",
            value: function(e) {
                return !!this.ready && window.localStorage.removeItem(String(e))
            }
        }, {
            key: "clear",
            value: function() {
                var t = this;
                if (!this.ready) return !1;
                ["seria-progress", "video-progress", "season-last-episode", "serial-last-episode", "serial-progress", "season-progress", "episode", "uv"].forEach(function(e) {
                    t.remove(e)
                })
            }
        }, {
            key: "_runReady",
            value: function() {
                var e = this;
                this.fns.forEach(function(t) {
                    t.call(), e.fns = e.fns.filter(function(e) {
                        return e !== t
                    })
                })
            }
        }, {
            key: "_getData",
            value: function() {
                this._isSupported && (this.ready = !0, this._runReady())
            }
        }, {
            key: "_isSupported",
            get: function() {
                try {
                    var e = window.localStorage,
                        t = "test_local_storage_9E9kxc6aDSd";
                    return e.setItem(t, t), e.removeItem(t), !0
                } catch (e) {
                    return !1
                }
            }
        }]), e
    }();

    function N(e) {
        var t = ~~(e / 3600),
            n = ~~(e % 3600 / 60),
            i = ~~e % 60,
            o = "";
        return 0 < t && (o += t + ":" + (n < 10 ? "0" : "")), o += n + ":" + (i < 10 ? "0" : ""), o += "" + i
    }! function() {
        function e() {
            _classCallCheck(this, e), this.ready = !1, this.fns = [], this._addListeners()
        }
        _createClass(e, [{
            key: "onReady",
            value: function(e) {
                !0 === this.ready ? e.call() : "function" == typeof e && this.fns.push(e)
            }
        }, {
            key: "_runReady",
            value: function() {
                var e = this;
                this.fns.forEach(function(t) {
                    t.call(), e.fns = e.fns.filter(function(e) {
                        return e !== t
                    })
                })
            }
        }, {
            key: "_addListeners",
            value: function() {
                var t = this,
                    e = function(e) {
                        "updateIframe" === e.data.title && (t.ready = !0, t._runReady())
                    };
                window.addEventListener ? window.addEventListener("message", e) : window.attachEvent("onmessage", e)
            }
        }])
    }();
    var a = function() {
        function e() {
            _classCallCheck(this, e), this._addListeners()
        }
        return _createClass(e, [{
            key: "current_episode",
            value: function(e, t, n) {
                var i = {
                    episode: null,
                    season: null
                };
                e && (i.episode = Number(e.selectedOption.val())), window.seasonNumber && (i.season = Number(window.seasonNumber)), t && (i.season = Number(t.selectedOption.val())), i.translation = {}, i.translation.id = window.translationId ? Number(window.translationId) : null, i.translation.title = window.translationTitle, n && (i.translation = {
                    id: Number(n.selectedOption.attr("data-id")),
                    title: n.selectedOption.attr("data-title")
                }), this._sendPostMessage("kodik_player_current_episode", i)
            }
        }, {
            key: "time_update",
            value: function(e) {
                var t = Math.round(e);
                this.lastTime && t > this.lastTime && this._sendPostMessage("kodik_player_time_update", t), this.lastTime = t
            }
        }, {
            key: "duration_update",
            value: function(e) {
                this._sendPostMessage("kodik_player_duration_update", e)
            }
        }, {
            key: "video_started",
            value: function() {
                this._sendPostMessage("kodik_player_video_started")
            }
        }, {
            key: "video_ended",
            value: function() {
                this._sendPostMessage("kodik_player_video_ended")
            }
        }, {
            key: "volume_change",
            value: function(e) {
                this._sendPostMessage("kodik_player_volume_change", e)
            }
        }, {
            key: "play",
            value: function() {
                this._sendPostMessage("kodik_player_play")
            }
        }, {
            key: "pause",
            value: function() {
                this._sendPostMessage("kodik_player_pause")
            }
        }, {
            key: "seek",
            value: function(e) {
                this._sendPostMessage("kodik_player_seek", e)
            }
        }, {
            key: "skip_button",
            value: function(e) {
                this._sendPostMessage("kodik_player_skip_button", e)
            }
        }, {
            key: "enter_pip_mode",
            value: function() {
                this._sendPostMessage("kodik_player_enter_pip")
            }
        }, {
            key: "exit_pip_mode",
            value: function() {
                this._sendPostMessage("kodik_player_exit_pip")
            }
        }, {
            key: "advertEnded",
            value: function() {
                this._sendPostMessage("kodik_player_advert_ended")
            }
        }, {
            key: "_sendPostMessage",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                try {
                    t ? window.parent.postMessage({
                        key: e,
                        value: t
                    }, "*") : window.parent.postMessage({
                        key: e
                    }, "*")
                } catch (e) {
                    console.warn("Player data send error")
                }
            }
        }, {
            key: "_addListeners",
            value: function() {
                var i = this,
                    e = function(e) {
                        var t = e.data.value;
                        if ("kodik_player_api" === e.data.key)
                            if (window.player && window.player.api) {
                                if (t && "play" === t.method) window.player.api.play();
                                else if (t && "pause" === t.method) window.player.api.pause();
                                else if (t && "seek" === t.method && "number" == typeof t.seconds) window.player.api.seek(t.seconds);
                                else if (t && "volume" === t.method && "number" == typeof t.volume && 0 <= t.volume && t.volume <= 1) window.player.api.setVolume(t.volume);
                                else if (t && "mute" === t.method) window.player.api.mute();
                                else if (t && "unmute" === t.method) window.player.api.unmute();
                                else if (t && "enter_pip" === t.method) window.player.pip.enable();
                                else if (t && "exit_pip" === t.method) window.player.pip.disable();
                                else if (t && "get_time" === t.method) {
                                    var n = window.player.flowApi.video.time;
                                    i._sendPostMessage("kodik_player_time", n)
                                }
                            } else t && "play" === t.method && !window.playerLoaded && I()
                    };
                window.addEventListener ? window.addEventListener("message", e) : window.attachEvent("onmessage", e)
            }
        }]), e
    }();
    $(function() {
        $(".preview-confirmation").show(), $(".pc-confirm").on("click", function() {
            $(".preview-confirmation").hide(),
                function() {
                    try {
                        var e = window.sessionStorage,
                            t = "test_session_storage_9E9kxc6aDSd";
                        return e.setItem(t, t), e.removeItem(t), !0
                    } catch (e) {
                        return !1
                    }
                }() && window.sessionStorage.setItem("minAgeConfirmed", "true")
        }), $(".pc-decline").on("click", function() {
            $(".pc-main-warning").text("Доступ запрещен"), $(".pc-buttons").hide()
        })
    });
    var s;

    function A() {
        var e = $(".resume-info"),
            t = $(".resume-button");
        if (e.length && t.length) {
            var n = e[0].offsetWidth,
                i = t[0].offsetWidth;
            0 === n ? setTimeout(A, 200) : e.css("left", Math.round((i - n) / 2) + "px")
        }
    }
    s = function(r) {
        function n(e, t) {
            function n(e) {
                void 0 !== e.open && (e.open = !e.open)
            }
            var i = function(e) {
                    for (var t = [], n = e.parentNode;
                        (i = n) && (0 === i.offsetWidth || 0 === i.offsetHeight || !1 === i.open);) t.push(n), n = n.parentNode;
                    var i;
                    return t
                }(e),
                o = i.length,
                r = [],
                a = e[t];
            if (o) {
                for (var s = 0; s < o; s++) r[s] = i[s].style.cssText, i[s].style.setProperty ? i[s].style.setProperty("display", "block", "important") : i[s].style.cssText += ";display: block !important", i[s].style.height = "0", i[s].style.overflow = "hidden", i[s].style.visibility = "hidden", n(i[s]);
                a = e[t];
                for (var l = 0; l < o; l++) i[l].style.cssText = r[l], n(i[l])
            }
            return a
        }

        function i(e, t) {
            var n = parseFloat(e);
            return Number.isNaN(n) ? t : n
        }

        function o(e) {
            return e.charAt(0).toUpperCase() + e.substr(1)
        }

        function a(e, t) {
            if (this.$window = r(window), this.$document = r(document), this.$element = r(e), this.options = r.extend({}, c, t), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = d.orientation[this.orientation].dimension, this.DIRECTION = d.orientation[this.orientation].direction, this.DIRECTION_STYLE = d.orientation[this.orientation].directionStyle, this.COORDINATE = d.orientation[this.orientation].coordinate, this.polyfill && u) return !1;
            this.identifier = "js-" + s + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = r('<div class="' + this.options.fillClass + '" />'), this.$handle = r('<div class="' + this.options.handleClass + '" />'), this.$range = r('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                opacity: "0"
            }), this.handleDown = r.proxy(this.handleDown, this), this.handleMove = r.proxy(this.handleMove, this), this.handleEnd = r.proxy(this.handleEnd, this), this.init();
            var n, i, o = this;
            this.$window.on("resize." + this.identifier, (n = function() {
                ! function(e, t) {
                    var n = Array.prototype.slice.call(arguments, 2);
                    setTimeout(function() {
                        return e.apply(null, n)
                    }, t)
                }(function() {
                    o.update(!1, !1)
                }, 300)
            }, i = (i = 20) || 100, function() {
                if (!n.debouncing) {
                    var e = Array.prototype.slice.apply(arguments);
                    n.lastReturnVal = n.apply(window, e), n.debouncing = !0
                }
                return clearTimeout(n.debounceTimeout), n.debounceTimeout = setTimeout(function() {
                    n.debouncing = !1
                }, i), n.lastReturnVal
            })), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function(e, t) {
                if (!t || t.origin !== o.identifier) {
                    var n = e.target.value,
                        i = o.getPositionFromValue(n);
                    o.setPosition(i)
                }
            })
        }
        Number.isNaN = Number.isNaN || function(e) {
            return "number" == typeof e && e != e
        };
        var e, s = "rangeslider",
            l = 0,
            u = ((e = document.createElement("input")).setAttribute("type", "range"), "text" !== e.type),
            c = {
                polyfill: !0,
                orientation: "horizontal",
                rangeClass: "rangeslider",
                disabledClass: "rangeslider--disabled",
                activeClass: "rangeslider--active",
                horizontalClass: "rangeslider--horizontal",
                verticalClass: "rangeslider--vertical",
                fillClass: "rangeslider__fill",
                handleClass: "rangeslider__handle",
                startEvent: ["mousedown", "touchstart", "pointerdown"],
                moveEvent: ["mousemove", "touchmove", "pointermove"],
                endEvent: ["mouseup", "touchend", "pointerup"]
            },
            d = {
                orientation: {
                    horizontal: {
                        dimension: "width",
                        direction: "left",
                        directionStyle: "left",
                        coordinate: "x"
                    },
                    vertical: {
                        dimension: "height",
                        direction: "top",
                        directionStyle: "bottom",
                        coordinate: "y"
                    }
                }
            };
        return a.prototype.init = function() {
            this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit()
        }, a.prototype.update = function(e, t) {
            (e = e || !1) && (this.min = i(this.$element[0].getAttribute("min"), 0), this.max = i(this.$element[0].getAttribute("max"), 100), this.value = i(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = i(this.$element[0].getAttribute("step"), 1)), this.handleDimension = n(this.$handle[0], "offset" + o(this.DIMENSION)), this.rangeDimension = n(this.$range[0], "offset" + o(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, t)
        }, a.prototype.handleDown = function(e) {
            if (e.preventDefault(), this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), this.$range.addClass(this.options.activeClass), !(-1 < (" " + e.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass))) {
                var t = this.getRelativePosition(e),
                    n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                    i = this.getPositionFromNode(this.$handle[0]) - n,
                    o = "vertical" === this.orientation ? this.maxHandlePos - (t - this.grabPos) : t - this.grabPos;
                this.setPosition(o), i <= t && t < i + this.handleDimension && (this.grabPos = t - i)
            }
        }, a.prototype.handleMove = function(e) {
            e.preventDefault();
            var t = this.getRelativePosition(e),
                n = "vertical" === this.orientation ? this.maxHandlePos - (t - this.grabPos) : t - this.grabPos;
            this.setPosition(n)
        }, a.prototype.handleEnd = function(e) {
            e.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$range.removeClass(this.options.activeClass), this.$element.trigger("change", {
                origin: this.identifier
            }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
        }, a.prototype.cap = function(e, t, n) {
            return e < t ? t : n < e ? n : e
        }, a.prototype.setPosition = function(e, t) {
            var n, i;
            void 0 === t && (t = !0), n = this.getValueFromPosition(this.cap(e, 0, this.maxHandlePos)), i = this.getPositionFromValue(n), this.$fill[0].style[this.DIMENSION] = i + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = i + "px", this.setValue(n), this.position = i, this.value = n, t && this.onSlide && "function" == typeof this.onSlide && this.onSlide(i, n)
        }, a.prototype.getPositionFromNode = function(e) {
            for (var t = 0; null !== e;) t += e.offsetLeft, e = e.offsetParent;
            return t
        }, a.prototype.getRelativePosition = function(e) {
            var t = o(this.COORDINATE),
                n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                i = 0;
            return void 0 !== e.originalEvent["client" + t] ? i = e.originalEvent["client" + t] : e.originalEvent.touches && e.originalEvent.touches[0] && void 0 !== e.originalEvent.touches[0]["client" + t] ? i = e.originalEvent.touches[0]["client" + t] : e.currentPoint && void 0 !== e.currentPoint[this.COORDINATE] && (i = e.currentPoint[this.COORDINATE]), i - n
        }, a.prototype.getPositionFromValue = function(e) {
            var t;
            return t = (e - this.min) / (this.max - this.min), Number.isNaN(t) ? 0 : t * this.maxHandlePos
        }, a.prototype.getValueFromPosition = function(e) {
            var t, n;
            return t = e / (this.maxHandlePos || 1), n = this.step * Math.round(t * (this.max - this.min) / this.step) + this.min, Number(n.toFixed(this.toFixed))
        }, a.prototype.setValue = function(e) {
            e === this.value && "" !== this.$element[0].value || this.$element.val(e).trigger("input", {
                origin: this.identifier
            })
        }, a.prototype.destroy = function() {
            this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + s), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
        }, r.fn[s] = function(n) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var e = r(this),
                    t = e.data("plugin_" + s);
                t || e.data("plugin_" + s, t = new a(this, n)), "string" == typeof n && t[n].apply(t, i)
            })
        }, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
    }, "function" == typeof define && define.amd ? define(["jquery"], s) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = s(require("jquery")) : s(jQuery), window.PlayerThumbnails = function() {
        function i(e, t) {
            var n = this;
            _classCallCheck(this, i), this.slideshowInterval = t, this.images = [], this.loadedImages = [], this.isLoaded = !1, e.forEach(function(e) {
                n.images.push({
                    src: e
                })
            }), window.addEventListener("load", function() {
                n.load()
            })
        }
        return _createClass(i, [{
            key: "load",
            value: function() {
                var n = this;
                this.images.forEach(function(e) {
                    if (!n.slideshowInterval && 0 !== n.images.indexOf(e)) return !1;
                    var t = new Image;
                    t.addEventListener && t.addEventListener("load", function() {
                        n.loadListener(e)
                    }), t.src = e.src, e.tag = t
                })
            }
        }, {
            key: "loadListener",
            value: function(e) {
                void 0 !== window.backgroundImage && backgroundImage.remove(), this.loadedImages.push(e), this.isLoaded || (this.isLoaded = !0, this.startAnimation())
            }
        }, {
            key: "startAnimation",
            value: function() {
                var e = this,
                    t = document.querySelector("div.play_background");
                if (t) {
                    var n = this.loadedImages[0],
                        i = n.tag;
                    t.insertBefore(i, t.firstChild), $(i).css("opacity"), i.classList.add("active"), n.current = !0, this.animationInterval = setInterval(function() {
                        e.showNextImage()
                    }, this.slideshowInterval)
                }
            }
        }, {
            key: "showNextImage",
            value: function() {
                var e = document.querySelector("div.play_background");
                if (e && !(this.loadedImages.length < 2)) {
                    var t = void 0,
                        n = $.grep(this.loadedImages, function(e) {
                            return !0 === e.current
                        })[0];
                    if (n) {
                        var i = this.loadedImages.length - 1,
                            o = this.loadedImages.indexOf(n);
                        t = o + 1 < i ? this.loadedImages[o + 1] : this.loadedImages[0], n.current = !1, t.current = !0, e.insertBefore(t.tag, e.firstChild), $(t.tag).css("opacity"), t.tag.classList.add("active"), n.tag.classList.remove("active"), setTimeout(function() {
                            $(n.tag).remove()
                        }, 1e3)
                    }
                }
            }
        }]), i
    }(), window.BackgroundImage = function() {
        function t(e) {
            _classCallCheck(this, t), this.src = e, this.image = null, this.allowed = !0, this.load()
        }
        return _createClass(t, [{
            key: "load",
            value: function() {
                var e = this;
                this.image = new Image, this.image.addEventListener && this.image.addEventListener("load", function() {
                    e.loadListener()
                }), this.image.src = this.src
            }
        }, {
            key: "loadListener",
            value: function() {
                if (this.allowed) {
                    var e = document.querySelector("div.play_background");
                    e && (e.insertBefore(this.image, e.firstChild), $(this.image).css("opacity"), this.image.classList.add("active"))
                }
            }
        }, {
            key: "remove",
            value: function() {
                if (this.allowed = !1, this.image) {
                    var e = $(this.image);
                    e.removeClass("active"), setTimeout(function() {
                        e.remove()
                    }, 1e3)
                }
            }
        }]), t
    }();
    var l = function() {
        function e() {
            _classCallCheck(this, e), this.prepared = !1, this.videos = {}
        }
        return _createClass(e, [{
            key: "prepare",
            value: function(e) {
                var n = this;
                if (void 0 === e) throw "ids parameter is mandatory";
                if (this.prepared) return !1;
                this.prepared = !0, e.forEach(function(e) {
                    var t = n.videos[e] ? n.videos[e] : document.createElement("video");
                    t.load(), n.videos[e] = t
                })
            }
        }, {
            key: "prepareCount",
            value: function(e) {
                for (var t = [], n = 1; n <= e; n++) t.push(n);
                this.prepare(t)
            }
        }, {
            key: "get",
            value: function(e) {
                return this.videos[e] || (this.videos[e] = document.createElement("video")), this.videos[e]
            }
        }, {
            key: "getArray",
            value: function(e, t) {
                for (var n = [], i = e; i <= t; i++) n.push(this.get(i));
                return n
            }
        }]), e
    }();

    function I() {
        "undefined" != typeof playerThumbnails && clearInterval(playerThumbnails.animationInterval), O || !0 !== window.getPlayerClicked && (window.getPlayerClicked = !0, L({
            type: videoInfo.type,
            hash: videoInfo.hash,
            id: videoInfo.id,
            link: videoInfo.link,
            secret: videoInfo.secret,
            uid: videoInfo.uid,
            beforeCallback: function() {
                $(".play_button").removeClass("play_button").addClass("play_button_loading"), $(".play_button_loading").after("<div class='play_loading'><svg xmlns='http://www.w3.org/2000/svg' version='1' width='100%' height='100%' viewBox='0 0 128 128'><g><path class='animated' d='M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z'/><path class='bg' d='M67.642 24.324L67.65.05a63.6 63.6 0 0 1 38.31 15.626L88.777 32.86a39.5 39.5 0 0 0-21.142-8.53zM94.63 38.52l17.17-17.16a63.6 63.6 0 0 1 16.04 38.14h-24.3a39.5 39.5 0 0 0-8.92-20.98zM103.676 67.642l24.275.007a63.6 63.6 0 0 1-15.626 38.31L95.14 88.777a39.5 39.5 0 0 0 8.53-21.142zM89.48 94.63l17.16 17.17a63.6 63.6 0 0 1-38.14 16.04v-24.3a39.5 39.5 0 0 0 20.98-8.92zM60.358 103.676l-.007 24.275a63.6 63.6 0 0 1-38.31-15.626L39.223 95.14a39.5 39.5 0 0 0 21.142 8.53zM33.37 89.48L16.2 106.64A63.6 63.6 0 0 1 .16 68.5h24.3a39.5 39.5 0 0 0 8.92 20.98zM24.324 60.358L.05 60.35a63.6 63.6 0 0 1 15.626-38.31L32.86 39.223a39.5 39.5 0 0 0-8.53 21.142z'/><animateTransform attributeName='transform' type='rotate' values='0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64' calcMode='discrete' dur='720ms' repeatCount='indefinite'/></g></svg></div>")
            },
            successCallback: function(t) {
                $(".resume-button").removeClass("active"), playerLink.forEach(function(e) {
                    m(e, function() {
                        $(".play_background, .play_button_loading, .share_button, .play_loading, .preview-icons").remove(), t.script && (advertScript = t.script), $.extend(playerSettings, j(t)), O = !0, t.domain, v()
                    })
                })
            },
            errorCallback: function() {
                $(".play_background, .play_button, .share_button").remove(), $(".player_box").append('<div style="height: 100%;" class="promo-error"><table><tr><td><div class="promo-error-box"><div class="message">Извините, но эта видеозапись в данный момент недоступна</div></div></td></tr></table></div>')
            }
        }))
    }

    function L() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = {
                d: domain,
                d_sign: d_sign,
                pd: pd,
                pd_sign: pd_sign,
                ref: ref,
                ref_sign: ref_sign,
                bad_user: playerSettings.badUser
            };
        void 0 !== t.uid && (e.uid = t.uid), void 0 !== t.type && (e.type = t.type), void 0 !== t.hash && (e.hash = t.hash), void 0 !== t.id && (e.id = t.id), void 0 !== t.link && (e.link = t.link), void 0 !== t.secret && (e.secret = t.secret), userInfo && "object" === _typeof(userInfo.info) && (e.info = JSON.stringify(userInfo.info)), void 0 !== window.advertTest && (e.a_test = !0), !0 === t.isUpdate && (e.isUpdate = !0), $.ajax({
            type: "POST",
            url: atob("L3ZkdQ=="),
            cache: !1,
            dataType: "json",
            data: e,
            beforeSend: function() {
                "function" == typeof t.beforeCallback && t.beforeCallback()
            },
            success: function(e) {
                "function" == typeof t.successCallback && t.successCallback(e)
            },
            error: function() {
                "function" == typeof t.errorCallback && t.errorCallback()
            }
        })
    }
    window.parseStartfrom = function(e) {
        e = e.replace(/\s/g, "");
        var t = {},
            n = "[0-9]+(?::[0-9]+){0,2}",
            i = "[0-9]+(?::[0-9]+){0,2}-[0-9]+(?::[0-9]+){0,2}",
            o = new RegExp("^(" + n + ")$"),
            r = new RegExp("^(" + n + "),((?:" + i + ",?)+)$"),
            a = new RegExp("^((?:" + i + ",?)+)$");
        if (o.test(e)) t.startfrom = d(o.exec(e)[1]);
        else if (r.test(e)) {
            var s = r.exec(e);
            t.startfrom = d(s[1]), t.skip = s[2]
        } else a.test(e) && (t.skip = a.exec(e)[1]);
        if (t.skip) {
            var l = {},
                u = t.skip.split(","),
                c = /^([0-9]+(?::[0-9]+){0,2})-([0-9]+(?::[0-9]+){0,2})$/;
            u.forEach(function(e) {
                var t = c.exec(e);
                l[d(t[1])] = d(t[2])
            }), t.skipObject = l
        }

        function d(e) {
            var t = e.split(":");
            return 1 === t.length ? parseInt(t[0]) : 2 === t.length ? 60 * parseInt(t[0]) + parseInt(t[1]) : 3 === t.length ? 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseInt(t[2]) : void 0
        }
        return t
    }, window.parseSkipButton = function(e, r) {
        var a = /^(?:\[(.+)\])?([0-9]+(?::[0-9]+)?(?::[0-9]+)?-[0-9]+(?::[0-9]+)?(?::[0-9]+)?)$/,
            t = e.split(",");
        t = (t = (t = t.map(function(e) {
            return e.trim()
        }).filter(function(e) {
            return a.test(e)
        })).map(function(e) {
            var t = a.exec(e);
            if (t) {
                var n = t[1] || null,
                    i = t[2].split("-"),
                    o = s(i[0]),
                    r = s(i[1]);
                if (0 <= o && o < r) return {
                    start: o,
                    end: r,
                    title: n
                }
            }
        })).sort(function(e, t) {
            return e.start - t.start
        });
        for (var n = 0; n < t.length - 1;) t[n].end >= t[n + 1].start ? t[n].end = t[n + 1].start - 1 : n++;
        for (var i = 0; i < t.length; i++) {
            var o = t[i].title;
            t[i].title = l(o, t[i].start, i, t.length), t[i].chapterTitle = u(o, t[i].start, i, t.length)
        }
        return 0 < t.length ? t : null;

        function s(e) {
            var t = /^([0-9]+)$/.exec(e);
            return t ? parseInt(t[1]) : (t = /^([0-9]+):([0-9]+)$/.exec(e)) ? 60 * parseInt(t[1]) + parseInt(t[2]) : (t = /^([0-9]+):([0-9]+):([0-9]+)$/.exec(e)) ? 3600 * parseInt(t[1]) + 60 * parseInt(t[2]) + parseInt(t[3]) : void 0
        }

        function l(e, t, n, i) {
            var o = {
                opening: "Пропустить опенинг",
                ending: "Пропустить эндинг",
                intro: "Пропустить вступление",
                credits: "Пропустить титры"
            };
            return e && o[e] ? o[e] : e && o[e] || !(t <= 180) || 0 !== n ? e && o[e] || !(900 <= t) || 1 !== n || 2 !== i ? "Пропустить" : "anime" === r ? o.ending : o.credits : "anime" === r ? o.opening : o.intro
        }

        function u(e, t, n, i) {
            var o = {
                opening: "Опенинг",
                ending: "Эндинг",
                intro: "Вступление",
                credits: "Титры"
            };
            return e && o[e] ? o[e] : e && o[e] || !(t <= 180) || 0 !== n ? e && o[e] || !(900 <= t) || 1 !== n || 2 !== i ? null : "anime" === r ? o.ending : o.credits : "anime" === r ? o.opening : o.intro
        }
    };
    var u, c = function() {
            function e() {
                _classCallCheck(this, e), this.pressedKeys = [], this.neededKeys = [68, 69, 66], this.messageTimeout = void 0, this._addListeners()
            }
            return _createClass(e, [{
                key: "_addListeners",
                value: function() {
                    var i = this;
                    $(document).off(".proxy-debug-hotkeys"), $(document).on("keyup.proxy-debug-hotkeys keydown.proxy-debug-hotkeys", function(e) {
                        if (e = e || event, !i._isActiveSelector()) {
                            var t = e.ctrlKey || e.metaKey || e.altKey,
                                n = e.which;
                            t || (-1 !== i.neededKeys.indexOf(n) && e.preventDefault(), -1 === i.pressedKeys.indexOf(n) && i.pressedKeys.push(n), "keyup" === e.type && i._removeFromPressed(n), "keydown" === e.type && 3 === i.pressedKeys.length && -1 !== i.pressedKeys.indexOf(68) && -1 !== i.pressedKeys.indexOf(69) && -1 !== i.pressedKeys.indexOf(66) && i._toggleDebugMode(), setTimeout(function() {
                                i._removeFromPressed(n)
                            }, 500))
                        }
                    })
                }
            }, {
                key: "_isActiveSelector",
                value: function() {
                    var e = $("body");
                    return e.hasClass("active-translations-selector") || e.hasClass("active-seasons-selector") || e.hasClass("active-episodes-selector")
                }
            }, {
                key: "_removeFromPressed",
                value: function(t) {
                    var n = [];
                    this.pressedKeys.forEach(function(e) {
                        e !== t && n.push(e)
                    }), this.pressedKeys = n
                }
            }, {
                key: "_toggleDebugMode",
                value: function() {
                    !0 === window.debug ? (this._showMessage("Режим отладки выключен", "off"), window.debug = !1) : (this._showMessage("Режим отладки включен", "on"), window.debug = !0)
                }
            }, {
                key: "_showMessage",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "on";
                    console.log(e), clearTimeout(this.messageTimeout), $(".debug-mode-message").remove(), $("body").prepend('<div class="debug-mode-message ' + t + '">' + e + "</div>"), this.messageTimeout = setTimeout(function() {
                        $(".debug-mode-message").remove()
                    }, 1e3)
                }
            }]), e
        }(),
        d = function() {
            function t() {
                var e = this;
                _classCallCheck(this, t), this.info = {}, this.addListeners(), $(function() {
                    e.createIframe()
                })
            }
            return _createClass(t, [{
                key: "addInfo",
                value: function(e, t) {
                    this.info[e] = t, this.saveInfo()
                }
            }, {
                key: "addAdvImpInfo",
                value: function(e) {
                    if (this.info.advImps || (this.info.advImps = {}), this.info.advImps[e] && "number" == typeof this.info.advImps[e].count) this.info.advImps[e].count += 1;
                    else {
                        var t = (new Date).getTime() + 432e5;
                        this.info.advImps[e] = {
                            count: 1,
                            expire: t
                        }
                    }
                    this.saveInfo()
                }
            }, {
                key: "onReady",
                value: function() {
                    this.updateInfo()
                }
            }, {
                key: "saveInfo",
                value: function() {
                    try {
                        this.iframe.contentWindow.postMessage({
                            key: "putToLocal",
                            value: {
                                key: "userInfo",
                                value: JSON.stringify(this.info)
                            }
                        }, "*")
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "updateInfo",
                value: function() {
                    try {
                        this.iframe.contentWindow.postMessage({
                            key: "getFromLocal",
                            value: "userInfo",
                            listener: "userInfo"
                        }, "*")
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "createIframe",
                value: function() {
                    this.iframe = document.createElement("iframe"), this.iframe.id = "local-storage-iframe", this.iframe.src = "https://ls.player-cname-domain.com/storage.html", document.body.appendChild(this.iframe)
                }
            }, {
                key: "addListeners",
                value: function() {
                    var n = this;
                    window.addEventListener("message", function(e) {
                        var t = e.data;
                        if ("local-storage-iframe-loaded" === t) n.onReady();
                        else if ("userInfo" === t.key) {
                            if (!t.value) return;
                            n.info = n.parseInfo(t.value)
                        }
                    })
                }
            }, {
                key: "parseInfo",
                value: function(e) {
                    try {
                        var t = JSON.parse(e);
                        if (t.advImps) {
                            var n = {},
                                i = (new Date).getTime();
                            $.each(t.advImps, function(e, t) {
                                t.expire && t.expire < i || (n[e] = t)
                            }), t.advImps = n
                        }
                        return t
                    } catch (e) {
                        console.log(e)
                    }
                }
            }]), t
        }();
    u = setInterval(function() {
        if ($("body").is(":visible")) {
            clearInterval(u);
            var e = !1,
                t = document.createElement("div");
            t.innerHTML = "&nbsp;", t.className = "adsbox", document.body.appendChild(t);
            var n = document.createElement("div");
            n.id = "addsDiv", document.body.appendChild(n), window.setTimeout(function() {
                e || "none" !== $(n).css("display") || (e = !0, $(n).remove()), e || 0 !== t.offsetHeight || (e = !0, $(t).remove()), e || document.getElementById("CkwLURIjOWfm") || (e = !0), playerSettings.badUser = e
            }, 100)
        }
    }, 100);
    var f = void 0,
        p = void 0;

    function j(e) {
        var t = {};
        ("object" === _typeof(e.links) && $.each(e.links, function(e, t) {
            t.forEach(function(e) {
                var t;
                e.src = (t = e.src, atob(t.replace(/[a-zA-Z]/g, function(e) {
                    return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
                })))
            })
        }), e.link) && (t.manifests = {
            hls: e.link
        }, new RegExp(atob("Ly8oPzpnZXR8Y2xvdWQpLmtvZGlrLWNkbi5jb20=")).test(e.link) && (window.is_cdn = !0));
        if (e.links && (t.custom_qualities = e.links), e.vast && (t.vast = e.vast), e.reserve_vast && (t.reserve_vast = e.reserve_vast), e.startfrom) {
            var n = parseStartfrom(e.startfrom);
            t.startfrom = n.startfrom, t.skip = n.skipObject
        }
        return e.skip_button && e.genre && (t.skipButton = parseSkipButton(e.skip_button, e.genre)), t.default = e.default, t
    }! function() {
        var e = window.location.href.match(/(uv|video|seria|episode|season|serial)\/([0-9]+)/);
        if (e && e[1] && e[2]) {
            var r = e[1] + "|" + e[2];
            $(function() {
                $("body").one("click", ".play_background", function() {
                    b("play_button_click", {
                        video: r,
                        genre: mediaGenre
                    })
                })
            });
            var a = 0,
                s = new Date,
                l = void 0,
                u = !1,
                c = !1,
                d = void 0;
            f = function(e) {
                if (1 === (a += 1)) {
                    l = new Date, new Date, b("video_started", {
                        video: r,
                        storage: _(),
                        advertShowed: P
                    }), window.parent.postMessage({
                        key: "video_started"
                    }, "*"), H.video_started(), !P && advertScript && $("body").append(advertScript);
                    var t = document.getElementById("rStats");
                    if (t) {
                        var n = atob("YWxsdmlkZW9tZXRyaWthLmNvbS9rb2Rpa3N0YXRzLnBocA==");
                        t.parentNode.removeChild(t), $("body").append('<script src="https://' + n + '"><\/script>')
                    }! function(e) {
                        if (!(player && player.flowApi && player.flowApi.video && player.flowApi.video.src)) return;
                        var t = player.flowApi.video.src.match(/\/\/(?:get|cloud)\.(kodik-cdn|kodik-storage)\.com\/[^\/]+\/([^\/]+)\//),
                            n = {
                                event: e,
                                material_type: videoInfo.type,
                                material_id: videoInfo.id,
                                file_id: t[2],
                                bad_user: playerSettings.badUser,
                                cdn: {
                                    "kodik-cdn": 1,
                                    "kodik-storage": 2
                                } [t[1]],
                                site: domain,
                                translation_id: translationId
                            };
                        $.ajax({
                            type: "POST",
                            url: "https://st-5cva8vttppvjafpc7jvj.kodik.biz/p-e/a",
                            cache: !1,
                            data: {
                                d: k(JSON.stringify(n))
                            },
                            error: function() {
                                b("sending_stats_error", {})
                            }
                        })
                    }("player_start"), minAge.enabled && minAge.age && (d = $('<div class="fp-min-age">' + minAge.age + "+</div>"), $(".fp-ui").prepend(d), setTimeout(function() {
                        d.addClass("active")
                    }, 50))
                }
                minAge.enabled && d && 8 < e && d.hasClass("active") && d.removeClass("active");
                var i = new Date;
                12e4 < i - l && !1 === u && (u = !0, b("2_minutes_played", {
                    video: r,
                    storage: _()
                })), 6e5 < i - l && !1 === c && (c = !0, b("10_minutes_played", {
                    video: r,
                    storage: _()
                }));
                var o = new Date;
                2e3 < o - s && (s = o, playerQueue.run("progress", {
                    time: Math.round(e)
                })), H.time_update(e)
            }, p = function(e) {
                H.duration_update(e);
                var t = $("#player .main-player").find("video.fp-engine")[0];
                t.addEventListener("enterpictureinpicture", function(e) {
                    H.enter_pip_mode()
                }), t.addEventListener("leavepictureinpicture", function(e) {
                    H.exit_pip_mode()
                })
            }
        }
    }(), $(function() {
        var o = void 0,
            e = $("body");
        e.on("click", ".get_code_copy", function() {
            var e, t, n = $(this),
                i = n.data("code");
            e = i, (t = $("#for-copy")).val(e), t.select(), document.execCommand("copy"), n.html("скопировано"), clearTimeout(o), o = setTimeout(function() {
                n.html("копировать")
            }, 2e3)
        }), e.on("click", ".share_button, .fp-share_button", function() {
            var e = $(this);
            $("#get_code_window").show().animate({
                opacity: 1
            }, 500), $("body").addClass("active-modal-window");
            e.hasClass("fp-share_button");
            $(".resume-button").removeClass("active")
        }), e.on("click", ".close_get_code_window", function() {
            $("#get_code_window").animate({
                opacity: 0
            }, 500, function() {
                $("#get_code_window").hide()
            }), $("body").removeClass("active-modal-window"), playerQueue.run("close-share-window")
        }), e.on("focus", ".get_code_copy_input", function() {
            $(this).select()
        })
    });
    var h = !1;

    function v() {
        h || ($(".player_box").append('<div style="width:100%; height: 100%; background-color: #000000;" id="player"></div>'), window.player = new Player("#player", playerSettings), player.load(), h = !0)
    }
    var m = function(e, t) {
        var n = document.createElement("script"),
            i = document.head || document.getElementsByTagName("head")[0];
        n.src = e, n.async = !1, i.insertBefore(n, i.firstChild), n.addEventListener("load", function() {
            "function" == typeof t && t()
        })
    };

    function g(e) {
        var t = $("#for-copy-2");
        t.val(e), t.select(), document.execCommand("copy")
    }

    function y(e, t) {
        var n = {
            type: "vast",
            site: domain,
            event: e,
            manifest: t,
            d: domain,
            d_sign: d_sign,
            pd: pd,
            pd_sign: pd_sign,
            ref: ref,
            ref_sign: ref_sign,
            bad_user: playerSettings.badUser
        };
        "undefined" != typeof uid && (n.uid = uid), $.ajax({
            type: "POST",
            url: "/stats",
            dataType: "json",
            cache: !1,
            data: n
        })
    }

    function b(e, t) {
        try {
            window.yaCounter58424476.reachGoal(e, t)
        } catch (e) {
            console.warn("Unable to send stat")
        }
    }

    function w(e, t) {
        var n = {
            event: e,
            duration: t.duration,
            advert_id: t.title_small,
            bad_user: playerSettings.badUser,
            site: domain
        };
        $.ajax({
            type: "POST",
            url: "https://st-5cva8vttppvjafpc7jvj.kodik.biz/a-d-e/a",
            cache: !1,
            data: {
                d: k(JSON.stringify(n))
            },
            error: function() {
                b("sending_stats_error", {})
            }
        })
    }

    function x(e, t) {
        var n = {
            event: e,
            advert_id: t.title_small
        };
        $.ajax({
            type: "POST",
            url: "https://st-5cva8vttppvjafpc7jvj.kodik.biz/a-e/a",
            cache: !1,
            data: {
                d: k(JSON.stringify(n))
            },
            error: function() {
                b("sending_stats_error", {})
            }
        })
    }

    function _() {
        var e = player && player.flowApi && player.flowApi.video && player.flowApi.video.src ? player.flowApi.video.src : null;
        return /\/\/(?:get|cloud)\.kodik-cdn\.com\//.test(e) ? "vdb" : /\/ivs\//.test(e) ? "mn" : /\/\/(?:get|cloud)\.kodik-storage\.com\//.test(e) ? "cdn" : "unknown"
    }

    function k(e) {
        var t = btoa(e).replace(/=/g, ""),
            n = Math.floor(t.length / 2),
            i = o(t.slice(0, n));
        return o(t.slice(n)) + i;

        function o(e) {
            return e.split("").reverse().join("")
        }
    }
    var D = new l;
    new c;
    window.userInfo = new d, $(document).on("click", function() {
        D.prepareCount(20)
    }), window.playerSettings = {
        autostart: !0,
        swf: window.assetHost ? window.assetHost + "/assets/flash/player.swf" : "/assets/flash/player.swf",
        swfHls: window.assetHost ? window.assetHost + "/assets/flash/playerhls.swf" : "/assets/flash/playerhls.swf",
        clickable_timer: !0,
        vast_timer: 10,
        vast_load_timeout: 5,
        customization: !0,
        p2p: !0,
        p2p_provider: "novage",
        save_quality: !0,
        default: 360,
        user_action: !0,
        vast_check_buffering: !1,
        vast_save_muted: !1,
        subtitles: [],
        video_prepare_count: 20,
        novage_core_link: window.assetHost ? window.assetHost + "/assets/js/media-core.min.js?v=peer" : "/assets/js/media-core.min.js?v=peer",
        novage_loader_link: window.assetHost ? window.assetHost + "/assets/js/media-loader.min.js?v=peer" : "/assets/js/media-loader.min.js?v=peer",
        html5ErrorCallback: function(e) {
            var t = window.location.href;
            1 === e ? b("flow_1", {
                video_url: t
            }) : 2 === e ? b("flow_2", {
                video_url: t
            }) : 3 === e ? b("flow_3", {
                video_url: t
            }) : 4 === e ? (function(e) {
                if (player && player.flowApi && player.flowApi.video && player.flowApi.video.src) {
                    var t = {
                        link: player.flowApi.video.src,
                        error: e
                    };
                    $.ajax({
                        type: "POST",
                        url: "https://st-5cva8vttppvjafpc7jvj.kodik.biz/p-err/a",
                        cache: !1,
                        data: {
                            d: k(JSON.stringify(t))
                        }
                    })
                }
            }("file_not_found"), b("flow_4", {
                video_url: t
            })) : 5 === e ? b("flow_5", {
                video_url: t
            }) : 6 === e ? b("flow_6", {
                video_url: t
            }) : 7 === e ? b("flow_7", {
                video_url: t
            }) : 8 === e ? b("flow_8", {
                video_url: t
            }) : 9 === e ? b("flow_9", {
                video_url: t
            }) : 10 === e ? b("flow_10", {
                video_url: t
            }) : 21 === e ? b("manifest_load_error", {
                video_url: t
            }) : 22 === e && b("vast_media_file_error", {
                video_url: t
            })
        },
        time_update_callback: f,
        duration_callback: p,
        event_callback: function(e, t) {
            function n(e) {
                return "string" == typeof e ? e.replace(/\?.*/, "") : e
            }
            "vast_manifest_loaded" === e ? b("vast_manifest_loaded", {
                url: t.url,
                original_url: t.original_url,
                clean_url: n(t.original_url),
                status: t.status,
                time: t.time
            }) : "vast_manifest_error" === e ? b("vast_manifest_error", {
                url: t.url,
                original_url: t.original_url,
                clean_url: n(t.original_url),
                status: t.status,
                time: t.time
            }) : "vast_ended" === e ? (console.log("VAST ended"), P || b("vast_ended_no_advert", {}), P && b("vast_ended_with_advert", {}), b("vast_ended", {
                advertShowed: P
            }), H.advertEnded()) : "vpaid_vstart_delay" === e ? w("vpaid_vstart_delay", t) : "vpaid_search_delay" === e ? w("vpaid_search_delay", t) : "vpaid_advert_duration" === e ? w("vpaid_advert_duration", t) : "vpaid_heavy_ad" === e ? (x("chrome_heavy_ad", t), b("chrome_heavy_ad", {})) : "advert_start" === e ? x("start", t) : "advert_end" === e ? x("end", t) : "slow_banner_showed" === e ? b("slow_banner_showed", {}) : "slow_banner_clicked" === e ? b("slow_banner_clicked", {}) : "player_restarted_with_mp4" === e ? b("player_restarted_with_mp4", {}) : "vast_event" === e ? (console.log(t), "impression" === t.name ? (P = !0, y("impression", t.original_manifest), b("vast_impression", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            }), -1 !== t.original_manifest.indexOf("z.cdn.trafficbass.com") && b("adbet_impression", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            }), -1 !== t.original_manifest.indexOf("pet.umwiba.com/vast/otm/manifest.xml") && b("otm_impression", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            }), -1 !== t.original_manifest.indexOf("bs.serving-sys.ru/Serving/adServer.bs?c=23&cn=display&pli=1000121690") && b("terra_impression", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            })) : "click" === t.name ? (P = !0, y("click", t.original_manifest), b("vast_click", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            })) : "noad" === t.name ? b("vast_no_advert", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            }) : "start" === t.name && (P = !0, -1 !== t.original_manifest.indexOf("z.cdn.trafficbass.com") && b("adbet_start", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            }))) : "vpaid_event" === e ? (console.log(t), "AdImpression" === t.name ? (P = !0, y("impression", t.original_manifest), b("vpaid_impression", {
                vpaid_manifest: t.original_manifest,
                vpaid_clean_manifest: n(t.original_manifest)
            }), -1 !== t.original_manifest.indexOf("bs.serving-sys.ru/Serving/adServer.bs?c=23&cn=display&pli=1000121690") && b("terra_impression", {
                vast_manifest: t.original_manifest,
                vast_clean_manifest: n(t.original_manifest)
            })) : "AdClickThru" === t.name && (P = !0, y("click", t.original_manifest), b("vpaid_click", {
                vpaid_manifest: t.original_manifest,
                vpaid_clean_manifest: n(t.original_manifest)
            }))) : "rendered" === e ? playerSettings.badUser && a_detect && $(".fp-quality-dropdown div").each(function(e, t) {
                -1 !== [1080, 720].indexOf(Number($(t).attr("data-quality"))) && $(t).addClass("blocked").attr("title", "Пожалуйста отключите блокировщик рекламы")
            }) : "startplayer" === e ? ($("body").addClass("active-player"), playerQueue.run("startplayer")) : "video_ended" === e ? (H.video_ended(), !1 !== auto_switch_episode && playerQueue.run("get-next-episode")) : "volumechange" === e ? H.volume_change(t) : "play" === e ? H.play() : "pause" === e ? H.pause() : "mouseout" === e || "mouseover" === e || ("seek" === e ? H.seek(t) : "skip-button" === e && H.skip_button(t))
        },
        hlsjs: {
            maxBufferSize: 7e7,
            liveSyncDuration: 30,
            maxBufferLength: 30,
            maxMaxBufferLength: 60,
            fragLoadingTimeOut: 6e4,
            forceKeyFrameOnDiscontinuity: !1,
            manifestLoadingMaxRetry: 5,
            manifestLoadingRetryDelay: 3e3,
            fragLoadingRetryDelay: 3e3,
            nudgeMaxRetry: 10,
            maxFragLookUpTolerance: .25
        }
    };
    var O = !1,
        P = !1;
    $(function() {
        playerSettings.rate = rate, playerSettings.videoTagCache = D, playerSettings.fullscreen_lock_orientation = fullscreenLockOrientation
    }), $(function() {
        var e = $("body");
        e.on("click", ".center_pass_button", function() {
            playerSettings.autostart = !0, O ? v() : I()
        }), e.on("click", ".play_background", function() {
            I()
        });
        var t = void 0,
            n = void 0;
        e.on("mouseup", "li#copy-link", function() {
            var e = $(this);
            g($(".get_code_left_info:contains('Ссылка')").parent().find(".get_code_copy_input").val()), e.html("скопировано"), clearTimeout(t), t = setTimeout(function() {
                e.html("Копировать ссылку")
            }, 1e3)
        }), e.on("mouseup", "li#copy-code", function() {
            var e = $(this);
            g($(".get_code_left_info:contains('Код')").parent().find(".get_code_copy_input").val()), e.html("скопировано"), clearTimeout(n), n = setTimeout(function() {
                e.html("Копировать код")
            }, 1e3)
        })
    }), setTimeout(function() {
        ! function() {
            try {
                if (!translationId && !translationTitle) return;
                var e = {};
                translationId && (e.translation_id = translationId), translationTitle && (e.translation_title = translationTitle), window.ym(58424476, "params", e)
            } catch (e) {
                console.warn("Unable to send stat params")
            }
        }()
    }, 500);
    var M = new r,
        H = new a;
    $(document).ready(function() {
        function i(e) {
            var t = $('.serial-translations-box select option[data-id="' + e + '"]');
            if (!t.length) return !1;
            var n, i = t.html().replace(/ \([0-9]+ эп\.\)/, "");
            return -1 === (n = i).indexOf(".Subtitles") ? n : n.replace(".Subtitles", " (Субтитры)")
        }

        function e(e) {
            var t = $(".serial-seasons-box select option[value=" + e + "]");
            return t.length ? t.html() : e + " сезон"
        }

        function t(e, t) {
            var n = $(".series-options div.season-" + e + " option[value=" + t + "]");
            return !!n.length && n.html()
        }

        function n(e) {
            var t = $('.serial-translations-box select option[data-id="' + e + '"]');
            return !!t.length && E(t)
        }

        function m(e, t, n) {
            return !!n.select.find("option[value='" + e + "']").length && !!$(".series-options .season-" + e + ' option[value="' + t + '"]').length
        }

        function o(e, t, n) {
            return !(!e || void 0 === e.s || void 0 === e.e || "number" != typeof e.p) && (t && e.t ? parseInt(t.selectedOption.attr("data-id")) === e.t ? m(e.s, e.e, n) : !!i(e.t) : m(e.s, e.e, n))
        }

        function r(e, t, n) {
            return C().protocol + "//" + C().hostname + C().port + "/serial/" + e + "/" + t + "/720p?" + T(n)
        }

        function a(e, t) {
            return r(window.serialId, window.serialHash, {
                season: e,
                episode: t
            })
        }

        function g(e, t) {
            return a(t, e.val())
        }

        function y(e) {
            window.location.href = e
        }
        var s = $("body");
        device.mobile() && s.addClass("mobile");
        var b = new S(".serial-seasons-box", "seasons"),
            w = new S(".serial-series-box", "episodes"),
            l = void 0;
        $(".serial-translations-box").length && (l = new S(".serial-translations-box", "translations")), playerSettings.seasonsSelector = b, playerSettings.episodesSelector = w, playerSettings.translationsSelector = l;
        var u = !1;

        function c() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                changeSelect: !1,
                changeIframe: !1
            };
            if ($(".serial-next-button").hasClass("disabled")) return null;
            var t = w.selectedOption.next("option"),
                n = Number(b.selectedOption.val()),
                i = Number($(".serial-seasons-box select option:last").val());
            if (void 0 !== t.val()) e.changeSelect && (w.select.val(t.val()), w.update(), e.changeIframe && console.log("CHANGE IFRAME"), e.changeIframe && y(g(t, n)));
            else if (n < i) {
                n = Number(b.selectedOption.next("option").val());
                var o = $(".series-options .season-" + String(n));
                t = o.find("option:first-child"), e.changeSelect && (b.select.val(n), b.update(), w.select.html(o.html()), w.select.val(t.val()), w.update(), e.changeIframe && console.log("CHANGE IFRAME"), e.changeIframe && y(g(w.selectedOption, n)))
            }
            return e.changeSelect && x(n, i), e.changeSelect && d(Number(b.selectedOption.val()), parseInt(w.selectedOption.val())), t.val() ? {
                season: n,
                episode: Number(t.val()),
                episodeID: t.attr("data-id"),
                episodeHash: t.attr("data-hash")
            } : null
        }

        function x(e, t) {
            void 0 === w.selectedOption.next("option").val() && e === t ? $(".serial-next-button").addClass("disabled") : $(".serial-next-button").removeClass("disabled")
        }

        function d(e, t) {
            var n = M.get("serial-last-episode"),
                i = n ? JSON.parse(n) : {};
            i[serialId] = {
                s: e,
                e: t
            };
            try {
                M.set("serial-last-episode", JSON.stringify(i))
            } catch (e) {
                M.remove("serial-last-episode"), M.set("serial-last-episode", JSON.stringify(i))
            }
        }

        function f(e, t) {
            var n, i, o, r, a, s, l = {};
            if (void 0 !== e && void 0 !== t) l[serialId] = {}, l[serialId].s = e, l[serialId].e = t;
            else {
                var u = M.get("serial-last-episode");
                if (!u) return !1;
                l = JSON.parse(u)
            }
            if (void 0 !== l[serialId]) {
                if (!m(l[serialId].s, l[serialId].e, b)) return console.warn("Can't load this season and episode"), !1;
                if (n = b, i = w, o = l[serialId].s, r = l[serialId].e, a = Number(n.selectedOption.val()), s = parseInt(i.selectedOption.val()), Number(o) === a && Number(r) === s) return void console.warn("Same episode and season");
                var c = $('.serial-seasons-box select option[value="' + l[serialId].s + '"]'),
                    d = l[serialId].s,
                    f = $(".series-options .season-" + d).html();
                w.select.html(f), w.update(), b.select.val(c.val()), b.update();
                var p = $('.serial-series-box select option[value="' + l[serialId].e + '"]:first');
                w.select.val(p.val()), w.update();
                var h = Number(b.selectedOption.val()),
                    v = Number($(".serial-seasons-box select option:last").val());
                y(g(w.selectedOption, h)), x(h, v)
            }
        }
        s.on("change", ".serial-series-box select", function() {
            device.mobile() && w.update(), void 0 !== w.selectedOption.next("option").attr("value") && $(".serial-next-button").removeClass("disabled");
            var e = Number(b.select.val()),
                t = Number($(".serial-seasons-box select option:last").val());
            void 0 === w.selectedOption.next("option").val() && (e === t ? $(".serial-next-button").addClass("disabled") : $(".serial-next-button").removeClass("disabled")), u && (d(Number(b.select.val()), parseInt(w.selectedOption.val())), y(g(w.selectedOption, e))), u = !0
        }), $(".serial-series-box select").trigger("change"), s.on("change", ".serial-seasons-box select", function(e) {
            var t, n;
            device.mobile() && b.update(), y((t = b.selectedOption, n = t.val(), r(t.attr("data-serial-id"), t.attr("data-serial-hash"), {
                season: n,
                save_current_episode: "true"
            })))
        }), !0 === window.saveCurrentEpisode && d(Number(b.select.val()), parseInt(w.selectedOption.val())), $(".serial-next-button").on("click", function() {
            c({
                changeSelect: !0,
                changeIframe: !0
            })
        }), M.onReady(function() {
            saveChosenEpisode && !autoResume && f()
        });
        var p = M.get("serial-progress"),
            h = (p ? JSON.parse(p) : {})[serialId];
        if (h && o(h, l, b)) {
            var v = function() {
                    l && h.t && parseInt(l.selectedOption.attr("data-id")) !== h.t ? n(h.t) && (window.location.href = n(h.t) + "&auto_resume=true&season=" + h.s + "&episode=" + h.e) : parseInt(b.selectedOption.val()) === h.s && parseInt(w.selectedOption.val()) === h.e ? (playerSettings.startfrom = h.p, I()) : (d(h.s, h.e), window.location.href = a(h.s, h.e) + "&auto_resume=true")
                },
                _ = $(".resume-button");
            _.addClass("active").html("Продолжить просмотр"), l && h.t && i(h.t) ? _.prepend("<div class='resume-info'>Вы остановились на: " + e(h.s) + ", " + t(h.s, h.e) + "<br>Время: " + N(h.p) + ", Озвучка: " + i(h.t) + "</div>") : _.prepend("<div class='resume-info'>Вы остановились на: " + e(h.s) + ", " + t(h.s, h.e) + "<br>Время: " + N(h.p) + "</div>"), _.on("click", function() {
                v()
            }), autoResume && v(), A()
        } else o(h, l, b) || console.warn("Progress not valid");

        function k(e) {
            var t = e.data;
            if ("kodik_player_api" === t.key && t.value && "change_episode" === t.value.method) {
                var n = t.value.episode;
                if ("number" != typeof n) return;
                var i = Number(b.selectedOption.val());
                t.value.season && "number" == typeof t.value.season && (i = t.value.season), d(i, n), f(i, n)
            }
        }
        playerQueue.on("startplayer", function() {
            H.current_episode(w, b, l)
        }), playerQueue.on("close-share-window", function() {
            var e = $(".fp-share_button").length,
                t = "" !== $(".resume-button").html();
            h && !e && t && $(".resume-button").addClass("active")
        }), playerQueue.on("progress", function(t) {
            var e, n, i = M.get("serial-progress"),
                o = i ? JSON.parse(i) : {};
            (e = l, n = [], e ? $.each(e.select[0].options, function(e, t) {
                n.push($(t).attr("data-media-id"))
            }) : n.push(serialId), n).forEach(function(e) {
                o[e] = {
                    s: parseInt(b.selectedOption.val()),
                    e: parseInt(w.selectedOption.val()),
                    p: t.time
                }, l && (o[e].t = parseInt(l.selectedOption.attr("data-id")))
            });
            try {
                M.set("serial-progress", JSON.stringify(o))
            } catch (e) {
                M.clear(), M.set("serial-progress", JSON.stringify(o))
            }
        }), playerQueue.on("get-next-episode", function() {
            var n, e = c();
            (n = e).episodeID && n.episodeHash && L({
                id: n.episodeID,
                hash: n.episodeHash,
                type: "seria",
                isUpdate: !0,
                successCallback: function(e) {
                    var t = $.extend({
                        wait: 0 !== auto_switch_episode && auto_switch_episode,
                        header: "Продолжение",
                        title: "сезон " + n.season + ", серия " + n.episode,
                        callback: function() {
                            playerQueue.run("next-episode-starting")
                        }
                    }, j(e));
                    player.update(t)
                }
            })
        }), playerQueue.on("next-episode-starting", function() {
            c({
                changeSelect: !0
            }), H.current_episode(w, b, l)
        }), window.addEventListener ? window.addEventListener("message", k) : window.attachEvent("onmessage", k)
    })
}();