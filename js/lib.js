/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2023 Twitter, Inc.
 * Licensed under the MIT license
 */

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var i = t(this),
                a = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            a || i.data("bs.carousel", a = new n(this, s)), "number" == typeof e ? a.to(e) : r ? a[r]() : s.interval && a.pause().cycle() }) } var n = function(e, n) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) { switch (t.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            t.preventDefault() } }, n.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, n.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, n.prototype.getItemForDirection = function(t, e) { var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1; if (i && !this.options.wrap) return e; var a = "prev" == t ? -1 : 1,
            s = (n + a) % this.$items.length; return this.$items.eq(s) }, n.prototype.to = function(t) { var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active")); return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t)) }, n.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, n.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, n.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, n.prototype.slide = function(e, i) { var a = this.$element.find(".item.active"),
            s = i || this.getItemForDirection(e, a),
            r = this.interval,
            o = "next" == e ? "left" : "right",
            l = this; if (s.hasClass("active")) return this.sliding = !1; var d = s[0],
            c = t.Event("slide.bs.carousel", { relatedTarget: d, direction: o }); if (this.$element.trigger(c), !c.isDefaultPrevented()) { if (this.sliding = !0, r && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                h && h.addClass("active") } var p = t.Event("slid.bs.carousel", { relatedTarget: d, direction: o }); return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), "object" == typeof s && s.length && s[0].offsetWidth, a.addClass(o), s.addClass(o), a.one("bsTransitionEnd", function() { s.removeClass([e, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(p) }, 0) }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this } }; var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() { return t.fn.carousel = i, this }; var a = function(n) { var i = t(this),
            a = i.attr("href");
        a && (a = a.replace(/.*(?=#[^\s]+$)/, "")); var s = i.attr("data-target") || a,
            r = t(document).find(s); if (r.hasClass("carousel")) { var o = t.extend({}, r.data(), i.data()),
                l = i.attr("data-slide-to");
            l && (o.interval = !1), e.call(r, o), l && r.data("bs.carousel").to(l), n.preventDefault() } };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() { var n = t(this);
            e.call(n, n.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) { var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")); var i = "#" !== n ? t(document).find(n) : null; return i && i.length ? i : e.parent() }

    function n(n) { n && 3 === n.which || (t(a).remove(), t(s).each(function() { var i = t(this),
                a = e(i),
                s = { relatedTarget: this };
            a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a[0], n.target) || (a.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s))))) })) }

    function i(e) { return this.each(function() { var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n) }) } var a = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    r.VERSION = "3.4.1", r.prototype.toggle = function(i) { var a = t(this); if (!a.is(".disabled, :disabled")) { var s = e(a),
                r = s.hasClass("open"); if (n(), !r) { "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n); var o = { relatedTarget: this }; if (s.trigger(i = t.Event("show.bs.dropdown", o)), i.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", o)) } return !1 } }, r.prototype.keydown = function(n) { if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) { var i = t(this); if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) { var a = e(i),
                    r = a.hasClass("open"); if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && a.find(s).trigger("focus"), i.trigger("click"); var o = " li:not(.disabled):visible a",
                    l = a.find(".dropdown-menu" + o); if (l.length) { var d = l.index(n.target);
                    38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus") } } } }; var o = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = o, this }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown) }(jQuery), + function(t) { "use strict";

    function e(e) { return this.each(function() { var i = t(this),
                a = i.data("bs.tab");
            a || i.data("bs.tab", a = new n(this)), "string" == typeof e && a[e]() }) } var n = function(e) { this.element = t(e) };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.show = function() { var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target"); if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) { var a = n.find(".active:last a"),
                s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                r = t.Event("show.bs.tab", { relatedTarget: a[0] }); if (a.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) { var o = t(document).find(i);
                this.activate(e.closest("li"), n), this.activate(o, o.parent(), function() { a.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: a[0] }) }) } } }, n.prototype.activate = function(e, i, a) {
        function s() { r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a() } var r = i.find("> .active"),
            o = a && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && o ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in") }; var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() { return t.fn.tab = i, this }; var a = function(n) { n.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a) }(jQuery), + function(t) { "use strict";

    function e(e) { var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(document).find(i) }

    function n(e) { return this.each(function() { var n = t(this),
                a = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);!a && s.toggle && /show|hide/.test(e) && (s.toggle = !1), a || n.data("bs.collapse", a = new i(this, s)), "string" == typeof e && a[e]() }) } var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, i.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) { var s = t.Event("show.bs.collapse"); if (this.$element.trigger(s), !s.isDefaultPrevented()) { a && a.length && (n.call(a, "hide"), e || a.data("bs.collapse", null)); var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var o = function() { this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return o.call(this); var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l]) } } } }, i.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var a = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : a.call(this) } } }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() { return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) { var a = t(i);
            this.addAriaAndCollapsedClass(e(a), a) }, this)).end() }, i.prototype.addAriaAndCollapsedClass = function(t, e) { var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var a = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() { return t.fn.collapse = a, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) { var a = t(this);
        a.attr("data-target") || i.preventDefault(); var s = e(a),
            r = s.data("bs.collapse"),
            o = r ? "toggle" : a.data();
        n.call(s, o) }) }(jQuery), + function(t) { "use strict";

    function e() { var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in e)
            if (void 0 !== t.style[n]) return { end: e[n] };
        return !1 }
    t.fn.emulateTransitionEnd = function(e) { var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() { n = !0 }); var a = function() { n || t(i).trigger(t.support.transition.end) }; return setTimeout(a, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery);

$(function() {

    // Наверх
    $('#upper').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('#combo-tools .breadcrumb').hover(
        function() { $('#combo-tools').addClass('active'); },
        function() { $('#combo-tools').removeClass('active'); }
    );

    // Мобильное меню
    $('#mobile_menu_btn').click(function() { $('html').toggleClass("mobile-menu_open"); return false; });

    // Меню поиска
    $('#search_btn').click(function() { $('html').toggleClass("search_open"); return false; });


    $('.soc_links a').on('click', function() {
        var href = $(this).attr('href');
        var width = 820;
        var height = 420;
        var left = (screen.width - width) / 2;
        var top = (screen.height - height) / 2 - 100;

        var auth_window = window.open(href, 'auth_window', "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + "menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");

        return false;
    });

});

function ShowCommentsUploader() {

    if ($("#hidden-image-uploader").css("display") == "none") {

        $("#hidden-image-uploader").show('blind', {}, 250, function() {
            $('#comments-image-uploader').plupload('refresh');
        });

    } else {

        $("#hidden-image-uploader").hide('blind', {}, 250);

    }

    return false;
};