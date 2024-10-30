jQuery(document).ready(function() {
  let o = document.getElementById("edo-ajax-output-btn");
  o && o.addEventListener("click", l);
  let s = document.getElementById("edo-ajax-checkapicred-btn");
  s && s.addEventListener("click", i);
  let c = document.getElementById("edbs_flush_cache_btn");
  c && c.addEventListener("click", u);
  function l() {
    let a = {
      action: "edo_ajax_action"
    };
    jQuery.post(ajax_object.ajax_url, a, function(e) {
      let n = "edo-ajax-output";
      document.getElementById(n), o.classList.add("edbs-green"), location.reload();
    });
  }
  function i() {
    let a = document.getElementById("public_key"), e = document.getElementById("secret_key");
    console.log(a.value, e.value), jQuery.post(ajax_object.ajax_url, {
      action: "validate-api-credentials",
      api1: a.value,
      api2: e.value
    }).done(function(n) {
      let t = document.querySelector("#edo-ajax-checkapicred-btn span"), d = document.getElementById("edo-ajax-checkapicred-btn");
      if (t.classList.remove("dashicons-privacy", "dashicons-yes-alt", "dashicons-dismiss"), d.classList.remove("edbs-wiggle"), !n.data.success) {
        t.classList.add("dashicons-dismiss"), t.style.color = "red", a.style.border = "2px solid red", e.style.border = "2px solid red";
        return;
      }
      t.classList.add("dashicons-yes-alt"), t.style.color = "green", a.style.border = "2px solid green", e.style.border = "2px solid green";
    });
  }
  function u(a) {
    a.preventDefault();
    let e = document.getElementById("edbs_overlay"), n = document.getElementById("edoobox_cache_time_in_s"), t = document.getElementById("caching_meta_box_nonce");
    e.classList.remove("hidden"), setTimeout(function() {
      let d = {
        action: "edo_ajax_flushcache_action",
        edoobox_cache_time_in_s: (n == null ? void 0 : n.value) || 0,
        caching_meta_box_nonce: t == null ? void 0 : t.value
      };
      jQuery.post(ajax_object.ajax_url, d).done(function(r) {
        setTimeout(() => {
          e.classList.remove("hidden"), e.classList.add("hidden");
        }, 200);
      }).fail(function(r, y, m) {
        console.log(m);
      });
    }, 0);
  }
});
//# sourceMappingURL=admin.js.map
