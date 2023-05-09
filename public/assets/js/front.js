/*! For license information please see front.js.LICENSE.txt */ ! function(t) {
    var e = {};

    function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) { return t[e] }.bind(null, i));
        return r
    }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "/", n(n.s = 2)
}({
    "0RCu": function(t, e, n) {
        var r, i, o;
        i = [], r = function() {
            "use strict";
            var t = function(t) { return t && "getComputedStyle" in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"] };
            if ("undefined" == typeof window || !("document" in window)) return {};
            var e = function(e, n, r) {
                    var i;
                    n = n || 999, r || 0 === r || (r = 9);
                    var o = function(t) { i = t },
                        a = function() { clearTimeout(i), o(0) },
                        u = function(t) { return Math.max(0, e.getTopOf(t) - r) },
                        l = function(r, i, u) {
                            if (a(), 0 === i || i && i < 0 || t(e.body)) e.toY(r), u && u();
                            else {
                                var l = e.getY(),
                                    c = Math.max(0, r) - l,
                                    s = (new Date).getTime();
                                i = i || Math.min(Math.abs(c), n),
                                    function t() {
                                        o(setTimeout((function() {
                                            var n = Math.min(1, ((new Date).getTime() - s) / i),
                                                r = Math.max(0, Math.floor(l + c * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1)));
                                            e.toY(r), n < 1 && e.getHeight() + r < e.body.scrollHeight ? t() : (setTimeout(a, 99), u && u())
                                        }), 9))
                                    }()
                            }
                        },
                        c = function(t, e, n) { l(u(t), e, n) };
                    return {
                        setup: function(t, e) { return (0 === t || t) && (n = t), (0 === e || e) && (r = e), { defaultDuration: n, edgeOffset: r } },
                        to: c,
                        toY: l,
                        intoView: function(t, n, i) {
                            var o = t.getBoundingClientRect().height,
                                a = e.getTopOf(t) + o,
                                s = e.getHeight(),
                                f = e.getY(),
                                d = f + s;
                            u(t) < f || o + r > s ? c(t, n, i) : a + r > d ? l(a - s + r, n, i) : i && i()
                        },
                        center: function(t, n, r, i) { l(Math.max(0, e.getTopOf(t) - e.getHeight() / 2 + (r || t.getBoundingClientRect().height / 2)), n, i) },
                        stop: a,
                        moving: function() { return !!i },
                        getY: e.getY,
                        getTopOf: e.getTopOf
                    }
                },
                n = document.documentElement,
                r = function() { return window.scrollY || n.scrollTop },
                i = e({ body: document.scrollingElement || document.body, toY: function(t) { window.scrollTo(0, t) }, getY: r, getHeight: function() { return window.innerHeight || n.clientHeight }, getTopOf: function(t) { return t.getBoundingClientRect().top + r() - n.offsetTop } });
            if (i.createScroller = function(t, r, i) { return e({ body: t, toY: function(e) { t.scrollTop = e }, getY: function() { return t.scrollTop }, getHeight: function() { return Math.min(t.clientHeight, window.innerHeight || n.clientHeight) }, getTopOf: function(t) { return t.offsetTop } }, r, i) }, "addEventListener" in window && !window.noZensmooth && !t(document.body)) {
                var o = "history" in window && "pushState" in history,
                    a = o && "scrollRestoration" in history;
                a && (history.scrollRestoration = "auto"), window.addEventListener("load", (function() {
                    a && (setTimeout((function() { history.scrollRestoration = "manual" }), 9), window.addEventListener("popstate", (function(t) { t.state && "zenscrollY" in t.state && i.toY(t.state.zenscrollY) }), !1)), window.location.hash && setTimeout((function() {
                        var t = i.setup().edgeOffset;
                        if (t) {
                            var e = document.getElementById(window.location.href.split("#")[1]);
                            if (e) {
                                var n = Math.max(0, i.getTopOf(e) - t),
                                    r = i.getY() - n;
                                0 <= r && r < 9 && window.scrollTo(0, n)
                            }
                        }
                    }), 9)
                }), !1);
                var u = new RegExp("(^|\\s)noZensmooth(\\s|$)");
                window.addEventListener("click", (function(t) {
                    for (var e = t.target; e && "A" !== e.tagName;) e = e.parentNode;
                    if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
                        if (a) {
                            var n = history.state && "object" == typeof history.state ? history.state : {};
                            n.zenscrollY = i.getY();
                            try { history.replaceState(n, "") } catch (t) {}
                        }
                        var r = e.getAttribute("href") || "";
                        if (0 === r.indexOf("#") && !u.test(e.className)) {
                            var l = 0,
                                c = document.getElementById(r.substring(1));
                            if ("#" !== r) {
                                if (!c) return;
                                l = i.getTopOf(c)
                            }
                            t.preventDefault();
                            var s = function() { window.location = r },
                                f = i.setup().edgeOffset;
                            f && (l = Math.max(0, l - f), o && (s = function() { history.pushState({}, "", r) })), i.toY(l, null, s)
                        }
                    }
                }), !1)
            }
            return i
        }(), void 0 === (o = "function" == typeof r ? r.apply(e, i) : r) || (t.exports = o)
    },
    2: function(t, e, n) { t.exports = n("JF5C") },
    JF5C: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("LvDl");

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var o = function() {
            function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.data = this.getData(), this.cache = {}, this.interupt = 100, this.getThrottledScrollDetails = Object(r.throttle)((function() { return e.getScrollDetails() }), this.interupt), this.bind() }
            var e, n, o;
            return e = t, (n = [{
                key: "getData",
                value: function() {
                    var t = this.getScrollX(),
                        e = this.getScrollY();
                    return { x: t, y: e, width: document.body.scrollWidth, height: document.body.scrollHeight, top: this.getIsTop(e), right: this.getIsRight(t), bottom: this.getIsBottom(e), left: this.getIsLeft(t), direction: { x: this.getXDirection(t), y: this.getYDirection(e) } }
                }
            }, {
                key: "bind",
                value: function() {
                    var t = this;
                    this.getScrollDetails(), window.addEventListener("scroll", (function() { return t.getThrottledScrollDetails() }))
                }
            }, { key: "getScrollDetails", value: function() { this.data = this.getData(), this.cache !== this.data && (document.dispatchEvent(new CustomEvent("scroll-watcher", { detail: this.data })), this.cache = this.data) } }, { key: "forceUpdate", value: function() { this.data = this.getData(), document.dispatchEvent(new CustomEvent("scroll-watcher", { detail: this.data })), this.cache = this.data } }, { key: "getXDirection", value: function(t) { if (this.cache) { if (t > this.cache.x) return "right"; if (t < this.cache.x) return "left" } return null } }, { key: "getYDirection", value: function(t) { if (this.cache) { if (t > this.cache.y) return "down"; if (t < this.cache.y) return "up" } return null } }, { key: "getScrollY", value: function() { return Math.floor(window.scrollY || window.scrollTop || document.documentElement.scrollTop) } }, { key: "getScrollX", value: function() { return Math.floor(window.scrollX || window.scrollLeft || document.documentElement.scrollLeft) } }, { key: "getIsTop", value: function(t) { return 0 === t } }, { key: "getIsLeft", value: function(t) { return 0 === t } }, { key: "getIsRight", value: function(t) { return t === document.body.clientWidth - window.innerWidth } }, { key: "getIsBottom", value: function(t) { return t === document.body.clientHeight - window.innerHeight } }]) && i(e.prototype, n), o && i(e, o), Object.defineProperty(e, "prototype", { writable: !1 }), t
        }();

        function a(t) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

        function u(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && l(t, e)
        }

        function l(t, e) { return (l = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

        function c(t) {
            var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
            return function() {
                var n, r = f(t);
                if (e) {
                    var i = f(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return s(this, n)
            }
        }

        function s(t, e) { if (e && ("object" === a(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) }

        function f(t) { return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

        function d(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function p(t, e, n) { return e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t }
        var v = function() {
                function t() { d(this, t) }
                return p(t, [{ key: "initAll", value: function() { new m, new y } }]), t
            }(),
            g = function() {
                function t(e, n) {
                    var i = this;
                    d(this, t), this.elDatas = [], this.animationBuffer = [], this.animationInProgress = !1, this.scrollCache = null, this.config = Object(r.extend)({ bufferInterval: 350, duration: 500, fps: 60, startDelay: 0, partialOffset: 0 }, n), e && document.querySelectorAll("[data-".concat(e, "]")).forEach((function(t, e) {
                        var n = t.getBoundingClientRect(),
                            r = (window.scrollX, window.scrollY + 0),
                            o = { id: "el-".concat(e), el: t, position: { top: n.top + r, bottom: n.top + r + t.offsetHeight }, visibility: { full: !1, partial: !1 }, data: {} };
                        i.bindEvents(o), i.elDatas.push(o), i.onInit(o)
                    })), document.addEventListener("scroll-watcher", (function(t) {
                        var e = t.detail;
                        e && i.animationBuffer.length && (i.animationInProgress || (i.animationInProgress = !0, window.setTimeout(i.processBuffer(), i.config.startDelay))), i.scrollCache = e
                    }))
                }
                return p(t, [{
                    key: "bindEvents",
                    value: function(t) {
                        var e = this;
                        t && document.addEventListener("scroll-watcher", (function(n) {
                            var r = n.detail;
                            if (r) {
                                if (null !== e.scrollCache && (r.height !== e.scrollCache.height || r.width !== e.scrollCache.width)) {
                                    var i = t.el.getBoundingClientRect();
                                    t.position.top = i.top + r.y, t.position.bottom = i.top + r.y + t.el.offsetHeight
                                }
                                r.y + window.innerHeight > t.position.top + e.config.partialOffset && r.y + window.innerHeight < t.position.bottom || r.y > t.position.top && r.y < t.position.bottom - e.config.partialOffset ? (t.visibility.partial || t.visibility.full || e.onEnter(t), t.visibility.full && e.onHidden(t), t.visibility.partial = !0, t.visibility.full = !1) : r.y <= t.position.top && r.y + window.innerHeight >= t.position.bottom ? (t.visibility.full || e.onVisible(t), t.visibility.partial || t.visibility.full || e.onEnter(t), t.visibility.partial = !1, t.visibility.full = !0) : ((t.visibility.partial || t.visibility.full) && e.onLeave(t), t.visibility.full && e.onHidden(t), t.visibility.partial = !1, t.visibility.full = !1)
                            }
                        }))
                    }
                }, { key: "onInit", value: function(t) {} }, { key: "onEnter", value: function(t) {} }, { key: "onLeave", value: function(t) {} }, { key: "onVisible", value: function(t) {} }, { key: "onHidden", value: function(t) {} }, { key: "processAnimation", value: function(t) {} }, {
                    key: "processBuffer",
                    value: function() {
                        var t = this;
                        this.animationBuffer.length ? (this.processAnimation(this.animationBuffer[0]), this.animationBuffer.shift(), window.setTimeout((function() { return t.processBuffer() }), this.config.bufferInterval)) : this.animationInProgress = !1
                    }
                }, { key: "getStepsPerFrame", value: function(t, e) { return (e - t) / this.config.duration * (1e3 / this.config.fps) } }, { key: "getInterval", value: function() { return 1e3 / this.config.fps } }]), t
            }(),
            m = function(t) {
                u(n, t);
                var e = c(n);

                function n() { return d(this, n), e.call(this, "animation-enter", { startDelay: 250, partialOffset: 100 }) }
                return p(n, [{ key: "onInit", value: function(t) { t.el && t.el.classList.add("animate") } }, { key: "onEnter", value: function(t) { t.el && !t.el.classList.contains("animate-in") && t.el.classList.add("animate-in") } }]), n
            }(g),
            y = function(t) {
                u(n, t);
                var e = c(n);

                function n() { return d(this, n), e.call(this, "animation-list-item", { startDelay: 100, partialOffset: 100, bufferInterval: 50 }) }
                return p(n, [{ key: "onInit", value: function(t) { t.el && t.el.classList.add("animate") } }, { key: "onEnter", value: function(t) { t.el && !t.el.classList.contains("animate-in") && this.animationBuffer.push(t.el) } }, { key: "processAnimation", value: function(t) { t && t.classList.add("animate-in") } }]), n
            }(g),
            w = n("zSlN"),
            b = n.n(w);
        n("KqvJ");

        function S(t) { return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }(void 0 === window._paq || "object" !== S(window._paq)) && (window._paq = []), window.zenscroll = n("0RCu");
        var T = 0;
        zenscroll.setup(null, 0), $.fn.inView = function() {
            var t = $(window),
                e = $(this),
                n = t.scrollTop(),
                r = t.scrollTop() + t.height(),
                i = e.offset().top + e.outerHeight();
            return r >= i - 100 && n <= i
        };
        var k = {
            scrollWatcher: null,
            animations: null,
            initialize: function() {
                this.scrollWatcher = new o, this.animations = new v, this.siteSearch(), this.remapEsc(), this.filtersModals(), this.legalModals(), this.mobileMenu(), this.newsletterSubscribe(), this.customLinks(), this.customSelect(), this.customJump(), this.searchTypeahead(), this.investmentDrawer(), this.recordsCount(), this.clearForm(), this.playVideos(), this.initAnimations(), this.initParallax(), this.initParallaxCards(), this.contactTabs(), this.rolloverImageFollow(), $(".section-header .scroll-down").on("click", (function() {
                    var t = $(this).closest(".section-header").next();
                    t.is(".jump-box, .section-spacing") && (t = t.next());
                    var e = Math.round(t.offset().top);
                    zenscroll.toY(e)
                }))
            },
            contactTabs: function() {
                var t = $(".section-tabs.id-128"),
                    e = $(".contact-group .right .details"),
                    n = t.find(".tab-1");
                n.addClass("active");
                var r = n.find(".tab-content").html();
                e.hide(), e.html(r).fadeIn(), t.find(".tab-item .tab-name").on("click", (function(n) {
                    n.preventDefault();
                    var i = $(this).parent();
                    t.find(".tab-item").removeClass("active"), i.addClass("active"), e.fadeOut(400, (function() { r = i.find(".tab-content").html() ? i.find(".tab-content").html() : "", e.html(r).fadeIn() }))
                }))
            },
            onScroll: function() { this.stickyMenu() },
            stickyMenu: function() {
                var t = $(window).scrollTop(),
                    e = $("header"),
                    n = e.outerHeight();
                Math.abs(T - t) <= 5 || (t > T && t > n ? (t > e.outerHeight() && $("body, header").addClass("fixed-header"), t > 200 ? (e.removeClass("in-focus"), e.removeClass("is-hidden"), e.addClass("in-transition")) : e.hasClass("in-focus") && t > 1 && (e.removeClass("is-hidden"), e.addClass("in-transition"), e.removeClass("in-focus"))) : (e.removeClass("in-transition"), t <= n && (e.hasClass("in-focus") || (e.removeClass("is-hidden fixed-header"), $("body").removeClass("fixed-header"))), t < 10 && ($("body, header").removeClass("fixed-header"), e.removeClass("in-focus")), t > 200 && (e.addClass("in-focus"), e.removeClass("is-hidden"))), T = t)
            },
            customSelect: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".selectJs";
                $(t).each((function() {
                    var t = $(this),
                        e = $(this).children("option").length;
                    t.addClass("select-hidden"), t.wrap('<div class="select"></div>'), t.after('<div class="select-styled"></div>');
                    var n = t.next("div.select-styled");
                    n.text(t.children(":selected").text());
                    for (var r = $("<ul />", { class: "select-options" }).insertAfter(n), i = 0; i < e; i++) $("<li />", { text: t.children("option").eq(i).text(), rel: t.children("option").eq(i).val() }).appendTo(r);
                    var o = r.children("li");
                    n.click((function(t) { t.stopPropagation(), $("div.select-styled.active").not(this).each((function() { $(this).removeClass("active").next("ul.select-options").hide() })), $(this).toggleClass("active").next("ul.select-options").toggle() })), o.click((function(e) { e.stopPropagation(), n.text($(this).text()).removeClass("active"), t.val($(this).attr("rel")).change(), r.hide() })), $(document).click((function() { n.removeClass("active"), r.hide() }))
                }))
            },
            customJump: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".jumpJs";
                $(t).each((function() {
                    var t = $(this),
                        e = $(this).children("option").length;
                    t.addClass("select-hidden"), t.wrap('<div class="select"></div>'), t.after('<div class="select-styled select-styled--jump"></div>');
                    var n = t.next("div.select-styled");
                    n.text(t.children(":selected").text());
                    for (var r = $("<ul />", { class: "select-options" }).insertAfter(n), i = 0; i < e; i++) $("<li />", { text: t.children("option").eq(i).text(), rel: t.children("option").eq(i).val() }).appendTo(r);
                    var o = r.children("li");
                    n.click((function(t) { t.stopPropagation(), $("div.select-styled.active").not(this).each((function() { $(this).removeClass("active").next("ul.select-options").hide() })), $(this).toggleClass("active").next("ul.select-options").toggle() })), o.click((function(t) { t.stopPropagation(), $(this).attr("rel") && (window.location.href = $(this).attr("rel")), r.hide() })), $(document).click((function() { n.removeClass("active"), r.hide() }))
                })), $("body.page.has-hero") && $(".section-title .jumpJs").hide()
            },
            searchTypeahead: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".typeahead";
                $(t).each((function() {
                    var t, e = $(this),
                        n = $('<div class="typeahead__results"></div>').appendTo(e),
                        r = $('<div class="typeahead__loader"></div>').appendTo(n),
                        i = $('<ul class="select-options"></ul>').appendTo(n),
                        o = $('input[type="text"]', e);
                    o.on("keyup", _.debounce((function(a) {
                        i.hide(), i.empty(), 13 !== a.keyCode && (o.val().length > 2 ? (r.show(), n.show(), t && t.cancel(), t = axios.CancelToken.source(), axios.get("/investments/organisation-search", { params: { name: o.val() }, cancelToken: t.token }).then((function(t) {
                            var n = t.data.data;
                            if (n.length)
                                for (var a = 0; a < n.length; a++) $("<li>", { text: n[a] }).on("click", (function(t) {
                                    t.stopPropagation();
                                    var n = $(this).text();
                                    i.hide(), o.val(n), e.submit()
                                })).appendTo(i);
                            else $("<li>", { text: "No organisations found matching that name. Hit enter to search." }).on("click", (function(t) { t.preventDefault(), i.hide(), e.submit() })).appendTo(i);
                            r.hide(), i.show()
                        })).catch((function(t) { axios.isCancel(t) ? console.log("Request canceled", t.message) : console.error(t) }))) : (t && t.cancel(), n.hide(), i.empty()))
                    }), 250)), $(document).on("click", (function() { n.hide(), i.empty() }))
                }))
            },
            recordsCount: function() {
                $(".records-select").each((function() {
                    var t = $(this),
                        e = t.find(".options__item");
                    t.click((function() { $(".records-select").not(t).removeClass("open"), t.toggleClass("open") })), e.click((function() {
                        var e = $(this).data("id") ? $(this).text() : "Filter by " + t.data("type");
                        t.find(".label").html(e), t.find(".options__item").removeClass("selected"), $(this).addClass("selected");
                        var n = $(".records-select.records .options__item.selected"),
                            r = n.length > 0 && n.data("id"),
                            i = k.updateQueryString("page", null);
                        i = k.updateQueryString("per_page", r, i), window.location.href = i
                    }))
                }))
            },
            updateQueryString: function(t, e, n) { var r, i = new RegExp("([?&])" + t + "=.*?(&|#|$)(.*)", "gi"); if (n || (n = window.location.href), i.test(n)) return null != e ? n.replace(i, "$1" + t + "=" + e + "$2$3") : (r = n.split("#"), n = r[0].replace(i, "$1$3").replace(/(&|\?)$/, ""), void 0 !== r[1] && null !== r[1] && (n += "#" + r[1]), n); if (null != e) { var o = -1 !== n.indexOf("?") ? "&" : "?"; return r = n.split("#"), n = r[0] + o + t + "=" + e, void 0 !== r[1] && null !== r[1] && (n += "#" + r[1]), n } return n },
            siteSearch: function() {
                $("#site-search").on("click", (function() { $("header").toggleClass("open"), $("body").toggleClass("scrollOff"), $("#top-search").focus() })), $("header .go-search").on("click", (function(t) {
                    var e = $(this),
                        n = $(this).parent().find(".search-terms");
                    e.hasClass("disabled") && (t.preventDefault(), n.focus(), n.parent().addClass("highlight"), setTimeout((function() { return n.parent().removeClass("highlight") }), 2e3))
                })), $("#top-search").on("focus keydown", (function() {
                    var t = $("header .search-wrap");
                    $("#top-search").hasClass("active") || ($("header .result-list").empty(), t.addClass("active"))
                })), $("#top-search").on("blur", (function() {
                    var t = $("header .search-wrap");
                    0 == $("#top-search").val().length && $("#top-search").hasClass("active") && (t.removeClass("active"), $("header .result-list").empty())
                })), $("header .search-terms").keyup(_.debounce((function() { var t = $(this); "" != t.val() ? (k.doSearch(t.val()), t.next().removeClass("disabled")) : ($("header .search-wrap").removeClass("active"), t.next().addClass("disabled")) }), 500))
            },
            investmentDrawer: function() {
                $(".drawer .drawer-toggle").click((function() {
                    var t = $(this).closest(".drawer"),
                        e = t.find(".drawer-content");
                    t.hasClass("is-active") ? (t.removeClass("is-active"), e.slideUp()) : (t.addClass("is-active"), e.slideDown())
                }))
            },
            doSearch: function(t) {
                var e = { take: 6, terms: t },
                    n = $(".search-wrap .result-list"),
                    r = axios.CancelToken.source();
                r && r.cancel(), r = axios.CancelToken.source(), n.removeClass("complete"), n.addClass("loading"), axios({ method: "post", url: "/search/", data: e, cancelToken: r.token }).then((function(t) { window.setTimeout((function() { n.addClass("complete"), n.empty(), "" != t.data.html ? n.html(t.data.html) : n.append($("<div>").addClass("search-alert").append($("<p>").text("No results found."))) }), 500) })).catch((function(t) { axios.isCancel(t) ? console.log("canceled") : (console.log("server error"), n.empty(), n.append($("<div>").addClass("search-alert").append($("<p>").text("There has been a problem - please try again.")))) })).finally((function() { n.removeClass("loading") }))
            },
            mobileMenu: function() { $(".menu-toggle").on("click", (function() { $("header .search-wrap").hasClass("active") ? ($("#top-search").val(""), $("header .search-wrap").removeClass("active"), $("header .result-list").removeClass("complete"), window.setTimeout((function() { $("header .result-list").empty() }), 1e3), $(window).width() < 880.1 && ($("header").toggleClass("open"), $("body").toggleClass("scrollOff"))) : ($("header").toggleClass("open"), $("body").toggleClass("scrollOff")) })), $("#menu-mobile .l1 a, #menu-mobile .l1 .sub-item").click((function(t) { $(this).parent().hasClass("has-children") && $(t.target).hasClass("indicator") ? (t.preventDefault(), $(this).parent().toggleClass("open")) : $(".menu-toggle").click() })) },
            legalModals: function() {
                var t = $("#main-modal");
                $(".modal-legal").on("click", (function() {
                    var e = $(this).data("id");
                    axios.get("/legals/" + e).then((function(e) { t.html(e.data.html), $("body").addClass("scrollOff"), t.addClass("open"), k.customLinks(t), k.closeModal(t) })).catch((function(t) {}))
                }))
            },
            filtersModals: function() {
                var t = $("#filters-modal");
                $(".modal-filters").on("click", (function() { t.html($(".investment-filters")), $("body").addClass("scrollOff"), t.addClass("open"), k.customLinks(t), k.closeModal(t) }))
            },
            closeModal: function(t) { t.find(".modal-close").on("click", (function() { $("body").removeClass("scrollOff"), t.removeClass("open") })) },
            clearForm: function() { $(".js-clear-form").on("click", (function() { $(this).closest("form").find(":input, textarea").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected") })) },
            remapEsc: function() { $(document).keyup((function(t) { 27 == t.keyCode && $(".esc-this").trigger("click") })) },
            customLinks: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $("body");
                if (t.find("a.flink2").length) {
                    var e = t.find("a.flink2");
                    $(e).each((function() { $(this).wrapInner("<div><span></span></div>"), $(this).prepend("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 43 43'><g fill='none' fill-rule='evenodd'><path stroke-width='2' d='M21 10v14M28 18l-7 7-7-7M31 31H13'></path></g></svg>") }))
                }
                if (t.find("a.flink3").length) {
                    var n = t.find("a.flink3");
                    $(n).each((function() { $(this).wrapInner("<div><span></span></div>"), $(this).prepend("<i><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912a23.195 23.195 0 0 0 16.455 6.816 23.194 23.194 0 0 0 16.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z'/><path d='M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z'/></svg></i>") }))
                }
            },
            newsletterSubscribe: function() {
                $(".newsletter-signup .btn-submit").on("click", (function() {
                    var t = $(this).closest(".subscribe-form"),
                        e = t.find(".nf_name"),
                        n = t.find(".nl_name"),
                        r = t.find(".nl_email"),
                        i = t.find(".nl_agree"),
                        o = {};
                    if (i.prop("checked") || (o.agree = "Please read and agree with our terms.", i.focus()), "" == e.val() && (o.fname = "Please enter your first name.", e.focus()), "" == n.val() && (o.lname = "Please enter your last name.", n.focus()), ("" == r.val() || r.val().indexOf("@", 0) < 0 || r.val().indexOf(".", 0) < 0) && (o.email = "Please enter a valid e-mail.", r.focus()), 0 === Object.keys(o).length) {
                        var a = { fname: e.val(), lname: n.val(), email: r.val(), agree: i.prop("checked") };
                        null !== window._paq && void 0 !== window._paq && null !== window.cookieData && void 0 !== window.cookieData && k.getCookie(window.cookieData.cookieName) > 0 && window._paq.push(["trackEvent", "Subscribe", "Newsletter", "True"]), axios.post("/newsletter/subscribe", a).then((function(o) {
                            if (o.data.success) {
                                var a = t.find(".response-message");
                                a.html(o.data.msg), a.fadeIn(200, (function() { e.val(""), n.val(""), r.val(""), i.prop("checked", !1) })), null !== window._paq && void 0 !== window._paq && null !== window.cookieData && void 0 !== window.cookieData && k.getCookie(window.cookieData.cookieName) > 0 && window._paq.push(["trackEvent", "Subscribe", "Newsletter", "True"]), setTimeout((function() { a.fadeOut() }), 3e3)
                            }
                        })).catch((function(t) { console.warn(t) }))
                    } else $.each(o, (function(t) {
                        var e = $(".subscribe-form ." + t);
                        e.addClass("error"), setTimeout((function() { e.removeClass("error") }), 2e3)
                    }))
                }))
            },
            matomoTracking: function(t, e, n) {
                var r = document.createElement("script");
                window._paq.push(["setTrackerUrl", "https://".concat(t, "/matomo.php")]), window._paq.push(["setSiteId", e]), window._paq.push(["enableLinkTracking"]), window._paq.push(["trackPageView"]), n && (window._paq.push(["rememberConsentGiven"]), window._paq.push(["setConsentGiven"])), r.type = "text/javascript", r.async = !0, r.defer = !0, r.src = "https://cdn.matomo.cloud/".concat(t, "/matomo.js"), document.body.prepend(r)
            },
            linkedinTracking: function(t) {
                var e, n;
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [], window._linkedin_data_partner_ids.push(t), e = document.getElementsByTagName("script")[0], (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js", e.parentNode.insertBefore(n, e)
            },
            twitterTracking: function(t) {
                var e, n, r, i, o, a;
                e = window, n = document, r = "script", e.twq || ((i = e.twq = function() { i.exe ? i.exe.apply(i, arguments) : i.queue.push(arguments) }).version = "1.1", i.queue = [], (o = n.createElement(r)).async = !0, o.src = "//static.ads-twitter.com/uwt.js", (a = n.getElementsByTagName(r)[0]).parentNode.insertBefore(o, a)), twq("init", t), twq("track", "PageView")
            },
            cookieConsent: function(t) {
                function e() { k.setCookie(t, 1), r(), k.tracking(t, !0) }

                function n() { k.setCookie(t, 0), r() }

                function r() { for (var t = document.getElementsByClassName("js-cookie-consent"), e = function(e) { t[e].className += " hidden", setTimeout((function() { t[e].style.display = "none" }), 2e3) }, n = 0; n < t.length; ++n) e(n) }
                k.cookieExists(t.cookieName) && (r(), k.getCookie(t.cookieName) > 0 && k.tracking(t, !0)), document.body.classList.contains("privacy-policy") && r();
                for (var i = document.getElementsByClassName("js-cookie-consent-agree"), o = document.getElementsByClassName("js-cookie-consent-disable"), a = 0; a < i.length; ++a) i[a].addEventListener("click", e);
                for (var u = 0; u < o.length; ++u) o[u].addEventListener("click", n)
            },
            setCookie: function(t, e) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * t.cookieLifetime * 60 * 60 * 1e3), document.cookie = t.cookieName + "=" + e + "; expires=" + n.toUTCString() + ";domain=" + t.cookieDomain + ";path=/" + (t.cookieSecure ? ";secure" : "") + ";samesite=strict"
            },
            cookieExists: function(t) { return !!document.cookie.match(new RegExp("(^| )" + t + "=")) },
            getCookie: function(t) { var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]+)")); return e ? e[2] : null },
            tracking: function(t, e) { void 0 === e | null === e && (e = !1), k.cookieExists(t.cookieName) && k.getCookie(t.cookieName) > 0 && (t.linkedinId && this.linkedinTracking(t.linkedinId), t.twitterId && this.twitterTracking(t.twitterId), t.matomoLocation && t.matomoSiteId && this.matomoTracking(t.matomoLocation, t.matomoSiteId, e)) },
            playVideos: function() {
                var t = $(".section-header video");
                t.length && t.get(0).play()
            },
            initAnimations: function() {
                this.animations.initAll(), this.scrollWatcher.forceUpdate(), $(".toggle-expand").on("click", (function() {
                    var t = $(this).attr("data-toggle-id");
                    $("#" + t).slideToggle(500, (function() {
                        var t = "Toggle";
                        t = $(this).is(":hidden") ? $(this).attr("data-expand-label") : $(this).attr("data-contract-label");
                        var e = $(this).attr("id");
                        $('[data-toggle-id="' + e + '"] span').text(t)
                    }))
                }))
            },
            initParallax: function() {
                var t = new b.a.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "200%" } }),
                    e = new b.a.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "100%" } }),
                    n = document.querySelectorAll("[data-parallax] .parallax-card");
                n.length && n.forEach((function(n, r, i) {
                    r === i.length - 1 ? new b.a.Scene({ triggerElement: n }).setPin(n).addTo(e).on("progress", (function(t) {
                        var e = n.querySelectorAll(".info-panel");
                        t.progress > 0 && e.length && e[0].classList.add("is-active")
                    })) : new b.a.Scene({ triggerElement: n }).setPin(n, { pushFollowers: !1 }).addTo(t).on("progress", (function(t) {
                        var e = n.querySelectorAll(".info-panel");
                        t.progress > 0 && e.length && e[0].classList.add("is-active")
                    }))
                }))
            },
            initParallaxCards: function() {
                var t = document.querySelectorAll("[data-parallax-card]");
                t.length && t.forEach((function(e, n, r) { r.length > 0 && (t[n].querySelector(".parallax__back") && t[n].querySelector(".parallax__back").animate({ transform: ["translateX(-50%) translateY(-60%)", "translateX(-50%) translateY(-40%)"] }, { duration: 1e4, fill: "both", timeline: new ScrollTimeline({ scrollOffsets: [{ target: e, edge: "end", threshold: .8, clamp: !0 }, { target: e, threshold: .8, clamp: !0 }], fill: "both" }) }), t[n].querySelector(".parallax__label") && t[n].querySelector(".parallax__label").animate({ transform: ["translateX(-50%) translateY(-30%)", "translateX(-50%) translateY(-70%)"] }, { duration: 1e4, fill: "both", timeline: new ScrollTimeline({ scrollOffsets: [{ target: e, edge: "end", threshold: .5, clamp: !0 }, { target: e, threshold: .5, clamp: !0 }], fill: "both" }) })) }))
            },
            rolloverImageFollow: function() {
                var t = $(".js-follow-image");
                t && t.length > 0 && $(t).each((function(e) {
                    var n = $(t[e]).find(".tab-image");
                    $(t[e]).mousemove((function(t) {
                        var e = t.offsetX,
                            r = t.offsetY;
                        $(n[0]).css({ left: e, top: r, opacity: 1 })
                    })), $(t[e]).mouseleave((function() { setTimeout((function() { $(n[0]).css({ opacity: 0 }) }), 0) }))
                }))
            }
        };
        $(document).ready((function() { k.initialize(), k.cookieConsent(window.cookieData) })), $(window).bind("scroll", (function() { k.onScroll() }))
    },
    KqvJ: function(t, e) {
        function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function e(e, n, r) { return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e }

            function r() { return (r = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, o(t, e) }

            function o(t, e) { return (o = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (n) return (n = n.call(t)).next.bind(n); if (Array.isArray(t) || (n = function(t, e) { if (t) { if ("string" == typeof t) return a(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0 } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0; return function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

            function l(t, e) { if (t instanceof CSSUnitValue || t instanceof CSSMathSum) return t; if (!e) return null; var n = t.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/); return n ? new CSSUnitValue(n[1], "%" == n[2] ? "percent" : n[2]) : null }! function() {
                var t, n = new WeakMap;

                function r(t) { for (var e, n = [], r = 0; r < t.length; r++) n[r] = "number" == typeof(e = t[r]) ? new CSSUnitValue(e, "number") : e; return n }
                var o = function() {
                        function t(t, e, i, o) { n.set(this, { values: r(t), operator: e, name: i || e, delimiter: o || ", " }) }
                        return t.prototype.toString = function() { var t = n.get(this); return t.name + "(" + t.values.join(t.delimiter) + ")" }, e(t, [{ key: "operator", get: function() { return n.get(this).operator } }, { key: "values", get: function() { return n.get(this).values } }]), t
                    }(),
                    a = ((t = {
                        CSSUnitValue: function() {
                            function t(t, e) { n.set(this, { value: t, unit: e }) }
                            return t.prototype.toString = function() {
                                var t = n.get(this);
                                return "" + t.value + function(t) {
                                    switch (t) {
                                        case "percent":
                                            return "%";
                                        case "number":
                                            return "";
                                        default:
                                            return t.toLowerCase()
                                    }
                                }(t.unit)
                            }, e(t, [{ key: "value", get: function() { return n.get(this).value }, set: function(t) { n.get(this).value = t } }, { key: "unit", get: function() { return n.get(this).unit } }]), t
                        }(),
                        CSSKeywordValue: function() {
                            function t(t) { this.value = t }
                            return t.prototype.toString = function() { return this.value.toString() }, t
                        }(),
                        CSSMathSum: function(t) {
                            function e(e) { return t.call(this, arguments, "sum", "calc", " + ") || this }
                            return i(e, t), e
                        }(o),
                        CSSMathProduct: function(t) {
                            function e(e) { return t.call(this, arguments, "product", "calc", " * ") || this }
                            return i(e, t), e
                        }(o),
                        CSSMathNegate: function(t) {
                            function e(e) { return t.call(this, [arguments[0]], "negate", "-") || this }
                            return i(e, t), e
                        }(o)
                    }).CSSMathNegate = function(t) {
                        function e(e) { return t.call(this, [1, arguments[0]], "invert", "calc", " / ") || this }
                        return i(e, t), e
                    }(o), t.CSSMathMax = function(t) {
                        function e() { return t.call(this, arguments, "max") || this }
                        return i(e, t), e
                    }(o), t.CSSMathMin = function(t) {
                        function e() { return t.call(this, arguments, "min") || this }
                        return i(e, t), e
                    }(o), t);
                if (!window.CSS && !Reflect.defineProperty(window, "CSS", { value: {} })) throw Error("Error installing CSSOM support");
                for (var u in window.CSSUnitValue || ["number", "percent", "em", "ex", "px", "cm", "mm", "in", "pt", "pc", "Q", "vw", "vh", "vmin", "vmax", "rems", "ch", "deg", "rad", "grad", "turn", "ms", "s", "Hz", "kHz", "dppx", "dpi", "dpcm", "fr"].forEach((function(t) { if (!Reflect.defineProperty(CSS, t, { value: function(e) { return new CSSUnitValue(e, t) } })) throw Error("Error installing CSS." + t) })), a)
                    if (!(u in window) && !Reflect.defineProperty(window, u, { value: a[u] })) throw Error("Error installing CSSOM support for " + u)
            }();
            var c = new CSSKeywordValue("auto"),
                s = new WeakMap,
                f = [];

            function d(t) { return t === document.scrollingElement ? document : t }

            function h(t) {
                var e = s.get(t).animations;
                if (0 !== e.length)
                    for (var n = t.currentTime, r = 0; r < e.length; r++) e[r].tickAnimation(n)
            }

            function p(t, e) {
                var n = "horizontal-tb" == getComputedStyle(t).writingMode,
                    r = t.scrollTop;
                return ("horizontal" == e || "inline" == e && n || "block" == e && !n) && (r = Math.abs(t.scrollLeft)), r
            }

            function v(t, e, r, i, o) { if (o) return o(e, r, i, 0 == t.value ? "start" : "end"); "block" === r ? r = "vertical" : "inline" === r && (r = "horizontal"); var a = "vertical" === r ? e.scrollHeight - e.clientHeight : e.scrollWidth - e.clientWidth; return function t(e, r) { if (e instanceof CSSUnitValue) { if ("percent" == e.unit) return e.value * r / 100; if ("px" == e.unit) return e.value; throw TypeError("Unhandled unit type " + e.unit) } if (e instanceof CSSMathSum) { for (var i, o = 0, a = u(e.values); !(i = a()).done;) o += t(i.value, r); return o } throw TypeError("Unsupported value type: " + n(e)) }(l(i === c ? t : i), a) }

            function g(t, e, n, r) {
                var i = [],
                    o = !0;
                0 == n.length ? (i.push(v(new CSSUnitValue(0, "percent"), t, e, c)), o = !1, i.push(v(new CSSUnitValue(100, "percent"), t, e, c))) : 1 == n.length && (i.push(v(new CSSUnitValue(0, "percent"), t, e, c)), o = !1);
                for (var a = 0; a < n.length; a++) {
                    var u = v(o ? new CSSUnitValue(0, "percent") : new CSSUnitValue(100, "percent"), t, e, n[a], r[a]);
                    if (null === u) return [];
                    i.push(u), o = !1
                }
                return i
            }

            function m(t, e) { for (var n = s.get(t).animations, r = 0; r < n.length; r++) n[r].animation == e && n.splice(r, 1) }

            function y(t, e, n) {
                for (var r = s.get(t).animations, i = 0; i < r.length; i++)
                    if (r[i].animation == e) return;
                r.push({ animation: e, tickAnimation: n }), h(t)
            }
            var w = function() {
                function t(t) { s.set(this, { source: null, orientation: "block", scrollOffsets: [], animations: [], scrollOffsetFns: [] }), this.source = t && void 0 !== t.source ? t.source : document.scrollingElement, this.orientation = t && t.orientation || "block", this.scrollOffsets = t && void 0 !== t.scrollOffsets ? t.scrollOffsets : [] }
                return e(t, [{
                    key: "source",
                    get: function() { return s.get(this).source },
                    set: function(t) {
                        var e = this;
                        this.source && d(this.source).removeEventListener("scroll", (function() { return h(e) })), s.get(this).source = t, t && d(t).addEventListener("scroll", (function() { return h(e) })), h(this)
                    }
                }, {
                    key: "orientation",
                    get: function() { return s.get(this).orientation },
                    set: function(t) {
                        if (-1 === ["block", "inline", "horizontal", "vertical"].indexOf(t)) throw TypeError("Invalid orientation");
                        s.get(this).orientation = t, h(this)
                    }
                }, {
                    key: "scrollOffsets",
                    get: function() { return s.get(this).scrollOffsets },
                    set: function(t) {
                        for (var e, n = [], r = [], i = u(t); !(e = i()).done;) {
                            var o = e.value,
                                a = null,
                                d = void 0;
                            "auto" == o && (o = c);
                            for (var p = 0; p < f.length; p++) { var v = f[p].parse(o); if (void 0 !== v) { d = v, a = f[p].evaluate; break } }
                            if (!a) {
                                if (o != c) { var g = l(o); if (!g || g instanceof CSSUnitValue && "number" == g.unit) throw TypeError("Invalid scrollOffsets entry.") }
                                d = o
                            }
                            n.push(d), r.push(a)
                        }
                        if (1 == n.length && n[0] == c) throw TypeError("Invalid scrollOffsets value.");
                        var m = s.get(this);
                        m.scrollOffsets = n, m.scrollOffsetFns = r, h(this)
                    }
                }, { key: "duration", get: function() { return CSS.percent(100) } }, {
                    key: "phase",
                    get: function() {
                        if (!this.source) return "inactive";
                        var t = getComputedStyle(this.source);
                        if ("none" == t.display) return "inactive";
                        if (this.source != document.scrollingElement && ("visible" == t.overflow || "clip" == t.overflow)) return "inactive";
                        var e = g(this.source, this.orientation, this.scrollOffsets, s.get(this).scrollOffsetFns);
                        if (0 == e.length) return "inactive";
                        var n = v(new CSSUnitValue(100, "percent"), this.source, this.orientation, new CSSUnitValue(100, "percent"), null),
                            r = e[0],
                            i = e[e.length - 1],
                            o = p(this.source, this.orientation);
                        return o < r ? "before" : o >= i && i < n ? "after" : "active"
                    }
                }, {
                    key: "currentTime",
                    get: function() {
                        if (!this.source) return null;
                        if ("inactive" == this.phase) return null;
                        var t = g(this.source, this.orientation, this.scrollOffsets, s.get(this).scrollOffsetFns),
                            e = t[0],
                            n = t[t.length - 1],
                            r = p(this.source, this.orientation);
                        if (r < e) return CSS.percent(0);
                        if (r >= n) return CSS.percent(100);
                        var i = function(t, e) { var n; for (n = e.length - 2; n >= 0 && !(e[n] <= t && t < e[n + 1]); n--); var r = e[n]; return (n + (t - r) / (e[n + 1] - r)) * (1 / (e.length - 1)) }(r, t);
                        return CSS.percent(100 * i)
                    }
                }, { key: "__polyfill", get: function() { return !0 } }]), t
            }();
            var _ = function(t) {
                    function n(e) {
                        var n;
                        e.subject && !e.source && (e.source = function t(e) {
                            if (e) switch (getComputedStyle(e)["overflow-x"]) {
                                case "auto":
                                case "scroll":
                                case "hidden":
                                    return e;
                                default:
                                    return t(e.parentNode)
                            }
                        }(e.subject.parentNode)), n = t.call(this, e) || this;
                        var r = s.get(function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(n));
                        return r.subject = e && e.subject ? e.subject : void 0, r.range = e && e.range ? e.range : "cover", n
                    }
                    return i(n, t), e(n, [{ key: "subject", get: function() { return s.get(this).subject } }, { key: "phase", get: function() { if (!this.subject) return "inactive"; var t = this.source; if (!t) return "inactive"; var e = getComputedStyle(t); if ("none" == e.display) return "inactive"; if (t != document.scrollingElement && ("visible" == e.overflow || "clip" == e.overflow)) return "inactive"; for (var n = this.subject; n && n != t;) n = n.offsetParent; return n != t ? "inactive" : "active" } }, { key: "range", get: function() { return s.get(this).range } }, {
                        key: "currentTime",
                        get: function() {
                            if ("inactive" === this.phase) return null;
                            for (var t = this.source, e = this.subject, n = 0, r = 0, i = e; i && i != t;) r += i.offsetLeft, n += i.offsetTop, i = i.offsetParent;
                            var o = getComputedStyle(t),
                                a = "horizontal-tb" == o.writingMode,
                                u = void 0,
                                l = void 0,
                                c = void 0,
                                s = this.orientation;
                            "horizontal" == s || "inline" == s && a || "block" == s && !a ? (u = e.clientWidth, l = r, "rtl" == o.direction && (l += t.scrollWidth - t.clientWidth), c = t.clientWidth) : (u = e.clientHeight, l = n, c = t.clientHeight);
                            var f = p(t, s),
                                d = void 0,
                                h = void 0;
                            switch (this.range) {
                                case "cover":
                                    d = l - c, h = l + u;
                                    break;
                                case "contain":
                                    d = l + u - c, h = l;
                                    break;
                                case "start":
                                    d = l - c, h = l + u - c;
                                    break;
                                case "end":
                                    d = l, h = l + u
                            }
                            return d < h ? CSS.percent((f - d) / (h - d) * 100) : null
                        }
                    }]), n
                }(w),
                b = window.Element.prototype.animate,
                S = window.Animation,
                T = function() {
                    function t() {
                        var t = this;
                        this.state = "pending", this.nativeResolve = this.nativeReject = null, this.promise = new Promise((function(e, n) { t.nativeResolve = e, t.nativeReject = n }))
                    }
                    var e = t.prototype;
                    return e.resolve = function(t) { this.state = "resolved", this.nativeResolve(t) }, e.reject = function(t) { this.state = "rejected", this.promise.catch((function() {})), this.nativeReject(t) }, t
                }();

            function k(t) { t.readyPromise = new T, requestAnimationFrame((function() { null !== t.timeline.currentTime && D(t) })) }

            function x() { return new DOMException("The user aborted a request", "AbortError") }

            function E(t, e) { if (null === e) return e; if ("number" != typeof e) throw new DOMException("Unexpected value: " + e + ".  Cannot convert to CssNumberish", "InvalidStateError"); var n = j(t); return CSS.percent(n ? 100 * e / n : 0) }

            function C(t, e) { if (t.timeline) { if (null === e) return e; if ("percent" === e.unit) { var n = j(t); return e.value * n / 100 } throw new DOMException("CSSNumericValue must be a percentage for progress based animations.", "NotSupportedError") } if (null == e || "number" == typeof e) return e; var r = e.to("ms"); if (convertTime) return r.value; throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.", "InvalidStateError") }

            function R(t) {
                if (t.finishedPromise && "pending" == t.finishedPromise.state && "finished" == t.proxy.playState) {
                    t.finishedPromise.resolve(t.proxy), t.animation.pause();
                    var e = new CustomEvent("finish", { detail: { currentTime: t.proxy.currentTime, timelineTime: t.proxy.timeline.currentTime } });
                    Object.defineProperty(e, "currentTime", { get: function() { return this.detail.currentTime } }), Object.defineProperty(e, "timelineTime", { get: function() { return this.detail.timelineTime } }), requestAnimationFrame((function() { queueMicrotask((function() { t.animation.dispatchEvent(e) })) }))
                }
            }

            function O(t) { return null !== t.pendingPlaybackRate ? t.pendingPlaybackRate : t.animation.playbackRate }

            function I(t) { null !== t.pendingPlaybackRate && (t.animation.playbackRate = t.pendingPlaybackRate, t.pendingPlaybackRate = null) }

            function P(t) { if (!t.timeline) return null; var e = C(t, t.timeline.currentTime); if (null === e) return null; if (null === t.startTime) return null; var n = (e - t.startTime) * t.animation.playbackRate; return -0 == n && (n = 0), n }

            function A(t, e) { if (!t.timeline) return null; var n = C(t, t.timeline.currentTime); return null == n ? null : n - e / t.animation.playbackRate }

            function $(t, e, n) {
                if (t.timeline) {
                    var r = e ? C(t, t.proxy.currentTime) : P(t);
                    if (r && null != t.startTime && !t.proxy.pending) {
                        var i = O(t),
                            o = j(t),
                            a = t.previousCurrentTime;
                        i > 0 && r >= o ? ((null === a || a < o) && (a = o), t.holdTime = e ? r : a) : i < 0 && r <= 0 ? ((null == a || a > 0) && (a = 0), t.holdTime = e ? r : a) : 0 != i && (e && null !== t.holdTime && (t.startTime = A(t, t.holdTime)), t.holdTime = null)
                    }
                    M(t), t.previousCurrentTime = C(t, t.proxy.currentTime), "finished" == t.proxy.playState ? (t.finishedPromise || (t.finishedPromise = new T), "pending" == t.finishedPromise.state && (n ? R(t) : Promise.resolve().then((function() { R(t) })))) : (t.finishedPromise && "resolved" == t.finishedPromise.state && (t.finishedPromise = new T), "paused" != t.animation.playState && t.animation.pause())
                }
            }

            function j(t) { var e = function(t) { var e = t.proxy.effect.getTiming(); return t.normalizedTiming || e }(t); return Math.max(0, e.delay + e.endDelay + e.iterations * e.duration) }

            function M(t) {
                if (t.timeline)
                    if (null !== t.startTime) {
                        var e = C(t, t.timeline.currentTime);
                        t.animation.currentTime = (e - t.startTime) * t.animation.playbackRate
                    } else null !== t.holdTime && (t.animation.currentTime = t.holdTime)
            }

            function N(t, e) {
                if (t.timeline) {
                    var n = "paused" == t.proxy.playState && t.proxy.pending,
                        r = !1,
                        i = null,
                        o = C(t, t.proxy.currentTime);
                    t.resetCurrentTimeOnResume && (o = null, t.resetCurrentTimeOnResume = !1);
                    var a = O(t),
                        u = j(t);
                    if (a > 0 && e && (null == o || o < 0 || o >= u)) i = 0;
                    else if (a < 0 && e && (null == o || o <= 0 || o > u)) {
                        if (1 / 0 == u) return void t.animation.play();
                        i = u
                    } else 0 == a && null == o && (i = 0);
                    null != i && (t.startTime = i, t.holdTime = null, I(t)), y(t.timeline, t.animation, L.bind(t.proxy)), t.holdTime && (t.startTime = null), t.pendingTask && (t.pendingTask = null, r = !0), (null !== t.holdTime || null !== i || n || null !== t.pendingPlaybackRate) && (t.readyPromise && !r && (t.readyPromise = null), M(t), t.readyPromise || k(t), t.pendingTask = "play", $(t, !1, !1))
                }
            }

            function L(t) {
                var e = z.get(this);
                if (null != t) {
                    e.pendingTask && D(e);
                    var n = this.playState;
                    if ("running" == n || "finished" == n) {
                        var r = C(e, t);
                        e.animation.currentTime = (r - C(e, this.startTime)) * this.playbackRate, "finished" == n && 0 != O(e) && (e.holdTime = null), $(e, !1, !1)
                    }
                } else "idle" != e.animation.playState && e.animation.cancel()
            }

            function D(t) {
                "pause" == t.pendingTask ? function(t) {
                    var e = C(t, t.timeline.currentTime);
                    null != t.startTime && null == t.holdTime && (t.holdTime = (e - t.startTime) * t.animation.playbackRate), I(t), t.startTime = null, t.readyPromise.resolve(t.proxy), $(t, !1, !1), M(t), t.pendingTask = null
                }(t) : "play" == t.pendingTask && function(t) {
                    var e = C(t, t.timeline.currentTime);
                    if (null != t.holdTime) I(t), 0 == t.animation.playbackRate ? t.startTime = e : (t.startTime = e - t.holdTime / t.animation.playbackRate, t.holdTime = null);
                    else if (null !== t.startTime && null !== t.pendingPlaybackRate) {
                        var n = (e - t.startTime) * t.animation.playbackRate;
                        I(t);
                        var r = t.animation.playbackRate;
                        0 == r ? (t.holdTime = null, t.startTime = e) : t.startTime = e - n / r
                    }
                    t.readyPromise && "pending" == t.readyPromise.state && t.readyPromise.resolve(t.proxy), $(t, !1, !1), M(t), t.pendingTask = null
                }(t)
            }
            var z = new WeakMap,
                F = function() {
                    function t(t, e) {
                        var n = t instanceof S ? t : new S(t, i),
                            r = e instanceof w,
                            i = r ? void 0 : e;
                        z.set(this, { animation: n, timeline: r ? e : void 0, playState: r ? "idle" : null, readyPromise: null, finishedPromise: null, startTime: null, holdTime: null, previousCurrentTime: null, resetCurrentTimeOnResume: !1, pendingPlaybackRate: null, pendingTask: null, specifiedTiming: null, normalizedTiming: null, effect: null, proxy: this })
                    }
                    var n = t.prototype;
                    return n.finish = function() {
                        var t = z.get(this);
                        if (t.timeline) {
                            var e = O(t),
                                n = j(t);
                            if (0 == e) throw new DOMException("Cannot finish Animation with a playbackRate of 0.", "InvalidStateError");
                            if (e > 0 && 1 / 0 == n) throw new DOMException("Cannot finish Animation with an infinite target effect end.", "InvalidStateError");
                            I(t);
                            var r = e < 0 ? 0 : n;
                            this.currentTime = E(t, r);
                            var i = C(t, t.timeline.currentTime);
                            null === t.startTime && null !== i && (t.startTime = i - r / t.animation.playbackRate), "pause" == t.pendingTask && null !== t.startTime && (t.holdTime = null, t.pendingTask = null, t.readyPromise.resolve(this)), "play" == t.pendingTask && null !== t.startTime && (t.pendingTask = null, t.readyPromise.resolve(this)), $(t, !0, !0)
                        } else t.animation.finish()
                    }, n.play = function() {
                        var t = z.get(this);
                        t.timeline ? N(t, !0) : t.animation.play()
                    }, n.pause = function() {
                        var t = z.get(this);
                        if (t.timeline) {
                            if ("paused" != this.playState) {
                                var e = null,
                                    n = t.animation.playbackRate,
                                    r = j(t);
                                if (null === t.animation.currentTime)
                                    if (n >= 0) e = 0;
                                    else {
                                        if (1 / 0 == r) return void t.animation.pause();
                                        e = r
                                    }
                                null !== e && (t.startTime = e), "play" == t.pendingTask ? t.pendingTask = null : t.readyPromise = null, t.readyPromise || k(t), t.pendingTask = "pause"
                            }
                        } else t.animation.pause()
                    }, n.reverse = function() {
                        var t = z.get(this),
                            e = O(t),
                            n = t.resetCurrentTimeOnResume ? null : C(t, this.currentTime),
                            r = 1 / 0 == j(t),
                            i = 0 != e && (e < 0 || n > 0 || !r);
                        if (!t.timeline || !i) return i && (t.pendingPlaybackRate = -O(t)), void t.animation.reverse();
                        if ("inactive" == t.timeline.phase) throw new DOMException("Cannot reverse an animation with no active timeline", "InvalidStateError");
                        this.updatePlaybackRate(-e), N(t, !0)
                    }, n.updatePlaybackRate = function(t) {
                        var e = z.get(this);
                        if (e.pendingPlaybackRate = t, e.timeline) {
                            if (!e.readyPromise || "pending" != e.readyPromise.state) switch (this.playState) {
                                case "idle":
                                case "paused":
                                    I(e);
                                    break;
                                case "finished":
                                    var n = C(e, e.timeline.currentTime),
                                        r = null !== n ? (n - e.startTime) * e.animation.playbackRate : null;
                                    e.startTime = 0 == t ? n : null != n && null != r ? (n - r) / t : null, I(e), $(e, !1, !1), M(e);
                                    break;
                                default:
                                    N(e, !1)
                            }
                        } else e.animation.updatePlaybackRate(t)
                    }, n.persist = function() { z.get(this).animation.persist() }, n.cancel = function() {
                        var t = z.get(this);
                        t.timeline ? ("idle" != this.playState && (function(t) { t.pendingTask && (t.pendingTask = null, I(t), t.readyPromise.reject(x()), k(t), t.readyPromise.resolve(t.proxy)) }(t), t.finishedPromise && "pending" == t.finishedPromise.state && t.finishedPromise.reject(x()), t.finishedPromise = new T, t.animation.cancel()), t.startTime = null, t.holdTime = null, m(t.timeline, t.animation)) : t.animation.cancel()
                    }, n.addEventListener = function(t, e, n) { z.get(this).animation.addEventListener(t, e, n) }, n.removeEventListener = function(t, e, n) { z.get(this).animation.removeEventListener(t, e, n) }, n.dispatchEvent = function(t) { z.get(this).animation.dispatchEvent(t) }, e(t, [{
                        key: "effect",
                        get: function() {
                            var t = z.get(this);
                            return t.timeline ? (t.effect || (t.effect = function(t) {
                                var e = t.animation.effect,
                                    n = e.updateTiming,
                                    r = {
                                        apply: function(n) {
                                            e.getTiming();
                                            var r = n.apply(e);
                                            if (t.timeline) {
                                                r.localTime = E(t, r.localTime), r.endTime = E(t, r.endTime), r.activeDuration = E(t, r.activeDuration);
                                                var i = j(t);
                                                r.duration = i ? CSS.percent(100 * (r.iterations ? (i - r.delay - r.endDelay) / r.iterations : 0) / i) : CSS.percent(0);
                                                var o = t.timeline.phase,
                                                    a = r.fill;
                                                "before" == o && "backwards" != a && "both" != a && (r.progress = null), "after" == o && "forwards" != a && "both" != a && (r.progress = null), void 0 === t.timeline.currentTime && (r.localTime = null)
                                            }
                                            return r
                                        }
                                    },
                                    i = {
                                        apply: function(r, i) {
                                            if (t.specifiedTiming) return t.specifiedTiming;
                                            t.specifiedTiming = r.apply(e);
                                            var o = Object.assign({}, t.specifiedTiming);
                                            return null !== o.duration && "auto" !== o.duration || t.timeline && (o.delay = 0, o.endDelay = 0, o.duration = o.iterations ? (o.iterations ? 1e5 : 0) / o.iterations : 0, n.apply(e, [o])), t.normalizedTiming = o, t.specifiedTiming
                                        }
                                    },
                                    o = {
                                        apply: function(n, r, i) {
                                            if (t.timeline) { var o = i[0]; if (1 / 0 === o.duration) throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines"); if (1 / 0 === o.iterations) throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines") }
                                            t.specifiedTiming && n.apply(e, [t.specifiedTiming]), n.apply(e, i), t.specifiedTiming = null
                                        }
                                    },
                                    a = new Proxy(e, { get: function(t, n) { var r = t[n]; return "function" == typeof r ? r.bind(e) : r }, set: function(t, e, n) { return t[e] = n, !0 } });
                                return a.getComputedTiming = new Proxy(e.getComputedTiming, r), a.getTiming = new Proxy(e.getTiming, i), a.updateTiming = new Proxy(e.updateTiming, o), a
                            }(t)), t.effect) : t.animation.effect
                        },
                        set: function(t) { z.get(this).animation.effect = t, details.effect = null }
                    }, {
                        key: "timeline",
                        get: function() { var t = z.get(this); return t.timeline || t.animation.timeline },
                        set: function(t) {
                            var e = this.timeline;
                            if (e != t) {
                                var n = this.playState,
                                    r = this.currentTime,
                                    i = z.get(this),
                                    o = j(i),
                                    a = o > 0 ? C(i, r) / o : 0,
                                    u = e instanceof w,
                                    l = t instanceof w;
                                i.resetCurrentTimeOnResume = !1;
                                var c = this.pending;
                                if (u && m(i.timeline, i.animation), l) {
                                    i.timeline = t, I(i);
                                    var s = i.animation.playbackRate >= 0 ? 0 : j(i);
                                    switch (n) {
                                        case "running":
                                        case "finished":
                                            i.startTime = s, y(i.timeline, i.animation, L.bind(this));
                                            break;
                                        case "paused":
                                            i.resetCurrentTimeOnResume = !0, i.startTime = null, i.holdTime = C(i, CSS.percent(100 * a));
                                            break;
                                        default:
                                            i.holdTime = null, i.startTime = null
                                    }
                                    return c && (i.readyPromise && "resolved" != i.readyPromise.state || k(i), i.pendingTask = "paused" == n ? "pause" : "play"), null !== i.startTime && (i.holdTime = null), void $(i, !1, !1)
                                }
                                if (i.animation.timeline != t) throw TypeError("Unsupported timeline: " + t);
                                if (m(i.timeline, i.animation), i.timeline = null, u) switch (null !== r && (i.animation.currentTime = a * j(i)), n) {
                                    case "paused":
                                        i.animation.pause();
                                        break;
                                    case "running":
                                    case "finished":
                                        i.animation.play()
                                }
                            }
                        }
                    }, {
                        key: "startTime",
                        get: function() { var t = z.get(this); return t.timeline ? E(t, t.startTime) : t.animation.startTime },
                        set: function(t) {
                            var e = z.get(this);
                            if (t = C(e, t), e.timeline) {
                                null == C(e, e.timeline.currentTime) && null != e.startTime && (e.holdTime = null, M(e));
                                var n = C(e, this.currentTime);
                                I(e), e.startTime = t, e.resetCurrentTimeOnResume = !1, e.holdTime = null !== e.startTime && 0 != e.animation.playbackRate ? null : n, e.pendingTask && (e.pendingTask = null, e.readyPromise.resolve(this)), $(e, !0, !1), M(e)
                            } else e.animation.startTime = t
                        }
                    }, {
                        key: "currentTime",
                        get: function() { var t = z.get(this); return t.timeline ? E(t, null != t.holdTime ? t.holdTime : P(t)) : t.animation.currentTime },
                        set: function(t) {
                            var e = z.get(this);
                            if (t = C(e, t), e.timeline && null != t) {
                                var n = e.timeline.phase;
                                null !== e.holdTime || null === e.startTime || "inactive" == n || 0 == e.animation.playbackRate ? e.holdTime = t : e.startTime = A(e, t), e.resetCurrentTimeOnResume = !1, "inactive" == n && (e.startTime = null), e.previousCurrentTime = null, "pause" == e.pendingTask && (e.holdTime = t, I(e), e.startTime = null, e.pendingTask = null, e.readyPromise.resolve(this)), $(e, !0, !1)
                            } else e.animation.currentTime = t
                        }
                    }, {
                        key: "playbackRate",
                        get: function() { return z.get(this).animation.playbackRate },
                        set: function(t) {
                            var e = z.get(this);
                            if (e.timeline) {
                                e.pendingPlaybackRate = null;
                                var n = this.currentTime;
                                e.animation.playbackRate = t, null !== n && (this.currentTime = n)
                            } else e.animation.playbackRate = t
                        }
                    }, { key: "playState", get: function() { var t = z.get(this); if (!t.timeline) return t.animation.playState; var e = C(t, this.currentTime); if (null === e && null === t.startTime && null == t.pendingTask) return "idle"; if ("pause" == t.pendingTask || null === t.startTime && "play" != t.pendingTask) return "paused"; if (null != e) { if (t.animation.playbackRate > 0 && e >= j(t)) return "finished"; if (t.animation.playbackRate < 0 && e <= 0) return "finished" } return "running" } }, { key: "replaceState", get: function() { return z.get(this).animation.pending } }, { key: "pending", get: function() { var t = z.get(this); return t.timeline ? !!t.readyPromise && "pending" == t.readyPromise.state : t.animation.pending } }, { key: "id", get: function() { return z.get(this).animation.id } }, { key: "onfinish", get: function() { return z.get(this).animation.onfinish }, set: function(t) { z.get(this).animation.onfinish = t } }, { key: "oncancel", get: function() { return z.get(this).animation.oncancel }, set: function(t) { z.get(this).animation.oncancel = t } }, { key: "onremove", get: function() { return z.get(this).animation.onremove }, set: function(t) { z.get(this).animation.onremove = t } }, { key: "finished", get: function() { var t = z.get(this); return t.timeline ? (t.finishedPromise || (t.finishedPromise = new T), t.finishedPromise.promise) : t.animation.finished } }, { key: "ready", get: function() { var t = z.get(this); return t.timeline ? (t.readyPromise || (t.readyPromise = new T, t.readyPromise.resolve(this)), t.readyPromise.promise) : t.animation.ready } }]), t
                }(),
                U = new WeakMap,
                B = [
                    [
                        [0, 1, 2, 3]
                    ],
                    [
                        [0, 2],
                        [1, 3]
                    ],
                    [
                        [0],
                        [1, 3],
                        [2]
                    ],
                    [
                        [0],
                        [1],
                        [2],
                        [3]
                    ]
                ],
                W = function() {
                    function t(t) {
                        U.set(this, {
                            target: null,
                            edge: "start",
                            threshold: 0,
                            rootMargin: [
                                [0, "px"],
                                [0, "px"],
                                [0, "px"],
                                [0, "px"]
                            ]
                        }), this.target = t.target, this.edge = t.edge || "start", this.threshold = t.threshold || 0, this.rootMargin = t.rootMargin || "0px 0px 0px 0px", this.clamp = t.clamp || !1
                    }
                    return e(t, [{
                        key: "target",
                        get: function() { return U.get(this).target },
                        set: function(t) {
                            if (!(t instanceof Element)) throw U.get(this).target = null, Error("Intersection target must be an element.");
                            U.get(this).target = t
                        }
                    }, { key: "edge", get: function() { return U.get(this).edge }, set: function(t) {-1 != ["start", "end"].indexOf(t) && (U.get(this).edge = t) } }, {
                        key: "threshold",
                        get: function() { return U.get(this).threshold },
                        set: function(t) {
                            var e = parseFloat(t);
                            if (e != e) throw TypeError("Invalid threshold.");
                            if (e < 0 || e > 1) throw TypeError("threshold must be in the range [0, 1]");
                            U.get(this).threshold = e
                        }
                    }, {
                        key: "rootMargin",
                        get: function() { return U.get(this).rootMargin.map((function(t) { return t.join("") })).join(" ") },
                        set: function(t) {
                            var e = t.split(/ +/);
                            if (e.length < 1 || e.length > 4) throw TypeError("rootMargin must contain between 1 and 4 length components");
                            for (var n = [
                                    [],
                                    [],
                                    [],
                                    []
                                ], r = 0; r < e.length; r++) { var i = l(e[r], !0); if (!i) throw TypeError("Unrecognized rootMargin length"); for (var o = B[e.length - 1][r], a = 0; a < o.length; a++) n[o[a]] = [parseFloat(i.value), i.unit] }
                            U.get(this).rootMargin = n
                        }
                    }, { key: "clamp", set: function(t) { U.get(this).clamp = !!t } }]), t
                }(),
                H = { IDENTIFIER: /[\w\\\@_-]+/g, WHITE_SPACE: /\s*/g, NUMBER: /^[0-9]+/, TIME: /^[0-9]+(s|ms)/, ANIMATION_TIMELINE: /animation-timeline\s*:([^;}]+)/, ANIMATION_NAME: /animation-name\s*:([^;}]+)/, ANIMATION: /animation\s*:([^;}]+)/, OFFSET_WITH_SUFFIX: new RegExp("(^[0-9]+)(" + ["em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "q", "in", "pc", "pt", "px", "%"].join("|") + ")"), ELEMENT_OFFSET: /selector\(#([^)]+)\)[ ]{0,1}(start|end)*[ ]{0,1}([0-9]+[.]{0,1}[0-9]*)*/, SOURCE_ELEMENT: /selector\(#([^)]+)\)/ },
                q = new(function() {
                    function t() { this.cssRulesWithTimelineName = [], this.scrollTimelineOptions = new Map, this.keyframeNames = new Set }
                    var e = t.prototype;
                    return e.transpileStyleSheet = function(t, e, n) {
                        for (var r = { sheetSrc: t, index: 0, name: n }; r.index < r.sheetSrc.length && (this.eatWhitespace(r), !(r.index >= r.sheetSrc.length));)
                            if (this.lookAhead("/*", r))
                                for (; this.lookAhead("/*", r);) this.eatComment(r), this.eatWhitespace(r);
                            else if (this.lookAhead("@scroll-timeline", r)) {
                            var i = this.parseScrollTimeline(r).scrollTimeline;
                            e && this.scrollTimelineOptions.set(i.name, i)
                        } else {
                            var o = this.parseQualifiedRule(r);
                            if (!o) continue;
                            e ? this.extractAndSaveKeyframeName(o.selector) : this.handleScrollTimelineProps(o, r)
                        }
                        return r.sheetSrc
                    }, e.getScrollTimelineName = function(t, e) { for (var n = this.cssRulesWithTimelineName.length - 1; n >= 0; n--) { var r = this.cssRulesWithTimelineName[n]; if (e.matches(r.selector) && (!r["animation-name"] || r["animation-name"] == t)) return r["animation-timeline"] } return null }, e.parseScrollTimeline = function(t) {
                        var e = t.index;
                        this.assertString(t, "@scroll-timeline"), this.eatWhitespace(t);
                        var n = this.parseIdentifier(t);
                        this.eatWhitespace(t), this.assertString(t, "{"), this.eatWhitespace(t);
                        for (var r = { name: n, source: "auto", orientation: void 0, "scroll-offsets": void 0 };
                            "}" !== this.peek(t);) {
                            var i = this.parseIdentifier(t);
                            this.eatWhitespace(t), this.assertString(t, ":"), this.eatWhitespace(t), r[i] = this.removeEnclosingDoubleQuotes(this.eatUntil(";", t)), this.assertString(t, ";"), this.eatWhitespace(t)
                        }
                        this.assertString(t, "}");
                        var o = t.index;
                        return this.eatWhitespace(t), { scrollTimeline: r, startIndex: e, endIndex: o }
                    }, e.handleScrollTimelineProps = function(t, e) {
                        var n = this;
                        if (!t.selector.includes("@keyframes")) {
                            var r = t.block.contents.includes("animation-name:"),
                                i = t.block.contents.includes("animation-timeline:"),
                                o = t.block.contents.includes("animation:"),
                                a = [],
                                u = [];
                            i && (a = this.extractMatches(t.block.contents, H.ANIMATION_TIMELINE)), r && (u = this.extractMatches(t.block.contents, H.ANIMATION_NAME)), i && r || o && this.extractMatches(t.block.contents, H.ANIMATION).forEach((function(r) {
                                var i = n.extractAnimationName(r),
                                    o = n.extractTimelineName(r);
                                i && u.push(i), o && (a.push(o), t.block.contents = t.block.contents.replace(o, " ".repeat(o.length)), n.replacePart(t.block.startIndex, t.block.endIndex, t.block.contents, e))
                            })), this.saveRelationInList(t, a, u)
                        }
                    }, e.saveRelationInList = function(t, e, n) {
                        if (0 == n.length)
                            for (var r = 0; r < e.length; r++) this.cssRulesWithTimelineName.push({ selector: t.selector, "animation-name": void 0, "animation-timeline": e[r] });
                        else
                            for (var i = 0; i < Math.max(e.length, n.length); i++) this.cssRulesWithTimelineName.push({ selector: t.selector, "animation-name": n[i % n.length], "animation-timeline": e[i % e.length] })
                    }, e.extractAnimationName = function(t) { return this.findMatchingEntryInContainer(t, this.keyframeNames) }, e.extractTimelineName = function(t) { return this.findMatchingEntryInContainer(t, this.scrollTimelineOptions) }, e.findMatchingEntryInContainer = function(t, e) { var n = t.split(" ").filter((function(t) { return e.has(t) })); return n ? n[0] : null }, e.parseIdentifier = function(t) { H.IDENTIFIER.lastIndex = t.index; var e = H.IDENTIFIER.exec(t.sheetSrc); if (!e) throw this.parseError(t, "Expected an identifier"); return t.index += e[0].length, e[0] }, e.extractAndSaveKeyframeName = function(t) {
                        var e = this;
                        t.startsWith("@keyframes") && t.split(" ").forEach((function(t, n) { n > 0 && e.keyframeNames.add(t) }))
                    }, e.parseQualifiedRule = function(t) {
                        var e = t.index,
                            n = this.parseSelector(t).trim();
                        if (n) return { selector: n, block: this.eatBlock(t), startIndex: e, endIndex: t.index }
                    }, e.removeEnclosingDoubleQuotes = function(t) { return t.substring('"' == t[0] ? 1 : 0, '"' == t[t.length - 1] ? t.length - 1 : t.length) }, e.assertString = function(t, e) {
                        if (t.sheetSrc.substr(t.index, e.length) != e) throw this.parseError(t, "Did not find expected sequence " + e);
                        t.index += e.length
                    }, e.replacePart = function(t, e, n, r) { r.sheetSrc = r.sheetSrc.slice(0, t) + n + r.sheetSrc.slice(e), r.index >= e && (r.index = t + n.length + (r.index - e)) }, e.eatComment = function(t) { this.assertString(t, "/*"), this.eatUntil("*/", t), this.assertString(t, "*/") }, e.eatBlock = function(t) {
                        var e = t.index;
                        this.assertString(t, "{");
                        for (var n = 1; 0 != n;) "{" === t.sheetSrc[t.index] ? n++ : "}" === t.sheetSrc[t.index] && n--, this.advance(t);
                        var r = t.index;
                        return { startIndex: e, endIndex: r, contents: t.sheetSrc.slice(e, r) }
                    }, e.advance = function(t) { if (t.index++, t.index > t.sheetSrc.length) throw this.parseError(t, "Advanced beyond the end") }, e.eatUntil = function(t, e) { for (var n = e.index; !this.lookAhead(t, e);) this.advance(e); return e.sheetSrc.slice(n, e.index) }, e.parseSelector = function(t) { var e = t.index; if (this.eatUntil("{", t), e === t.index) throw Error("Empty selector"); return t.sheetSrc.slice(e, t.index) }, e.eatWhitespace = function(t) {
                        H.WHITE_SPACE.lastIndex = t.index;
                        var e = H.WHITE_SPACE.exec(t.sheetSrc);
                        e && (t.index += e[0].length)
                    }, e.lookAhead = function(t, e) { return e.sheetSrc.substr(e.index, t.length) == t }, e.peek = function(t) { return t.sheetSrc[t.index] }, e.extractMatches = function(t, e) { return e.exec(t)[1].trim().split(",").map((function(t) { return t.trim() })) }, t
                }());

            function V(t) { var e = H.SOURCE_ELEMENT.exec(t); return e ? document.getElementById(e[1]) : "auto" === t ? document.scrollingElement : null }

            function Y(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }
            if (f.push({
                    parse: function(t) { if (t.target) return new W(t) },
                    evaluate: function(t, e, n, r) {
                        "block" == e ? e = "vertical" : "inline" == e && (e = "horizontal");
                        for (var i, o = t == document.scrollingElement ? { left: 0, right: t.clientWidth, top: 0, bottom: t.clientHeight, width: t.clientWidth, height: t.clientHeight } : t.getBoundingClientRect(), a = U.get(n).rootMargin, u = [], l = 0; l < 4; l++) u.push("percent" == (i = a[l])[1] ? i[0] * (l % 2 == 0 ? o.height : o.width) / 100 : i[0]);
                        var c = o.left - u[3],
                            s = o.right - o.left + u[3] + u[1],
                            f = o.top - u[0],
                            d = o.bottom - o.top + u[0] + u[2],
                            h = U.get(n).clamp,
                            p = n.target.getBoundingClientRect(),
                            v = n.threshold;
                        if ("start" == n.edge && (v = 1 - v), "vertical" == e) { var g = p.top + p.height * v - f + t.scrollTop; return h ? "end" == n.edge ? Math.max(0, g - d) : Math.min(g, t.scrollHeight - d) : "end" == n.edge ? g - d : g }
                        var m = p.left + p.width * v - c + t.scrollLeft;
                        return h ? "end" == n.edge ? Math.max(0, m - s) : Math.min(m, t.scrollWidth - s) : "end" == n.edge ? m - s : m
                    }
                }), CSS.supports("animation-timeline: works") || (function() {
                    function t(t) {
                        if (0 !== t.innerHTML.trim().length) {
                            var e = q.transpileStyleSheet(t.innerHTML, !0);
                            e = q.transpileStyleSheet(e, !1), t.innerHTML = e
                        }
                    }
                    new MutationObserver((function(e) {
                        for (var n, r = u(e); !(n = r()).done;)
                            for (var i, o = u(n.value.addedNodes); !(i = o()).done;) {
                                var a = i.value;
                                a instanceof HTMLStyleElement && t(a)
                            }
                    })).observe(document.documentElement, { childList: !0, subtree: !0 }), document.querySelectorAll("style").forEach((function(e) { return t(e) })), document.querySelectorAll("link").forEach((function(t) {}))
                }(), window.addEventListener("animationstart", (function(t) {
                    t.target.getAnimations().filter((function(e) { return e.animationName === t.animationName })).forEach((function(e) {
                        var n = q.getScrollTimelineName(e.animationName, t.target);
                        if (n) {
                            var i = function(t) {
                                var e = q.scrollTimelineOptions.get(t);
                                if (!e) return null;
                                var n = V(e.source),
                                    i = function(t, e) {
                                        var n = void 0;
                                        if (e)
                                            if ("none" == e);
                                            else { for (var i, o = u(n = e.split(",").map((function(t) { return t.trim() })).filter((function(t) { return "" != t })).map((function(t) { return function(t) { if ("auto" == t) return new CSSKeywordValue("auto"); var e = H.OFFSET_WITH_SUFFIX.exec(t); if (e) return new CSSUnitValue(parseInt(e[1]), e[2]); var n = H.ELEMENT_OFFSET.exec(t); return n && document.getElementById(n[1]) ? r({ target: document.getElementById(n[1]) }, n.length >= 3 ? { edge: n[2] } : {}, n.length >= 4 ? { threshold: parseFloat(n[3]) } : {}) : null }(t) })).filter((function(t) { return t }))); !(i = o()).done;) { var a = i.value; if (a.target && a.target instanceof Element && ("none" == window.getComputedStyle(a.target, null).display || !Y(a.target, t))) return null } if (0 == n.length) return null }
                                        return n
                                    }(n, e["scroll-offsets"]);
                                return null !== i ? new ScrollTimeline(r({}, n ? { source: V(e.source) } : {}, i ? { scrollOffsets: i } : {}, "auto" != e.orientation ? { orientation: e.orientation } : {})) : null
                            }(n);
                            if (e.timeline != i) {
                                var o = new F(e, i);
                                e.pause(), o.play()
                            }
                        }
                    }))
                }))), !Reflect.defineProperty(window, "ScrollTimeline", { value: w })) throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");
            if (!Reflect.defineProperty(window, "ViewTimeline", { value: _ })) throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");
            if (!Reflect.defineProperty(Element.prototype, "animate", {
                    value: function(t, e) {
                        var n = e.timeline;
                        n instanceof w && delete e.timeline;
                        var r = b.apply(this, [t, e]),
                            i = new F(r, n);
                        return n instanceof w && (r.pause(), i.play()), i
                    }
                })) throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");
            if (!Reflect.defineProperty(window, "Animation", { value: F })) throw Error("Error installing Animation constructor.")
        }()
    },
    LvDl: function(t, e, n) {
        (function(t, r) {
            var i;
            (function() {
                var o = "Expected a function",
                    a = "__lodash_placeholder__",
                    u = [
                        ["ary", 128],
                        ["bind", 1],
                        ["bindKey", 2],
                        ["curry", 8],
                        ["curryRight", 16],
                        ["flip", 512],
                        ["partial", 32],
                        ["partialRight", 64],
                        ["rearg", 256]
                    ],
                    l = "[object Arguments]",
                    c = "[object Array]",
                    s = "[object Boolean]",
                    f = "[object Date]",
                    d = "[object Error]",
                    h = "[object Function]",
                    p = "[object GeneratorFunction]",
                    v = "[object Map]",
                    g = "[object Number]",
                    m = "[object Object]",
                    y = "[object RegExp]",
                    w = "[object Set]",
                    _ = "[object String]",
                    b = "[object Symbol]",
                    S = "[object WeakMap]",
                    T = "[object ArrayBuffer]",
                    k = "[object DataView]",
                    x = "[object Float32Array]",
                    E = "[object Float64Array]",
                    C = "[object Int8Array]",
                    R = "[object Int16Array]",
                    O = "[object Int32Array]",
                    I = "[object Uint8Array]",
                    P = "[object Uint16Array]",
                    A = "[object Uint32Array]",
                    $ = /\b__p \+= '';/g,
                    j = /\b(__p \+=) '' \+/g,
                    M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    N = /&(?:amp|lt|gt|quot|#39);/g,
                    L = /[&<>"']/g,
                    D = RegExp(N.source),
                    z = RegExp(L.source),
                    F = /<%-([\s\S]+?)%>/g,
                    U = /<%([\s\S]+?)%>/g,
                    B = /<%=([\s\S]+?)%>/g,
                    W = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    H = /^\w*$/,
                    q = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    V = /[\\^$.*+?()[\]{}|]/g,
                    Y = RegExp(V.source),
                    G = /^\s+/,
                    K = /\s/,
                    X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    Z = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    J = /,? & /,
                    Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    tt = /[()=,{}\[\]\/\s]/,
                    et = /\\(\\)?/g,
                    nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    rt = /\w*$/,
                    it = /^[-+]0x[0-9a-f]+$/i,
                    ot = /^0b[01]+$/i,
                    at = /^\[object .+?Constructor\]$/,
                    ut = /^0o[0-7]+$/i,
                    lt = /^(?:0|[1-9]\d*)$/,
                    ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    st = /($^)/,
                    ft = /['\n\r\u2028\u2029\\]/g,
                    dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    ht = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    pt = "[\\ud800-\\udfff]",
                    vt = "[" + ht + "]",
                    gt = "[" + dt + "]",
                    mt = "\\d+",
                    yt = "[\\u2700-\\u27bf]",
                    wt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    _t = "[^\\ud800-\\udfff" + ht + mt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    bt = "\\ud83c[\\udffb-\\udfff]",
                    St = "[^\\ud800-\\udfff]",
                    Tt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    kt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    xt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Et = "(?:" + wt + "|" + _t + ")",
                    Ct = "(?:" + xt + "|" + _t + ")",
                    Rt = "(?:" + gt + "|" + bt + ")" + "?",
                    Ot = "[\\ufe0e\\ufe0f]?" + Rt + ("(?:\\u200d(?:" + [St, Tt, kt].join("|") + ")[\\ufe0e\\ufe0f]?" + Rt + ")*"),
                    It = "(?:" + [yt, Tt, kt].join("|") + ")" + Ot,
                    Pt = "(?:" + [St + gt + "?", gt, Tt, kt, pt].join("|") + ")",
                    At = RegExp("['’]", "g"),
                    $t = RegExp(gt, "g"),
                    jt = RegExp(bt + "(?=" + bt + ")|" + Pt + Ot, "g"),
                    Mt = RegExp([xt + "?" + wt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [vt, xt, "$"].join("|") + ")", Ct + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [vt, xt + Et, "$"].join("|") + ")", xt + "?" + Et + "+(?:['’](?:d|ll|m|re|s|t|ve))?", xt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", mt, It].join("|"), "g"),
                    Nt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
                    Lt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    Dt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    zt = -1,
                    Ft = {};
                Ft[x] = Ft[E] = Ft[C] = Ft[R] = Ft[O] = Ft[I] = Ft["[object Uint8ClampedArray]"] = Ft[P] = Ft[A] = !0, Ft[l] = Ft[c] = Ft[T] = Ft[s] = Ft[k] = Ft[f] = Ft[d] = Ft[h] = Ft[v] = Ft[g] = Ft[m] = Ft[y] = Ft[w] = Ft[_] = Ft[S] = !1;
                var Ut = {};
                Ut[l] = Ut[c] = Ut[T] = Ut[k] = Ut[s] = Ut[f] = Ut[x] = Ut[E] = Ut[C] = Ut[R] = Ut[O] = Ut[v] = Ut[g] = Ut[m] = Ut[y] = Ut[w] = Ut[_] = Ut[b] = Ut[I] = Ut["[object Uint8ClampedArray]"] = Ut[P] = Ut[A] = !0, Ut[d] = Ut[h] = Ut[S] = !1;
                var Bt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                    Wt = parseFloat,
                    Ht = parseInt,
                    qt = "object" == typeof t && t && t.Object === Object && t,
                    Vt = "object" == typeof self && self && self.Object === Object && self,
                    Yt = qt || Vt || Function("return this")(),
                    Gt = e && !e.nodeType && e,
                    Kt = Gt && "object" == typeof r && r && !r.nodeType && r,
                    Xt = Kt && Kt.exports === Gt,
                    Zt = Xt && qt.process,
                    Jt = function() { try { var t = Kt && Kt.require && Kt.require("util").types; return t || Zt && Zt.binding && Zt.binding("util") } catch (t) {} }(),
                    Qt = Jt && Jt.isArrayBuffer,
                    te = Jt && Jt.isDate,
                    ee = Jt && Jt.isMap,
                    ne = Jt && Jt.isRegExp,
                    re = Jt && Jt.isSet,
                    ie = Jt && Jt.isTypedArray;

                function oe(t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }

                function ae(t, e, n, r) {
                    for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                        var a = t[i];
                        e(r, a, n(a), t)
                    }
                    return r
                }

                function ue(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t }

                function le(t, e) { for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t);); return t }

                function ce(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (!e(t[n], n, t)) return !1;
                    return !0
                }

                function se(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                        var a = t[n];
                        e(a, n, t) && (o[i++] = a)
                    }
                    return o
                }

                function fe(t, e) { return !!(null == t ? 0 : t.length) && be(t, e, 0) > -1 }

                function de(t, e, n) {
                    for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                        if (n(e, t[r])) return !0;
                    return !1
                }

                function he(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t); return i }

                function pe(t, e) { for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n]; return t }

                function ve(t, e, n, r) {
                    var i = -1,
                        o = null == t ? 0 : t.length;
                    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                    return n
                }

                function ge(t, e, n, r) { var i = null == t ? 0 : t.length; for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t); return n }

                function me(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1
                }
                var ye = xe("length");

                function we(t, e, n) { var r; return n(t, (function(t, n, i) { if (e(t, n, i)) return r = n, !1 })), r }

                function _e(t, e, n, r) {
                    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                        if (e(t[o], o, t)) return o;
                    return -1
                }

                function be(t, e, n) {
                    return e == e ? function(t, e, n) {
                        var r = n - 1,
                            i = t.length;
                        for (; ++r < i;)
                            if (t[r] === e) return r;
                        return -1
                    }(t, e, n) : _e(t, Te, n)
                }

                function Se(t, e, n, r) {
                    for (var i = n - 1, o = t.length; ++i < o;)
                        if (r(t[i], e)) return i;
                    return -1
                }

                function Te(t) { return t != t }

                function ke(t, e) { var n = null == t ? 0 : t.length; return n ? Re(t, e) / n : NaN }

                function xe(t) { return function(e) { return null == e ? void 0 : e[t] } }

                function Ee(t) { return function(e) { return null == t ? void 0 : t[e] } }

                function Ce(t, e, n, r, i) { return i(t, (function(t, i, o) { n = r ? (r = !1, t) : e(n, t, i, o) })), n }

                function Re(t, e) {
                    for (var n, r = -1, i = t.length; ++r < i;) {
                        var o = e(t[r]);
                        void 0 !== o && (n = void 0 === n ? o : n + o)
                    }
                    return n
                }

                function Oe(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r }

                function Ie(t) { return t ? t.slice(0, Ge(t) + 1).replace(G, "") : t }

                function Pe(t) { return function(e) { return t(e) } }

                function Ae(t, e) { return he(e, (function(e) { return t[e] })) }

                function $e(t, e) { return t.has(e) }

                function je(t, e) { for (var n = -1, r = t.length; ++n < r && be(e, t[n], 0) > -1;); return n }

                function Me(t, e) { for (var n = t.length; n-- && be(e, t[n], 0) > -1;); return n }

                function Ne(t, e) { for (var n = t.length, r = 0; n--;) t[n] === e && ++r; return r }
                var Le = Ee({ "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" }),
                    De = Ee({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });

                function ze(t) { return "\\" + Bt[t] }

                function Fe(t) { return Nt.test(t) }

                function Ue(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t, r) { n[++e] = [r, t] })), n
                }

                function Be(t, e) { return function(n) { return t(e(n)) } }

                function We(t, e) {
                    for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                        var u = t[n];
                        u !== e && u !== a || (t[n] = a, o[i++] = n)
                    }
                    return o
                }

                function He(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) { n[++e] = t })), n
                }

                function qe(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) { n[++e] = [t, t] })), n
                }

                function Ve(t) { return Fe(t) ? function(t) { var e = jt.lastIndex = 0; for (; jt.test(t);) ++e; return e }(t) : ye(t) }

                function Ye(t) { return Fe(t) ? function(t) { return t.match(jt) || [] }(t) : function(t) { return t.split("") }(t) }

                function Ge(t) { for (var e = t.length; e-- && K.test(t.charAt(e));); return e }
                var Ke = Ee({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
                var Xe = function t(e) {
                    var n, r = (e = null == e ? Yt : Xe.defaults(Yt.Object(), e, Xe.pick(Yt, Dt))).Array,
                        i = e.Date,
                        K = e.Error,
                        dt = e.Function,
                        ht = e.Math,
                        pt = e.Object,
                        vt = e.RegExp,
                        gt = e.String,
                        mt = e.TypeError,
                        yt = r.prototype,
                        wt = dt.prototype,
                        _t = pt.prototype,
                        bt = e["__core-js_shared__"],
                        St = wt.toString,
                        Tt = _t.hasOwnProperty,
                        kt = 0,
                        xt = (n = /[^.]+$/.exec(bt && bt.keys && bt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                        Et = _t.toString,
                        Ct = St.call(pt),
                        Rt = Yt._,
                        Ot = vt("^" + St.call(Tt).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        It = Xt ? e.Buffer : void 0,
                        Pt = e.Symbol,
                        jt = e.Uint8Array,
                        Nt = It ? It.allocUnsafe : void 0,
                        Bt = Be(pt.getPrototypeOf, pt),
                        qt = pt.create,
                        Vt = _t.propertyIsEnumerable,
                        Gt = yt.splice,
                        Kt = Pt ? Pt.isConcatSpreadable : void 0,
                        Zt = Pt ? Pt.iterator : void 0,
                        Jt = Pt ? Pt.toStringTag : void 0,
                        ye = function() { try { var t = to(pt, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(),
                        Ee = e.clearTimeout !== Yt.clearTimeout && e.clearTimeout,
                        Ze = i && i.now !== Yt.Date.now && i.now,
                        Je = e.setTimeout !== Yt.setTimeout && e.setTimeout,
                        Qe = ht.ceil,
                        tn = ht.floor,
                        en = pt.getOwnPropertySymbols,
                        nn = It ? It.isBuffer : void 0,
                        rn = e.isFinite,
                        on = yt.join,
                        an = Be(pt.keys, pt),
                        un = ht.max,
                        ln = ht.min,
                        cn = i.now,
                        sn = e.parseInt,
                        fn = ht.random,
                        dn = yt.reverse,
                        hn = to(e, "DataView"),
                        pn = to(e, "Map"),
                        vn = to(e, "Promise"),
                        gn = to(e, "Set"),
                        mn = to(e, "WeakMap"),
                        yn = to(pt, "create"),
                        wn = mn && new mn,
                        _n = {},
                        bn = Ro(hn),
                        Sn = Ro(pn),
                        Tn = Ro(vn),
                        kn = Ro(gn),
                        xn = Ro(mn),
                        En = Pt ? Pt.prototype : void 0,
                        Cn = En ? En.valueOf : void 0,
                        Rn = En ? En.toString : void 0;

                    function On(t) { if (qa(t) && !ja(t) && !(t instanceof $n)) { if (t instanceof An) return t; if (Tt.call(t, "__wrapped__")) return Oo(t) } return new An(t) }
                    var In = function() {
                        function t() {}
                        return function(e) {
                            if (!Ha(e)) return {};
                            if (qt) return qt(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = void 0, n
                        }
                    }();

                    function Pn() {}

                    function An(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }

                    function $n(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [] }

                    function jn(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function Mn(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function Nn(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function Ln(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.__data__ = new Nn; ++e < n;) this.add(t[e])
                    }

                    function Dn(t) {
                        var e = this.__data__ = new Mn(t);
                        this.size = e.size
                    }

                    function zn(t, e) {
                        var n = ja(t),
                            r = !n && $a(t),
                            i = !n && !r && Da(t),
                            o = !n && !r && !i && Qa(t),
                            a = n || r || i || o,
                            u = a ? Oe(t.length, gt) : [],
                            l = u.length;
                        for (var c in t) !e && !Tt.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || uo(c, l)) || u.push(c);
                        return u
                    }

                    function Fn(t) { var e = t.length; return e ? t[Lr(0, e - 1)] : void 0 }

                    function Un(t, e) { return xo(yi(t), Xn(e, 0, t.length)) }

                    function Bn(t) { return xo(yi(t)) }

                    function Wn(t, e, n) {
                        (void 0 !== n && !Ia(t[e], n) || void 0 === n && !(e in t)) && Gn(t, e, n)
                    }

                    function Hn(t, e, n) {
                        var r = t[e];
                        Tt.call(t, e) && Ia(r, n) && (void 0 !== n || e in t) || Gn(t, e, n)
                    }

                    function qn(t, e) {
                        for (var n = t.length; n--;)
                            if (Ia(t[n][0], e)) return n;
                        return -1
                    }

                    function Vn(t, e, n, r) { return er(t, (function(t, i, o) { e(r, t, n(t), o) })), r }

                    function Yn(t, e) { return t && wi(e, bu(e), t) }

                    function Gn(t, e, n) { "__proto__" == e && ye ? ye(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n }

                    function Kn(t, e) { for (var n = -1, i = e.length, o = r(i), a = null == t; ++n < i;) o[n] = a ? void 0 : gu(t, e[n]); return o }

                    function Xn(t, e, n) { return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t }

                    function Zn(t, e, n, r, i, o) {
                        var a, u = 1 & e,
                            c = 2 & e,
                            d = 4 & e;
                        if (n && (a = i ? n(t, r, i, o) : n(t)), void 0 !== a) return a;
                        if (!Ha(t)) return t;
                        var S = ja(t);
                        if (S) {
                            if (a = function(t) {
                                    var e = t.length,
                                        n = new t.constructor(e);
                                    e && "string" == typeof t[0] && Tt.call(t, "index") && (n.index = t.index, n.input = t.input);
                                    return n
                                }(t), !u) return yi(t, a)
                        } else {
                            var $ = ro(t),
                                j = $ == h || $ == p;
                            if (Da(t)) return di(t, u);
                            if ($ == m || $ == l || j && !i) { if (a = c || j ? {} : oo(t), !u) return c ? function(t, e) { return wi(t, no(t), e) }(t, function(t, e) { return t && wi(e, Su(e), t) }(a, t)) : function(t, e) { return wi(t, eo(t), e) }(t, Yn(a, t)) } else {
                                if (!Ut[$]) return i ? t : {};
                                a = function(t, e, n) {
                                    var r = t.constructor;
                                    switch (e) {
                                        case T:
                                            return hi(t);
                                        case s:
                                        case f:
                                            return new r(+t);
                                        case k:
                                            return function(t, e) { var n = e ? hi(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) }(t, n);
                                        case x:
                                        case E:
                                        case C:
                                        case R:
                                        case O:
                                        case I:
                                        case "[object Uint8ClampedArray]":
                                        case P:
                                        case A:
                                            return pi(t, n);
                                        case v:
                                            return new r;
                                        case g:
                                        case _:
                                            return new r(t);
                                        case y:
                                            return function(t) { var e = new t.constructor(t.source, rt.exec(t)); return e.lastIndex = t.lastIndex, e }(t);
                                        case w:
                                            return new r;
                                        case b:
                                            return i = t, Cn ? pt(Cn.call(i)) : {}
                                    }
                                    var i
                                }(t, $, u)
                            }
                        }
                        o || (o = new Dn);
                        var M = o.get(t);
                        if (M) return M;
                        o.set(t, a), Xa(t) ? t.forEach((function(r) { a.add(Zn(r, e, n, r, t, o)) })) : Va(t) && t.forEach((function(r, i) { a.set(i, Zn(r, e, n, i, t, o)) }));
                        var N = S ? void 0 : (d ? c ? Yi : Vi : c ? Su : bu)(t);
                        return ue(N || t, (function(r, i) { N && (r = t[i = r]), Hn(a, i, Zn(r, e, n, i, t, o)) })), a
                    }

                    function Jn(t, e, n) {
                        var r = n.length;
                        if (null == t) return !r;
                        for (t = pt(t); r--;) {
                            var i = n[r],
                                o = e[i],
                                a = t[i];
                            if (void 0 === a && !(i in t) || !o(a)) return !1
                        }
                        return !0
                    }

                    function Qn(t, e, n) { if ("function" != typeof t) throw new mt(o); return bo((function() { t.apply(void 0, n) }), e) }

                    function tr(t, e, n, r) {
                        var i = -1,
                            o = fe,
                            a = !0,
                            u = t.length,
                            l = [],
                            c = e.length;
                        if (!u) return l;
                        n && (e = he(e, Pe(n))), r ? (o = de, a = !1) : e.length >= 200 && (o = $e, a = !1, e = new Ln(e));
                        t: for (; ++i < u;) {
                            var s = t[i],
                                f = null == n ? s : n(s);
                            if (s = r || 0 !== s ? s : 0, a && f == f) {
                                for (var d = c; d--;)
                                    if (e[d] === f) continue t;
                                l.push(s)
                            } else o(e, f, r) || l.push(s)
                        }
                        return l
                    }
                    On.templateSettings = { escape: F, evaluate: U, interpolate: B, variable: "", imports: { _: On } }, On.prototype = Pn.prototype, On.prototype.constructor = On, An.prototype = In(Pn.prototype), An.prototype.constructor = An, $n.prototype = In(Pn.prototype), $n.prototype.constructor = $n, jn.prototype.clear = function() { this.__data__ = yn ? yn(null) : {}, this.size = 0 }, jn.prototype.delete = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }, jn.prototype.get = function(t) { var e = this.__data__; if (yn) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return Tt.call(e, t) ? e[t] : void 0 }, jn.prototype.has = function(t) { var e = this.__data__; return yn ? void 0 !== e[t] : Tt.call(e, t) }, jn.prototype.set = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = yn && void 0 === e ? "__lodash_hash_undefined__" : e, this }, Mn.prototype.clear = function() { this.__data__ = [], this.size = 0 }, Mn.prototype.delete = function(t) {
                        var e = this.__data__,
                            n = qn(e, t);
                        return !(n < 0) && (n == e.length - 1 ? e.pop() : Gt.call(e, n, 1), --this.size, !0)
                    }, Mn.prototype.get = function(t) {
                        var e = this.__data__,
                            n = qn(e, t);
                        return n < 0 ? void 0 : e[n][1]
                    }, Mn.prototype.has = function(t) { return qn(this.__data__, t) > -1 }, Mn.prototype.set = function(t, e) {
                        var n = this.__data__,
                            r = qn(n, t);
                        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                    }, Nn.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new jn, map: new(pn || Mn), string: new jn } }, Nn.prototype.delete = function(t) { var e = Ji(this, t).delete(t); return this.size -= e ? 1 : 0, e }, Nn.prototype.get = function(t) { return Ji(this, t).get(t) }, Nn.prototype.has = function(t) { return Ji(this, t).has(t) }, Nn.prototype.set = function(t, e) {
                        var n = Ji(this, t),
                            r = n.size;
                        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                    }, Ln.prototype.add = Ln.prototype.push = function(t) { return this.__data__.set(t, "__lodash_hash_undefined__"), this }, Ln.prototype.has = function(t) { return this.__data__.has(t) }, Dn.prototype.clear = function() { this.__data__ = new Mn, this.size = 0 }, Dn.prototype.delete = function(t) {
                        var e = this.__data__,
                            n = e.delete(t);
                        return this.size = e.size, n
                    }, Dn.prototype.get = function(t) { return this.__data__.get(t) }, Dn.prototype.has = function(t) { return this.__data__.has(t) }, Dn.prototype.set = function(t, e) {
                        var n = this.__data__;
                        if (n instanceof Mn) {
                            var r = n.__data__;
                            if (!pn || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                            n = this.__data__ = new Nn(r)
                        }
                        return n.set(t, e), this.size = n.size, this
                    };
                    var er = Si(cr),
                        nr = Si(sr, !0);

                    function rr(t, e) { var n = !0; return er(t, (function(t, r, i) { return n = !!e(t, r, i) })), n }

                    function ir(t, e, n) {
                        for (var r = -1, i = t.length; ++r < i;) {
                            var o = t[r],
                                a = e(o);
                            if (null != a && (void 0 === u ? a == a && !Ja(a) : n(a, u))) var u = a,
                                l = o
                        }
                        return l
                    }

                    function or(t, e) { var n = []; return er(t, (function(t, r, i) { e(t, r, i) && n.push(t) })), n }

                    function ar(t, e, n, r, i) {
                        var o = -1,
                            a = t.length;
                        for (n || (n = ao), i || (i = []); ++o < a;) {
                            var u = t[o];
                            e > 0 && n(u) ? e > 1 ? ar(u, e - 1, n, r, i) : pe(i, u) : r || (i[i.length] = u)
                        }
                        return i
                    }
                    var ur = Ti(),
                        lr = Ti(!0);

                    function cr(t, e) { return t && ur(t, e, bu) }

                    function sr(t, e) { return t && lr(t, e, bu) }

                    function fr(t, e) { return se(e, (function(e) { return Ua(t[e]) })) }

                    function dr(t, e) { for (var n = 0, r = (e = li(e, t)).length; null != t && n < r;) t = t[Co(e[n++])]; return n && n == r ? t : void 0 }

                    function hr(t, e, n) { var r = e(t); return ja(t) ? r : pe(r, n(t)) }

                    function pr(t) {
                        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Jt && Jt in pt(t) ? function(t) {
                            var e = Tt.call(t, Jt),
                                n = t[Jt];
                            try { t[Jt] = void 0; var r = !0 } catch (t) {}
                            var i = Et.call(t);
                            r && (e ? t[Jt] = n : delete t[Jt]);
                            return i
                        }(t) : function(t) { return Et.call(t) }(t)
                    }

                    function vr(t, e) { return t > e }

                    function gr(t, e) { return null != t && Tt.call(t, e) }

                    function mr(t, e) { return null != t && e in pt(t) }

                    function yr(t, e, n) {
                        for (var i = n ? de : fe, o = t[0].length, a = t.length, u = a, l = r(a), c = 1 / 0, s = []; u--;) {
                            var f = t[u];
                            u && e && (f = he(f, Pe(e))), c = ln(f.length, c), l[u] = !n && (e || o >= 120 && f.length >= 120) ? new Ln(u && f) : void 0
                        }
                        f = t[0];
                        var d = -1,
                            h = l[0];
                        t: for (; ++d < o && s.length < c;) {
                            var p = f[d],
                                v = e ? e(p) : p;
                            if (p = n || 0 !== p ? p : 0, !(h ? $e(h, v) : i(s, v, n))) {
                                for (u = a; --u;) { var g = l[u]; if (!(g ? $e(g, v) : i(t[u], v, n))) continue t }
                                h && h.push(v), s.push(p)
                            }
                        }
                        return s
                    }

                    function wr(t, e, n) { var r = null == (t = mo(t, e = li(e, t))) ? t : t[Co(Fo(e))]; return null == r ? void 0 : oe(r, t, n) }

                    function _r(t) { return qa(t) && pr(t) == l }

                    function br(t, e, n, r, i) {
                        return t === e || (null == t || null == e || !qa(t) && !qa(e) ? t != t && e != e : function(t, e, n, r, i, o) {
                            var a = ja(t),
                                u = ja(e),
                                h = a ? c : ro(t),
                                p = u ? c : ro(e),
                                S = (h = h == l ? m : h) == m,
                                x = (p = p == l ? m : p) == m,
                                E = h == p;
                            if (E && Da(t)) {
                                if (!Da(e)) return !1;
                                a = !0, S = !1
                            }
                            if (E && !S) return o || (o = new Dn), a || Qa(t) ? Hi(t, e, n, r, i, o) : function(t, e, n, r, i, o, a) {
                                switch (n) {
                                    case k:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                        t = t.buffer, e = e.buffer;
                                    case T:
                                        return !(t.byteLength != e.byteLength || !o(new jt(t), new jt(e)));
                                    case s:
                                    case f:
                                    case g:
                                        return Ia(+t, +e);
                                    case d:
                                        return t.name == e.name && t.message == e.message;
                                    case y:
                                    case _:
                                        return t == e + "";
                                    case v:
                                        var u = Ue;
                                    case w:
                                        var l = 1 & r;
                                        if (u || (u = He), t.size != e.size && !l) return !1;
                                        var c = a.get(t);
                                        if (c) return c == e;
                                        r |= 2, a.set(t, e);
                                        var h = Hi(u(t), u(e), r, i, o, a);
                                        return a.delete(t), h;
                                    case b:
                                        if (Cn) return Cn.call(t) == Cn.call(e)
                                }
                                return !1
                            }(t, e, h, n, r, i, o);
                            if (!(1 & n)) {
                                var C = S && Tt.call(t, "__wrapped__"),
                                    R = x && Tt.call(e, "__wrapped__");
                                if (C || R) {
                                    var O = C ? t.value() : t,
                                        I = R ? e.value() : e;
                                    return o || (o = new Dn), i(O, I, n, r, o)
                                }
                            }
                            if (!E) return !1;
                            return o || (o = new Dn),
                                function(t, e, n, r, i, o) {
                                    var a = 1 & n,
                                        u = Vi(t),
                                        l = u.length,
                                        c = Vi(e).length;
                                    if (l != c && !a) return !1;
                                    var s = l;
                                    for (; s--;) { var f = u[s]; if (!(a ? f in e : Tt.call(e, f))) return !1 }
                                    var d = o.get(t),
                                        h = o.get(e);
                                    if (d && h) return d == e && h == t;
                                    var p = !0;
                                    o.set(t, e), o.set(e, t);
                                    var v = a;
                                    for (; ++s < l;) {
                                        f = u[s];
                                        var g = t[f],
                                            m = e[f];
                                        if (r) var y = a ? r(m, g, f, e, t, o) : r(g, m, f, t, e, o);
                                        if (!(void 0 === y ? g === m || i(g, m, n, r, o) : y)) { p = !1; break }
                                        v || (v = "constructor" == f)
                                    }
                                    if (p && !v) {
                                        var w = t.constructor,
                                            _ = e.constructor;
                                        w == _ || !("constructor" in t) || !("constructor" in e) || "function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _ || (p = !1)
                                    }
                                    return o.delete(t), o.delete(e), p
                                }(t, e, n, r, i, o)
                        }(t, e, n, r, br, i))
                    }

                    function Sr(t, e, n, r) {
                        var i = n.length,
                            o = i,
                            a = !r;
                        if (null == t) return !o;
                        for (t = pt(t); i--;) { var u = n[i]; if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1 }
                        for (; ++i < o;) {
                            var l = (u = n[i])[0],
                                c = t[l],
                                s = u[1];
                            if (a && u[2]) { if (void 0 === c && !(l in t)) return !1 } else { var f = new Dn; if (r) var d = r(c, s, l, t, e, f); if (!(void 0 === d ? br(s, c, 3, r, f) : d)) return !1 }
                        }
                        return !0
                    }

                    function Tr(t) { return !(!Ha(t) || (e = t, xt && xt in e)) && (Ua(t) ? Ot : at).test(Ro(t)); var e }

                    function kr(t) { return "function" == typeof t ? t : null == t ? Yu : "object" == typeof t ? ja(t) ? Ir(t[0], t[1]) : Or(t) : nl(t) }

                    function xr(t) { if (!ho(t)) return an(t); var e = []; for (var n in pt(t)) Tt.call(t, n) && "constructor" != n && e.push(n); return e }

                    function Er(t) {
                        if (!Ha(t)) return function(t) {
                            var e = [];
                            if (null != t)
                                for (var n in pt(t)) e.push(n);
                            return e
                        }(t);
                        var e = ho(t),
                            n = [];
                        for (var r in t)("constructor" != r || !e && Tt.call(t, r)) && n.push(r);
                        return n
                    }

                    function Cr(t, e) { return t < e }

                    function Rr(t, e) {
                        var n = -1,
                            i = Na(t) ? r(t.length) : [];
                        return er(t, (function(t, r, o) { i[++n] = e(t, r, o) })), i
                    }

                    function Or(t) { var e = Qi(t); return 1 == e.length && e[0][2] ? vo(e[0][0], e[0][1]) : function(n) { return n === t || Sr(n, t, e) } }

                    function Ir(t, e) { return co(t) && po(e) ? vo(Co(t), e) : function(n) { var r = gu(n, t); return void 0 === r && r === e ? mu(n, t) : br(e, r, 3) } }

                    function Pr(t, e, n, r, i) {
                        t !== e && ur(e, (function(o, a) {
                            if (i || (i = new Dn), Ha(o)) ! function(t, e, n, r, i, o, a) {
                                var u = wo(t, n),
                                    l = wo(e, n),
                                    c = a.get(l);
                                if (c) return void Wn(t, n, c);
                                var s = o ? o(u, l, n + "", t, e, a) : void 0,
                                    f = void 0 === s;
                                if (f) {
                                    var d = ja(l),
                                        h = !d && Da(l),
                                        p = !d && !h && Qa(l);
                                    s = l, d || h || p ? ja(u) ? s = u : La(u) ? s = yi(u) : h ? (f = !1, s = di(l, !0)) : p ? (f = !1, s = pi(l, !0)) : s = [] : Ga(l) || $a(l) ? (s = u, $a(u) ? s = uu(u) : Ha(u) && !Ua(u) || (s = oo(l))) : f = !1
                                }
                                f && (a.set(l, s), i(s, l, r, o, a), a.delete(l));
                                Wn(t, n, s)
                            }(t, e, a, n, Pr, r, i);
                            else {
                                var u = r ? r(wo(t, a), o, a + "", t, e, i) : void 0;
                                void 0 === u && (u = o), Wn(t, a, u)
                            }
                        }), Su)
                    }

                    function Ar(t, e) { var n = t.length; if (n) return uo(e += e < 0 ? n : 0, n) ? t[e] : void 0 }

                    function $r(t, e, n) {
                        e = e.length ? he(e, (function(t) { return ja(t) ? function(e) { return dr(e, 1 === t.length ? t[0] : t) } : t })) : [Yu];
                        var r = -1;
                        return e = he(e, Pe(Zi())),
                            function(t, e) { var n = t.length; for (t.sort(e); n--;) t[n] = t[n].value; return t }(Rr(t, (function(t, n, i) { return { criteria: he(e, (function(e) { return e(t) })), index: ++r, value: t } })), (function(t, e) {
                                return function(t, e, n) {
                                    var r = -1,
                                        i = t.criteria,
                                        o = e.criteria,
                                        a = i.length,
                                        u = n.length;
                                    for (; ++r < a;) { var l = vi(i[r], o[r]); if (l) { if (r >= u) return l; var c = n[r]; return l * ("desc" == c ? -1 : 1) } }
                                    return t.index - e.index
                                }(t, e, n)
                            }))
                    }

                    function jr(t, e, n) {
                        for (var r = -1, i = e.length, o = {}; ++r < i;) {
                            var a = e[r],
                                u = dr(t, a);
                            n(u, a) && Br(o, li(a, t), u)
                        }
                        return o
                    }

                    function Mr(t, e, n, r) {
                        var i = r ? Se : be,
                            o = -1,
                            a = e.length,
                            u = t;
                        for (t === e && (e = yi(e)), n && (u = he(t, Pe(n))); ++o < a;)
                            for (var l = 0, c = e[o], s = n ? n(c) : c;
                                (l = i(u, s, l, r)) > -1;) u !== t && Gt.call(u, l, 1), Gt.call(t, l, 1);
                        return t
                    }

                    function Nr(t, e) {
                        for (var n = t ? e.length : 0, r = n - 1; n--;) {
                            var i = e[n];
                            if (n == r || i !== o) {
                                var o = i;
                                uo(i) ? Gt.call(t, i, 1) : ti(t, i)
                            }
                        }
                        return t
                    }

                    function Lr(t, e) { return t + tn(fn() * (e - t + 1)) }

                    function Dr(t, e) {
                        var n = "";
                        if (!t || e < 1 || e > 9007199254740991) return n;
                        do { e % 2 && (n += t), (e = tn(e / 2)) && (t += t) } while (e);
                        return n
                    }

                    function zr(t, e) { return So(go(t, e, Yu), t + "") }

                    function Fr(t) { return Fn(Iu(t)) }

                    function Ur(t, e) { var n = Iu(t); return xo(n, Xn(e, 0, n.length)) }

                    function Br(t, e, n, r) {
                        if (!Ha(t)) return t;
                        for (var i = -1, o = (e = li(e, t)).length, a = o - 1, u = t; null != u && ++i < o;) {
                            var l = Co(e[i]),
                                c = n;
                            if ("__proto__" === l || "constructor" === l || "prototype" === l) return t;
                            if (i != a) {
                                var s = u[l];
                                void 0 === (c = r ? r(s, l, u) : void 0) && (c = Ha(s) ? s : uo(e[i + 1]) ? [] : {})
                            }
                            Hn(u, l, c), u = u[l]
                        }
                        return t
                    }
                    var Wr = wn ? function(t, e) { return wn.set(t, e), t } : Yu,
                        Hr = ye ? function(t, e) { return ye(t, "toString", { configurable: !0, enumerable: !1, value: Hu(e), writable: !0 }) } : Yu;

                    function qr(t) { return xo(Iu(t)) }

                    function Vr(t, e, n) {
                        var i = -1,
                            o = t.length;
                        e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
                        for (var a = r(o); ++i < o;) a[i] = t[i + e];
                        return a
                    }

                    function Yr(t, e) { var n; return er(t, (function(t, r, i) { return !(n = e(t, r, i)) })), !!n }

                    function Gr(t, e, n) {
                        var r = 0,
                            i = null == t ? r : t.length;
                        if ("number" == typeof e && e == e && i <= 2147483647) {
                            for (; r < i;) {
                                var o = r + i >>> 1,
                                    a = t[o];
                                null !== a && !Ja(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return Kr(t, e, Yu, n)
                    }

                    function Kr(t, e, n, r) {
                        var i = 0,
                            o = null == t ? 0 : t.length;
                        if (0 === o) return 0;
                        for (var a = (e = n(e)) != e, u = null === e, l = Ja(e), c = void 0 === e; i < o;) {
                            var s = tn((i + o) / 2),
                                f = n(t[s]),
                                d = void 0 !== f,
                                h = null === f,
                                p = f == f,
                                v = Ja(f);
                            if (a) var g = r || p;
                            else g = c ? p && (r || d) : u ? p && d && (r || !h) : l ? p && d && !h && (r || !v) : !h && !v && (r ? f <= e : f < e);
                            g ? i = s + 1 : o = s
                        }
                        return ln(o, 4294967294)
                    }

                    function Xr(t, e) {
                        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                            var a = t[n],
                                u = e ? e(a) : a;
                            if (!n || !Ia(u, l)) {
                                var l = u;
                                o[i++] = 0 === a ? 0 : a
                            }
                        }
                        return o
                    }

                    function Zr(t) { return "number" == typeof t ? t : Ja(t) ? NaN : +t }

                    function Jr(t) { if ("string" == typeof t) return t; if (ja(t)) return he(t, Jr) + ""; if (Ja(t)) return Rn ? Rn.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -1 / 0 ? "-0" : e }

                    function Qr(t, e, n) {
                        var r = -1,
                            i = fe,
                            o = t.length,
                            a = !0,
                            u = [],
                            l = u;
                        if (n) a = !1, i = de;
                        else if (o >= 200) {
                            var c = e ? null : Di(t);
                            if (c) return He(c);
                            a = !1, i = $e, l = new Ln
                        } else l = e ? [] : u;
                        t: for (; ++r < o;) {
                            var s = t[r],
                                f = e ? e(s) : s;
                            if (s = n || 0 !== s ? s : 0, a && f == f) {
                                for (var d = l.length; d--;)
                                    if (l[d] === f) continue t;
                                e && l.push(f), u.push(s)
                            } else i(l, f, n) || (l !== u && l.push(f), u.push(s))
                        }
                        return u
                    }

                    function ti(t, e) { return null == (t = mo(t, e = li(e, t))) || delete t[Co(Fo(e))] }

                    function ei(t, e, n, r) { return Br(t, e, n(dr(t, e)), r) }

                    function ni(t, e, n, r) {
                        for (var i = t.length, o = r ? i : -1;
                            (r ? o-- : ++o < i) && e(t[o], o, t););
                        return n ? Vr(t, r ? 0 : o, r ? o + 1 : i) : Vr(t, r ? o + 1 : 0, r ? i : o)
                    }

                    function ri(t, e) { var n = t; return n instanceof $n && (n = n.value()), ve(e, (function(t, e) { return e.func.apply(e.thisArg, pe([t], e.args)) }), n) }

                    function ii(t, e, n) {
                        var i = t.length;
                        if (i < 2) return i ? Qr(t[0]) : [];
                        for (var o = -1, a = r(i); ++o < i;)
                            for (var u = t[o], l = -1; ++l < i;) l != o && (a[o] = tr(a[o] || u, t[l], e, n));
                        return Qr(ar(a, 1), e, n)
                    }

                    function oi(t, e, n) {
                        for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                            var u = r < o ? e[r] : void 0;
                            n(a, t[r], u)
                        }
                        return a
                    }

                    function ai(t) { return La(t) ? t : [] }

                    function ui(t) { return "function" == typeof t ? t : Yu }

                    function li(t, e) { return ja(t) ? t : co(t, e) ? [t] : Eo(lu(t)) }
                    var ci = zr;

                    function si(t, e, n) { var r = t.length; return n = void 0 === n ? r : n, !e && n >= r ? t : Vr(t, e, n) }
                    var fi = Ee || function(t) { return Yt.clearTimeout(t) };

                    function di(t, e) {
                        if (e) return t.slice();
                        var n = t.length,
                            r = Nt ? Nt(n) : new t.constructor(n);
                        return t.copy(r), r
                    }

                    function hi(t) { var e = new t.constructor(t.byteLength); return new jt(e).set(new jt(t)), e }

                    function pi(t, e) { var n = e ? hi(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }

                    function vi(t, e) {
                        if (t !== e) {
                            var n = void 0 !== t,
                                r = null === t,
                                i = t == t,
                                o = Ja(t),
                                a = void 0 !== e,
                                u = null === e,
                                l = e == e,
                                c = Ja(e);
                            if (!u && !c && !o && t > e || o && a && l && !u && !c || r && a && l || !n && l || !i) return 1;
                            if (!r && !o && !c && t < e || c && n && i && !r && !o || u && n && i || !a && i || !l) return -1
                        }
                        return 0
                    }

                    function gi(t, e, n, i) { for (var o = -1, a = t.length, u = n.length, l = -1, c = e.length, s = un(a - u, 0), f = r(c + s), d = !i; ++l < c;) f[l] = e[l]; for (; ++o < u;)(d || o < a) && (f[n[o]] = t[o]); for (; s--;) f[l++] = t[o++]; return f }

                    function mi(t, e, n, i) { for (var o = -1, a = t.length, u = -1, l = n.length, c = -1, s = e.length, f = un(a - l, 0), d = r(f + s), h = !i; ++o < f;) d[o] = t[o]; for (var p = o; ++c < s;) d[p + c] = e[c]; for (; ++u < l;)(h || o < a) && (d[p + n[u]] = t[o++]); return d }

                    function yi(t, e) {
                        var n = -1,
                            i = t.length;
                        for (e || (e = r(i)); ++n < i;) e[n] = t[n];
                        return e
                    }

                    function wi(t, e, n, r) {
                        var i = !n;
                        n || (n = {});
                        for (var o = -1, a = e.length; ++o < a;) {
                            var u = e[o],
                                l = r ? r(n[u], t[u], u, n, t) : void 0;
                            void 0 === l && (l = t[u]), i ? Gn(n, u, l) : Hn(n, u, l)
                        }
                        return n
                    }

                    function _i(t, e) {
                        return function(n, r) {
                            var i = ja(n) ? ae : Vn,
                                o = e ? e() : {};
                            return i(n, t, Zi(r, 2), o)
                        }
                    }

                    function bi(t) {
                        return zr((function(e, n) {
                            var r = -1,
                                i = n.length,
                                o = i > 1 ? n[i - 1] : void 0,
                                a = i > 2 ? n[2] : void 0;
                            for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && lo(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = pt(e); ++r < i;) {
                                var u = n[r];
                                u && t(e, u, r, o)
                            }
                            return e
                        }))
                    }

                    function Si(t, e) {
                        return function(n, r) {
                            if (null == n) return n;
                            if (!Na(n)) return t(n, r);
                            for (var i = n.length, o = e ? i : -1, a = pt(n);
                                (e ? o-- : ++o < i) && !1 !== r(a[o], o, a););
                            return n
                        }
                    }

                    function Ti(t) { return function(e, n, r) { for (var i = -1, o = pt(e), a = r(e), u = a.length; u--;) { var l = a[t ? u : ++i]; if (!1 === n(o[l], l, o)) break } return e } }

                    function ki(t) {
                        return function(e) {
                            var n = Fe(e = lu(e)) ? Ye(e) : void 0,
                                r = n ? n[0] : e.charAt(0),
                                i = n ? si(n, 1).join("") : e.slice(1);
                            return r[t]() + i
                        }
                    }

                    function xi(t) { return function(e) { return ve(Uu($u(e).replace(At, "")), t, "") } }

                    function Ei(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                            }
                            var n = In(t.prototype),
                                r = t.apply(n, e);
                            return Ha(r) ? r : n
                        }
                    }

                    function Ci(t) {
                        return function(e, n, r) {
                            var i = pt(e);
                            if (!Na(e)) {
                                var o = Zi(n, 3);
                                e = bu(e), n = function(t) { return o(i[t], t, i) }
                            }
                            var a = t(e, n, r);
                            return a > -1 ? i[o ? e[a] : a] : void 0
                        }
                    }

                    function Ri(t) {
                        return qi((function(e) {
                            var n = e.length,
                                r = n,
                                i = An.prototype.thru;
                            for (t && e.reverse(); r--;) { var a = e[r]; if ("function" != typeof a) throw new mt(o); if (i && !u && "wrapper" == Ki(a)) var u = new An([], !0) }
                            for (r = u ? r : n; ++r < n;) {
                                var l = Ki(a = e[r]),
                                    c = "wrapper" == l ? Gi(a) : void 0;
                                u = c && so(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? u[Ki(c[0])].apply(u, c[3]) : 1 == a.length && so(a) ? u[l]() : u.thru(a)
                            }
                            return function() {
                                var t = arguments,
                                    r = t[0];
                                if (u && 1 == t.length && ja(r)) return u.plant(r).value();
                                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                                return o
                            }
                        }))
                    }

                    function Oi(t, e, n, i, o, a, u, l, c, s) {
                        var f = 128 & e,
                            d = 1 & e,
                            h = 2 & e,
                            p = 24 & e,
                            v = 512 & e,
                            g = h ? void 0 : Ei(t);
                        return function m() {
                            for (var y = arguments.length, w = r(y), _ = y; _--;) w[_] = arguments[_];
                            if (p) var b = Xi(m),
                                S = Ne(w, b);
                            if (i && (w = gi(w, i, o, p)), a && (w = mi(w, a, u, p)), y -= S, p && y < s) { var T = We(w, b); return Ni(t, e, Oi, m.placeholder, n, w, T, l, c, s - y) }
                            var k = d ? n : this,
                                x = h ? k[t] : t;
                            return y = w.length, l ? w = yo(w, l) : v && y > 1 && w.reverse(), f && c < y && (w.length = c), this && this !== Yt && this instanceof m && (x = g || Ei(x)), x.apply(k, w)
                        }
                    }

                    function Ii(t, e) { return function(n, r) { return function(t, e, n, r) { return cr(t, (function(t, i, o) { e(r, n(t), i, o) })), r }(n, t, e(r), {}) } }

                    function Pi(t, e) { return function(n, r) { var i; if (void 0 === n && void 0 === r) return e; if (void 0 !== n && (i = n), void 0 !== r) { if (void 0 === i) return r; "string" == typeof n || "string" == typeof r ? (n = Jr(n), r = Jr(r)) : (n = Zr(n), r = Zr(r)), i = t(n, r) } return i } }

                    function Ai(t) { return qi((function(e) { return e = he(e, Pe(Zi())), zr((function(n) { var r = this; return t(e, (function(t) { return oe(t, r, n) })) })) })) }

                    function $i(t, e) { var n = (e = void 0 === e ? " " : Jr(e)).length; if (n < 2) return n ? Dr(e, t) : e; var r = Dr(e, Qe(t / Ve(e))); return Fe(e) ? si(Ye(r), 0, t).join("") : r.slice(0, t) }

                    function ji(t) {
                        return function(e, n, i) {
                            return i && "number" != typeof i && lo(e, n, i) && (n = i = void 0), e = ru(e), void 0 === n ? (n = e, e = 0) : n = ru(n),
                                function(t, e, n, i) { for (var o = -1, a = un(Qe((e - t) / (n || 1)), 0), u = r(a); a--;) u[i ? a : ++o] = t, t += n; return u }(e, n, i = void 0 === i ? e < n ? 1 : -1 : ru(i), t)
                        }
                    }

                    function Mi(t) { return function(e, n) { return "string" == typeof e && "string" == typeof n || (e = au(e), n = au(n)), t(e, n) } }

                    function Ni(t, e, n, r, i, o, a, u, l, c) {
                        var s = 8 & e;
                        e |= s ? 32 : 64, 4 & (e &= ~(s ? 64 : 32)) || (e &= -4);
                        var f = [t, e, i, s ? o : void 0, s ? a : void 0, s ? void 0 : o, s ? void 0 : a, u, l, c],
                            d = n.apply(void 0, f);
                        return so(t) && _o(d, f), d.placeholder = r, To(d, t, e)
                    }

                    function Li(t) { var e = ht[t]; return function(t, n) { if (t = au(t), (n = null == n ? 0 : ln(iu(n), 292)) && rn(t)) { var r = (lu(t) + "e").split("e"); return +((r = (lu(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n)) } return e(t) } }
                    var Di = gn && 1 / He(new gn([, -0]))[1] == 1 / 0 ? function(t) { return new gn(t) } : Ju;

                    function zi(t) { return function(e) { var n = ro(e); return n == v ? Ue(e) : n == w ? qe(e) : function(t, e) { return he(e, (function(e) { return [e, t[e]] })) }(e, t(e)) } }

                    function Fi(t, e, n, i, u, l, c, s) {
                        var f = 2 & e;
                        if (!f && "function" != typeof t) throw new mt(o);
                        var d = i ? i.length : 0;
                        if (d || (e &= -97, i = u = void 0), c = void 0 === c ? c : un(iu(c), 0), s = void 0 === s ? s : iu(s), d -= u ? u.length : 0, 64 & e) {
                            var h = i,
                                p = u;
                            i = u = void 0
                        }
                        var v = f ? void 0 : Gi(t),
                            g = [t, e, n, i, u, h, p, l, c, s];
                        if (v && function(t, e) {
                                var n = t[1],
                                    r = e[1],
                                    i = n | r,
                                    o = i < 131,
                                    u = 128 == r && 8 == n || 128 == r && 256 == n && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == n;
                                if (!o && !u) return t;
                                1 & r && (t[2] = e[2], i |= 1 & n ? 0 : 4);
                                var l = e[3];
                                if (l) {
                                    var c = t[3];
                                    t[3] = c ? gi(c, l, e[4]) : l, t[4] = c ? We(t[3], a) : e[4]
                                }(l = e[5]) && (c = t[5], t[5] = c ? mi(c, l, e[6]) : l, t[6] = c ? We(t[5], a) : e[6]);
                                (l = e[7]) && (t[7] = l);
                                128 & r && (t[8] = null == t[8] ? e[8] : ln(t[8], e[8]));
                                null == t[9] && (t[9] = e[9]);
                                t[0] = e[0], t[1] = i
                            }(g, v), t = g[0], e = g[1], n = g[2], i = g[3], u = g[4], !(s = g[9] = void 0 === g[9] ? f ? 0 : t.length : un(g[9] - d, 0)) && 24 & e && (e &= -25), e && 1 != e) m = 8 == e || 16 == e ? function(t, e, n) { var i = Ei(t); return function o() { for (var a = arguments.length, u = r(a), l = a, c = Xi(o); l--;) u[l] = arguments[l]; var s = a < 3 && u[0] !== c && u[a - 1] !== c ? [] : We(u, c); if ((a -= s.length) < n) return Ni(t, e, Oi, o.placeholder, void 0, u, s, void 0, void 0, n - a); var f = this && this !== Yt && this instanceof o ? i : t; return oe(f, this, u) } }(t, e, s) : 32 != e && 33 != e || u.length ? Oi.apply(void 0, g) : function(t, e, n, i) {
                            var o = 1 & e,
                                a = Ei(t);
                            return function e() { for (var u = -1, l = arguments.length, c = -1, s = i.length, f = r(s + l), d = this && this !== Yt && this instanceof e ? a : t; ++c < s;) f[c] = i[c]; for (; l--;) f[c++] = arguments[++u]; return oe(d, o ? n : this, f) }
                        }(t, e, n, i);
                        else var m = function(t, e, n) {
                            var r = 1 & e,
                                i = Ei(t);
                            return function e() { var o = this && this !== Yt && this instanceof e ? i : t; return o.apply(r ? n : this, arguments) }
                        }(t, e, n);
                        return To((v ? Wr : _o)(m, g), t, e)
                    }

                    function Ui(t, e, n, r) { return void 0 === t || Ia(t, _t[n]) && !Tt.call(r, n) ? e : t }

                    function Bi(t, e, n, r, i, o) { return Ha(t) && Ha(e) && (o.set(e, t), Pr(t, e, void 0, Bi, o), o.delete(e)), t }

                    function Wi(t) { return Ga(t) ? void 0 : t }

                    function Hi(t, e, n, r, i, o) {
                        var a = 1 & n,
                            u = t.length,
                            l = e.length;
                        if (u != l && !(a && l > u)) return !1;
                        var c = o.get(t),
                            s = o.get(e);
                        if (c && s) return c == e && s == t;
                        var f = -1,
                            d = !0,
                            h = 2 & n ? new Ln : void 0;
                        for (o.set(t, e), o.set(e, t); ++f < u;) {
                            var p = t[f],
                                v = e[f];
                            if (r) var g = a ? r(v, p, f, e, t, o) : r(p, v, f, t, e, o);
                            if (void 0 !== g) {
                                if (g) continue;
                                d = !1;
                                break
                            }
                            if (h) { if (!me(e, (function(t, e) { if (!$e(h, e) && (p === t || i(p, t, n, r, o))) return h.push(e) }))) { d = !1; break } } else if (p !== v && !i(p, v, n, r, o)) { d = !1; break }
                        }
                        return o.delete(t), o.delete(e), d
                    }

                    function qi(t) { return So(go(t, void 0, Mo), t + "") }

                    function Vi(t) { return hr(t, bu, eo) }

                    function Yi(t) { return hr(t, Su, no) }
                    var Gi = wn ? function(t) { return wn.get(t) } : Ju;

                    function Ki(t) {
                        for (var e = t.name + "", n = _n[e], r = Tt.call(_n, e) ? n.length : 0; r--;) {
                            var i = n[r],
                                o = i.func;
                            if (null == o || o == t) return i.name
                        }
                        return e
                    }

                    function Xi(t) { return (Tt.call(On, "placeholder") ? On : t).placeholder }

                    function Zi() { var t = On.iteratee || Gu; return t = t === Gu ? kr : t, arguments.length ? t(arguments[0], arguments[1]) : t }

                    function Ji(t, e) { var n, r, i = t.__data__; return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map }

                    function Qi(t) {
                        for (var e = bu(t), n = e.length; n--;) {
                            var r = e[n],
                                i = t[r];
                            e[n] = [r, i, po(i)]
                        }
                        return e
                    }

                    function to(t, e) { var n = function(t, e) { return null == t ? void 0 : t[e] }(t, e); return Tr(n) ? n : void 0 }
                    var eo = en ? function(t) { return null == t ? [] : (t = pt(t), se(en(t), (function(e) { return Vt.call(t, e) }))) } : ol,
                        no = en ? function(t) { for (var e = []; t;) pe(e, eo(t)), t = Bt(t); return e } : ol,
                        ro = pr;

                    function io(t, e, n) {
                        for (var r = -1, i = (e = li(e, t)).length, o = !1; ++r < i;) {
                            var a = Co(e[r]);
                            if (!(o = null != t && n(t, a))) break;
                            t = t[a]
                        }
                        return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Wa(i) && uo(a, i) && (ja(t) || $a(t))
                    }

                    function oo(t) { return "function" != typeof t.constructor || ho(t) ? {} : In(Bt(t)) }

                    function ao(t) { return ja(t) || $a(t) || !!(Kt && t && t[Kt]) }

                    function uo(t, e) { var n = typeof t; return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && lt.test(t)) && t > -1 && t % 1 == 0 && t < e }

                    function lo(t, e, n) { if (!Ha(n)) return !1; var r = typeof e; return !!("number" == r ? Na(n) && uo(e, n.length) : "string" == r && e in n) && Ia(n[e], t) }

                    function co(t, e) { if (ja(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Ja(t)) || (H.test(t) || !W.test(t) || null != e && t in pt(e)) }

                    function so(t) {
                        var e = Ki(t),
                            n = On[e];
                        if ("function" != typeof n || !(e in $n.prototype)) return !1;
                        if (t === n) return !0;
                        var r = Gi(n);
                        return !!r && t === r[0]
                    }(hn && ro(new hn(new ArrayBuffer(1))) != k || pn && ro(new pn) != v || vn && "[object Promise]" != ro(vn.resolve()) || gn && ro(new gn) != w || mn && ro(new mn) != S) && (ro = function(t) {
                        var e = pr(t),
                            n = e == m ? t.constructor : void 0,
                            r = n ? Ro(n) : "";
                        if (r) switch (r) {
                            case bn:
                                return k;
                            case Sn:
                                return v;
                            case Tn:
                                return "[object Promise]";
                            case kn:
                                return w;
                            case xn:
                                return S
                        }
                        return e
                    });
                    var fo = bt ? Ua : al;

                    function ho(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || _t) }

                    function po(t) { return t == t && !Ha(t) }

                    function vo(t, e) { return function(n) { return null != n && (n[t] === e && (void 0 !== e || t in pt(n))) } }

                    function go(t, e, n) {
                        return e = un(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var i = arguments, o = -1, a = un(i.length - e, 0), u = r(a); ++o < a;) u[o] = i[e + o];
                                o = -1;
                                for (var l = r(e + 1); ++o < e;) l[o] = i[o];
                                return l[e] = n(u), oe(t, this, l)
                            }
                    }

                    function mo(t, e) { return e.length < 2 ? t : dr(t, Vr(e, 0, -1)) }

                    function yo(t, e) {
                        for (var n = t.length, r = ln(e.length, n), i = yi(t); r--;) {
                            var o = e[r];
                            t[r] = uo(o, n) ? i[o] : void 0
                        }
                        return t
                    }

                    function wo(t, e) { if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e] }
                    var _o = ko(Wr),
                        bo = Je || function(t, e) { return Yt.setTimeout(t, e) },
                        So = ko(Hr);

                    function To(t, e, n) {
                        var r = e + "";
                        return So(t, function(t, e) { var n = e.length; if (!n) return t; var r = n - 1; return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(X, "{\n/* [wrapped with " + e + "] */\n") }(r, function(t, e) {
                            return ue(u, (function(n) {
                                var r = "_." + n[0];
                                e & n[1] && !fe(t, r) && t.push(r)
                            })), t.sort()
                        }(function(t) { var e = t.match(Z); return e ? e[1].split(J) : [] }(r), n)))
                    }

                    function ko(t) {
                        var e = 0,
                            n = 0;
                        return function() {
                            var r = cn(),
                                i = 16 - (r - n);
                            if (n = r, i > 0) { if (++e >= 800) return arguments[0] } else e = 0;
                            return t.apply(void 0, arguments)
                        }
                    }

                    function xo(t, e) {
                        var n = -1,
                            r = t.length,
                            i = r - 1;
                        for (e = void 0 === e ? r : e; ++n < e;) {
                            var o = Lr(n, i),
                                a = t[o];
                            t[o] = t[n], t[n] = a
                        }
                        return t.length = e, t
                    }
                    var Eo = function(t) {
                        var e = ka(t, (function(t) { return 500 === n.size && n.clear(), t })),
                            n = e.cache;
                        return e
                    }((function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(q, (function(t, n, r, i) { e.push(r ? i.replace(et, "$1") : n || t) })), e }));

                    function Co(t) { if ("string" == typeof t || Ja(t)) return t; var e = t + ""; return "0" == e && 1 / t == -1 / 0 ? "-0" : e }

                    function Ro(t) { if (null != t) { try { return St.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }

                    function Oo(t) { if (t instanceof $n) return t.clone(); var e = new An(t.__wrapped__, t.__chain__); return e.__actions__ = yi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e }
                    var Io = zr((function(t, e) { return La(t) ? tr(t, ar(e, 1, La, !0)) : [] })),
                        Po = zr((function(t, e) { var n = Fo(e); return La(n) && (n = void 0), La(t) ? tr(t, ar(e, 1, La, !0), Zi(n, 2)) : [] })),
                        Ao = zr((function(t, e) { var n = Fo(e); return La(n) && (n = void 0), La(t) ? tr(t, ar(e, 1, La, !0), void 0, n) : [] }));

                    function $o(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var i = null == n ? 0 : iu(n); return i < 0 && (i = un(r + i, 0)), _e(t, Zi(e, 3), i) }

                    function jo(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var i = r - 1; return void 0 !== n && (i = iu(n), i = n < 0 ? un(r + i, 0) : ln(i, r - 1)), _e(t, Zi(e, 3), i, !0) }

                    function Mo(t) { return (null == t ? 0 : t.length) ? ar(t, 1) : [] }

                    function No(t) { return t && t.length ? t[0] : void 0 }
                    var Lo = zr((function(t) { var e = he(t, ai); return e.length && e[0] === t[0] ? yr(e) : [] })),
                        Do = zr((function(t) {
                            var e = Fo(t),
                                n = he(t, ai);
                            return e === Fo(n) ? e = void 0 : n.pop(), n.length && n[0] === t[0] ? yr(n, Zi(e, 2)) : []
                        })),
                        zo = zr((function(t) {
                            var e = Fo(t),
                                n = he(t, ai);
                            return (e = "function" == typeof e ? e : void 0) && n.pop(), n.length && n[0] === t[0] ? yr(n, void 0, e) : []
                        }));

                    function Fo(t) { var e = null == t ? 0 : t.length; return e ? t[e - 1] : void 0 }
                    var Uo = zr(Bo);

                    function Bo(t, e) { return t && t.length && e && e.length ? Mr(t, e) : t }
                    var Wo = qi((function(t, e) {
                        var n = null == t ? 0 : t.length,
                            r = Kn(t, e);
                        return Nr(t, he(e, (function(t) { return uo(t, n) ? +t : t })).sort(vi)), r
                    }));

                    function Ho(t) { return null == t ? t : dn.call(t) }
                    var qo = zr((function(t) { return Qr(ar(t, 1, La, !0)) })),
                        Vo = zr((function(t) { var e = Fo(t); return La(e) && (e = void 0), Qr(ar(t, 1, La, !0), Zi(e, 2)) })),
                        Yo = zr((function(t) { var e = Fo(t); return e = "function" == typeof e ? e : void 0, Qr(ar(t, 1, La, !0), void 0, e) }));

                    function Go(t) { if (!t || !t.length) return []; var e = 0; return t = se(t, (function(t) { if (La(t)) return e = un(t.length, e), !0 })), Oe(e, (function(e) { return he(t, xe(e)) })) }

                    function Ko(t, e) { if (!t || !t.length) return []; var n = Go(t); return null == e ? n : he(n, (function(t) { return oe(e, void 0, t) })) }
                    var Xo = zr((function(t, e) { return La(t) ? tr(t, e) : [] })),
                        Zo = zr((function(t) { return ii(se(t, La)) })),
                        Jo = zr((function(t) { var e = Fo(t); return La(e) && (e = void 0), ii(se(t, La), Zi(e, 2)) })),
                        Qo = zr((function(t) { var e = Fo(t); return e = "function" == typeof e ? e : void 0, ii(se(t, La), void 0, e) })),
                        ta = zr(Go);
                    var ea = zr((function(t) {
                        var e = t.length,
                            n = e > 1 ? t[e - 1] : void 0;
                        return n = "function" == typeof n ? (t.pop(), n) : void 0, Ko(t, n)
                    }));

                    function na(t) { var e = On(t); return e.__chain__ = !0, e }

                    function ra(t, e) { return e(t) }
                    var ia = qi((function(t) {
                        var e = t.length,
                            n = e ? t[0] : 0,
                            r = this.__wrapped__,
                            i = function(e) { return Kn(e, t) };
                        return !(e > 1 || this.__actions__.length) && r instanceof $n && uo(n) ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({ func: ra, args: [i], thisArg: void 0 }), new An(r, this.__chain__).thru((function(t) { return e && !t.length && t.push(void 0), t }))) : this.thru(i)
                    }));
                    var oa = _i((function(t, e, n) { Tt.call(t, n) ? ++t[n] : Gn(t, n, 1) }));
                    var aa = Ci($o),
                        ua = Ci(jo);

                    function la(t, e) { return (ja(t) ? ue : er)(t, Zi(e, 3)) }

                    function ca(t, e) { return (ja(t) ? le : nr)(t, Zi(e, 3)) }
                    var sa = _i((function(t, e, n) { Tt.call(t, n) ? t[n].push(e) : Gn(t, n, [e]) }));
                    var fa = zr((function(t, e, n) {
                            var i = -1,
                                o = "function" == typeof e,
                                a = Na(t) ? r(t.length) : [];
                            return er(t, (function(t) { a[++i] = o ? oe(e, t, n) : wr(t, e, n) })), a
                        })),
                        da = _i((function(t, e, n) { Gn(t, n, e) }));

                    function ha(t, e) { return (ja(t) ? he : Rr)(t, Zi(e, 3)) }
                    var pa = _i((function(t, e, n) { t[n ? 0 : 1].push(e) }), (function() {
                        return [
                            [],
                            []
                        ]
                    }));
                    var va = zr((function(t, e) { if (null == t) return []; var n = e.length; return n > 1 && lo(t, e[0], e[1]) ? e = [] : n > 2 && lo(e[0], e[1], e[2]) && (e = [e[0]]), $r(t, ar(e, 1), []) })),
                        ga = Ze || function() { return Yt.Date.now() };

                    function ma(t, e, n) { return e = n ? void 0 : e, Fi(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e) }

                    function ya(t, e) {
                        var n;
                        if ("function" != typeof e) throw new mt(o);
                        return t = iu(t),
                            function() { return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n }
                    }
                    var wa = zr((function(t, e, n) {
                            var r = 1;
                            if (n.length) {
                                var i = We(n, Xi(wa));
                                r |= 32
                            }
                            return Fi(t, r, e, n, i)
                        })),
                        _a = zr((function(t, e, n) {
                            var r = 3;
                            if (n.length) {
                                var i = We(n, Xi(_a));
                                r |= 32
                            }
                            return Fi(e, r, t, n, i)
                        }));

                    function ba(t, e, n) {
                        var r, i, a, u, l, c, s = 0,
                            f = !1,
                            d = !1,
                            h = !0;
                        if ("function" != typeof t) throw new mt(o);

                        function p(e) {
                            var n = r,
                                o = i;
                            return r = i = void 0, s = e, u = t.apply(o, n)
                        }

                        function v(t) { return s = t, l = bo(m, e), f ? p(t) : u }

                        function g(t) { var n = t - c; return void 0 === c || n >= e || n < 0 || d && t - s >= a }

                        function m() {
                            var t = ga();
                            if (g(t)) return y(t);
                            l = bo(m, function(t) { var n = e - (t - c); return d ? ln(n, a - (t - s)) : n }(t))
                        }

                        function y(t) { return l = void 0, h && r ? p(t) : (r = i = void 0, u) }

                        function w() {
                            var t = ga(),
                                n = g(t);
                            if (r = arguments, i = this, c = t, n) { if (void 0 === l) return v(c); if (d) return fi(l), l = bo(m, e), p(c) }
                            return void 0 === l && (l = bo(m, e)), u
                        }
                        return e = au(e) || 0, Ha(n) && (f = !!n.leading, a = (d = "maxWait" in n) ? un(au(n.maxWait) || 0, e) : a, h = "trailing" in n ? !!n.trailing : h), w.cancel = function() { void 0 !== l && fi(l), s = 0, r = c = i = l = void 0 }, w.flush = function() { return void 0 === l ? u : y(ga()) }, w
                    }
                    var Sa = zr((function(t, e) { return Qn(t, 1, e) })),
                        Ta = zr((function(t, e, n) { return Qn(t, au(e) || 0, n) }));

                    function ka(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e) throw new mt(o);
                        var n = function() {
                            var r = arguments,
                                i = e ? e.apply(this, r) : r[0],
                                o = n.cache;
                            if (o.has(i)) return o.get(i);
                            var a = t.apply(this, r);
                            return n.cache = o.set(i, a) || o, a
                        };
                        return n.cache = new(ka.Cache || Nn), n
                    }

                    function xa(t) {
                        if ("function" != typeof t) throw new mt(o);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return !t.call(this);
                                case 1:
                                    return !t.call(this, e[0]);
                                case 2:
                                    return !t.call(this, e[0], e[1]);
                                case 3:
                                    return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }
                    ka.Cache = Nn;
                    var Ea = ci((function(t, e) { var n = (e = 1 == e.length && ja(e[0]) ? he(e[0], Pe(Zi())) : he(ar(e, 1), Pe(Zi()))).length; return zr((function(r) { for (var i = -1, o = ln(r.length, n); ++i < o;) r[i] = e[i].call(this, r[i]); return oe(t, this, r) })) })),
                        Ca = zr((function(t, e) { return Fi(t, 32, void 0, e, We(e, Xi(Ca))) })),
                        Ra = zr((function(t, e) { return Fi(t, 64, void 0, e, We(e, Xi(Ra))) })),
                        Oa = qi((function(t, e) { return Fi(t, 256, void 0, void 0, void 0, e) }));

                    function Ia(t, e) { return t === e || t != t && e != e }
                    var Pa = Mi(vr),
                        Aa = Mi((function(t, e) { return t >= e })),
                        $a = _r(function() { return arguments }()) ? _r : function(t) { return qa(t) && Tt.call(t, "callee") && !Vt.call(t, "callee") },
                        ja = r.isArray,
                        Ma = Qt ? Pe(Qt) : function(t) { return qa(t) && pr(t) == T };

                    function Na(t) { return null != t && Wa(t.length) && !Ua(t) }

                    function La(t) { return qa(t) && Na(t) }
                    var Da = nn || al,
                        za = te ? Pe(te) : function(t) { return qa(t) && pr(t) == f };

                    function Fa(t) { if (!qa(t)) return !1; var e = pr(t); return e == d || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Ga(t) }

                    function Ua(t) { if (!Ha(t)) return !1; var e = pr(t); return e == h || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e }

                    function Ba(t) { return "number" == typeof t && t == iu(t) }

                    function Wa(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991 }

                    function Ha(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }

                    function qa(t) { return null != t && "object" == typeof t }
                    var Va = ee ? Pe(ee) : function(t) { return qa(t) && ro(t) == v };

                    function Ya(t) { return "number" == typeof t || qa(t) && pr(t) == g }

                    function Ga(t) { if (!qa(t) || pr(t) != m) return !1; var e = Bt(t); if (null === e) return !0; var n = Tt.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && St.call(n) == Ct }
                    var Ka = ne ? Pe(ne) : function(t) { return qa(t) && pr(t) == y };
                    var Xa = re ? Pe(re) : function(t) { return qa(t) && ro(t) == w };

                    function Za(t) { return "string" == typeof t || !ja(t) && qa(t) && pr(t) == _ }

                    function Ja(t) { return "symbol" == typeof t || qa(t) && pr(t) == b }
                    var Qa = ie ? Pe(ie) : function(t) { return qa(t) && Wa(t.length) && !!Ft[pr(t)] };
                    var tu = Mi(Cr),
                        eu = Mi((function(t, e) { return t <= e }));

                    function nu(t) { if (!t) return []; if (Na(t)) return Za(t) ? Ye(t) : yi(t); if (Zt && t[Zt]) return function(t) { for (var e, n = []; !(e = t.next()).done;) n.push(e.value); return n }(t[Zt]()); var e = ro(t); return (e == v ? Ue : e == w ? He : Iu)(t) }

                    function ru(t) { return t ? (t = au(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0 }

                    function iu(t) {
                        var e = ru(t),
                            n = e % 1;
                        return e == e ? n ? e - n : e : 0
                    }

                    function ou(t) { return t ? Xn(iu(t), 0, 4294967295) : 0 }

                    function au(t) {
                        if ("number" == typeof t) return t;
                        if (Ja(t)) return NaN;
                        if (Ha(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = Ha(e) ? e + "" : e
                        }
                        if ("string" != typeof t) return 0 === t ? t : +t;
                        t = Ie(t);
                        var n = ot.test(t);
                        return n || ut.test(t) ? Ht(t.slice(2), n ? 2 : 8) : it.test(t) ? NaN : +t
                    }

                    function uu(t) { return wi(t, Su(t)) }

                    function lu(t) { return null == t ? "" : Jr(t) }
                    var cu = bi((function(t, e) {
                            if (ho(e) || Na(e)) wi(e, bu(e), t);
                            else
                                for (var n in e) Tt.call(e, n) && Hn(t, n, e[n])
                        })),
                        su = bi((function(t, e) { wi(e, Su(e), t) })),
                        fu = bi((function(t, e, n, r) { wi(e, Su(e), t, r) })),
                        du = bi((function(t, e, n, r) { wi(e, bu(e), t, r) })),
                        hu = qi(Kn);
                    var pu = zr((function(t, e) {
                            t = pt(t);
                            var n = -1,
                                r = e.length,
                                i = r > 2 ? e[2] : void 0;
                            for (i && lo(e[0], e[1], i) && (r = 1); ++n < r;)
                                for (var o = e[n], a = Su(o), u = -1, l = a.length; ++u < l;) {
                                    var c = a[u],
                                        s = t[c];
                                    (void 0 === s || Ia(s, _t[c]) && !Tt.call(t, c)) && (t[c] = o[c])
                                }
                            return t
                        })),
                        vu = zr((function(t) { return t.push(void 0, Bi), oe(ku, void 0, t) }));

                    function gu(t, e, n) { var r = null == t ? void 0 : dr(t, e); return void 0 === r ? n : r }

                    function mu(t, e) { return null != t && io(t, e, mr) }
                    var yu = Ii((function(t, e, n) { null != e && "function" != typeof e.toString && (e = Et.call(e)), t[e] = n }), Hu(Yu)),
                        wu = Ii((function(t, e, n) { null != e && "function" != typeof e.toString && (e = Et.call(e)), Tt.call(t, e) ? t[e].push(n) : t[e] = [n] }), Zi),
                        _u = zr(wr);

                    function bu(t) { return Na(t) ? zn(t) : xr(t) }

                    function Su(t) { return Na(t) ? zn(t, !0) : Er(t) }
                    var Tu = bi((function(t, e, n) { Pr(t, e, n) })),
                        ku = bi((function(t, e, n, r) { Pr(t, e, n, r) })),
                        xu = qi((function(t, e) {
                            var n = {};
                            if (null == t) return n;
                            var r = !1;
                            e = he(e, (function(e) { return e = li(e, t), r || (r = e.length > 1), e })), wi(t, Yi(t), n), r && (n = Zn(n, 7, Wi));
                            for (var i = e.length; i--;) ti(n, e[i]);
                            return n
                        }));
                    var Eu = qi((function(t, e) { return null == t ? {} : function(t, e) { return jr(t, e, (function(e, n) { return mu(t, n) })) }(t, e) }));

                    function Cu(t, e) { if (null == t) return {}; var n = he(Yi(t), (function(t) { return [t] })); return e = Zi(e), jr(t, n, (function(t, n) { return e(t, n[0]) })) }
                    var Ru = zi(bu),
                        Ou = zi(Su);

                    function Iu(t) { return null == t ? [] : Ae(t, bu(t)) }
                    var Pu = xi((function(t, e, n) { return e = e.toLowerCase(), t + (n ? Au(e) : e) }));

                    function Au(t) { return Fu(lu(t).toLowerCase()) }

                    function $u(t) { return (t = lu(t)) && t.replace(ct, Le).replace($t, "") }
                    var ju = xi((function(t, e, n) { return t + (n ? "-" : "") + e.toLowerCase() })),
                        Mu = xi((function(t, e, n) { return t + (n ? " " : "") + e.toLowerCase() })),
                        Nu = ki("toLowerCase");
                    var Lu = xi((function(t, e, n) { return t + (n ? "_" : "") + e.toLowerCase() }));
                    var Du = xi((function(t, e, n) { return t + (n ? " " : "") + Fu(e) }));
                    var zu = xi((function(t, e, n) { return t + (n ? " " : "") + e.toUpperCase() })),
                        Fu = ki("toUpperCase");

                    function Uu(t, e, n) { return t = lu(t), void 0 === (e = n ? void 0 : e) ? function(t) { return Lt.test(t) }(t) ? function(t) { return t.match(Mt) || [] }(t) : function(t) { return t.match(Q) || [] }(t) : t.match(e) || [] }
                    var Bu = zr((function(t, e) { try { return oe(t, void 0, e) } catch (t) { return Fa(t) ? t : new K(t) } })),
                        Wu = qi((function(t, e) { return ue(e, (function(e) { e = Co(e), Gn(t, e, wa(t[e], t)) })), t }));

                    function Hu(t) { return function() { return t } }
                    var qu = Ri(),
                        Vu = Ri(!0);

                    function Yu(t) { return t }

                    function Gu(t) { return kr("function" == typeof t ? t : Zn(t, 1)) }
                    var Ku = zr((function(t, e) { return function(n) { return wr(n, t, e) } })),
                        Xu = zr((function(t, e) { return function(n) { return wr(t, n, e) } }));

                    function Zu(t, e, n) {
                        var r = bu(e),
                            i = fr(e, r);
                        null != n || Ha(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = fr(e, bu(e)));
                        var o = !(Ha(n) && "chain" in n && !n.chain),
                            a = Ua(t);
                        return ue(i, (function(n) {
                            var r = e[n];
                            t[n] = r, a && (t.prototype[n] = function() {
                                var e = this.__chain__;
                                if (o || e) {
                                    var n = t(this.__wrapped__),
                                        i = n.__actions__ = yi(this.__actions__);
                                    return i.push({ func: r, args: arguments, thisArg: t }), n.__chain__ = e, n
                                }
                                return r.apply(t, pe([this.value()], arguments))
                            })
                        })), t
                    }

                    function Ju() {}
                    var Qu = Ai(he),
                        tl = Ai(ce),
                        el = Ai(me);

                    function nl(t) { return co(t) ? xe(Co(t)) : function(t) { return function(e) { return dr(e, t) } }(t) }
                    var rl = ji(),
                        il = ji(!0);

                    function ol() { return [] }

                    function al() { return !1 }
                    var ul = Pi((function(t, e) { return t + e }), 0),
                        ll = Li("ceil"),
                        cl = Pi((function(t, e) { return t / e }), 1),
                        sl = Li("floor");
                    var fl, dl = Pi((function(t, e) { return t * e }), 1),
                        hl = Li("round"),
                        pl = Pi((function(t, e) { return t - e }), 0);
                    return On.after = function(t, e) {
                        if ("function" != typeof e) throw new mt(o);
                        return t = iu(t),
                            function() { if (--t < 1) return e.apply(this, arguments) }
                    }, On.ary = ma, On.assign = cu, On.assignIn = su, On.assignInWith = fu, On.assignWith = du, On.at = hu, On.before = ya, On.bind = wa, On.bindAll = Wu, On.bindKey = _a, On.castArray = function() { if (!arguments.length) return []; var t = arguments[0]; return ja(t) ? t : [t] }, On.chain = na, On.chunk = function(t, e, n) { e = (n ? lo(t, e, n) : void 0 === e) ? 1 : un(iu(e), 0); var i = null == t ? 0 : t.length; if (!i || e < 1) return []; for (var o = 0, a = 0, u = r(Qe(i / e)); o < i;) u[a++] = Vr(t, o, o += e); return u }, On.compact = function(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
                            var o = t[e];
                            o && (i[r++] = o)
                        }
                        return i
                    }, On.concat = function() { var t = arguments.length; if (!t) return []; for (var e = r(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i]; return pe(ja(n) ? yi(n) : [n], ar(e, 1)) }, On.cond = function(t) {
                        var e = null == t ? 0 : t.length,
                            n = Zi();
                        return t = e ? he(t, (function(t) { if ("function" != typeof t[1]) throw new mt(o); return [n(t[0]), t[1]] })) : [], zr((function(n) { for (var r = -1; ++r < e;) { var i = t[r]; if (oe(i[0], this, n)) return oe(i[1], this, n) } }))
                    }, On.conforms = function(t) { return function(t) { var e = bu(t); return function(n) { return Jn(n, t, e) } }(Zn(t, 1)) }, On.constant = Hu, On.countBy = oa, On.create = function(t, e) { var n = In(t); return null == e ? n : Yn(n, e) }, On.curry = function t(e, n, r) { var i = Fi(e, 8, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n); return i.placeholder = t.placeholder, i }, On.curryRight = function t(e, n, r) { var i = Fi(e, 16, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n); return i.placeholder = t.placeholder, i }, On.debounce = ba, On.defaults = pu, On.defaultsDeep = vu, On.defer = Sa, On.delay = Ta, On.difference = Io, On.differenceBy = Po, On.differenceWith = Ao, On.drop = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Vr(t, (e = n || void 0 === e ? 1 : iu(e)) < 0 ? 0 : e, r) : [] }, On.dropRight = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Vr(t, 0, (e = r - (e = n || void 0 === e ? 1 : iu(e))) < 0 ? 0 : e) : [] }, On.dropRightWhile = function(t, e) { return t && t.length ? ni(t, Zi(e, 3), !0, !0) : [] }, On.dropWhile = function(t, e) { return t && t.length ? ni(t, Zi(e, 3), !0) : [] }, On.fill = function(t, e, n, r) { var i = null == t ? 0 : t.length; return i ? (n && "number" != typeof n && lo(t, e, n) && (n = 0, r = i), function(t, e, n, r) { var i = t.length; for ((n = iu(n)) < 0 && (n = -n > i ? 0 : i + n), (r = void 0 === r || r > i ? i : iu(r)) < 0 && (r += i), r = n > r ? 0 : ou(r); n < r;) t[n++] = e; return t }(t, e, n, r)) : [] }, On.filter = function(t, e) { return (ja(t) ? se : or)(t, Zi(e, 3)) }, On.flatMap = function(t, e) { return ar(ha(t, e), 1) }, On.flatMapDeep = function(t, e) { return ar(ha(t, e), 1 / 0) }, On.flatMapDepth = function(t, e, n) { return n = void 0 === n ? 1 : iu(n), ar(ha(t, e), n) }, On.flatten = Mo, On.flattenDeep = function(t) { return (null == t ? 0 : t.length) ? ar(t, 1 / 0) : [] }, On.flattenDepth = function(t, e) { return (null == t ? 0 : t.length) ? ar(t, e = void 0 === e ? 1 : iu(e)) : [] }, On.flip = function(t) { return Fi(t, 512) }, On.flow = qu, On.flowRight = Vu, On.fromPairs = function(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
                            var i = t[e];
                            r[i[0]] = i[1]
                        }
                        return r
                    }, On.functions = function(t) { return null == t ? [] : fr(t, bu(t)) }, On.functionsIn = function(t) { return null == t ? [] : fr(t, Su(t)) }, On.groupBy = sa, On.initial = function(t) { return (null == t ? 0 : t.length) ? Vr(t, 0, -1) : [] }, On.intersection = Lo, On.intersectionBy = Do, On.intersectionWith = zo, On.invert = yu, On.invertBy = wu, On.invokeMap = fa, On.iteratee = Gu, On.keyBy = da, On.keys = bu, On.keysIn = Su, On.map = ha, On.mapKeys = function(t, e) { var n = {}; return e = Zi(e, 3), cr(t, (function(t, r, i) { Gn(n, e(t, r, i), t) })), n }, On.mapValues = function(t, e) { var n = {}; return e = Zi(e, 3), cr(t, (function(t, r, i) { Gn(n, r, e(t, r, i)) })), n }, On.matches = function(t) { return Or(Zn(t, 1)) }, On.matchesProperty = function(t, e) { return Ir(t, Zn(e, 1)) }, On.memoize = ka, On.merge = Tu, On.mergeWith = ku, On.method = Ku, On.methodOf = Xu, On.mixin = Zu, On.negate = xa, On.nthArg = function(t) { return t = iu(t), zr((function(e) { return Ar(e, t) })) }, On.omit = xu, On.omitBy = function(t, e) { return Cu(t, xa(Zi(e))) }, On.once = function(t) { return ya(2, t) }, On.orderBy = function(t, e, n, r) { return null == t ? [] : (ja(e) || (e = null == e ? [] : [e]), ja(n = r ? void 0 : n) || (n = null == n ? [] : [n]), $r(t, e, n)) }, On.over = Qu, On.overArgs = Ea, On.overEvery = tl, On.overSome = el, On.partial = Ca, On.partialRight = Ra, On.partition = pa, On.pick = Eu, On.pickBy = Cu, On.property = nl, On.propertyOf = function(t) { return function(e) { return null == t ? void 0 : dr(t, e) } }, On.pull = Uo, On.pullAll = Bo, On.pullAllBy = function(t, e, n) { return t && t.length && e && e.length ? Mr(t, e, Zi(n, 2)) : t }, On.pullAllWith = function(t, e, n) { return t && t.length && e && e.length ? Mr(t, e, void 0, n) : t }, On.pullAt = Wo, On.range = rl, On.rangeRight = il, On.rearg = Oa, On.reject = function(t, e) { return (ja(t) ? se : or)(t, xa(Zi(e, 3))) }, On.remove = function(t, e) {
                        var n = [];
                        if (!t || !t.length) return n;
                        var r = -1,
                            i = [],
                            o = t.length;
                        for (e = Zi(e, 3); ++r < o;) {
                            var a = t[r];
                            e(a, r, t) && (n.push(a), i.push(r))
                        }
                        return Nr(t, i), n
                    }, On.rest = function(t, e) { if ("function" != typeof t) throw new mt(o); return zr(t, e = void 0 === e ? e : iu(e)) }, On.reverse = Ho, On.sampleSize = function(t, e, n) { return e = (n ? lo(t, e, n) : void 0 === e) ? 1 : iu(e), (ja(t) ? Un : Ur)(t, e) }, On.set = function(t, e, n) { return null == t ? t : Br(t, e, n) }, On.setWith = function(t, e, n, r) { return r = "function" == typeof r ? r : void 0, null == t ? t : Br(t, e, n, r) }, On.shuffle = function(t) { return (ja(t) ? Bn : qr)(t) }, On.slice = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? (n && "number" != typeof n && lo(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : iu(e), n = void 0 === n ? r : iu(n)), Vr(t, e, n)) : [] }, On.sortBy = va, On.sortedUniq = function(t) { return t && t.length ? Xr(t) : [] }, On.sortedUniqBy = function(t, e) { return t && t.length ? Xr(t, Zi(e, 2)) : [] }, On.split = function(t, e, n) { return n && "number" != typeof n && lo(t, e, n) && (e = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (t = lu(t)) && ("string" == typeof e || null != e && !Ka(e)) && !(e = Jr(e)) && Fe(t) ? si(Ye(t), 0, n) : t.split(e, n) : [] }, On.spread = function(t, e) {
                        if ("function" != typeof t) throw new mt(o);
                        return e = null == e ? 0 : un(iu(e), 0), zr((function(n) {
                            var r = n[e],
                                i = si(n, 0, e);
                            return r && pe(i, r), oe(t, this, i)
                        }))
                    }, On.tail = function(t) { var e = null == t ? 0 : t.length; return e ? Vr(t, 1, e) : [] }, On.take = function(t, e, n) { return t && t.length ? Vr(t, 0, (e = n || void 0 === e ? 1 : iu(e)) < 0 ? 0 : e) : [] }, On.takeRight = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Vr(t, (e = r - (e = n || void 0 === e ? 1 : iu(e))) < 0 ? 0 : e, r) : [] }, On.takeRightWhile = function(t, e) { return t && t.length ? ni(t, Zi(e, 3), !1, !0) : [] }, On.takeWhile = function(t, e) { return t && t.length ? ni(t, Zi(e, 3)) : [] }, On.tap = function(t, e) { return e(t), t }, On.throttle = function(t, e, n) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof t) throw new mt(o);
                        return Ha(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ba(t, e, { leading: r, maxWait: e, trailing: i })
                    }, On.thru = ra, On.toArray = nu, On.toPairs = Ru, On.toPairsIn = Ou, On.toPath = function(t) { return ja(t) ? he(t, Co) : Ja(t) ? [t] : yi(Eo(lu(t))) }, On.toPlainObject = uu, On.transform = function(t, e, n) {
                        var r = ja(t),
                            i = r || Da(t) || Qa(t);
                        if (e = Zi(e, 4), null == n) {
                            var o = t && t.constructor;
                            n = i ? r ? new o : [] : Ha(t) && Ua(o) ? In(Bt(t)) : {}
                        }
                        return (i ? ue : cr)(t, (function(t, r, i) { return e(n, t, r, i) })), n
                    }, On.unary = function(t) { return ma(t, 1) }, On.union = qo, On.unionBy = Vo, On.unionWith = Yo, On.uniq = function(t) { return t && t.length ? Qr(t) : [] }, On.uniqBy = function(t, e) { return t && t.length ? Qr(t, Zi(e, 2)) : [] }, On.uniqWith = function(t, e) { return e = "function" == typeof e ? e : void 0, t && t.length ? Qr(t, void 0, e) : [] }, On.unset = function(t, e) { return null == t || ti(t, e) }, On.unzip = Go, On.unzipWith = Ko, On.update = function(t, e, n) { return null == t ? t : ei(t, e, ui(n)) }, On.updateWith = function(t, e, n, r) { return r = "function" == typeof r ? r : void 0, null == t ? t : ei(t, e, ui(n), r) }, On.values = Iu, On.valuesIn = function(t) { return null == t ? [] : Ae(t, Su(t)) }, On.without = Xo, On.words = Uu, On.wrap = function(t, e) { return Ca(ui(e), t) }, On.xor = Zo, On.xorBy = Jo, On.xorWith = Qo, On.zip = ta, On.zipObject = function(t, e) { return oi(t || [], e || [], Hn) }, On.zipObjectDeep = function(t, e) { return oi(t || [], e || [], Br) }, On.zipWith = ea, On.entries = Ru, On.entriesIn = Ou, On.extend = su, On.extendWith = fu, Zu(On, On), On.add = ul, On.attempt = Bu, On.camelCase = Pu, On.capitalize = Au, On.ceil = ll, On.clamp = function(t, e, n) { return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = au(n)) == n ? n : 0), void 0 !== e && (e = (e = au(e)) == e ? e : 0), Xn(au(t), e, n) }, On.clone = function(t) { return Zn(t, 4) }, On.cloneDeep = function(t) { return Zn(t, 5) }, On.cloneDeepWith = function(t, e) { return Zn(t, 5, e = "function" == typeof e ? e : void 0) }, On.cloneWith = function(t, e) { return Zn(t, 4, e = "function" == typeof e ? e : void 0) }, On.conformsTo = function(t, e) { return null == e || Jn(t, e, bu(e)) }, On.deburr = $u, On.defaultTo = function(t, e) { return null == t || t != t ? e : t }, On.divide = cl, On.endsWith = function(t, e, n) {
                        t = lu(t), e = Jr(e);
                        var r = t.length,
                            i = n = void 0 === n ? r : Xn(iu(n), 0, r);
                        return (n -= e.length) >= 0 && t.slice(n, i) == e
                    }, On.eq = Ia, On.escape = function(t) { return (t = lu(t)) && z.test(t) ? t.replace(L, De) : t }, On.escapeRegExp = function(t) { return (t = lu(t)) && Y.test(t) ? t.replace(V, "\\$&") : t }, On.every = function(t, e, n) { var r = ja(t) ? ce : rr; return n && lo(t, e, n) && (e = void 0), r(t, Zi(e, 3)) }, On.find = aa, On.findIndex = $o, On.findKey = function(t, e) { return we(t, Zi(e, 3), cr) }, On.findLast = ua, On.findLastIndex = jo, On.findLastKey = function(t, e) { return we(t, Zi(e, 3), sr) }, On.floor = sl, On.forEach = la, On.forEachRight = ca, On.forIn = function(t, e) { return null == t ? t : ur(t, Zi(e, 3), Su) }, On.forInRight = function(t, e) { return null == t ? t : lr(t, Zi(e, 3), Su) }, On.forOwn = function(t, e) { return t && cr(t, Zi(e, 3)) }, On.forOwnRight = function(t, e) { return t && sr(t, Zi(e, 3)) }, On.get = gu, On.gt = Pa, On.gte = Aa, On.has = function(t, e) { return null != t && io(t, e, gr) }, On.hasIn = mu, On.head = No, On.identity = Yu, On.includes = function(t, e, n, r) { t = Na(t) ? t : Iu(t), n = n && !r ? iu(n) : 0; var i = t.length; return n < 0 && (n = un(i + n, 0)), Za(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && be(t, e, n) > -1 }, On.indexOf = function(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var i = null == n ? 0 : iu(n); return i < 0 && (i = un(r + i, 0)), be(t, e, i) }, On.inRange = function(t, e, n) {
                        return e = ru(e), void 0 === n ? (n = e, e = 0) : n = ru(n),
                            function(t, e, n) { return t >= ln(e, n) && t < un(e, n) }(t = au(t), e, n)
                    }, On.invoke = _u, On.isArguments = $a, On.isArray = ja, On.isArrayBuffer = Ma, On.isArrayLike = Na, On.isArrayLikeObject = La, On.isBoolean = function(t) { return !0 === t || !1 === t || qa(t) && pr(t) == s }, On.isBuffer = Da, On.isDate = za, On.isElement = function(t) { return qa(t) && 1 === t.nodeType && !Ga(t) }, On.isEmpty = function(t) {
                        if (null == t) return !0;
                        if (Na(t) && (ja(t) || "string" == typeof t || "function" == typeof t.splice || Da(t) || Qa(t) || $a(t))) return !t.length;
                        var e = ro(t);
                        if (e == v || e == w) return !t.size;
                        if (ho(t)) return !xr(t).length;
                        for (var n in t)
                            if (Tt.call(t, n)) return !1;
                        return !0
                    }, On.isEqual = function(t, e) { return br(t, e) }, On.isEqualWith = function(t, e, n) { var r = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0; return void 0 === r ? br(t, e, void 0, n) : !!r }, On.isError = Fa, On.isFinite = function(t) { return "number" == typeof t && rn(t) }, On.isFunction = Ua, On.isInteger = Ba, On.isLength = Wa, On.isMap = Va, On.isMatch = function(t, e) { return t === e || Sr(t, e, Qi(e)) }, On.isMatchWith = function(t, e, n) { return n = "function" == typeof n ? n : void 0, Sr(t, e, Qi(e), n) }, On.isNaN = function(t) { return Ya(t) && t != +t }, On.isNative = function(t) { if (fo(t)) throw new K("Unsupported core-js use. Try https://npms.io/search?q=ponyfill."); return Tr(t) }, On.isNil = function(t) { return null == t }, On.isNull = function(t) { return null === t }, On.isNumber = Ya, On.isObject = Ha, On.isObjectLike = qa, On.isPlainObject = Ga, On.isRegExp = Ka, On.isSafeInteger = function(t) { return Ba(t) && t >= -9007199254740991 && t <= 9007199254740991 }, On.isSet = Xa, On.isString = Za, On.isSymbol = Ja, On.isTypedArray = Qa, On.isUndefined = function(t) { return void 0 === t }, On.isWeakMap = function(t) { return qa(t) && ro(t) == S }, On.isWeakSet = function(t) { return qa(t) && "[object WeakSet]" == pr(t) }, On.join = function(t, e) { return null == t ? "" : on.call(t, e) }, On.kebabCase = ju, On.last = Fo, On.lastIndexOf = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r) return -1;
                        var i = r;
                        return void 0 !== n && (i = (i = iu(n)) < 0 ? un(r + i, 0) : ln(i, r - 1)), e == e ? function(t, e, n) {
                            for (var r = n + 1; r--;)
                                if (t[r] === e) return r;
                            return r
                        }(t, e, i) : _e(t, Te, i, !0)
                    }, On.lowerCase = Mu, On.lowerFirst = Nu, On.lt = tu, On.lte = eu, On.max = function(t) { return t && t.length ? ir(t, Yu, vr) : void 0 }, On.maxBy = function(t, e) { return t && t.length ? ir(t, Zi(e, 2), vr) : void 0 }, On.mean = function(t) { return ke(t, Yu) }, On.meanBy = function(t, e) { return ke(t, Zi(e, 2)) }, On.min = function(t) { return t && t.length ? ir(t, Yu, Cr) : void 0 }, On.minBy = function(t, e) { return t && t.length ? ir(t, Zi(e, 2), Cr) : void 0 }, On.stubArray = ol, On.stubFalse = al, On.stubObject = function() { return {} }, On.stubString = function() { return "" }, On.stubTrue = function() { return !0 }, On.multiply = dl, On.nth = function(t, e) { return t && t.length ? Ar(t, iu(e)) : void 0 }, On.noConflict = function() { return Yt._ === this && (Yt._ = Rt), this }, On.noop = Ju, On.now = ga, On.pad = function(t, e, n) { t = lu(t); var r = (e = iu(e)) ? Ve(t) : 0; if (!e || r >= e) return t; var i = (e - r) / 2; return $i(tn(i), n) + t + $i(Qe(i), n) }, On.padEnd = function(t, e, n) { t = lu(t); var r = (e = iu(e)) ? Ve(t) : 0; return e && r < e ? t + $i(e - r, n) : t }, On.padStart = function(t, e, n) { t = lu(t); var r = (e = iu(e)) ? Ve(t) : 0; return e && r < e ? $i(e - r, n) + t : t }, On.parseInt = function(t, e, n) { return n || null == e ? e = 0 : e && (e = +e), sn(lu(t).replace(G, ""), e || 0) }, On.random = function(t, e, n) {
                        if (n && "boolean" != typeof n && lo(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = ru(t), void 0 === e ? (e = t, t = 0) : e = ru(e)), t > e) {
                            var r = t;
                            t = e, e = r
                        }
                        if (n || t % 1 || e % 1) { var i = fn(); return ln(t + i * (e - t + Wt("1e-" + ((i + "").length - 1))), e) }
                        return Lr(t, e)
                    }, On.reduce = function(t, e, n) {
                        var r = ja(t) ? ve : Ce,
                            i = arguments.length < 3;
                        return r(t, Zi(e, 4), n, i, er)
                    }, On.reduceRight = function(t, e, n) {
                        var r = ja(t) ? ge : Ce,
                            i = arguments.length < 3;
                        return r(t, Zi(e, 4), n, i, nr)
                    }, On.repeat = function(t, e, n) { return e = (n ? lo(t, e, n) : void 0 === e) ? 1 : iu(e), Dr(lu(t), e) }, On.replace = function() {
                        var t = arguments,
                            e = lu(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }, On.result = function(t, e, n) {
                        var r = -1,
                            i = (e = li(e, t)).length;
                        for (i || (i = 1, t = void 0); ++r < i;) {
                            var o = null == t ? void 0 : t[Co(e[r])];
                            void 0 === o && (r = i, o = n), t = Ua(o) ? o.call(t) : o
                        }
                        return t
                    }, On.round = hl, On.runInContext = t, On.sample = function(t) { return (ja(t) ? Fn : Fr)(t) }, On.size = function(t) { if (null == t) return 0; if (Na(t)) return Za(t) ? Ve(t) : t.length; var e = ro(t); return e == v || e == w ? t.size : xr(t).length }, On.snakeCase = Lu, On.some = function(t, e, n) { var r = ja(t) ? me : Yr; return n && lo(t, e, n) && (e = void 0), r(t, Zi(e, 3)) }, On.sortedIndex = function(t, e) { return Gr(t, e) }, On.sortedIndexBy = function(t, e, n) { return Kr(t, e, Zi(n, 2)) }, On.sortedIndexOf = function(t, e) { var n = null == t ? 0 : t.length; if (n) { var r = Gr(t, e); if (r < n && Ia(t[r], e)) return r } return -1 }, On.sortedLastIndex = function(t, e) { return Gr(t, e, !0) }, On.sortedLastIndexBy = function(t, e, n) { return Kr(t, e, Zi(n, 2), !0) }, On.sortedLastIndexOf = function(t, e) { if (null == t ? 0 : t.length) { var n = Gr(t, e, !0) - 1; if (Ia(t[n], e)) return n } return -1 }, On.startCase = Du, On.startsWith = function(t, e, n) { return t = lu(t), n = null == n ? 0 : Xn(iu(n), 0, t.length), e = Jr(e), t.slice(n, n + e.length) == e }, On.subtract = pl, On.sum = function(t) { return t && t.length ? Re(t, Yu) : 0 }, On.sumBy = function(t, e) { return t && t.length ? Re(t, Zi(e, 2)) : 0 }, On.template = function(t, e, n) {
                        var r = On.templateSettings;
                        n && lo(t, e, n) && (e = void 0), t = lu(t), e = fu({}, e, r, Ui);
                        var i, o, a = fu({}, e.imports, r.imports, Ui),
                            u = bu(a),
                            l = Ae(a, u),
                            c = 0,
                            s = e.interpolate || st,
                            f = "__p += '",
                            d = vt((e.escape || st).source + "|" + s.source + "|" + (s === B ? nt : st).source + "|" + (e.evaluate || st).source + "|$", "g"),
                            h = "//# sourceURL=" + (Tt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zt + "]") + "\n";
                        t.replace(d, (function(e, n, r, a, u, l) { return r || (r = a), f += t.slice(c, l).replace(ft, ze), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), u && (o = !0, f += "';\n" + u + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = l + e.length, e })), f += "';\n";
                        var p = Tt.call(e, "variable") && e.variable;
                        if (p) { if (tt.test(p)) throw new K("Invalid `variable` option passed into `_.template`") } else f = "with (obj) {\n" + f + "\n}\n";
                        f = (o ? f.replace($, "") : f).replace(j, "$1").replace(M, "$1;"), f = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                        var v = Bu((function() { return dt(u, h + "return " + f).apply(void 0, l) }));
                        if (v.source = f, Fa(v)) throw v;
                        return v
                    }, On.times = function(t, e) {
                        if ((t = iu(t)) < 1 || t > 9007199254740991) return [];
                        var n = 4294967295,
                            r = ln(t, 4294967295);
                        t -= 4294967295;
                        for (var i = Oe(r, e = Zi(e)); ++n < t;) e(n);
                        return i
                    }, On.toFinite = ru, On.toInteger = iu, On.toLength = ou, On.toLower = function(t) { return lu(t).toLowerCase() }, On.toNumber = au, On.toSafeInteger = function(t) { return t ? Xn(iu(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0 }, On.toString = lu, On.toUpper = function(t) { return lu(t).toUpperCase() }, On.trim = function(t, e, n) {
                        if ((t = lu(t)) && (n || void 0 === e)) return Ie(t);
                        if (!t || !(e = Jr(e))) return t;
                        var r = Ye(t),
                            i = Ye(e);
                        return si(r, je(r, i), Me(r, i) + 1).join("")
                    }, On.trimEnd = function(t, e, n) { if ((t = lu(t)) && (n || void 0 === e)) return t.slice(0, Ge(t) + 1); if (!t || !(e = Jr(e))) return t; var r = Ye(t); return si(r, 0, Me(r, Ye(e)) + 1).join("") }, On.trimStart = function(t, e, n) { if ((t = lu(t)) && (n || void 0 === e)) return t.replace(G, ""); if (!t || !(e = Jr(e))) return t; var r = Ye(t); return si(r, je(r, Ye(e))).join("") }, On.truncate = function(t, e) {
                        var n = 30,
                            r = "...";
                        if (Ha(e)) {
                            var i = "separator" in e ? e.separator : i;
                            n = "length" in e ? iu(e.length) : n, r = "omission" in e ? Jr(e.omission) : r
                        }
                        var o = (t = lu(t)).length;
                        if (Fe(t)) {
                            var a = Ye(t);
                            o = a.length
                        }
                        if (n >= o) return t;
                        var u = n - Ve(r);
                        if (u < 1) return r;
                        var l = a ? si(a, 0, u).join("") : t.slice(0, u);
                        if (void 0 === i) return l + r;
                        if (a && (u += l.length - u), Ka(i)) {
                            if (t.slice(u).search(i)) {
                                var c, s = l;
                                for (i.global || (i = vt(i.source, lu(rt.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(s);) var f = c.index;
                                l = l.slice(0, void 0 === f ? u : f)
                            }
                        } else if (t.indexOf(Jr(i), u) != u) {
                            var d = l.lastIndexOf(i);
                            d > -1 && (l = l.slice(0, d))
                        }
                        return l + r
                    }, On.unescape = function(t) { return (t = lu(t)) && D.test(t) ? t.replace(N, Ke) : t }, On.uniqueId = function(t) { var e = ++kt; return lu(t) + e }, On.upperCase = zu, On.upperFirst = Fu, On.each = la, On.eachRight = ca, On.first = No, Zu(On, (fl = {}, cr(On, (function(t, e) { Tt.call(On.prototype, e) || (fl[e] = t) })), fl), { chain: !1 }), On.VERSION = "4.17.21", ue(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) { On[t].placeholder = On })), ue(["drop", "take"], (function(t, e) { $n.prototype[t] = function(n) { n = void 0 === n ? 1 : un(iu(n), 0); var r = this.__filtered__ && !e ? new $n(this) : this.clone(); return r.__filtered__ ? r.__takeCount__ = ln(n, r.__takeCount__) : r.__views__.push({ size: ln(n, 4294967295), type: t + (r.__dir__ < 0 ? "Right" : "") }), r }, $n.prototype[t + "Right"] = function(e) { return this.reverse()[t](e).reverse() } })), ue(["filter", "map", "takeWhile"], (function(t, e) {
                        var n = e + 1,
                            r = 1 == n || 3 == n;
                        $n.prototype[t] = function(t) { var e = this.clone(); return e.__iteratees__.push({ iteratee: Zi(t, 3), type: n }), e.__filtered__ = e.__filtered__ || r, e }
                    })), ue(["head", "last"], (function(t, e) {
                        var n = "take" + (e ? "Right" : "");
                        $n.prototype[t] = function() { return this[n](1).value()[0] }
                    })), ue(["initial", "tail"], (function(t, e) {
                        var n = "drop" + (e ? "" : "Right");
                        $n.prototype[t] = function() { return this.__filtered__ ? new $n(this) : this[n](1) }
                    })), $n.prototype.compact = function() { return this.filter(Yu) }, $n.prototype.find = function(t) { return this.filter(t).head() }, $n.prototype.findLast = function(t) { return this.reverse().find(t) }, $n.prototype.invokeMap = zr((function(t, e) { return "function" == typeof t ? new $n(this) : this.map((function(n) { return wr(n, t, e) })) })), $n.prototype.reject = function(t) { return this.filter(xa(Zi(t))) }, $n.prototype.slice = function(t, e) { t = iu(t); var n = this; return n.__filtered__ && (t > 0 || e < 0) ? new $n(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), void 0 !== e && (n = (e = iu(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n) }, $n.prototype.takeRightWhile = function(t) { return this.reverse().takeWhile(t).reverse() }, $n.prototype.toArray = function() { return this.take(4294967295) }, cr($n.prototype, (function(t, e) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(e),
                            r = /^(?:head|last)$/.test(e),
                            i = On[r ? "take" + ("last" == e ? "Right" : "") : e],
                            o = r || /^find/.test(e);
                        i && (On.prototype[e] = function() {
                            var e = this.__wrapped__,
                                a = r ? [1] : arguments,
                                u = e instanceof $n,
                                l = a[0],
                                c = u || ja(e),
                                s = function(t) { var e = i.apply(On, pe([t], a)); return r && f ? e[0] : e };
                            c && n && "function" == typeof l && 1 != l.length && (u = c = !1);
                            var f = this.__chain__,
                                d = !!this.__actions__.length,
                                h = o && !f,
                                p = u && !d;
                            if (!o && c) { e = p ? e : new $n(this); var v = t.apply(e, a); return v.__actions__.push({ func: ra, args: [s], thisArg: void 0 }), new An(v, f) }
                            return h && p ? t.apply(this, a) : (v = this.thru(s), h ? r ? v.value()[0] : v.value() : v)
                        })
                    })), ue(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                        var e = yt[t],
                            n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                            r = /^(?:pop|shift)$/.test(t);
                        On.prototype[t] = function() { var t = arguments; if (r && !this.__chain__) { var i = this.value(); return e.apply(ja(i) ? i : [], t) } return this[n]((function(n) { return e.apply(ja(n) ? n : [], t) })) }
                    })), cr($n.prototype, (function(t, e) {
                        var n = On[e];
                        if (n) {
                            var r = n.name + "";
                            Tt.call(_n, r) || (_n[r] = []), _n[r].push({ name: e, func: n })
                        }
                    })), _n[Oi(void 0, 2).name] = [{ name: "wrapper", func: void 0 }], $n.prototype.clone = function() { var t = new $n(this.__wrapped__); return t.__actions__ = yi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = yi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = yi(this.__views__), t }, $n.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var t = new $n(this);
                            t.__dir__ = -1, t.__filtered__ = !0
                        } else(t = this.clone()).__dir__ *= -1;
                        return t
                    }, $n.prototype.value = function() {
                        var t = this.__wrapped__.value(),
                            e = this.__dir__,
                            n = ja(t),
                            r = e < 0,
                            i = n ? t.length : 0,
                            o = function(t, e, n) {
                                var r = -1,
                                    i = n.length;
                                for (; ++r < i;) {
                                    var o = n[r],
                                        a = o.size;
                                    switch (o.type) {
                                        case "drop":
                                            t += a;
                                            break;
                                        case "dropRight":
                                            e -= a;
                                            break;
                                        case "take":
                                            e = ln(e, t + a);
                                            break;
                                        case "takeRight":
                                            t = un(t, e - a)
                                    }
                                }
                                return { start: t, end: e }
                            }(0, i, this.__views__),
                            a = o.start,
                            u = o.end,
                            l = u - a,
                            c = r ? u : a - 1,
                            s = this.__iteratees__,
                            f = s.length,
                            d = 0,
                            h = ln(l, this.__takeCount__);
                        if (!n || !r && i == l && h == l) return ri(t, this.__actions__);
                        var p = [];
                        t: for (; l-- && d < h;) {
                            for (var v = -1, g = t[c += e]; ++v < f;) {
                                var m = s[v],
                                    y = m.iteratee,
                                    w = m.type,
                                    _ = y(g);
                                if (2 == w) g = _;
                                else if (!_) { if (1 == w) continue t; break t }
                            }
                            p[d++] = g
                        }
                        return p
                    }, On.prototype.at = ia, On.prototype.chain = function() { return na(this) }, On.prototype.commit = function() { return new An(this.value(), this.__chain__) }, On.prototype.next = function() { void 0 === this.__values__ && (this.__values__ = nu(this.value())); var t = this.__index__ >= this.__values__.length; return { done: t, value: t ? void 0 : this.__values__[this.__index__++] } }, On.prototype.plant = function(t) {
                        for (var e, n = this; n instanceof Pn;) {
                            var r = Oo(n);
                            r.__index__ = 0, r.__values__ = void 0, e ? i.__wrapped__ = r : e = r;
                            var i = r;
                            n = n.__wrapped__
                        }
                        return i.__wrapped__ = t, e
                    }, On.prototype.reverse = function() { var t = this.__wrapped__; if (t instanceof $n) { var e = t; return this.__actions__.length && (e = new $n(this)), (e = e.reverse()).__actions__.push({ func: ra, args: [Ho], thisArg: void 0 }), new An(e, this.__chain__) } return this.thru(Ho) }, On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function() { return ri(this.__wrapped__, this.__actions__) }, On.prototype.first = On.prototype.head, Zt && (On.prototype[Zt] = function() { return this }), On
                }();
                Yt._ = Xe, void 0 === (i = function() { return Xe }.call(e, n, e, r)) || (r.exports = i)
            }).call(this)
        }).call(this, n("yLpj"), n("YuTi")(t))
    },
    YuTi: function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } },
    yLpj: function(t, e) {
        var n;
        n = function() { return this }();
        try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n
    },
    zSlN: function(t, e, n) {
        var r, i;
        void 0 === (i = "function" == typeof(r = function() {
            "use strict";
            var t = function() { r.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.") };
            t.version = "2.0.8", "undefined" != typeof window && window.addEventListener("mousewheel", void 0), t.Controller = function(n) {
                var i, o, a = "ScrollMagic.Controller",
                    u = e.defaults,
                    l = this,
                    c = r.extend({}, u, n),
                    s = [],
                    f = !1,
                    d = 0,
                    h = "PAUSED",
                    p = !0,
                    v = 0,
                    g = !0,
                    m = function() { c.refreshInterval > 0 && (o = window.setTimeout(k, c.refreshInterval)) },
                    y = function() { return c.vertical ? r.get.scrollTop(c.container) : r.get.scrollLeft(c.container) },
                    w = function() { return c.vertical ? r.get.height(c.container) : r.get.width(c.container) },
                    _ = this._setScrollPos = function(t) { c.vertical ? p ? window.scrollTo(r.get.scrollLeft(), t) : c.container.scrollTop = t : p ? window.scrollTo(t, r.get.scrollTop()) : c.container.scrollLeft = t },
                    b = function() {
                        if (g && f) {
                            var t = r.type.Array(f) ? f : s.slice(0);
                            f = !1;
                            var e = d,
                                n = (d = l.scrollPos()) - e;
                            0 !== n && (h = n > 0 ? "FORWARD" : "REVERSE"), "REVERSE" === h && t.reverse(), t.forEach((function(e, n) { x(3, "updating Scene " + (n + 1) + "/" + t.length + " (" + s.length + " total)"), e.update(!0) })), 0 === t.length && c.loglevel >= 3 && x(3, "updating 0 Scenes (nothing added to controller)")
                        }
                    },
                    S = function() { i = r.rAF(b) },
                    T = function(t) { x(3, "event fired causing an update:", t.type), "resize" == t.type && (v = w(), h = "PAUSED"), !0 !== f && (f = !0, S()) },
                    k = function() {
                        if (!p && v != w()) {
                            var t;
                            try { t = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (e) {
                                (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                            }
                            c.container.dispatchEvent(t)
                        }
                        s.forEach((function(t, e) { t.refresh() })), m()
                    },
                    x = this._log = function(t, e) { c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments)) };
                this._options = c;
                var E = function(t) { if (t.length <= 1) return t; var e = t.slice(0); return e.sort((function(t, e) { return t.scrollOffset() > e.scrollOffset() ? 1 : -1 })), e };
                return this.addScene = function(e) {
                        if (r.type.Array(e)) e.forEach((function(t, e) { l.addScene(t) }));
                        else if (e instanceof t.Scene) {
                            if (e.controller() !== l) e.addTo(l);
                            else if (s.indexOf(e) < 0) {
                                for (var n in s.push(e), s = E(s), e.on("shift.controller_sort", (function() { s = E(s) })), c.globalSceneOptions) e[n] && e[n].call(e, c.globalSceneOptions[n]);
                                x(3, "adding Scene (now " + s.length + " total)")
                            }
                        } else x(1, "ERROR: invalid argument supplied for '.addScene()'");
                        return l
                    }, this.removeScene = function(t) {
                        if (r.type.Array(t)) t.forEach((function(t, e) { l.removeScene(t) }));
                        else {
                            var e = s.indexOf(t);
                            e > -1 && (t.off("shift.controller_sort"), s.splice(e, 1), x(3, "removing Scene (now " + s.length + " left)"), t.remove())
                        }
                        return l
                    }, this.updateScene = function(e, n) { return r.type.Array(e) ? e.forEach((function(t, e) { l.updateScene(t, n) })) : n ? e.update(!0) : !0 !== f && e instanceof t.Scene && (-1 == (f = f || []).indexOf(e) && f.push(e), f = E(f), S()), l }, this.update = function(t) { return T({ type: "resize" }), t && b(), l }, this.scrollTo = function(e, n) {
                        if (r.type.Number(e)) _.call(c.container, e, n);
                        else if (e instanceof t.Scene) e.controller() === l ? l.scrollTo(e.scrollOffset(), n) : x(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
                        else if (r.type.Function(e)) _ = e;
                        else {
                            var i = r.get.elements(e)[0];
                            if (i) {
                                for (; i.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) i = i.parentNode;
                                var o = c.vertical ? "top" : "left",
                                    a = r.get.offset(c.container),
                                    u = r.get.offset(i);
                                p || (a[o] -= l.scrollPos()), l.scrollTo(u[o] - a[o], n)
                            } else x(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                        }
                        return l
                    }, this.scrollPos = function(t) { return arguments.length ? (r.type.Function(t) ? y = t : x(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), l) : y.call(l) }, this.info = function(t) { var e = { size: v, vertical: c.vertical, scrollPos: d, scrollDirection: h, container: c.container, isDocument: p }; return arguments.length ? void 0 !== e[t] ? e[t] : void x(1, 'ERROR: option "' + t + '" is not available') : e }, this.loglevel = function(t) { return arguments.length ? (c.loglevel != t && (c.loglevel = t), l) : c.loglevel }, this.enabled = function(t) { return arguments.length ? (g != t && (g = !!t, l.updateScene(s, !0)), l) : g }, this.destroy = function(t) { window.clearTimeout(o); for (var e = s.length; e--;) s[e].destroy(t); return c.container.removeEventListener("resize", T), c.container.removeEventListener("scroll", T), r.cAF(i), x(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null },
                    function() {
                        for (var e in c) u.hasOwnProperty(e) || (x(2, 'WARNING: Unknown option "' + e + '"'), delete c[e]);
                        if (c.container = r.get.elements(c.container)[0], !c.container) throw x(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                        (p = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), v = w(), c.container.addEventListener("resize", T), c.container.addEventListener("scroll", T);
                        var n = parseInt(c.refreshInterval, 10);
                        c.refreshInterval = r.type.Number(n) ? n : u.refreshInterval, m(), x(3, "added new " + a + " controller (v" + t.version + ")")
                    }(), l
            };
            var e = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
            t.Controller.addOption = function(t, n) { e.defaults[t] = n }, t.Controller.extend = function(e) {
                var n = this;
                t.Controller = function() { return n.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this }, r.extend(t.Controller, n), t.Controller.prototype = n.prototype, t.Controller.prototype.constructor = t.Controller
            }, t.Scene = function(e) {
                var i, o, a = "ScrollMagic.Scene",
                    u = n.defaults,
                    l = this,
                    c = r.extend({}, u, e),
                    s = "BEFORE",
                    f = 0,
                    d = { start: 0, end: 0 },
                    h = 0,
                    p = !0,
                    v = {};
                this.on = function(t, e) {
                    return r.type.Function(e) ? (t = t.trim().split(" ")).forEach((function(t) {
                        var n = t.split("."),
                            r = n[0],
                            i = n[1];
                        "*" != r && (v[r] || (v[r] = []), v[r].push({ namespace: i || "", callback: e }))
                    })) : g(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), l
                }, this.off = function(t, e) {
                    return t ? ((t = t.trim().split(" ")).forEach((function(t, n) {
                        var r = t.split("."),
                            i = r[0],
                            o = r[1] || "";
                        ("*" === i ? Object.keys(v) : [i]).forEach((function(t) {
                            for (var n = v[t] || [], r = n.length; r--;) { var i = n[r];!i || o !== i.namespace && "*" !== o || e && e != i.callback || n.splice(r, 1) }
                            n.length || delete v[t]
                        }))
                    })), l) : (g(1, "ERROR: Invalid event name supplied."), l)
                }, this.trigger = function(e, n) {
                    if (e) {
                        var r = e.trim().split("."),
                            i = r[0],
                            o = r[1],
                            a = v[i];
                        g(3, "event fired:", i, n ? "->" : "", n || ""), a && a.forEach((function(e, r) { o && o !== e.namespace || e.callback.call(l, new t.Event(i, e.namespace, l, n)) }))
                    } else g(1, "ERROR: Invalid event name supplied.");
                    return l
                }, l.on("change.internal", (function(t) { "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? b() : "reverse" === t.what && l.update()) })).on("shift.internal", (function(t) { w(), l.update() }));
                var g = this._log = function(t, e) { c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments)) };
                this.addTo = function(e) { return e instanceof t.Controller ? o != e && (o && o.removeScene(l), o = e, k(), _(!0), b(!0), w(), o.info("container").addEventListener("resize", S), e.addScene(l), l.trigger("add", { controller: o }), g(3, "added " + a + " to controller"), l.update()) : g(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), l }, this.enabled = function(t) { return arguments.length ? (p != t && (p = !!t, l.update(!0)), l) : p }, this.remove = function() {
                    if (o) {
                        o.info("container").removeEventListener("resize", S);
                        var t = o;
                        o = void 0, t.removeScene(l), l.trigger("remove"), g(3, "removed " + a + " from controller")
                    }
                    return l
                }, this.destroy = function(t) { return l.trigger("destroy", { reset: t }), l.remove(), l.off("*.*"), g(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null }, this.update = function(t) {
                    if (o)
                        if (t)
                            if (o.enabled() && p) {
                                var e, n = o.info("scrollPos");
                                e = c.duration > 0 ? (n - d.start) / (d.end - d.start) : n >= d.start ? 1 : 0, l.trigger("update", { startPos: d.start, endPos: d.end, scrollPos: n }), l.progress(e)
                            } else m && "DURING" === s && C(!0);
                    else o.updateScene(l, !1);
                    return l
                }, this.refresh = function() { return _(), b(), l }, this.progress = function(t) {
                    if (arguments.length) {
                        var e = !1,
                            n = s,
                            r = o ? o.info("scrollDirection") : "PAUSED",
                            i = c.reverse || t >= f;
                        if (0 === c.duration ? (e = f != t, s = 0 == (f = t < 1 && i ? 0 : 1) ? "BEFORE" : "DURING") : t < 0 && "BEFORE" !== s && i ? (f = 0, s = "BEFORE", e = !0) : t >= 0 && t < 1 && i ? (f = t, s = "DURING", e = !0) : t >= 1 && "AFTER" !== s ? (f = 1, s = "AFTER", e = !0) : "DURING" !== s || i || C(), e) {
                            var a = { progress: f, state: s, scrollDirection: r },
                                u = s != n,
                                d = function(t) { l.trigger(t, a) };
                            u && "DURING" !== n && (d("enter"), d("BEFORE" === n ? "start" : "end")), d("progress"), u && "DURING" !== s && (d("BEFORE" === s ? "start" : "end"), d("leave"))
                        }
                        return l
                    }
                    return f
                };
                var m, y, w = function() { d = { start: h + c.offset }, o && c.triggerElement && (d.start -= o.info("size") * c.triggerHook), d.end = d.start + c.duration },
                    _ = function(t) { i && x("duration", i.call(l)) && !t && (l.trigger("change", { what: "duration", newval: c.duration }), l.trigger("shift", { reason: "duration" })) },
                    b = function(t) {
                        var e = 0,
                            n = c.triggerElement;
                        if (o && (n || h > 0)) {
                            if (n)
                                if (n.parentNode) {
                                    for (var i = o.info(), a = r.get.offset(i.container), u = i.vertical ? "top" : "left"; n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) n = n.parentNode;
                                    var s = r.get.offset(n);
                                    i.isDocument || (a[u] -= o.scrollPos()), e = s[u] - a[u]
                                } else g(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0), l.triggerElement(void 0);
                            var f = e != h;
                            h = e, f && !t && l.trigger("shift", { reason: "triggerElementPosition" })
                        }
                    },
                    S = function(t) { c.triggerHook > 0 && l.trigger("shift", { reason: "containerResize" }) },
                    T = r.extend(n.validate, {
                        duration: function(t) {
                            if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                                var e = parseFloat(t) / 100;
                                t = function() { return o ? o.info("size") * e : 0 }
                            }
                            if (r.type.Function(t)) { i = t; try { t = parseFloat(i.call(l)) } catch (e) { t = -1 } }
                            if (t = parseFloat(t), !r.type.Number(t) || t < 0) throw i ? (i = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                            return t
                        }
                    }),
                    k = function(t) {
                        (t = arguments.length ? [t] : Object.keys(T)).forEach((function(t, e) {
                            var n;
                            if (T[t]) try { n = T[t](c[t]) } catch (e) {
                                n = u[t];
                                var i = r.type.String(e) ? [e] : e;
                                r.type.Array(i) ? (i[0] = "ERROR: " + i[0], i.unshift(1), g.apply(this, i)) : g(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message)
                            } finally { c[t] = n }
                        }))
                    },
                    x = function(t, e) {
                        var n = !1,
                            r = c[t];
                        return c[t] != e && (c[t] = e, k(t), n = r != c[t]), n
                    },
                    E = function(t) { l[t] || (l[t] = function(e) { return arguments.length ? ("duration" === t && (i = void 0), x(t, e) && (l.trigger("change", { what: t, newval: c[t] }), n.shifts.indexOf(t) > -1 && l.trigger("shift", { reason: t })), l) : c[t] }) };
                this.controller = function() { return o }, this.state = function() { return s }, this.scrollOffset = function() { return d.start }, this.triggerPosition = function() { var t = c.offset; return o && (c.triggerElement ? t += h : t += o.info("size") * l.triggerHook()), t }, l.on("shift.internal", (function(t) {
                    var e = "duration" === t.reason;
                    ("AFTER" === s && e || "DURING" === s && 0 === c.duration) && C(), e && R()
                })).on("progress.internal", (function(t) { C() })).on("add.internal", (function(t) { R() })).on("destroy.internal", (function(t) { l.removePin(t.reset) }));
                var C = function(t) {
                        if (m && o) {
                            var e = o.info(),
                                n = y.spacer.firstChild;
                            if (t || "DURING" !== s) {
                                var i = { position: y.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                    a = r.css(n, "position") != i.position;
                                y.pushFollowers ? c.duration > 0 && ("AFTER" === s && 0 === parseFloat(r.css(y.spacer, "padding-top")) || "BEFORE" === s && 0 === parseFloat(r.css(y.spacer, "padding-bottom"))) && (a = !0) : i[e.vertical ? "top" : "left"] = c.duration * f, r.css(n, i), a && R()
                            } else {
                                "fixed" != r.css(n, "position") && (r.css(n, { position: "fixed" }), R());
                                var u = r.get.offset(y.spacer, !0),
                                    l = c.reverse || 0 === c.duration ? e.scrollPos - d.start : Math.round(f * c.duration * 10) / 10;
                                u[e.vertical ? "top" : "left"] += l, r.css(y.spacer.firstChild, { top: u.top, left: u.left })
                            }
                        }
                    },
                    R = function() {
                        if (m && o && y.inFlow) {
                            var t = "DURING" === s,
                                e = o.info("vertical"),
                                n = y.spacer.firstChild,
                                i = r.isMarginCollapseType(r.css(y.spacer, "display")),
                                a = {};
                            y.relSize.width || y.relSize.autoFullWidth ? t ? r.css(m, { width: r.get.width(y.spacer) }) : r.css(m, { width: "100%" }) : (a["min-width"] = r.get.width(e ? m : n, !0, !0), a.width = t ? a["min-width"] : "auto"), y.relSize.height ? t ? r.css(m, { height: r.get.height(y.spacer) - (y.pushFollowers ? c.duration : 0) }) : r.css(m, { height: "100%" }) : (a["min-height"] = r.get.height(e ? n : m, !0, !i), a.height = t ? a["min-height"] : "auto"), y.pushFollowers && (a["padding" + (e ? "Top" : "Left")] = c.duration * f, a["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - f)), r.css(y.spacer, a)
                        }
                    },
                    O = function() { o && m && "DURING" === s && !o.info("isDocument") && C() },
                    I = function() { o && m && "DURING" === s && ((y.relSize.width || y.relSize.autoFullWidth) && r.get.width(window) != r.get.width(y.spacer.parentNode) || y.relSize.height && r.get.height(window) != r.get.height(y.spacer.parentNode)) && R() },
                    P = function(t) { o && m && "DURING" === s && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail))) };
                this.setPin = function(t, e) {
                    var n = e && e.hasOwnProperty("pushFollowers");
                    if (e = r.extend({}, { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }, e), !(t = r.get.elements(t)[0])) return g(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), l;
                    if ("fixed" === r.css(t, "position")) return g(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), l;
                    if (m) {
                        if (m === t) return l;
                        l.removePin()
                    }
                    var i = (m = t).parentNode.style.display,
                        o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    m.parentNode.style.display = "none";
                    var a = "absolute" != r.css(m, "position"),
                        u = r.css(m, o.concat(["display"])),
                        s = r.css(m, ["width", "height"]);
                    m.parentNode.style.display = i, !a && e.pushFollowers && (g(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), e.pushFollowers = !1), window.setTimeout((function() { m && 0 === c.duration && n && e.pushFollowers && g(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.") }), 0);
                    var f = m.parentNode.insertBefore(document.createElement("div"), m),
                        d = r.extend(u, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                    if (a || r.extend(d, r.css(m, ["width", "height"])), r.css(f, d), f.setAttribute("data-scrollmagic-pin-spacer", ""), r.addClass(f, e.spacerClass), y = { spacer: f, relSize: { width: "%" === s.width.slice(-1), height: "%" === s.height.slice(-1), autoFullWidth: "auto" === s.width && a && r.isMarginCollapseType(u.display) }, pushFollowers: e.pushFollowers, inFlow: a }, !m.___origStyle) {
                        m.___origStyle = {};
                        var h = m.style;
                        o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(t) { m.___origStyle[t] = h[t] || "" }))
                    }
                    return y.relSize.width && r.css(f, { width: s.width }), y.relSize.height && r.css(f, { height: s.height }), f.appendChild(m), r.css(m, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (y.relSize.width || y.relSize.autoFullWidth) && r.css(m, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", I), m.addEventListener("mousewheel", P), m.addEventListener("DOMMouseScroll", P), g(3, "added pin"), C(), l
                }, this.removePin = function(t) {
                    if (m) {
                        if ("DURING" === s && C(!0), t || !o) {
                            var e = y.spacer.firstChild;
                            if (e.hasAttribute("data-scrollmagic-pin-spacer")) {
                                var n = y.spacer.style,
                                    i = {};
                                ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(t) { i[t] = n[t] || "" })), r.css(e, i)
                            }
                            y.spacer.parentNode.insertBefore(e, y.spacer), y.spacer.parentNode.removeChild(y.spacer), m.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (r.css(m, m.___origStyle), delete m.___origStyle)
                        }
                        window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", I), m.removeEventListener("mousewheel", P), m.removeEventListener("DOMMouseScroll", P), m = void 0, g(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                    }
                    return l
                };
                var A, $ = [];
                return l.on("destroy.internal", (function(t) { l.removeClassToggle(t.reset) })), this.setClassToggle = function(t, e) {
                        var n = r.get.elements(t);
                        return 0 !== n.length && r.type.String(e) ? ($.length > 0 && l.removeClassToggle(), A = e, $ = n, l.on("enter.internal_class leave.internal_class", (function(t) {
                            var e = "enter" === t.type ? r.addClass : r.removeClass;
                            $.forEach((function(t, n) { e(t, A) }))
                        })), l) : (g(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), l)
                    }, this.removeClassToggle = function(t) { return t && $.forEach((function(t, e) { r.removeClass(t, A) })), l.off("start.internal_class end.internal_class"), A = void 0, $ = [], l },
                    function() {
                        for (var t in c) u.hasOwnProperty(t) || (g(2, 'WARNING: Unknown option "' + t + '"'), delete c[t]);
                        for (var e in u) E(e);
                        k()
                    }(), l
            };
            var n = {
                defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 },
                validate: {
                    offset: function(t) { if (t = parseFloat(t), !r.type.Number(t)) throw ['Invalid value for option "offset":', t]; return t },
                    triggerElement: function(t) {
                        if (t = t || void 0) {
                            var e = r.get.elements(t)[0];
                            if (!e || !e.parentNode) throw ['Element defined in option "triggerElement" was not found:', t];
                            t = e
                        }
                        return t
                    },
                    triggerHook: function(t) {
                        var e = { onCenter: .5, onEnter: 1, onLeave: 0 };
                        if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                        else {
                            if (!(t in e)) throw ['Invalid value for option "triggerHook": ', t];
                            t = e[t]
                        }
                        return t
                    },
                    reverse: function(t) { return !!t },
                    loglevel: function(t) { if (t = parseInt(t), !r.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t]; return t }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            t.Scene.addOption = function(e, r, i, o) { e in n.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (n.defaults[e] = r, n.validate[e] = i, o && n.shifts.push(e)) }, t.Scene.extend = function(e) {
                var n = this;
                t.Scene = function() { return n.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this }, r.extend(t.Scene, n), t.Scene.prototype = n.prototype, t.Scene.prototype.constructor = t.Scene
            }, t.Event = function(t, e, n, r) { for (var i in r = r || {}) this[i] = r[i]; return this.type = t, this.target = this.currentTarget = n, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this };
            var r = t._util = function(t) {
                var e, n = {},
                    r = function(t) { return parseFloat(t) || 0 },
                    i = function(e) { return e.currentStyle ? e.currentStyle : t.getComputedStyle(e) },
                    o = function(e, n, o, a) {
                        if ((n = n === document ? t : n) === t) a = !1;
                        else if (!p.DomElement(n)) return 0;
                        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                        var u = (o ? n["offset" + e] || n["outer" + e] : n["client" + e] || n["inner" + e]) || 0;
                        if (o && a) {
                            var l = i(n);
                            u += "Height" === e ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                        }
                        return u
                    },
                    a = function(t) { return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(t) { return t[1].toUpperCase() })) };
                n.extend = function(t) {
                    for (t = t || {}, e = 1; e < arguments.length; e++)
                        if (arguments[e])
                            for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
                    return t
                }, n.isMarginCollapseType = function(t) { return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1 };
                var u = 0,
                    l = ["ms", "moz", "webkit", "o"],
                    c = t.requestAnimationFrame,
                    s = t.cancelAnimationFrame;
                for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], s = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
                c || (c = function(e) {
                    var n = (new Date).getTime(),
                        r = Math.max(0, 16 - (n - u)),
                        i = t.setTimeout((function() { e(n + r) }), r);
                    return u = n + r, i
                }), s || (s = function(e) { t.clearTimeout(e) }), n.rAF = c.bind(t), n.cAF = s.bind(t);
                var f = ["error", "warn", "log"],
                    d = t.console || {};
                for (d.log = d.log || function() {}, e = 0; e < f.length; e++) {
                    var h = f[e];
                    d[h] || (d[h] = d.log)
                }
                n.log = function(t) {
                    (t > f.length || t <= 0) && (t = f.length);
                    var e = new Date,
                        n = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                        r = f[t - 1],
                        i = Array.prototype.splice.call(arguments, 1),
                        o = Function.prototype.bind.call(d[r], d);
                    i.unshift(n), o.apply(d, i)
                };
                var p = n.type = function(t) { return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
                p.String = function(t) { return "string" === p(t) }, p.Function = function(t) { return "function" === p(t) }, p.Array = function(t) { return Array.isArray(t) }, p.Number = function(t) { return !p.Array(t) && t - parseFloat(t) + 1 >= 0 }, p.DomElement = function(t) { return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName };
                var v = n.get = {};
                return v.elements = function(e) {
                    var n = [];
                    if (p.String(e)) try { e = document.querySelectorAll(e) } catch (t) { return n }
                    if ("nodelist" === p(e) || p.Array(e) || e instanceof NodeList)
                        for (var r = 0, i = n.length = e.length; r < i; r++) {
                            var o = e[r];
                            n[r] = p.DomElement(o) ? o : v.elements(o)
                        } else(p.DomElement(e) || e === document || e === t) && (n = [e]);
                    return n
                }, v.scrollTop = function(e) { return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0 }, v.scrollLeft = function(e) { return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0 }, v.width = function(t, e, n) { return o("width", t, e, n) }, v.height = function(t, e, n) { return o("height", t, e, n) }, v.offset = function(t, e) {
                    var n = { top: 0, left: 0 };
                    if (t && t.getBoundingClientRect) {
                        var r = t.getBoundingClientRect();
                        n.top = r.top, n.left = r.left, e || (n.top += v.scrollTop(), n.left += v.scrollLeft())
                    }
                    return n
                }, n.addClass = function(t, e) { e && (t.classList ? t.classList.add(e) : t.className += " " + e) }, n.removeClass = function(t, e) { e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, n.css = function(t, e) {
                    if (p.String(e)) return i(t)[a(e)];
                    if (p.Array(e)) {
                        var n = {},
                            r = i(t);
                        return e.forEach((function(t, e) { n[t] = r[a(t)] })), n
                    }
                    for (var o in e) {
                        var u = e[o];
                        u == parseFloat(u) && (u += "px"), t.style[a(o)] = u
                    }
                }, n
            }(window || {});
            return t.Scene.prototype.addIndicators = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, t.Scene.prototype.removeIndicators = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, t.Scene.prototype.setTween = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, t.Scene.prototype.removeTween = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, t.Scene.prototype.setVelocity = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, t.Scene.prototype.removeVelocity = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, t
        }) ? r.call(e, n, e, t) : r) || (t.exports = i)
    }
});