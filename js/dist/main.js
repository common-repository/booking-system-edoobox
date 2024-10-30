function bh() {
  window.fbAsyncInit = function() {
    FB.init({
      appId: "1945424902141041",
      cookie: !0,
      xfbml: !0,
      version: "v2.11"
    });
  };
  var t = navigator.language || navigator.userLanguage, e = "de_DE";
  switch (t.split("-")[0]) {
    case "de":
      e = "de_DE";
      break;
    case "en":
      e = "en_GB";
      break;
    case "fr":
      e = "fr_FR";
      break;
    case "es":
      e = "es_ES";
      break;
    case "cs":
      e = "cs_CZ";
      break;
    case "cn":
      e = "zh_CN";
      break;
  }
  (function(n, r, s) {
    var i, a = n.getElementsByTagName(r)[0];
    n.getElementById(s) || (i = n.createElement(r), i.id = s, i.src = "https://connect.facebook.net/" + e + "/sdk.js", a.parentNode.insertBefore(i, a));
  })(document, "script", "facebook-jssdk");
}
function _h() {
  var n;
  var t = document.createElement("script"), e = (n = window.googleMapsApiKey) == null ? void 0 : n[0];
  t.type = "text/javascript", t.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&callback=window.initialiseGoogleMaps&key=" + e, document.body.appendChild(t);
}
function wh() {
  document.querySelectorAll(".wdg_google_init").forEach(function(e) {
    const n = e.dataset.gmarker, r = e.dataset.gstyle, s = e.dataset.gtype, i = r === "json", a = n === "1", o = +e.dataset.zoom || 0, l = parseFloat(e.dataset.lan), c = parseFloat(e.dataset.lat), u = new google.maps.LatLng(c, l);
    let h = new google.maps.Map(e, Eh({
      zoom: o,
      center: u,
      googleStyle: r,
      googleType: s
    }));
    i && Sh(h), a && Th({ map: h, position: u });
  });
}
function Eh({ zoom: t, center: e, googleStyle: n, googleType: r }) {
  const s = "edooboxstyle";
  return n === "json" ? {
    zoom: t,
    center: e,
    streetViewControl: !0,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId[r], s]
    },
    mapTypeId: s
  } : {
    zoom: t,
    center: e,
    streetViewControl: !0,
    mapTypeId: r.toLowerCase()
  };
}
function Sh(t) {
  t.mapTypes.set("edooboxstyle", new google.maps.StyledMapType(window.googlemapstyle, {
    name: "Event Style"
  }));
}
function Th({ map: t, position: e }) {
  return new google.maps.Marker({
    position: e,
    map: t,
    animation: google.maps.Animation.DROP,
    title: "Location"
  });
}
function Dh() {
  (function(t, r) {
    var n = t.createElement(r), r = t.getElementsByTagName(r)[0];
    n.src = "https://www.xing-share.com/js/external/share.js", r.parentNode.insertBefore(n, r);
  })(document, "script");
}
function Ch() {
  var t = navigator.language || navigator.userLanguage, e = "de-DE";
  switch (t.split("-")[0]) {
    case "de":
      e = "de-DE";
      break;
    case "en":
      e = "en-US";
      break;
    case "fr":
      e = "fr-FR";
      break;
  }
  window.___gcfg = { lang: e }, function() {
    var n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = "https://apis.google.com/js/plusone.js";
    var r = document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(n, r);
  }();
}
let Ct = class extends Error {
}, Ah = class extends Ct {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}, kh = class extends Ct {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}, xh = class extends Ct {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}, fn = class extends Ct {
}, su = class extends Ct {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}, ge = class extends Ct {
}, qe = class extends Ct {
  constructor() {
    super("Zone is an abstract class");
  }
};
const _ = "numeric", xe = "short", ce = "long", Cr = {
  year: _,
  month: _,
  day: _
}, iu = {
  year: _,
  month: xe,
  day: _
}, Rh = {
  year: _,
  month: xe,
  day: _,
  weekday: xe
}, au = {
  year: _,
  month: ce,
  day: _
}, ou = {
  year: _,
  month: ce,
  day: _,
  weekday: ce
}, lu = {
  hour: _,
  minute: _
}, uu = {
  hour: _,
  minute: _,
  second: _
}, cu = {
  hour: _,
  minute: _,
  second: _,
  timeZoneName: xe
}, du = {
  hour: _,
  minute: _,
  second: _,
  timeZoneName: ce
}, fu = {
  hour: _,
  minute: _,
  hourCycle: "h23"
}, hu = {
  hour: _,
  minute: _,
  second: _,
  hourCycle: "h23"
}, mu = {
  hour: _,
  minute: _,
  second: _,
  hourCycle: "h23",
  timeZoneName: xe
}, gu = {
  hour: _,
  minute: _,
  second: _,
  hourCycle: "h23",
  timeZoneName: ce
}, pu = {
  year: _,
  month: _,
  day: _,
  hour: _,
  minute: _
}, yu = {
  year: _,
  month: _,
  day: _,
  hour: _,
  minute: _,
  second: _
}, vu = {
  year: _,
  month: xe,
  day: _,
  hour: _,
  minute: _
}, bu = {
  year: _,
  month: xe,
  day: _,
  hour: _,
  minute: _,
  second: _
}, Oh = {
  year: _,
  month: xe,
  day: _,
  weekday: xe,
  hour: _,
  minute: _
}, _u = {
  year: _,
  month: ce,
  day: _,
  hour: _,
  minute: _,
  timeZoneName: xe
}, wu = {
  year: _,
  month: ce,
  day: _,
  hour: _,
  minute: _,
  second: _,
  timeZoneName: xe
}, Eu = {
  year: _,
  month: ce,
  day: _,
  weekday: ce,
  hour: _,
  minute: _,
  timeZoneName: ce
}, Su = {
  year: _,
  month: ce,
  day: _,
  weekday: ce,
  hour: _,
  minute: _,
  second: _,
  timeZoneName: ce
};
let xn = class {
  get type() {
    throw new qe();
  }
  get name() {
    throw new qe();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new qe();
  }
  offsetName(e, n) {
    throw new qe();
  }
  formatOffset(e, n) {
    throw new qe();
  }
  offset(e) {
    throw new qe();
  }
  equals(e) {
    throw new qe();
  }
  get isValid() {
    throw new qe();
  }
}, cs = null, xi = class extends xn {
  static get instance() {
    return cs === null && (cs = new xi()), cs;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return Du(e, n, r);
  }
  formatOffset(e, n) {
    return yn(this.offset(e), n);
  }
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  equals(e) {
    return e.type === "system";
  }
  get isValid() {
    return !0;
  }
}, hr = {};
function Mh(t) {
  return hr[t] || (hr[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), hr[t];
}
const Ih = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Nh(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, s, i, a, o, l, c, u] = r;
  return [a, s, i, o, l, c, u];
}
function $h(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let s = 0; s < n.length; s++) {
    const { type: i, value: a } = n[s], o = Ih[i];
    i === "era" ? r[o] = a : M(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let Bn = {}, it = class extends xn {
  static create(e) {
    return Bn[e] || (Bn[e] = new it(e)), Bn[e];
  }
  static resetCache() {
    Bn = {}, hr = {};
  }
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = it.isValidZone(e);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return Du(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return yn(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = Mh(this.name);
    let [s, i, a, o, l, c, u] = r.formatToParts ? $h(r, n) : Nh(r, n);
    o === "BC" && (s = -Math.abs(s) + 1);
    const f = Jr({
      year: s,
      month: i,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: c,
      second: u,
      millisecond: 0
    });
    let d = +n;
    const g = d % 1e3;
    return d -= g >= 0 ? g : 1e3 + g, (f - d) / (60 * 1e3);
  }
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}, wa = {};
function Fh(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = wa[n];
  return r || (r = new Intl.ListFormat(t, e), wa[n] = r), r;
}
let Gs = {};
function Ys(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Gs[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Gs[n] = r), r;
}
let Qs = {};
function Hh(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Qs[n];
  return r || (r = new Intl.NumberFormat(t, e), Qs[n] = r), r;
}
let Js = {};
function Ph(t, e = {}) {
  const { base: n, ...r } = e, s = JSON.stringify([t, r]);
  let i = Js[s];
  return i || (i = new Intl.RelativeTimeFormat(t, e), Js[s] = i), i;
}
let hn = null;
function Lh() {
  return hn || (hn = new Intl.DateTimeFormat().resolvedOptions().locale, hn);
}
function Vh(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, s;
    try {
      r = Ys(t).resolvedOptions(), s = t;
    } catch {
      const l = t.substring(0, n);
      r = Ys(l).resolvedOptions(), s = l;
    }
    const { numberingSystem: i, calendar: a } = r;
    return [s, i, a];
  }
}
function Uh(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function Bh(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = k.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function Wh(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = k.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function Wn(t, e, n, r) {
  const s = t.listingMode();
  return s === "error" ? null : s === "en" ? n(e) : r(e);
}
function zh(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
let jh = class {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: i, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = Hh(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Oi(e, 3);
      return J(n, this.padTo);
    }
  }
}, Zh = class {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && it.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const i = { ...this.opts };
    i.timeZone = i.timeZone || s, this.dtf = Ys(n, i);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: r
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}, qh = class {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && Tu() && (this.rtf = Ph(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : cm(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}, j = class {
  static fromOpts(e) {
    return j.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, n, r, s = !1) {
    const i = e || Q.defaultLocale, a = i || (s ? "en-US" : Lh()), o = n || Q.defaultNumberingSystem, l = r || Q.defaultOutputCalendar;
    return new j(a, o, l, i);
  }
  static resetCache() {
    hn = null, Gs = {}, Qs = {}, Js = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    return j.create(e, n, r);
  }
  constructor(e, n, r, s) {
    const [i, a, o] = Vh(e);
    this.locale = i, this.numberingSystem = n || a || null, this.outputCalendar = r || o || null, this.intl = Uh(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = zh(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : j.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return Wn(this, e, ku, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, s = n ? "format" : "standalone";
      return this.monthsCache[s][e] || (this.monthsCache[s][e] = Bh((i) => this.extract(i, r, "month"))), this.monthsCache[s][e];
    });
  }
  weekdays(e, n = !1) {
    return Wn(this, e, Ou, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, s = n ? "format" : "standalone";
      return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = Wh(
        (i) => this.extract(i, r, "weekday")
      )), this.weekdaysCache[s][e];
    });
  }
  meridiems() {
    return Wn(
      this,
      void 0,
      () => Mu,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [k.utc(2016, 11, 13, 9), k.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Wn(this, e, Iu, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [k.utc(-40, 1, 1), k.utc(2017, 1, 1)].map(
        (r) => this.extract(r, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const s = this.dtFormatter(e, n), i = s.formatToParts(), a = i.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new jh(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new Zh(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new qh(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Fh(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}, ds = null, oe = class extends xn {
  static get utcInstance() {
    return ds === null && (ds = new oe(0)), ds;
  }
  static instance(e) {
    return e === 0 ? oe.utcInstance : new oe(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new oe(Kr(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${yn(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${yn(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return yn(this.fixed, n);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}, Gh = class extends xn {
  constructor(e) {
    super(), this.zoneName = e;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
};
function Ke(t, e) {
  if (M(t) || t === null)
    return e;
  if (t instanceof xn)
    return t;
  if (Yh(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? xi.instance : n === "utc" || n === "gmt" ? oe.utcInstance : oe.parseSpecifier(n) || it.create(t);
  } else
    return Et(t) ? oe.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Gh(t);
}
let Ea = () => Date.now(), Sa = "system", Ta = null, Da = null, Ca = null, Aa = 60, ka, Q = class {
  static get now() {
    return Ea;
  }
  static set now(e) {
    Ea = e;
  }
  static set defaultZone(e) {
    Sa = e;
  }
  static get defaultZone() {
    return Ke(Sa, xi.instance);
  }
  static get defaultLocale() {
    return Ta;
  }
  static set defaultLocale(e) {
    Ta = e;
  }
  static get defaultNumberingSystem() {
    return Da;
  }
  static set defaultNumberingSystem(e) {
    Da = e;
  }
  static get defaultOutputCalendar() {
    return Ca;
  }
  static set defaultOutputCalendar(e) {
    Ca = e;
  }
  static get twoDigitCutoffYear() {
    return Aa;
  }
  static set twoDigitCutoffYear(e) {
    Aa = e % 100;
  }
  static get throwOnInvalid() {
    return ka;
  }
  static set throwOnInvalid(e) {
    ka = e;
  }
  static resetCaches() {
    j.resetCache(), it.resetCache();
  }
};
function M(t) {
  return typeof t > "u";
}
function Et(t) {
  return typeof t == "number";
}
function Qr(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Yh(t) {
  return typeof t == "string";
}
function Qh(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Tu() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Jh(t) {
  return Array.isArray(t) ? t : [t];
}
function xa(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, s) => {
      const i = [e(s), s];
      return r && n(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function Kh(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function Ut(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Fe(t, e, n) {
  return Qr(t) && t >= e && t <= n;
}
function Xh(t, e) {
  return t - e * Math.floor(t / e);
}
function J(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function Qe(t) {
  if (!(M(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function ft(t) {
  if (!(M(t) || t === null || t === ""))
    return parseFloat(t);
}
function Ri(t) {
  if (!(M(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Oi(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Rn(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function pn(t) {
  return Rn(t) ? 366 : 365;
}
function Ar(t, e) {
  const n = Xh(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Rn(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Jr(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function kr(t) {
  const e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7, n = t - 1, r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function Ks(t) {
  return t > 99 ? t : t > Q.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Du(t, e, n, r = null) {
  const s = new Date(t), i = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (i.timeZone = r);
  const a = { timeZoneName: e, ...i }, o = new Intl.DateTimeFormat(n, a).formatToParts(s).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Kr(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, s = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + s;
}
function Cu(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new ge(`Invalid unit value ${t}`);
  return e;
}
function xr(t, e) {
  const n = {};
  for (const r in t)
    if (Ut(t, r)) {
      const s = t[r];
      if (s == null)
        continue;
      n[e(r)] = Cu(s);
    }
  return n;
}
function yn(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), s = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${J(n, 2)}:${J(r, 2)}`;
    case "narrow":
      return `${s}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${J(n, 2)}${J(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Xr(t) {
  return Kh(t, ["hour", "minute", "second", "millisecond"]);
}
const em = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Au = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], tm = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ku(t) {
  switch (t) {
    case "narrow":
      return [...tm];
    case "short":
      return [...Au];
    case "long":
      return [...em];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const xu = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Ru = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], nm = ["M", "T", "W", "T", "F", "S", "S"];
function Ou(t) {
  switch (t) {
    case "narrow":
      return [...nm];
    case "short":
      return [...Ru];
    case "long":
      return [...xu];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Mu = ["AM", "PM"], rm = ["Before Christ", "Anno Domini"], sm = ["BC", "AD"], im = ["B", "A"];
function Iu(t) {
  switch (t) {
    case "narrow":
      return [...im];
    case "short":
      return [...sm];
    case "long":
      return [...rm];
    default:
      return null;
  }
}
function am(t) {
  return Mu[t.hour < 12 ? 0 : 1];
}
function om(t, e) {
  return Ou(e)[t.weekday - 1];
}
function lm(t, e) {
  return ku(e)[t.month - 1];
}
function um(t, e) {
  return Iu(e)[t.year < 0 ? 0 : 1];
}
function cm(t, e, n = "always", r = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && i) {
    const h = t === "days";
    switch (e) {
      case 1:
        return h ? "tomorrow" : `next ${s[t][0]}`;
      case -1:
        return h ? "yesterday" : `last ${s[t][0]}`;
      case 0:
        return h ? "today" : `this ${s[t][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, c = s[t], u = r ? l ? c[1] : c[2] || c[1] : l ? s[t][0] : t;
  return a ? `${o} ${u} ago` : `in ${o} ${u}`;
}
function Ra(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const dm = {
  D: Cr,
  DD: iu,
  DDD: au,
  DDDD: ou,
  t: lu,
  tt: uu,
  ttt: cu,
  tttt: du,
  T: fu,
  TT: hu,
  TTT: mu,
  TTTT: gu,
  f: pu,
  ff: vu,
  fff: _u,
  ffff: Eu,
  F: yu,
  FF: bu,
  FFF: wu,
  FFFF: Su
};
let se = class {
  static create(e, n = {}) {
    return new se(e, n);
  }
  static parseFormat(e) {
    let n = null, r = "", s = !1;
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (r.length > 0 && i.push({ literal: s || /^\s+$/.test(r), val: r }), n = null, r = "", s = !s) : s || o === n ? r += o : (r.length > 0 && i.push({ literal: /^\s+$/.test(r), val: r }), r = o, n = o);
    }
    return r.length > 0 && i.push({ literal: s || /^\s+$/.test(r), val: r }), i;
  }
  static macroTokenToFormatOpts(e) {
    return dm[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0) {
    if (this.opts.forceSimple)
      return J(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", i = (d, g) => this.loc.extract(e, d, g), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? am(e) : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, g) => r ? lm(e, d) : i(g ? { month: d } : { month: d, day: "numeric" }, "month"), c = (d, g) => r ? om(e, d) : i(
      g ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), u = (d) => {
      const g = se.macroTokenToFormatOpts(d);
      return g ? this.formatWithSystemDefault(e, g) : d;
    }, h = (d) => r ? um(e, d) : i({ era: d }, "era"), f = (d) => {
      switch (d) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return s ? i({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return s ? i({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return s ? i({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? i({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? i({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return h("short");
        case "GG":
          return h("long");
        case "GGGGG":
          return h("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return u(d);
      }
    };
    return Ra(se.parseFormat(n), f);
  }
  formatDurationFromString(e, n) {
    const r = (l) => {
      switch (l[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = (l) => (c) => {
      const u = r(c);
      return u ? this.num(l.get(u), c.length) : c;
    }, i = se.parseFormat(n), a = i.reduce(
      (l, { literal: c, val: u }) => c ? l : l.concat(u),
      []
    ), o = e.shiftTo(...a.map(r).filter((l) => l));
    return Ra(i, s(o));
  }
}, Te = class {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
};
const Nu = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Gt(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function Yt(...t) {
  return (e) => t.reduce(
    ([n, r, s], i) => {
      const [a, o, l] = i(e, s);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Qt(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const s = n.exec(t);
    if (s)
      return r(s);
  }
  return [null, null];
}
function $u(...t) {
  return (e, n) => {
    const r = {};
    let s;
    for (s = 0; s < t.length; s++)
      r[t[s]] = Qe(e[n + s]);
    return [r, null, n + s];
  };
}
const Fu = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, fm = `(?:${Fu.source}?(?:\\[(${Nu.source})\\])?)?`, Mi = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Hu = RegExp(`${Mi.source}${fm}`), Ii = RegExp(`(?:T${Hu.source})?`), hm = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, mm = /(\d{4})-?W(\d\d)(?:-?(\d))?/, gm = /(\d{4})-?(\d{3})/, pm = $u("weekYear", "weekNumber", "weekDay"), ym = $u("year", "ordinal"), vm = /(\d{4})-(\d\d)-(\d\d)/, Pu = RegExp(
  `${Mi.source} ?(?:${Fu.source}|(${Nu.source}))?`
), bm = RegExp(`(?: ${Pu.source})?`);
function $t(t, e, n) {
  const r = t[e];
  return M(r) ? n : Qe(r);
}
function _m(t, e) {
  return [{
    year: $t(t, e),
    month: $t(t, e + 1, 1),
    day: $t(t, e + 2, 1)
  }, null, e + 3];
}
function Jt(t, e) {
  return [{
    hours: $t(t, e, 0),
    minutes: $t(t, e + 1, 0),
    seconds: $t(t, e + 2, 0),
    milliseconds: Ri(t[e + 3])
  }, null, e + 4];
}
function On(t, e) {
  const n = !t[e] && !t[e + 1], r = Kr(t[e + 1], t[e + 2]), s = n ? null : oe.instance(r);
  return [{}, s, e + 3];
}
function Mn(t, e) {
  const n = t[e] ? it.create(t[e]) : null;
  return [{}, n, e + 1];
}
const wm = RegExp(`^T?${Mi.source}$`), Em = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Sm(t) {
  const [e, n, r, s, i, a, o, l, c] = t, u = e[0] === "-", h = l && l[0] === "-", f = (d, g = !1) => d !== void 0 && (g || d && u) ? -d : d;
  return [
    {
      years: f(ft(n)),
      months: f(ft(r)),
      weeks: f(ft(s)),
      days: f(ft(i)),
      hours: f(ft(a)),
      minutes: f(ft(o)),
      seconds: f(ft(l), l === "-0"),
      milliseconds: f(Ri(c), h)
    }
  ];
}
const Tm = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ni(t, e, n, r, s, i, a) {
  const o = {
    year: e.length === 2 ? Ks(Qe(e)) : Qe(e),
    month: Au.indexOf(n) + 1,
    day: Qe(r),
    hour: Qe(s),
    minute: Qe(i)
  };
  return a && (o.second = Qe(a)), t && (o.weekday = t.length > 3 ? xu.indexOf(t) + 1 : Ru.indexOf(t) + 1), o;
}
const Dm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Cm(t) {
  const [
    ,
    e,
    n,
    r,
    s,
    i,
    a,
    o,
    l,
    c,
    u,
    h
  ] = t, f = Ni(e, s, r, n, i, a, o);
  let d;
  return l ? d = Tm[l] : c ? d = 0 : d = Kr(u, h), [f, new oe(d)];
}
function Am(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const km = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, xm = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Rm = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Oa(t) {
  const [, e, n, r, s, i, a, o] = t;
  return [Ni(e, s, r, n, i, a, o), oe.utcInstance];
}
function Om(t) {
  const [, e, n, r, s, i, a, o] = t;
  return [Ni(e, o, n, r, s, i, a), oe.utcInstance];
}
const Mm = Gt(hm, Ii), Im = Gt(mm, Ii), Nm = Gt(gm, Ii), $m = Gt(Hu), Lu = Yt(
  _m,
  Jt,
  On,
  Mn
), Fm = Yt(
  pm,
  Jt,
  On,
  Mn
), Hm = Yt(
  ym,
  Jt,
  On,
  Mn
), Pm = Yt(
  Jt,
  On,
  Mn
);
function Lm(t) {
  return Qt(
    t,
    [Mm, Lu],
    [Im, Fm],
    [Nm, Hm],
    [$m, Pm]
  );
}
function Vm(t) {
  return Qt(Am(t), [Dm, Cm]);
}
function Um(t) {
  return Qt(
    t,
    [km, Oa],
    [xm, Oa],
    [Rm, Om]
  );
}
function Bm(t) {
  return Qt(t, [Em, Sm]);
}
const Wm = Yt(Jt);
function zm(t) {
  return Qt(t, [wm, Wm]);
}
const jm = Gt(vm, bm), Zm = Gt(Pu), qm = Yt(
  Jt,
  On,
  Mn
);
function Gm(t) {
  return Qt(
    t,
    [jm, Lu],
    [Zm, qm]
  );
}
const Ma = "Invalid Duration", Vu = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Ym = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Vu
}, he = 146097 / 400, Ot = 146097 / 4800, Qm = {
  years: {
    quarters: 4,
    months: 12,
    weeks: he / 7,
    days: he,
    hours: he * 24,
    minutes: he * 24 * 60,
    seconds: he * 24 * 60 * 60,
    milliseconds: he * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: he / 28,
    days: he / 4,
    hours: he * 24 / 4,
    minutes: he * 24 * 60 / 4,
    seconds: he * 24 * 60 * 60 / 4,
    milliseconds: he * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ot / 7,
    days: Ot,
    hours: Ot * 24,
    minutes: Ot * 24 * 60,
    seconds: Ot * 24 * 60 * 60,
    milliseconds: Ot * 24 * 60 * 60 * 1e3
  },
  ...Vu
}, _t = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Jm = _t.slice(0).reverse();
function Ge(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new F(r);
}
function Uu(t, e) {
  let n = e.milliseconds ?? 0;
  for (const r of Jm.slice(1))
    e[r] && (n += e[r] * t[r].milliseconds);
  return n;
}
function Ia(t, e) {
  const n = Uu(t, e) < 0 ? -1 : 1;
  _t.reduceRight((r, s) => {
    if (M(e[s]))
      return r;
    if (r) {
      const i = e[r] * n, a = t[s][r], o = Math.floor(i / a);
      e[s] += o * n, e[r] -= o * a * n;
    }
    return s;
  }, null), _t.reduce((r, s) => {
    if (M(e[s]))
      return r;
    if (r) {
      const i = e[r] % 1;
      e[r] -= i, e[s] += i * t[r][s];
    }
    return s;
  }, null);
}
function Km(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
let F = class {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? Qm : Ym;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || j.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  static fromMillis(e, n) {
    return F.fromObject({ milliseconds: e }, n);
  }
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new ge(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new F({
      values: xr(e, F.normalizeUnit),
      loc: j.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (Et(e))
      return F.fromMillis(e);
    if (F.isDuration(e))
      return e;
    if (typeof e == "object")
      return F.fromObject(e);
    throw new ge(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  static fromISO(e, n) {
    const [r] = Bm(e);
    return r ? F.fromObject(r, n) : F.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = zm(e);
    return r ? F.fromObject(r, n) : F.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ge("need to specify a reason the Duration is invalid");
    const r = e instanceof Te ? e : new Te(e, n);
    if (Q.throwOnInvalid)
      throw new xh(r);
    return new F({ invalid: r });
  }
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n)
      throw new su(e);
    return n;
  }
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e, n = {}) {
    const r = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? se.create(this.loc, r).formatDurationFromString(this, e) : Ma;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Ma;
    const n = _t.map((r) => {
      const s = this.values[r];
      return M(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(s);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(n);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Oi(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, k.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.isValid ? Uu(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = F.fromDurationLike(e), r = {};
    for (const s of _t)
      (Ut(n.values, s) || Ut(this.values, s)) && (r[s] = n.get(s) + this.get(s));
    return Ge(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = F.fromDurationLike(e);
    return this.plus(n.negate());
  }
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = Cu(e(this.values[r], r));
    return Ge(this, { values: n }, !0);
  }
  get(e) {
    return this[F.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...xr(e, F.normalizeUnit) };
    return Ge(this, { values: n });
  }
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: s } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: s, conversionAccuracy: r };
    return Ge(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Ia(this.matrix, e), Ge(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = Km(this.normalize().shiftToAll().toObject());
    return Ge(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => F.normalizeUnit(a));
    const n = {}, r = {}, s = this.toObject();
    let i;
    for (const a of _t)
      if (e.indexOf(a) >= 0) {
        i = a;
        let o = 0;
        for (const c in r)
          o += this.matrix[c][a] * r[c], r[c] = 0;
        Et(s[a]) && (o += s[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        Et(s[a]) && (r[a] = s[a]);
    for (const a in r)
      r[a] !== 0 && (n[i] += a === i ? r[a] : r[a] / this.matrix[i][a]);
    return Ia(this.matrix, n), Ge(this, { values: n }, !0);
  }
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return Ge(this, { values: e }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of _t)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
};
const Mt = "Invalid Interval";
function Xm(t, e) {
  return !t || !t.isValid ? Y.invalid("missing or invalid start") : !e || !e.isValid ? Y.invalid("missing or invalid end") : e < t ? Y.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
let Y = class {
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ge("need to specify a reason the Interval is invalid");
    const r = e instanceof Te ? e : new Te(e, n);
    if (Q.throwOnInvalid)
      throw new kh(r);
    return new Y({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = an(e), s = an(n), i = Xm(r, s);
    return i ?? new Y({
      start: r,
      end: s
    });
  }
  static after(e, n) {
    const r = F.fromDurationLike(n), s = an(e);
    return Y.fromDateTimes(s, s.plus(r));
  }
  static before(e, n) {
    const r = F.fromDurationLike(n), s = an(e);
    return Y.fromDateTimes(s.minus(r), s);
  }
  static fromISO(e, n) {
    const [r, s] = (e || "").split("/", 2);
    if (r && s) {
      let i, a;
      try {
        i = k.fromISO(r, n), a = i.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = k.fromISO(s, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return Y.fromDateTimes(i, o);
      if (a) {
        const c = F.fromISO(s, n);
        if (c.isValid)
          return Y.after(i, c);
      } else if (l) {
        const c = F.fromISO(r, n);
        if (c.isValid)
          return Y.before(o, c);
      }
    }
    return Y.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e), r = this.end.startOf(e);
    return Math.floor(r.diff(n, e).get(e)) + (r.valueOf() !== this.end.valueOf());
  }
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  set({ start: e, end: n } = {}) {
    return this.isValid ? Y.fromDateTimes(e || this.s, n || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const n = e.map(an).filter((a) => this.contains(a)).sort(), r = [];
    let { s } = this, i = 0;
    for (; s < this.e; ) {
      const a = n[i] || this.e, o = +a > +this.e ? this.e : a;
      r.push(Y.fromDateTimes(s, o)), s = o, i += 1;
    }
    return r;
  }
  splitBy(e) {
    const n = F.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, i;
    const a = [];
    for (; r < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * s));
      i = +o > +this.e ? this.e : o, a.push(Y.fromDateTimes(r, i)), r = i, s += 1;
    }
    return a;
  }
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  intersection(e) {
    if (!this.isValid)
      return this;
    const n = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return n >= r ? null : Y.fromDateTimes(n, r);
  }
  union(e) {
    if (!this.isValid)
      return this;
    const n = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return Y.fromDateTimes(n, r);
  }
  static merge(e) {
    const [n, r] = e.sort((s, i) => s.s - i.s).reduce(
      ([s, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a] : [s, a],
      [[], null]
    );
    return r && n.push(r), n;
  }
  static xor(e) {
    let n = null, r = 0;
    const s = [], i = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...i), o = a.sort((l, c) => l.time - c.time);
    for (const l of o)
      r += l.type === "s" ? 1 : -1, r === 1 ? n = l.time : (n && +n != +l.time && s.push(Y.fromDateTimes(n, l.time)), n = null);
    return Y.merge(s);
  }
  difference(...e) {
    return Y.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Mt;
  }
  toLocaleString(e = Cr, n = {}) {
    return this.isValid ? se.create(this.s.loc.clone(n), e).formatInterval(this) : Mt;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Mt;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Mt;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Mt;
  }
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Mt;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : F.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return Y.fromDateTimes(e(this.s), e(this.e));
  }
}, zn = class {
  static hasDST(e = Q.defaultZone) {
    const n = k.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return it.isValidZone(e);
  }
  static normalizeZone(e) {
    return Ke(e, Q.defaultZone);
  }
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || j.create(n, r, i)).months(e);
  }
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || j.create(n, r, i)).months(e, !0);
  }
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || j.create(n, r, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || j.create(n, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return j.create(e).meridiems();
  }
  static eras(e = "short", { locale: n = null } = {}) {
    return j.create(n, null, "gregory").eras(e);
  }
  static features() {
    return { relative: Tu() };
  }
};
function Na(t, e) {
  const n = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(F.fromMillis(r).as("days"));
}
function eg(t, e, n) {
  const r = [
    ["years", (l, c) => c.year - l.year],
    ["quarters", (l, c) => c.quarter - l.quarter + (c.year - l.year) * 4],
    ["months", (l, c) => c.month - l.month + (c.year - l.year) * 12],
    [
      "weeks",
      (l, c) => {
        const u = Na(l, c);
        return (u - u % 7) / 7;
      }
    ],
    ["days", Na]
  ], s = {}, i = t;
  let a, o;
  for (const [l, c] of r)
    n.indexOf(l) >= 0 && (a = l, s[l] = c(t, e), o = i.plus(s), o > e ? (s[l]--, t = i.plus(s), t > e && (o = t, s[l]--, t = i.plus(s))) : t = o);
  return [t, s, o, a];
}
function tg(t, e, n, r) {
  let [s, i, a, o] = eg(t, e, n);
  const l = e - s, c = n.filter(
    (h) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(h) >= 0
  );
  c.length === 0 && (a < e && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + l / (a - s)));
  const u = F.fromObject(i, r);
  return c.length > 0 ? F.fromMillis(l, r).shiftTo(...c).plus(u) : u;
}
const $i = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, $a = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, ng = $i.hanidec.replace(/[\[|\]]/g, "").split("");
function rg(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search($i.hanidec) !== -1)
        e += ng.indexOf(t[n]);
      else
        for (const s in $a) {
          const [i, a] = $a[s];
          r >= i && r <= a && (e += r - i);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function _e({ numberingSystem: t }, e = "") {
  return new RegExp(`${$i[t || "latn"]}${e}`);
}
const sg = "missing Intl.DateTimeFormat.formatToParts support";
function L(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(rg(n)) };
}
const ig = String.fromCharCode(160), Bu = `[ ${ig}]`, Wu = new RegExp(Bu, "g");
function ag(t) {
  return t.replace(/\./g, "\\.?").replace(Wu, Bu);
}
function Fa(t) {
  return t.replace(/\./g, "").replace(Wu, " ").toLowerCase();
}
function we(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(ag).join("|")),
    deser: ([n]) => t.findIndex((r) => Fa(n) === Fa(r)) + e
  };
}
function Ha(t, e) {
  return { regex: t, deser: ([, n, r]) => Kr(n, r), groups: e };
}
function jn(t) {
  return { regex: t, deser: ([e]) => e };
}
function og(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function lg(t, e) {
  const n = _e(e), r = _e(e, "{2}"), s = _e(e, "{3}"), i = _e(e, "{4}"), a = _e(e, "{6}"), o = _e(e, "{1,2}"), l = _e(e, "{1,3}"), c = _e(e, "{1,6}"), u = _e(e, "{1,9}"), h = _e(e, "{2,4}"), f = _e(e, "{4,6}"), d = (p) => ({ regex: RegExp(og(p.val)), deser: ([b]) => b, literal: !0 }), v = ((p) => {
    if (t.literal)
      return d(p);
    switch (p.val) {
      case "G":
        return we(e.eras("short"), 0);
      case "GG":
        return we(e.eras("long"), 0);
      case "y":
        return L(c);
      case "yy":
        return L(h, Ks);
      case "yyyy":
        return L(i);
      case "yyyyy":
        return L(f);
      case "yyyyyy":
        return L(a);
      case "M":
        return L(o);
      case "MM":
        return L(r);
      case "MMM":
        return we(e.months("short", !0), 1);
      case "MMMM":
        return we(e.months("long", !0), 1);
      case "L":
        return L(o);
      case "LL":
        return L(r);
      case "LLL":
        return we(e.months("short", !1), 1);
      case "LLLL":
        return we(e.months("long", !1), 1);
      case "d":
        return L(o);
      case "dd":
        return L(r);
      case "o":
        return L(l);
      case "ooo":
        return L(s);
      case "HH":
        return L(r);
      case "H":
        return L(o);
      case "hh":
        return L(r);
      case "h":
        return L(o);
      case "mm":
        return L(r);
      case "m":
        return L(o);
      case "q":
        return L(o);
      case "qq":
        return L(r);
      case "s":
        return L(o);
      case "ss":
        return L(r);
      case "S":
        return L(l);
      case "SSS":
        return L(s);
      case "u":
        return jn(u);
      case "uu":
        return jn(o);
      case "uuu":
        return L(n);
      case "a":
        return we(e.meridiems(), 0);
      case "kkkk":
        return L(i);
      case "kk":
        return L(h, Ks);
      case "W":
        return L(o);
      case "WW":
        return L(r);
      case "E":
      case "c":
        return L(n);
      case "EEE":
        return we(e.weekdays("short", !1), 1);
      case "EEEE":
        return we(e.weekdays("long", !1), 1);
      case "ccc":
        return we(e.weekdays("short", !0), 1);
      case "cccc":
        return we(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return Ha(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Ha(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return jn(/[a-z_+-/]{1,256}?/i);
      case " ":
        return jn(/[^\S\n\r]/);
      default:
        return d(p);
    }
  })(t) || {
    invalidReason: sg
  };
  return v.token = t, v;
}
const ug = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function cg(t, e, n) {
  const { type: r, value: s } = t;
  if (r === "literal") {
    const l = /^\s+$/.test(s);
    return {
      literal: !l,
      val: l ? " " : s
    };
  }
  const i = e[r];
  let a = r;
  r === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let o = ug[a];
  if (typeof o == "object" && (o = o[i]), o)
    return {
      literal: !1,
      val: o
    };
}
function dg(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function fg(t, e, n) {
  const r = t.match(e);
  if (r) {
    const s = {};
    let i = 1;
    for (const a in n)
      if (Ut(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(r.slice(i, i + l))), i += l;
      }
    return [r, s];
  } else
    return [r, {}];
}
function hg(t) {
  const e = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, r;
  return M(t.z) || (n = it.create(t.z)), M(t.Z) || (n || (n = new oe(t.Z)), r = t.Z), M(t.q) || (t.M = (t.q - 1) * 3 + 1), M(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), M(t.u) || (t.S = Ri(t.u)), [Object.keys(t).reduce((i, a) => {
    const o = e(a);
    return o && (i[o] = t[a]), i;
  }, {}), n, r];
}
let fs = null;
function mg() {
  return fs || (fs = k.fromMillis(1555555555555)), fs;
}
function gg(t, e) {
  if (t.literal)
    return t;
  const n = se.macroTokenToFormatOpts(t.val), r = Zu(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function zu(t, e) {
  return Array.prototype.concat(...t.map((n) => gg(n, e)));
}
function ju(t, e, n) {
  const r = zu(se.parseFormat(n), t), s = r.map((a) => lg(a, t)), i = s.find((a) => a.invalidReason);
  if (i)
    return { input: e, tokens: r, invalidReason: i.invalidReason };
  {
    const [a, o] = dg(s), l = RegExp(a, "i"), [c, u] = fg(e, l, o), [h, f, d] = u ? hg(u) : [null, null, void 0];
    if (Ut(u, "a") && Ut(u, "H"))
      throw new fn(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: c, matches: u, result: h, zone: f, specificOffset: d };
  }
}
function pg(t, e, n) {
  const { result: r, zone: s, specificOffset: i, invalidReason: a } = ju(t, e, n);
  return [r, s, i, a];
}
function Zu(t, e) {
  if (!t)
    return null;
  const r = se.create(e, t).dtFormatter(mg()), s = r.formatToParts(), i = r.resolvedOptions();
  return s.map((a) => cg(a, t, i));
}
const qu = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Gu = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ye(t, e) {
  return new Te(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Yu(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function Qu(t, e, n) {
  return n + (Rn(t) ? Gu : qu)[e - 1];
}
function Ju(t, e) {
  const n = Rn(t) ? Gu : qu, r = n.findIndex((i) => i < e), s = e - n[r];
  return { month: r + 1, day: s };
}
function Xs(t) {
  const { year: e, month: n, day: r } = t, s = Qu(e, n, r), i = Yu(e, n, r);
  let a = Math.floor((s - i + 10) / 7), o;
  return a < 1 ? (o = e - 1, a = kr(o)) : a > kr(e) ? (o = e + 1, a = 1) : o = e, { weekYear: o, weekNumber: a, weekday: i, ...Xr(t) };
}
function Pa(t) {
  const { weekYear: e, weekNumber: n, weekday: r } = t, s = Yu(e, 1, 4), i = pn(e);
  let a = n * 7 + r - s - 3, o;
  a < 1 ? (o = e - 1, a += pn(o)) : a > i ? (o = e + 1, a -= pn(e)) : o = e;
  const { month: l, day: c } = Ju(o, a);
  return { year: o, month: l, day: c, ...Xr(t) };
}
function hs(t) {
  const { year: e, month: n, day: r } = t, s = Qu(e, n, r);
  return { year: e, ordinal: s, ...Xr(t) };
}
function La(t) {
  const { year: e, ordinal: n } = t, { month: r, day: s } = Ju(e, n);
  return { year: e, month: r, day: s, ...Xr(t) };
}
function yg(t) {
  const e = Qr(t.weekYear), n = Fe(t.weekNumber, 1, kr(t.weekYear)), r = Fe(t.weekday, 1, 7);
  return e ? n ? r ? !1 : ye("weekday", t.weekday) : ye("week", t.week) : ye("weekYear", t.weekYear);
}
function vg(t) {
  const e = Qr(t.year), n = Fe(t.ordinal, 1, pn(t.year));
  return e ? n ? !1 : ye("ordinal", t.ordinal) : ye("year", t.year);
}
function Ku(t) {
  const e = Qr(t.year), n = Fe(t.month, 1, 12), r = Fe(t.day, 1, Ar(t.year, t.month));
  return e ? n ? r ? !1 : ye("day", t.day) : ye("month", t.month) : ye("year", t.year);
}
function Xu(t) {
  const { hour: e, minute: n, second: r, millisecond: s } = t, i = Fe(e, 0, 23) || e === 24 && n === 0 && r === 0 && s === 0, a = Fe(n, 0, 59), o = Fe(r, 0, 59), l = Fe(s, 0, 999);
  return i ? a ? o ? l ? !1 : ye("millisecond", s) : ye("second", r) : ye("minute", n) : ye("hour", e);
}
const ms = "Invalid DateTime", Va = 864e13;
function Zn(t) {
  return new Te("unsupported zone", `the zone "${t.name}" is not supported`);
}
function gs(t) {
  return t.weekData === null && (t.weekData = Xs(t.c)), t.weekData;
}
function ht(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new k({ ...n, ...e, old: n });
}
function ec(t, e, n) {
  let r = t - e * 60 * 1e3;
  const s = n.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const i = n.offset(r);
  return s === i ? [r, s] : [t - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function qn(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function mr(t, e, n) {
  return ec(Jr(t), e, n);
}
function Ua(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), s = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = {
    ...t.c,
    year: r,
    month: s,
    day: Math.min(t.c.day, Ar(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = F.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Jr(i);
  let [l, c] = ec(o, n, t.zone);
  return a !== 0 && (l += a, c = t.zone.offset(l)), { ts: l, o: c };
}
function sn(t, e, n, r, s, i) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, c = k.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: i
    });
    return a ? c : c.setZone(o);
  } else
    return k.invalid(
      new Te("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function Gn(t, e, n = !0) {
  return t.isValid ? se.create(j.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function ps(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += J(t.c.year, n ? 6 : 4), e ? (r += "-", r += J(t.c.month), r += "-", r += J(t.c.day)) : (r += J(t.c.month), r += J(t.c.day)), r;
}
function Ba(t, e, n, r, s, i) {
  let a = J(t.c.hour);
  return e ? (a += ":", a += J(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += J(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += J(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += J(t.c.millisecond, 3))), s && (t.isOffsetFixed && t.offset === 0 && !i ? a += "Z" : t.o < 0 ? (a += "-", a += J(Math.trunc(-t.o / 60)), a += ":", a += J(Math.trunc(-t.o % 60))) : (a += "+", a += J(Math.trunc(t.o / 60)), a += ":", a += J(Math.trunc(t.o % 60)))), i && (a += "[" + t.zone.ianaName + "]"), a;
}
const tc = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, bg = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, _g = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, nc = ["year", "month", "day", "hour", "minute", "second", "millisecond"], wg = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Eg = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Wa(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new su(t);
  return e;
}
function za(t, e) {
  const n = Ke(e.zone, Q.defaultZone), r = j.fromObject(e), s = Q.now();
  let i, a;
  if (M(t.year))
    i = s;
  else {
    for (const c of nc)
      M(t[c]) && (t[c] = tc[c]);
    const o = Ku(t) || Xu(t);
    if (o)
      return k.invalid(o);
    const l = n.offset(s);
    [i, a] = mr(t, l, n);
  }
  return new k({ ts: i, zone: n, loc: r, o: a });
}
function ja(t, e, n) {
  const r = M(n.round) ? !0 : n.round, s = (a, o) => (a = Oi(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), i = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return s(i(n.unit), n.unit);
  for (const a of n.units) {
    const o = i(a);
    if (Math.abs(o) >= 1)
      return s(o, a);
  }
  return s(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Za(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let k = class {
  constructor(e) {
    const n = e.zone || Q.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Te("invalid input") : null) || (n.isValid ? null : Zn(n));
    this.ts = M(e.ts) ? Q.now() : e.ts;
    let s = null, i = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [s, i] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        s = qn(this.ts, o), r = Number.isNaN(s.year) ? new Te("invalid input") : null, s = r ? null : s, i = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || j.create(), this.invalid = r, this.weekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0;
  }
  static now() {
    return new k({});
  }
  static local() {
    const [e, n] = Za(arguments), [r, s, i, a, o, l, c] = n;
    return za({ year: r, month: s, day: i, hour: a, minute: o, second: l, millisecond: c }, e);
  }
  static utc() {
    const [e, n] = Za(arguments), [r, s, i, a, o, l, c] = n;
    return e.zone = oe.utcInstance, za({ year: r, month: s, day: i, hour: a, minute: o, second: l, millisecond: c }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = Qh(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return k.invalid("invalid input");
    const s = Ke(n.zone, Q.defaultZone);
    return s.isValid ? new k({
      ts: r,
      zone: s,
      loc: j.fromObject(n)
    }) : k.invalid(Zn(s));
  }
  static fromMillis(e, n = {}) {
    if (Et(e))
      return e < -Va || e > Va ? k.invalid("Timestamp out of range") : new k({
        ts: e,
        zone: Ke(n.zone, Q.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ge(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (Et(e))
      return new k({
        ts: e * 1e3,
        zone: Ke(n.zone, Q.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ge("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = Ke(n.zone, Q.defaultZone);
    if (!r.isValid)
      return k.invalid(Zn(r));
    const s = Q.now(), i = M(n.specificOffset) ? r.offset(s) : n.specificOffset, a = xr(e, Wa), o = !M(a.ordinal), l = !M(a.year), c = !M(a.month) || !M(a.day), u = l || c, h = a.weekYear || a.weekNumber, f = j.fromObject(n);
    if ((u || o) && h)
      throw new fn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (c && o)
      throw new fn("Can't mix ordinal dates with month/day");
    const d = h || a.weekday && !u;
    let g, v, p = qn(s, i);
    d ? (g = wg, v = bg, p = Xs(p)) : o ? (g = Eg, v = _g, p = hs(p)) : (g = nc, v = tc);
    let b = !1;
    for (const S of g) {
      const te = a[S];
      M(te) ? b ? a[S] = v[S] : a[S] = p[S] : b = !0;
    }
    const E = d ? yg(a) : o ? vg(a) : Ku(a), A = E || Xu(a);
    if (A)
      return k.invalid(A);
    const C = d ? Pa(a) : o ? La(a) : a, [B, O] = mr(C, i, r), P = new k({
      ts: B,
      zone: r,
      o: O,
      loc: f
    });
    return a.weekday && u && e.weekday !== P.weekday ? k.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${P.toISO()}`
    ) : P;
  }
  static fromISO(e, n = {}) {
    const [r, s] = Lm(e);
    return sn(r, s, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, s] = Vm(e);
    return sn(r, s, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, s] = Um(e);
    return sn(r, s, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (M(e) || M(n))
      throw new ge("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: i = null } = r, a = j.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    }), [o, l, c, u] = pg(a, e, n);
    return u ? k.invalid(u) : sn(o, l, r, `format ${n}`, e, c);
  }
  static fromString(e, n, r = {}) {
    return k.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, s] = Gm(e);
    return sn(r, s, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ge("need to specify a reason the DateTime is invalid");
    const r = e instanceof Te ? e : new Te(e, n);
    if (Q.throwOnInvalid)
      throw new Ah(r);
    return new k({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, n = {}) {
    const r = Zu(e, j.fromObject(n));
    return r ? r.map((s) => s ? s.val : null).join("") : null;
  }
  static expandFormat(e, n = {}) {
    return zu(se.parseFormat(e), j.fromObject(n)).map((s) => s.val).join("");
  }
  get(e) {
    return this[e];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? gs(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? gs(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? gs(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? hs(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? zn.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? zn.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? zn.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? zn.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, r = Jr(this.c), s = this.zone.offset(r - e), i = this.zone.offset(r + e), a = this.zone.offset(r - s * n), o = this.zone.offset(r - i * n);
    if (a === o)
      return [this];
    const l = r - a * n, c = r - o * n, u = qn(l, a), h = qn(c, o);
    return u.hour === h.hour && u.minute === h.minute && u.second === h.second && u.millisecond === h.millisecond ? [ht(this, { ts: l }), ht(this, { ts: c })] : [this];
  }
  get isInLeapYear() {
    return Rn(this.year);
  }
  get daysInMonth() {
    return Ar(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? pn(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? kr(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: s } = se.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: s };
  }
  toUTC(e = 0, n = {}) {
    return this.setZone(oe.instance(e), n);
  }
  toLocal() {
    return this.setZone(Q.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = Ke(e, Q.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (n || r) {
        const i = e.offset(this.ts), a = this.toObject();
        [s] = mr(a, i, e);
      }
      return ht(this, { ts: s, zone: e });
    } else
      return k.invalid(Zn(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return ht(this, { loc: s });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = xr(e, Wa), r = !M(n.weekYear) || !M(n.weekNumber) || !M(n.weekday), s = !M(n.ordinal), i = !M(n.year), a = !M(n.month) || !M(n.day), o = i || a, l = n.weekYear || n.weekNumber;
    if ((o || s) && l)
      throw new fn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && s)
      throw new fn("Can't mix ordinal dates with month/day");
    let c;
    r ? c = Pa({ ...Xs(this.c), ...n }) : M(n.ordinal) ? (c = { ...this.toObject(), ...n }, M(n.day) && (c.day = Math.min(Ar(c.year, c.month), c.day))) : c = La({ ...hs(this.c), ...n });
    const [u, h] = mr(c, this.o, this.zone);
    return ht(this, { ts: u, o: h });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = F.fromDurationLike(e);
    return ht(this, Ua(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = F.fromDurationLike(e).negate();
    return ht(this, Ua(this, n));
  }
  startOf(e) {
    if (!this.isValid)
      return this;
    const n = {}, r = F.normalizeUnit(e);
    switch (r) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (r === "weeks" && (n.weekday = 1), r === "quarters") {
      const s = Math.ceil(this.month / 3);
      n.month = (s - 1) * 3 + 1;
    }
    return this.set(n);
  }
  endOf(e) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this;
  }
  toFormat(e, n = {}) {
    return this.isValid ? se.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : ms;
  }
  toLocaleString(e = Cr, n = {}) {
    return this.isValid ? se.create(this.loc.clone(n), e).formatDateTime(this) : ms;
  }
  toLocaleParts(e = {}) {
    return this.isValid ? se.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
    extendedZone: i = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let o = ps(this, a);
    return o += "T", o += Ba(this, a, n, r, s, i), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? ps(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return Gn(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    extendedZone: i = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + Ba(
      this,
      a === "extended",
      n,
      e,
      r,
      i
    ) : null;
  }
  toRFC2822() {
    return Gn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return Gn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? ps(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (n || e) && (r && (s += " "), n ? s += "z" : e && (s += "ZZ")), Gn(this, s, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : ms;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return F.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, i = Jh(n).map(F.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, c = tg(o, l, i, s);
    return a ? c.negate() : c;
  }
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(k.now(), e, n);
  }
  until(e) {
    return this.isValid ? Y.fromDateTimes(this, e) : this;
  }
  hasSame(e, n) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(n) <= r && r <= s.endOf(n);
  }
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || k.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, i = void 0), ja(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: s,
      unit: i
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? ja(e.base || k.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(k.isDateTime))
      throw new ge("min requires all arguments be DateTimes");
    return xa(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(k.isDateTime))
      throw new ge("max requires all arguments be DateTimes");
    return xa(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: s = null, numberingSystem: i = null } = r, a = j.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return ju(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return k.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return Cr;
  }
  static get DATE_MED() {
    return iu;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return Rh;
  }
  static get DATE_FULL() {
    return au;
  }
  static get DATE_HUGE() {
    return ou;
  }
  static get TIME_SIMPLE() {
    return lu;
  }
  static get TIME_WITH_SECONDS() {
    return uu;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return cu;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return du;
  }
  static get TIME_24_SIMPLE() {
    return fu;
  }
  static get TIME_24_WITH_SECONDS() {
    return hu;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return mu;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return gu;
  }
  static get DATETIME_SHORT() {
    return pu;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return yu;
  }
  static get DATETIME_MED() {
    return vu;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return bu;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Oh;
  }
  static get DATETIME_FULL() {
    return _u;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return wu;
  }
  static get DATETIME_HUGE() {
    return Eu;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Su;
  }
};
function an(t) {
  if (k.isDateTime(t))
    return t;
  if (t && t.valueOf && Et(t.valueOf()))
    return k.fromJSDate(t);
  if (t && typeof t == "object")
    return k.fromObject(t);
  throw new ge(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function Sg({ start: t, end: e }) {
  return `&${new URLSearchParams({
    start: t,
    end: e,
    permalink: ed_permalink
  }).toString()}`;
}
function rc(t) {
  return new URL(document.URL).searchParams.get(t);
}
function qa(t, e) {
  let n = new URL(document.URL);
  n.searchParams.get(t) !== e && (n.searchParams.set(t, e), window.history.pushState({}, "", n));
}
var es, D, sc, ic, Bt, bt, Ga, ac, oc, Rr = {}, lc = [], Tg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function et(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function uc(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function m(t, e, n) {
  var r, s, i, a = {};
  for (i in e)
    i == "key" ? r = e[i] : i == "ref" ? s = e[i] : a[i] = e[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? es.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      a[i] === void 0 && (a[i] = t.defaultProps[i]);
  return gr(t, a, r, s, null);
}
function gr(t, e, n, r, s) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++sc };
  return s == null && D.vnode != null && D.vnode(i), i;
}
function ae() {
  return { current: null };
}
function U(t) {
  return t.children;
}
function Dg(t, e, n, r, s) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in e || Or(t, i, null, n[i], r);
  for (i in e)
    s && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Or(t, i, e[i], n[i], r);
}
function Ya(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Tg.test(e) ? n : n + "px";
}
function Or(t, e, n, r, s) {
  var i;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Ya(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Ya(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? Ja : Qa, i) : t.removeEventListener(e, i ? Ja : Qa, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Qa(t) {
  Bt = !0;
  try {
    return this.l[t.type + !1](D.event ? D.event(t) : t);
  } finally {
    Bt = !1;
  }
}
function Ja(t) {
  Bt = !0;
  try {
    return this.l[t.type + !0](D.event ? D.event(t) : t);
  } finally {
    Bt = !1;
  }
}
function de(t, e) {
  this.props = t, this.context = e;
}
function Tn(t, e) {
  if (e == null)
    return t.__ ? Tn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Tn(t) : null;
}
function cc(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return cc(t);
  }
}
function Cg(t) {
  Bt ? setTimeout(t) : ac(t);
}
function ei(t) {
  (!t.__d && (t.__d = !0) && bt.push(t) && !Mr.__r++ || Ga !== D.debounceRendering) && ((Ga = D.debounceRendering) || Cg)(Mr);
}
function Mr() {
  var t, e, n, r, s, i, a, o;
  for (bt.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }); t = bt.shift(); )
    t.__d && (e = bt.length, r = void 0, s = void 0, a = (i = (n = t).__v).__e, (o = n.__P) && (r = [], (s = et({}, i)).__v = i.__v + 1, Fi(o, i, s, n.__n, o.ownerSVGElement !== void 0, i.__h != null ? [a] : null, r, a ?? Tn(i), i.__h), gc(r, i), i.__e != a && cc(i)), bt.length > e && bt.sort(function(l, c) {
      return l.__v.__b - c.__v.__b;
    }));
  Mr.__r = 0;
}
function dc(t, e, n, r, s, i, a, o, l, c) {
  var u, h, f, d, g, v, p, b = r && r.__k || lc, E = b.length;
  for (n.__k = [], u = 0; u < e.length; u++)
    if ((d = n.__k[u] = (d = e[u]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? gr(null, d, null, null, d) : Array.isArray(d) ? gr(U, { children: d }, null, null, null) : d.__b > 0 ? gr(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = b[u]) === null || f && d.key == f.key && d.type === f.type)
        b[u] = void 0;
      else
        for (h = 0; h < E; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      Fi(t, d, f = f || Rr, s, i, a, o, l, c), g = d.__e, (h = d.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, d), p.push(h, d.__c || g, d)), g != null ? (v == null && (v = g), typeof d.type == "function" && d.__k === f.__k ? d.__d = l = fc(d, l, t) : l = hc(t, d, f, b, g, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != t && (l = Tn(f));
    }
  for (n.__e = v, u = E; u--; )
    b[u] != null && (typeof n.type == "function" && b[u].__e != null && b[u].__e == n.__d && (n.__d = mc(r).nextSibling), yc(b[u], b[u]));
  if (p)
    for (u = 0; u < p.length; u++)
      pc(p[u], p[++u], p[++u]);
}
function fc(t, e, n) {
  for (var r, s = t.__k, i = 0; s && i < s.length; i++)
    (r = s[i]) && (r.__ = t, e = typeof r.type == "function" ? fc(r, e, n) : hc(n, r, r, s, r.__e, e));
  return e;
}
function Ir(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Ir(n, e);
  }) : e.push(t)), e;
}
function hc(t, e, n, r, s, i) {
  var a, o, l;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || s != i || s.parentNode == null)
    e:
      if (i == null || i.parentNode !== t)
        t.appendChild(s), a = null;
      else {
        for (o = i, l = 0; (o = o.nextSibling) && l < r.length; l += 1)
          if (o == s)
            break e;
        t.insertBefore(s, i), a = i;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function mc(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = mc(n)))
        return r;
  }
  return null;
}
function Fi(t, e, n, r, s, i, a, o, l) {
  var c, u, h, f, d, g, v, p, b, E, A, C, B, O, P, S = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, o = e.__e = n.__e, e.__h = null, i = [o]), (c = D.__b) && c(e);
  try {
    e:
      if (typeof S == "function") {
        if (p = e.props, b = (c = S.contextType) && r[c.__c], E = c ? b ? b.props.value : c.__ : r, n.__c ? v = (u = e.__c = n.__c).__ = u.__E : ("prototype" in S && S.prototype.render ? e.__c = u = new S(p, E) : (e.__c = u = new de(p, E), u.constructor = S, u.render = kg), b && b.sub(u), u.props = p, u.state || (u.state = {}), u.context = E, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), S.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = et({}, u.__s)), et(u.__s, S.getDerivedStateFromProps(p, u.__s))), f = u.props, d = u.state, u.__v = e, h)
          S.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && p !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(p, E), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(p, u.__s, E) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (u.props = p, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(te) {
              te && (te.__ = e);
            }), A = 0; A < u._sb.length; A++)
              u.__h.push(u._sb[A]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(p, u.__s, E), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, d, g);
          });
        }
        if (u.context = E, u.props = p, u.__P = t, C = D.__r, B = 0, "prototype" in S && S.prototype.render) {
          for (u.state = u.__s, u.__d = !1, C && C(e), c = u.render(u.props, u.state, u.context), O = 0; O < u._sb.length; O++)
            u.__h.push(u._sb[O]);
          u._sb = [];
        } else
          do
            u.__d = !1, C && C(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++B < 25);
        u.state = u.__s, u.getChildContext != null && (r = et(et({}, r), u.getChildContext())), h || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(f, d)), P = c != null && c.type === U && c.key == null ? c.props.children : c, dc(t, Array.isArray(P) ? P : [P], e, n, r, s, i, a, o, l), u.base = e.__e, e.__h = null, u.__h.length && a.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else
        i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ag(n.__e, e, n, r, s, i, a, l);
    (c = D.diffed) && c(e);
  } catch (te) {
    e.__v = null, (l || i != null) && (e.__e = o, e.__h = !!l, i[i.indexOf(o)] = null), D.__e(te, e, n);
  }
}
function gc(t, e) {
  D.__c && D.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      D.__e(r, n.__v);
    }
  });
}
function Ag(t, e, n, r, s, i, a, o) {
  var l, c, u, h = n.props, f = e.props, d = e.type, g = 0;
  if (d === "svg" && (s = !0), i != null) {
    for (; g < i.length; g++)
      if ((l = i[g]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        t = l, i[g] = null;
        break;
      }
  }
  if (t == null) {
    if (d === null)
      return document.createTextNode(f);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), i = null, o = !1;
  }
  if (d === null)
    h === f || o && t.data === f || (t.data = f);
  else {
    if (i = i && es.call(t.childNodes), c = (h = n.props || Rr).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !o) {
      if (i != null)
        for (h = {}, g = 0; g < t.attributes.length; g++)
          h[t.attributes[g].name] = t.attributes[g].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (Dg(t, f, h, s, o), u)
      e.__k = [];
    else if (g = e.props.children, dc(t, Array.isArray(g) ? g : [g], e, n, r, s && d !== "foreignObject", i, a, i ? i[0] : n.__k && Tn(n, 0), o), i != null)
      for (g = i.length; g--; )
        i[g] != null && uc(i[g]);
    o || ("value" in f && (g = f.value) !== void 0 && (g !== t.value || d === "progress" && !g || d === "option" && g !== h.value) && Or(t, "value", g, h.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== t.checked && Or(t, "checked", g, h.checked, !1));
  }
  return t;
}
function pc(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    D.__e(r, n);
  }
}
function yc(t, e, n) {
  var r, s;
  if (D.unmount && D.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || pc(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        D.__e(i, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (s = 0; s < r.length; s++)
      r[s] && yc(r[s], e, n || typeof t.type != "function");
  n || t.__e == null || uc(t.__e), t.__ = t.__e = t.__d = void 0;
}
function kg(t, e, n) {
  return this.constructor(t, n);
}
function Dn(t, e, n) {
  var r, s, i;
  D.__ && D.__(t, e), s = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], Fi(e, t = (!r && n || e).__k = m(U, null, [t]), s || Rr, Rr, e.ownerSVGElement !== void 0, !r && n ? [n] : s ? null : e.firstChild ? es.call(e.childNodes) : null, i, !r && n ? n : s ? s.__e : e.firstChild, r), gc(i, t);
}
function xg(t, e) {
  var n = { __c: e = "__cC" + oc++, __: t, Consumer: function(r, s) {
    return r.children(s);
  }, Provider: function(r) {
    var s, i;
    return this.getChildContext || (s = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && s.some(function(o) {
        o.__e = !0, ei(o);
      });
    }, this.sub = function(a) {
      s.push(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s.splice(s.indexOf(a), 1), o && o.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
es = lc.slice, D = { __e: function(t, e, n, r) {
  for (var s, i, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(t)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (o) {
        t = o;
      }
  throw t;
} }, sc = 0, ic = function(t) {
  return t != null && t.constructor === void 0;
}, Bt = !1, de.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = et({}, this.state), typeof t == "function" && (t = t(et({}, n), this.props)), t && et(n, t), t != null && this.__v && (e && this._sb.push(e), ei(this));
}, de.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ei(this));
}, de.prototype.render = U, bt = [], ac = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mr.__r = 0, oc = 0;
var Me, ys, Ka, vc = [], vs = [], Xa = D.__b, eo = D.__r, to = D.diffed, no = D.__c, ro = D.unmount;
function Rg() {
  for (var t; t = vc.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(pr), t.__H.__h.forEach(ti), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], D.__e(e, t.__v);
      }
}
D.__b = function(t) {
  Me = null, Xa && Xa(t);
}, D.__r = function(t) {
  eo && eo(t);
  var e = (Me = t.__c).__H;
  e && (ys === Me ? (e.__h = [], Me.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = vs, n.__N = n.i = void 0;
  })) : (e.__h.forEach(pr), e.__h.forEach(ti), e.__h = [])), ys = Me;
}, D.diffed = function(t) {
  to && to(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (vc.push(e) !== 1 && Ka === D.requestAnimationFrame || ((Ka = D.requestAnimationFrame) || Og)(Rg)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== vs && (n.__ = n.__V), n.i = void 0, n.__V = vs;
  })), ys = Me = null;
}, D.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(pr), n.__h = n.__h.filter(function(r) {
        return !r.__ || ti(r);
      });
    } catch (r) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], D.__e(r, n.__v);
    }
  }), no && no(t, e);
}, D.unmount = function(t) {
  ro && ro(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      pr(r);
    } catch (s) {
      e = s;
    }
  }), n.__H = void 0, e && D.__e(e, n.__v));
};
var so = typeof requestAnimationFrame == "function";
function Og(t) {
  var e, n = function() {
    clearTimeout(r), so && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  so && (e = requestAnimationFrame(n));
}
function pr(t) {
  var e = Me, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Me = e;
}
function ti(t) {
  var e = Me;
  t.__c = t.__(), Me = e;
}
function Mg(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function io(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function ao(t) {
  this.props = t;
}
(ao.prototype = new de()).isPureReactComponent = !0, ao.prototype.shouldComponentUpdate = function(t, e) {
  return io(this.props, t) || io(this.state, e);
};
var oo = D.__b;
D.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), oo && oo(t);
};
var Ig = D.__e;
D.__e = function(t, e, n, r) {
  if (t.then) {
    for (var s, i = e; i = i.__; )
      if ((s = i.__c) && s.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), s.__c(t, e);
  }
  Ig(t, e, n, r);
};
var lo = D.unmount;
function bc(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Mg({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return bc(r, e, n);
  })), t;
}
function _c(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return _c(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function bs() {
  this.__u = 0, this.t = null, this.__b = null;
}
function wc(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Yn() {
  this.u = null, this.o = null;
}
D.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), lo && lo(t);
}, (bs.prototype = new de()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var s = wc(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, s ? s(o) : o());
  };
  n.__R = a;
  var o = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = _c(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, l = e.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(a, a);
}, bs.prototype.componentWillUnmount = function() {
  this.t = [];
}, bs.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = bc(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var s = e.__a && m(U, null, t.fallback);
  return s && (s.__h = null), [m(U, null, e.__a ? null : t.children), s];
};
var uo = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function Ng(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function $g(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Dn(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, s) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Dn(m(Ng, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Fg(t, e) {
  var n = m($g, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Yn.prototype = new de()).__a = function(t) {
  var e = this, n = wc(e.__v), r = e.o.get(t);
  return r[0]++, function(s) {
    var i = function() {
      e.props.revealOrder ? (r.push(s), uo(e, t, r)) : s();
    };
    n ? n(i) : i();
  };
}, Yn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ir(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    uo(t, n, e);
  });
};
var Hg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Pg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Lg = typeof document < "u", Vg = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
de.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(de.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var co = D.event;
function Ug() {
}
function Bg() {
  return this.cancelBubble;
}
function Wg() {
  return this.defaultPrevented;
}
D.event = function(t) {
  return co && (t = co(t)), t.persist = Ug, t.isPropagationStopped = Bg, t.isDefaultPrevented = Wg, t.nativeEvent = t;
};
var fo = { configurable: !0, get: function() {
  return this.class;
} }, ho = D.vnode;
D.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var s = e.indexOf("-") === -1;
    for (var i in r = {}, n) {
      var a = n[i];
      Lg && i === "children" && e === "noscript" || i === "value" && "defaultValue" in n && a == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !Vg(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : s && Pg.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Ir(n.children).forEach(function(o) {
      o.props.selected = r.value.indexOf(o.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Ir(n.children).forEach(function(o) {
      o.props.selected = r.multiple ? r.defaultValue.indexOf(o.props.value) != -1 : r.defaultValue == o.props.value;
    })), t.props = r, n.class != n.className && (fo.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", fo));
  }
  t.$$typeof = Hg, ho && ho(t);
};
var mo = D.__r;
D.__r = function(t) {
  mo && mo(t), t.__c;
};
const Ec = [], ni = /* @__PURE__ */ new Map();
function ts(t) {
  Ec.push(t), ni.forEach((e) => {
    Tc(e, t);
  });
}
function zg(t) {
  t.isConnected && Sc(t.getRootNode());
}
function Sc(t) {
  let e = ni.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = Zg();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, s = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, s);
    }
    ni.set(t, e), jg(e);
  }
}
function jg(t) {
  for (const e of Ec)
    Tc(t, e);
}
function Tc(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((s, i) => {
    s = s.trim(), s && n.insertRule(s + "}", r + i);
  });
}
let _s;
function Zg() {
  return _s === void 0 && (_s = qg()), _s;
}
function qg() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Sc(document);
var Gg = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
ts(Gg);
class Hi {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function Yg(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $e(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Qg(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Qg(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Jg(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let s = 0; s < n.length; s += 1) {
    let i = n[s].querySelectorAll(e);
    for (let a = 0; a < i.length; a += 1)
      r.push(i[a]);
  }
  return r;
}
const Kg = /(top|left|right|bottom|width|height)$/i;
function Xg(t, e) {
  for (let n in e)
    Dc(t, n, e[n]);
}
function Dc(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && Kg.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function ep(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let go = 0;
function st() {
  return go += 1, "fc-dom-" + go;
}
function tp(t, e) {
  return (n) => {
    let r = $e(n.target, t);
    r && e.call(r, n, r);
  };
}
function Cc(t, e, n, r) {
  let s = tp(n, r);
  return t.addEventListener(e, s), () => {
    t.removeEventListener(e, s);
  };
}
function np(t, e, n, r) {
  let s;
  return Cc(t, "mouseover", e, (i, a) => {
    if (a !== s) {
      s = a, n(i, a);
      let o = (l) => {
        s = null, r(l, a), a.removeEventListener("mouseleave", o);
      };
      a.addEventListener("mouseleave", o);
    }
  });
}
function Ac(t) {
  return Object.assign({ onClick: t }, kc(t));
}
function kc(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let po = 0;
function At() {
  return po += 1, String(po);
}
function rp(t) {
  let e = [], n = [], r, s;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    s = n[r], typeof s == "string" ? e.push(s.charAt(0) === "-" ? { field: s.substring(1), order: -1 } : { field: s, order: 1 }) : typeof s == "function" && e.push({ func: s });
  return e;
}
function sp(t, e, n) {
  let r, s;
  for (r = 0; r < n.length; r += 1)
    if (s = ip(t, e, n[r]), s)
      return s;
  return 0;
}
function ip(t, e, n) {
  return n.func ? n.func(t, e) : ap(t[n.field], e[n.field]) * (n.order || 1);
}
function ap(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Ft(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function vn(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, s, i) => r.replace("$" + i, s || ""), t) : n;
}
function yr(t) {
  return t % 1 === 0;
}
function op(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
const yo = ["years", "months", "days", "milliseconds"], lp = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function $(t, e) {
  return typeof t == "string" ? up(t) : typeof t == "object" && t ? vo(t) : typeof t == "number" ? vo({ [e || "milliseconds"]: t }) : null;
}
function up(t) {
  let e = lp.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function vo(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function cp(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function ri(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function dp(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function fp(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function hp(t) {
  return Ht(t) / 365;
}
function mp(t) {
  return Ht(t) / 30;
}
function Ht(t) {
  return De(t) / 864e5;
}
function De(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Pi(t, e) {
  let n = null;
  for (let r = 0; r < yo.length; r += 1) {
    let s = yo[r];
    if (e[s]) {
      let i = t[s] / e[s];
      if (!yr(i) || n !== null && n !== i)
        return null;
      n = i;
    } else if (t[s])
      return null;
  }
  return n;
}
function si(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function at(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, s;
  if (r !== e.length)
    return !1;
  for (s = 0; s < r; s += 1)
    if (!(n ? n(t[s], e[s]) : t[s] === e[s]))
      return !1;
  return !0;
}
const gp = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function bo(t, e) {
  let n = tt(t);
  return n[2] += e * 7, le(n);
}
function ee(t, e) {
  let n = tt(t);
  return n[2] += e, le(n);
}
function ot(t, e) {
  let n = tt(t);
  return n[6] += e, le(n);
}
function pp(t, e) {
  return ct(t, e) / 7;
}
function ct(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function yp(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function vp(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function bp(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function _p(t, e) {
  let n = W(t), r = W(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(ct(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function wp(t, e) {
  let n = Nr(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Nr(t, e) {
  return nt(t) === nt(e) ? Math.round(ct(t, e)) : null;
}
function W(t) {
  return le([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Ep(t) {
  return le([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Sp(t) {
  return le([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function Tp(t) {
  return le([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function Dp(t, e, n) {
  let r = t.getUTCFullYear(), s = ws(t, r, e, n);
  if (s < 1)
    return ws(t, r - 1, e, n);
  let i = ws(t, r + 1, e, n);
  return i >= 1 ? Math.min(s, i) : s;
}
function ws(t, e, n, r) {
  let s = le([e, 0, 1 + Cp(e, n, r)]), i = W(t), a = Math.round(ct(s, i));
  return Math.floor(a / 7) + 1;
}
function Cp(t, e, n) {
  let r = 7 + e - n;
  return -((7 + le([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function _o(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function wo(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function tt(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function le(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function xc(t) {
  return !isNaN(t.valueOf());
}
function nt(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Rc(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", Li(e, !0)))), r;
}
function In(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function Ap(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function kp(t) {
  return Ft(t.getUTCHours(), 2) + ":" + Ft(t.getUTCMinutes(), 2) + ":" + Ft(t.getUTCSeconds(), 2);
}
function Li(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), s = Math.floor(r / 60), i = Math.round(r % 60);
  return e ? `${n + Ft(s, 2)}:${Ft(i, 2)}` : `GMT${n}${s}${i ? `:${Ft(i, 2)}` : ""}`;
}
function T(t, e, n) {
  let r, s;
  return function(...i) {
    if (!r)
      s = t.apply(this, i);
    else if (!at(r, i)) {
      n && n(s);
      let a = t.apply(this, i);
      (!e || !e(a, s)) && (s = a);
    }
    return r = i, s;
  };
}
function vr(t, e, n) {
  let r, s;
  return (i) => {
    if (!r)
      s = t.call(this, i);
    else if (!Ne(r, i)) {
      n && n(s);
      let a = t.call(this, i);
      (!e || !e(a, s)) && (s = a);
    }
    return r = i, s;
  };
}
const Eo = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, $r = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Qn = /\s*([ap])\.?m\.?/i, xp = /,/g, Rp = /\s+/g, Op = /\u200e/g, Mp = /UTC|GMT/;
let Ip = class {
  constructor(e) {
    let n = {}, r = {}, s = 0;
    for (let i in e)
      i in Eo ? (r[i] = e[i], s = Math.max(Eo[i], s)) : (n[i] = e[i], i in $r && (s = Math.max($r[i], s)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = s, this.buildFormattingFunc = T(So);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, s) {
    let { standardDateProps: i, extendedSettings: a } = this, o = Lp(e.marker, n.marker, r.calendarSystem);
    if (!o)
      return this.format(e, r);
    let l = o;
    l > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (l = 1);
    let c = this.format(e, r), u = this.format(n, r);
    if (c === u)
      return c;
    let h = Vp(i, l), f = So(h, a, r), d = f(e), g = f(n), v = Up(c, d, u, g), p = a.separator || s || r.defaultSeparator || "";
    return v ? v.before + d + p + g + v.after : c + p + u;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
};
function So(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (s) => Li(s.timeZoneOffset) : r === 0 && e.week ? (s) => Pp(n.computeWeekNumber(s.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Np(t, e, n);
}
function Np(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), $p(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), s;
  if (e.omitZeroMinute) {
    let i = Object.assign({}, t);
    delete i.minute, s = new Intl.DateTimeFormat(n.locale.codes, i);
  }
  return (i) => {
    let { marker: a } = i, o;
    s && !a.getUTCMinutes() ? o = s : o = r;
    let l = o.format(a);
    return Fp(l, i, t, e, n);
  };
}
function $p(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Fp(t, e, n, r, s) {
  return t = t.replace(Op, ""), n.timeZoneName === "short" && (t = Hp(t, s.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : Li(e.timeZoneOffset))), r.omitCommas && (t = t.replace(xp, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(Qn, "").trim() : r.meridiem === "narrow" ? t = t.replace(Qn, (i, a) => a.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(Qn, (i, a) => `${a.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(Qn, (i) => i.toLocaleLowerCase())), t = t.replace(Rp, " "), t = t.trim(), t;
}
function Hp(t, e) {
  let n = !1;
  return t = t.replace(Mp, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Pp(t, e, n, r, s) {
  let i = [];
  return s === "long" ? i.push(n) : (s === "short" || s === "narrow") && i.push(e), (s === "long" || s === "short") && i.push(" "), i.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && i.reverse(), i.join("");
}
function Lp(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : nt(t) !== nt(e) ? 1 : 0;
}
function Vp(t, e) {
  let n = {};
  for (let r in t)
    (!(r in $r) || $r[r] <= e) && (n[r] = t[r]);
  return n;
}
function Up(t, e, n, r) {
  let s = 0;
  for (; s < t.length; ) {
    let i = t.indexOf(e, s);
    if (i === -1)
      break;
    let a = t.substr(0, i);
    s = i + e.length;
    let o = t.substr(s), l = 0;
    for (; l < n.length; ) {
      let c = n.indexOf(r, l);
      if (c === -1)
        break;
      let u = n.substr(0, c);
      l = c + r.length;
      let h = n.substr(l);
      if (a === u && o === h)
        return {
          before: a,
          after: o
        };
    }
  }
  return null;
}
function To(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Fr(t, e, n, r) {
  let s = To(t, n.calendarSystem), i = e ? To(e, n.calendarSystem) : null;
  return {
    date: s,
    start: s,
    end: i,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
let Bp = class {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, Fr(e, null, n, r));
  }
  formatRange(e, n, r, s) {
    return r.cmdFormatter(this.cmdStr, Fr(e, n, r, s));
  }
}, Wp = class {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(Fr(e, null, n, r));
  }
  formatRange(e, n, r, s) {
    return this.func(Fr(e, n, r, s));
  }
};
function z(t) {
  return typeof t == "object" && t ? new Ip(t) : typeof t == "string" ? new Bp(t) : typeof t == "function" ? new Wp(t) : null;
}
const Do = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: $,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: $,
  defaultTimedEventDuration: $,
  nextDayThreshold: $,
  scrollTime: $,
  scrollTimeReset: Boolean,
  slotMinTime: $,
  slotMaxTime: $,
  dayPopoverFormat: z,
  slotDuration: $,
  snapDuration: $,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: z,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: rp,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: z,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: $,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: z,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: $,
  hiddenDays: y,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y,
  monthStartFormat: z,
  handleCustomRendering: y,
  customRenderingMetaMap: y
}, bn = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" }
}, Co = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, Ao = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, pt = {
  headerToolbar: yt,
  footerToolbar: yt,
  buttonText: yt,
  buttonHints: yt,
  buttonIcons: yt,
  dateIncrement: yt,
  plugins: Jn,
  events: Jn,
  eventSources: Jn,
  resources: Jn
};
function yt(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? Ne(t, e) : t === e;
}
function Jn(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? at(t, e) : t === e;
}
const zp = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function Es(t) {
  return Ui(t, pt);
}
function Vi(t, e) {
  let n = {}, r = {};
  for (let s in e)
    s in t && (n[s] = e[s](t[s]));
  for (let s in t)
    s in e || (r[s] = t[s]);
  return { refined: n, extra: r };
}
function y(t) {
  return t;
}
const { hasOwnProperty: Hr } = Object.prototype;
function Ui(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === yt) {
        let s = [];
        for (let i = t.length - 1; i >= 0; i -= 1) {
          let a = t[i][r];
          if (typeof a == "object" && a)
            s.unshift(a);
          else if (a !== void 0) {
            n[r] = a;
            break;
          }
        }
        s.length && (n[r] = Ui(s));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let s = t[r];
    for (let i in s)
      i in n || (n[i] = s[i]);
  }
  return n;
}
function Wt(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Dt(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Oc(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Bi(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function Ne(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Hr.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Hr.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const jp = /^on[A-Z]/;
function Zp(t, e) {
  const n = ii(t, e);
  for (let r of n)
    if (!jp.test(r))
      return !1;
  return !0;
}
function ii(t, e) {
  let n = [];
  for (let r in t)
    Hr.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    Hr.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Ss(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && qp(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function qp(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function Gp(t, e = 0, n, r = 1) {
  let s = [];
  n == null && (n = Object.keys(t).length);
  for (let i = e; i < n; i += r) {
    let a = t[i];
    a !== void 0 && s.push(a);
  }
  return s;
}
let Mc = {};
function Yp(t, e) {
  Mc[t] = e;
}
function Qp(t) {
  return new Mc[t]();
}
class Jp {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return le(e);
  }
  markerToArray(e) {
    return tt(e);
  }
}
Yp("gregory", Jp);
const Kp = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Xp(t) {
  let e = Kp.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? Number(`0.${e[12]}`) * 1e3 : 0));
    if (xc(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class ey {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl), this.calendarSystem = Qp(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : le(_o(new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = le(e)), n === null || !xc(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = Xp(e);
    if (n === null)
      return null;
    let { marker: r } = n, s = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : s = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: s };
  }
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return nt(e) === nt(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return nt(e) === nt(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = wp(e, n), r !== null ? { unit: "week", value: r } : (r = Nr(e, n), r !== null ? { unit: "day", value: r } : (r = yp(e, n), yr(r) ? { unit: "hour", value: r } : (r = vp(e, n), yr(r) ? { unit: "minute", value: r } : (r = bp(e, n), yr(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let s;
    return r.years && (s = this.diffWholeYears(e, n), s !== null) ? s / hp(r) : r.months && (s = this.diffWholeMonths(e, n), s !== null) ? s / mp(r) : r.days && (s = Nr(e, n), s !== null) ? s / Ht(r) : (n.valueOf() - e.valueOf()) / De(r);
  }
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? W(e) : n === "hour" ? Ep(e) : n === "minute" ? Sp(e) : n === "second" ? Tp(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Dp(e, this.weekDow, this.weekDoy);
  }
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, s = {}) {
    return s.isEndExclusive && (n = ot(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: s.forcedStartTzo != null ? s.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: s.forcedEndTzo != null ? s.forcedEndTzo : this.offsetForMarker(n)
    }, this, s.defaultSeparator);
  }
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), Rc(e, r, n.omitTime);
  }
  timestampToMarker(e) {
    return this.timeZone === "local" ? le(_o(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : le(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -wo(tt(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(tt(e)) : null;
  }
  toDate(e, n) {
    return this.timeZone === "local" ? wo(tt(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(tt(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class Nn {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
Nn.prototype.classes = {};
Nn.prototype.iconClasses = {};
Nn.prototype.baseIconClass = "";
Nn.prototype.iconOverridePrefix = "";
function ko(t) {
  t();
  let e = D.debounceRendering, n = [];
  function r(s) {
    n.push(s);
  }
  for (D.debounceRendering = r, Dn(m(ty, {}), document.createElement("div")); n.length; )
    n.shift()();
  D.debounceRendering = e;
}
class ty extends de {
  render() {
    return m("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Ic(t) {
  let e = xg(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, s = n.apply(this, arguments);
    if (r) {
      let i = [];
      this.shouldComponentUpdate = (a) => {
        this.props.value !== a.value && i.forEach((o) => {
          o.context = a.value, o.forceUpdate();
        });
      }, this.sub = (a) => {
        i.push(a);
        let o = a.componentWillUnmount;
        a.componentWillUnmount = () => {
          i.splice(i.indexOf(a), 1), o && o.call(a);
        };
      };
    }
    return s;
  }, e;
}
class ny {
  constructor(e, n, r, s) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = s, this.handleScrollRequest = (i) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, i), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const je = Ic({});
function ry(t, e, n, r, s, i, a, o, l, c, u, h, f) {
  return {
    dateEnv: s,
    options: n,
    pluginHooks: a,
    emitter: c,
    dispatch: o,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: i,
    isRtl: n.direction === "rtl",
    addResizeHandler(d) {
      c.on("_resize", d);
    },
    removeResizeHandler(d) {
      c.off("_resize", d);
    },
    createScrollResponder(d) {
      return new ny(d, c, $(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: h,
    unregisterInteractiveComponent: f
  };
}
let kt = class extends de {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(ii(e, this.props), ii(n, this.state)), !Ss(this.props, e, this.propEquality) || !Ss(this.state, n, this.stateEquality);
  }
  safeSetState(e) {
    Ss(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
};
kt.addPropsEquality = sy;
kt.addStateEquality = iy;
kt.contextType = je;
kt.prototype.propEquality = {};
kt.prototype.stateEquality = {};
let H = class extends kt {
};
H.contextType = je;
function sy(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function iy(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Be(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
let Wi = class extends H {
  constructor() {
    super(...arguments), this.id = At(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      ai(this.props.generatorName, this.context.options) || this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && Be(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: s, defaultGenerator: i, renderProps: a } = e, o = Nc(e, [], this.handleEl);
    let l = !1, c, u = [], h;
    if (s != null) {
      const f = typeof s == "function" ? s(a, m) : s;
      if (f === !0)
        l = !0;
      else {
        const d = f && typeof f == "object";
        d && "html" in f ? o.dangerouslySetInnerHTML = { __html: f.html } : d && "domNodes" in f ? u = Array.prototype.slice.call(f.domNodes) : (d ? ic(f) : typeof f != "function") ? c = f : h = f;
      }
    } else
      l = !ai(e.generatorName, r);
    return l && i && (c = i(a)), this.queuedDomNodes = u, this.currentGeneratorMeta = h, m(e.elTag, o, c);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: s } = this, { handleCustomRendering: i, customRenderingMetaMap: a } = s.options;
    if (i) {
      const o = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : a == null ? void 0 : a[r.generatorName];
      o && i(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.updateElRef,
        generatorMeta: o
      }, r), { elClasses: (r.elClasses || []).filter(ay) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!at(e, n)) {
      n.forEach(Yg);
      for (let s of e)
        r.appendChild(s);
      this.currentDomNodes = e;
    }
  }
};
Wi.addPropsEquality({
  elClasses: at,
  elStyle: Ne,
  elAttrs: Zp,
  renderProps: Ne
});
function ai(t, e) {
  var n;
  return Boolean(e.handleCustomRendering && t && ((n = e.customRenderingMetaMap) === null || n === void 0 ? void 0 : n[t]));
}
function Nc(t, e, n) {
  const r = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
}
function ay(t) {
  return Boolean(t);
}
const $c = Ic(0);
let re = class extends de {
  constructor() {
    super(...arguments), this.InnerContent = oy.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && Be(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = ly(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = Nc(e, n, this.handleEl), s = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? m(e.elTag, r, s) : s;
    } else
      return m(Wi, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
};
re.contextType = $c;
function oy(t, e) {
  const n = t.props;
  return m(Wi, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function ly(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class Cn extends H {
  render() {
    let { props: e, context: n } = this, { options: r } = n, s = { view: n.viewApi };
    return m(re, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...Fc(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: s, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function Fc(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function uy(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function xo(t, e) {
  let n = [], { start: r } = e, s, i;
  for (t.sort(cy), s = 0; s < t.length; s += 1)
    i = t[s], i.start > r && n.push({ start: r, end: i.start }), i.end > r && (r = i.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function cy(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function lt(t, e) {
  let { start: n, end: r } = t, s = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (s = { start: n, end: r }), s;
}
function dy(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function Le(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function fy(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Hc(t) {
  let e = Math.floor(ct(t.start, t.end)) || 1, n = W(t.start), r = ee(n, e);
  return { start: n, end: r };
}
function zi(t, e = $(0)) {
  let n = null, r = null;
  if (t.end) {
    r = W(t.end);
    let s = t.end.valueOf() - r.valueOf();
    s && s >= De(e) && (r = ee(r, 1));
  }
  return t.start && (n = W(t.start), r && r <= n && (r = ee(n, 1))), { start: n, end: r };
}
function hy(t) {
  let e = zi(t);
  return ct(e.start, e.end) > 1;
}
function Kn(t, e, n, r) {
  return r === "year" ? $(n.diffWholeYears(t, e), "year") : r === "month" ? $(n.diffWholeMonths(t, e), "month") : _p(t, e);
}
function my(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function gy(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : $n(t.now, e);
}
function $n(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class Pc {
  constructor(e) {
    this.props = e, this.nowDate = $n(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  buildPrev(e, n, r) {
    let { dateEnv: s } = this.props, i = s.subtract(
      s.startOf(n, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(i, -1, r);
  }
  buildNext(e, n, r) {
    let { dateEnv: s } = this.props, i = s.add(
      s.startOf(n, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(i, 1, r);
  }
  build(e, n, r = !0) {
    let { props: s } = this, i, a, o, l, c, u;
    return i = this.buildValidRange(), i = this.trimHiddenDays(i), r && (e = fy(e, i)), a = this.buildCurrentRangeInfo(e, n), o = /^(year|month|week|day)$/.test(a.unit), l = this.buildRenderRange(this.trimHiddenDays(a.range), a.unit, o), l = this.trimHiddenDays(l), c = l, s.showNonCurrentDates || (c = lt(c, a.range)), c = this.adjustActiveRange(c), c = lt(c, i), u = dy(a.range, i), Le(l, e) || (e = l.start), {
      currentDate: e,
      validRange: i,
      currentRange: a.range,
      currentRangeUnit: a.unit,
      isRangeAllDay: o,
      activeRange: c,
      renderRange: l,
      slotMinTime: s.slotMinTime,
      slotMaxTime: s.slotMaxTime,
      isValid: u,
      dateIncrement: this.buildDateIncrement(a.duration)
    };
  }
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, s = null, i = null, a = null, o;
    return r.duration ? (s = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, n, s, i)) : (o = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, n, o)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (s = this.getFallbackDuration(), i = si(s).unit, a = this.buildRangeFromDuration(e, n, s, i)), { duration: s, unit: i, range: a };
  }
  getFallbackDuration() {
    return $({ day: 1 });
  }
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: s, slotMaxTime: i } = this.props, { start: a, end: o } = e;
    return r && (Ht(s) < 0 && (a = W(a), a = n.add(a, s)), Ht(i) > 1 && (o = W(o), o = ee(o, -1), o = n.add(o, i))), { start: a, end: o };
  }
  buildRangeFromDuration(e, n, r, s) {
    let { dateEnv: i, dateAlignment: a } = this.props, o, l, c;
    if (!a) {
      let { dateIncrement: h } = this.props;
      h && De(h) < De(r) ? a = si(h).unit : a = s;
    }
    Ht(r) <= 1 && this.isHiddenDay(o) && (o = this.skipHiddenDays(o, n), o = W(o));
    function u() {
      o = i.startOf(e, a), l = i.add(o, r), c = { start: o, end: l };
    }
    return u(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, n), u()), c;
  }
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: s, dateAlignment: i } = this.props, a = 0, o = e, l;
    i && (o = s.startOf(o, i)), o = W(o), o = this.skipHiddenDays(o, n), l = o;
    do
      l = ee(l, 1), this.isHiddenDay(l) || (a += 1);
    while (a < r);
    return { start: o, end: l };
  }
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, s = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, i = this.refineRange(s);
    return i && (i.start == null || i.end == null) ? null : i;
  }
  buildRenderRange(e, n, r) {
    return e;
  }
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? $(1, r) : e || $({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = uy(e, this.props.dateEnv);
      return n && (n = zi(n)), n;
    }
    return null;
  }
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, s;
    for (this.props.weekends === !1 && e.push(0, 6), s = 0; s < 7; s += 1)
      (n[s] = e.indexOf(s) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = ee(e, n);
    return e;
  }
}
function ji(t, e, n, r) {
  return {
    instanceId: At(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function py(t, e, n, r) {
  for (let s = 0; s < r.length; s += 1) {
    let i = r[s].parse(t, n);
    if (i) {
      let { allDay: a } = t;
      return a == null && (a = e, a == null && (a = i.allDayGuess, a == null && (a = !1))), {
        allDay: a,
        duration: i.duration,
        typeData: i.typeData,
        typeId: s
      };
    }
  }
  return null;
}
function Fn(t, e, n) {
  let { dateEnv: r, pluginHooks: s, options: i } = n, { defs: a, instances: o } = t;
  o = Wt(o, (l) => !a[l.defId].recurringDef);
  for (let l in a) {
    let c = a[l];
    if (c.recurringDef) {
      let { duration: u } = c.recurringDef;
      u || (u = c.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
      let h = yy(c, u, e, r, s.recurringTypes);
      for (let f of h) {
        let d = ji(l, {
          start: f,
          end: r.add(f, u)
        });
        o[d.instanceId] = d;
      }
    }
  }
  return { defs: a, instances: o };
}
function yy(t, e, n, r, s) {
  let a = s[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (a = a.map(W)), a;
}
const br = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Lc = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, vy = Object.assign(Object.assign(Object.assign({}, br), Lc), { extendedProps: y });
function Vc(t, e, n, r, s = Zi(n), i, a) {
  let { refined: o, extra: l } = Uc(t, n, s), c = _y(e, n), u = py(o, c, n.dateEnv, n.pluginHooks.recurringTypes);
  if (u) {
    let f = oi(o, l, e ? e.sourceId : "", u.allDay, Boolean(u.duration), n, i);
    return f.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: f, instance: null };
  }
  let h = by(o, c, n, r);
  if (h) {
    let f = oi(o, l, e ? e.sourceId : "", h.allDay, h.hasEnd, n, i), d = ji(f.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return a && f.publicId && a[f.publicId] && (d.instanceId = a[f.publicId]), { def: f, instance: d };
  }
  return null;
}
function Uc(t, e, n = Zi(e)) {
  return Vi(t, n);
}
function Zi(t) {
  return Object.assign(Object.assign(Object.assign({}, Pr), vy), t.pluginHooks.eventRefiners);
}
function oi(t, e, n, r, s, i, a) {
  let o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (a && t.id ? a[t.id] : "") || At(),
    sourceId: n,
    allDay: r,
    hasEnd: s,
    interactive: t.interactive,
    ui: Lr(t, i),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let l of i.pluginHooks.eventDefMemberAdders)
    Object.assign(o, l(t));
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function by(t, e, n, r) {
  let { allDay: s } = t, i, a = null, o = !1, l, c = null, u = t.start != null ? t.start : t.date;
  if (i = n.dateEnv.createMarkerMeta(u), i)
    a = i.marker;
  else if (!r)
    return null;
  return t.end != null && (l = n.dateEnv.createMarkerMeta(t.end)), s == null && (e != null ? s = e : s = (!i || i.isTimeUnspecified) && (!l || l.isTimeUnspecified)), s && a && (a = W(a)), l && (c = l.marker, s && (c = W(c)), a && c <= a && (c = null)), c ? o = !0 : r || (o = n.options.forceEventDuration || !1, c = n.dateEnv.add(a, s ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: s,
    hasEnd: o,
    range: { start: a, end: c },
    forcedStartTzo: i ? i.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function _y(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function An(t, e, n, r, s, i) {
  let a = We(), o = Zi(n);
  for (let l of t) {
    let c = Vc(l, e, n, r, o, s, i);
    c && li(c, a);
  }
  return a;
}
function li(t, e = We()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function wy(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], s = Gi(t, (i) => Ey(r, i));
    return s.defs[r.defId] = r, s.instances[n.instanceId] = n, s;
  }
  return We();
}
function Ey(t, e) {
  return Boolean(t.groupId && t.groupId === e.groupId);
}
function We() {
  return { defs: {}, instances: {} };
}
function qi(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Gi(t, e) {
  let n = Wt(t.defs, e), r = Wt(t.instances, (s) => n[s.defId]);
  return { defs: n, instances: r };
}
function Sy(t, e) {
  let { defs: n, instances: r } = t, s = {}, i = {};
  for (let a in n)
    e.defs[a] || (s[a] = n[a]);
  for (let a in r)
    !e.instances[a] && s[r[a].defId] && (i[a] = r[a]);
  return {
    defs: s,
    instances: i
  };
}
function Ty(t, e) {
  return Array.isArray(t) ? An(t, null, e, !0) : typeof t == "object" && t ? An([t], null, e, !0) : t != null ? String(t) : null;
}
function Ro(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Pr = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Ro,
  classNames: Ro,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Dy = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function Lr(t, e) {
  let n = Ty(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
  };
}
function Bc(t) {
  return t.reduce(Cy, Dy);
}
function Cy(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Ay = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  success: y,
  failure: y
};
function Wc(t, e, n = zc(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: s, extra: i } = Vi(r, n), a = ky(s, e);
    if (a)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: s.defaultAllDay,
        eventDataTransform: s.eventDataTransform,
        success: s.success,
        failure: s.failure,
        publicId: s.id || "",
        sourceId: At(),
        sourceDefId: a.sourceDefId,
        meta: a.meta,
        ui: Lr(s, e),
        extendedProps: i
      };
  }
  return null;
}
function zc(t) {
  return Object.assign(Object.assign(Object.assign({}, Pr), Ay), t.pluginHooks.eventSourceRefiners);
}
function ky(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let i = n[r].parseMeta(t);
    if (i)
      return { sourceDefId: r, meta: i };
  }
  return null;
}
function xy(t, e, n, r, s) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return Ry(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, s);
    case "RESET_RAW_EVENTS":
      return Oy(t, n[e.sourceId], e.rawEvents, r.activeRange, s);
    case "ADD_EVENTS":
      return My(
        t,
        e.eventStore,
        r ? r.activeRange : null,
        s
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return qi(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Fn(t, r.activeRange, s) : t;
    case "REMOVE_EVENTS":
      return Sy(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Zc(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Gi(t, (i) => !i.sourceId);
    case "REMOVE_ALL_EVENTS":
      return We();
    default:
      return t;
  }
}
function Ry(t, e, n, r, s, i) {
  if (e && n === e.latestFetchId) {
    let a = An(jc(s, e, i), e, i);
    return r && (a = Fn(a, r, i)), qi(Zc(t, e.sourceId), a);
  }
  return t;
}
function Oy(t, e, n, r, s) {
  const { defIdMap: i, instanceIdMap: a } = Iy(t);
  let o = An(jc(n, e, s), e, s, !1, i, a);
  return Fn(o, r, s);
}
function jc(t, e, n) {
  let r = n.options.eventDataTransform, s = e ? e.eventDataTransform : null;
  return s && (t = Oo(t, s)), r && (t = Oo(t, r)), t;
}
function Oo(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let s = e(r);
      s ? n.push(s) : s == null && n.push(r);
    }
  }
  return n;
}
function My(t, e, n, r) {
  return n && (e = Fn(e, n, r)), qi(t, e);
}
function Mo(t, e, n) {
  let { defs: r } = t, s = Dt(t.instances, (i) => r[i.defId].allDay ? i : Object.assign(Object.assign({}, i), { range: {
    start: n.createMarker(e.toDate(i.range.start, i.forcedStartTzo)),
    end: n.createMarker(e.toDate(i.range.end, i.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : i.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : i.forcedEndTzo }));
  return { defs: r, instances: s };
}
function Zc(t, e) {
  return Gi(t, (n) => n.sourceId !== e);
}
function Iy(t) {
  const { defs: e, instances: n } = t, r = {}, s = {};
  for (let i in e) {
    const a = e[i], { publicId: o } = a;
    o && (r[o] = i);
  }
  for (let i in n) {
    const a = n[i], o = e[a.defId], { publicId: l } = o;
    l && (s[l] = i);
  }
  return { defIdMap: r, instanceIdMap: s };
}
class Ny {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    $y(this.handlers, e, n);
  }
  off(e, n) {
    Fy(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], s = this.options && this.options[e], i = [].concat(s || [], r);
    for (let a of i)
      a.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function $y(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function Fy(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
const Hy = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function Py(t, e) {
  return An(Ly(t), null, e);
}
function Ly(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Hy), n)), e;
}
function Vy(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, By(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function Uy(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function By(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, tv(t, e.dateEnv)), n;
}
function Io(t, e, n) {
  let { dateEnv: r, options: s } = n, i = e;
  return t ? (i = W(i), i = r.add(i, s.defaultAllDayEventDuration)) : i = r.add(i, s.defaultTimedEventDuration), i;
}
function Wy(t, e, n, r) {
  let s = Gc(t.defs, e), i = We();
  for (let a in t.defs) {
    let o = t.defs[a];
    i.defs[a] = zy(o, s[a], n, r);
  }
  for (let a in t.instances) {
    let o = t.instances[a], l = i.defs[o.defId];
    i.instances[a] = jy(o, l, s[o.defId], n, r);
  }
  return i;
}
function zy(t, e, n, r) {
  let s = n.standardProps || {};
  s.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (s.hasEnd = !0);
  let i = Object.assign(Object.assign(Object.assign({}, t), s), { ui: Object.assign(Object.assign({}, t.ui), s.ui) });
  n.extendedProps && (i.extendedProps = Object.assign(Object.assign({}, i.extendedProps), n.extendedProps));
  for (let a of r.pluginHooks.eventDefMutationAppliers)
    a(i, n, r);
  return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0), i;
}
function jy(t, e, n, r, s) {
  let { dateEnv: i } = s, a = r.standardProps && r.standardProps.allDay === !0, o = r.standardProps && r.standardProps.hasEnd === !1, l = Object.assign({}, t);
  return a && (l.range = Hc(l.range)), r.datesDelta && n.startEditable && (l.range = {
    start: i.add(l.range.start, r.datesDelta),
    end: i.add(l.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (l.range = {
    start: i.add(l.range.start, r.startDelta),
    end: l.range.end
  }), r.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: i.add(l.range.end, r.endDelta)
  }), o && (l.range = {
    start: l.range.start,
    end: Io(e.allDay, l.range.start, s)
  }), e.allDay && (l.range = {
    start: W(l.range.start),
    end: W(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = Io(e.allDay, l.range.start, s)), l;
}
let Nt = class {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}, Ce = class {
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  setProp(e, n) {
    if (e in Lc)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = br[e](n), this.mutate({
        standardProps: { publicId: n }
      });
    else if (e in br)
      n = br[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Pr) {
      let r = Pr[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, s = r.createMarker(e);
    if (s && this._instance) {
      let i = this._instance.range, a = Kn(i.start, s, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: a }) : this.mutate({ startDelta: a });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, s;
    if (!(e != null && (s = r.createMarker(e), !s)) && this._instance)
      if (s) {
        let i = Kn(this._instance.range.end, s, r, n.granularity);
        this.mutate({ endDelta: i });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: s } = this._context, i = { allDay: r.allDay }, a = s.createMarker(e), o;
    if (!!a && !(n != null && (o = s.createMarker(n), !o)) && this._instance) {
      let l = this._instance.range;
      r.allDay === !0 && (l = Hc(l));
      let c = Kn(l.start, a, s, r.granularity);
      if (o) {
        let u = Kn(l.end, o, s, r.granularity);
        cp(c, u) ? this.mutate({ datesDelta: c, standardProps: i }) : this.mutate({ startDelta: c, endDelta: u, standardProps: i });
      } else
        i.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: i });
    }
  }
  moveStart(e) {
    let n = $(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = $(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = $(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: s } = n;
    s == null && (s = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = s), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, s = z(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, s, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, s, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, s = this._context, { eventStore: i } = s.getCurrentData(), a = wy(i, n.instanceId);
      a = Wy(a, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, s);
      let l = new Ce(s, r, n);
      this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], s.dispatch({
        type: "MERGE_EVENTS",
        eventStore: a
      }), s.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: Yi(a, s, n),
        revert() {
          s.dispatch({
            type: "RESET_EVENTS",
            eventStore: i
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = qc(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new Nt(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: s, endStr: i } = this, a = {
      allDay: n.allDay
    };
    return n.title && (a.title = n.title), s && (a.start = s), i && (a.end = i), n.publicId && (a.id = n.publicId), n.groupId && (a.groupId = n.groupId), n.url && (a.url = n.url), r.display && r.display !== "auto" && (a.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? a.color = r.backgroundColor : (r.backgroundColor && (a.backgroundColor = r.backgroundColor), r.borderColor && (a.borderColor = r.borderColor)), r.textColor && (a.textColor = r.textColor), r.classNames.length && (a.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(a, n.extendedProps) : a.extendedProps = n.extendedProps), a;
  }
  toJSON() {
    return this.toPlainObject();
  }
};
function qc(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function Yi(t, e, n) {
  let { defs: r, instances: s } = t, i = [], a = n ? n.instanceId : "";
  for (let o in s) {
    let l = s[o], c = r[l.defId];
    l.instanceId !== a && i.push(new Ce(e, c, l));
  }
  return i;
}
function ui(t, e, n, r) {
  let s = {}, i = {}, a = {}, o = [], l = [], c = Gc(t.defs, e);
  for (let u in t.defs) {
    let h = t.defs[u];
    c[h.defId].display === "inverse-background" && (h.groupId ? (s[h.groupId] = [], a[h.groupId] || (a[h.groupId] = h)) : i[u] = []);
  }
  for (let u in t.instances) {
    let h = t.instances[u], f = t.defs[h.defId], d = c[f.defId], g = h.range, v = !f.allDay && r ? zi(g, r) : g, p = lt(v, n);
    p && (d.display === "inverse-background" ? f.groupId ? s[f.groupId].push(p) : i[h.defId].push(p) : d.display !== "none" && (d.display === "background" ? o : l).push({
      def: f,
      ui: d,
      instance: h,
      range: p,
      isStart: v.start && v.start.valueOf() === p.start.valueOf(),
      isEnd: v.end && v.end.valueOf() === p.end.valueOf()
    }));
  }
  for (let u in s) {
    let h = s[u], f = xo(h, n);
    for (let d of f) {
      let g = a[u], v = c[g.defId];
      o.push({
        def: g,
        ui: v,
        instance: null,
        range: d,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let u in i) {
    let h = i[u], f = xo(h, n);
    for (let d of f)
      o.push({
        def: t.defs[u],
        ui: c[u],
        instance: null,
        range: d,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: o, fg: l };
}
function Zy(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function No(t, e) {
  t.fcSeg = e;
}
function ci(t) {
  return t.fcSeg || t.parentNode.fcSeg || null;
}
function Gc(t, e) {
  return Dt(t, (n) => Yc(n, e));
}
function Yc(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Bc(n);
}
function Qi(t, e) {
  let n = t.map(qy);
  return n.sort((r, s) => sp(r, s, e)), n.map((r) => r._seg);
}
function qy(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, s = r.start ? r.start.valueOf() : 0, i = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: s,
    end: i,
    duration: i - s,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function Gy(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: s, ui: i } = t.eventRange, a = i.startEditable;
  for (let o of r)
    a = o(a, s, i, e);
  return a;
}
function Yy(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function Qy(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function _n(t, e, n, r, s, i, a) {
  let { dateEnv: o, options: l } = n, { displayEventTime: c, displayEventEnd: u } = l, h = t.eventRange.def, f = t.eventRange.instance;
  c == null && (c = r !== !1), u == null && (u = s !== !1);
  let d = f.range.start, g = f.range.end, v = i || t.start || t.eventRange.range.start, p = a || t.end || t.eventRange.range.end, b = W(d).valueOf() === W(v).valueOf(), E = W(ot(g, -1)).valueOf() === W(ot(p, -1)).valueOf();
  return c && !h.allDay && (b || E) ? (v = b ? d : v, p = E ? g : p, u && h.hasEnd ? o.formatRange(v, p, e, {
    forcedStartTzo: i ? null : f.forcedStartTzo,
    forcedEndTzo: a ? null : f.forcedEndTzo
  }) : o.format(v, e, {
    forcedTzo: i ? null : f.forcedStartTzo
  })) : "";
}
function Ve(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && Le(e, r.start)
  };
}
function Jy(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Qc(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Ji(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: s } = n;
  if (s)
    return { href: s };
  let { emitter: i, options: a } = e, { eventInteractive: o } = a;
  return o == null && (o = n.interactive, o == null && (o = Boolean(i.hasHandlers("eventClick")))), o ? kc((l) => {
    i.trigger("eventClick", {
      el: l.target,
      event: new Ce(e, n, r),
      jsEvent: l,
      view: e.viewApi
    });
  }) : {};
}
const Ky = {
  start: y,
  end: y,
  allDay: Boolean
};
function Xy(t, e, n) {
  let r = ev(t, e), { range: s } = r;
  if (!s.start)
    return null;
  if (!s.end) {
    if (n == null)
      return null;
    s.end = e.add(s.start, n);
  }
  return r;
}
function ev(t, e) {
  let { refined: n, extra: r } = Vi(t, Ky), s = n.start ? e.createMarkerMeta(n.start) : null, i = n.end ? e.createMarkerMeta(n.end) : null, { allDay: a } = n;
  return a == null && (a = s && s.isTimeUnspecified && (!i || i.isTimeUnspecified)), Object.assign({ range: {
    start: s ? s.marker : null,
    end: i ? i.marker : null
  }, allDay: a }, r);
}
function tv(t, e) {
  return Object.assign(Object.assign({}, Kc(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Jc(t, e, n) {
  return Object.assign(Object.assign({}, Kc(t, e, n)), { timeZone: e.timeZone });
}
function Kc(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function nv(t, e, n) {
  let r = Uc({ editable: !1 }, n), s = oi(
    r.refined,
    r.extra,
    "",
    t.allDay,
    !0,
    n
  );
  return {
    def: s,
    ui: Yc(s, e),
    instance: ji(s.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function rv(t, e, n) {
  let r = !1, s = function(o) {
    r || (r = !0, e(o));
  }, i = function(o) {
    r || (r = !0, n(o));
  }, a = t(s, i);
  a && typeof a.then == "function" && a.then(s, i);
}
let $o = class extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
};
function sv(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((s) => {
    if (s.ok)
      return s.json().then((i) => [i, s], () => {
        throw new $o("Failure parsing JSON", s);
      });
    throw new $o("Request failed", s);
  });
}
let Ts;
function Xc() {
  return Ts == null && (Ts = iv()), Ts;
}
function iv() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class av extends H {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      this.setState({ forPrint: !0 });
    }, this.handleAfterPrint = () => {
      this.setState({ forPrint: !1 });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, s = r || n.height === "auto" || n.contentHeight === "auto", i = !s && n.height != null ? n.height : "", a = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return Xc() || a.push("fc-liquid-hack"), e.children(a, i, s, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
class ed {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function ov(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
const Fo = {};
class lv {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  zoomTo(e, n) {
    let r = this.getCurrentData(), s;
    n = n || "day", s = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), s ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: s.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), s = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), i, a;
    for (let o in n)
      s.push(o);
    for (i = 0; i < s.length; i += 1)
      if (a = n[s[i]], a && a.singleUnit === e)
        return a;
    return null;
  }
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: $n(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = $(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), z(n));
  }
  formatRange(e, n, r) {
    let { dateEnv: s } = this.getCurrentData();
    return s.formatRange(s.createMarker(e), s.createMarker(n), z(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let s = this.getCurrentData(), i = Xy(r, s.dateEnv, $({ days: 1 }));
    i && (this.dispatch({ type: "SELECT_DATES", selection: i }), Vy(i, null, s));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Uy(e, n));
  }
  addEvent(e, n) {
    if (e instanceof Ce) {
      let a = e._def, o = e._instance;
      return this.getCurrentData().eventStore.defs[a.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: li({ def: a, instance: o })
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), s;
    if (n instanceof Nt)
      s = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([s] = Bi(r.eventSources));
    else if (n != null) {
      let a = this.getEventSourceById(n);
      if (!a)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      s = a.internalEventSource;
    }
    let i = Vc(e, s, r, !1);
    if (i) {
      let a = new Ce(r, i.def, i.def.recurringDef ? null : i.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: li(i)
      }), this.triggerEventAdd(a), a;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: qc(e)
        });
      }
    });
  }
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: s } = n.eventStore;
    e = String(e);
    for (let i in r) {
      let a = r[i];
      if (a.publicId === e) {
        if (a.recurringDef)
          return new Ce(n, a, null);
        for (let o in s) {
          let l = s[o];
          if (l.defId === a.defId)
            return new Ce(n, a, l);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Yi(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let s in n)
      r.push(new Nt(e, n[s]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let s in r)
      if (r[s].publicId === e)
        return new Nt(n, r[s]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Nt)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Wc(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new Nt(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  scrollToTime(e) {
    let n = $(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function uv(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
const Ds = We();
class cv {
  constructor() {
    this.getKeysForEventDefs = T(this._getKeysForEventDefs), this.splitDateSelection = T(this._splitDateSpan), this.splitEventStore = T(this._splitEventStore), this.splitIndividualUi = T(this._splitIndividualUi), this.splitEventDrag = T(this._splitInteraction), this.splitEventResize = T(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), s = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, r), a = this.splitEventStore(e.eventStore, r), o = this.splitEventDrag(e.eventDrag), l = this.splitEventResize(e.eventResize), c = {};
    this.eventUiBuilders = Dt(n, (u, h) => this.eventUiBuilders[h] || T(dv));
    for (let u in n) {
      let h = n[u], f = a[u] || Ds, d = this.eventUiBuilders[u];
      c[u] = {
        businessHours: h.businessHours || e.businessHours,
        dateSelection: s[u] || null,
        eventStore: f,
        eventUiBases: d(e.eventUiBases[""], h.ui, i[u]),
        eventSelection: f.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: o[u] || null,
        eventResize: l[u] || null
      };
    }
    return c;
  }
  _splitDateSpan(e) {
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let s of r)
        n[s] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return Dt(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: s } = e, i = {};
    for (let a in r)
      for (let o of n[a])
        i[o] || (i[o] = We()), i[o].defs[a] = r[a];
    for (let a in s) {
      let o = s[a];
      for (let l of n[o.defId])
        i[l] && (i[l].instances[a] = o);
    }
    return i;
  }
  _splitIndividualUi(e, n) {
    let r = {};
    for (let s in e)
      if (s)
        for (let i of n[s])
          r[i] || (r[i] = {}), r[i][s] = e[s];
    return r;
  }
  _splitInteraction(e) {
    let n = {};
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), s = this._getKeysForEventDefs(e.mutatedEvents), i = this._splitEventStore(e.mutatedEvents, s), a = (o) => {
        n[o] || (n[o] = {
          affectedEvents: r[o] || Ds,
          mutatedEvents: i[o] || Ds,
          isEvent: e.isEvent
        });
      };
      for (let o in r)
        a(o);
      for (let o in i)
        a(o);
    }
    return n;
  }
}
function dv(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let s = {
    "": Bc(r)
  };
  return n && Object.assign(s, n), s;
}
function Ki(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: Boolean(r && !Le(r.activeRange, t)),
    isOther: Boolean(r && !Le(r.currentRange, t)),
    isToday: Boolean(e && Le(e, t)),
    isPast: Boolean(n ? t < n : e ? t < e.start : !1),
    isFuture: Boolean(n ? t > n : e ? t >= e.end : !1)
  };
}
function ns(t, e) {
  let n = [
    "fc-day",
    `fc-day-${gp[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const fv = z({ year: "numeric", month: "long", day: "numeric" }), hv = z({ week: "long" });
function zt(t, e, n = "day", r = !0) {
  const { dateEnv: s, options: i, calendarApi: a } = t;
  let o = s.format(e, n === "week" ? hv : fv);
  if (i.navLinks) {
    let l = s.toDate(e);
    const c = (u) => {
      let h = n === "day" ? i.navLinkDayClick : n === "week" ? i.navLinkWeekClick : null;
      typeof h == "function" ? h.call(a, s.toDate(e), u) : (typeof h == "string" && (n = h), a.zoomTo(e, n));
    };
    return Object.assign({ title: vn(i.navLinkHint, [o, l], o), "data-navlink": "" }, r ? Ac(c) : { onClick: c });
  }
  return { "aria-label": o };
}
let Cs;
function mv() {
  return Cs || (Cs = gv()), Cs;
}
function gv() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = pv(t);
  return document.body.removeChild(t), e;
}
function pv(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function yv(t) {
  let e = vv(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let s = uv(n, r.getBoundingClientRect());
    if (s)
      n = s;
    else
      return null;
  }
  return n;
}
function vv(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class jt {
  constructor(e, n, r, s) {
    this.els = n;
    let i = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(i.left), s && this.buildElVerticals(i.top);
  }
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let s of this.els) {
      let i = s.getBoundingClientRect();
      n.push(i.left - e), r.push(i.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  buildElVerticals(e) {
    let n = [], r = [];
    for (let s of this.els) {
      let i = s.getBoundingClientRect();
      n.push(i.top - e), r.push(i.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, s = n.length, i;
    for (i = 0; i < s; i += 1)
      if (e >= n[i] && e < r[i])
        return i;
  }
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, s = n.length, i;
    for (i = 0; i < s; i += 1)
      if (e >= n[i] && e < r[i])
        return i;
  }
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return Xn(this.tops || [], e.tops || []) && Xn(this.bottoms || [], e.bottoms || []) && Xn(this.lefts || [], e.lefts || []) && Xn(this.rights || [], e.rights || []);
  }
}
function Xn(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class Oe extends H {
  constructor() {
    super(...arguments), this.uid = At();
  }
  prepareHits() {
  }
  queryHit(e, n, r, s) {
    return null;
  }
  isValidSegDownEl(e) {
    return !this.props.eventDrag && !this.props.eventResize && !$e(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !$e(e, ".fc-event:not(.fc-bg-event)") && !$e(e, ".fc-more-link") && !$e(e, "a[data-navlink]") && !$e(e, ".fc-popover");
  }
}
class td {
  constructor(e = (n) => n.thickness) {
    this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    return this.isInsertionValid(r, e) ? (this.insertEntryAt(e, r), 1) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(e, n, r) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(n, e.touchingEntry, r) : (r.push(n), 0);
  }
  splitEntry(e, n, r) {
    let s = 0, i = [], a = e.span, o = n.span;
    return a.start < o.start && (s += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: a.start, end: o.start }
    }, i)), a.end > o.end && (s += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.end, end: a.end }
    }, i)), s ? (r.push({
      index: e.index,
      thickness: e.thickness,
      span: Xi(o, a)
    }, ...i), s) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: s } = this;
    n.lateral === -1 ? (As(s, n.level, n.levelCoord), As(r, n.level, [e])) : As(r[n.level], n.lateral, e), this.stackCnts[St(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: s, stackCnts: i } = this, a = n.length, o = 0, l = -1, c = -1, u = null, h = 0;
    for (let g = 0; g < a; g += 1) {
      let v = n[g];
      if (!s && v >= o + this.getEntryThickness(e))
        break;
      let p = r[g], b, E = fi(p, e.span.start, di), A = E[0] + E[1];
      for (; (b = p[A]) && b.span.start < e.span.end; ) {
        let C = v + this.getEntryThickness(b);
        C > o && (o = C, u = b, l = g, c = A), C === o && (h = Math.max(h, i[St(b)] + 1)), A += 1;
      }
    }
    let f = 0;
    if (u)
      for (f = l + 1; f < a && n[f] < o; )
        f += 1;
    let d = -1;
    return f < a && n[f] === o && (d = fi(r[f], e.span.end, di)[0]), {
      touchingLevel: l,
      touchingLateral: c,
      touchingEntry: u,
      stackCnt: h,
      levelCoord: o,
      level: f,
      lateral: d
    };
  }
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, s = [];
    for (let i = 0; i < r; i += 1) {
      let a = e[i], o = n[i];
      for (let l of a)
        s.push(Object.assign(Object.assign({}, l), { thickness: this.getEntryThickness(l), levelCoord: o }));
    }
    return s;
  }
}
function di(t) {
  return t.span.end;
}
function St(t) {
  return t.index + ":" + t.span.start;
}
function bv(t) {
  let e = [];
  for (let n of t) {
    let r = [], s = {
      span: n.span,
      entries: [n]
    };
    for (let i of e)
      Xi(i.span, s.span) ? s = {
        entries: i.entries.concat(s.entries),
        span: _v(i.span, s.span)
      } : r.push(i);
    r.push(s), e = r;
  }
  return e;
}
function _v(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function Xi(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function As(t, e, n) {
  t.splice(e, 0, n);
}
function fi(t, e, n) {
  let r = 0, s = t.length;
  if (!s || e < n(t[r]))
    return [0, 0];
  if (e > n(t[s - 1]))
    return [s, 0];
  for (; r < s; ) {
    let i = Math.floor(r + (s - r) / 2), a = n(t[i]);
    if (e < a)
      s = i;
    else if (e > a)
      r = i + 1;
    else
      return [i, 1];
  }
  return [r, 0];
}
function wv(t, e) {
  return !t || e > 10 ? z({ weekday: "short" }) : e > 1 ? z({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : z({ weekday: "long" });
}
const nd = "fc-col-header-cell";
function rd(t) {
  return t.text;
}
class Ev extends H {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: s } = this.context, { props: i } = this, { date: a, dateProfile: o } = i, l = Ki(a, i.todayRange, null, o), c = [nd].concat(ns(l, r)), u = e.format(a, i.dayHeaderFormat), h = !l.isDisabled && i.colCnt > 1 ? zt(this.context, a) : {}, f = Object.assign(Object.assign(Object.assign({ date: e.toDate(a), view: s }, i.extraRenderProps), { text: u }), l);
    return m(re, { elTag: "th", elClasses: c, elAttrs: Object.assign({ role: "columnheader", colSpan: i.colSpan, "data-date": l.isDisabled ? void 0 : In(a) }, i.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: rd, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (d) => m("div", { className: "fc-scrollgrid-sync-inner" }, !l.isDisabled && m(d, { elTag: "a", elAttrs: h, elClasses: [
      "fc-col-header-cell-cushion",
      i.isSticky && "fc-sticky"
    ] })));
  }
}
const Sv = z({ weekday: "long" });
class Tv extends H {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: s, options: i } = this.context, a = ee(new Date(2592e5), e.dow), o = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, l = n.format(a, e.dayHeaderFormat), c = Object.assign(Object.assign(Object.assign(Object.assign({
      date: a
    }, o), { view: s }), e.extraRenderProps), { text: l });
    return m(re, { elTag: "th", elClasses: [
      nd,
      ...ns(o, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: c, generatorName: "dayHeaderContent", customGenerator: i.dayHeaderContent, defaultGenerator: rd, classNameGenerator: i.dayHeaderClassNames, didMount: i.dayHeaderDidMount, willUnmount: i.dayHeaderWillUnmount }, (u) => m(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      m(u, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(a, Sv)
      } })
    ));
  }
}
let Kt = class extends de {
  constructor(e, n) {
    super(e, n), this.initialNowDate = $n(n.options.now, n.dateEnv), this.initialNowQueriedMs = new Date().valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = ot(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), s = n.dateEnv.startOf(r, e.unit), i = n.dateEnv.add(s, $(1, e.unit)), a = i.valueOf() - r.valueOf();
    return a = Math.min(1e3 * 60 * 60 * 24, a), {
      currentState: { nowDate: s, todayRange: Ho(s) },
      nextState: { nowDate: i, todayRange: Ho(i) },
      waitMs: a
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
};
Kt.contextType = je;
function Ho(t) {
  let e = W(t), n = ee(e, 1);
  return { start: e, end: n };
}
class sd extends H {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = T(Dv);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: s, renderIntro: i } = this.props, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, s, n.length);
    return m(Kt, { unit: "day" }, (o, l) => m(
      "tr",
      { role: "row" },
      i && i("day"),
      n.map((c) => s ? m(Ev, { key: c.toISOString(), date: c, dateProfile: r, todayRange: l, colCnt: n.length, dayHeaderFormat: a }) : m(Tv, { key: c.getUTCDay(), dow: c.getUTCDay(), dayHeaderFormat: a }))
    ));
  }
}
function Dv(t, e, n) {
  return t || wv(e, n);
}
class id {
  constructor(e, n) {
    let r = e.start, { end: s } = e, i = [], a = [], o = -1;
    for (; r < s; )
      n.isHiddenDay(r) ? i.push(o + 0.5) : (o += 1, i.push(o), a.push(r)), r = ee(r, 1);
    this.dates = a, this.indices = i, this.cnt = a.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(ee(e.end, -1)), s = Math.max(0, n), i = Math.min(this.cnt - 1, r);
    return s = Math.ceil(s), i = Math.floor(i), s <= i ? {
      firstIndex: s,
      lastIndex: i,
      isStart: n === s,
      isEnd: r === i
    } : null;
  }
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(ct(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class ad {
  constructor(e, n) {
    let { dates: r } = e, s, i, a;
    if (n) {
      for (i = r[0].getUTCDay(), s = 1; s < r.length && r[s].getUTCDay() !== i; s += 1)
        ;
      a = Math.ceil(r.length / s);
    } else
      a = 1, s = r.length;
    this.rowCnt = a, this.colCnt = s, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let s = 0; s < this.colCnt; s += 1)
        r.push(this.buildCell(n, s));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), s = [];
    if (r) {
      let { firstIndex: i, lastIndex: a } = r, o = i;
      for (; o <= a; ) {
        let l = Math.floor(o / n), c = Math.min((l + 1) * n, a + 1);
        s.push({
          row: l,
          firstCol: o % n,
          lastCol: (c - 1) % n,
          isStart: r.isStart && o === i,
          isEnd: r.isEnd && c - 1 === a
        }), o = c;
      }
    }
    return s;
  }
}
class od {
  constructor() {
    this.sliceBusinessHours = T(this._sliceBusinessHours), this.sliceDateSelection = T(this._sliceDateSpan), this.sliceEventStore = T(this._sliceEventStore), this.sliceEventDrag = T(this._sliceInteraction), this.sliceEventResize = T(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, s, ...i) {
    let { eventUiBases: a } = e, o = this.sliceEventStore(e.eventStore, a, n, r, ...i);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, a, s, ...i),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, s, ...i),
      fgEventSegs: o.fg,
      bgEventSegs: o.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, a, n, r, ...i),
      eventResize: this.sliceEventResize(e.eventResize, a, n, r, ...i),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, s, ...i) {
    return this._sliceDateSpan(
      { range: { start: e, end: ot(e, 1) }, allDay: !1 },
      n,
      r,
      {},
      s,
      ...i
    );
  }
  _sliceBusinessHours(e, n, r, s, ...i) {
    return e ? this._sliceEventStore(Fn(e, er(n, Boolean(r)), s), {}, n, r, ...i).bg : [];
  }
  _sliceEventStore(e, n, r, s, ...i) {
    if (e) {
      let a = ui(e, n, er(r, Boolean(s)), s);
      return {
        bg: this.sliceEventRanges(a.bg, i),
        fg: this.sliceEventRanges(a.fg, i)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, s, ...i) {
    if (!e)
      return null;
    let a = ui(e.mutatedEvents, n, er(r, Boolean(s)), s);
    return {
      segs: this.sliceEventRanges(a.fg, i),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, s, i, ...a) {
    if (!e)
      return [];
    let o = er(n, Boolean(r)), l = lt(e.range, o);
    if (l) {
      e = Object.assign(Object.assign({}, e), { range: l });
      let c = nv(e, s, i), u = this.sliceRange(e.range, ...a);
      for (let h of u)
        h.eventRange = c;
      return u;
    }
    return [];
  }
  sliceEventRanges(e, n) {
    let r = [];
    for (let s of e)
      r.push(...this.sliceEventRange(s, n));
    return r;
  }
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: ee(r.start, 1)
    });
    let s = this.sliceRange(r, ...n);
    for (let i of s)
      i.eventRange = e, i.isStart = e.isStart && i.isStart, i.isEnd = e.isEnd && i.isEnd;
    return s;
  }
}
function er(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: ot(n.start, t.slotMinTime.milliseconds),
    end: ot(n.end, t.slotMaxTime.milliseconds - 864e5)
  };
}
const tr = /^(visible|hidden)$/;
let ld = class extends H {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Be(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, s = n && r, i = ["fc-scroller"];
    return n && (r ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: i.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: s && -(e.overcomeLeft || 0) || "",
      right: s && -(e.overcomeRight || 0) || "",
      bottom: s && -(e.overcomeBottom || 0) || "",
      marginLeft: !s && -(e.overcomeLeft || 0) || "",
      marginRight: !s && -(e.overcomeRight || 0) || "",
      marginBottom: !s && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (tr.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let s = 0; s < r.length; s += 1)
      if (r[s].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (tr.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let s = 0; s < r.length; s += 1)
      if (r[s].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return tr.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return tr.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}, He = class {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: s, currentMap: i } = this, a = !1, o = !1;
      n !== null ? (a = r in i, i[r] = n, s[r] = (s[r] || 0) + 1, o = !0) : (s[r] -= 1, s[r] || (delete i[r], delete this.callbackMap[r], a = !0)), this.masterCallback && (a && this.masterCallback(null, String(r)), o && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  collect(e, n, r) {
    return Gp(this.currentMap, e, n, r);
  }
  getAll() {
    return Bi(this.currentMap);
  }
};
function Cv(t) {
  let e = Jg(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, op(r));
  return Math.ceil(n);
}
function ud(t, e) {
  return t.liquid && e.liquid;
}
function Av(t, e) {
  return e.maxHeight != null || ud(t, e);
}
function kv(t, e, n, r) {
  let { expandRows: s } = n;
  return typeof e.content == "function" ? e.content(n) : m("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: s ? n.clientHeight : ""
    }
  }, n.tableColGroupNode, m(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function xv(t, e) {
  return at(t, e, Ne);
}
function Rv(t, e) {
  let n = [];
  for (let r of t) {
    let s = r.span || 1;
    for (let i = 0; i < s; i += 1)
      n.push(m("col", { style: {
        width: r.width === "shrink" ? Ov(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return m("colgroup", {}, ...n);
}
function Ov(t) {
  return t ?? 4;
}
function Mv(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function Iv(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function Nv(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function hi(t) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Vr(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function cd(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
let ea = class extends H {
  constructor() {
    super(...arguments), this.processCols = T((e) => e, xv), this.renderMicroColGroup = T(Rv), this.scrollerRefs = new He(), this.scrollerElRefs = new He(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, s = e.sections || [], i = this.processCols(e.cols), a = this.renderMicroColGroup(i, n.shrinkWidth), o = Iv(e.liquid, r);
    e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
    let l = s.length, c = 0, u, h = [], f = [], d = [];
    for (; c < l && (u = s[c]).type === "header"; )
      h.push(this.renderSection(u, a, !0)), c += 1;
    for (; c < l && (u = s[c]).type === "body"; )
      f.push(this.renderSection(u, a, !1)), c += 1;
    for (; c < l && (u = s[c]).type === "footer"; )
      d.push(this.renderSection(u, a, !0)), c += 1;
    let g = !Xc();
    const v = { role: "rowgroup" };
    return m("table", {
      role: "grid",
      className: o.join(" "),
      style: { height: e.height }
    }, Boolean(!g && h.length) && m("thead", v, ...h), Boolean(!g && f.length) && m("tbody", v, ...f), Boolean(!g && d.length) && m("tfoot", v, ...d), g && m("tbody", v, ...h, ...f, ...d));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? m(U, { key: e.key }, e.outerContent) : m("tr", { key: e.key, role: "presentation", className: Nv(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, s) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: i } = this, { forceYScrollbars: a, scrollerClientWidths: o, scrollerClientHeights: l } = this.state, c = Av(i, e), u = ud(i, e), h = i.liquid ? a ? "scroll" : c ? "auto" : "hidden" : "visible", f = e.key, d = kv(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !i.collapsibleWidth && o[f] !== void 0 ? o[f] : null,
      clientHeight: l[f] !== void 0 ? l[f] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, s);
    return m(s ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, m(
      "div",
      { className: `fc-scroller-harness${u ? " fc-scroller-harness-liquid" : ""}` },
      m(ld, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: h, overflowX: i.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, d)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = $v(this.props.sections, n);
    r && Be(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return Mv(this.props.cols) ? Cv(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = mv(), { scrollerRefs: n, scrollerElRefs: r } = this, s = !1, i = {}, a = {};
    for (let o in n.currentMap) {
      let l = n.currentMap[o];
      if (l && l.needsYScrolling()) {
        s = !0;
        break;
      }
    }
    for (let o of this.props.sections) {
      let l = o.key, c = r.currentMap[l];
      if (c) {
        let u = c.parentNode;
        i[l] = Math.floor(u.getBoundingClientRect().width - (s ? e.y : 0)), a[l] = Math.floor(u.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: s, scrollerClientWidths: i, scrollerClientHeights: a };
  }
};
ea.addStateEquality({
  scrollerClientWidths: Ne,
  scrollerClientHeights: Ne
});
function $v(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class rs extends H {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && No(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: s } = e, { eventRange: i } = s, { ui: a } = i, o = {
      event: new Ce(n, i.def, i.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: a.textColor,
      backgroundColor: a.backgroundColor,
      borderColor: a.borderColor,
      isDraggable: !e.disableDragging && Gy(s, n),
      isStartResizable: !e.disableResizing && Yy(s, n),
      isEndResizable: !e.disableResizing && Qy(s),
      isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: Boolean(s.isStart),
      isEnd: Boolean(s.isEnd),
      isPast: Boolean(e.isPast),
      isFuture: Boolean(e.isFuture),
      isToday: Boolean(e.isToday),
      isSelected: Boolean(e.isSelected),
      isDragging: Boolean(e.isDragging),
      isResizing: Boolean(e.isResizing)
    };
    return m(re, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...Jy(o),
      ...s.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: o, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && No(this.el, this.props.seg);
  }
}
class dd extends H {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, { ui: i } = s.eventRange, a = r.eventTimeFormat || e.defaultTimeFormat, o = _n(s, a, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return m(rs, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor
    }, elAttrs: Ji(s, n), defaultGenerator: Fv, timeText: o }), (l, c) => m(
      U,
      null,
      m(l, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: c.textColor } }),
      Boolean(c.isStartResizable) && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      Boolean(c.isEndResizable) && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function Fv(t) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, t.event.title || m(U, null, " "))
    )
  );
}
const ta = (t) => m(je.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return m(re, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), Hv = z({ day: "numeric" });
class na extends H {
  constructor() {
    super(...arguments), this.refineRenderProps = vr(Pv);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, s = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return m(re, Object.assign({}, e, { elClasses: [
      ...ns(s, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), s.isDisabled ? {} : { "data-date": In(e.date) }), renderProps: s, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: s.isDisabled ? void 0 : r.dayCellClassNames, didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function ra(t) {
  return Boolean(t.dayCellContent || ai("dayCellContent", t));
}
function Pv(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: s } = t, i = Ki(e, t.todayRange, null, r), a = t.showDayNumber ? n.format(e, s ? t.monthStartFormat : Hv) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, i), {
    isMonthStart: s,
    dayNumberText: a
  }), t.extraRenderProps);
}
class fd extends H {
  render() {
    let { props: e } = this, { seg: n } = e;
    return m(rs, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: Lv, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Lv(t) {
  let { title: e } = t.event;
  return e && m("div", { className: "fc-event-title" }, t.event.title);
}
function hd(t) {
  return m("div", { className: `fc-${t}` });
}
const md = (t) => m(je.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: s } = t, i = r.weekNumberFormat || t.defaultFormat, a = n.computeWeekNumber(s), o = n.format(s, i);
  return m(
    re,
    Object.assign({}, t, { renderProps: { num: a, text: o, date: s }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: Vv, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function Vv(t) {
  return t.text;
}
const ks = 10;
class Uv extends H {
  constructor() {
    super(...arguments), this.state = {
      titleId: st()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Be(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = ep(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: s } = this, i = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return Fg(m(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: i.join(" "), "aria-labelledby": s.titleId, ref: this.handleRootEl }),
      m(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        m("span", { className: "fc-popover-title", id: s.titleId }, r.title),
        m("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      m("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: s } = this, i = yv(n);
    if (i) {
      let a = s.getBoundingClientRect(), o = r ? $e(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top, l = e ? i.right - a.width : i.left;
      o = Math.max(o, ks), l = Math.min(l, document.documentElement.clientWidth - ks - a.width), l = Math.max(l, ks);
      let c = s.offsetParent.getBoundingClientRect();
      Xg(s, {
        top: o - c.top,
        left: l - c.left
      });
    }
  }
}
class Bv extends Oe {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: s, todayRange: i, dateProfile: a } = r, o = n.format(s, e.dayPopoverFormat);
    return m(na, { elRef: this.handleRootEl, date: s, dateProfile: a, todayRange: i }, (l, c, u) => m(
      Uv,
      { elRef: u.ref, id: r.id, title: o, extraClassNames: ["fc-more-popover"].concat(u.className || []), extraAttrs: u, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      ra(e) && m(l, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, s) {
    let { rootEl: i, props: a } = this;
    return e >= 0 && e < r && n >= 0 && n < s ? {
      dateProfile: a.dateProfile,
      dateSpan: Object.assign({ allDay: !a.forceTimed, range: {
        start: a.startDate,
        end: a.endDate
      } }, a.extraDateSpan),
      dayEl: i,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: s
      },
      layer: 1
    } : null;
  }
}
class gd extends H {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: st()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Be(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: s } = r.options, i = Po(n).start;
      function a(o) {
        let { def: l, instance: c, range: u } = o.eventRange;
        return {
          event: new Ce(r, l, c),
          start: r.dateEnv.toDate(u.start),
          end: r.dateEnv.toDate(u.end),
          isStart: o.isStart,
          isEnd: o.isEnd
        };
      }
      typeof s == "function" && (s = s({
        date: i,
        allDay: Boolean(n.allDayDate),
        allSegs: n.allSegs.map(a),
        hiddenSegs: n.hiddenSegs.map(a),
        jsEvent: e,
        view: r.viewApi
      })), !s || s === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof s == "string" && r.calendarApi.zoomTo(i, s);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return m(je.Consumer, null, (r) => {
      let { viewApi: s, options: i, calendarApi: a } = r, { moreLinkText: o } = i, { moreCnt: l } = e, c = Po(e), u = typeof o == "function" ? o.call(a, l) : `+${l} ${o}`, h = vn(i.moreLinkHint, [l], u), f = {
        num: l,
        shortText: `+${l}`,
        text: u,
        view: s
      };
      return m(
        U,
        null,
        Boolean(e.moreCnt) && m(re, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Ac(this.handleClick)), { title: h, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: f, generatorName: "moreLinkContent", customGenerator: i.moreLinkContent, defaultGenerator: e.defaultGenerator || Wv, classNameGenerator: i.moreLinkClassNames, didMount: i.moreLinkDidMount, willUnmount: i.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && m(Bv, { id: n.popoverId, startDate: c.start, endDate: c.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = $e(this.linkEl, ".fc-view-harness"));
  }
}
function Wv(t) {
  return t.text;
}
function Po(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: ee(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: pd(e),
    end: jv(e)
  };
}
function pd(t) {
  return t.reduce(zv).eventRange.range.start;
}
function zv(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function jv(t) {
  return t.reduce(Zv).eventRange.range.end;
}
function Zv(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
const qv = [], yd = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, vd = Object.assign(Object.assign({}, yd), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function Gv(t) {
  let e = t.length > 0 ? t[0].code : "en", n = qv.concat(t), r = {
    en: vd
  };
  for (let s of n)
    r[s.code] = s;
  return {
    map: r,
    defaultCode: e
  };
}
function bd(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? _d(t.code, [t.code], t) : Yv(t, e);
}
function Yv(t, e) {
  let n = [].concat(t || []), r = Qv(n, e) || vd;
  return _d(t, n, r);
}
function Qv(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let s = r.length; s > 0; s -= 1) {
      let i = r.slice(0, s).join("-");
      if (e[i])
        return e[i];
    }
  }
  return null;
}
function _d(t, e, n) {
  let r = Ui([yd, n], ["buttonText"]);
  delete r.code;
  let { week: s } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: s,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function Ze(t) {
  return {
    id: At(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Jv(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function s(i) {
    for (let a of i) {
      const o = a.name, l = n[o];
      l === void 0 ? (n[o] = a.id, s(a.deps), r = Xv(r, a)) : l !== a.id && console.warn(`Duplicate plugin '${o}'`);
    }
  }
  return t && s(t), s(e), r;
}
function Kv() {
  let t = [], e = [], n;
  return (r, s) => ((!n || !at(r, t) || !at(s, e)) && (n = Jv(r, s)), t = r, e = s, n);
}
function Xv(t, e) {
  return {
    premiumReleaseDate: eb(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function eb(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class dt extends Nn {
}
dt.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
dt.prototype.baseIconClass = "fc-icon";
dt.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
dt.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
dt.prototype.iconOverrideOption = "buttonIcons";
dt.prototype.iconOverrideCustomButtonOption = "icon";
dt.prototype.iconOverridePrefix = "fc-icon-";
function tb(t, e) {
  let n = {}, r;
  for (r in t)
    mi(r, n, t, e);
  for (r in e)
    mi(r, n, t, e);
  return n;
}
function mi(t, e, n, r) {
  if (e[t])
    return e[t];
  let s = nb(t, e, n, r);
  return s && (e[t] = s), s;
}
function nb(t, e, n, r) {
  let s = n[t], i = r[t], a = (u) => s && s[u] !== null ? s[u] : i && i[u] !== null ? i[u] : null, o = a("component"), l = a("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = mi(l, e, n, r);
  }
  return !o && c && (o = c.component), o ? {
    type: t,
    component: o,
    defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), s ? s.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), i ? i.rawOptions : {})
  } : null;
}
function Lo(t) {
  return Dt(t, rb);
}
function rb(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = Vo(e) : n && !(n.prototype instanceof H) && (n = Vo(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
  };
}
function Vo(t) {
  return (e) => m(je.Consumer, null, (n) => m(re, { elTag: "div", elClasses: Fc(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function sb(t, e, n, r) {
  let s = Lo(t), i = Lo(e.views), a = tb(s, i);
  return Dt(a, (o) => ib(o, i, e, n, r));
}
function ib(t, e, n, r, s) {
  let i = t.overrides.duration || t.defaults.duration || r.duration || n.duration, a = null, o = "", l = "", c = {};
  if (i && (a = ab(i), a)) {
    let f = si(a);
    o = f.unit, f.value === 1 && (l = o, c = e[o] ? e[o].rawOptions : {});
  }
  let u = (f) => {
    let d = f.buttonText || {}, g = t.defaults.buttonTextKey;
    return g != null && d[g] != null ? d[g] : d[t.type] != null ? d[t.type] : d[l] != null ? d[l] : null;
  }, h = (f) => {
    let d = f.buttonHints || {}, g = t.defaults.buttonTextKey;
    return g != null && d[g] != null ? d[g] : d[t.type] != null ? d[t.type] : d[l] != null ? d[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: a,
    durationUnit: o,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, c), t.overrides),
    buttonTextOverride: u(r) || u(n) || t.overrides.buttonText,
    buttonTextDefault: u(s) || t.defaults.buttonText || u(bn) || t.type,
    buttonTitleOverride: h(r) || h(n) || t.overrides.buttonHint,
    buttonTitleDefault: h(s) || t.defaults.buttonHint || h(bn)
  };
}
let Uo = {};
function ab(t) {
  let e = JSON.stringify(t), n = Uo[e];
  return n === void 0 && (n = $(t), Uo[e] = n), n;
}
function ob(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function lb(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function ub(t, e, n, r) {
  let s;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (s = r.buildPrev(t, n), s.isValid)
        return s;
      break;
    case "NEXT":
      if (s = r.buildNext(t, n), s.isValid)
        return s;
      break;
  }
  return t;
}
function cb(t, e, n) {
  let r = e ? e.activeRange : null;
  return Ed({}, yb(t, n), r, n);
}
function db(t, e, n, r) {
  let s = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ed(t, e.sources, s, r);
    case "REMOVE_EVENT_SOURCE":
      return hb(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Sd(t, s, r) : t;
    case "FETCH_EVENT_SOURCES":
      return sa(t, e.sourceIds ? Oc(e.sourceIds) : Td(t, r), s, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return pb(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function fb(t, e, n) {
  let r = e ? e.activeRange : null;
  return sa(t, Td(t, n), r, !0, n);
}
function wd(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ed(t, e, n, r) {
  let s = {};
  for (let i of e)
    s[i.sourceId] = i;
  return n && (s = Sd(s, n, r)), Object.assign(Object.assign({}, t), s);
}
function hb(t, e) {
  return Wt(t, (n) => n.sourceId !== e);
}
function Sd(t, e, n) {
  return sa(t, Wt(t, (r) => mb(r, e, n)), e, !1, n);
}
function mb(t, e, n) {
  return Dd(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function sa(t, e, n, r, s) {
  let i = {};
  for (let a in t) {
    let o = t[a];
    e[a] ? i[a] = gb(o, n, r, s) : i[a] = o;
  }
  return i;
}
function gb(t, e, n, r) {
  let { options: s, calendarApi: i } = r, a = r.pluginHooks.eventSourceDefs[t.sourceDefId], o = At();
  return a.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (l) => {
    let { rawEvents: c } = l;
    s.eventSourceSuccess && (c = s.eventSourceSuccess.call(i, c, l.response) || c), t.success && (c = t.success.call(i, c, l.response) || c), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      rawEvents: c
    });
  }, (l) => {
    let c = !1;
    s.eventSourceFailure && (s.eventSourceFailure.call(i, l), c = !0), t.failure && (t.failure(l), c = !0), c || console.warn(l.message, l), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: o,
      fetchRange: e,
      error: l
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: o });
}
function pb(t, e, n, r) {
  let s = t[e];
  return s && n === s.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, s), { isFetching: !1, fetchRange: r }) }) : t;
}
function Td(t, e) {
  return Wt(t, (n) => Dd(n, e));
}
function yb(t, e) {
  let n = zc(e), r = [].concat(t.eventSources || []), s = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let i of r) {
    let a = Wc(i, e, n);
    a && s.push(a);
  }
  return s;
}
function Dd(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function vb(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function bb(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function _b(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function wb(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Eb(t, e, n, r, s) {
  let i = t.headerToolbar ? Bo(t.headerToolbar, t, e, n, r, s) : null, a = t.footerToolbar ? Bo(t.footerToolbar, t, e, n, r, s) : null;
  return { header: i, footer: a };
}
function Bo(t, e, n, r, s, i) {
  let a = {}, o = [], l = !1;
  for (let c in t) {
    let u = t[c], h = Sb(u, e, n, r, s, i);
    a[c] = h.widgets, o.push(...h.viewsWithButtons), l = l || h.hasTitle;
  }
  return { sectionWidgets: a, viewsWithButtons: o, hasTitle: l };
}
function Sb(t, e, n, r, s, i) {
  let a = e.direction === "rtl", o = e.customButtons || {}, l = n.buttonText || {}, c = e.buttonText || {}, u = n.buttonHints || {}, h = e.buttonHints || {}, f = t ? t.split(" ") : [], d = [], g = !1;
  return { widgets: f.map((p) => p.split(",").map((b) => {
    if (b === "title")
      return g = !0, { buttonName: b };
    let E, A, C, B, O, P;
    if (E = o[b])
      C = (S) => {
        E.click && E.click.call(S.target, S, S.target);
      }, (B = r.getCustomButtonIconClass(E)) || (B = r.getIconClass(b, a)) || (O = E.text), P = E.hint || E.text;
    else if (A = s[b]) {
      d.push(b), C = () => {
        i.changeView(b);
      }, (O = A.buttonTextOverride) || (B = r.getIconClass(b, a)) || (O = A.buttonTextDefault);
      let S = A.buttonTextOverride || A.buttonTextDefault;
      P = vn(
        A.buttonTitleOverride || A.buttonTitleDefault || e.viewHint,
        [S, b],
        S
      );
    } else if (i[b])
      if (C = () => {
        i[b]();
      }, (O = l[b]) || (B = r.getIconClass(b, a)) || (O = c[b]), b === "prevYear" || b === "nextYear") {
        let S = b === "prevYear" ? "prev" : "next";
        P = vn(u[S] || h[S], [
          c.year || "year",
          "year"
        ], c[b]);
      } else
        P = (S) => vn(u[b] || h[b], [
          c[S] || S,
          S
        ], c[b]);
    return { buttonName: b, buttonClick: C, buttonIcon: B, buttonText: O, buttonHint: P };
  })), viewsWithButtons: d, hasTitle: g };
}
class Tb {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let Db = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const Cb = Ze({
  name: "array-event-source",
  eventSourceDefs: [Db]
});
let Ab = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, s = t.eventSource.meta;
    rv(s.bind(null, Jc(t.range, r)), (i) => e({ rawEvents: i }), n);
  }
};
const kb = Ze({
  name: "func-event-source",
  eventSourceDefs: [Ab]
}), xb = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let Rb = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, s = Mb(r, t.range, t.context);
    sv(r.method, r.url, s).then(([i, a]) => {
      e({ rawEvents: i, response: a });
    }, n);
  }
};
const Ob = Ze({
  name: "json-event-source",
  eventSourceRefiners: xb,
  eventSourceDefs: [Rb]
});
function Mb(t, e, n) {
  let { dateEnv: r, options: s } = n, i, a, o, l, c = {};
  return i = t.startParam, i == null && (i = s.startParam), a = t.endParam, a == null && (a = s.endParam), o = t.timeZoneParam, o == null && (o = s.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, Object.assign(c, l), c[i] = r.formatIso(e.start), c[a] = r.formatIso(e.end), r.timeZone !== "local" && (c[o] = r.timeZone), c;
}
const Ib = {
  daysOfWeek: y,
  startTime: $,
  endTime: $,
  duration: $,
  startRecur: y,
  endRecur: y
};
let Nb = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = dp(t.endTime, t.startTime)), {
        allDayGuess: Boolean(!t.startTime && !t.endTime),
        duration: r,
        typeData: n
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = lt(e, { start: t.startRecur, end: t.endRecur });
    return r ? Fb(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const $b = Ze({
  name: "simple-recurring-event",
  recurringTypes: [Nb],
  eventRefiners: Ib
});
function Fb(t, e, n, r) {
  let s = t ? Oc(t) : null, i = W(n.start), a = n.end, o = [];
  for (; i < a; ) {
    let l;
    (!s || s[i.getUTCDay()]) && (e ? l = r.add(i, e) : l = i, o.push(l)), i = ee(i, 1);
  }
  return o;
}
const Hb = Ze({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      Wo([t], e);
    },
    eventSources: Wo
  }
});
function Wo(t, e) {
  let n = Bi(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let s of t) {
    let i = !1;
    for (let a = 0; a < n.length; a += 1)
      if (n[a]._raw === s) {
        n.splice(a, 1), i = !0;
        break;
      }
    i || r.push(s);
  }
  for (let s of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: s.sourceId
    });
  for (let s of r)
    e.calendarApi.addEventSource(s);
}
function Pb(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, Jc(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Lb(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Yi(t, e));
}
const Vb = [
  Cb,
  kb,
  Ob,
  $b,
  Hb,
  Ze({
    name: "misc",
    isLoadingFuncs: [
      (t) => wd(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Pb,
      eventStore: Lb
    }
  })
];
class Ub {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new Hi(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Bb(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, z(e.titleFormat || Wb(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Wb(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Nr(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class zb {
  constructor(e) {
    this.computeCurrentViewData = T(this._computeCurrentViewData), this.organizeRawLocales = T(Gv), this.buildLocale = T(bd), this.buildPluginHooks = Kv(), this.buildDateEnv = T(jb), this.buildTheme = T(Zb), this.parseToolbars = T(Eb), this.buildViewSpecs = T(sb), this.buildDateProfileGenerator = vr(qb), this.buildViewApi = T(Gb), this.buildViewUiProps = vr(Jb), this.buildEventUiBySource = T(Yb, Ne), this.buildEventUiBases = T(Qb), this.parseContextBusinessHours = vr(Kb), this.buildTitle = T(Bb), this.emitter = new Ny(), this.actionRunner = new Ub(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (f) => {
      this.actionRunner.request(f);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), s = r.calendarOptions.initialView || r.pluginHooks.initialView, i = this.computeCurrentViewData(s, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);
    let a = gy(r.calendarOptions, r.dateEnv), o = i.dateProfileGenerator.build(a);
    Le(o.activeRange, a) || (a = o.currentRange.start);
    let l = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let f of r.pluginHooks.contextInit)
      f(l);
    let c = cb(r.calendarOptions, o, l), u = {
      dynamicOptionOverrides: n,
      currentViewType: s,
      currentDate: a,
      dateProfile: o,
      businessHours: this.parseContextBusinessHours(l),
      eventSources: c,
      eventUiBases: {},
      eventStore: We(),
      renderableEventStore: We(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(l).selectionConfig
    }, h = Object.assign(Object.assign({}, l), u);
    for (let f of r.pluginHooks.reducers)
      Object.assign(u, f(null, null, h));
    xs(u, l) && this.emitter.trigger("loading", !0), this.state = u, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: s } = this, i = lb(r.dynamicOptionOverrides, e), a = this.computeOptionsData(n.optionOverrides, i, n.calendarApi), o = ob(r.currentViewType, e), l = this.computeCurrentViewData(o, a, n.optionOverrides, i);
    n.calendarApi.currentDataManager = this, s.setThisContext(n.calendarApi), s.setOptions(l.options);
    let c = {
      dateEnv: a.dateEnv,
      options: a.calendarOptions,
      pluginHooks: a.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: s,
      getCurrentData: this.getCurrentData
    }, { currentDate: u, dateProfile: h } = r;
    this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (h = l.dateProfileGenerator.build(u)), u = my(u, e), h = ub(h, e, u, l.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !Le(h.currentRange, u)) && (u = h.currentRange.start);
    let f = db(r.eventSources, e, h, c), d = xy(r.eventStore, e, f, h, c), v = wd(f) && !l.options.progressiveEventRendering && r.renderableEventStore || d, { eventUiSingleBase: p, selectionConfig: b } = this.buildViewUiProps(c), E = this.buildEventUiBySource(f), A = this.buildEventUiBases(v.defs, p, E), C = {
      dynamicOptionOverrides: i,
      currentViewType: o,
      currentDate: u,
      dateProfile: h,
      eventSources: f,
      eventStore: d,
      renderableEventStore: v,
      selectionConfig: b,
      eventUiBases: A,
      businessHours: this.parseContextBusinessHours(c),
      dateSelection: vb(r.dateSelection, e),
      eventSelection: bb(r.eventSelection, e),
      eventDrag: _b(r.eventDrag, e),
      eventResize: wb(r.eventResize, e)
    }, B = Object.assign(Object.assign({}, c), C);
    for (let S of a.pluginHooks.reducers)
      Object.assign(C, S(r, e, B));
    let O = xs(r, c), P = xs(C, c);
    !O && P ? s.trigger("loading", !0) : O && !P && s.trigger("loading", !1), this.state = C, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, s = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), i = this.computeCurrentViewData(n.currentViewType, s, e.optionOverrides, n.dynamicOptionOverrides), a = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, i.options, s.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, s), i), n), o = s.pluginHooks.optionChangeHandlers, l = r && r.calendarOptions, c = s.calendarOptions;
    if (l && l !== c) {
      l.timeZone !== c.timeZone && (n.eventSources = a.eventSources = fb(a.eventSources, n.dateProfile, a), n.eventStore = a.eventStore = Mo(a.eventStore, r.dateEnv, a.dateEnv), n.renderableEventStore = a.renderableEventStore = Mo(a.renderableEventStore, r.dateEnv, a.dateEnv));
      for (let u in o)
        (this.optionsForHandling.indexOf(u) !== -1 || l[u] !== c[u]) && o[u](c[u], a);
    }
    this.optionsForHandling = [], e.onData && e.onData(a);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: s, pluginHooks: i, localeDefaults: a, availableLocaleData: o, extra: l } = this.processRawCalendarOptions(e, n);
    zo(l);
    let c = this.buildDateEnv(s.timeZone, s.locale, s.weekNumberCalculation, s.firstDay, s.weekText, i, o, s.defaultRangeSeparator), u = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, a), h = this.buildTheme(s, i), f = this.parseToolbars(s, this.stableOptionOverrides, h, u, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: s,
      pluginHooks: i,
      dateEnv: c,
      viewSpecs: u,
      theme: h,
      toolbarConfig: f,
      localeDefaults: a,
      availableRawLocales: o.map
    };
  }
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: s } = Es([
      bn,
      e,
      n
    ]), i = this.organizeRawLocales(r), a = i.map, o = this.buildLocale(s || i.defaultCode, a).options, l = this.buildPluginHooks(e.plugins || [], Vb), c = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Do), Co), Ao), l.listenerRefiners), l.optionRefiners), u = {}, h = Es([
      bn,
      o,
      e,
      n
    ]), f = {}, d = this.currentCalendarOptionsInput, g = this.currentCalendarOptionsRefined, v = !1;
    for (let p in h)
      this.optionsForRefining.indexOf(p) === -1 && (h[p] === d[p] || pt[p] && p in d && pt[p](d[p], h[p])) ? f[p] = g[p] : c[p] ? (f[p] = c[p](h[p]), v = !0) : u[p] = d[p];
    return v && (this.currentCalendarOptionsInput = h, this.currentCalendarOptionsRefined = f, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: l,
      availableLocaleData: i,
      localeDefaults: o,
      extra: u
    };
  }
  _computeCurrentViewData(e, n, r, s) {
    let i = n.viewSpecs[e];
    if (!i)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: a, extra: o } = this.processRawViewOptions(i, n.pluginHooks, n.localeDefaults, r, s);
    zo(o);
    let l = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
      duration: i.duration,
      durationUnit: i.durationUnit,
      usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: a.slotMinTime,
      slotMaxTime: a.slotMaxTime,
      showNonCurrentDates: a.showNonCurrentDates,
      dayCount: a.dayCount,
      dateAlignment: a.dateAlignment,
      dateIncrement: a.dateIncrement,
      hiddenDays: a.hiddenDays,
      weekends: a.weekends,
      nowInput: a.now,
      validRangeInput: a.validRange,
      visibleRangeInput: a.visibleRange,
      fixedWeekCount: a.fixedWeekCount
    }), c = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: i, options: a, dateProfileGenerator: l, viewApi: c };
  }
  processRawViewOptions(e, n, r, s, i) {
    let a = Es([
      bn,
      e.optionDefaults,
      r,
      s,
      e.optionOverrides,
      i
    ]), o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Do), Co), Ao), zp), n.listenerRefiners), n.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, h = !1, f = {};
    for (let d in a)
      a[d] === c[d] || pt[d] && pt[d](a[d], c[d]) ? l[d] = u[d] : (a[d] === this.currentCalendarOptionsInput[d] || pt[d] && pt[d](a[d], this.currentCalendarOptionsInput[d]) ? d in this.currentCalendarOptionsRefined && (l[d] = this.currentCalendarOptionsRefined[d]) : o[d] ? l[d] = o[d](a[d]) : f[d] = a[d], h = !0);
    return h && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }
}
function jb(t, e, n, r, s, i, a, o) {
  let l = bd(e || a.defaultCode, a.map);
  return new ey({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: i.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: s,
    cmdFormatter: i.cmdFormatter,
    defaultSeparator: o
  });
}
function Zb(t, e) {
  let n = e.themeClasses[t.themeSystem] || dt;
  return new n(t);
}
function qb(t) {
  let e = t.dateProfileGeneratorClass || Pc;
  return new e(t);
}
function Gb(t, e, n) {
  return new Tb(t, e, n);
}
function Yb(t) {
  return Dt(t, (e) => e.ui);
}
function Qb(t, e, n) {
  let r = { "": e };
  for (let s in t) {
    let i = t[s];
    i.sourceId && n[i.sourceId] && (r[s] = n[i.sourceId]);
  }
  return r;
}
function Jb(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Lr({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
    }, t),
    selectionConfig: Lr({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function xs(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function Kb(t) {
  return Py(t.options.businessHours, t);
}
function zo(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class Xb extends H {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return m("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, s = [], i = !0;
    for (let a of e) {
      let { buttonName: o, buttonClick: l, buttonText: c, buttonIcon: u, buttonHint: h } = a;
      if (o === "title")
        i = !1, s.push(m("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let f = o === n.activeButton, d = !n.isTodayEnabled && o === "today" || !n.isPrevEnabled && o === "prev" || !n.isNextEnabled && o === "next", g = [`fc-${o}-button`, r.getClass("button")];
        f && g.push(r.getClass("buttonActive")), s.push(m("button", { type: "button", title: typeof h == "function" ? h(n.navUnit) : h, disabled: d, "aria-pressed": f, className: g.join(" "), onClick: l }, c || (u ? m("span", { className: u }) : "")));
      }
    }
    if (s.length > 1) {
      let a = i && r.getClass("buttonGroup") || "";
      return m("div", { className: a }, ...s);
    }
    return s[0];
  }
}
class jo extends H {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, s, i, a = e.sectionWidgets, o = a.center;
    return a.left ? (r = !0, s = a.left) : s = a.start, a.right ? (r = !0, i = a.right) : i = a.end, m(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", s || []),
      this.renderSection("center", o || []),
      this.renderSection("end", i || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return m(Xb, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class e_ extends H {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, Be(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, s = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], i = "", a = "";
    return r ? n.availableWidth !== null ? i = n.availableWidth / r : a = `${1 / r * 100}%` : i = e.height || "", m("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: s.join(" "), style: { height: i, paddingBottom: a } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class t_ extends ed {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: s } = this, { context: i } = s, a = ci(r);
      if (a && s.isValidSegDownEl(n.target)) {
        let o = $e(n.target, ".fc-event-forced-url"), l = o ? o.querySelector("a[href]").href : "";
        i.emitter.trigger("eventClick", {
          el: r,
          event: new Ce(s.context, a.eventRange.def, a.eventRange.instance),
          jsEvent: n,
          view: i.viewApi
        }), l && !n.defaultPrevented && (window.location.href = l);
      }
    }, this.destroy = Cc(
      e.el,
      "click",
      ".fc-event",
      this.handleSegClick
    );
  }
}
class n_ extends ed {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      ci(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = np(
      e.el,
      ".fc-event",
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: s } = this, { context: i } = s, a = ci(r);
    (!n || s.isValidSegDownEl(n.target)) && i.emitter.trigger(e, {
      el: r,
      event: new Ce(i, a.eventRange.def, a.eventRange.instance),
      jsEvent: n,
      view: i.viewApi
    });
  }
}
class r_ extends kt {
  constructor() {
    super(...arguments), this.buildViewContext = T(ry), this.buildViewPropTransformers = T(i_), this.buildToolbarProps = T(s_), this.headerRef = ae(), this.footerRef = ae(), this.interactionsStore = {}, this.state = {
      viewLabelId: st()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = ov(e, n), a = [
        t_,
        n_
      ].concat(this.props.pluginHooks.componentInteractions).map((o) => new o(r));
      this.interactionsStore[e.uid] = a, Fo[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Fo[e.uid];
    }, this.resizeRunner = new Hi(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, s = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      $n(e.options.now, e.dateEnv),
      e.viewTitle
    ), i = !1, a = "", o;
    e.isHeightAuto || e.forPrint ? a = "" : r.height != null ? i = !0 : r.contentHeight != null ? a = r.contentHeight : o = Math.max(r.aspectRatio, 0.5);
    let l = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), c = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return m(
      je.Provider,
      { value: l },
      n.header && m(jo, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: c }, s)),
      m(
        e_,
        { liquid: i, height: a, aspectRatio: o, labeledById: c },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && m(jo, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, s))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let s in r)
      n[s] !== e[s] && r[s](n[s], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return m(U, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, s = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, i = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let o of i)
      Object.assign(s, o.transform(s, e));
    let a = r.component;
    return m(a, Object.assign({}, s));
  }
}
function s_(t, e, n, r, s, i) {
  let a = n.build(s, void 0, !1), o = n.buildPrev(e, r, !1), l = n.buildNext(e, r, !1);
  return {
    title: i,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: a.isValid && !Le(e.currentRange, s),
    isPrevEnabled: o.isValid,
    isNextEnabled: l.isValid
  };
}
function i_(t) {
  return t.map((e) => new e());
}
class a_ extends lv {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        ko(() => {
          Dn(m(av, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (s, i, a, o) => (this.setClassNames(s), this.setHeight(i), m(
            $c.Provider,
            { value: this.customContentRenderId },
            m(r_, Object.assign({ isHeightAuto: a, forPrint: o }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, Dn(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, zg(e), this.el = e, this.renderRunner = new Hi(this.handleRenderRequest), new zb({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    ko(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!at(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    Dc(this.el, "height", e);
  }
}
var o_ = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
ts(o_);
function nr(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function rr(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Zo(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const Cd = z({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Ad(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
}
class kd extends H {
  render() {
    let { props: e } = this;
    return m(dd, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Cd, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class xd extends H {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, i = r.eventTimeFormat || Cd, a = _n(s, i, n, !0, e.defaultDisplayEventEnd);
    return m(rs, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Ji(e.seg, n), defaultGenerator: l_, timeText: a, isResizing: !1, isDateSelecting: !1 }));
  }
}
function l_(t) {
  return m(
    U,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m("div", { className: "fc-event-title" }, t.event.title || m(U, null, " "))
  );
}
class u_ extends H {
  constructor() {
    super(...arguments), this.compileSegs = T(c_);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return m(gd, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let s = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return m(U, null, n.map((i) => {
        let a = i.eventRange.instance.instanceId;
        return m("div", { className: "fc-daygrid-event-harness", key: a, style: {
          visibility: s[a] ? "hidden" : ""
        } }, Ad(i) ? m(xd, Object.assign({ seg: i, isDragging: !1, isSelected: a === e.eventSelection, defaultDisplayEventEnd: !1 }, Ve(i, e.todayRange))) : m(kd, Object.assign({ seg: i, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: a === e.eventSelection, defaultDisplayEventEnd: !1 }, Ve(i, e.todayRange))));
      }));
    } });
  }
}
function c_(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const d_ = z({ week: "narrow" });
class f_ extends Oe {
  constructor() {
    super(...arguments), this.rootElRef = ae(), this.state = {
      dayNumberId: st()
    }, this.handleRootEl = (e) => {
      Be(this.rootElRef, e), Be(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: s } = this, { options: i, dateEnv: a } = e, { date: o, dateProfile: l } = n;
    const c = n.showDayNumber && m_(o, l.currentRange, a);
    return m(na, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: h_, date: o, dateProfile: l, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: c, extraRenderProps: n.extraRenderProps }, (u, h) => m(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && m(md, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: zt(e, o, "week"), date: o, defaultFormat: d_ }),
      !h.isDisabled && (n.showDayNumber || ra(i) || n.forceDayTop) ? m(
        "div",
        { className: "fc-daygrid-day-top" },
        m(u, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          c && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, zt(e, o)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? m(
        "div",
        { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
        m("a", { className: "fc-daygrid-day-number" }, " ")
      ) : void 0,
      m(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        m(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          m(u_, { allDayDate: o, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: s, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      m("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function h_(t) {
  return t.dayNumberText || m(U, null, " ");
}
function m_(t, e, n) {
  const { start: r, end: s } = e, i = ot(s, -1), a = n.getYear(r), o = n.getMonth(r), l = n.getYear(i), c = n.getMonth(i);
  return !(a === l && o === c) && Boolean(
    t.valueOf() === r.valueOf() || n.getDay(t) === 1 && t.valueOf() < s.valueOf()
  );
}
function Rd(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function Od(t) {
  return Rd(t) + ":" + t.lastCol;
}
function g_(t, e, n, r, s, i, a) {
  let o = new v_((b) => {
    let E = t[b.index].eventRange.instance.instanceId + ":" + b.span.start + ":" + (b.span.end - 1);
    return s[E];
  });
  o.allowReslicing = !0, o.strictOrder = r, e === !0 || n === !0 ? (o.maxCoord = i, o.hiddenConsumes = !0) : typeof e == "number" ? o.maxStackCnt = e : typeof n == "number" && (o.maxStackCnt = n, o.hiddenConsumes = !0);
  let l = [], c = [];
  for (let b = 0; b < t.length; b += 1) {
    let E = t[b], A = Od(E);
    s[A] != null ? l.push({
      index: b,
      span: {
        start: E.firstCol,
        end: E.lastCol + 1
      }
    }) : c.push(E);
  }
  let u = o.addSegs(l), h = o.toRects(), { singleColPlacements: f, multiColPlacements: d, leftoverMargins: g } = p_(h, t, a), v = [], p = [];
  for (let b of c) {
    d[b.firstCol].push({
      seg: b,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let E = b.firstCol; E <= b.lastCol; E += 1)
      f[E].push({
        seg: Pt(b, E, E + 1, a),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let b = 0; b < a.length; b += 1)
    v.push(0);
  for (let b of u) {
    let E = t[b.index], A = b.span;
    d[A.start].push({
      seg: Pt(E, A.start, A.end, a),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let C = A.start; C < A.end; C += 1)
      v[C] += 1, f[C].push({
        seg: Pt(E, C, C + 1, a),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let b = 0; b < a.length; b += 1)
    p.push(g[b]);
  return { singleColPlacements: f, multiColPlacements: d, moreCnts: v, moreMarginTops: p };
}
function p_(t, e, n) {
  let r = y_(t, n.length), s = [], i = [], a = [];
  for (let o = 0; o < n.length; o += 1) {
    let l = r[o], c = [], u = 0, h = 0;
    for (let d of l) {
      let g = e[d.index];
      c.push({
        seg: Pt(g, o, o + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: d.levelCoord,
        marginTop: d.levelCoord - u
      }), u = d.levelCoord + d.thickness;
    }
    let f = [];
    u = 0, h = 0;
    for (let d of l) {
      let g = e[d.index], v = d.span.end - d.span.start > 1, p = d.span.start === o;
      h += d.levelCoord - u, u = d.levelCoord + d.thickness, v ? (h += d.thickness, p && f.push({
        seg: Pt(g, d.span.start, d.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: d.levelCoord,
        marginTop: 0
      })) : p && (f.push({
        seg: Pt(g, d.span.start, d.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: d.levelCoord,
        marginTop: h
      }), h = 0);
    }
    s.push(c), i.push(f), a.push(h);
  }
  return { singleColPlacements: s, multiColPlacements: i, leftoverMargins: a };
}
function y_(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let s = r.span.start; s < r.span.end; s += 1)
      n[s].push(r);
  return n;
}
function Pt(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let s = t.eventRange, i = s.range, a = lt(i, {
    start: r[e].date,
    end: ee(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: s.def,
    ui: Object.assign(Object.assign({}, s.ui), { durationEditable: !1 }),
    instance: s.instance,
    range: a
  }, isStart: t.isStart && a.start.valueOf() === i.start.valueOf(), isEnd: t.isEnd && a.end.valueOf() === i.end.valueOf() });
}
class v_ extends td {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, s = (i) => !this.forceHidden[St(i)];
    for (let i = 0; i < r.length; i += 1)
      r[i] = r[i].filter(s);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: s, forceHidden: i } = this, { touchingEntry: a, touchingLevel: o, touchingLateral: l } = e;
    if (this.hiddenConsumes && a) {
      const c = St(a);
      if (!i[c])
        if (this.allowReslicing) {
          const u = Object.assign(Object.assign({}, a), { span: Xi(a.span, n.span) }), h = St(u);
          i[h] = !0, s[o][l] = u, this.splitEntry(a, n, r);
        } else
          i[c] = !0, r.push(a);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class Md extends Oe {
  constructor() {
    super(...arguments), this.cellElRefs = new He(), this.frameElRefs = new He(), this.fgElRefs = new He(), this.segHarnessRefs = new He(), this.rootElRef = ae(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: s } = r, i = e.cells.length, a = rr(e.businessHourSegs, i), o = rr(e.bgEventSegs, i), l = rr(this.getHighlightSegs(), i), c = rr(this.getMirrorSegs(), i), { singleColPlacements: u, multiColPlacements: h, moreCnts: f, moreMarginTops: d } = g_(Qi(e.fgEventSegs, s.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, s.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), g = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
    return m(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((v, p) => {
        let b = this.renderFgSegs(p, e.forPrint ? u[p] : h[p], e.todayRange, g), E = this.renderFgSegs(p, b_(c[p], h), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);
        return m(f_, { key: v.key, elRef: this.cellElRefs.createRef(v.key), innerElRef: this.frameElRefs.createRef(v.key), dateProfile: e.dateProfile, date: v.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && p === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: v.extraRenderProps, extraDataAttrs: v.extraDataAttrs, extraClassNames: v.extraClassNames, extraDateSpan: v.extraDateSpan, moreCnt: f[p], moreMarginTop: d[p], singlePlacements: u[p], fgContentElRef: this.fgElRefs.createRef(v.key), fgContent: m(
          U,
          null,
          m(U, null, b),
          m(U, null, E)
        ), bgContent: m(
          U,
          null,
          this.renderFillSegs(l[p], "highlight"),
          this.renderFillSegs(a[p], "non-business"),
          this.renderFillSegs(o[p], "bg-event")
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!Ne(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, s, i, a, o) {
    let { context: l } = this, { eventSelection: c } = this.props, { framePositions: u } = this.state, h = this.props.cells.length === 1, f = i || a || o, d = [];
    if (u)
      for (let g of n) {
        let { seg: v } = g, { instanceId: p } = v.eventRange.instance, b = g.isVisible && !s[p], E = g.isAbsolute, A = "", C = "";
        E && (l.isRtl ? (C = 0, A = u.lefts[v.lastCol] - u.lefts[v.firstCol]) : (A = 0, C = u.rights[v.firstCol] - u.rights[v.lastCol])), d.push(m("div", { className: "fc-daygrid-event-harness" + (E ? " fc-daygrid-event-harness-abs" : ""), key: Rd(v), ref: f ? null : this.segHarnessRefs.createRef(Od(v)), style: {
          visibility: b ? "" : "hidden",
          marginTop: E ? "" : g.marginTop,
          top: E ? g.absoluteTop : "",
          left: A,
          right: C
        } }, Ad(v) ? m(xd, Object.assign({ seg: v, isDragging: i, isSelected: p === c, defaultDisplayEventEnd: h }, Ve(v, r))) : m(kd, Object.assign({ seg: v, isDragging: i, isResizing: a, isDateSelecting: o, isSelected: p === c, defaultDisplayEventEnd: h }, Ve(v, r)))));
      }
    return d;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: s } = this.props, { framePositions: i } = this.state, a = [];
    if (i)
      for (let o of e) {
        let l = r ? {
          right: 0,
          left: i.lefts[o.lastCol] - i.lefts[o.firstCol]
        } : {
          left: 0,
          right: i.rights[o.firstCol] - i.rights[o.lastCol]
        };
        a.push(m("div", { key: Qc(o.eventRange), className: "fc-daygrid-bg-harness", style: l }, n === "bg-event" ? m(fd, Object.assign({ seg: o }, Ve(o, s))) : hd(n)));
      }
    return m(U, {}, ...a);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: s } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let l = n.cells.map((c) => s.currentMap[c.key]);
        if (l.length) {
          let c = this.rootElRef.current, u = new jt(
            c,
            l,
            !0,
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(u)) && this.setState({
            framePositions: new jt(
              c,
              l,
              !0,
              !1
            )
          });
        }
      }
      const i = this.state.segHeights, a = this.querySegHeights(), o = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        segHeights: Object.assign(Object.assign({}, i), a),
        maxContentHeight: o ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let s = Math.round(e[r].getBoundingClientRect().height);
      n[r] = Math.max(n[r] || 0, s);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
Md.addStateEquality({
  segHeights: Ne
});
function b_(t, e) {
  if (!t.length)
    return [];
  let n = __(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function __(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class w_ extends Oe {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = T(nr), this.splitBgEventSegs = T(nr), this.splitFgEventSegs = T(nr), this.splitDateSelectionSegs = T(nr), this.splitEventDrag = T(Zo), this.splitEventResize = T(Zo), this.rowRefs = new He();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, s = this.splitBusinessHourSegs(e.businessHourSegs, r), i = this.splitBgEventSegs(e.bgEventSegs, r), a = this.splitFgEventSegs(e.fgEventSegs, r), o = this.splitDateSelectionSegs(e.dateSelectionSegs, r), l = this.splitEventDrag(e.eventDrag, r), c = this.splitEventResize(e.eventResize, r), u = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return m(Kt, { unit: "day" }, (h, f) => m(U, null, e.cells.map((d, g) => m(Md, {
      ref: this.rowRefs.createRef(g),
      key: d.length ? d[0].date.toISOString() : g,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: f,
      dateProfile: e.dateProfile,
      cells: d,
      renderIntro: e.renderRowIntro,
      businessHourSegs: s[g],
      eventSelection: e.eventSelection,
      bgEventSegs: i[g].filter(E_),
      fgEventSegs: a[g],
      dateSelectionSegs: o[g],
      eventDrag: l[g],
      eventResize: c[g],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: u,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const e = this.rowRefs.currentMap[0].getCellEls()[0], n = e ? e.closest(".fc-daygrid-body") : null;
      n && (this.rootEl = n, this.context.registerInteractiveComponent(this, {
        el: n,
        isHitComboAllowed: this.props.isHitComboAllowed
      }));
    }
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  prepareHits() {
    this.rowPositions = new jt(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      !1,
      !0
    ), this.colPositions = new jt(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: s } = this, i = r.leftToIndex(e), a = s.topToIndex(n);
    if (a != null && i != null) {
      let o = this.props.cells[a][i];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(a, i), allDay: !0 }, o.extraDateSpan),
        dayEl: this.getCellEl(a, i),
        rect: {
          left: r.lefts[i],
          right: r.rights[i],
          top: s.tops[a],
          bottom: s.bottoms[a]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, s = ee(r, 1);
    return { start: r, end: s };
  }
}
function E_(t) {
  return t.eventRange.def.allDay;
}
class S_ extends Oe {
  constructor() {
    super(...arguments), this.elRef = ae(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: s } = e, i = r === !0 || n === !0;
    i && !s && (i = !1, n = null, r = null);
    let a = [
      "fc-daygrid-body",
      i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      s ? "" : "fc-daygrid-body-natural"
    ];
    return m(
      "div",
      { ref: this.elRef, className: a.join(" "), style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      m(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: s ? e.clientHeight : ""
        } },
        e.colGroupNode,
        m(
          "tbody",
          { role: "presentation" },
          m(w_, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = T_(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), s = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = s ? s + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function T_(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${Ap(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${In(e.currentDate)}"]`)), n;
}
class D_ extends od {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Id extends Oe {
  constructor() {
    super(...arguments), this.slicer = new D_(), this.tableRef = ae();
  }
  render() {
    let { props: e, context: n } = this;
    return m(S_, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class C_ extends Pc {
  buildRenderRange(e, n, r) {
    let s = super.buildRenderRange(e, n, r), { props: i } = this;
    return A_({
      currentRange: s,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: i.fixedWeekCount,
      dateEnv: i.dateEnv
    });
  }
}
function A_(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: s } = n, i;
  if (t.snapToWeek && (r = e.startOfWeek(r), i = e.startOfWeek(s), i.valueOf() !== s.valueOf() && (s = bo(i, 1))), t.fixedWeekCount) {
    let a = e.startOfWeek(e.startOfMonth(ee(n.end, -1))), o = Math.ceil(
      pp(a, s)
    );
    s = bo(s, 6 - o);
  }
  return { start: r, end: s };
}
class k_ extends Oe {
  constructor() {
    super(...arguments), this.headerElRef = ae();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: s } = this, i = [], a = Vr(s.options);
    return e && i.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), i.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), m(
      Cn,
      { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
      m(ea, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: i })
    );
  }
  renderHScrollLayout(e, n, r, s) {
    let i = this.context.pluginHooks.scrollGridImpl;
    if (!i)
      throw new Error("No ScrollGrid implementation");
    let { props: a, context: o } = this, l = !a.forPrint && Vr(o.options), c = !a.forPrint && cd(o.options), u = [];
    return e && u.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), u.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), c && u.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: hi
      }]
    }), m(
      Cn,
      { elClasses: ["fc-daygrid"], viewSpec: o.viewSpec },
      m(i, { liquid: !a.isHeightAuto && !a.forPrint, forPrint: a.forPrint, collapsibleWidth: a.forPrint, colGroups: [{ cols: [{ span: r, minWidth: s }] }], sections: u })
    );
  }
}
class x_ extends k_ {
  constructor() {
    super(...arguments), this.buildDayTableModel = T(R_), this.headerRef = ae(), this.tableRef = ae();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, s = this.buildDayTableModel(r.dateProfile, n), i = e.dayHeaders && m(sd, { ref: this.headerRef, dateProfile: r.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), a = (o) => m(Id, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: s, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: o.tableColGroupNode, tableMinWidth: o.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: o.clientWidth, clientHeight: o.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(i, a, s.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, a);
  }
}
function R_(t, e) {
  let n = new id(t.renderRange, e);
  return new ad(n, /year|month|week/.test(t.currentRangeUnit));
}
var O_ = Ze({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: x_,
      dateProfileGeneratorClass: C_
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
}), M_ = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
ts(M_);
class I_ extends cv {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ["allDay"] : ["timed"];
  }
  getKeysForEventDef(e) {
    return e.allDay ? Zy(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const N_ = z({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function Nd(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return m(je.Consumer, null, (n) => {
    if (!t.isLabeled)
      return m("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: s, viewApi: i } = n, a = s.slotLabelFormat == null ? N_ : Array.isArray(s.slotLabelFormat) ? z(s.slotLabelFormat[0]) : z(s.slotLabelFormat), o = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: i,
      text: r.format(t.date, a)
    };
    return m(re, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: o, generatorName: "slotLabelContent", customGenerator: s.slotLabelContent, defaultGenerator: $_, classNameGenerator: s.slotLabelClassNames, didMount: s.slotLabelDidMount, willUnmount: s.slotLabelWillUnmount }, (l) => m(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      m(l, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function $_(t) {
  return t.text;
}
class F_ extends H {
  render() {
    return this.props.slatMetas.map((e) => m(
      "tr",
      { key: e.key },
      m(Nd, Object.assign({}, e))
    ));
  }
}
const H_ = z({ week: "short" }), P_ = 5;
class L_ extends Oe {
  constructor() {
    super(...arguments), this.allDaySplitter = new I_(), this.headerElRef = ae(), this.rootElRef = ae(), this.scrollerElRef = ae(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: s } = this.props, i = s.renderRange, o = ct(i.start, i.end) === 1 ? zt(this.context, i.start, "week") : {};
      return r.weekNumbers && e === "day" ? m(md, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: i.start, defaultFormat: H_ }, (l) => m(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        m(l, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: o })
      )) : m(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        m("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, s = {
        text: n.allDayText,
        view: r
      };
      return m(re, { elTag: "td", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, renderProps: s, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: V_, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (i) => m(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          e == null ? " fc-timegrid-axis-frame-liquid" : ""
        ].join(" "), style: { height: e } },
        m(i, { elTag: "span", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ] })
      ));
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e });
    };
  }
  renderSimpleLayout(e, n, r) {
    let { context: s, props: i } = this, a = [], o = Vr(s.options);
    return e && a.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), n && (a.push({
      type: "body",
      key: "all-day",
      chunk: { content: n }
    }), a.push({
      type: "body",
      key: "all-day-divider",
      outerContent: m(
        "tr",
        { role: "presentation", className: "fc-scrollgrid-section" },
        m("td", { className: "fc-timegrid-divider " + s.theme.getClass("tableCellShaded") })
      )
    })), a.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: Boolean(s.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: r
      }
    }), m(
      Cn,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: s.viewSpec },
      m(ea, { liquid: !i.isHeightAuto && !i.forPrint, collapsibleWidth: i.forPrint, cols: [{ width: "shrink" }], sections: a })
    );
  }
  renderHScrollLayout(e, n, r, s, i, a, o) {
    let l = this.context.pluginHooks.scrollGridImpl;
    if (!l)
      throw new Error("No ScrollGrid implementation");
    let { context: c, props: u } = this, h = !u.forPrint && Vr(c.options), f = !u.forPrint && cd(c.options), d = [];
    e && d.push({
      type: "header",
      key: "header",
      isSticky: h,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => m("tr", { role: "presentation" }, this.renderHeadAxis("day", v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (d.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => m("tr", { role: "presentation" }, this.renderTableRowAxis(v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), d.push({
      key: "all-day-divider",
      type: "body",
      outerContent: m(
        "tr",
        { role: "presentation", className: "fc-scrollgrid-section" },
        m("td", { colSpan: 2, className: "fc-timegrid-divider " + c.theme.getClass("tableCellShaded") })
      )
    }));
    let g = c.options.nowIndicator;
    return d.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: Boolean(c.options.expandRows),
      chunks: [
        {
          key: "axis",
          content: (v) => m(
            "div",
            { className: "fc-timegrid-axis-chunk" },
            m(
              "table",
              { "aria-hidden": !0, style: { height: v.expandRows ? v.clientHeight : "" } },
              v.tableColGroupNode,
              m(
                "tbody",
                null,
                m(F_, { slatMetas: a })
              )
            ),
            m(
              "div",
              { className: "fc-timegrid-now-indicator-container" },
              m(Kt, { unit: g ? "minute" : "day" }, (p) => {
                let b = g && o && o.safeComputeTop(p);
                return typeof b == "number" ? m(ta, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: b }, isAxis: !0, date: p }) : null;
              })
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      ]
    }), f && d.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: hi
        },
        {
          key: "cols",
          content: hi
        }
      ]
    }), m(
      Cn,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: c.viewSpec },
      m(l, { liquid: !u.isHeightAuto && !u.forPrint, forPrint: u.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: s, minWidth: i }] }
      ], sections: d })
    );
  }
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = P_), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function V_(t) {
  return t.text;
}
class U_ {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (Le(n.currentRange, e)) {
      let r = W(e), s = e.valueOf() - r.valueOf();
      if (s >= De(n.slotMinTime) && s < De(n.slotMaxTime))
        return this.computeTimeTop($(s));
    }
    return null;
  }
  computeDateTop(e, n) {
    return n || (n = W(e)), this.computeTimeTop($(e.valueOf() - n.valueOf()));
  }
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, s = n.els.length, i = (e.milliseconds - De(r.slotMinTime)) / De(this.slotDuration), a, o;
    return i = Math.max(0, i), i = Math.min(s, i), a = Math.floor(i), a = Math.min(a, s - 1), o = i - a, n.tops[a] + n.getHeight(a) * o;
  }
}
class B_ extends H {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: s } = e;
    return m("tbody", null, e.slatMetas.map((i, a) => {
      let o = {
        time: i.time,
        date: n.dateEnv.toDate(i.date),
        view: n.viewApi
      };
      return m(
        "tr",
        { key: i.key, ref: s.createRef(i.key) },
        e.axis && m(Nd, Object.assign({}, i)),
        m(re, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !i.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": i.isoTimeStr
        }, renderProps: o, generatorName: "slotLaneContent", customGenerator: r.slotLaneContent, classNameGenerator: r.slotLaneClassNames, didMount: r.slotLaneDidMount, willUnmount: r.slotLaneWillUnmount })
      );
    }));
  }
}
class W_ extends H {
  constructor() {
    super(...arguments), this.rootElRef = ae(), this.slatElRefs = new He();
  }
  render() {
    let { props: e, context: n } = this;
    return m(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      m(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        m(B_, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    );
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null);
  }
  updateSizing() {
    let { context: e, props: n } = this;
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new U_(new jt(this.rootElRef.current, z_(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function z_(t, e) {
  return e.map((n) => t[n.key]);
}
function on(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function qo(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.col].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
class j_ extends H {
  render() {
    let { props: e } = this;
    return m(gd, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => Fd(e.hiddenSegs, e), defaultGenerator: Z_, forceTimed: !0 }, (n) => m(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function Z_(t) {
  return t.shortText;
}
function q_(t, e, n) {
  let r = new td();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let s = r.addSegs(t), i = bv(s), a = G_(r);
  return a = K_(a, 1), { segRects: X_(a), hiddenGroups: i };
}
function G_(t) {
  const { entriesByLevel: e } = t, n = ia((r, s) => r + ":" + s, (r, s) => {
    let i = J_(t, r, s), a = Go(i, n), o = e[r][s];
    return [
      Object.assign(Object.assign({}, o), { nextLevelNodes: a[0] }),
      o.thickness + a[1]
    ];
  });
  return Go(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function Go(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: s } = t, i = r, a = [];
  for (; i < s; )
    a.push(e(n, i)), i += 1;
  return a.sort(Y_), [
    a.map(Q_),
    a[0][1]
  ];
}
function Y_(t, e) {
  return e[1] - t[1];
}
function Q_(t) {
  return t[0];
}
function J_(t, e, n) {
  let { levelCoords: r, entriesByLevel: s } = t, i = s[e][n], a = r[e] + i.thickness, o = r.length, l = e;
  for (; l < o && r[l] < a; l += 1)
    ;
  for (; l < o; l += 1) {
    let c = s[l], u, h = fi(c, i.span.start, di), f = h[0] + h[1], d = f;
    for (; (u = c[d]) && u.span.start < i.span.end; )
      d += 1;
    if (f < d)
      return { level: l, lateralStart: f, lateralEnd: d };
  }
  return null;
}
function K_(t, e) {
  const n = ia((r, s, i) => St(r), (r, s, i) => {
    let { nextLevelNodes: a, thickness: o } = r, l = o + i, c = o / l, u, h = [];
    if (!a.length)
      u = e;
    else
      for (let d of a)
        if (u === void 0) {
          let g = n(d, s, l);
          u = g[0], h.push(g[1]);
        } else {
          let g = n(d, u, 0);
          h.push(g[1]);
        }
    let f = (u - s) * c;
    return [u - f, Object.assign(Object.assign({}, r), { thickness: f, nextLevelNodes: h })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function X_(t) {
  let e = [];
  const n = ia((s, i, a) => St(s), (s, i, a) => {
    let o = Object.assign(Object.assign({}, s), {
      levelCoord: i,
      stackDepth: a,
      stackForward: 0
    });
    return e.push(o), o.stackForward = r(s.nextLevelNodes, i + s.thickness, a + 1) + 1;
  });
  function r(s, i, a) {
    let o = 0;
    for (let l of s)
      o = Math.max(n(l, i, a), o);
    return o;
  }
  return r(t, 0, 0), e;
}
function ia(t, e) {
  const n = {};
  return (...r) => {
    let s = t(...r);
    return s in n ? n[s] : n[s] = e(...r);
  };
}
function Yo(t, e, n = null, r = 0) {
  let s = [];
  if (n)
    for (let i = 0; i < t.length; i += 1) {
      let a = t[i], o = n.computeDateTop(a.start, e), l = Math.max(
        o + (r || 0),
        n.computeDateTop(a.end, e)
      );
      s.push({
        start: Math.round(o),
        end: Math.round(l)
      });
    }
  return s;
}
function ew(t, e, n, r) {
  let s = [], i = [];
  for (let c = 0; c < t.length; c += 1) {
    let u = e[c];
    u ? s.push({
      index: c,
      thickness: 1,
      span: u
    }) : i.push(t[c]);
  }
  let { segRects: a, hiddenGroups: o } = q_(s, n, r), l = [];
  for (let c of a)
    l.push({
      seg: t[c.index],
      rect: c
    });
  for (let c of i)
    l.push({ seg: c, rect: null });
  return { segPlacements: l, hiddenGroups: o };
}
const tw = z({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class $d extends H {
  render() {
    return m(dd, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: tw }));
  }
}
class nw extends H {
  constructor() {
    super(...arguments), this.sortEventSegs = T(Qi);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, s = r.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || s && e.dateSelectionSegs || [], a = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, o = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
    return m(na, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (l) => m(
      "div",
      { className: "fc-timegrid-col-frame" },
      m(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      m("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(o, a, !1, !1, !1)),
      m("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(s), "mirror")),
      m("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      ra(r) && m(l, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, s, i, a) {
    let { props: o } = this;
    return o.forPrint ? Fd(e, o) : this.renderPositionedFgSegs(e, n, r, s, i, a);
  }
  renderPositionedFgSegs(e, n, r, s, i, a) {
    let { eventMaxStack: o, eventShortHeight: l, eventOrderStrict: c, eventMinHeight: u } = this.context.options, { date: h, slatCoords: f, eventSelection: d, todayRange: g, nowDate: v } = this.props, p = r || s || i, b = Yo(e, h, f, u), { segPlacements: E, hiddenGroups: A } = ew(e, b, c, o);
    return m(
      U,
      null,
      this.renderHiddenGroups(A, e),
      E.map((C) => {
        let { seg: B, rect: O } = C, P = B.eventRange.instance.instanceId, S = p || Boolean(!n[P] && O), te = Rs(O && O.span), ph = !p && O ? this.computeSegHStyle(O) : { left: 0, right: 0 }, yh = Boolean(O) && O.stackForward > 0, vh = Boolean(O) && O.span.end - O.span.start < l;
        return m(
          "div",
          { className: "fc-timegrid-event-harness" + (yh ? " fc-timegrid-event-harness-inset" : ""), key: a || P, style: Object.assign(Object.assign({ visibility: S ? "" : "hidden" }, te), ph) },
          m($d, Object.assign({ seg: B, isDragging: r, isResizing: s, isDateSelecting: i, isSelected: P === d, isShort: vh }, Ve(B, g, v)))
        );
      })
    );
  }
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: s, todayRange: i, nowDate: a, eventSelection: o, eventDrag: l, eventResize: c } = this.props;
    return m(U, null, e.map((u) => {
      let h = Rs(u.span), f = rw(u.entries, n);
      return m(j_, { key: Rc(pd(f)), hiddenSegs: f, top: h.top, bottom: h.bottom, extraDateSpan: r, dateProfile: s, todayRange: i, nowDate: a, eventSelection: o, eventDrag: l, eventResize: c });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: s } = this, a = Yo(e, r.date, r.slatCoords, s.options.eventMinHeight).map((o, l) => {
      let c = e[l];
      return m("div", { key: Qc(c.eventRange), className: "fc-timegrid-bg-harness", style: Rs(o) }, n === "bg-event" ? m(fd, Object.assign({ seg: c }, Ve(c, r.todayRange, r.nowDate))) : hd(n));
    });
    return m(U, null, a);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((s, i) => m(
      ta,
      {
        key: i,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: n.computeDateTop(s.start, r)
        },
        isAxis: !1,
        date: r
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: n, options: r } = this.context, s = r.slotEventOverlap, i = e.levelCoord, a = e.levelCoord + e.thickness, o, l;
    s && (a = Math.min(1, i + (a - i) * 2)), n ? (o = 1 - a, l = i) : (o = i, l = 1 - a);
    let c = {
      zIndex: e.stackDepth + 1,
      left: o * 100 + "%",
      right: l * 100 + "%"
    };
    return s && !e.stackForward && (c[n ? "marginLeft" : "marginRight"] = 10 * 2), c;
  }
}
function Fd(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: s, eventResize: i }) {
  let a = (s ? s.affectedInstances : null) || (i ? i.affectedInstances : null) || {};
  return m(U, null, t.map((o) => {
    let l = o.eventRange.instance.instanceId;
    return m(
      "div",
      { key: l, style: { visibility: a[l] ? "hidden" : "" } },
      m($d, Object.assign({ seg: o, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r, isShort: !1 }, Ve(o, e, n)))
    );
  }));
}
function Rs(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function rw(t, e) {
  return t.map((n) => e[n.index]);
}
class sw extends H {
  constructor() {
    super(...arguments), this.splitFgEventSegs = T(on), this.splitBgEventSegs = T(on), this.splitBusinessHourSegs = T(on), this.splitNowIndicatorSegs = T(on), this.splitDateSelectionSegs = T(on), this.splitEventDrag = T(qo), this.splitEventResize = T(qo), this.rootElRef = ae(), this.cellElRefs = new He();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), s = e.cells.length, i = this.splitFgEventSegs(e.fgEventSegs, s), a = this.splitBgEventSegs(e.bgEventSegs, s), o = this.splitBusinessHourSegs(e.businessHourSegs, s), l = this.splitNowIndicatorSegs(e.nowIndicatorSegs, s), c = this.splitDateSelectionSegs(e.dateSelectionSegs, s), u = this.splitEventDrag(e.eventDrag, s), h = this.splitEventResize(e.eventResize, s);
    return m(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      m(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        m(
          "tbody",
          { role: "presentation" },
          m(
            "tr",
            { role: "row" },
            e.axis && m(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              m(
                "div",
                { className: "fc-timegrid-col-frame" },
                m("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && m(ta, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((f, d) => m(nw, { key: f.key, elRef: this.cellElRefs.createRef(f.key), dateProfile: e.dateProfile, date: f.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: f.extraRenderProps, extraDataAttrs: f.extraDataAttrs, extraClassNames: f.extraClassNames, extraDateSpan: f.extraDateSpan, fgEventSegs: i[d], bgEventSegs: a[d], businessHourSegs: o[d], nowIndicatorSegs: l[d], dateSelectionSegs: c[d], eventDrag: u[d], eventResize: h[d], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
          )
        )
      )
    );
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let { props: e } = this;
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new jt(
      this.rootElRef.current,
      iw(this.cellElRefs.currentMap, e.cells),
      !0,
      !1
    ));
  }
}
function iw(t, e) {
  return e.map((n) => t[n.key]);
}
class aw extends Oe {
  constructor() {
    super(...arguments), this.processSlotOptions = T(ow), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
      if (n && r) {
        if (e.time) {
          let s = r.computeTimeTop(e.time);
          s = Math.ceil(s), s && (s += 1), n(s);
        }
        return !0;
      }
      return !1;
    }, this.handleColCoords = (e) => {
      this.colCoords = e;
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
    };
  }
  render() {
    let { props: e, state: n } = this;
    return m(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      m(W_, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      m(sw, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
    );
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(e, n) {
    let { dateEnv: r, options: s } = this.context, { colCoords: i } = this, { dateProfile: a } = this.props, { slatCoords: o } = this.state, { snapDuration: l, snapsPerSlot: c } = this.processSlotOptions(this.props.slotDuration, s.snapDuration), u = i.leftToIndex(e), h = o.positions.topToIndex(n);
    if (u != null && h != null) {
      let f = this.props.cells[u], d = o.positions.tops[h], g = o.positions.getHeight(h), v = (n - d) / g, p = Math.floor(v * c), b = h * c + p, E = this.props.cells[u].date, A = ri(a.slotMinTime, fp(l, b)), C = r.add(E, A), B = r.add(C, l);
      return {
        dateProfile: a,
        dateSpan: Object.assign({ range: { start: C, end: B }, allDay: !1 }, f.extraDateSpan),
        dayEl: i.els[u],
        rect: {
          left: i.lefts[u],
          right: i.rights[u],
          top: d,
          bottom: d + g
        },
        layer: 0
      };
    }
    return null;
  }
}
function ow(t, e) {
  let n = e || t, r = Pi(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class lw extends od {
  sliceRange(e, n) {
    let r = [];
    for (let s = 0; s < n.length; s += 1) {
      let i = lt(e, n[s]);
      i && r.push({
        start: i.start,
        end: i.end,
        isStart: i.start.valueOf() === e.start.valueOf(),
        isEnd: i.end.valueOf() === e.end.valueOf(),
        col: s
      });
    }
    return r;
  }
}
class uw extends Oe {
  constructor() {
    super(...arguments), this.buildDayRanges = T(cw), this.slicer = new lw(), this.timeColsRef = ae();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: s } = e, { nowIndicator: i, nextDayThreshold: a } = n.options, o = this.buildDayRanges(s, r, n.dateEnv);
    return m(Kt, { unit: i ? "minute" : "day" }, (l, c) => m(aw, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, o), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: s.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: l, nowIndicatorSegs: i && this.slicer.sliceNowDate(l, r, a, n, o), todayRange: c, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function cw(t, e, n) {
  let r = [];
  for (let s of t.headerDates)
    r.push({
      start: n.add(s, e.slotMinTime),
      end: n.add(s, e.slotMaxTime)
    });
  return r;
}
const Qo = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function dw(t, e, n, r, s) {
  let i = new Date(0), a = t, o = $(0), l = n || fw(r), c = [];
  for (; De(a) < De(e); ) {
    let u = s.add(i, a), h = Pi(o, l) !== null;
    c.push({
      date: u,
      time: a,
      key: u.toISOString(),
      isoTimeStr: kp(u),
      isLabeled: h
    }), a = ri(a, r), o = ri(o, r);
  }
  return c;
}
function fw(t) {
  let e, n, r;
  for (e = Qo.length - 1; e >= 0; e -= 1)
    if (n = $(Qo[e]), r = Pi(n, t), r !== null && r > 1)
      return n;
  return t;
}
class hw extends L_ {
  constructor() {
    super(...arguments), this.buildTimeColsModel = T(mw), this.buildSlatMetas = T(dw);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: s } = this, { dateProfile: i } = s, a = this.buildTimeColsModel(i, r), o = this.allDaySplitter.splitProps(s), l = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: c } = e, u = !c, h = c, f = e.dayHeaders && m(sd, { dates: a.headerDates, dateProfile: i, datesRepDistinctDays: !0, renderIntro: u ? this.renderHeadAxis : null }), d = e.allDaySlot !== !1 && ((v) => m(Id, Object.assign({}, o.allDay, { dateProfile: i, dayTableModel: a, nextDayThreshold: e.nextDayThreshold, tableMinWidth: v.tableMinWidth, colGroupNode: v.tableColGroupNode, renderRowIntro: u ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: v.clientWidth, clientHeight: v.clientHeight, forPrint: s.forPrint }, this.getAllDayMaxEventProps()))), g = (v) => m(uw, Object.assign({}, o.timed, { dayTableModel: a, dateProfile: i, axis: u, slotDuration: e.slotDuration, slatMetas: l, forPrint: s.forPrint, tableColGroupNode: v.tableColGroupNode, tableMinWidth: v.tableMinWidth, clientWidth: v.clientWidth, clientHeight: v.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: v.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return h ? this.renderHScrollLayout(f, d, g, a.colCnt, c, l, this.state.slatCoords) : this.renderSimpleLayout(f, d, g);
  }
}
function mw(t, e) {
  let n = new id(t.renderRange, e);
  return new ad(n, !1);
}
const gw = {
  allDaySlot: Boolean
};
var pw = Ze({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: gw,
  views: {
    timeGrid: {
      component: hw,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: "00:30:00",
      slotEventOverlap: !0
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
class yw extends H {
  constructor() {
    super(...arguments), this.state = {
      textId: st()
    };
  }
  render() {
    let { theme: e, dateEnv: n, options: r, viewApi: s } = this.context, { cellId: i, dayDate: a, todayRange: o } = this.props, { textId: l } = this.state, c = Ki(a, o), u = r.listDayFormat ? n.format(a, r.listDayFormat) : "", h = r.listDaySideFormat ? n.format(a, r.listDaySideFormat) : "", f = Object.assign({
      date: n.toDate(a),
      view: s,
      textId: l,
      text: u,
      sideText: h,
      navLinkAttrs: zt(this.context, a),
      sideNavLinkAttrs: zt(this.context, a, "day", !1)
    }, c);
    return m(re, { elTag: "tr", elClasses: [
      "fc-list-day",
      ...ns(c, e)
    ], elAttrs: {
      "data-date": In(a)
    }, renderProps: f, generatorName: "dayHeaderContent", customGenerator: r.dayHeaderContent, defaultGenerator: vw, classNameGenerator: r.dayHeaderClassNames, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, (d) => m(
      "th",
      { scope: "colgroup", colSpan: 3, id: i, "aria-labelledby": l },
      m(d, { elTag: "div", elClasses: [
        "fc-list-day-cushion",
        e.getClass("tableCellShaded")
      ] })
    ));
  }
}
function vw(t) {
  return m(
    U,
    null,
    t.text && m("a", Object.assign({ id: t.textId, className: "fc-list-day-text" }, t.navLinkAttrs), t.text),
    t.sideText && m("a", Object.assign({ "aria-hidden": !0, className: "fc-list-day-side-text" }, t.sideNavLinkAttrs), t.sideText)
  );
}
const bw = z({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
});
class _w extends H {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: s, timeHeaderId: i, eventHeaderId: a, dateHeaderId: o } = e, l = r.eventTimeFormat || bw;
    return m(rs, Object.assign({}, e, { elTag: "tr", elClasses: [
      "fc-list-event",
      s.eventRange.def.url && "fc-event-forced-url"
    ], defaultGenerator: () => ww(s, n), seg: s, timeText: "", disableDragging: !0, disableResizing: !0 }), (c, u) => m(
      U,
      null,
      Ew(s, l, n, i, o),
      m(
        "td",
        { "aria-hidden": !0, className: "fc-list-event-graphic" },
        m("span", { className: "fc-list-event-dot", style: {
          borderColor: u.borderColor || u.backgroundColor
        } })
      ),
      m(c, { elTag: "td", elClasses: ["fc-list-event-title"], elAttrs: { headers: `${a} ${o}` } })
    ));
  }
}
function ww(t, e) {
  let n = Ji(t, e);
  return m("a", Object.assign({}, n), t.eventRange.def.title);
}
function Ew(t, e, n, r, s) {
  let { options: i } = n;
  if (i.displayEventTime !== !1) {
    let a = t.eventRange.def, o = t.eventRange.instance, l = !1, c;
    if (a.allDay ? l = !0 : hy(t.eventRange.range) ? t.isStart ? c = _n(t, e, n, null, null, o.range.start, t.end) : t.isEnd ? c = _n(t, e, n, null, null, t.start, o.range.end) : l = !0 : c = _n(t, e, n), l) {
      let u = {
        text: n.options.allDayText,
        view: n.viewApi
      };
      return m(re, { elTag: "td", elClasses: ["fc-list-event-time"], elAttrs: {
        headers: `${r} ${s}`
      }, renderProps: u, generatorName: "allDayContent", customGenerator: i.allDayContent, defaultGenerator: Sw, classNameGenerator: i.allDayClassNames, didMount: i.allDayDidMount, willUnmount: i.allDayWillUnmount });
    }
    return m("td", { className: "fc-list-event-time" }, c);
  }
  return null;
}
function Sw(t) {
  return t.text;
}
class Tw extends Oe {
  constructor() {
    super(...arguments), this.computeDateVars = T(Cw), this.eventStoreToSegs = T(this._eventStoreToSegs), this.state = {
      timeHeaderId: st(),
      eventHeaderId: st(),
      dateHeaderIdRoot: st()
    }, this.setRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { props: e, context: n } = this, { dayDates: r, dayRanges: s } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, s);
    return m(
      Cn,
      { elRef: this.setRootEl, elClasses: [
        "fc-list",
        n.theme.getClass("table"),
        n.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""
      ], viewSpec: n.viewSpec },
      m(ld, { liquid: !e.isHeightAuto, overflowX: e.isHeightAuto ? "visible" : "hidden", overflowY: e.isHeightAuto ? "visible" : "auto" }, i.length > 0 ? this.renderSegList(i, r) : this.renderEmptyMessage())
    );
  }
  renderEmptyMessage() {
    let { options: e, viewApi: n } = this.context, r = {
      text: e.noEventsText,
      view: n
    };
    return m(re, { elTag: "div", elClasses: ["fc-list-empty"], renderProps: r, generatorName: "noEventsContent", customGenerator: e.noEventsContent, defaultGenerator: Dw, classNameGenerator: e.noEventsClassNames, didMount: e.noEventsDidMount, willUnmount: e.noEventsWillUnmount }, (s) => m(s, { elTag: "div", elClasses: ["fc-list-empty-cushion"] }));
  }
  renderSegList(e, n) {
    let { theme: r, options: s } = this.context, { timeHeaderId: i, eventHeaderId: a, dateHeaderIdRoot: o } = this.state, l = Aw(e);
    return m(Kt, { unit: "day" }, (c, u) => {
      let h = [];
      for (let f = 0; f < l.length; f += 1) {
        let d = l[f];
        if (d) {
          let g = In(n[f]), v = o + "-" + g;
          h.push(m(yw, { key: g, cellId: v, dayDate: n[f], todayRange: u })), d = Qi(d, s.eventOrder);
          for (let p of d)
            h.push(m(_w, Object.assign({ key: g + ":" + p.eventRange.instance.instanceId, seg: p, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: i, eventHeaderId: a, dateHeaderId: v }, Ve(p, u, c))));
        }
      }
      return m(
        "table",
        { className: "fc-list-table " + r.getClass("table") },
        m(
          "thead",
          null,
          m(
            "tr",
            null,
            m("th", { scope: "col", id: i }, s.timeHint),
            m("th", { scope: "col", "aria-hidden": !0 }),
            m("th", { scope: "col", id: a }, s.eventHint)
          )
        ),
        m("tbody", null, h)
      );
    });
  }
  _eventStoreToSegs(e, n, r) {
    return this.eventRangesToSegs(ui(e, n, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r);
  }
  eventRangesToSegs(e, n) {
    let r = [];
    for (let s of e)
      r.push(...this.eventRangeToSegs(s, n));
    return r;
  }
  eventRangeToSegs(e, n) {
    let { dateEnv: r } = this.context, { nextDayThreshold: s } = this.context.options, i = e.range, a = e.def.allDay, o, l, c, u = [];
    for (o = 0; o < n.length; o += 1)
      if (l = lt(i, n[o]), l && (c = {
        component: this,
        eventRange: e,
        start: l.start,
        end: l.end,
        isStart: e.isStart && l.start.valueOf() === i.start.valueOf(),
        isEnd: e.isEnd && l.end.valueOf() === i.end.valueOf(),
        dayIndex: o
      }, u.push(c), !c.isEnd && !a && o + 1 < n.length && i.end < r.add(n[o + 1].start, s))) {
        c.end = i.end, c.isEnd = !0;
        break;
      }
    return u;
  }
}
function Dw(t) {
  return t.text;
}
function Cw(t) {
  let e = W(t.renderRange.start), n = t.renderRange.end, r = [], s = [];
  for (; e < n; )
    r.push(e), s.push({
      start: e,
      end: ee(e, 1)
    }), e = ee(e, 1);
  return { dayDates: r, dayRanges: s };
}
function Aw(t) {
  let e = [], n, r;
  for (n = 0; n < t.length; n += 1)
    r = t[n], (e[r.dayIndex] || (e[r.dayIndex] = [])).push(r);
  return e;
}
var kw = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
ts(kw);
const xw = {
  listDayFormat: Jo,
  listDaySideFormat: Jo,
  noEventsClassNames: y,
  noEventsContent: y,
  noEventsDidMount: y,
  noEventsWillUnmount: y
};
function Jo(t) {
  return t === !1 ? null : z(t);
}
var Rw = Ze({
  name: "@fullcalendar/list",
  optionRefiners: xw,
  views: {
    list: {
      component: Tw,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" }
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" }
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" }
    }
  }
}), aa, x, Hd, Pd, wn, Ko, Ld, Vd = {}, Ud = [], Ow = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function rt(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Bd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function G(t, e, n) {
  var r, s, i, a = {};
  for (i in e)
    i == "key" ? r = e[i] : i == "ref" ? s = e[i] : a[i] = e[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? aa.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      a[i] === void 0 && (a[i] = t.defaultProps[i]);
  return _r(t, a, r, s, null);
}
function _r(t, e, n, r, s) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Hd };
  return s == null && x.vnode != null && x.vnode(i), i;
}
function Zt(t) {
  return t.children;
}
function be(t, e) {
  this.props = t, this.context = e;
}
function kn(t, e) {
  if (e == null)
    return t.__ ? kn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? kn(t) : null;
}
function Wd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Wd(t);
  }
}
function gi(t) {
  (!t.__d && (t.__d = !0) && wn.push(t) && !Ur.__r++ || Ko !== x.debounceRendering) && ((Ko = x.debounceRendering) || setTimeout)(Ur);
}
function Ur() {
  for (var t; Ur.__r = wn.length; )
    t = wn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), wn = [], t.some(function(e) {
      var n, r, s, i, a, o;
      e.__d && (a = (i = (n = e).__v).__e, (o = n.__P) && (r = [], (s = rt({}, i)).__v = i.__v + 1, qd(o, i, s, n.__n, o.ownerSVGElement !== void 0, i.__h != null ? [a] : null, r, a ?? kn(i), i.__h), Iw(r, i), i.__e != a && Wd(i)));
    });
}
function zd(t, e, n, r, s, i, a, o, l, c) {
  var u, h, f, d, g, v, p, b = r && r.__k || Ud, E = b.length;
  for (n.__k = [], u = 0; u < e.length; u++)
    if ((d = n.__k[u] = (d = e[u]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? _r(null, d, null, null, d) : Array.isArray(d) ? _r(Zt, { children: d }, null, null, null) : d.__b > 0 ? _r(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = b[u]) === null || f && d.key == f.key && d.type === f.type)
        b[u] = void 0;
      else
        for (h = 0; h < E; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      qd(t, d, f = f || Vd, s, i, a, o, l, c), g = d.__e, (h = d.ref) && f.ref != h && (p || (p = []), f.ref && p.push(f.ref, null, d), p.push(h, d.__c || g, d)), g != null ? (v == null && (v = g), typeof d.type == "function" && d.__k === f.__k ? d.__d = l = jd(d, l, t) : l = Zd(t, d, f, b, g, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != t && (l = kn(f));
    }
  for (n.__e = v, u = E; u--; )
    b[u] != null && Yd(b[u], b[u]);
  if (p)
    for (u = 0; u < p.length; u++)
      Gd(p[u], p[++u], p[++u]);
}
function jd(t, e, n) {
  for (var r, s = t.__k, i = 0; s && i < s.length; i++)
    (r = s[i]) && (r.__ = t, e = typeof r.type == "function" ? jd(r, e, n) : Zd(n, r, r, s, r.__e, e));
  return e;
}
function Br(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Br(n, e);
  }) : e.push(t)), e;
}
function Zd(t, e, n, r, s, i) {
  var a, o, l;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (n == null || s != i || s.parentNode == null)
    e:
      if (i == null || i.parentNode !== t)
        t.appendChild(s), a = null;
      else {
        for (o = i, l = 0; (o = o.nextSibling) && l < r.length; l += 1)
          if (o == s)
            break e;
        t.insertBefore(s, i), a = i;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function Mw(t, e, n, r, s) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in e || Wr(t, i, null, n[i], r);
  for (i in e)
    s && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Wr(t, i, e[i], n[i], r);
}
function Xo(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ow.test(e) ? n : n + "px";
}
function Wr(t, e, n, r, s) {
  var i;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Xo(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Xo(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? tl : el, i) : t.removeEventListener(e, i ? tl : el, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function el(t) {
  this.l[t.type + !1](x.event ? x.event(t) : t);
}
function tl(t) {
  this.l[t.type + !0](x.event ? x.event(t) : t);
}
function qd(t, e, n, r, s, i, a, o, l) {
  var c, u, h, f, d, g, v, p, b, E, A, C, B, O, P, S = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, o = e.__e = n.__e, e.__h = null, i = [o]), (c = x.__b) && c(e);
  try {
    e:
      if (typeof S == "function") {
        if (p = e.props, b = (c = S.contextType) && r[c.__c], E = c ? b ? b.props.value : c.__ : r, n.__c ? v = (u = e.__c = n.__c).__ = u.__E : ("prototype" in S && S.prototype.render ? e.__c = u = new S(p, E) : (e.__c = u = new be(p, E), u.constructor = S, u.render = $w), b && b.sub(u), u.props = p, u.state || (u.state = {}), u.context = E, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), S.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = rt({}, u.__s)), rt(u.__s, S.getDerivedStateFromProps(p, u.__s))), f = u.props, d = u.state, h)
          S.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && p !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(p, E), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(p, u.__s, E) === !1 || e.__v === n.__v) {
            for (u.props = p, u.state = u.__s, e.__v !== n.__v && (u.__d = !1), u.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(te) {
              te && (te.__ = e);
            }), A = 0; A < u._sb.length; A++)
              u.__h.push(u._sb[A]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(p, u.__s, E), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, d, g);
          });
        }
        if (u.context = E, u.props = p, u.__v = e, u.__P = t, C = x.__r, B = 0, "prototype" in S && S.prototype.render) {
          for (u.state = u.__s, u.__d = !1, C && C(e), c = u.render(u.props, u.state, u.context), O = 0; O < u._sb.length; O++)
            u.__h.push(u._sb[O]);
          u._sb = [];
        } else
          do
            u.__d = !1, C && C(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++B < 25);
        u.state = u.__s, u.getChildContext != null && (r = rt(rt({}, r), u.getChildContext())), h || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(f, d)), P = c != null && c.type === Zt && c.key == null ? c.props.children : c, zd(t, Array.isArray(P) ? P : [P], e, n, r, s, i, a, o, l), u.base = e.__e, e.__h = null, u.__h.length && a.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else
        i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Nw(n.__e, e, n, r, s, i, a, l);
    (c = x.diffed) && c(e);
  } catch (te) {
    e.__v = null, (l || i != null) && (e.__e = o, e.__h = !!l, i[i.indexOf(o)] = null), x.__e(te, e, n);
  }
}
function Iw(t, e) {
  x.__c && x.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      x.__e(r, n.__v);
    }
  });
}
function Nw(t, e, n, r, s, i, a, o) {
  var l, c, u, h = n.props, f = e.props, d = e.type, g = 0;
  if (d === "svg" && (s = !0), i != null) {
    for (; g < i.length; g++)
      if ((l = i[g]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        t = l, i[g] = null;
        break;
      }
  }
  if (t == null) {
    if (d === null)
      return document.createTextNode(f);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), i = null, o = !1;
  }
  if (d === null)
    h === f || o && t.data === f || (t.data = f);
  else {
    if (i = i && aa.call(t.childNodes), c = (h = n.props || Vd).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !o) {
      if (i != null)
        for (h = {}, g = 0; g < t.attributes.length; g++)
          h[t.attributes[g].name] = t.attributes[g].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (Mw(t, f, h, s, o), u)
      e.__k = [];
    else if (g = e.props.children, zd(t, Array.isArray(g) ? g : [g], e, n, r, s && d !== "foreignObject", i, a, i ? i[0] : n.__k && kn(n, 0), o), i != null)
      for (g = i.length; g--; )
        i[g] != null && Bd(i[g]);
    o || ("value" in f && (g = f.value) !== void 0 && (g !== t.value || d === "progress" && !g || d === "option" && g !== h.value) && Wr(t, "value", g, h.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== t.checked && Wr(t, "checked", g, h.checked, !1));
  }
  return t;
}
function Gd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    x.__e(r, n);
  }
}
function Yd(t, e, n) {
  var r, s;
  if (x.unmount && x.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Gd(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        x.__e(i, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (s = 0; s < r.length; s++)
      r[s] && Yd(r[s], e, n || typeof t.type != "function");
  n || t.__e == null || Bd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $w(t, e, n) {
  return this.constructor(t, n);
}
function Fw(t, e) {
  var n = { __c: e = "__cC" + Ld++, __: t, Consumer: function(r, s) {
    return r.children(s);
  }, Provider: function(r) {
    var s, i;
    return this.getChildContext || (s = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && s.some(gi);
    }, this.sub = function(a) {
      s.push(a);
      var o = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s.splice(s.indexOf(a), 1), o && o.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
aa = Ud.slice, x = { __e: function(t, e, n, r) {
  for (var s, i, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(t)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, r || {}), a = s.__d), a)
          return s.__E = s;
      } catch (o) {
        t = o;
      }
  throw t;
} }, Hd = 0, Pd = function(t) {
  return t != null && t.constructor === void 0;
}, be.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof t == "function" && (t = t(rt({}, n), this.props)), t && rt(n, t), t != null && this.__v && (e && this._sb.push(e), gi(this));
}, be.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), gi(this));
}, be.prototype.render = Zt, wn = [], Ur.__r = 0, Ld = 0;
var Ie, Os, nl, Qd = [], Ms = [], rl = x.__b, sl = x.__r, il = x.diffed, al = x.__c, ol = x.unmount;
function Hw() {
  for (var t; t = Qd.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(wr), t.__H.__h.forEach(pi), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], x.__e(e, t.__v);
      }
}
x.__b = function(t) {
  Ie = null, rl && rl(t);
}, x.__r = function(t) {
  sl && sl(t);
  var e = (Ie = t.__c).__H;
  e && (Os === Ie ? (e.__h = [], Ie.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ms, n.__N = n.i = void 0;
  })) : (e.__h.forEach(wr), e.__h.forEach(pi), e.__h = [])), Os = Ie;
}, x.diffed = function(t) {
  il && il(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Qd.push(e) !== 1 && nl === x.requestAnimationFrame || ((nl = x.requestAnimationFrame) || Pw)(Hw)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ms && (n.__ = n.__V), n.i = void 0, n.__V = Ms;
  })), Os = Ie = null;
}, x.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(wr), n.__h = n.__h.filter(function(r) {
        return !r.__ || pi(r);
      });
    } catch (r) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], x.__e(r, n.__v);
    }
  }), al && al(t, e);
}, x.unmount = function(t) {
  ol && ol(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      wr(r);
    } catch (s) {
      e = s;
    }
  }), n.__H = void 0, e && x.__e(e, n.__v));
};
var ll = typeof requestAnimationFrame == "function";
function Pw(t) {
  var e, n = function() {
    clearTimeout(r), ll && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  ll && (e = requestAnimationFrame(n));
}
function wr(t) {
  var e = Ie, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Ie = e;
}
function pi(t) {
  var e = Ie;
  t.__c = t.__(), Ie = e;
}
function Lw(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ul(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function cl(t) {
  this.props = t;
}
(cl.prototype = new be()).isPureReactComponent = !0, cl.prototype.shouldComponentUpdate = function(t, e) {
  return ul(this.props, t) || ul(this.state, e);
};
var dl = x.__b;
x.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), dl && dl(t);
};
var Vw = x.__e;
x.__e = function(t, e, n, r) {
  if (t.then) {
    for (var s, i = e; i = i.__; )
      if ((s = i.__c) && s.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), s.__c(t, e);
  }
  Vw(t, e, n, r);
};
var fl = x.unmount;
function Jd(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Lw({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Jd(r, e, n);
  })), t;
}
function Kd(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Kd(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Is() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xd(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function sr() {
  this.u = null, this.o = null;
}
x.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), fl && fl(t);
}, (Is.prototype = new be()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var s = Xd(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, s ? s(o) : o());
  };
  n.__R = a;
  var o = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Kd(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, l = e.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(a, a);
}, Is.prototype.componentWillUnmount = function() {
  this.t = [];
}, Is.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Jd(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var s = e.__a && G(Zt, null, t.fallback);
  return s && (s.__h = null), [G(Zt, null, e.__a ? null : t.children), s];
};
var hl = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
(sr.prototype = new be()).__a = function(t) {
  var e = this, n = Xd(e.__v), r = e.o.get(t);
  return r[0]++, function(s) {
    var i = function() {
      e.props.revealOrder ? (r.push(s), hl(e, t, r)) : s();
    };
    n ? n(i) : i();
  };
}, sr.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Br(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, sr.prototype.componentDidUpdate = sr.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    hl(t, n, e);
  });
};
var Uw = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Bw = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ww = typeof document < "u", zw = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
be.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(be.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var ml = x.event;
function jw() {
}
function Zw() {
  return this.cancelBubble;
}
function qw() {
  return this.defaultPrevented;
}
x.event = function(t) {
  return ml && (t = ml(t)), t.persist = jw, t.isPropagationStopped = Zw, t.isDefaultPrevented = qw, t.nativeEvent = t;
};
var gl = { configurable: !0, get: function() {
  return this.class;
} }, pl = x.vnode;
x.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var s = e.indexOf("-") === -1;
    for (var i in r = {}, n) {
      var a = n[i];
      Ww && i === "children" && e === "noscript" || i === "value" && "defaultValue" in n && a == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !zw(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : s && Bw.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Br(n.children).forEach(function(o) {
      o.props.selected = r.value.indexOf(o.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Br(n.children).forEach(function(o) {
      o.props.selected = r.multiple ? r.defaultValue.indexOf(o.props.value) != -1 : r.defaultValue == o.props.value;
    })), t.props = r, n.class != n.className && (gl.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", gl));
  }
  t.$$typeof = Uw, pl && pl(t);
};
var yl = x.__r;
x.__r = function(t) {
  yl && yl(t), t.__c;
};
const { hasOwnProperty: zr } = Object.prototype;
function vl(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Gw(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Yw(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function ef(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function Lt(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (zr.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (zr.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
function bl(t, e) {
  let n = [];
  for (let r in t)
    zr.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    zr.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Ns(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && Qw(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function Qw(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function Jw(t, e = 0, n, r = 1) {
  let s = [];
  n == null && (n = Object.keys(t).length);
  for (let i = e; i < n; i += r) {
    let a = t[i];
    a !== void 0 && s.push(a);
  }
  return s;
}
function ss(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, s;
  if (r !== e.length)
    return !1;
  for (s = 0; s < r; s += 1)
    if (!(n ? n(t[s], e[s]) : t[s] === e[s]))
      return !1;
  return !0;
}
function yi(t, e, n) {
  let r, s;
  return function(...i) {
    if (!r)
      s = t.apply(this, i);
    else if (!ss(r, i)) {
      n && n(s);
      let a = t.apply(this, i);
      (!e || !e(a, s)) && (s = a);
    }
    return r = i, s;
  };
}
function Kw(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Xw(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let s = 0; s < n.length; s += 1) {
    let i = n[s].querySelectorAll(e);
    for (let a = 0; a < i.length; a += 1)
      r.push(i[a]);
  }
  return r;
}
let _l = 0;
function tf() {
  return _l += 1, String(_l);
}
function $s(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function eE(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
function xt(t) {
  return {
    id: tf(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function oa(t, e) {
  let n = rf(t);
  return n[2] += e, la(n);
}
function tE(t, e) {
  let n = rf(t);
  return n[6] += e, la(n);
}
function nf(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function nE(t, e) {
  let n = ut(t), r = ut(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(nf(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function ut(t) {
  return la([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function rf(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function la(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function wl(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
const rE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function Ue(t, e) {
  return typeof t == "string" ? sE(t) : typeof t == "object" && t ? El(t) : typeof t == "number" ? El({ [e || "milliseconds"]: t }) : null;
}
function sE(t) {
  let e = rE.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function El(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function iE(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function aE(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function sf(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), s = Math.floor(r / 60), i = Math.round(r % 60);
  return e ? `${n + $s(s, 2)}:${$s(i, 2)}` : `GMT${n}${s}${i ? `:${$s(i, 2)}` : ""}`;
}
const Sl = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, jr = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, ir = /\s*([ap])\.?m\.?/i, oE = /,/g, lE = /\s+/g, uE = /\u200e/g, cE = /UTC|GMT/;
class dE {
  constructor(e) {
    let n = {}, r = {}, s = 0;
    for (let i in e)
      i in Sl ? (r[i] = e[i], s = Math.max(Sl[i], s)) : (n[i] = e[i], i in jr && (s = Math.max(jr[i], s)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = s, this.buildFormattingFunc = yi(Tl);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, s) {
    let { standardDateProps: i, extendedSettings: a } = this, o = yE(e.marker, n.marker, r.calendarSystem);
    if (!o)
      return this.format(e, r);
    let l = o;
    l > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (l = 1);
    let c = this.format(e, r), u = this.format(n, r);
    if (c === u)
      return c;
    let h = vE(i, l), f = Tl(h, a, r), d = f(e), g = f(n), v = bE(c, d, u, g), p = a.separator || s || r.defaultSeparator || "";
    return v ? v.before + d + p + g + v.after : c + p + u;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function Tl(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (s) => sf(s.timeZoneOffset) : r === 0 && e.week ? (s) => pE(n.computeWeekNumber(s.marker), n.weekText, n.weekTextLong, n.locale, e.week) : fE(t, e, n);
}
function fE(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), hE(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), s;
  if (e.omitZeroMinute) {
    let i = Object.assign({}, t);
    delete i.minute, s = new Intl.DateTimeFormat(n.locale.codes, i);
  }
  return (i) => {
    let { marker: a } = i, o;
    s && !a.getUTCMinutes() ? o = s : o = r;
    let l = o.format(a);
    return mE(l, i, t, e, n);
  };
}
function hE(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function mE(t, e, n, r, s) {
  return t = t.replace(uE, ""), n.timeZoneName === "short" && (t = gE(t, s.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : sf(e.timeZoneOffset))), r.omitCommas && (t = t.replace(oE, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(ir, "").trim() : r.meridiem === "narrow" ? t = t.replace(ir, (i, a) => a.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(ir, (i, a) => `${a.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(ir, (i) => i.toLocaleLowerCase())), t = t.replace(lE, " "), t = t.trim(), t;
}
function gE(t, e) {
  let n = !1;
  return t = t.replace(cE, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function pE(t, e, n, r, s) {
  let i = [];
  return s === "long" ? i.push(n) : (s === "short" || s === "narrow") && i.push(e), (s === "long" || s === "short") && i.push(" "), i.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && i.reverse(), i.join("");
}
function yE(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : wl(t) !== wl(e) ? 1 : 0;
}
function vE(t, e) {
  let n = {};
  for (let r in t)
    (!(r in jr) || jr[r] <= e) && (n[r] = t[r]);
  return n;
}
function bE(t, e, n, r) {
  let s = 0;
  for (; s < t.length; ) {
    let i = t.indexOf(e, s);
    if (i === -1)
      break;
    let a = t.substr(0, i);
    s = i + e.length;
    let o = t.substr(s), l = 0;
    for (; l < n.length; ) {
      let c = n.indexOf(r, l);
      if (c === -1)
        break;
      let u = n.substr(0, c);
      l = c + r.length;
      let h = n.substr(l);
      if (a === u && o === h)
        return {
          before: a,
          after: o
        };
    }
  }
  return null;
}
function Dl(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Zr(t, e, n, r) {
  let s = Dl(t, n.calendarSystem), i = e ? Dl(e, n.calendarSystem) : null;
  return {
    date: s,
    start: s,
    end: i,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class _E {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, Zr(e, null, n, r));
  }
  formatRange(e, n, r, s) {
    return r.cmdFormatter(this.cmdStr, Zr(e, n, r, s));
  }
}
class wE {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(Zr(e, null, n, r));
  }
  formatRange(e, n, r, s) {
    return this.func(Zr(e, n, r, s));
  }
}
function Hn(t) {
  return typeof t == "object" && t ? new dE(t) : typeof t == "string" ? new _E(t) : typeof t == "function" ? new wE(t) : null;
}
function ke(t) {
  return t;
}
function af(t) {
  let e = Fw(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, s = n.apply(this, arguments);
    if (r) {
      let i = [];
      this.shouldComponentUpdate = (a) => {
        this.props.value !== a.value && i.forEach((o) => {
          o.context = a.value, o.forceUpdate();
        });
      }, this.sub = (a) => {
        i.push(a);
        let o = a.componentWillUnmount;
        a.componentWillUnmount = () => {
          i.splice(i.indexOf(a), 1), o && o.call(a);
        };
      };
    }
    return s;
  }, e;
}
const ua = af({});
class Xt extends be {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(bl(e, this.props), bl(n, this.state)), !Ns(this.props, e, this.propEquality) || !Ns(this.state, n, this.stateEquality);
  }
  safeSetState(e) {
    Ns(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Xt.addPropsEquality = EE;
Xt.addStateEquality = SE;
Xt.contextType = ua;
Xt.prototype.propEquality = {};
Xt.prototype.stateEquality = {};
class is extends Xt {
}
is.contextType = ua;
function EE(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function SE(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function ca(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class da extends is {
  constructor() {
    super(...arguments), this.id = tf(), this.currentDomNodes = [], this.queuedDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && ca(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { generator: s, renderProps: i } = e, a = of(e);
    let o, l = [];
    if (TE(e.generatorName, r))
      r.customRenderingReplacesEl && delete a.elRef;
    else {
      const c = typeof s == "function" ? s(i, G) : s;
      typeof c == "string" || Pd(c) || Array.isArray(c) ? o = c : typeof c == "object" && ("html" in c ? a.dangerouslySetInnerHTML = { __html: c.html } : "domNodes" in c && (l = Array.prototype.slice.call(c.domNodes)));
    }
    return this.queuedDomNodes = l, G(e.elTag, a, o);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    const { props: n, context: r } = this, { handleCustomRendering: s, customRenderingMetaMap: i } = r.options;
    if (s) {
      const a = i == null ? void 0 : i[n.generatorName];
      a && s(Object.assign({ id: this.id, isActive: e, containerEl: this.base, reportNewContainerEl: this.handleEl, generatorMeta: a }, n));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!ss(e, n)) {
      n.forEach(Kw);
      for (let s of e)
        r.appendChild(s);
      this.currentDomNodes = e;
    }
  }
}
da.addPropsEquality({
  elClasses: ss,
  elStyle: Lt,
  elAttrs: Lt,
  renderProps: Lt
});
function TE(t, e) {
  var n;
  return Boolean(e.handleCustomRendering && t && ((n = e.customRenderingMetaMap) === null || n === void 0 ? void 0 : n[t]));
}
function of(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
const DE = af(0);
class CE extends be {
  constructor() {
    super(...arguments), this.InnerContent = AE.bind(void 0, this);
  }
  render() {
    const { props: e } = this, n = kE(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = of(e, n), s = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? G(e.elTag, r, s) : s;
    } else
      return G(da, Object.assign(Object.assign({}, e), { elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.base }));
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.base }));
  }
}
CE.contextType = DE;
function AE(t, e) {
  const n = t.props;
  return G(da, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, generator: n.generator, renderId: t.context }, e));
}
function kE(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
function xE(t, e) {
  let { start: n, end: r } = t, s = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (s = { start: n, end: r }), s;
}
function lf(t) {
  let e = Math.floor(nf(t.start, t.end)) || 1, n = ut(t.start), r = oa(n, e);
  return { start: n, end: r };
}
function ar(t, e, n, r) {
  return r === "year" ? Ue(n.diffWholeYears(t, e), "year") : r === "month" ? Ue(n.diffWholeMonths(t, e), "month") : nE(t, e);
}
function RE(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
const Er = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, uf = {
  start: ke,
  end: ke,
  date: ke,
  allDay: Boolean
};
Object.assign(Object.assign(Object.assign({}, Er), uf), { extendedProps: ke });
function OE(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], s = IE(t, (i) => ME(r, i));
    return s.defs[r.defId] = r, s.instances[n.instanceId] = n, s;
  }
  return cf();
}
function ME(t, e) {
  return Boolean(t.groupId && t.groupId === e.groupId);
}
function cf() {
  return { defs: {}, instances: {} };
}
function IE(t, e) {
  let n = vl(t.defs, e), r = vl(t.instances, (s) => n[s.defId]);
  return { defs: n, instances: r };
}
function Cl(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Al = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: ke,
  overlap: ke,
  allow: ke,
  className: Cl,
  classNames: Cl,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, NE = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function $E(t) {
  return t.reduce(FE, NE);
}
function FE(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
function HE(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
let PE = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const LE = xt({
  name: "array-event-source",
  eventSourceDefs: [PE]
});
function kl(t, e, n) {
  let { dateEnv: r, options: s } = n, i = e;
  return t ? (i = ut(i), i = r.add(i, s.defaultAllDayEventDuration)) : i = r.add(i, s.defaultTimedEventDuration), i;
}
function VE(t, e, n, r) {
  let s = jE(t.defs, e), i = cf();
  for (let a in t.defs) {
    let o = t.defs[a];
    i.defs[a] = UE(o, s[a], n, r);
  }
  for (let a in t.instances) {
    let o = t.instances[a], l = i.defs[o.defId];
    i.instances[a] = BE(o, l, s[o.defId], n, r);
  }
  return i;
}
function UE(t, e, n, r) {
  let s = n.standardProps || {};
  s.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (s.hasEnd = !0);
  let i = Object.assign(Object.assign(Object.assign({}, t), s), { ui: Object.assign(Object.assign({}, t.ui), s.ui) });
  n.extendedProps && (i.extendedProps = Object.assign(Object.assign({}, i.extendedProps), n.extendedProps));
  for (let a of r.pluginHooks.eventDefMutationAppliers)
    a(i, n, r);
  return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0), i;
}
function BE(t, e, n, r, s) {
  let { dateEnv: i } = s, a = r.standardProps && r.standardProps.allDay === !0, o = r.standardProps && r.standardProps.hasEnd === !1, l = Object.assign({}, t);
  return a && (l.range = lf(l.range)), r.datesDelta && n.startEditable && (l.range = {
    start: i.add(l.range.start, r.datesDelta),
    end: i.add(l.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (l.range = {
    start: i.add(l.range.start, r.startDelta),
    end: l.range.end
  }), r.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: i.add(l.range.end, r.endDelta)
  }), o && (l.range = {
    start: l.range.start,
    end: kl(e.allDay, l.range.start, s)
  }), e.allDay && (l.range = {
    start: ut(l.range.start),
    end: ut(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = kl(e.allDay, l.range.start, s)), l;
}
class WE {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class fa {
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  setProp(e, n) {
    if (e in uf)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Er[e](n), this.mutate({
        standardProps: { publicId: n }
      });
    else if (e in Er)
      n = Er[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Al) {
      let r = Al[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, s = r.createMarker(e);
    if (s && this._instance) {
      let i = this._instance.range, a = ar(i.start, s, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: a }) : this.mutate({ startDelta: a });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, s;
    if (!(e != null && (s = r.createMarker(e), !s)) && this._instance)
      if (s) {
        let i = ar(this._instance.range.end, s, r, n.granularity);
        this.mutate({ endDelta: i });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: s } = this._context, i = { allDay: r.allDay }, a = s.createMarker(e), o;
    if (!!a && !(n != null && (o = s.createMarker(n), !o)) && this._instance) {
      let l = this._instance.range;
      r.allDay === !0 && (l = lf(l));
      let c = ar(l.start, a, s, r.granularity);
      if (o) {
        let u = ar(l.end, o, s, r.granularity);
        iE(c, u) ? this.mutate({ datesDelta: c, standardProps: i }) : this.mutate({ startDelta: c, endDelta: u, standardProps: i });
      } else
        i.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: i });
    }
  }
  moveStart(e) {
    let n = Ue(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = Ue(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = Ue(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: s } = n;
    s == null && (s = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = s), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, s = Hn(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, s, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, s, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, s = this._context, { eventStore: i } = s.getCurrentData(), a = OE(i, n.instanceId);
      a = VE(a, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, s);
      let l = new fa(s, r, n);
      this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], s.dispatch({
        type: "MERGE_EVENTS",
        eventStore: a
      }), s.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: df(a, s, n),
        revert() {
          s.dispatch({
            type: "RESET_EVENTS",
            eventStore: i
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = zE(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new WE(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: s, endStr: i } = this, a = {};
    return n.title && (a.title = n.title), s && (a.start = s), i && (a.end = i), n.publicId && (a.id = n.publicId), n.groupId && (a.groupId = n.groupId), n.url && (a.url = n.url), r.display && r.display !== "auto" && (a.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? a.color = r.backgroundColor : (r.backgroundColor && (a.backgroundColor = r.backgroundColor), r.borderColor && (a.borderColor = r.borderColor)), r.textColor && (a.textColor = r.textColor), r.classNames.length && (a.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(a, n.extendedProps) : a.extendedProps = n.extendedProps), a;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function zE(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function df(t, e, n) {
  let { defs: r, instances: s } = t, i = [], a = n ? n.instanceId : "";
  for (let o in s) {
    let l = s[o], c = r[l.defId];
    l.instanceId !== a && i.push(new fa(e, c, l));
  }
  return i;
}
function jE(t, e) {
  return Gw(t, (n) => ZE(n, e));
}
function ZE(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), $E(n);
}
function ff(t, e, n) {
  return Object.assign(Object.assign({}, qE(t, e, n)), { timeZone: e.timeZone });
}
function qE(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function GE(t, e, n) {
  let r = !1, s = function(o) {
    r || (r = !0, e(o));
  }, i = function(o) {
    r || (r = !0, n(o));
  }, a = t(s, i);
  a && typeof a.then == "function" && a.then(s, i);
}
let YE = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, s = t.eventSource.meta;
    GE(s.bind(null, ff(t.range, r)), (i) => e({ rawEvents: i }), n);
  }
};
const QE = xt({
  name: "func-event-source",
  eventSourceDefs: [YE]
});
class xl extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function JE(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((s) => {
    if (s.ok)
      return s.json().then((i) => [i, s], () => {
        throw new xl("Failure parsing JSON", s);
      });
    throw new xl("Request failed", s);
  });
}
const KE = {
  method: String,
  extraParams: ke,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let XE = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, s = tS(r, t.range, t.context);
    JE(r.method, r.url, s).then(([i, a]) => {
      e({ rawEvents: i, response: a });
    }, n);
  }
};
const eS = xt({
  name: "json-event-source",
  eventSourceRefiners: KE,
  eventSourceDefs: [XE]
});
function tS(t, e, n) {
  let { dateEnv: r, options: s } = n, i, a, o, l, c = {};
  return i = t.startParam, i == null && (i = s.startParam), a = t.endParam, a == null && (a = s.endParam), o = t.timeZoneParam, o == null && (o = s.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, Object.assign(c, l), c[i] = r.formatIso(e.start), c[a] = r.formatIso(e.end), r.timeZone !== "local" && (c[o] = r.timeZone), c;
}
const nS = {
  daysOfWeek: ke,
  startTime: Ue,
  endTime: Ue,
  duration: Ue,
  startRecur: ke,
  endRecur: ke
};
let rS = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = aE(t.endTime, t.startTime)), {
        allDayGuess: Boolean(!t.startTime && !t.endTime),
        duration: r,
        typeData: n
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = xE(e, { start: t.startRecur, end: t.endRecur });
    return r ? iS(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const sS = xt({
  name: "simple-recurring-event",
  recurringTypes: [rS],
  eventRefiners: nS
});
function iS(t, e, n, r) {
  let s = t ? Yw(t) : null, i = ut(n.start), a = n.end, o = [];
  for (; i < a; ) {
    let l;
    (!s || s[i.getUTCDay()]) && (e ? l = r.add(i, e) : l = i, o.push(l)), i = oa(i, 1);
  }
  return o;
}
const aS = xt({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      Rl([t], e);
    },
    eventSources: Rl
  }
});
function Rl(t, e) {
  let n = ef(e.getCurrentData().eventSources), r = [];
  for (let s of t) {
    let i = !1;
    for (let a = 0; a < n.length; a += 1)
      if (n[a]._raw === s) {
        n.splice(a, 1), i = !0;
        break;
      }
    i || r.push(s);
  }
  for (let s of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: s.sourceId
    });
  for (let s of r)
    e.calendarApi.addEventSource(s);
}
function oS(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, ff(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function lS(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", df(t, e));
}
xt({
  name: "misc",
  isLoadingFuncs: [
    (t) => HE(t.eventSources)
  ],
  propSetHandlers: {
    dateProfile: oS,
    eventStore: lS
  }
});
let Fs;
function uS() {
  return Fs == null && (Fs = cS()), Fs;
}
function cS() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
Hn({ year: "numeric", month: "long", day: "numeric" });
Hn({ week: "long" });
let Hs;
function dS() {
  return Hs || (Hs = fS()), Hs;
}
function fS() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = hS(t);
  return document.body.removeChild(t), e;
}
function hS(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
class mS {
  constructor(e) {
    this.timeZoneName = e;
  }
}
Hn({ weekday: "long" });
class gS extends be {
  constructor(e, n) {
    super(e, n), this.initialNowDate = RE(n.options.now, n.dateEnv), this.initialNowQueriedMs = new Date().valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = tE(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), s = n.dateEnv.startOf(r, e.unit), i = n.dateEnv.add(s, Ue(1, e.unit)), a = i.valueOf() - r.valueOf();
    return a = Math.min(1e3 * 60 * 60 * 24, a), {
      currentState: { nowDate: s, todayRange: Ol(s) },
      nextState: { nowDate: i, todayRange: Ol(i) },
      waitMs: a
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
gS.contextType = ua;
function Ol(t) {
  let e = ut(t), n = oa(e, 1);
  return { start: e, end: n };
}
const or = /^(visible|hidden)$/;
class pS extends is {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, ca(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, s = n && r, i = ["fc-scroller"];
    return n && (r ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), G("div", { ref: this.handleEl, className: i.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: s && -(e.overcomeLeft || 0) || "",
      right: s && -(e.overcomeRight || 0) || "",
      bottom: s && -(e.overcomeBottom || 0) || "",
      marginLeft: !s && -(e.overcomeLeft || 0) || "",
      marginRight: !s && -(e.overcomeRight || 0) || "",
      marginBottom: !s && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (or.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let s = 0; s < r.length; s += 1)
      if (r[s].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (or.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let s = 0; s < r.length; s += 1)
      if (r[s].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return or.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return or.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class Ml {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: s, currentMap: i } = this, a = !1, o = !1;
      n !== null ? (a = r in i, i[r] = n, s[r] = (s[r] || 0) + 1, o = !0) : (s[r] -= 1, s[r] || (delete i[r], delete this.callbackMap[r], a = !0)), this.masterCallback && (a && this.masterCallback(null, String(r)), o && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  collect(e, n, r) {
    return Jw(this.currentMap, e, n, r);
  }
  getAll() {
    return ef(this.currentMap);
  }
}
function yS(t) {
  let e = Xw(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, eE(r));
  return Math.ceil(n);
}
function hf(t, e) {
  return t.liquid && e.liquid;
}
function vS(t, e) {
  return e.maxHeight != null || hf(t, e);
}
function bS(t, e, n, r) {
  let { expandRows: s } = n;
  return typeof e.content == "function" ? e.content(n) : G("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: s ? n.clientHeight : ""
    }
  }, n.tableColGroupNode, G(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function _S(t, e) {
  return ss(t, e, Lt);
}
function wS(t, e) {
  let n = [];
  for (let r of t) {
    let s = r.span || 1;
    for (let i = 0; i < s; i += 1)
      n.push(G("col", { style: {
        width: r.width === "shrink" ? ES(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return G("colgroup", {}, ...n);
}
function ES(t) {
  return t ?? 4;
}
function SS(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function TS(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function DS(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
class CS extends is {
  constructor() {
    super(...arguments), this.processCols = yi((e) => e, _S), this.renderMicroColGroup = yi(wS), this.scrollerRefs = new Ml(), this.scrollerElRefs = new Ml(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, s = e.sections || [], i = this.processCols(e.cols), a = this.renderMicroColGroup(i, n.shrinkWidth), o = TS(e.liquid, r);
    e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
    let l = s.length, c = 0, u, h = [], f = [], d = [];
    for (; c < l && (u = s[c]).type === "header"; )
      h.push(this.renderSection(u, a, !0)), c += 1;
    for (; c < l && (u = s[c]).type === "body"; )
      f.push(this.renderSection(u, a, !1)), c += 1;
    for (; c < l && (u = s[c]).type === "footer"; )
      d.push(this.renderSection(u, a, !0)), c += 1;
    let g = !uS();
    const v = { role: "rowgroup" };
    return G("table", {
      role: "grid",
      className: o.join(" "),
      style: { height: e.height }
    }, Boolean(!g && h.length) && G("thead", v, ...h), Boolean(!g && f.length) && G("tbody", v, ...f), Boolean(!g && d.length) && G("tfoot", v, ...d), g && G("tbody", v, ...h, ...f, ...d));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? G(Zt, { key: e.key }, e.outerContent) : G("tr", { key: e.key, role: "presentation", className: DS(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, s) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: i } = this, { forceYScrollbars: a, scrollerClientWidths: o, scrollerClientHeights: l } = this.state, c = vS(i, e), u = hf(i, e), h = i.liquid ? a ? "scroll" : c ? "auto" : "hidden" : "visible", f = e.key, d = bS(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !i.collapsibleWidth && o[f] !== void 0 ? o[f] : null,
      clientHeight: l[f] !== void 0 ? l[f] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, s);
    return G(s ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, G(
      "div",
      { className: `fc-scroller-harness${u ? " fc-scroller-harness-liquid" : ""}` },
      G(pS, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: h, overflowX: i.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, d)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = AS(this.props.sections, n);
    r && ca(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return SS(this.props.cols) ? yS(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = dS(), { scrollerRefs: n, scrollerElRefs: r } = this, s = !1, i = {}, a = {};
    for (let o in n.currentMap) {
      let l = n.currentMap[o];
      if (l && l.needsYScrolling()) {
        s = !0;
        break;
      }
    }
    for (let o of this.props.sections) {
      let l = o.key, c = r.currentMap[l];
      if (c) {
        let u = c.parentNode;
        i[l] = Math.floor(u.getBoundingClientRect().width - (s ? e.y : 0)), a[l] = Math.floor(u.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: s, scrollerClientWidths: i, scrollerClientHeights: a };
  }
}
CS.addStateEquality({
  scrollerClientWidths: Lt,
  scrollerClientHeights: Lt
});
function AS(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
Hn({ day: "numeric" });
class Rt extends Error {
}
class kS extends Rt {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class xS extends Rt {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class RS extends Rt {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class mn extends Rt {
}
class mf extends Rt {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class pe extends Rt {
}
class Ye extends Rt {
  constructor() {
    super("Zone is an abstract class");
  }
}
const w = "numeric", Re = "short", fe = "long", vi = {
  year: w,
  month: w,
  day: w
}, gf = {
  year: w,
  month: Re,
  day: w
}, OS = {
  year: w,
  month: Re,
  day: w,
  weekday: Re
}, pf = {
  year: w,
  month: fe,
  day: w
}, yf = {
  year: w,
  month: fe,
  day: w,
  weekday: fe
}, vf = {
  hour: w,
  minute: w
}, bf = {
  hour: w,
  minute: w,
  second: w
}, _f = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Re
}, wf = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: fe
}, Ef = {
  hour: w,
  minute: w,
  hourCycle: "h23"
}, Sf = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23"
}, Tf = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23",
  timeZoneName: Re
}, Df = {
  hour: w,
  minute: w,
  second: w,
  hourCycle: "h23",
  timeZoneName: fe
}, Cf = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w
}, Af = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w,
  second: w
}, kf = {
  year: w,
  month: Re,
  day: w,
  hour: w,
  minute: w
}, xf = {
  year: w,
  month: Re,
  day: w,
  hour: w,
  minute: w,
  second: w
}, MS = {
  year: w,
  month: Re,
  day: w,
  weekday: Re,
  hour: w,
  minute: w
}, Rf = {
  year: w,
  month: fe,
  day: w,
  hour: w,
  minute: w,
  timeZoneName: Re
}, Of = {
  year: w,
  month: fe,
  day: w,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Re
}, Mf = {
  year: w,
  month: fe,
  day: w,
  weekday: fe,
  hour: w,
  minute: w,
  timeZoneName: fe
}, If = {
  year: w,
  month: fe,
  day: w,
  weekday: fe,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: fe
};
function I(t) {
  return typeof t > "u";
}
function Tt(t) {
  return typeof t == "number";
}
function as(t) {
  return typeof t == "number" && t % 1 === 0;
}
function IS(t) {
  return typeof t == "string";
}
function NS(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Nf() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function $S(t) {
  return Array.isArray(t) ? t : [t];
}
function Il(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, s) => {
      const i = [e(s), s];
      return r && n(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function FS(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function qt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Pe(t, e, n) {
  return as(t) && t >= e && t <= n;
}
function HS(t, e) {
  return t - e * Math.floor(t / e);
}
function K(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function Je(t) {
  if (!(I(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function mt(t) {
  if (!(I(t) || t === null || t === ""))
    return parseFloat(t);
}
function ha(t) {
  if (!(I(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function ma(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Pn(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function En(t) {
  return Pn(t) ? 366 : 365;
}
function qr(t, e) {
  const n = HS(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Pn(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function ga(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
}
function Gr(t) {
  const e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7, n = t - 1, r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function bi(t) {
  return t > 99 ? t : t > 60 ? 1900 + t : 2e3 + t;
}
function $f(t, e, n, r = null) {
  const s = new Date(t), i = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (i.timeZone = r);
  const a = { timeZoneName: e, ...i }, o = new Intl.DateTimeFormat(n, a).formatToParts(s).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function os(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, s = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + s;
}
function Ff(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new pe(`Invalid unit value ${t}`);
  return e;
}
function Yr(t, e) {
  const n = {};
  for (const r in t)
    if (qt(t, r)) {
      const s = t[r];
      if (s == null)
        continue;
      n[e(r)] = Ff(s);
    }
  return n;
}
function Sn(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), s = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${K(n, 2)}:${K(r, 2)}`;
    case "narrow":
      return `${s}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${K(n, 2)}${K(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function ls(t) {
  return FS(t, ["hour", "minute", "second", "millisecond"]);
}
const Hf = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/, PS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Pf = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], LS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Lf(t) {
  switch (t) {
    case "narrow":
      return [...LS];
    case "short":
      return [...Pf];
    case "long":
      return [...PS];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Vf = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Uf = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], VS = ["M", "T", "W", "T", "F", "S", "S"];
function Bf(t) {
  switch (t) {
    case "narrow":
      return [...VS];
    case "short":
      return [...Uf];
    case "long":
      return [...Vf];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Wf = ["AM", "PM"], US = ["Before Christ", "Anno Domini"], BS = ["BC", "AD"], WS = ["B", "A"];
function zf(t) {
  switch (t) {
    case "narrow":
      return [...WS];
    case "short":
      return [...BS];
    case "long":
      return [...US];
    default:
      return null;
  }
}
function zS(t) {
  return Wf[t.hour < 12 ? 0 : 1];
}
function jS(t, e) {
  return Bf(e)[t.weekday - 1];
}
function ZS(t, e) {
  return Lf(e)[t.month - 1];
}
function qS(t, e) {
  return zf(e)[t.year < 0 ? 0 : 1];
}
function GS(t, e, n = "always", r = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && i) {
    const h = t === "days";
    switch (e) {
      case 1:
        return h ? "tomorrow" : `next ${s[t][0]}`;
      case -1:
        return h ? "yesterday" : `last ${s[t][0]}`;
      case 0:
        return h ? "today" : `this ${s[t][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, c = s[t], u = r ? l ? c[1] : c[2] || c[1] : l ? s[t][0] : t;
  return a ? `${o} ${u} ago` : `in ${o} ${u}`;
}
function Nl(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const YS = {
  D: vi,
  DD: gf,
  DDD: pf,
  DDDD: yf,
  t: vf,
  tt: bf,
  ttt: _f,
  tttt: wf,
  T: Ef,
  TT: Sf,
  TTT: Tf,
  TTTT: Df,
  f: Cf,
  ff: kf,
  fff: Rf,
  ffff: Mf,
  F: Af,
  FF: xf,
  FFF: Of,
  FFFF: If
};
class ue {
  static create(e, n = {}) {
    return new ue(e, n);
  }
  static parseFormat(e) {
    let n = null, r = "", s = !1;
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (r.length > 0 && i.push({ literal: s, val: r }), n = null, r = "", s = !s) : s || o === n ? r += o : (r.length > 0 && i.push({ literal: !1, val: r }), r = o, n = o);
    }
    return r.length > 0 && i.push({ literal: s, val: r }), i;
  }
  static macroTokenToFormatOpts(e) {
    return YS[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  formatDateTime(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  formatDateTimeParts(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n }).formatToParts();
  }
  resolvedOptions(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n }).resolvedOptions();
  }
  num(e, n = 0) {
    if (this.opts.forceSimple)
      return K(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", i = (d, g) => this.loc.extract(e, d, g), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? zS(e) : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, g) => r ? ZS(e, d) : i(g ? { month: d } : { month: d, day: "numeric" }, "month"), c = (d, g) => r ? jS(e, d) : i(
      g ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), u = (d) => {
      const g = ue.macroTokenToFormatOpts(d);
      return g ? this.formatWithSystemDefault(e, g) : d;
    }, h = (d) => r ? qS(e, d) : i({ era: d }, "era"), f = (d) => {
      switch (d) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return s ? i({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return s ? i({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return s ? i({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? i({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? i({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return h("short");
        case "GG":
          return h("long");
        case "GGGGG":
          return h("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return u(d);
      }
    };
    return Nl(ue.parseFormat(n), f);
  }
  formatDurationFromString(e, n) {
    const r = (l) => {
      switch (l[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = (l) => (c) => {
      const u = r(c);
      return u ? this.num(l.get(u), c.length) : c;
    }, i = ue.parseFormat(n), a = i.reduce(
      (l, { literal: c, val: u }) => c ? l : l.concat(u),
      []
    ), o = e.shiftTo(...a.map(r).filter((l) => l));
    return Nl(i, s(o));
  }
}
class Ae {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class Ln {
  get type() {
    throw new Ye();
  }
  get name() {
    throw new Ye();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new Ye();
  }
  offsetName(e, n) {
    throw new Ye();
  }
  formatOffset(e, n) {
    throw new Ye();
  }
  offset(e) {
    throw new Ye();
  }
  equals(e) {
    throw new Ye();
  }
  get isValid() {
    throw new Ye();
  }
}
let Ps = null;
class pa extends Ln {
  static get instance() {
    return Ps === null && (Ps = new pa()), Ps;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return $f(e, n, r);
  }
  formatOffset(e, n) {
    return Sn(this.offset(e), n);
  }
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  equals(e) {
    return e.type === "system";
  }
  get isValid() {
    return !0;
  }
}
let Sr = {};
function QS(t) {
  return Sr[t] || (Sr[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Sr[t];
}
const JS = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function KS(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, s, i, a, o, l, c, u] = r;
  return [a, s, i, o, l, c, u];
}
function XS(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let s = 0; s < n.length; s++) {
    const { type: i, value: a } = n[s], o = JS[i];
    i === "era" ? r[o] = a : I(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let lr = {};
class ze extends Ln {
  static create(e) {
    return lr[e] || (lr[e] = new ze(e)), lr[e];
  }
  static resetCache() {
    lr = {}, Sr = {};
  }
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = ze.isValidZone(e);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return $f(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return Sn(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = QS(this.name);
    let [s, i, a, o, l, c, u] = r.formatToParts ? XS(r, n) : KS(r, n);
    o === "BC" && (s = -Math.abs(s) + 1);
    const f = ga({
      year: s,
      month: i,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: c,
      second: u,
      millisecond: 0
    });
    let d = +n;
    const g = d % 1e3;
    return d -= g >= 0 ? g : 1e3 + g, (f - d) / (60 * 1e3);
  }
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let Ls = null;
class ie extends Ln {
  static get utcInstance() {
    return Ls === null && (Ls = new ie(0)), Ls;
  }
  static instance(e) {
    return e === 0 ? ie.utcInstance : new ie(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new ie(os(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Sn(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Sn(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return Sn(this.fixed, n);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class e0 extends Ln {
  constructor(e) {
    super(), this.zoneName = e;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Xe(t, e) {
  if (I(t) || t === null)
    return e;
  if (t instanceof Ln)
    return t;
  if (IS(t)) {
    const n = t.toLowerCase();
    return n === "local" || n === "system" ? e : n === "utc" || n === "gmt" ? ie.utcInstance : ie.parseSpecifier(n) || ze.create(t);
  } else
    return Tt(t) ? ie.instance(t) : typeof t == "object" && t.offset && typeof t.offset == "number" ? t : new e0(t);
}
let $l = () => Date.now(), Fl = "system", Hl = null, Pl = null, Ll = null, Vl;
class X {
  static get now() {
    return $l;
  }
  static set now(e) {
    $l = e;
  }
  static set defaultZone(e) {
    Fl = e;
  }
  static get defaultZone() {
    return Xe(Fl, pa.instance);
  }
  static get defaultLocale() {
    return Hl;
  }
  static set defaultLocale(e) {
    Hl = e;
  }
  static get defaultNumberingSystem() {
    return Pl;
  }
  static set defaultNumberingSystem(e) {
    Pl = e;
  }
  static get defaultOutputCalendar() {
    return Ll;
  }
  static set defaultOutputCalendar(e) {
    Ll = e;
  }
  static get throwOnInvalid() {
    return Vl;
  }
  static set throwOnInvalid(e) {
    Vl = e;
  }
  static resetCaches() {
    Z.resetCache(), ze.resetCache();
  }
}
let Ul = {};
function t0(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Ul[n];
  return r || (r = new Intl.ListFormat(t, e), Ul[n] = r), r;
}
let _i = {};
function wi(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = _i[n];
  return r || (r = new Intl.DateTimeFormat(t, e), _i[n] = r), r;
}
let Ei = {};
function n0(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Ei[n];
  return r || (r = new Intl.NumberFormat(t, e), Ei[n] = r), r;
}
let Si = {};
function r0(t, e = {}) {
  const { base: n, ...r } = e, s = JSON.stringify([t, r]);
  let i = Si[s];
  return i || (i = new Intl.RelativeTimeFormat(t, e), Si[s] = i), i;
}
let gn = null;
function s0() {
  return gn || (gn = new Intl.DateTimeFormat().resolvedOptions().locale, gn);
}
function i0(t) {
  const e = t.indexOf("-u-");
  if (e === -1)
    return [t];
  {
    let n;
    const r = t.substring(0, e);
    try {
      n = wi(t).resolvedOptions();
    } catch {
      n = wi(r).resolvedOptions();
    }
    const { numberingSystem: s, calendar: i } = n;
    return [r, s, i];
  }
}
function a0(t, e, n) {
  return (n || e) && (t += "-u", n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function o0(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = R.utc(2016, n, 1);
    e.push(t(r));
  }
  return e;
}
function l0(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = R.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function ur(t, e, n, r, s) {
  const i = t.listingMode(n);
  return i === "error" ? null : i === "en" ? r(e) : s(e);
}
function u0(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class c0 {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: i, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = n0(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : ma(e, 3);
      return K(n, this.padTo);
    }
  }
}
class d0 {
  constructor(e, n, r) {
    this.opts = r;
    let s;
    if (e.zone.isUniversal) {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && ze.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", r.timeZoneName ? this.dt = e : this.dt = e.offset === 0 ? e : R.fromMillis(e.ts + e.offset * 60 * 1e3));
    } else
      e.zone.type === "system" ? this.dt = e : (this.dt = e, s = e.zone.name);
    const i = { ...this.opts };
    s && (i.timeZone = s), this.dtf = wi(n, i);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class f0 {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && Nf() && (this.rtf = r0(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : GS(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
class Z {
  static fromOpts(e) {
    return Z.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, n, r, s = !1) {
    const i = e || X.defaultLocale, a = i || (s ? "en-US" : s0()), o = n || X.defaultNumberingSystem, l = r || X.defaultOutputCalendar;
    return new Z(a, o, l, i);
  }
  static resetCache() {
    gn = null, _i = {}, Ei = {}, Si = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    return Z.create(e, n, r);
  }
  constructor(e, n, r, s) {
    const [i, a, o] = i0(e);
    this.locale = i, this.numberingSystem = n || a || null, this.outputCalendar = r || o || null, this.intl = a0(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = u0(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Z.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1, r = !0) {
    return ur(this, e, r, Lf, () => {
      const s = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = o0((a) => this.extract(a, s, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1, r = !0) {
    return ur(this, e, r, Bf, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = l0(
        (a) => this.extract(a, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems(e = !0) {
    return ur(
      this,
      void 0,
      e,
      () => Wf,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [R.utc(2016, 11, 13, 9), R.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, n, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, n = !0) {
    return ur(this, e, n, zf, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [R.utc(-40, 1, 1), R.utc(2017, 1, 1)].map(
        (s) => this.extract(s, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const s = this.dtFormatter(e, n), i = s.formatToParts(), a = i.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new c0(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new d0(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new f0(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return t0(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
function en(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function tn(...t) {
  return (e) => t.reduce(
    ([n, r, s], i) => {
      const [a, o, l] = i(e, s);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function nn(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const s = n.exec(t);
    if (s)
      return r(s);
  }
  return [null, null];
}
function jf(...t) {
  return (e, n) => {
    const r = {};
    let s;
    for (s = 0; s < t.length; s++)
      r[t[s]] = Je(e[n + s]);
    return [r, null, n + s];
  };
}
const Zf = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, h0 = `(?:${Zf.source}?(?:\\[(${Hf.source})\\])?)?`, ya = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, qf = RegExp(`${ya.source}${h0}`), va = RegExp(`(?:T${qf.source})?`), m0 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, g0 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, p0 = /(\d{4})-?(\d{3})/, y0 = jf("weekYear", "weekNumber", "weekDay"), v0 = jf("year", "ordinal"), b0 = /(\d{4})-(\d\d)-(\d\d)/, Gf = RegExp(
  `${ya.source} ?(?:${Zf.source}|(${Hf.source}))?`
), _0 = RegExp(`(?: ${Gf.source})?`);
function Vt(t, e, n) {
  const r = t[e];
  return I(r) ? n : Je(r);
}
function w0(t, e) {
  return [{
    year: Vt(t, e),
    month: Vt(t, e + 1, 1),
    day: Vt(t, e + 2, 1)
  }, null, e + 3];
}
function rn(t, e) {
  return [{
    hours: Vt(t, e, 0),
    minutes: Vt(t, e + 1, 0),
    seconds: Vt(t, e + 2, 0),
    milliseconds: ha(t[e + 3])
  }, null, e + 4];
}
function Vn(t, e) {
  const n = !t[e] && !t[e + 1], r = os(t[e + 1], t[e + 2]), s = n ? null : ie.instance(r);
  return [{}, s, e + 3];
}
function Un(t, e) {
  const n = t[e] ? ze.create(t[e]) : null;
  return [{}, n, e + 1];
}
const E0 = RegExp(`^T?${ya.source}$`), S0 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function T0(t) {
  const [
    e,
    n,
    r,
    s,
    i,
    a,
    o,
    l,
    c
  ] = t, u = e[0] === "-", h = l && l[0] === "-", f = (d, g = !1) => d !== void 0 && (g || d && u) ? -d : d;
  return [
    {
      years: f(mt(n)),
      months: f(mt(r)),
      weeks: f(mt(s)),
      days: f(mt(i)),
      hours: f(mt(a)),
      minutes: f(mt(o)),
      seconds: f(mt(l), l === "-0"),
      milliseconds: f(ha(c), h)
    }
  ];
}
const D0 = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ba(t, e, n, r, s, i, a) {
  const o = {
    year: e.length === 2 ? bi(Je(e)) : Je(e),
    month: Pf.indexOf(n) + 1,
    day: Je(r),
    hour: Je(s),
    minute: Je(i)
  };
  return a && (o.second = Je(a)), t && (o.weekday = t.length > 3 ? Vf.indexOf(t) + 1 : Uf.indexOf(t) + 1), o;
}
const C0 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function A0(t) {
  const [
    ,
    e,
    n,
    r,
    s,
    i,
    a,
    o,
    l,
    c,
    u,
    h
  ] = t, f = ba(e, s, r, n, i, a, o);
  let d;
  return l ? d = D0[l] : c ? d = 0 : d = os(u, h), [f, new ie(d)];
}
function k0(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const x0 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, R0 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, O0 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Bl(t) {
  const [, e, n, r, s, i, a, o] = t;
  return [ba(e, s, r, n, i, a, o), ie.utcInstance];
}
function M0(t) {
  const [, e, n, r, s, i, a, o] = t;
  return [ba(e, o, n, r, s, i, a), ie.utcInstance];
}
const I0 = en(m0, va), N0 = en(g0, va), $0 = en(p0, va), F0 = en(qf), Yf = tn(
  w0,
  rn,
  Vn,
  Un
), H0 = tn(
  y0,
  rn,
  Vn,
  Un
), P0 = tn(
  v0,
  rn,
  Vn,
  Un
), L0 = tn(
  rn,
  Vn,
  Un
);
function V0(t) {
  return nn(
    t,
    [I0, Yf],
    [N0, H0],
    [$0, P0],
    [F0, L0]
  );
}
function U0(t) {
  return nn(k0(t), [C0, A0]);
}
function B0(t) {
  return nn(
    t,
    [x0, Bl],
    [R0, Bl],
    [O0, M0]
  );
}
function W0(t) {
  return nn(t, [S0, T0]);
}
const z0 = tn(rn);
function j0(t) {
  return nn(t, [E0, z0]);
}
const Z0 = en(b0, _0), q0 = en(Gf), G0 = tn(
  rn,
  Vn,
  Un
);
function Y0(t) {
  return nn(
    t,
    [Z0, Yf],
    [q0, G0]
  );
}
const Q0 = "Invalid Duration", Qf = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, J0 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Qf
}, me = 146097 / 400, It = 146097 / 4800, K0 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: me / 7,
    days: me,
    hours: me * 24,
    minutes: me * 24 * 60,
    seconds: me * 24 * 60 * 60,
    milliseconds: me * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: me / 28,
    days: me / 4,
    hours: me * 24 / 4,
    minutes: me * 24 * 60 / 4,
    seconds: me * 24 * 60 * 60 / 4,
    milliseconds: me * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: It / 7,
    days: It,
    hours: It * 24,
    minutes: It * 24 * 60,
    seconds: It * 24 * 60 * 60,
    milliseconds: It * 24 * 60 * 60 * 1e3
  },
  ...Qf
}, vt = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], X0 = vt.slice(0).reverse();
function gt(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy
  };
  return new N(r);
}
function eT(t) {
  return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function Jf(t, e, n, r, s) {
  const i = t[s][n], a = e[n] / i, o = Math.sign(a) === Math.sign(r[s]), l = !o && r[s] !== 0 && Math.abs(a) <= 1 ? eT(a) : Math.trunc(a);
  r[s] += l, e[n] -= l * i;
}
function tT(t, e) {
  X0.reduce((n, r) => I(e[r]) ? n : (n && Jf(t, e, n, e, r), r), null);
}
class N {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    this.values = e.values, this.loc = e.loc || Z.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n ? K0 : J0, this.isLuxonDuration = !0;
  }
  static fromMillis(e, n) {
    return N.fromObject({ milliseconds: e }, n);
  }
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new pe(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new N({
      values: Yr(e, N.normalizeUnit),
      loc: Z.fromObject(n),
      conversionAccuracy: n.conversionAccuracy
    });
  }
  static fromDurationLike(e) {
    if (Tt(e))
      return N.fromMillis(e);
    if (N.isDuration(e))
      return e;
    if (typeof e == "object")
      return N.fromObject(e);
    throw new pe(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  static fromISO(e, n) {
    const [r] = W0(e);
    return r ? N.fromObject(r, n) : N.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = j0(e);
    return r ? N.fromObject(r, n) : N.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new pe("need to specify a reason the Duration is invalid");
    const r = e instanceof Ae ? e : new Ae(e, n);
    if (X.throwOnInvalid)
      throw new RS(r);
    return new N({ invalid: r });
  }
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n)
      throw new mf(e);
    return n;
  }
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e, n = {}) {
    const r = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? ue.create(this.loc, r).formatDurationFromString(this, e) : Q0;
  }
  toHuman(e = {}) {
    const n = vt.map((r) => {
      const s = this.values[r];
      return I(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(s);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(n);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += ma(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    if (n < 0 || n >= 864e5)
      return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let s = e.format === "basic" ? "hhmm" : "hh:mm";
    (!e.suppressSeconds || r.seconds !== 0 || r.milliseconds !== 0) && (s += e.format === "basic" ? "ss" : ":ss", (!e.suppressMilliseconds || r.milliseconds !== 0) && (s += ".SSS"));
    let i = r.toFormat(s);
    return e.includePrefix && (i = "T" + i), i;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = N.fromDurationLike(e), r = {};
    for (const s of vt)
      (qt(n.values, s) || qt(this.values, s)) && (r[s] = n.get(s) + this.get(s));
    return gt(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = N.fromDurationLike(e);
    return this.plus(n.negate());
  }
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = Ff(e(this.values[r], r));
    return gt(this, { values: n }, !0);
  }
  get(e) {
    return this[N.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...Yr(e, N.normalizeUnit) };
    return gt(this, { values: n });
  }
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: n }), i = { loc: s };
    return r && (i.conversionAccuracy = r), gt(this, i);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return tT(this.matrix, e), gt(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => N.normalizeUnit(a));
    const n = {}, r = {}, s = this.toObject();
    let i;
    for (const a of vt)
      if (e.indexOf(a) >= 0) {
        i = a;
        let o = 0;
        for (const c in r)
          o += this.matrix[c][a] * r[c], r[c] = 0;
        Tt(s[a]) && (o += s[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
        for (const c in s)
          vt.indexOf(c) > vt.indexOf(a) && Jf(this.matrix, s, c, n, a);
      } else
        Tt(s[a]) && (r[a] = s[a]);
    for (const a in r)
      r[a] !== 0 && (n[i] += a === i ? r[a] : r[a] / this.matrix[i][a]);
    return gt(this, { values: n }, !0).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return gt(this, { values: e }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of vt)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const ln = "Invalid Interval";
function nT(t, e) {
  return !t || !t.isValid ? q.invalid("missing or invalid start") : !e || !e.isValid ? q.invalid("missing or invalid end") : e < t ? q.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class q {
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(e, n = null) {
    if (!e)
      throw new pe("need to specify a reason the Interval is invalid");
    const r = e instanceof Ae ? e : new Ae(e, n);
    if (X.throwOnInvalid)
      throw new xS(r);
    return new q({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = dn(e), s = dn(n), i = nT(r, s);
    return i ?? new q({
      start: r,
      end: s
    });
  }
  static after(e, n) {
    const r = N.fromDurationLike(n), s = dn(e);
    return q.fromDateTimes(s, s.plus(r));
  }
  static before(e, n) {
    const r = N.fromDurationLike(n), s = dn(e);
    return q.fromDateTimes(s.minus(r), s);
  }
  static fromISO(e, n) {
    const [r, s] = (e || "").split("/", 2);
    if (r && s) {
      let i, a;
      try {
        i = R.fromISO(r, n), a = i.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = R.fromISO(s, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return q.fromDateTimes(i, o);
      if (a) {
        const c = N.fromISO(s, n);
        if (c.isValid)
          return q.after(i, c);
      } else if (l) {
        const c = N.fromISO(r, n);
        if (c.isValid)
          return q.before(o, c);
      }
    }
    return q.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e), r = this.end.startOf(e);
    return Math.floor(r.diff(n, e).get(e)) + 1;
  }
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  set({ start: e, end: n } = {}) {
    return this.isValid ? q.fromDateTimes(e || this.s, n || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const n = e.map(dn).filter((a) => this.contains(a)).sort(), r = [];
    let { s } = this, i = 0;
    for (; s < this.e; ) {
      const a = n[i] || this.e, o = +a > +this.e ? this.e : a;
      r.push(q.fromDateTimes(s, o)), s = o, i += 1;
    }
    return r;
  }
  splitBy(e) {
    const n = N.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, i;
    const a = [];
    for (; r < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * s));
      i = +o > +this.e ? this.e : o, a.push(q.fromDateTimes(r, i)), r = i, s += 1;
    }
    return a;
  }
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  intersection(e) {
    if (!this.isValid)
      return this;
    const n = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return n >= r ? null : q.fromDateTimes(n, r);
  }
  union(e) {
    if (!this.isValid)
      return this;
    const n = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return q.fromDateTimes(n, r);
  }
  static merge(e) {
    const [n, r] = e.sort((s, i) => s.s - i.s).reduce(
      ([s, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a] : [s, a],
      [[], null]
    );
    return r && n.push(r), n;
  }
  static xor(e) {
    let n = null, r = 0;
    const s = [], i = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...i), o = a.sort((l, c) => l.time - c.time);
    for (const l of o)
      r += l.type === "s" ? 1 : -1, r === 1 ? n = l.time : (n && +n != +l.time && s.push(q.fromDateTimes(n, l.time)), n = null);
    return q.merge(s);
  }
  difference(...e) {
    return q.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : ln;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : ln;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : ln;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : ln;
  }
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : ln;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : N.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return q.fromDateTimes(e(this.s), e(this.e));
  }
}
class cr {
  static hasDST(e = X.defaultZone) {
    const n = R.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return ze.isValidZone(e);
  }
  static normalizeZone(e) {
    return Xe(e, X.defaultZone);
  }
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || Z.create(n, r, i)).months(e);
  }
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || Z.create(n, r, i)).months(e, !0);
  }
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || Z.create(n, r, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || Z.create(n, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Z.create(e).meridiems();
  }
  static eras(e = "short", { locale: n = null } = {}) {
    return Z.create(n, null, "gregory").eras(e);
  }
  static features() {
    return { relative: Nf() };
  }
}
function Wl(t, e) {
  const n = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(N.fromMillis(r).as("days"));
}
function rT(t, e, n) {
  const r = [
    ["years", (o, l) => l.year - o.year],
    ["quarters", (o, l) => l.quarter - o.quarter],
    ["months", (o, l) => l.month - o.month + (l.year - o.year) * 12],
    [
      "weeks",
      (o, l) => {
        const c = Wl(o, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Wl]
  ], s = {};
  let i, a;
  for (const [o, l] of r)
    if (n.indexOf(o) >= 0) {
      i = o;
      let c = l(t, e);
      a = t.plus({ [o]: c }), a > e ? (t = t.plus({ [o]: c - 1 }), c -= 1) : t = a, s[o] = c;
    }
  return [t, s, a, i];
}
function sT(t, e, n, r) {
  let [s, i, a, o] = rT(t, e, n);
  const l = e - s, c = n.filter(
    (h) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(h) >= 0
  );
  c.length === 0 && (a < e && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + l / (a - s)));
  const u = N.fromObject(i, r);
  return c.length > 0 ? N.fromMillis(l, r).shiftTo(...c).plus(u) : u;
}
const _a = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, zl = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, iT = _a.hanidec.replace(/[\[|\]]/g, "").split("");
function aT(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(_a.hanidec) !== -1)
        e += iT.indexOf(t[n]);
      else
        for (const s in zl) {
          const [i, a] = zl[s];
          r >= i && r <= a && (e += r - i);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Ee({ numberingSystem: t }, e = "") {
  return new RegExp(`${_a[t || "latn"]}${e}`);
}
const oT = "missing Intl.DateTimeFormat.formatToParts support";
function V(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(aT(n)) };
}
const lT = String.fromCharCode(160), Kf = `[ ${lT}]`, Xf = new RegExp(Kf, "g");
function uT(t) {
  return t.replace(/\./g, "\\.?").replace(Xf, Kf);
}
function jl(t) {
  return t.replace(/\./g, "").replace(Xf, " ").toLowerCase();
}
function Se(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(uT).join("|")),
    deser: ([n]) => t.findIndex((r) => jl(n) === jl(r)) + e
  };
}
function Zl(t, e) {
  return { regex: t, deser: ([, n, r]) => os(n, r), groups: e };
}
function Vs(t) {
  return { regex: t, deser: ([e]) => e };
}
function cT(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function dT(t, e) {
  const n = Ee(e), r = Ee(e, "{2}"), s = Ee(e, "{3}"), i = Ee(e, "{4}"), a = Ee(e, "{6}"), o = Ee(e, "{1,2}"), l = Ee(e, "{1,3}"), c = Ee(e, "{1,6}"), u = Ee(e, "{1,9}"), h = Ee(e, "{2,4}"), f = Ee(e, "{4,6}"), d = (p) => ({ regex: RegExp(cT(p.val)), deser: ([b]) => b, literal: !0 }), v = ((p) => {
    if (t.literal)
      return d(p);
    switch (p.val) {
      case "G":
        return Se(e.eras("short", !1), 0);
      case "GG":
        return Se(e.eras("long", !1), 0);
      case "y":
        return V(c);
      case "yy":
        return V(h, bi);
      case "yyyy":
        return V(i);
      case "yyyyy":
        return V(f);
      case "yyyyyy":
        return V(a);
      case "M":
        return V(o);
      case "MM":
        return V(r);
      case "MMM":
        return Se(e.months("short", !0, !1), 1);
      case "MMMM":
        return Se(e.months("long", !0, !1), 1);
      case "L":
        return V(o);
      case "LL":
        return V(r);
      case "LLL":
        return Se(e.months("short", !1, !1), 1);
      case "LLLL":
        return Se(e.months("long", !1, !1), 1);
      case "d":
        return V(o);
      case "dd":
        return V(r);
      case "o":
        return V(l);
      case "ooo":
        return V(s);
      case "HH":
        return V(r);
      case "H":
        return V(o);
      case "hh":
        return V(r);
      case "h":
        return V(o);
      case "mm":
        return V(r);
      case "m":
        return V(o);
      case "q":
        return V(o);
      case "qq":
        return V(r);
      case "s":
        return V(o);
      case "ss":
        return V(r);
      case "S":
        return V(l);
      case "SSS":
        return V(s);
      case "u":
        return Vs(u);
      case "uu":
        return Vs(o);
      case "uuu":
        return V(n);
      case "a":
        return Se(e.meridiems(), 0);
      case "kkkk":
        return V(i);
      case "kk":
        return V(h, bi);
      case "W":
        return V(o);
      case "WW":
        return V(r);
      case "E":
      case "c":
        return V(n);
      case "EEE":
        return Se(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return Se(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return Se(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return Se(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Zl(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Zl(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return Vs(/[a-z_+-/]{1,256}?/i);
      default:
        return d(p);
    }
  })(t) || {
    invalidReason: oT
  };
  return v.token = t, v;
}
const fT = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function hT(t, e, n) {
  const { type: r, value: s } = t;
  if (r === "literal")
    return {
      literal: !0,
      val: s
    };
  const i = n[r];
  let a = fT[r];
  if (typeof a == "object" && (a = a[i]), a)
    return {
      literal: !1,
      val: a
    };
}
function mT(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function gT(t, e, n) {
  const r = t.match(e);
  if (r) {
    const s = {};
    let i = 1;
    for (const a in n)
      if (qt(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(r.slice(i, i + l))), i += l;
      }
    return [r, s];
  } else
    return [r, {}];
}
function pT(t) {
  const e = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, r;
  return I(t.z) || (n = ze.create(t.z)), I(t.Z) || (n || (n = new ie(t.Z)), r = t.Z), I(t.q) || (t.M = (t.q - 1) * 3 + 1), I(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), I(t.u) || (t.S = ha(t.u)), [Object.keys(t).reduce((i, a) => {
    const o = e(a);
    return o && (i[o] = t[a]), i;
  }, {}), n, r];
}
let Us = null;
function yT() {
  return Us || (Us = R.fromMillis(1555555555555)), Us;
}
function vT(t, e) {
  if (t.literal)
    return t;
  const n = ue.macroTokenToFormatOpts(t.val);
  if (!n)
    return t;
  const i = ue.create(e, n).formatDateTimeParts(yT()).map((a) => hT(a, e, n));
  return i.includes(void 0) ? t : i;
}
function bT(t, e) {
  return Array.prototype.concat(...t.map((n) => vT(n, e)));
}
function eh(t, e, n) {
  const r = bT(ue.parseFormat(n), t), s = r.map((a) => dT(a, t)), i = s.find((a) => a.invalidReason);
  if (i)
    return { input: e, tokens: r, invalidReason: i.invalidReason };
  {
    const [a, o] = mT(s), l = RegExp(a, "i"), [c, u] = gT(e, l, o), [h, f, d] = u ? pT(u) : [null, null, void 0];
    if (qt(u, "a") && qt(u, "H"))
      throw new mn(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: c, matches: u, result: h, zone: f, specificOffset: d };
  }
}
function _T(t, e, n) {
  const { result: r, zone: s, specificOffset: i, invalidReason: a } = eh(t, e, n);
  return [r, s, i, a];
}
const th = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], nh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ve(t, e) {
  return new Ae(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function rh(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function sh(t, e, n) {
  return n + (Pn(t) ? nh : th)[e - 1];
}
function ih(t, e) {
  const n = Pn(t) ? nh : th, r = n.findIndex((i) => i < e), s = e - n[r];
  return { month: r + 1, day: s };
}
function Ti(t) {
  const { year: e, month: n, day: r } = t, s = sh(e, n, r), i = rh(e, n, r);
  let a = Math.floor((s - i + 10) / 7), o;
  return a < 1 ? (o = e - 1, a = Gr(o)) : a > Gr(e) ? (o = e + 1, a = 1) : o = e, { weekYear: o, weekNumber: a, weekday: i, ...ls(t) };
}
function ql(t) {
  const { weekYear: e, weekNumber: n, weekday: r } = t, s = rh(e, 1, 4), i = En(e);
  let a = n * 7 + r - s - 3, o;
  a < 1 ? (o = e - 1, a += En(o)) : a > i ? (o = e + 1, a -= En(e)) : o = e;
  const { month: l, day: c } = ih(o, a);
  return { year: o, month: l, day: c, ...ls(t) };
}
function Bs(t) {
  const { year: e, month: n, day: r } = t, s = sh(e, n, r);
  return { year: e, ordinal: s, ...ls(t) };
}
function Gl(t) {
  const { year: e, ordinal: n } = t, { month: r, day: s } = ih(e, n);
  return { year: e, month: r, day: s, ...ls(t) };
}
function wT(t) {
  const e = as(t.weekYear), n = Pe(t.weekNumber, 1, Gr(t.weekYear)), r = Pe(t.weekday, 1, 7);
  return e ? n ? r ? !1 : ve("weekday", t.weekday) : ve("week", t.week) : ve("weekYear", t.weekYear);
}
function ET(t) {
  const e = as(t.year), n = Pe(t.ordinal, 1, En(t.year));
  return e ? n ? !1 : ve("ordinal", t.ordinal) : ve("year", t.year);
}
function ah(t) {
  const e = as(t.year), n = Pe(t.month, 1, 12), r = Pe(t.day, 1, qr(t.year, t.month));
  return e ? n ? r ? !1 : ve("day", t.day) : ve("month", t.month) : ve("year", t.year);
}
function oh(t) {
  const { hour: e, minute: n, second: r, millisecond: s } = t, i = Pe(e, 0, 23) || e === 24 && n === 0 && r === 0 && s === 0, a = Pe(n, 0, 59), o = Pe(r, 0, 59), l = Pe(s, 0, 999);
  return i ? a ? o ? l ? !1 : ve("millisecond", s) : ve("second", r) : ve("minute", n) : ve("hour", e);
}
const Ws = "Invalid DateTime", Yl = 864e13;
function dr(t) {
  return new Ae("unsupported zone", `the zone "${t.name}" is not supported`);
}
function zs(t) {
  return t.weekData === null && (t.weekData = Ti(t.c)), t.weekData;
}
function un(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new R({ ...n, ...e, old: n });
}
function lh(t, e, n) {
  let r = t - e * 60 * 1e3;
  const s = n.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const i = n.offset(r);
  return s === i ? [r, s] : [t - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function Ql(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function Tr(t, e, n) {
  return lh(ga(t), e, n);
}
function Jl(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), s = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = {
    ...t.c,
    year: r,
    month: s,
    day: Math.min(t.c.day, qr(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = N.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = ga(i);
  let [l, c] = lh(o, n, t.zone);
  return a !== 0 && (l += a, c = t.zone.offset(l)), { ts: l, o: c };
}
function cn(t, e, n, r, s, i) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0) {
    const l = e || o, c = R.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: i
    });
    return a ? c : c.setZone(o);
  } else
    return R.invalid(
      new Ae("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function fr(t, e, n = !0) {
  return t.isValid ? ue.create(Z.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function js(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += K(t.c.year, n ? 6 : 4), e ? (r += "-", r += K(t.c.month), r += "-", r += K(t.c.day)) : (r += K(t.c.month), r += K(t.c.day)), r;
}
function Kl(t, e, n, r, s, i) {
  let a = K(t.c.hour);
  return e ? (a += ":", a += K(t.c.minute), (t.c.second !== 0 || !n) && (a += ":")) : a += K(t.c.minute), (t.c.second !== 0 || !n) && (a += K(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += K(t.c.millisecond, 3))), s && (t.isOffsetFixed && t.offset === 0 && !i ? a += "Z" : t.o < 0 ? (a += "-", a += K(Math.trunc(-t.o / 60)), a += ":", a += K(Math.trunc(-t.o % 60))) : (a += "+", a += K(Math.trunc(t.o / 60)), a += ":", a += K(Math.trunc(t.o % 60)))), i && (a += "[" + t.zone.ianaName + "]"), a;
}
const uh = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ST = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, TT = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ch = ["year", "month", "day", "hour", "minute", "second", "millisecond"], DT = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], CT = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Xl(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new mf(t);
  return e;
}
function eu(t, e) {
  const n = Xe(e.zone, X.defaultZone), r = Z.fromObject(e), s = X.now();
  let i, a;
  if (I(t.year))
    i = s;
  else {
    for (const c of ch)
      I(t[c]) && (t[c] = uh[c]);
    const o = ah(t) || oh(t);
    if (o)
      return R.invalid(o);
    const l = n.offset(s);
    [i, a] = Tr(t, l, n);
  }
  return new R({ ts: i, zone: n, loc: r, o: a });
}
function tu(t, e, n) {
  const r = I(n.round) ? !0 : n.round, s = (a, o) => (a = ma(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), i = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return s(i(n.unit), n.unit);
  for (const a of n.units) {
    const o = i(a);
    if (Math.abs(o) >= 1)
      return s(o, a);
  }
  return s(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function nu(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class R {
  constructor(e) {
    const n = e.zone || X.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Ae("invalid input") : null) || (n.isValid ? null : dr(n));
    this.ts = I(e.ts) ? X.now() : e.ts;
    let s = null, i = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [s, i] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        s = Ql(this.ts, o), r = Number.isNaN(s.year) ? new Ae("invalid input") : null, s = r ? null : s, i = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Z.create(), this.invalid = r, this.weekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0;
  }
  static now() {
    return new R({});
  }
  static local() {
    const [e, n] = nu(arguments), [r, s, i, a, o, l, c] = n;
    return eu({ year: r, month: s, day: i, hour: a, minute: o, second: l, millisecond: c }, e);
  }
  static utc() {
    const [e, n] = nu(arguments), [r, s, i, a, o, l, c] = n;
    return e.zone = ie.utcInstance, eu({ year: r, month: s, day: i, hour: a, minute: o, second: l, millisecond: c }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = NS(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return R.invalid("invalid input");
    const s = Xe(n.zone, X.defaultZone);
    return s.isValid ? new R({
      ts: r,
      zone: s,
      loc: Z.fromObject(n)
    }) : R.invalid(dr(s));
  }
  static fromMillis(e, n = {}) {
    if (Tt(e))
      return e < -Yl || e > Yl ? R.invalid("Timestamp out of range") : new R({
        ts: e,
        zone: Xe(n.zone, X.defaultZone),
        loc: Z.fromObject(n)
      });
    throw new pe(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (Tt(e))
      return new R({
        ts: e * 1e3,
        zone: Xe(n.zone, X.defaultZone),
        loc: Z.fromObject(n)
      });
    throw new pe("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = Xe(n.zone, X.defaultZone);
    if (!r.isValid)
      return R.invalid(dr(r));
    const s = X.now(), i = I(n.specificOffset) ? r.offset(s) : n.specificOffset, a = Yr(e, Xl), o = !I(a.ordinal), l = !I(a.year), c = !I(a.month) || !I(a.day), u = l || c, h = a.weekYear || a.weekNumber, f = Z.fromObject(n);
    if ((u || o) && h)
      throw new mn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (c && o)
      throw new mn("Can't mix ordinal dates with month/day");
    const d = h || a.weekday && !u;
    let g, v, p = Ql(s, i);
    d ? (g = DT, v = ST, p = Ti(p)) : o ? (g = CT, v = TT, p = Bs(p)) : (g = ch, v = uh);
    let b = !1;
    for (const S of g) {
      const te = a[S];
      I(te) ? b ? a[S] = v[S] : a[S] = p[S] : b = !0;
    }
    const E = d ? wT(a) : o ? ET(a) : ah(a), A = E || oh(a);
    if (A)
      return R.invalid(A);
    const C = d ? ql(a) : o ? Gl(a) : a, [B, O] = Tr(C, i, r), P = new R({
      ts: B,
      zone: r,
      o: O,
      loc: f
    });
    return a.weekday && u && e.weekday !== P.weekday ? R.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${P.toISO()}`
    ) : P;
  }
  static fromISO(e, n = {}) {
    const [r, s] = V0(e);
    return cn(r, s, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, s] = U0(e);
    return cn(r, s, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, s] = B0(e);
    return cn(r, s, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (I(e) || I(n))
      throw new pe("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: i = null } = r, a = Z.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    }), [o, l, c, u] = _T(a, e, n);
    return u ? R.invalid(u) : cn(o, l, r, `format ${n}`, e, c);
  }
  static fromString(e, n, r = {}) {
    return R.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, s] = Y0(e);
    return cn(r, s, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new pe("need to specify a reason the DateTime is invalid");
    const r = e instanceof Ae ? e : new Ae(e, n);
    if (X.throwOnInvalid)
      throw new kS(r);
    return new R({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  get(e) {
    return this[e];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? zs(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? zs(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? zs(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Bs(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? cr.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? cr.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? cr.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? cr.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return Pn(this.year);
  }
  get daysInMonth() {
    return qr(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? En(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Gr(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: s } = ue.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: s };
  }
  toUTC(e = 0, n = {}) {
    return this.setZone(ie.instance(e), n);
  }
  toLocal() {
    return this.setZone(X.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = Xe(e, X.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (n || r) {
        const i = e.offset(this.ts), a = this.toObject();
        [s] = Tr(a, i, e);
      }
      return un(this, { ts: s, zone: e });
    } else
      return R.invalid(dr(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return un(this, { loc: s });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = Yr(e, Xl), r = !I(n.weekYear) || !I(n.weekNumber) || !I(n.weekday), s = !I(n.ordinal), i = !I(n.year), a = !I(n.month) || !I(n.day), o = i || a, l = n.weekYear || n.weekNumber;
    if ((o || s) && l)
      throw new mn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && s)
      throw new mn("Can't mix ordinal dates with month/day");
    let c;
    r ? c = ql({ ...Ti(this.c), ...n }) : I(n.ordinal) ? (c = { ...this.toObject(), ...n }, I(n.day) && (c.day = Math.min(qr(c.year, c.month), c.day))) : c = Gl({ ...Bs(this.c), ...n });
    const [u, h] = Tr(c, this.o, this.zone);
    return un(this, { ts: u, o: h });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = N.fromDurationLike(e);
    return un(this, Jl(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = N.fromDurationLike(e).negate();
    return un(this, Jl(this, n));
  }
  startOf(e) {
    if (!this.isValid)
      return this;
    const n = {}, r = N.normalizeUnit(e);
    switch (r) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (r === "weeks" && (n.weekday = 1), r === "quarters") {
      const s = Math.ceil(this.month / 3);
      n.month = (s - 1) * 3 + 1;
    }
    return this.set(n);
  }
  endOf(e) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this;
  }
  toFormat(e, n = {}) {
    return this.isValid ? ue.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ws;
  }
  toLocaleString(e = vi, n = {}) {
    return this.isValid ? ue.create(this.loc.clone(n), e).formatDateTime(this) : Ws;
  }
  toLocaleParts(e = {}) {
    return this.isValid ? ue.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
    extendedZone: i = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let o = js(this, a);
    return o += "T", o += Kl(this, a, n, r, s, i), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? js(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return fr(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    extendedZone: i = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + Kl(
      this,
      a === "extended",
      n,
      e,
      r,
      i
    ) : null;
  }
  toRFC2822() {
    return fr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return fr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? js(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (n || e) && (r && (s += " "), n ? s += "z" : e && (s += "ZZ")), fr(this, s, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Ws;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return N.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, i = $S(n).map(N.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, c = sT(o, l, i, s);
    return a ? c.negate() : c;
  }
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(R.now(), e, n);
  }
  until(e) {
    return this.isValid ? q.fromDateTimes(this, e) : this;
  }
  hasSame(e, n) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(n) <= r && r <= s.endOf(n);
  }
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || R.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, i = void 0), tu(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: s,
      unit: i
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? tu(e.base || R.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(R.isDateTime))
      throw new pe("min requires all arguments be DateTimes");
    return Il(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(R.isDateTime))
      throw new pe("max requires all arguments be DateTimes");
    return Il(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: s = null, numberingSystem: i = null } = r, a = Z.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return eh(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return R.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return vi;
  }
  static get DATE_MED() {
    return gf;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return OS;
  }
  static get DATE_FULL() {
    return pf;
  }
  static get DATE_HUGE() {
    return yf;
  }
  static get TIME_SIMPLE() {
    return vf;
  }
  static get TIME_WITH_SECONDS() {
    return bf;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return _f;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return wf;
  }
  static get TIME_24_SIMPLE() {
    return Ef;
  }
  static get TIME_24_WITH_SECONDS() {
    return Sf;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Tf;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return Df;
  }
  static get DATETIME_SHORT() {
    return Cf;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Af;
  }
  static get DATETIME_MED() {
    return kf;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return xf;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return MS;
  }
  static get DATETIME_FULL() {
    return Rf;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return Of;
  }
  static get DATETIME_HUGE() {
    return Mf;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return If;
  }
}
function dn(t) {
  if (R.isDateTime(t))
    return t;
  if (t && t.valueOf && Tt(t.valueOf()))
    return R.fromJSDate(t);
  if (t && typeof t == "object")
    return R.fromObject(t);
  throw new pe(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function AT(t) {
  return [
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  ];
}
function Dr(t, e, n) {
  return R.fromObject({
    year: t[0],
    month: t[1] + 1,
    day: t[2],
    hour: t[3],
    minute: t[4],
    second: t[5],
    millisecond: t[6]
  }, {
    locale: n,
    zone: e
  });
}
class kT extends mS {
  offsetForArray(e) {
    return Dr(e, this.timeZoneName).offset;
  }
  timestampToArray(e) {
    return AT(R.fromMillis(e, {
      zone: this.timeZoneName
    }));
  }
}
function xT(t, e) {
  let n = dh(t);
  if (e.end) {
    let r = Dr(e.start.array, e.timeZone, e.localeCodes[0]), s = Dr(e.end.array, e.timeZone, e.localeCodes[0]);
    return Di(n, r.toFormat.bind(r), s.toFormat.bind(s), e.defaultSeparator);
  }
  return Dr(e.date.array, e.timeZone, e.localeCodes[0]).toFormat(n.whole);
}
function dh(t) {
  let e = t.match(/^(.*?)\{(.*)\}(.*)$/);
  if (e) {
    let n = dh(e[2]);
    return {
      head: e[1],
      middle: n,
      tail: e[3],
      whole: e[1] + n.whole + e[3]
    };
  }
  return {
    head: null,
    middle: null,
    tail: null,
    whole: t
  };
}
function Di(t, e, n, r) {
  if (t.middle) {
    let a = e(t.head), o = Di(t.middle, e, n, r), l = e(t.tail), c = n(t.head), u = Di(t.middle, e, n, r), h = n(t.tail);
    if (a === c && l === h)
      return a + (o === u ? o : o + r + u) + l;
  }
  let s = e(t.whole), i = n(t.whole);
  return s === i ? s : s + r + i;
}
var RT = xt({
  name: "@fullcalendar/luxon2",
  cmdFormatter: xT,
  namedTimeZonedImpl: kT
});
function fh() {
  return {
    de: "de",
    en: "en",
    fr: "fr",
    es: "es",
    cs: "cs",
    cn: "zh"
  }[(navigator.language || navigator.userLanguage).split("-")[0]] || "de";
}
function ne(t) {
  var e, n;
  return (n = (e = document.getElementById(`ed_wp_${t}`)) == null ? void 0 : e.innerText) == null ? void 0 : n.trim();
}
function OT(t) {
  return {
    normal: {
      iconName: "ok-circle text-primary",
      offerStatusText: ne("N7520"),
      secondButtonText: ne("N4929"),
      secondButtonStatus: "success"
    },
    guaranteed: {
      iconName: "ok-sign text-success",
      offerStatusText: ne("N3832"),
      secondButtonText: ne("N4929"),
      secondButtonStatus: "success"
    },
    alreadystarted: {
      iconName: "exclamation-sign text-warning",
      offerStatusText: ne("N850"),
      secondButtonText: ne("N4929"),
      secondButtonStatus: "success"
    },
    waitinglist: {
      iconName: "hourglass text-info",
      offerStatusText: ne("N13104"),
      secondButtonText: ne("N63385"),
      secondButtonStatus: "warning"
    },
    full: {
      iconName: "ban-circle text-danger",
      offerStatusText: ne("N72446")
    }
  }[t];
}
const Ci = {
  offers: {}
}, wt = [
  {
    keyEdoobox: "month",
    keyFullCalendar: "dayGridMonth"
  },
  {
    keyEdoobox: "agendaWeek",
    keyFullCalendar: "timeGridWeek"
  },
  {
    keyEdoobox: "agendaDay",
    keyFullCalendar: "timeGridDay"
  },
  {
    keyEdoobox: "listMonth",
    keyFullCalendar: "listWeek"
  }
], Ai = {
  v1: wt[0].keyFullCalendar,
  v2: wt[1].keyFullCalendar,
  v3: wt[2].keyFullCalendar,
  v4: wt[3].keyFullCalendar
};
function MT(t) {
  var e = document.getElementById("calendar"), n = new a_(e, {
    allDaySlot: !1,
    aspectRatio: 1.75,
    expandRows: !0,
    plugins: [
      O_,
      pw,
      Rw,
      RT
    ],
    buttonText: {
      today: ne("N88771"),
      month: ne("N33644"),
      week: ne("N17274"),
      day: ne("N6351"),
      list: ne("N91117")
    },
    dayMaxEventRows: 4,
    headerToolbar: {
      start: "prev,next today",
      center: "title",
      end: PT().map((r) => r.keyFullCalendar).join(",")
    },
    editable: !1,
    eventTimeFormat: "HH:mm",
    firstDay: 1,
    initialDate: NT(),
    initialView: IT(),
    locale: fh(),
    moreLinkText: ne("N39246"),
    navLinks: !0,
    slotLabelFormat: {
      hour: "2-digit",
      hour12: !1,
      minute: "2-digit"
    },
    themeSystem: "bootstrap3",
    weekends: !!+e.dataset.weekend,
    allDayDidMount: Zs,
    dayCellDidMount: Zs,
    events: HT,
    eventDidMount: function(r) {
      var s = r.el, i = r.event.extendedProps.offerid, a = Ci.offers[i], {
        iconName: o,
        offerStatusText: l,
        secondButtonStatus: c,
        secondButtonText: u
      } = OT(a.booking_status), h = t('<span class="offer_status glyphicon glyphicon-' + o + '" style="margin-right: 4px"></span>');
      t(s).find(".fc-daygrid-event-dot").replaceWith(h), t(s).addClass("edevents_" + i), t(s).addClass("edevents"), s.title = r.event.title, t(".edevents").popover({
        placement: "top",
        trigger: "click",
        container: ".edoobox-plugin",
        content: function() {
          var f = '<div style="max-width: 300px"><span class="close">&times;</span>';
          return a.image && (f += "<div>", f += '<div><img src="' + a.image + '" class="img-rounded img-responsive"></div>', f += "</div>"), f += "<div>", f += '<dl class="dl-horizontal ed-cal-dl">', a.shortdescription.length > 4 && (f += '<dt><span class="glyphicon glyphicon-info-sign"></span></dt><dd>' + a.shortdescription + "</dd>"), f += '<dt><span class="glyphicon glyphicon-calendar"></span></dt>', k.fromISO(a.start_date).toFormat("LLLL d, yyyy") == k.fromISO(a.end_date).toFormat("LLLL d, yyyy") ? f += "<dd>" + k.fromISO(a.start_date).toFormat("LLLL d, yyyy t") + " – " + k.fromISO(a.end_date).toFormat("HH:mm") + "</dd>" : f += "<dd>" + k.fromISO(a.start_date).toFormat("LLLL d, yyyy t") + " – " + k.fromISO(a.end_date).toFormat("LLLL d, yyyy t") + "</dd>", f += '<dt><span class="offer_status glyphicon glyphicon-' + o + '"></span></dt><dd>' + l + "</dd></dl>", f += '<div class="ed-cal-btns-grp"><a class="ed-cal-btn btn btn-info" href="' + a.offer_details_url + '">' + ne("N3238") + "</a>", u && (f += '<a class="ed-cal-btn btn btn-' + c + '" href="' + a.booking_start_url + '">' + u + "</a></div>"), f += "</div></div>", f;
        },
        html: !0
      }), t(".edevents").on("click", function() {
        t(".edevents").not(this).popover("hide");
      }), t(".edevents").on("shown.bs.popover", function(f) {
        t(".close").on("click", function(d) {
          t(".edoobox-plugin .popover").remove();
        });
      });
    },
    viewDidMount: Zs
  });
  n.render();
}
function hh(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function IT() {
  return Ai[rc("edview")] || LT() || wt[0].keyFullCalendar;
}
function NT() {
  const e = FT() || new Date(rc("edstart") || Date.now());
  return hh(e) ? e : new Date();
}
function $T(t) {
  return Object.keys(Ai).find((e) => Ai[e] === t);
}
function FT() {
  var r, s, i;
  const t = (s = (r = us("#calendar")) == null ? void 0 : r.dataset) == null ? void 0 : s.events, e = (i = new URLSearchParams(t).get("edstart")) == null ? void 0 : i.split("?")[0], n = new Date(e);
  return hh(n) ? new Date(n) : void 0;
}
function HT(t) {
  const e = Sg({
    start: t.start.toISOString(),
    end: t.end.toISOString()
  });
  return fetch(us().dataset.events + e).then((n) => n.json()).then((n) => {
    var r;
    return Ci.offers = { ...Ci.offers || {}, ...n.offers || {} }, (r = Object.values(n.rsl)) == null ? void 0 : r.map((s) => ({
      id: s.id,
      classNames: [s.id],
      title: n.offers[s.offerid].name,
      start: s.start,
      end: s.end,
      borderColor: s.color,
      allDay: !1,
      offerid: s.offerid
    }));
  });
}
function Zs(t) {
  const e = k.fromJSDate(t.view.currentStart).toFormat("yyyy-LL-dd"), n = $T(t.view.type);
  qa("edstart", e), qa("edview", n), document.querySelectorAll(".popover").forEach((r) => r.remove());
}
function us(t = "#calendar") {
  return document.querySelector(t);
}
function PT() {
  var e, n;
  const t = (n = (e = us()) == null ? void 0 : e.dataset) == null ? void 0 : n.views;
  return wt.filter((r) => t.includes(r.keyEdoobox));
}
function LT() {
  var e, n, r;
  const t = ((n = (e = us()) == null ? void 0 : e.dataset) == null ? void 0 : n.defaultview) || "";
  return ((r = wt.find((s) => s.keyEdoobox === t)) == null ? void 0 : r.keyFullCalendar) || "";
}
function mh(t) {
  var r;
  const e = document.querySelector(".utable1");
  ((r = e == null ? void 0 : e.dataset) == null ? void 0 : r.responsive) === "1" && UT(t);
}
function VT(t) {
  document.querySelectorAll(".utable1 tbody tr.angebot_row:not(.btn)").forEach((n) => n.addEventListener("click", function() {
    const r = document.querySelectorAll(".utable1 tbody tr.wgd_tableview_beschr"), s = document.querySelectorAll(".utable1 tbody tr.angebot_row, .utable1 tbody tr.wgd_tableview_beschr");
    r.forEach((i) => i.style.display = "none"), s.forEach((i) => i.classList.remove("selected")), n.classList.remove("selected"), n.classList.add("selected"), this.nextElementSibling.classList.remove("selected"), this.nextElementSibling.style.display = "table-row";
  })), mh(t);
}
function UT(t) {
  t(".utable1").stacktable({ headIndex: t(".utable1").data("nameindex") }), t(".utable1.small-only .wgd_tableview_beschr").hide();
}
function BT(t, e) {
  if (!WT())
    return;
  document.querySelectorAll(`${t} a[href*=".edoobox.com/"]`).forEach((r) => r.addEventListener("click", function(s) {
    s.preventDefault(), e(r.closest(".edoobox-plugin"), r.getAttribute("href"));
  }));
}
function WT(t) {
  var n;
  const e = document.querySelector(".edoobox-plugin");
  return ((n = e == null ? void 0 : e.dataset) == null ? void 0 : n.noframe) === "0";
}
function gh(t) {
  !t || (qs(t), setTimeout(() => qs(t), 50), setTimeout(() => qs(t), 150));
}
function qs(t) {
  try {
    window.parent.postMessage(["setheight", document.body.clientHeight, t], "*");
  } catch {
  }
}
function zT(t, e) {
  var n;
  console.log("alektionen"), t(".alektionen").first().data("responsive") == "1" && (t(".alektionen").stacktable(), gh((n = e == null ? void 0 : e.data) == null ? void 0 : n.id));
}
function jT(t) {
  let e = 0;
  t(".sameheight").each(function() {
    var n = t(this).innerHeight();
    n > e && (e = n);
  }), t(".sameheight").find(".thumbnail").css("min-height", e + "px");
}
function ru(t, e) {
  return {
    alektionen: () => zT(t, e),
    facebook: bh,
    googlemap: _h,
    sameHeight: () => jT(t),
    social_xing: Dh,
    social_googleplus: Ch,
    ucalendar: () => MT(t),
    utable: () => mh(t),
    utableclick: () => VT(t)
  };
}
Q.defaultLocale = fh();
if (typeof ki > "u")
  var ki = !1;
(function(e) {
  var n = !1;
  const r = {
    data: {
      id: "",
      autoh3: 0,
      interval1: 0,
      t2: 0
    },
    set: function(s, i) {
      r.data.id = "ediframe" + Math.round(new Date().getTime());
      var a = '<iframe id="' + r.data.id + '" src="' + i + '" seamless="seamless" style="width:100%; height:300px; border:0 none;" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allowtransparency="true"></iframe>';
      e(a).insertBefore(s), e(s).hide(), window.location.hash = "#edinframe", "onhashchange" in window && (window.onhashchange = function(l) {
        if (window.location.hash != "#edinframe") {
          e("#" + r.data.id).remove(), e(s).show();
          try {
            window.addEventListener ? window.removeEventListener("message", r.iFrameListener, !1) : window.detachEvent("onmessage", r.iFrameListener);
          } catch {
          }
        }
      });
      try {
        window.addEventListener ? window.addEventListener("message", r.iFrameListener, !1) : window.attachEvent("onmessage", r.iFrameListener);
      } catch {
      }
      var o = document.getElementById(r.data.id);
      o.onload = function() {
        r.data.interval1 = setInterval(function() {
          r.data.t2 < 20 ? e("#" + r.data.id).length == 1 && typeof o.attributes.seamless < "u" && typeof o.contentWindow != null && (o.contentWindow.postMessage(["getheight", 1, r.data.id], "*"), r.data.t2++) : (r.data.t2 = 0, clearInterval(r.data.interval1), o.style.overflow = "auto");
        }, 100);
      };
    },
    iFrameListener: function(s) {
      var c, u, h, f, d, g, v, p;
      var i = s.data[0], a = s.data[1], o = document.getElementById(r.data.id);
      if (o != null)
        switch (i) {
          case "gtmedoobox":
            window.dataLayer = window.dataLayer || [], dataLayer.push({ ecommerce: null }), dataLayer.push(a);
            return;
          case "setheight":
            (r.data.autoh3 == 0 || a > r.data.autoh3 + 30 || a < r.data.autoh3 - 100) && (o.style.height = a + 50 + "px", r.data.autoh3 = a);
            break;
        }
      var l = (f = (h = (u = (c = s.currentTarget) == null ? void 0 : c.frames) == null ? void 0 : u.iframe) == null ? void 0 : h.data) == null ? void 0 : f.interval1;
      n !== l && (function() {
        var A, C, B, O;
        var E = (O = (B = (C = (A = s.currentTarget) == null ? void 0 : A.frames) == null ? void 0 : C.iframe) == null ? void 0 : B.data) == null ? void 0 : O.id;
        document.getElementById(E) && function(S) {
          let te = location.href;
          location.href = "#" + S, history.replaceState(null, null, te);
        }(E);
      }(), n = (p = (v = (g = (d = s.currentTarget) == null ? void 0 : d.frames) == null ? void 0 : g.iframe) == null ? void 0 : v.data) == null ? void 0 : p.interval1);
    }
  };
  window.onload = function() {
    ki || (ki = !0, BT(".edoobox-plugin", r.set), e(".edoobox-plugin .hidden").removeClass("hidden"), e(".edoobox-plugin .edoobox-func").each(function() {
      var a;
      if (Array.isArray(window.placeholderImageURL)) {
        document.querySelectorAll(".thumbnail img[src*='placeholder_200x300.jpg']");
        for (var s of window.placeholderImages || []) {
          if (s.src.includes("plugins/booking-system-edoobox"))
            return;
          s.src = window.placeholderImageURL[0];
        }
      }
      const i = (a = this.dataset) == null ? void 0 : a.func;
      typeof ru(e, r)[i] == "function" && ru(e, r)[i](e(this));
    }), gh(r.data.id));
  }, window.initialiseGoogleMaps = wh;
})(window.jQuery);
//# sourceMappingURL=main.js.map
