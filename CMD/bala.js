var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1e3,
        fadeduration: [500, 100]
    },
    controlHTML: abzar,
    controlattrs: {
        offsetx: 5,
        offsety: 5
    },
    anchorkeyword: "#top",
    state: {
        isvisible: !1,
        shouldvisible: !1
    },
    scrollup: function () {
        this.cssfixedsupport || this.$control.css({
            opacity: 0
        });
        var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
            scrollTop: t
        }, this.setting.scrollduration)
    },
    keepfixed: function () {
        var t = jQuery(window),
            o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
            s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: o + "px",
            top: s + "px"
        })
    },
    togglecontrol: function () {
        var t = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
            opacity: 1
        }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
            opacity: 0
        }, this.setting.fadeduration[1]), this.state.isvisible = !1)
    },
    init: function () {
        jQuery(document).ready(function (t) {
            var o = scrolltotop,
                s = document.all;
            o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="parandehgharib-ir-top">' + o.controlHTML + "</div>").css({
                position: o.cssfixedsupport ? "fixed" : "absolute",
                bottom: o.controlattrs.offsety,
                right: o.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({
                title: "ŲØŲ§Ł„Ų§ŲØŲ± ŁŲØŁ„Ų§ŚÆ Ł¾Ų±Ł†ŲÆŁ‡ ŲŗŲ±ŪŲØ"
            }).click(function () {
                return o.scrollup(), !1
            }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
                width: o.$control.width()
            }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () {
                return o.scrollup(), !1
            }), t(window).bind("scroll resize", function () {
                o.togglecontrol()
            })
        })
    }
};
scrolltotop.init(), document.write('<p style="text-align:center"><a title="&#1576;&#1575;&#1604;&#1575;&#1576;&#1585; &#1608;&#1576;&#1604;&#1575;&#1711;" href="http://www.parandehgharib.ir/a1" target="_blank" ><span style="color: #ff0000; text-shadow: 1px 1px 4px;">&#1576;&#1575;&#1604;&#1575;&#1576;&#1585; &#1608;&#1576;&#1604;&#1575;&#1711;</a></span></p>');