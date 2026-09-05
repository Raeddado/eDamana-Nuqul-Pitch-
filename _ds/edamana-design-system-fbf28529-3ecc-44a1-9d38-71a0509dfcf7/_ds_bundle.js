/* @ds-bundle: {"format":4,"namespace":"EDamanaDesignSystem_fbf285","components":[{"name":"EcosystemDiagram","sourcePath":"components/brand/EcosystemDiagram.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PatternSurface","sourcePath":"components/brand/PatternSurface.jsx"},{"name":"Seal","sourcePath":"components/brand/Seal.jsx"},{"name":"TransactionSteps","sourcePath":"components/brand/TransactionSteps.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"LangToggle","sourcePath":"components/navigation/LangToggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/EcosystemDiagram.jsx":"7e6eb556dcd1","components/brand/Logo.jsx":"122188199c2d","components/brand/PatternSurface.jsx":"55f1975b931d","components/brand/Seal.jsx":"e8bab27d3bce","components/brand/TransactionSteps.jsx":"aec958f48eaf","components/core/Badge.jsx":"dd18cb945f5e","components/core/Button.jsx":"7425e91abfa1","components/core/Card.jsx":"4e06394ca8af","components/core/IconButton.jsx":"0df4ec34a223","components/core/Tag.jsx":"cc0e66ca4dbc","components/feedback/Alert.jsx":"856f08e7a774","components/feedback/Dialog.jsx":"fb90f76ece45","components/feedback/StatusPill.jsx":"a17d075c8199","components/feedback/Toast.jsx":"a30a74c2da15","components/feedback/Tooltip.jsx":"f9ab24eecbb9","components/forms/Checkbox.jsx":"0ffd768e0665","components/forms/Input.jsx":"a14c4f0a1caf","components/forms/Radio.jsx":"d61e909ad5b4","components/forms/Select.jsx":"767a65c3a705","components/forms/Switch.jsx":"662feea496e5","components/navigation/LangToggle.jsx":"cc62832d9e8b","components/navigation/Tabs.jsx":"12f30ab0db90","slides/doc-page.js":"f52ae9c02fca","ui_kits/mobile/Phone.jsx":"2477e40fec76","ui_kits/mobile/ios-frame.jsx":"24642b887be3","ui_kits/mobile/mobileCopy.jsx":"5e76332c6027","ui_kits/platform/AppShell.jsx":"ef12bdb13492","ui_kits/platform/Dashboard.jsx":"3e9b32b5a4cc","ui_kits/platform/NewEscrow.jsx":"fa62dbd8600c","ui_kits/platform/Settings.jsx":"852db2cc3590","ui_kits/platform/TransactionDetail.jsx":"8acf24eb17b7","ui_kits/platform/data.jsx":"04f5ca4f3d2d","ui_kits/website/Audiences.jsx":"fa9de91ce73d","ui_kits/website/Hero.jsx":"30436ff34612","ui_kits/website/HowItWorks.jsx":"ae9093193a3f","ui_kits/website/SiteFooter.jsx":"9c06f1e00119","ui_kits/website/SiteHeader.jsx":"1a61182f523c","ui_kits/website/StartEscrowDialog.jsx":"e3d6fa1380da","ui_kits/website/StatementBand.jsx":"c0d484cc4280","ui_kits/website/ValueProps.jsx":"9b80428e24bb","ui_kits/website/copy.jsx":"07acde5d9903"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EDamanaDesignSystem_fbf285 = window.EDamanaDesignSystem_fbf285 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/EcosystemDiagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_ecosystem = `
.edm-eco{position:relative;width:100%;container-type:inline-size;container-name:edeco;--eco-node:120px;--eco-surface:var(--white)}
.edm-eco--dark{--eco-surface:var(--navy-900)}
.edm-eco__stage{position:relative;width:100%;aspect-ratio:16/9;min-height:300px}
.edm-eco--dark .edm-eco__txt{background:var(--navy-900)}
.edm-eco__pat{position:absolute;inset:0;background-repeat:repeat;pointer-events:none;z-index:0}
.edm-eco__svg{position:absolute;inset:0;width:100%;height:100%;z-index:1;overflow:visible}
.edm-eco__core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:var(--space-3);text-align:center}
.edm-eco__disc{position:relative;display:grid;place-items:center;width:var(--eco-core,168px);height:var(--eco-core,168px);border-radius:50%;background:var(--navy-900);box-shadow:var(--shadow-lg)}
.edm-eco--light .edm-eco__disc{background:var(--white);border:var(--border-width-strong) solid var(--navy-900)}
.edm-eco__disc img{width:52%}
.edm-eco__halo{position:absolute;inset:-10px;border-radius:50%;border:1px solid var(--brand-teal);opacity:.55}
.edm-eco__halo--2{inset:-22px;opacity:.28}
.edm-eco--animate .edm-eco__halo{animation:ed-eco-halo 3.2s var(--ease-in-out) infinite}
.edm-eco--animate .edm-eco__halo--2{animation-delay:.5s}
/* The caption and every node label sit on a scrim of the surface colour so
   the connection lines pass behind the type instead of through it. */
.edm-eco__coretxt{font-size:var(--text-sm);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted);max-width:20ch;line-height:1.35;background:var(--eco-surface);padding:2px 8px;border-radius:var(--radius-xs)}
.edm-eco--dark .edm-eco__coretxt{color:var(--teal-300)}
.edm-eco__node{position:absolute;z-index:2;transform:translate(-50%,-50%);width:var(--eco-node);display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
.edm-eco__chip{display:grid;place-items:center;width:44px;height:44px;border-radius:var(--radius-md);background:var(--white);border:1px solid var(--border-control);color:var(--navy-900);box-shadow:var(--shadow-sm);transition:var(--transition-control),transform var(--dur-base) var(--ease-standard)}
.edm-eco--dark .edm-eco__chip{background:var(--navy-800);border-color:rgba(255,255,255,.28);color:#fff;box-shadow:none}
.edm-eco__txt{background:var(--eco-surface);padding:2px 6px;border-radius:var(--radius-xs)}
.edm-eco__label{font-size:var(--text-xs);font-weight:var(--weight-medium);color:var(--text-body);line-height:1.3}
.edm-eco--dark .edm-eco__label{color:var(--mist-300)}
.edm-eco__kind{font-size:var(--text-2xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted);line-height:1.4}
.edm-eco--dark .edm-eco__kind{color:var(--mist-500)}
.edm-eco__node--government .edm-eco__chip{border-color:var(--navy-700);color:var(--navy-900)}
.edm-eco--dark .edm-eco__node--government .edm-eco__chip{border-color:var(--mist-400)}
.edm-eco__node--bank .edm-eco__chip{border-color:var(--blue-600);color:var(--blue-700)}
.edm-eco--dark .edm-eco__node--bank .edm-eco__chip{border-color:var(--blue-400);color:var(--blue-200)}
.edm-eco__node--party .edm-eco__chip{border-color:var(--action-release);color:var(--state-success-fg)}
.edm-eco--dark .edm-eco__node--party .edm-eco__chip{border-color:var(--brand-teal);color:var(--teal-200)}
.edm-eco__node--platform .edm-eco__chip{border-color:var(--mist-500);color:var(--mist-700)}
.edm-eco--dark .edm-eco__node--platform .edm-eco__chip{border-color:var(--mist-500);color:var(--mist-300)}
.edm-eco__node--active .edm-eco__chip{box-shadow:var(--glow-teal);border-color:var(--action-release)}
.edm-eco__node--pending .edm-eco__chip{border-style:dashed;color:var(--text-muted)}
.edm-eco__node--pending .edm-eco__label{color:var(--text-muted)}
.edm-eco__node[data-interactive="1"]{cursor:pointer}
.edm-eco__node[data-interactive="1"]:hover .edm-eco__chip{transform:translateY(var(--lift-hover));box-shadow:var(--shadow-md)}
.edm-eco__node[data-interactive="1"]:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:4px;border-radius:var(--radius-sm)}
.edm-eco--dark .edm-eco__node[data-interactive="1"]:focus-visible{outline-color:var(--focus-ring-on-dark)}
.edm-eco__link{fill:none;stroke-linecap:round}
.edm-eco__link--idle{stroke:var(--border-control);stroke-width:1.25}
.edm-eco--dark .edm-eco__link--idle{stroke:rgba(255,255,255,.26)}
.edm-eco__link--data{stroke:var(--mist-500);stroke-width:1.5;stroke-dasharray:5 5}
.edm-eco--dark .edm-eco__link--data{stroke:var(--mist-500)}
.edm-eco__link--payment{stroke:var(--blue-600);stroke-width:2.25}
.edm-eco--dark .edm-eco__link--payment{stroke:var(--blue-400)}
.edm-eco__link--settlement{stroke:var(--action-release);stroke-width:2.5}
.edm-eco--dark .edm-eco__link--settlement{stroke:var(--brand-teal)}
.edm-eco__link--verification{stroke:var(--navy-700);stroke-width:2}
.edm-eco--dark .edm-eco__link--verification{stroke:var(--mist-400)}
.edm-eco__pulse{fill:none;stroke-linecap:round;opacity:0}
.edm-eco--animate .edm-eco__pulse{opacity:1;animation:ed-eco-flow var(--dur-flow) var(--ease-flow) infinite}
.edm-eco__cap{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-5);padding-top:var(--space-4);border-top:1px solid var(--border-subtle);margin-top:var(--space-2)}
.edm-eco--dark .edm-eco__cap{border-top-color:rgba(255,255,255,.16)}
.edm-eco__key{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-2xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted)}
.edm-eco--dark .edm-eco__key{color:var(--mist-400)}
.edm-eco__key i{display:block;width:20px;height:0;border-top-width:2px;border-top-style:solid;border-top-color:currentColor}
.edm-eco__key-line.edm-eco__link--data{color:var(--mist-500)}
.edm-eco__key-line.edm-eco__link--payment{color:var(--blue-600)}
.edm-eco__key-line.edm-eco__link--settlement{color:var(--action-release)}
.edm-eco__key-line.edm-eco__link--verification{color:var(--navy-700)}
.edm-eco--dark .edm-eco__key-line.edm-eco__link--payment{color:var(--blue-400)}
.edm-eco--dark .edm-eco__key-line.edm-eco__link--settlement{color:var(--brand-teal)}
.edm-eco--dark .edm-eco__key-line.edm-eco__link--verification{color:var(--mist-400)}
@keyframes ed-eco-flow{0%{stroke-dashoffset:var(--eco-len,240)}70%,100%{stroke-dashoffset:0}}
@keyframes ed-eco-halo{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.05);opacity:.15}}
@container edeco (max-width:760px){.edm-eco{--eco-node:96px;--eco-core:132px}.edm-eco__label{font-size:var(--text-2xs)}.edm-eco__chip{width:38px;height:38px}}
@container edeco (max-width:520px){
  .edm-eco__stage{aspect-ratio:auto;min-height:0}
  .edm-eco__svg,.edm-eco__pat{display:none}
  .edm-eco__core{position:static;transform:none;align-items:flex-start;text-align:start;padding-bottom:var(--space-5)}
  .edm-eco{--eco-core:104px}
  .edm-eco__stage{display:flex;flex-direction:column;gap:var(--space-3)}
  .edm-eco__node{position:static!important;transform:none;width:100%;flex-direction:row;align-items:center;gap:var(--space-3);text-align:start;padding:var(--space-3);border:1px solid var(--border-control);border-radius:var(--radius-md);border-inline-start-width:3px}
  .edm-eco--dark .edm-eco__node{border-color:rgba(255,255,255,.24)}
  .edm-eco__node--government{border-inline-start-color:var(--navy-700)}
  .edm-eco__node--bank{border-inline-start-color:var(--blue-600)}
  .edm-eco__node--party{border-inline-start-color:var(--action-release)}
  .edm-eco__node--platform{border-inline-start-color:var(--mist-500)}
  .edm-eco__txt{flex:1;min-width:0;background:none;padding:0}
}
[dir="rtl"] .edm-eco__coretxt,[lang="ar"] .edm-eco__coretxt{font-size:var(--text-base);font-weight:var(--weight-arabic-strong)}
[dir="rtl"] .edm-eco__label,[lang="ar"] .edm-eco__label{font-size:var(--text-sm);line-height:var(--leading-arabic)}
[dir="rtl"] .edm-eco__kind,[lang="ar"] .edm-eco__kind,[dir="rtl"] .edm-eco__key,[lang="ar"] .edm-eco__key{font-size:var(--text-xs);font-weight:var(--weight-arabic-strong)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-ecosystem';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_ecosystem;
  }
}
const FLOW_LABEL = {
  data: 'Data exchange',
  payment: 'Payment flow',
  settlement: 'Conditional settlement',
  verification: 'Verification',
  idle: 'Available'
};

/** Positions n nodes on an ellipse. `spread` lets a caller bias the ring. */
function ringPositions(n, startDeg, spread) {
  if (n === 0) return [];
  const step = spread / (n === 1 ? 1 : n);
  return Array.from({
    length: n
  }, (_, i) => {
    const a = (startDeg + step * (i + (n === 1 ? 0 : 0.5))) * Math.PI / 180;
    return {
      x: 50 + Math.cos(a) * 34,
      y: 50 + Math.sin(a) * 35
    };
  });
}
function EcosystemDiagram({
  nodes = [],
  centerLabel = 'eDamana',
  centerCaption = 'The trusted orchestration layer',
  theme = 'light',
  animate = true,
  showLegend = true,
  logoBase = 'assets/logo',
  patternBase = 'assets/pattern',
  onNodeClick,
  className = '',
  style,
  ...rest
}) {
  const dark = theme === 'dark';
  const positioned = React.useMemo(() => {
    const auto = nodes.filter(n => n.x == null);
    const pos = ringPositions(auto.length, -180, 360);
    let k = 0;
    return nodes.map(n => n.x != null ? n : {
      ...n,
      ...pos[k++]
    });
  }, [nodes]);
  const flows = [...new Set(positioned.map(n => n.flow || 'idle'))];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-eco', dark ? 'edm-eco--dark' : 'edm-eco--light', animate && 'edm-eco--animate', className].filter(Boolean).join(' '),
    style: {
      background: dark ? 'var(--navy-900)' : 'transparent',
      ...style
    },
    role: "group",
    "aria-label": centerLabel + ' — ' + centerCaption
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__pat",
    "aria-hidden": "true",
    style: {
      backgroundImage: 'url(' + patternBase + '/pattern-tile-' + (dark ? 'light' : 'navy') + '.svg)',
      backgroundSize: 'var(--pattern-size-md)',
      opacity: dark ? 0.12 : 0.055
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "edm-eco__svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, positioned.map((n, i) => {
    const flow = n.flow || 'idle';
    const d = 'M50 50 L' + n.x + ' ' + n.y;
    return /*#__PURE__*/React.createElement("g", {
      key: 'l' + i
    }, /*#__PURE__*/React.createElement("path", {
      className: 'edm-eco__link edm-eco__link--' + flow,
      d: d,
      vectorEffect: "non-scaling-stroke"
    }), animate && flow !== 'idle' && /*#__PURE__*/React.createElement("path", {
      className: 'edm-eco__pulse edm-eco__link--' + flow,
      d: d,
      vectorEffect: "non-scaling-stroke",
      style: {
        strokeDasharray: '14 240',
        ['--eco-len']: 254,
        animationDelay: (i * 0.18).toFixed(2) + 's'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__core"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__disc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edm-eco__halo",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "edm-eco__halo edm-eco__halo--2",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("img", {
    src: logoBase + '/symbol' + (dark ? '-on-dark' : '') + '.svg',
    alt: centerLabel
  })), centerCaption && /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__coretxt"
  }, centerCaption)), positioned.map((n, i) => {
    const cls = ['edm-eco__node', 'edm-eco__node--' + (n.kind || 'platform'), n.state && 'edm-eco__node--' + n.state].filter(Boolean).join(' ');
    const interactive = !!onNodeClick;
    return /*#__PURE__*/React.createElement("div", {
      key: n.label + i,
      className: cls,
      style: {
        left: n.x + '%',
        top: n.y + '%'
      },
      "data-interactive": interactive ? '1' : undefined,
      tabIndex: interactive ? 0 : undefined,
      role: interactive ? 'button' : undefined,
      onClick: interactive ? () => onNodeClick(n) : undefined,
      onKeyDown: interactive ? e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNodeClick(n);
        }
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-eco__chip",
      "aria-hidden": "true"
    }, n.icon ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": n.icon,
      style: {
        width: 20,
        height: 20
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, (n.label || '?').slice(0, 2))), /*#__PURE__*/React.createElement("div", {
      className: "edm-eco__txt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-eco__label"
    }, n.label), n.kind && /*#__PURE__*/React.createElement("div", {
      className: "edm-eco__kind"
    }, n.kindLabel || n.kind)));
  })), showLegend && /*#__PURE__*/React.createElement("div", {
    className: "edm-eco__cap"
  }, flows.filter(fl => fl !== 'idle').map(fl => /*#__PURE__*/React.createElement("span", {
    className: "edm-eco__key",
    key: fl
  }, /*#__PURE__*/React.createElement("i", {
    className: 'edm-eco__key-line edm-eco__link--' + fl,
    style: {
      borderTopStyle: fl === 'data' ? 'dashed' : 'solid'
    }
  }), FLOW_LABEL[fl]))));
}
Object.assign(__ds_scope, { EcosystemDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EcosystemDiagram.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOCKUP = {
  vertical: 'lockup-vertical',
  'vertical-tagline': 'lockup-vertical-tagline',
  horizontal: 'lockup-horizontal',
  wordmark: 'wordmark',
  symbol: 'symbol'
};
const SUFFIX = {
  colour: '',
  'on-dark': '-on-dark',
  white: '-white',
  mono: '-mono'
};
/* artwork aspect ratios (width / height) of the tightened viewBoxes */
const RATIO = {
  vertical: 1.399,
  'vertical-tagline': 1.094,
  horizontal: 3.518,
  wordmark: 2.687,
  symbol: 0.996
};
function Logo({
  lockup = 'vertical',
  colourway = 'colour',
  height,
  base = 'assets/logo',
  title = 'eDamana',
  className = '',
  style,
  ...rest
}) {
  const file = base + '/' + LOCKUP[lockup] + SUFFIX[colourway] + '.svg';
  const h = height || 40;
  // mono paints with currentColor, which an <img> cannot inherit — mask instead.
  if (colourway === 'mono') {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "img",
      "aria-label": title,
      className: className,
      style: {
        display: 'inline-block',
        height: h,
        width: h * RATIO[lockup],
        background: 'currentColor',
        WebkitMaskImage: 'url(' + file + ')',
        maskImage: 'url(' + file + ')',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: title,
    className: className,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_pattern = `
.edm-pat{position:relative;isolation:isolate}
.edm-pat__layer{position:absolute;inset:0;z-index:0;pointer-events:none;background-repeat:repeat}
.edm-pat__body{position:relative;z-index:1}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-pattern';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_pattern;
  }
}
const TILE = {
  navy: 'pattern-tile-navy.svg',
  light: 'pattern-tile-light.svg',
  white: 'pattern-tile-white.svg'
};
const DEFAULT_OPACITY = {
  navy: 0.09,
  light: 0.14,
  white: 0.2
};
const SIZE = {
  sm: 180,
  md: 320,
  lg: 520
};
function PatternSurface({
  children,
  tone = 'navy',
  scale = 'md',
  opacity,
  background,
  base = 'assets/pattern',
  corner,
  className = '',
  style,
  ...rest
}) {
  const px = typeof scale === 'number' ? scale : SIZE[scale];
  const op = opacity != null ? opacity : DEFAULT_OPACITY[tone];
  const layer = {
    backgroundImage: 'url(' + base + '/' + TILE[tone] + ')',
    backgroundSize: px + 'px',
    opacity: op
  };
  if (corner) {
    const [v, h] = corner.split('-');
    layer.inset = 'auto';
    layer[v] = 0;
    layer[h === 'start' ? 'insetInlineStart' : 'insetInlineEnd'] = 0;
    layer.width = '46%';
    layer.height = '78%';
    layer.maskImage = 'linear-gradient(to ' + (h === 'start' ? 'right' : 'left') + ', #000 40%, transparent)';
    layer.WebkitMaskImage = layer.maskImage;
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-pat', className].filter(Boolean).join(' '),
    style: {
      background,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "edm-pat__layer",
    style: layer,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edm-pat__body"
  }, children));
}
Object.assign(__ds_scope, { PatternSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternSurface.jsx", error: String((e && e.message) || e) }); }

// components/brand/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILE = {
  colour: 'seal.svg',
  'on-dark': 'seal-on-dark.svg',
  white: 'seal-white.svg',
  mono: 'seal-mono.svg'
};
function Seal({
  colourway = 'colour',
  size = 96,
  base = 'assets/logo',
  className = '',
  style,
  ...rest
}) {
  const file = base + '/' + FILE[colourway];
  if (colourway === 'mono') {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "img",
      "aria-label": "eDamana seal \u2014 \u0639\u0644\u0649 \u0636\u0645\u0627\u0646\u062A\u0646\u0627",
      className: className,
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        background: 'currentColor',
        WebkitMaskImage: 'url(' + file + ')',
        maskImage: 'url(' + file + ')',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: "eDamana seal \u2014 \u0639\u0644\u0649 \u0636\u0645\u0627\u0646\u062A\u0646\u0627",
    className: className,
    style: {
      width: size,
      height: size,
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Seal.jsx", error: String((e && e.message) || e) }); }

// components/brand/TransactionSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_steps = `
/* Container-query driven: the rail flips to vertical when the COMPONENT
   gets narrow, not when the window does — so it behaves correctly in a
   sidebar, a card, a modal or a full-width section without the consumer
   having to pass a prop. The media query is the fallback. */
.edm-steps{display:flex;align-items:flex-start;gap:0;container-type:inline-size;container-name:edsteps}
.edm-steps--vertical{flex-direction:column}
.edm-step{flex:1;display:flex;flex-direction:column;gap:var(--space-3);min-width:0}
.edm-steps--vertical .edm-step{flex-direction:row;align-items:flex-start;width:100%;gap:var(--space-4);padding-bottom:var(--space-6)}
.edm-step__rail{display:flex;align-items:center;gap:0;width:100%}
.edm-steps--vertical .edm-step__rail{flex-direction:column;width:auto;align-self:stretch}
.edm-step__node{position:relative;flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--mist-200);color:var(--mist-700);font-size:var(--text-xs);font-weight:var(--weight-bold);border:2px solid var(--border-control);transition:background-color var(--dur-slow) var(--ease-standard),border-color var(--dur-slow) var(--ease-standard),color var(--dur-slow) var(--ease-standard),box-shadow var(--dur-slow) var(--ease-standard)}
.edm-step__line{flex:1;height:2px;background:var(--border-control);position:relative;overflow:hidden}
.edm-steps--vertical .edm-step__line{width:2px;height:auto;flex:1;min-height:22px}
.edm-step__line i{position:absolute;inset:0;background:var(--action-release);transform-origin:left center;transform:scaleX(0);transition:transform var(--dur-flow) var(--ease-flow)}
.edm-steps--vertical .edm-step__line i{transform-origin:top center;transform:scaleY(0)}
.edm-step--done .edm-step__line i{transform:scaleX(1)}
.edm-steps--vertical .edm-step--done .edm-step__line i{transform:scaleY(1)}
.edm-step--done .edm-step__node{background:var(--action-release);border-color:var(--action-release);color:#fff}
.edm-step--current .edm-step__node{background:var(--white);border-color:var(--action-release);color:var(--state-success-fg);box-shadow:var(--glow-teal)}
.edm-step--current .edm-step__node::after{content:'';position:absolute;width:8px;height:8px;border-radius:50%;background:var(--action-release);animation:ed-pulse 1.8s var(--ease-in-out) infinite}
.edm-step__txt{padding-inline-end:var(--space-4)}
.edm-step__label{font-size:var(--text-sm);font-weight:var(--weight-bold);color:var(--text-muted);transition:color var(--dur-base) var(--ease-standard)}
.edm-step--done .edm-step__label,.edm-step--current .edm-step__label{color:var(--text-strong)}
.edm-step__meta{margin-top:2px;font-size:var(--text-xs);color:var(--text-muted);line-height:1.45}
.edm-steps--on-dark .edm-step__node{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.24);color:var(--mist-400)}
.edm-steps--on-dark .edm-step__line{background:rgba(255,255,255,.18)}
.edm-steps--on-dark .edm-step--current .edm-step__node{background:var(--navy-900)}
.edm-steps--on-dark .edm-step__label{color:var(--mist-500)}
.edm-steps--on-dark .edm-step--done .edm-step__label,.edm-steps--on-dark .edm-step--current .edm-step__label{color:#fff}
.edm-steps--on-dark .edm-step__meta{color:var(--mist-400)}
.edm-steps--on-dark .edm-step--done .edm-step__node{background:var(--brand-teal);border-color:var(--brand-teal);color:var(--navy-900)}
.edm-steps--on-dark .edm-step--current .edm-step__node{border-color:var(--brand-teal);color:#fff}
.edm-steps--on-dark .edm-step--current .edm-step__node::after{background:var(--brand-teal)}
.edm-steps--on-dark .edm-step--done .edm-step__line i{background:var(--brand-teal)}
/* ── Auto-stack ── 5 steps need ~110px each to hold a one-word label. */
@container edsteps (max-width:560px){
  .edm-steps:not(.edm-steps--vertical){flex-direction:column}
  .edm-steps:not(.edm-steps--vertical) .edm-step{flex-direction:row;align-items:flex-start;width:100%;gap:var(--space-4);padding-bottom:var(--space-5)}
  .edm-steps:not(.edm-steps--vertical) .edm-step__rail{flex-direction:column;width:auto;align-self:stretch}
  .edm-steps:not(.edm-steps--vertical) .edm-step__line{width:2px;height:auto;flex:1;min-height:20px}
  .edm-steps:not(.edm-steps--vertical) .edm-step__line i{transform-origin:top center;transform:scaleY(0)}
  .edm-steps:not(.edm-steps--vertical) .edm-step--done .edm-step__line i{transform:scaleY(1)}
}
@supports not (container-type:inline-size){
  @media (max-width:767px){
    .edm-steps:not(.edm-steps--vertical){flex-direction:column}
    .edm-steps:not(.edm-steps--vertical) .edm-step{flex-direction:row;align-items:flex-start;width:100%;gap:var(--space-4);padding-bottom:var(--space-5)}
    .edm-steps:not(.edm-steps--vertical) .edm-step__rail{flex-direction:column;width:auto;align-self:stretch}
    .edm-steps:not(.edm-steps--vertical) .edm-step__line{width:2px;height:auto;flex:1;min-height:20px}
    .edm-steps:not(.edm-steps--vertical) .edm-step--done .edm-step__line i{transform:scaleY(1)}
  }
}
/* Arabic labels need the real 600 weight, not a synthesised 700. */
[dir="rtl"] .edm-step__label,[lang="ar"] .edm-step__label{font-weight:var(--weight-arabic-strong);font-size:var(--text-base)}
[dir="rtl"] .edm-step__meta,[lang="ar"] .edm-step__meta{font-size:var(--text-sm);line-height:var(--leading-arabic)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-steps';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_steps;
  }
}
function TransactionSteps({
  steps = [],
  current = 0,
  orientation = 'horizontal',
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['edm-steps', orientation === 'vertical' && 'edm-steps--vertical', onDark && 'edm-steps--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: cls,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, rest), steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const meta = typeof s === 'string' ? null : s.meta;
    const state = i < current ? 'done' : i === current ? 'current' : 'todo';
    const last = i === steps.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      className: 'edm-step edm-step--' + state,
      "aria-current": state === 'current' ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-step__rail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "edm-step__node"
    }, state === 'done' ? '\u2713' : i + 1), !last && /*#__PURE__*/React.createElement("span", {
      className: "edm-step__line"
    }, /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
      className: "edm-step__txt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-step__label"
    }, label), meta && /*#__PURE__*/React.createElement("div", {
      className: "edm-step__meta"
    }, meta)));
  }));
}
Object.assign(__ds_scope, { TransactionSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TransactionSteps.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_badge = `
.edm-badge{display:inline-flex;align-items:center;gap:var(--space-2);height:24px;padding:0 var(--space-3);border:1px solid transparent;border-radius:var(--radius-pill);font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-wide);white-space:nowrap}
.edm-badge--square{border-radius:var(--radius-xs)}
.edm-badge--lg{height:28px;font-size:var(--text-sm);padding:0 var(--space-4)}
.edm-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}
/* Soft badges pair each state background with its AA-verified -fg. */
.edm-badge--soft-neutral{background:var(--state-pending-bg);color:var(--state-pending-fg)}
.edm-badge--soft-info{background:var(--state-info-bg);color:var(--state-info-fg)}
.edm-badge--soft-success{background:var(--state-success-bg);color:var(--state-success-fg)}
.edm-badge--soft-warning{background:var(--state-warning-bg);color:var(--state-warning-fg)}
.edm-badge--soft-danger{background:var(--state-danger-bg);color:var(--state-danger-fg)}
.edm-badge--solid-neutral{background:var(--mist-500);color:#fff}
.edm-badge--solid-info{background:var(--state-info);color:#fff}
.edm-badge--solid-success{background:var(--state-success-solid);color:#fff}
.edm-badge--solid-warning{background:var(--state-warning);color:var(--navy-900)}
.edm-badge--solid-danger{background:var(--state-danger-solid);color:#fff}
.edm-badge--outline-neutral{border-color:var(--border-default);color:var(--text-muted)}
.edm-badge--outline-info{border-color:var(--blue-300);color:var(--state-info-fg)}
.edm-badge--outline-success{border-color:var(--teal-300);color:var(--state-success-fg)}
.edm-badge--outline-warning{border-color:var(--gold-500);color:var(--state-warning-fg)}
.edm-badge--outline-danger{border-color:var(--coral-200);color:var(--state-danger-fg)}
.edm-badge--on-dark.edm-badge--outline-neutral{border-color:rgba(255,255,255,.28);color:var(--mist-400)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-badge';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_badge;
  }
}
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  dot = false,
  square = false,
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['edm-badge', 'edm-badge--' + variant + '-' + tone, size === 'lg' && 'edm-badge--lg', square && 'edm-badge--square', onDark && 'edm-badge--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "edm-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_button = `
.edm-btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);border:1px solid transparent;border-radius:var(--radius-control);font-family:var(--font-latin);font-weight:600;letter-spacing:-.005em;cursor:pointer;text-decoration:none;white-space:nowrap;transition:var(--transition-control),transform var(--dur-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}
.edm-btn:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-btn:active:not(:disabled){transform:scale(var(--press-scale))}
.edm-btn:disabled,.edm-btn[aria-disabled=true]{background:var(--action-disabled-bg);border-color:transparent;color:var(--action-disabled-fg);cursor:not-allowed;box-shadow:none}
.edm-btn--sm{height:var(--control-height-sm);padding:0 var(--control-pad-x-sm);font-size:var(--text-sm)}
.edm-btn--md{height:var(--control-height-md);padding:0 var(--control-pad-x-md);font-size:var(--text-sm)}
.edm-btn--lg{height:var(--control-height-lg);padding:0 var(--control-pad-x-lg);font-size:var(--text-base)}
.edm-btn--xl{height:var(--control-height-xl);padding:0 var(--space-8);font-size:var(--text-lg);border-radius:var(--radius-sm)}
.edm-btn--primary{background:var(--action-primary);color:#fff}
.edm-btn--primary:hover:not(:disabled){background:var(--action-primary-hover)}
.edm-btn--primary:active:not(:disabled){background:var(--action-primary-active)}
/* Teal action = --action-release (deep official teal, white at 5.42:1).
   The identity teal #00b3ba is NOT used as a filled control surface. */
.edm-btn--secondary{background:var(--action-secondary);color:#fff}
.edm-btn--secondary:hover:not(:disabled){background:var(--action-secondary-hover)}
.edm-btn--secondary:active:not(:disabled){background:var(--action-secondary-active)}
.edm-btn--authority{background:var(--action-authority);color:#fff}
.edm-btn--authority:hover:not(:disabled){background:var(--action-authority-hover)}
.edm-btn--outline{background:transparent;border-color:var(--border-default);color:var(--text-strong)}
.edm-btn--outline:hover:not(:disabled){border-color:var(--border-brand);color:var(--action-primary);background:var(--blue-100)}
.edm-btn--ghost{background:transparent;color:var(--text-strong)}
.edm-btn--ghost:hover:not(:disabled){background:var(--surface-subtle)}
.edm-btn--danger{background:var(--action-danger);color:#fff}
.edm-btn--pill{border-radius:var(--radius-pill)}
.edm-btn--block{width:100%}
.edm-btn--on-dark.edm-btn--outline{border-color:rgba(255,255,255,.28);color:#fff}
.edm-btn--on-dark.edm-btn--outline:hover:not(:disabled){background:rgba(255,255,255,.1);border-color:#fff;color:#fff}
.edm-btn--on-dark.edm-btn--ghost{color:#fff}
.edm-btn--on-dark.edm-btn--ghost:hover:not(:disabled){background:rgba(255,255,255,.1)}
.edm-btn--on-dark:focus-visible{outline-color:var(--focus-ring-on-dark)}
.edm-btn--danger:hover:not(:disabled){background:var(--action-danger-hover)}
/* Touch: md is the product default at 40px, which is under the 44px floor.
   On coarse pointers every size below lg is promoted to the floor. */
@media (pointer:coarse){.edm-btn--sm,.edm-btn--md{min-height:var(--touch-target-min)}}
@media (max-width:767px){.edm-btn--block{min-height:var(--touch-target-min)}.edm-btn--xl{height:var(--control-height-lg);padding:0 var(--space-6);font-size:var(--text-base)}}
.edm-btn__arrow{flex:none;background:currentColor}
/* Arabic labels must use the Arabic family, not fall back through it. */
[dir="rtl"] .edm-btn,[lang="ar"] .edm-btn,.ar .edm-btn{font-family:var(--font-arabic);font-weight:var(--weight-arabic-strong)}
.edm-btn__spin{flex:none;width:1em;height:1em;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:edm-spin .7s linear infinite}
@keyframes edm-spin{to{transform:rotate(360deg)}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-button';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_button;
  }
}
const ARROW = {
  buy: 'arrow-left.svg',
  sell: 'arrow-right.svg',
  shield: 'shield-cup.svg'
};

/** The brand's arrows are cut from the official symbol; they mask to currentColor. */
function BrandArrow({
  kind,
  base,
  size
}) {
  const url = base + '/' + ARROW[kind];
  return /*#__PURE__*/React.createElement("span", {
    className: "edm-btn__arrow",
    "aria-hidden": "true",
    style: {
      width: size,
      height: size * (660 / 578),
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center'
    }
  });
}
const ARROW_SIZE = {
  sm: 12,
  md: 14,
  lg: 17,
  xl: 22
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow,
  arrowPosition,
  pill = false,
  block = false,
  onDark = false,
  loading = false,
  disabled = false,
  as = 'button',
  href,
  className = '',
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;
  const pos = arrowPosition || (arrow === 'sell' ? 'end' : 'start');
  const base = rest.assetBase || 'assets/pattern';
  delete rest.assetBase;
  const cls = ['edm-btn', 'edm-btn--' + variant, 'edm-btn--' + size, pill && 'edm-btn--pill', block && 'edm-btn--block', onDark && 'edm-btn--on-dark', className].filter(Boolean).join(' ');
  const icon = arrow && !loading ? /*#__PURE__*/React.createElement(BrandArrow, {
    kind: arrow,
    base: base,
    size: ARROW_SIZE[size] || 14
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-disabled": Tag !== 'button' && (disabled || loading) ? true : undefined,
    style: style
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "edm-btn__spin",
    "aria-hidden": "true"
  }), pos === 'start' && icon, /*#__PURE__*/React.createElement("span", null, children), pos === 'end' && icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_card = `
.edm-card{position:relative;border-radius:var(--radius-card);border:1px solid var(--border-subtle);background:var(--surface-card);box-shadow:var(--shadow-sm);transition:var(--transition-surface),border-color var(--dur-base) var(--ease-standard)}
.edm-card--subtle{background:var(--surface-subtle);box-shadow:none}
.edm-card--sunken{background:var(--surface-sunken);border-color:var(--mist-300);box-shadow:none}
.edm-card--inverse{background:var(--surface-inverse-raised);border-color:rgba(255,255,255,.22);box-shadow:none;color:var(--text-on-dark-muted)}
.edm-card--flat{box-shadow:none}
.edm-card--interactive{cursor:pointer}
.edm-card--interactive:hover{transform:translateY(var(--lift-hover));box-shadow:var(--shadow-md);border-color:var(--border-default)}
.edm-card--interactive.edm-card--inverse:hover{border-color:rgba(255,255,255,.4);box-shadow:var(--shadow-on-dark)}
.edm-card--interactive:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-card--inverse.edm-card--interactive:focus-visible{outline-color:var(--focus-ring-on-dark)}
.edm-card--selected{border-width:var(--border-width-strong);border-color:var(--border-brand);background:var(--blue-100)}
.edm-card--live{box-shadow:var(--glow-teal)}
.edm-card__hd{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4)}
.edm-card__eyebrow{font-size:var(--type-eyebrow-size);font-weight:var(--type-eyebrow-weight);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted)}
.edm-card--inverse .edm-card__eyebrow{color:var(--teal-300)}
.edm-card__title{margin:var(--space-1) 0 0;font-size:var(--text-lg);font-weight:var(--weight-bold);color:var(--text-strong);letter-spacing:var(--tracking-tight)}
.edm-card--inverse .edm-card__title{color:#fff}
.edm-card__body{margin-top:var(--space-3)}
.edm-card__ft{margin-top:var(--space-5);padding-top:var(--space-4);border-top:1px solid var(--border-subtle);display:flex;align-items:center;gap:var(--space-3)}
.edm-card--inverse .edm-card__ft{border-color:rgba(255,255,255,.16)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-card';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_card;
  }
}
const PAD = {
  none: '0',
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)'
};
function Card({
  children,
  eyebrow,
  title,
  action,
  footer,
  variant = 'default',
  padding = 'md',
  interactive = false,
  selected = false,
  live = false,
  flat = false,
  className = '',
  style,
  ...rest
}) {
  const cls = ['edm-card', variant !== 'default' && 'edm-card--' + variant, interactive && 'edm-card--interactive', selected && 'edm-card--selected', live && 'edm-card--live', flat && 'edm-card--flat', className].filter(Boolean).join(' ');
  const head = eyebrow || title || action;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      padding: PAD[padding],
      ...style
    },
    tabIndex: interactive ? 0 : undefined
  }, rest), head && /*#__PURE__*/React.createElement("div", {
    className: "edm-card__hd"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "edm-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "edm-card__title"
  }, title)), action), children && /*#__PURE__*/React.createElement("div", {
    className: head ? 'edm-card__body' : undefined
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "edm-card__ft"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_iconbutton = `
.edm-ibtn{display:inline-grid;place-items:center;border:1px solid transparent;border-radius:var(--radius-control);cursor:pointer;color:var(--text-body);background:transparent;transition:var(--transition-control),transform var(--dur-fast) var(--ease-standard);flex:none}
.edm-ibtn:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-ibtn:active:not(:disabled){transform:scale(var(--press-scale))}
.edm-ibtn:disabled{color:var(--action-disabled-fg);cursor:not-allowed}
.edm-ibtn--sm{width:var(--control-height-sm);height:var(--control-height-sm)}
.edm-ibtn--md{width:var(--control-height-md);height:var(--control-height-md)}
.edm-ibtn--lg{width:var(--control-height-lg);height:var(--control-height-lg)}
.edm-ibtn--solid{background:var(--action-primary);color:#fff}
.edm-ibtn--solid:hover:not(:disabled){background:var(--action-primary-hover)}
.edm-ibtn--outline{border-color:var(--border-default);color:var(--text-strong)}
.edm-ibtn--outline:hover:not(:disabled){border-color:var(--border-brand);color:var(--action-primary);background:var(--blue-100)}
.edm-ibtn--ghost:hover:not(:disabled){background:var(--surface-subtle);color:var(--text-strong)}
.edm-ibtn--on-dark{color:var(--mist-400)}
.edm-ibtn--on-dark.edm-ibtn--outline{border-color:rgba(255,255,255,.24)}
.edm-ibtn--on-dark:hover:not(:disabled){background:rgba(255,255,255,.1);color:#fff}
.edm-ibtn--on-dark:focus-visible{outline-color:var(--focus-ring-on-dark)}
@media (pointer:coarse){.edm-ibtn--sm,.edm-ibtn--md{min-width:var(--touch-target-min);min-height:var(--touch-target-min)}}
.edm-ibtn--pill{border-radius:var(--radius-pill)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-iconbutton';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_iconbutton;
  }
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  pill = false,
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['edm-ibtn', 'edm-ibtn--' + variant, 'edm-ibtn--' + size, pill && 'edm-ibtn--pill', onDark && 'edm-ibtn--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_tag = `
.edm-tag{display:inline-flex;align-items:center;gap:var(--space-2);height:28px;padding:0 var(--space-3);border:1px solid var(--border-default);border-radius:var(--radius-xs);background:var(--white);font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-strong);transition:var(--transition-control)}
.edm-tag--selected{border-color:var(--border-brand);border-width:var(--border-width-strong);background:var(--blue-100);color:var(--blue-700);padding:0 calc(var(--space-3) - 1px)}
.edm-tag--clickable{cursor:pointer}
.edm-tag--clickable:hover{border-color:var(--border-strong);background:var(--surface-subtle)}
.edm-tag--clickable:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
@media (pointer:coarse){.edm-tag--clickable{min-height:var(--touch-target-min);padding:0 var(--space-4)}}
.edm-tag__x{display:grid;place-items:center;width:16px;height:16px;margin-right:-4px;border:0;background:transparent;color:var(--text-subtle);cursor:pointer;border-radius:var(--radius-xs);font-size:13px;line-height:1;padding:0}
.edm-tag__x:hover{color:var(--state-danger-fg);background:var(--state-danger-bg)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-tag';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_tag;
  }
}
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  const clickable = !!onClick;
  const cls = ['edm-tag', selected && 'edm-tag--selected', clickable && 'edm-tag--clickable', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick,
    tabIndex: clickable ? 0 : undefined,
    role: clickable ? 'button' : undefined
  }, rest), /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "edm-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_alert = `
.edm-alert{display:flex;gap:var(--space-3);padding:var(--space-4);border:1px solid transparent;border-radius:var(--radius-md);font-size:var(--text-sm);line-height:1.55}
.edm-alert__bar{flex:none;width:3px;border-radius:2px;background:currentColor;align-self:stretch}
.edm-alert__body{flex:1;min-width:0;color:var(--text-body)}
.edm-alert__title{display:block;font-weight:var(--weight-bold);color:var(--text-strong);margin-bottom:2px}
.edm-alert__x{flex:none;border:0;background:transparent;color:var(--text-subtle);cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;border-radius:var(--radius-xs)}
.edm-alert__x:hover{color:var(--text-strong);background:rgba(9,22,92,.06)}
[dir="rtl"] .edm-alert,[lang="ar"] .edm-alert{font-family:var(--font-arabic);line-height:var(--leading-arabic)}
[dir="rtl"] .edm-alert__title,[lang="ar"] .edm-alert__title{font-weight:var(--weight-arabic-display)}
.edm-alert--info{background:var(--state-info-bg);border-color:var(--blue-200);color:var(--state-info-fg)}
.edm-alert--success{background:var(--state-success-bg);border-color:var(--teal-200);color:var(--state-success-fg)}
.edm-alert--warning{background:var(--state-warning-bg);border-color:var(--gold-200);color:var(--state-warning-fg)}
.edm-alert--danger{background:var(--state-danger-bg);border-color:var(--coral-200);color:var(--state-danger-fg)}
.edm-alert--authority{background:var(--navy-900);border-color:transparent;color:var(--teal-300)}
.edm-alert--authority .edm-alert__body{color:var(--mist-300)}
.edm-alert--authority .edm-alert__title{color:#fff}
.edm-alert--authority .edm-alert__x{color:var(--mist-400)}
.edm-alert--authority .edm-alert__x:hover{color:#fff;background:rgba(255,255,255,.12)}
@media (max-width:430px){.edm-alert{padding:var(--space-3);gap:var(--space-2)}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-alert';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_alert;
  }
}
function Alert({
  children,
  title,
  tone = 'info',
  onDismiss,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-alert', 'edm-alert--' + tone, className].filter(Boolean).join(' '),
    role: tone === 'danger' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "edm-alert__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edm-alert__body"
  }, title && /*#__PURE__*/React.createElement("strong", {
    className: "edm-alert__title"
  }, title), children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "edm-alert__x",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_dialog = `
.edm-dlg-scrim{position:fixed;inset:0;z-index:70;display:grid;place-items:center;padding:var(--space-6);background:var(--scrim-navy);backdrop-filter:var(--blur-scrim);animation:ed-fade var(--dur-base) var(--ease-standard) both}
.edm-dlg{position:relative;width:100%;max-width:520px;max-height:88vh;overflow:auto;background:var(--white);border-radius:var(--radius-modal);box-shadow:var(--shadow-xl);animation:ed-rise var(--dur-slow) var(--ease-out) both}
@media (max-width:767px){.edm-dlg-scrim{padding:var(--space-4);align-items:flex-end}.edm-dlg,.edm-dlg--sm,.edm-dlg--lg{max-width:none;max-height:92vh}.edm-dlg__hd,[dir="rtl"] .edm-dlg,[lang="ar"] .edm-dlg{font-family:var(--font-arabic)}
[dir="rtl"] .edm-dlg__title,[lang="ar"] .edm-dlg__title{font-weight:var(--weight-arabic-display);line-height:var(--leading-arabic-display)}
.edm-dlg__body{padding-inline:var(--space-5)}.edm-dlg__ft{flex-direction:column-reverse;padding-inline:var(--space-5)}.edm-dlg__ft>*{width:100%}}
.edm-dlg--sm{max-width:400px}
.edm-dlg--lg{max-width:720px}
.edm-dlg__hd{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);padding:var(--space-6) var(--space-6) 0}
.edm-dlg__title{font-size:var(--text-xl);font-weight:var(--weight-bold);color:var(--text-strong);letter-spacing:var(--tracking-tight)}
.edm-dlg__sub{margin-top:var(--space-2);font-size:var(--text-sm);color:var(--text-muted);line-height:1.55}
[dir="rtl"] .edm-dlg,[lang="ar"] .edm-dlg{font-family:var(--font-arabic)}
[dir="rtl"] .edm-dlg__title,[lang="ar"] .edm-dlg__title{font-weight:var(--weight-arabic-display);line-height:var(--leading-arabic-display)}
.edm-dlg__body{padding:var(--space-5) var(--space-6)}
.edm-dlg__ft{display:flex;justify-content:flex-end;gap:var(--space-3);padding:var(--space-4) var(--space-6) var(--space-6);border-top:1px solid var(--border-subtle);margin-top:var(--space-2);flex-wrap:wrap}
.edm-dlg__x{border:0;background:transparent;color:var(--text-subtle);cursor:pointer;font-size:20px;line-height:1;padding:2px 6px;border-radius:var(--radius-xs);flex:none}
.edm-dlg__x:hover{color:var(--text-strong);background:var(--surface-subtle)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-dialog';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_dialog;
  }
}
function Dialog({
  open = true,
  title,
  subtitle,
  children,
  footer,
  size = 'md',
  onClose,
  className = '',
  ...rest
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-dlg', size !== 'md' && 'edm-dlg--' + size, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg__hd"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg__sub"
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "edm-dlg__x",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "edm-dlg__ft"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_statuspill = `
.edm-status{display:inline-flex;align-items:center;gap:var(--space-2);height:26px;padding:0 var(--space-3) 0 var(--space-2);border-radius:var(--radius-pill);font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-wide);white-space:nowrap;border:1px solid transparent}
/* Arabic: the global RTL reset in tokens/base.css already strips the
   Latin tracking; this restores the size Arabic needs at pill scale. */
[dir="rtl"] .edm-status,[lang="ar"] .edm-status{font-size:var(--text-sm);font-weight:var(--weight-arabic-strong);height:28px}
.edm-status__dot{width:7px;height:7px;border-radius:50%;background:currentColor;flex:none}
.edm-status--live .edm-status__dot{animation:ed-pulse 1.8s var(--ease-in-out) infinite}
/* Every state pairs its background with its AA-verified -fg token, and
   every state also carries a distinct dot + label so state is never
   communicated by colour alone. */
[dir="rtl"] .edm-status,[lang="ar"] .edm-status{font-family:var(--font-arabic);font-weight:var(--weight-arabic-strong);font-size:var(--text-sm);height:28px}
.edm-status--pending{background:var(--state-pending-bg);color:var(--state-pending-fg)}
.edm-status--funded{background:var(--state-info-bg);color:var(--state-info-fg)}
.edm-status--held{background:var(--navy-900);color:#fff}
.edm-status--verifying{background:var(--state-warning-bg);color:var(--state-warning-fg)}
.edm-status--released{background:var(--state-success-bg);color:var(--state-success-fg)}
.edm-status--disputed{background:var(--state-danger-bg);color:var(--state-danger-fg)}
.edm-status--cancelled{background:transparent;border-color:var(--border-control);color:var(--text-muted)}
.edm-status--on-dark[dir="rtl"] .edm-status,[lang="ar"] .edm-status{font-family:var(--font-arabic);font-weight:var(--weight-arabic-strong);font-size:var(--text-sm);height:28px}
.edm-status--pending{background:rgba(255,255,255,.12);color:var(--mist-300)}
.edm-status--on-dark.edm-status--held{background:rgba(255,255,255,.16);color:#fff}
.edm-status--on-dark.edm-status--cancelled{border-color:rgba(255,255,255,.28);color:var(--mist-400)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-statuspill';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_statuspill;
  }
}
const LABELS = {
  pending: 'Awaiting deposit',
  funded: 'Funded',
  held: 'In escrow',
  verifying: 'Verifying',
  released: 'Released',
  disputed: 'Disputed',
  cancelled: 'Cancelled'
};
function StatusPill({
  state = 'pending',
  label,
  live = false,
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['edm-status', 'edm-status--' + state, live && 'edm-status--live', onDark && 'edm-status--on-dark', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "edm-status__dot"
  }), label || LABELS[state] || state);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_toast = `
.edm-toast{display:flex;align-items:flex-start;gap:var(--space-3);min-width:280px;max-width:420px;padding:var(--space-4);border-radius:var(--radius-md);background:var(--navy-900);color:var(--mist-300);box-shadow:var(--shadow-xl);font-size:var(--text-sm);line-height:1.5;animation:ed-rise var(--dur-slow) var(--ease-out) both}
.edm-toast__mark{flex:none;width:4px;align-self:stretch;border-radius:2px;background:var(--teal-500)}
[dir="rtl"] .edm-toast,[lang="ar"] .edm-toast{font-family:var(--font-arabic);line-height:var(--leading-arabic)}
[dir="rtl"] .edm-toast__title,[lang="ar"] .edm-toast__title{font-weight:var(--weight-arabic-display)}
.edm-toast--info .edm-toast__mark{background:var(--blue-500)}
.edm-toast--warning .edm-toast__mark{background:var(--gold-500)}
.edm-toast--danger .edm-toast__mark{background:var(--coral-500)}
.edm-toast--success .edm-toast__mark{background:var(--brand-teal)}
.edm-toast__body{flex:1;min-width:0}
.edm-toast__title{display:block;color:#fff;font-weight:var(--weight-bold);margin-bottom:2px}
.edm-toast__x{flex:none;border:0;background:transparent;color:var(--mist-400);cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;border-radius:var(--radius-xs)}
.edm-toast__x:hover{color:#fff;background:rgba(255,255,255,.12)}
.edm-toast-stack{position:fixed;inset-block-end:var(--space-6);inset-inline-end:var(--space-6);display:flex;flex-direction:column;gap:var(--space-3);z-index:60}
.edm-toast__x:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring-on-dark);outline-offset:2px}
@media (max-width:767px){.edm-toast-stack{inset-inline:var(--space-4);inset-block-end:var(--space-4)}.edm-toast{min-width:0;max-width:none}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-toast';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_toast;
  }
}
function Toast({
  children,
  title,
  tone = 'success',
  onDismiss,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-toast', 'edm-toast--' + tone, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "edm-toast__mark",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edm-toast__body"
  }, title && /*#__PURE__*/React.createElement("strong", {
    className: "edm-toast__title"
  }, title), children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "edm-toast__x",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\xD7"));
}

/** Fixed bottom-end stack. Wrap Toasts in this. */
function ToastStack({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-toast-stack', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_tooltip = `
.edm-tip{position:relative;display:inline-flex}
.edm-tip__bub{position:absolute;z-index:50;padding:var(--space-2) var(--space-3);border-radius:var(--radius-sm);background:var(--navy-900);color:#fff;font-size:var(--text-xs);font-weight:var(--weight-medium);line-height:1.4;white-space:nowrap;box-shadow:var(--shadow-lg);opacity:0;pointer-events:none;transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)}
.edm-tip__bub--wrap{white-space:normal;width:220px}
.edm-tip--open .edm-tip__bub{opacity:1}
.edm-tip__bub--top{bottom:calc(100% + 8px);left:50%;transform:translate(-50%,4px)}
.edm-tip--open .edm-tip__bub--top{transform:translate(-50%,0)}
.edm-tip__bub--bottom{top:calc(100% + 8px);left:50%;transform:translate(-50%,-4px)}
.edm-tip--open .edm-tip__bub--bottom{transform:translate(-50%,0)}
.edm-tip__bub--end{top:50%;inset-inline-start:calc(100% + 8px);transform:translateY(-50%)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-tooltip';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_tooltip;
  }
}
function Tooltip({
  children,
  content,
  placement = 'top',
  wrap = false,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['edm-tip', open && 'edm-tip--open', className].filter(Boolean).join(' '),
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: ['edm-tip__bub', 'edm-tip__bub--' + placement, wrap && 'edm-tip__bub--wrap'].filter(Boolean).join(' '),
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_checkbox = `
.edm-check{display:flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;min-height:var(--space-6)}
.edm-check--disabled{cursor:not-allowed;opacity:.55}
.edm-check input{position:absolute;opacity:0;width:0;height:0}
.edm-check__box{flex:none;width:18px;height:18px;margin-top:2px;border:1px solid var(--border-control);border-radius:var(--radius-xs);background:var(--white);display:grid;place-items:center;transition:var(--transition-control)}
.edm-check:hover .edm-check__box{border-color:var(--border-brand)}
.edm-check input:checked + .edm-check__box{background:var(--action-primary);border-color:var(--action-primary)}
.edm-check input:indeterminate + .edm-check__box{background:var(--action-primary);border-color:var(--action-primary)}
.edm-check input:focus-visible + .edm-check__box{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-check__tick{width:10px;height:6px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(-45deg) translate(1px,-1px);opacity:0;transition:opacity var(--dur-fast) var(--ease-standard)}
.edm-check input:checked + .edm-check__box .edm-check__tick{opacity:1}
.edm-check__dash{position:absolute;width:9px;height:2px;background:#fff;opacity:0}
.edm-check input:indeterminate + .edm-check__box .edm-check__dash{opacity:1}
.edm-check input:indeterminate + .edm-check__box .edm-check__tick{opacity:0}
.edm-check__txt{font-size:var(--text-sm);color:var(--text-body);line-height:1.45}
@media (pointer:coarse){.edm-check{min-height:var(--touch-target-min);align-items:center}.edm-check__box{margin-top:0}}
.edm-check__txt b{display:block;color:var(--text-strong);font-weight:var(--weight-medium)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-checkbox';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_checkbox;
  }
}
function Checkbox({
  label,
  description,
  indeterminate = false,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: ['edm-check', disabled && 'edm-check--disabled', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "edm-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edm-check__dash"
  }), /*#__PURE__*/React.createElement("span", {
    className: "edm-check__tick"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "edm-check__txt"
  }, label && /*#__PURE__*/React.createElement("b", null, label), description));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_input = `
.edm-field{display:flex;flex-direction:column;gap:var(--space-2)}
.edm-field__label{font-size:var(--type-label-size);font-weight:var(--type-label-weight);color:var(--text-strong)}
.edm-field__req{color:var(--state-danger);margin-inline-start:2px}
.edm-field__hint{font-size:var(--type-caption-size);color:var(--text-muted)}
.edm-field__err{font-size:var(--type-caption-size);color:var(--state-danger-fg);font-weight:var(--weight-medium)}
.edm-input{display:flex;align-items:center;gap:var(--space-2);height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-control);border-radius:var(--radius-input);background:var(--white);transition:var(--transition-control)}
.edm-input:hover{border-color:var(--border-strong)}
.edm-input:focus-within{border-color:var(--border-brand);border-width:var(--border-width-strong);padding:0 calc(var(--space-3) - 1px);box-shadow:var(--focus-ring-shadow)}
.edm-input--lg{height:var(--control-height-lg);padding:0 var(--space-4)}
.edm-input--lg.edm-input:focus-within{padding:0 calc(var(--space-4) - 1px)}
.edm-input--sm{height:var(--control-height-sm);padding:0 var(--space-2)}
.edm-input--error{border-color:var(--state-danger-fg);background:var(--state-danger-bg)}
.edm-input--error:focus-within{border-color:var(--state-danger-fg);box-shadow:0 0 0 3px rgba(179,56,61,.28)}
.edm-input--disabled{background:var(--surface-sunken);border-color:var(--border-subtle);cursor:not-allowed}
.edm-input input{flex:1;min-width:0;border:0;outline:0;background:transparent;font-size:var(--text-sm);color:var(--text-strong);font-family:inherit}
/* iOS zooms any field under 16px on focus; on touch the control grows to
   the 44px floor and the value to 16px so it never does. */
@media (max-width:767px){.edm-input{height:var(--touch-target-min)}.edm-input input{font-size:var(--text-base)}}
.edm-input--lg input{font-size:var(--text-base)}
.edm-input input::placeholder{color:var(--text-subtle)}
.edm-input input:disabled{cursor:not-allowed;color:var(--text-subtle)}
.edm-input__affix{flex:none;font-size:var(--text-sm);font-weight:var(--weight-bold);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.edm-input--amount input{font-variant-numeric:tabular-nums;font-weight:var(--weight-bold);letter-spacing:var(--tracking-tight);font-size:var(--text-lg)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-input';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_input;
  }
}
function Input({
  label,
  hint,
  error,
  required = false,
  prefix,
  suffix,
  size = 'md',
  amount = false,
  disabled = false,
  id,
  className = '',
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const cls = ['edm-input', size !== 'md' && 'edm-input--' + size, error && 'edm-input--error', disabled && 'edm-input--disabled', amount && 'edm-input--amount', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "edm-field",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "edm-field__label",
    htmlFor: rid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "edm-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: cls
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "edm-input__affix"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "edm-input__affix"
  }, suffix)), error ? /*#__PURE__*/React.createElement("span", {
    className: "edm-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "edm-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_radio = `
.edm-radio{display:flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;min-height:var(--space-6)}
.edm-radio--disabled{cursor:not-allowed;opacity:.55}
.edm-radio input{position:absolute;opacity:0;width:0;height:0}
.edm-radio__dot{flex:none;width:18px;height:18px;margin-top:2px;border:1px solid var(--border-control);border-radius:50%;background:var(--white);display:grid;place-items:center;transition:var(--transition-control)}
.edm-radio:hover .edm-radio__dot{border-color:var(--border-brand)}
.edm-radio input:checked + .edm-radio__dot{border-color:var(--action-primary);border-width:var(--border-width-strong)}
.edm-radio input:focus-visible + .edm-radio__dot{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-radio__dot i{width:8px;height:8px;border-radius:50%;background:var(--action-primary);transform:scale(0);transition:transform var(--dur-fast) var(--ease-standard)}
.edm-radio input:checked + .edm-radio__dot i{transform:scale(1)}
.edm-radio__txt{font-size:var(--text-sm);color:var(--text-body);line-height:1.45}
.edm-radio__txt b{display:block;color:var(--text-strong);font-weight:var(--weight-medium)}
.edm-radio-card{border:1px solid var(--border-control);border-radius:var(--radius-md);padding:var(--space-4);transition:var(--transition-control)}
@media (pointer:coarse){.edm-radio{min-height:var(--touch-target-min)}}
.edm-radio-card:hover{border-color:var(--border-strong);background:var(--mist-050)}
.edm-radio-card:has(input:checked){border-color:var(--border-brand);border-width:var(--border-width-strong);background:var(--blue-100);padding:calc(var(--space-4) - 1px)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-radio';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_radio;
  }
}
function Radio({
  label,
  description,
  card = false,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['edm-radio', card && 'edm-radio-card', disabled && 'edm-radio--disabled', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "edm-radio__dot"
  }, /*#__PURE__*/React.createElement("i", null)), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "edm-radio__txt"
  }, label && /*#__PURE__*/React.createElement("b", null, label), description));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_select = `
.edm-select{position:relative;display:flex;align-items:center;height:var(--control-height-md);border:1px solid var(--border-control);border-radius:var(--radius-input);background:var(--white);transition:var(--transition-control)}
.edm-select:hover{border-color:var(--border-strong)}
.edm-select:focus-within{border-color:var(--border-brand);box-shadow:var(--focus-ring-shadow)}
.edm-select--lg{height:var(--control-height-lg)}
.edm-select--error{border-color:var(--state-danger-fg);background:var(--state-danger-bg)}
@media (max-width:767px){.edm-select{height:var(--touch-target-min)}.edm-select select{font-size:var(--text-base)}}
.edm-select--disabled{background:var(--surface-sunken);cursor:not-allowed}
.edm-select select{appearance:none;width:100%;height:100%;border:0;outline:0;background:transparent;padding:0 var(--space-8) 0 var(--space-3);font-family:inherit;font-size:var(--text-sm);color:var(--text-strong);cursor:pointer}
.edm-select select:disabled{cursor:not-allowed;color:var(--text-subtle)}
.edm-select__chev{position:absolute;inset-inline-end:var(--space-3);width:9px;height:9px;border-right:2px solid var(--text-body);border-bottom:2px solid var(--text-body);transform:rotate(45deg) translateY(-2px);pointer-events:none}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-select';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_select;
  }
}
function Select({
  label,
  hint,
  error,
  required = false,
  size = 'md',
  disabled = false,
  options = [],
  children,
  placeholder,
  id,
  style,
  className = '',
  ...rest
}) {
  const rid = id || React.useId();
  const cls = ['edm-select', size !== 'md' && 'edm-select--' + size, error && 'edm-select--error', disabled && 'edm-select--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "edm-field",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "edm-field__label",
    htmlFor: rid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "edm-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "edm-select__chev"
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "edm-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "edm-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_switch = `
.edm-switch{display:inline-flex;align-items:center;gap:var(--space-3);cursor:pointer}
.edm-switch--disabled{cursor:not-allowed;opacity:.55}
.edm-switch input{position:absolute;opacity:0;width:0;height:0}
.edm-switch__track{position:relative;flex:none;width:40px;height:22px;border-radius:var(--radius-pill);background:var(--mist-400);transition:background-color var(--dur-base) var(--ease-standard)}
.edm-switch__track i{position:absolute;top:3px;inset-inline-start:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:var(--shadow-xs);transition:transform var(--dur-base) var(--ease-standard)}
.edm-switch input:checked + .edm-switch__track{background:var(--action-release)}
.edm-switch input:checked + .edm-switch__track i{transform:translateX(18px)}
[dir=rtl] .edm-switch input:checked + .edm-switch__track i{transform:translateX(-18px)}
.edm-switch input:focus-visible + .edm-switch__track{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-switch__txt{font-size:var(--text-sm);color:var(--text-strong);font-weight:var(--weight-medium)}
@media (pointer:coarse){.edm-switch{min-height:var(--touch-target-min)}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-switch';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_switch;
  }
}
function Switch({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['edm-switch', disabled && 'edm-switch--disabled', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "edm-switch__track"
  }, /*#__PURE__*/React.createElement("i", null)), label && /*#__PURE__*/React.createElement("span", {
    className: "edm-switch__txt"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_langtoggle = `
.edm-lang{display:inline-grid;place-items:center;min-width:40px;height:40px;padding:0 var(--space-2);border:1px solid var(--border-default);border-radius:var(--radius-xs);background:transparent;color:var(--text-strong);font-family:inherit;font-size:var(--text-sm);font-weight:var(--weight-bold);cursor:pointer;transition:var(--transition-control)}
.edm-lang:hover{border-color:var(--border-brand);color:var(--action-primary)}
.edm-lang:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px}
.edm-lang--on-dark{border-color:rgba(255,255,255,.36);color:#fff}
.edm-lang--on-dark:hover{border-color:#fff;background:rgba(255,255,255,.12);color:#fff}
.edm-lang--on-dark:focus-visible{outline-color:var(--focus-ring-on-dark)}
@media (pointer:coarse){.edm-lang{min-width:var(--touch-target-min);height:var(--touch-target-min)}}
.edm-lang--ar{font-family:var(--font-arabic)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-langtoggle';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_langtoggle;
  }
}
function LangToggle({
  lang = 'en',
  onChange,
  onDark = false,
  className = '',
  ...rest
}) {
  const next = lang === 'en' ? 'ar' : 'en';
  const label = next === 'ar' ? 'Ar' : 'En';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['edm-lang', onDark && 'edm-lang--on-dark', className].filter(Boolean).join(' '),
    "aria-label": next === 'ar' ? 'Switch to Arabic' : 'Switch to English',
    onClick: () => onChange && onChange(next)
  }, rest), label);
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_tabs = `
.edm-tabs{display:flex;gap:var(--space-6);border-bottom:1px solid var(--border-subtle);overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}
.edm-tabs::-webkit-scrollbar{display:none}
@media (pointer:coarse){.edm-tab{min-height:var(--touch-target-min)}}
@media (max-width:767px){.edm-tabs{gap:var(--space-5)}}
.edm-tabs--pills{gap:var(--space-1);border:0;background:var(--surface-subtle);padding:var(--space-1);border-radius:var(--radius-md);display:inline-flex}
.edm-tab{position:relative;border:0;background:transparent;padding:var(--space-3) 0;font-family:inherit;font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-muted);cursor:pointer;transition:var(--transition-control);white-space:nowrap;display:inline-flex;align-items:center;gap:var(--space-2)}
.edm-tab:hover{color:var(--text-strong)}
.edm-tab::after{content:'';position:absolute;inset-inline:0;bottom:-1px;height:2px;background:var(--action-primary);transform:scaleX(0);transition:transform var(--dur-base) var(--ease-standard)}
.edm-tab[aria-selected=true]{color:var(--text-strong);font-weight:var(--weight-bold)}
.edm-tab[aria-selected=true]::after{transform:scaleX(1)}
.edm-tab:focus-visible{outline:var(--border-width-focus) solid var(--focus-ring);outline-offset:2px;border-radius:var(--radius-xs)}
.edm-tabs--pills .edm-tab{padding:var(--space-2) var(--space-4);border-radius:var(--radius-sm)}
.edm-tabs--pills .edm-tab::after{display:none}
.edm-tabs--pills .edm-tab[aria-selected=true]{background:var(--white);color:var(--text-strong);box-shadow:var(--shadow-xs)}
.edm-tabs--on-dark{border-color:rgba(255,255,255,.16)}
.edm-tabs--on-dark .edm-tab{color:var(--mist-400)}
.edm-tabs--on-dark .edm-tab:hover{color:#fff}
.edm-tabs--on-dark .edm-tab[aria-selected=true]{color:#fff}
.edm-tabs--on-dark .edm-tab::after{background:var(--brand-teal)}
.edm-tabs--on-dark .edm-tab:focus-visible{outline-color:var(--focus-ring-on-dark)}
.edm-tab__count{font-size:var(--text-xs);font-weight:var(--weight-bold);color:var(--text-subtle);background:var(--surface-subtle);border-radius:var(--radius-pill);padding:1px 7px}
.edm-tab[aria-selected=true] .edm-tab__count{background:var(--blue-100);color:var(--blue-700)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-tabs';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = CSS_tabs;
  }
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  onDark = false,
  className = '',
  ...rest
}) {
  const active = value != null ? value : items[0] && (items[0].id || items[0]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['edm-tabs', variant === 'pills' && 'edm-tabs--pills', onDark && 'edm-tabs--on-dark', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const id = it.id || it;
    const label = it.label || it;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      className: "edm-tab",
      "aria-selected": id === active,
      onClick: () => onChange && onChange(id)
    }, label, it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "edm-tab__count"
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Phone.jsx
try { (() => {
const {
  Logo,
  Button,
  Card,
  StatusPill,
  TransactionSteps,
  Badge,
  Input,
  Select,
  Radio,
  Dialog,
  Alert,
  Seal
} = window.EDamanaDesignSystem_fbf285;
const phCss = `
.edm-app{height:100%;display:flex;flex-direction:column;background:var(--mist-100);font-family:var(--font-latin)}
.edm-app[dir=rtl]{font-family:var(--font-arabic)}
.edm-app__hd{background:var(--navy-900);padding:58px var(--space-5) var(--space-5);position:relative;overflow:hidden;flex:none}
.edm-app__pat{position:absolute;inset:0;background-image:var(--pattern-tile-light);background-size:150px;opacity:.13}
.edm-app__hdin{position:relative;z-index:1}
.edm-app__row{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3)}
.edm-app__hello{font-size:var(--text-xs);color:var(--mist-300)}
.edm-app__name{font-size:var(--text-lg);font-weight:var(--weight-bold);color:#fff}
.edm-app__bal{margin-top:var(--space-5)}
/* No UI text below --text-min (12px). Arabic loses more legibility than
   Latin at small sizes, so the RTL rule below steps it up again. */
.edm-app__ballbl{font-size:var(--text-min);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--teal-300)}
.edm-app[dir=rtl] .edm-app__ballbl{font-size:var(--text-sm);font-weight:var(--weight-arabic-strong)}
.edm-app__balv{font-size:32px;font-weight:var(--weight-extrabold);color:#fff;font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-tight);line-height:1.1}
.edm-app__body{flex:1;overflow:auto;padding:var(--space-5) var(--space-5) 96px;display:flex;flex-direction:column;gap:var(--space-4)}
.edm-app__sec{font-size:var(--text-min);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted);margin-top:var(--space-2)}
.edm-app[dir=rtl] .edm-app__sec{font-size:var(--text-sm);font-weight:var(--weight-arabic-strong)}
.edm-row{display:flex;align-items:center;gap:var(--space-3);padding:var(--space-4);background:#fff;border:1px solid var(--border-subtle);border-radius:var(--radius-md);box-shadow:var(--shadow-xs);cursor:pointer;transition:var(--transition-surface)}
.edm-row:active{transform:scale(.99)}
.edm-row__t{flex:1;min-width:0}
.edm-row__t b{display:block;font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.edm-row__t span{font-size:var(--text-min);color:var(--text-muted)}
.edm-row__a{text-align:end;flex:none}
.edm-row__a b{display:block;font-size:var(--text-sm);font-weight:var(--weight-bold);color:var(--navy-900);font-variant-numeric:tabular-nums}
.edm-tab{position:absolute;inset-block-end:0;inset-inline:0;height:82px;padding:var(--space-2) var(--space-4) 26px;background:rgba(255,255,255,.9);backdrop-filter:var(--blur-panel);border-top:1px solid var(--border-subtle);display:flex;z-index:40}
.edm-tab button{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:0;cursor:pointer;color:var(--text-muted);font-family:inherit;font-size:var(--text-2xs);font-weight:var(--weight-medium);padding:6px 0;min-height:var(--touch-target-min)}
.edm-app[dir=rtl] .edm-tab button{font-size:var(--text-xs);font-weight:var(--weight-arabic-medium)}
.edm-tab button[aria-current=page]{color:var(--action-primary);font-weight:var(--weight-bold)}
.edm-app__back{display:inline-flex;align-items:center;gap:6px;border:0;background:0;color:var(--mist-300);font-family:inherit;font-size:var(--text-sm);cursor:pointer;padding:4px 0;min-height:32px;margin-bottom:var(--space-2)}
.edm-app__back:focus-visible{outline:2px solid var(--focus-ring-on-dark);outline-offset:2px}
.edm-hero{height:118px;border-radius:var(--radius-md);background:var(--mist-200) center/cover;position:relative;overflow:hidden}
.edm-fields{display:flex;flex-direction:column;gap:var(--space-4)}
.edm-set{display:flex;align-items:center;gap:var(--space-3);padding:var(--space-4);background:#fff;border-bottom:1px solid var(--border-subtle);font-size:var(--text-sm);color:var(--text-strong);cursor:pointer}
.edm-set:first-child{border-radius:var(--radius-md) var(--radius-md) 0 0}
.edm-set:last-child{border-bottom:0;border-radius:0 0 var(--radius-md) var(--radius-md)}
.edm-set b{flex:1;font-weight:var(--weight-medium)}
.edm-toastm{position:absolute;inset-block-end:96px;inset-inline:16px;padding:var(--space-4);border-radius:var(--radius-md);background:var(--navy-900);color:var(--mist-300);font-size:var(--text-sm);box-shadow:var(--shadow-xl);z-index:50;animation:ed-rise var(--dur-slow) var(--ease-out) both}
.edm-toastm b{display:block;color:#fff;font-weight:var(--weight-bold)}
.edm-app[dir=rtl] .edm-app__name{font-weight:var(--weight-arabic-display)}
.edm-app[dir=rtl] .edm-row__t b{font-weight:var(--weight-arabic-medium)}
.edm-app[dir=rtl] .edm-app__balv{font-weight:var(--weight-arabic-display)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edm-app-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = phCss;
  }
}
const L = '../../assets/logo';
const PHOTO = '../../assets/imagery/car-showroom.png';
function Phone({
  lang
}) {
  const t = window.M[lang];
  const AR_STATE = window.AR_STATE;
  const [tab, setTab] = React.useState('home');
  const [openRow, setOpenRow] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);
  const [released, setReleased] = React.useState(false);
  const label = s => lang === 'ar' ? AR_STATE[s] : undefined;
  const row = r => /*#__PURE__*/React.createElement("div", {
    className: "edm-row",
    key: r.id,
    onClick: () => {
      setOpenRow(r);
      setTab('txns');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'var(--mist-200) center/cover',
      backgroundImage: 'url(' + PHOTO + ')',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "edm-row__t"
  }, /*#__PURE__*/React.createElement("b", null, r.name), /*#__PURE__*/React.createElement("span", null, r.sub)), /*#__PURE__*/React.createElement("div", {
    className: "edm-row__a"
  }, /*#__PURE__*/React.createElement("b", null, r.amt), /*#__PURE__*/React.createElement(StatusPill, {
    state: r.state,
    label: label(r.state)
  })));
  let body;
  if (openRow) {
    const r = openRow;
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hd"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__pat",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hdin"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "edm-app__back",
      onClick: () => {
        setOpenRow(null);
        setReleased(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": lang === 'ar' ? 'arrow-right' : 'arrow-left',
      style: {
        width: 14,
        height: 14
      }
    }), " ", t.detailBack), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__name",
      style: {
        fontSize: 'var(--text-md)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__bal",
      style: {
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__ballbl"
    }, t.balanceLabel), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__balv"
    }, r.amt, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        color: 'var(--mist-300)'
      }
    }, t.currency))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatusPill, {
      onDark: true,
      state: released ? 'released' : r.state,
      label: label(released ? 'released' : r.state),
      live: !released && r.state === 'verifying'
    })))), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-hero",
      style: {
        backgroundImage: 'url(' + PHOTO + ')'
      }
    }), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement(TransactionSteps, {
      orientation: "vertical",
      current: released ? 4 : 2,
      steps: t.flow
    })), /*#__PURE__*/React.createElement(Alert, {
      tone: "authority",
      title: t.balanceLabel
    }, t.actionBody), /*#__PURE__*/React.createElement(Button, {
      block: true,
      variant: "secondary",
      size: "lg",
      disabled: released,
      onClick: () => setConfirm(true)
    }, released ? t.released : t.release), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        placeItems: 'center',
        paddingTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Seal, {
      size: 64,
      base: L
    }))));
  } else if (tab === 'new') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hd"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__pat",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hdin"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__name"
    }, t.newTitle), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hello",
      style: {
        marginTop: 4
      }
    }, t.newSub))), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-fields"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: 'm-role-' + lang,
      card: true,
      defaultChecked: true,
      label: t.buy
    }), /*#__PURE__*/React.createElement(Radio, {
      name: 'm-role-' + lang,
      card: true,
      label: t.sell
    })), /*#__PURE__*/React.createElement(Select, {
      label: t.asset,
      options: lang === 'ar' ? ['مركبة', 'أرض', 'عقار'] : ['Vehicle', 'Land', 'Property']
    }), /*#__PURE__*/React.createElement(Input, {
      label: t.amount,
      prefix: "JOD",
      amount: true,
      size: "lg",
      defaultValue: "24,500"
    }), /*#__PURE__*/React.createElement(Input, {
      label: t.counterparty,
      placeholder: "+962 7 0000 0000"
    }), /*#__PURE__*/React.createElement(Button, {
      block: true,
      variant: "primary",
      size: "lg",
      onClick: () => setTab('txns')
    }, t.openEscrow))));
  } else if (tab === 'me') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hd"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__pat",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hdin",
      style: {
        display: 'grid',
        placeItems: 'center',
        gap: 'var(--space-3)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--teal-500)',
        color: 'var(--navy-900)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 20,
        fontWeight: 800
      }
    }, "NA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__name"
    }, t.greet), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hello"
    }, t.verified)))), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__body"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, t.settings.map(s => /*#__PURE__*/React.createElement("div", {
      className: "edm-set",
      key: s
    }, /*#__PURE__*/React.createElement("b", null, s), /*#__PURE__*/React.createElement("i", {
      "data-lucide": lang === 'ar' ? 'chevron-left' : 'chevron-right',
      style: {
        width: 16,
        height: 16,
        color: 'var(--text-subtle)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        placeItems: 'center',
        paddingTop: 'var(--space-6)',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      lockup: "horizontal",
      colourway: "mono",
      height: 22,
      base: L,
      style: {
        color: 'var(--mist-400)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-subtle)'
      }
    }, "eDamana.com"))));
  } else {
    const rows = tab === 'txns' ? t.rows : t.rows.slice(0, 3);
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hd"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__pat",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hdin"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__row"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__hello"
    }, t.hello), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__name"
    }, t.greet)), /*#__PURE__*/React.createElement(Logo, {
      lockup: "symbol",
      colourway: "on-dark",
      height: 30,
      base: L
    })), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__bal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "edm-app__ballbl"
    }, t.balanceLabel), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__balv"
    }, "124,650 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        color: 'var(--mist-300)'
      }
    }, t.currency))))), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__body"
    }, tab === 'home' && /*#__PURE__*/React.createElement(Card, {
      padding: "md",
      live: true,
      title: t.action,
      eyebrow: "EDM-4471"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        marginTop: 'var(--space-2)'
      }
    }, t.actionBody), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      variant: "secondary",
      onClick: () => {
        setOpenRow(t.rows[0]);
        setTab('txns');
      }
    }, t.confirm))), /*#__PURE__*/React.createElement("div", {
      className: "edm-app__sec"
    }, tab === 'txns' ? t.open : t.recent), rows.map(row)));
  }
  return /*#__PURE__*/React.createElement(IOSDevice, {
    width: 402,
    height: 860
  }, /*#__PURE__*/React.createElement("div", {
    className: "edm-app",
    dir: t.dir
  }, body, /*#__PURE__*/React.createElement("nav", {
    className: "edm-tab"
  }, t.tabs.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    type: "button",
    "aria-current": !openRow && tab === tb.id ? 'page' : undefined,
    onClick: () => {
      setTab(tb.id);
      setOpenRow(null);
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": tb.icon,
    style: {
      width: 20,
      height: 20
    }
  }), tb.label))), released && /*#__PURE__*/React.createElement("div", {
    className: "edm-toastm"
  }, /*#__PURE__*/React.createElement("b", null, t.released), "JOD 24,500 \u2192 ", openRow ? openRow.sub : ''), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    size: "sm",
    onClose: () => setConfirm(false),
    title: t.releaseQ,
    subtitle: t.releaseSub,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, t.cancel), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setConfirm(false);
        setReleased(true);
      }
    }, t.release))
  })));
}
Object.assign(window, {
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/mobileCopy.jsx
try { (() => {
const M = {
  en: {
    dir: 'ltr',
    greet: 'Nour',
    hello: 'Good afternoon,',
    balanceLabel: 'Held on our guarantee',
    tabs: [{
      id: 'home',
      label: 'Home',
      icon: 'home'
    }, {
      id: 'txns',
      label: 'Escrows',
      icon: 'layers'
    }, {
      id: 'new',
      label: 'New',
      icon: 'plus-circle'
    }, {
      id: 'me',
      label: 'Profile',
      icon: 'user'
    }],
    action: 'Needs you now',
    actionBody: 'Confirm you have received the vehicle and its waiver.',
    confirm: 'Confirm handover',
    open: 'Open escrows',
    recent: 'Recent',
    buy: 'I want to buy',
    sell: 'I want to sell',
    flow: [{
      label: 'Agreement',
      meta: 'Accepted by both parties'
    }, {
      label: 'Deposit',
      meta: 'JOD 24,500 received'
    }, {
      label: 'In escrow',
      meta: 'Held on our guarantee'
    }, {
      label: 'Handover',
      meta: 'Asset and waiver'
    }, {
      label: 'Release',
      meta: 'To the seller'
    }],
    release: 'Release funds',
    releaseQ: 'Release JOD 24,500?',
    releaseSub: 'This cannot be undone.',
    cancel: 'Cancel',
    released: 'Funds released',
    detailBack: 'Escrows',
    newTitle: 'New escrow',
    newSub: 'Nothing moves until both parties accept.',
    role: 'Your role',
    amount: 'Amount',
    counterparty: 'Counterparty mobile',
    asset: 'Asset type',
    openEscrow: 'Open escrow',
    profile: 'Profile',
    verified: 'Verified · Individual',
    currency: 'JOD',
    rows: [{
      id: 'EDM-4471',
      name: 'Toyota Land Cruiser 2021',
      sub: 'Buying · Rami Al-Khatib',
      amt: '24,500',
      state: 'held'
    }, {
      id: 'EDM-4468',
      name: 'Mercedes-Benz S500 2019',
      sub: 'Buying · Sahel Motors',
      amt: '61,000',
      state: 'verifying'
    }, {
      id: 'EDM-4455',
      name: 'Nissan Patrol 2022',
      sub: 'Selling · Dana Haddad',
      amt: '38,750',
      state: 'funded'
    }, {
      id: 'EDM-4402',
      name: 'Kia Sportage 2020',
      sub: 'Buying · Layan Odeh',
      amt: '19,200',
      state: 'released'
    }],
    settings: ['Bank accounts', 'Documents', 'Notifications', 'Security', 'Help']
  },
  ar: {
    dir: 'rtl',
    greet: 'نور',
    hello: 'مساء الخير،',
    balanceLabel: 'على ضمانتنا',
    tabs: [{
      id: 'home',
      label: 'الرئيسية',
      icon: 'home'
    }, {
      id: 'txns',
      label: 'الضمانات',
      icon: 'layers'
    }, {
      id: 'new',
      label: 'جديد',
      icon: 'plus-circle'
    }, {
      id: 'me',
      label: 'حسابي',
      icon: 'user'
    }],
    action: 'يحتاج إجراءك',
    actionBody: 'أكد استلامك للمركبة والتنازل.',
    confirm: 'تأكيد التسليم',
    open: 'ضمانات مفتوحة',
    recent: 'الأحدث',
    buy: 'أريد الشراء',
    sell: 'أريد البيع',
    flow: [{
      label: 'الاتفاق',
      meta: 'تم من الطرفين'
    }, {
      label: 'الإيداع',
      meta: 'تم استلام 24,500 د.أ'
    }, {
      label: 'في الضمان',
      meta: 'على ضمانتنا'
    }, {
      label: 'التسليم',
      meta: 'الأصل والتنازل'
    }, {
      label: 'الإطلاق',
      meta: 'إلى البائع'
    }],
    release: 'إطلاق المبلغ',
    releaseQ: 'إطلاق 24,500 د.أ؟',
    releaseSub: 'لا يمكن التراجع عن هذا.',
    cancel: 'إلغاء',
    released: 'تم إطلاق المبلغ',
    detailBack: 'الضمانات',
    newTitle: 'ضمانة جديدة',
    newSub: 'لا شيء يتحرك قبل موافقة الطرفين.',
    role: 'دورك',
    amount: 'المبلغ',
    counterparty: 'رقم الطرف الآخر',
    asset: 'نوع الأصل',
    openEscrow: 'افتح الضمانة',
    profile: 'حسابي',
    verified: 'موثّق · فرد',
    currency: 'د.أ',
    rows: [{
      id: 'EDM-4471',
      name: 'تويوتا لاند كروزر 2021',
      sub: 'شراء · رامي الخطيب',
      amt: '24,500',
      state: 'held'
    }, {
      id: 'EDM-4468',
      name: 'مرسيدس S500 2019',
      sub: 'شراء · معرض ساحل',
      amt: '61,000',
      state: 'verifying'
    }, {
      id: 'EDM-4455',
      name: 'نيسان باترول 2022',
      sub: 'بيع · دانا حداد',
      amt: '38,750',
      state: 'funded'
    }, {
      id: 'EDM-4402',
      name: 'كيا سبورتاج 2020',
      sub: 'شراء · ليان عودة',
      amt: '19,200',
      state: 'released'
    }],
    settings: ['الحسابات البنكية', 'المستندات', 'التنبيهات', 'الأمان', 'المساعدة']
  }
};
const AR_STATE = {
  pending: 'بانتظار الإيداع',
  funded: 'تم الإيداع',
  held: 'في الضمان',
  verifying: 'قيد التحقق',
  released: 'تم الإطلاق',
  disputed: 'نزاع',
  cancelled: 'ملغاة'
};
Object.assign(window, {
  M,
  AR_STATE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/mobileCopy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AppShell.jsx
try { (() => {
const {
  Logo,
  Badge,
  IconButton,
  Button,
  StatusPill
} = window.EDamanaDesignSystem_fbf285;
const shellCss = `
.eds{background:var(--navy-900);display:flex;flex-direction:column;padding:var(--space-6) 0;position:relative;overflow:hidden}
.eds__pat{position:absolute;inset-block-end:0;inset-inline:0;height:42%;background-image:var(--pattern-tile-light);background-size:200px;opacity:.1;pointer-events:none}
.eds__brand{padding:0 var(--space-6) var(--space-8)}
.eds__brand--compact{display:none;padding:0 0 var(--space-6);justify-content:center}
.eds__nav{display:flex;flex-direction:column;gap:2px;padding:0 var(--space-3);position:relative;z-index:1}
.eds__item{display:flex;align-items:center;gap:var(--space-3);height:42px;padding:0 var(--space-3);border:0;border-radius:var(--radius-md);background:transparent;color:var(--mist-400);font-family:inherit;font-size:var(--text-sm);font-weight:var(--weight-medium);cursor:pointer;text-align:start;transition:var(--transition-control)}
.eds__item:hover{background:rgba(255,255,255,.08);color:#fff}
.eds__item[aria-current=page]{background:rgba(255,255,255,.12);color:#fff;font-weight:var(--weight-bold)}
.eds__item[aria-current=page]::before{content:'';position:absolute;inset-inline-start:0;width:3px;height:20px;border-radius:2px;background:var(--brand-teal)}
.eds__item:focus-visible{outline:2px solid var(--focus-ring-on-dark);outline-offset:-2px}
.eds__lbl{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.eds__item{position:relative}
.eds__spacer{flex:1}
.eds__acct{margin:0 var(--space-3);padding:var(--space-4);border-radius:var(--radius-md);background:var(--navy-800);border:1px solid rgba(255,255,255,.16);position:relative;z-index:1}
.eds__acct b{display:block;color:#fff;font-size:var(--text-sm);font-weight:var(--weight-bold)}
.eds__acct span{font-size:var(--text-xs);color:var(--mist-400)}
.eds__bal{margin-top:var(--space-3);font-size:var(--text-lg);font-weight:var(--weight-extrabold);color:var(--teal-300);font-variant-numeric:tabular-nums}
.edt{height:var(--nav-height);background:var(--white);border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;gap:var(--space-4);padding:0 var(--space-8)}
.edt__search{flex:1;max-width:380px;display:flex;align-items:center;gap:var(--space-2);height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-default);border-radius:var(--radius-md);color:var(--text-subtle)}
.edt__search input{flex:1;border:0;outline:0;background:transparent;font-family:inherit;font-size:var(--text-sm)}
.edt__spacer{flex:1}
.edt__who{display:flex;align-items:center;gap:var(--space-3);padding-inline-start:var(--space-4);border-inline-start:1px solid var(--border-subtle)}
.edt__av{width:34px;height:34px;border-radius:50%;background:var(--navy-900);color:#fff;display:grid;place-items:center;font-size:var(--text-xs);font-weight:var(--weight-bold)}
.edt__who b{display:block;font-size:var(--text-sm);color:var(--text-strong);font-weight:var(--weight-medium)}
.edt__who span{font-size:var(--text-xs);color:var(--text-muted)}

/* ── 1200 and below: the sidebar becomes an icon rail ── */
@media (max-width:1199px){
  .eds{padding:var(--space-5) 0;align-items:center}
  .eds__brand{display:none}
  .eds__brand--compact{display:flex}
  .eds__nav{padding:0 var(--space-2);width:100%}
  .eds__item{justify-content:center;padding:0;height:44px}
  .eds__lbl{display:none}
  .eds__acct{display:none}
}
/* ── 900 and below: the rail becomes a horizontal strip above the content ── */
@media (max-width:899px){
  .eds{flex-direction:row;align-items:center;gap:var(--space-2);padding:var(--space-2) var(--layout-page-x);overflow-x:auto}
  .eds__pat{display:none}
  .eds__brand--compact{padding:0;margin-inline-end:var(--space-3)}
  .eds__nav{flex-direction:row;gap:var(--space-1);padding:0;width:auto}
  .eds__item{min-width:44px;flex:none}
  .eds__spacer{display:none}
  .edt{padding:0 var(--layout-page-x);gap:var(--space-3)}
  .edt__search{display:none}
  .edt__who>div{display:none}
  .edt__who{padding-inline-start:var(--space-3)}
}
@media (max-width:600px){.edt__who{border:0;padding:0}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edp-shell-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = shellCss;
  }
}
function AppShell({
  view,
  onView,
  children
}) {
  const NAV = window.NAV;
  return /*#__PURE__*/React.createElement("div", {
    className: "edp"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "eds"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eds__pat",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eds__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "horizontal",
    colourway: "on-dark",
    height: 36,
    base: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eds__brand--compact eds__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "symbol",
    colourway: "on-dark",
    height: 30,
    base: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "eds__nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    className: "eds__item",
    title: n.label,
    "aria-current": view === n.id ? 'page' : undefined,
    onClick: () => onView(n.id)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n.icon,
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eds__lbl"
  }, n.label)))), /*#__PURE__*/React.createElement("div", {
    className: "eds__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eds__acct"
  }, /*#__PURE__*/React.createElement("b", null, "Holding account"), /*#__PURE__*/React.createElement("span", null, "Jordan Ahli Bank \xB7 ****4417"), /*#__PURE__*/React.createElement("div", {
    className: "eds__bal"
  }, "JOD 124,650"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    state: "held",
    label: "Supervised",
    onDark: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "edp__main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "edt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edt__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search by escrow ID, plate or counterparty"
  })), /*#__PURE__*/React.createElement("div", {
    className: "edt__spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: () => onView('new')
  }, "New escrow"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "edt__who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edt__av"
  }, "NA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Nour Abdallah"), /*#__PURE__*/React.createElement("span", null, "Verified \xB7 Individual")))), children));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Dashboard.jsx
try { (() => {
const {
  Card,
  Badge,
  StatusPill,
  Tabs,
  Tag,
  Button,
  TransactionSteps
} = window.EDamanaDesignSystem_fbf285;
const dashCss = `
.edd__stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:var(--space-5);margin-top:var(--space-6)}
.edd__stat b{display:block;white-space:nowrap;font-size:clamp(19px,2.4vw,var(--text-2xl));font-weight:var(--weight-extrabold);color:var(--navy-900);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-tight)}
.edd__stat span{font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted)}
.edd__stat i{display:block;margin-top:var(--space-2);font-size:var(--text-xs);font-style:normal;color:var(--teal-800)}
.edd__filters{display:flex;align-items:center;gap:var(--space-3);margin:var(--space-8) 0 var(--space-5)}
.edd__live{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:var(--space-5);margin-top:var(--space-6)}
@media (max-width:1023px){.edd__live{grid-template-columns:minmax(0,1fr)}}
@media (max-width:767px){.edd__stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-3)}.edd__filters{flex-wrap:wrap;gap:var(--space-3);margin:var(--space-6) 0 var(--space-4)}.edd__filters>div:nth-child(2){display:none}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edp-dash-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = dashCss;
  }
}
const STATS = [{
  k: 'In escrow now',
  v: 'JOD 124,650',
  n: 'Across 4 open transactions'
}, {
  k: 'Released this month',
  v: 'JOD 46,900',
  n: '3 transactions settled'
}, {
  k: 'Avg. release time',
  v: '4h 12m',
  n: 'From handover confirmation'
}, {
  k: 'Disputes open',
  v: '1',
  n: 'EDM-4388 under review'
}];
function Dashboard({
  onOpen,
  onNew
}) {
  const TXNS = window.TXNS,
    FLOW = window.FLOW;
  const [tab, setTab] = React.useState('all');
  const [role, setRole] = React.useState('All');
  const rows = TXNS.filter(t => {
    if (tab === 'open' && ['released', 'cancelled'].includes(t.state)) return false;
    if (tab === 'done' && t.state !== 'released') return false;
    if (tab === 'disputes' && t.state !== 'disputed') return false;
    if (role !== 'All' && t.role !== role) return false;
    return true;
  });
  const live = TXNS[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "edp__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "edp__h1"
  }, "Transactions"), /*#__PURE__*/React.createElement("p", {
    className: "edp__sub"
  }, "Every escrow you are a party to, and what it is waiting on."))), /*#__PURE__*/React.createElement("div", {
    className: "edd__stats"
  }, STATS.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.k,
    padding: "md",
    className: "edd__stat reveal",
    style: {
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", null, s.k), /*#__PURE__*/React.createElement("b", null, s.v), /*#__PURE__*/React.createElement("i", null, s.n)))), /*#__PURE__*/React.createElement("div", {
    className: "edd__live"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg",
    live: true,
    title: "EDM-4471 \xB7 Toyota Land Cruiser 2021",
    eyebrow: "Awaiting handover confirmation",
    action: /*#__PURE__*/React.createElement(StatusPill, {
      state: "held",
      live: true,
      onDark: true
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(TransactionSteps, {
    onDark: true,
    current: live.step,
    steps: FLOW
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Next action",
    eyebrow: "For you"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, "Confirm you have received the vehicle and its waiver. Funds are released to the seller immediately after both confirmations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onOpen('EDM-4471')
  }, "Confirm handover"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onOpen('EDM-4471')
  }, "Open")))), /*#__PURE__*/React.createElement("div", {
    className: "edd__filters"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'All',
      count: TXNS.length
    }, {
      id: 'open',
      label: 'Open',
      count: TXNS.filter(t => !['released', 'cancelled'].includes(t.state)).length
    }, {
      id: 'done',
      label: 'Completed',
      count: TXNS.filter(t => t.state === 'released').length
    }, {
      id: 'disputes',
      label: 'Disputes',
      count: TXNS.filter(t => t.state === 'disputed').length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), ['All', 'Buying', 'Selling'].map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: role === r,
    onClick: () => setRole(r)
  }, r))), /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tblwrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Asset"), /*#__PURE__*/React.createElement("th", null, "Escrow"), /*#__PURE__*/React.createElement("th", null, "Counterparty"), /*#__PURE__*/React.createElement("th", null, "Role"), /*#__PURE__*/React.createElement("th", null, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id,
    onClick: () => onOpen(t.id)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "asset"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      backgroundImage: 'url(' + t.photo + ')'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t.asset), /*#__PURE__*/React.createElement("span", null, t.kind, " \xB7 ", t.plate)))), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, t.id), /*#__PURE__*/React.createElement("td", null, t.counterparty), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: t.role === 'Buying' ? 'info' : 'success',
    square: true
  }, t.role)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, "JOD ", t.amount), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusPill, {
    state: t.state,
    live: t.state === 'verifying'
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'end',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 16,
      height: 16
    }
  })))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/NewEscrow.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Radio,
  Checkbox,
  TransactionSteps,
  Alert,
  Badge,
  Switch
} = window.EDamanaDesignSystem_fbf285;
const newCss = `
.edn{max-width:860px}
.edn__steps{display:flex;gap:var(--space-2);margin:var(--space-6) 0 var(--space-8)}
.edn__pip{flex:1;height:4px;border-radius:2px;background:var(--mist-300);transition:background-color var(--dur-slow) var(--ease-standard)}
.edn__pip--on{background:var(--teal-500)}
.edn__fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-5);margin-top:var(--space-5)}
@media (max-width:767px){.edn__fields{grid-template-columns:minmax(0,1fr)}.edn__nav{gap:var(--space-3)}.edn__nav>*{flex:1}}
.edn__fields--one{grid-template-columns:minmax(0,1fr)}
.edn__nav{display:flex;justify-content:space-between;margin-top:var(--space-8)}
.edn__sum{display:grid;grid-template-columns:1fr auto;gap:var(--space-3) var(--space-6);font-size:var(--text-sm);margin-top:var(--space-4)}
.edn__sum dt{color:var(--text-muted)}
.edn__sum dd{margin:0;text-align:end;color:var(--text-strong);font-weight:var(--weight-medium);font-variant-numeric:tabular-nums}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edp-new-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = newCss;
  }
}
const TITLES = ['Who are you in this transaction?', 'What is being traded?', 'Where do the funds sit?', 'Review and open'];
function NewEscrow({
  onDone
}) {
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "edp__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edn"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "edp__h1"
  }, "New escrow"), /*#__PURE__*/React.createElement("p", {
    className: "edp__sub"
  }, "Four steps. Nothing moves until both parties accept the terms."), /*#__PURE__*/React.createElement("div", {
    className: "edn__steps"
  }, [0, 1, 2, 3].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: 'edn__pip' + (n <= i ? ' edn__pip--on' : '')
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: TITLES[i],
    eyebrow: 'Step ' + (i + 1) + ' of 4'
  }, i === 0 && /*#__PURE__*/React.createElement("div", {
    className: "edn__fields edn__fields--one"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "ne-role",
    card: true,
    defaultChecked: true,
    label: "I'm the buyer",
    description: "I deposit the full amount into the holding account."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "ne-role",
    card: true,
    label: "I'm the seller",
    description: "I receive the funds once the handover is confirmed."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "ne-role",
    card: true,
    label: "I'm a showroom acting for a client",
    description: "I open and manage escrows on behalf of buyers and sellers."
  })), i === 1 && /*#__PURE__*/React.createElement("div", {
    className: "edn__fields"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Asset type",
    options: ['Vehicle', 'Land', 'Property'],
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Registration / plate",
    placeholder: "42-77914",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Make and model",
    placeholder: "Toyota Land Cruiser 2021",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Year",
    placeholder: "2021"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Transaction amount",
    prefix: "JOD",
    amount: true,
    size: "lg",
    defaultValue: "24,500",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Counterparty mobile",
    placeholder: "+962 7 0000 0000",
    hint: "They receive an invitation to accept the terms.",
    required: true
  })), i === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "authority",
    title: "Supervised holding account"
  }, "Funds are held by a partner bank, not by eDamana. Neither party can withdraw them."), /*#__PURE__*/React.createElement("div", {
    className: "edn__fields"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Holding bank",
    options: [{
      value: 'ahli',
      label: 'Jordan Ahli Bank'
    }, {
      value: 'arab',
      label: 'Arab Bank'
    }],
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your IBAN for release",
    placeholder: "JO00 0000 0000 0000",
    required: true
  })), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Notify me at every state change"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-release 7 days after handover confirmation"
  })), i === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("dl", {
    className: "edn__sum"
  }, /*#__PURE__*/React.createElement("dt", null, "Role"), /*#__PURE__*/React.createElement("dd", null, "Buyer"), /*#__PURE__*/React.createElement("dt", null, "Asset"), /*#__PURE__*/React.createElement("dd", null, "Toyota Land Cruiser 2021 \xB7 42-77914"), /*#__PURE__*/React.createElement("dt", null, "Counterparty"), /*#__PURE__*/React.createElement("dd", null, "+962 7 9012 3456"), /*#__PURE__*/React.createElement("dt", null, "Holding bank"), /*#__PURE__*/React.createElement("dd", null, "Jordan Ahli Bank"), /*#__PURE__*/React.createElement("dt", null, "Amount"), /*#__PURE__*/React.createElement("dd", null, "JOD 24,500.00"), /*#__PURE__*/React.createElement("dt", null, "Service fee (0.5%)"), /*#__PURE__*/React.createElement("dd", null, "JOD 122.50"), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, "Total to deposit"), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--navy-900)'
    }
  }, "JOD 24,622.50")), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I accept the escrow agreement",
    description: "Funds release only when both parties confirm the handover."
  }), /*#__PURE__*/React.createElement(TransactionSteps, {
    current: 0,
    steps: window.FLOW
  }))), /*#__PURE__*/React.createElement("div", {
    className: "edn__nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => i === 0 ? onDone() : setI(i - 1)
  }, i === 0 ? 'Cancel' : 'Back'), /*#__PURE__*/React.createElement(Button, {
    variant: i === 3 ? 'secondary' : 'primary',
    onClick: () => i === 3 ? onDone() : setI(i + 1)
  }, i === 3 ? 'Open escrow' : 'Continue'))));
}
Object.assign(window, {
  NewEscrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/NewEscrow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Settings.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Switch,
  Button,
  Badge,
  Tabs,
  Alert,
  LangToggle,
  Tooltip,
  IconButton
} = window.EDamanaDesignSystem_fbf285;
const setCss = `
@media (max-width:1023px){.eds-settings{grid-template-columns:minmax(0,1fr)!important}}
@media (max-width:767px){.eds-settings>div:first-child>div:last-child{grid-template-columns:minmax(0,1fr)!important}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edp-set-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = setCss;
  }
}
function Settings() {
  const [tab, setTab] = React.useState('profile');
  const [lang, setLang] = React.useState('en');
  return /*#__PURE__*/React.createElement("div", {
    className: "edp__body"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "edp__h1"
  }, "Settings"), /*#__PURE__*/React.createElement("p", {
    className: "edp__sub"
  }, "Identity, bank accounts and notifications."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'banks',
      label: 'Bank accounts'
    }, {
      id: 'notify',
      label: 'Notifications'
    }, {
      id: 'security',
      label: 'Security'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "eds-settings",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Identity",
    eyebrow: "Verified 12 Aug 2026",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Discard"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Nour Abdallah"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "National ID",
    defaultValue: "9871234567",
    hint: "Cannot be changed after verification.",
    disabled: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    defaultValue: "+962 7 9012 3456"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    defaultValue: "nour@example.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Governorate",
    options: ['Amman', 'Irbid', 'Zarqa', 'Aqaba']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Account type",
    options: ['Individual', 'Showroom', 'Corporate']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Language"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)',
      lineHeight: 1.6
    }
  }, "The platform is fully mirrored in Arabic, including contracts and receipts."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, lang === 'en' ? 'English' : 'العربية'))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Deposit received"
  }), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Handover confirmed"
  }), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Funds released"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Marketing updates"
  }))), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Two-factor is off"
  }, "Enable it before your next release. Large-value transactions require it."))));
}
Object.assign(window, {
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/TransactionDetail.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  StatusPill,
  Badge,
  TransactionSteps,
  Alert,
  Dialog,
  Checkbox,
  Tooltip,
  Toast,
  ToastStack,
  Seal
} = window.EDamanaDesignSystem_fbf285;
const detCss = `
.edx__top{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-6)}
.edx__back{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-muted);background:0;border:0;cursor:pointer;padding:0;margin-bottom:var(--space-4)}
.edx__back:hover{color:var(--action-primary)}
.edx__grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:var(--space-5);margin-top:var(--space-6);align-items:start}
@media (max-width:1023px){.edx__grid{grid-template-columns:minmax(0,1fr)}}
@media (max-width:767px){.edx__top{flex-direction:column;gap:var(--space-4)}.edx__top>div:last-child{width:100%;flex-wrap:wrap}.edx__dl{grid-template-columns:minmax(0,1fr)}.edx__hero{height:150px}}
.edx__hero{height:200px;border-radius:var(--radius-lg);background:var(--mist-200) center/cover;position:relative;overflow:hidden;margin-bottom:var(--space-5)}
.edx__hero .amt{position:absolute;inset-block-end:0;inset-inline:0;padding:var(--space-6);background:linear-gradient(transparent,rgba(9,22,92,.9));color:#fff}
.edx__hero .amt b{display:block;font-size:var(--text-3xl);font-weight:var(--weight-extrabold);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-tight)}
.edx__hero .amt span{font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--teal-300)}
.edx__dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-5) var(--space-6);margin-top:var(--space-4)}
.edx__dl dt{font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted)}
.edx__dl dd{margin:var(--space-1) 0 0;font-size:var(--text-sm);color:var(--text-strong);font-weight:var(--weight-medium)}
.edx__doc{display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--border-subtle);font-size:var(--text-sm)}
.edx__doc:last-child{border:0}
.edx__doc b{flex:1;font-weight:var(--weight-medium);color:var(--text-strong)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edp-det-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = detCss;
  }
}
function TransactionDetail({
  tx,
  onBack
}) {
  const FLOW = window.FLOW;
  const [confirm, setConfirm] = React.useState(false);
  const [released, setReleased] = React.useState(false);
  const step = released ? 4 : tx.step;
  return /*#__PURE__*/React.createElement("div", {
    className: "edp__body"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "edx__back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " All transactions"), /*#__PURE__*/React.createElement("div", {
    className: "edx__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "edp__h1"
  }, tx.asset), /*#__PURE__*/React.createElement("p", {
    className: "edp__sub"
  }, tx.id, " \xB7 ", tx.kind, " \xB7 ", tx.plate, " \xB7 opened ", tx.opened)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    state: released ? 'released' : tx.state,
    live: !released && tx.state === 'verifying'
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Download contract",
    variant: "outline"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Open dispute"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    disabled: released,
    onClick: () => setConfirm(true)
  }, released ? 'Released' : 'Confirm handover'))), /*#__PURE__*/React.createElement("div", {
    className: "edx__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "edx__hero",
    style: {
      backgroundImage: 'url(' + tx.photo + ')'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "amt"
  }, /*#__PURE__*/React.createElement("span", null, "Held on our guarantee"), /*#__PURE__*/React.createElement("b", null, "JOD ", tx.amount))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Escrow flow",
    eyebrow: "Progressive activation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(TransactionSteps, {
    current: step,
    steps: FLOW
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Transaction detail"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "edx__dl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Counterparty"), /*#__PURE__*/React.createElement("dd", null, tx.counterparty)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Your role"), /*#__PURE__*/React.createElement("dd", null, tx.role)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Holding bank"), /*#__PURE__*/React.createElement("dd", null, tx.bank)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Reference"), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, tx.id)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Service fee"), /*#__PURE__*/React.createElement("dd", {
    className: "ed-numeric"
  }, "JOD 122.50")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Release condition"), /*#__PURE__*/React.createElement("dd", null, "Both parties confirm handover")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, tx.state === 'disputed' ? /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "Dispute under review"
  }, "Funds are frozen until eDamana completes its review. Both parties have been notified.") : /*#__PURE__*/React.createElement(Alert, {
    tone: "authority",
    title: "Held on our guarantee"
  }, "Neither party can move these funds. eDamana releases them only when the release condition is met."), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    title: "Documents"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, [['Escrow agreement', 'Signed'], ['Vehicle registration', 'Verified'], ['Waiver', tx.step >= 3 ? 'Signed' : 'Awaiting'], ['Deposit receipt', 'Issued']].map(([n, s]) => /*#__PURE__*/React.createElement("div", {
    className: "edx__doc",
    key: n
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-subtle)'
    }
  }), /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement(Badge, {
    tone: s === 'Awaiting' ? 'neutral' : 'success',
    variant: "soft",
    square: true
  }, s))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "subtle",
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: 'var(--space-4)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 84,
    base: "../../assets/logo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, "Every eDamana escrow is issued under seal. Download the sealed agreement for your records.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    size: "sm",
    onClose: () => setConfirm(false),
    title: 'Release JOD ' + tx.amount + ' to the seller?',
    subtitle: "This cannot be undone. Both parties will be notified.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setConfirm(false);
        setReleased(true);
      }
    }, "Release funds"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "I have received the asset",
    description: "The vehicle and its keys are in my possession."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "I have received the waiver",
    description: "The signed waiver has been uploaded to this escrow."
  }))), released && /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Funds released",
    onDismiss: () => {}
  }, "JOD ", tx.amount, " sent to ", tx.counterparty, ".")));
}
Object.assign(window, {
  TransactionDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/TransactionDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.jsx
try { (() => {
const TXNS = [{
  id: 'EDM-4471',
  asset: 'Toyota Land Cruiser 2021',
  kind: 'Vehicle',
  plate: '42-77914',
  counterparty: 'Rami Al-Khatib',
  role: 'Buying',
  amount: '24,500',
  state: 'held',
  step: 2,
  opened: '2 Sep 2026',
  bank: 'Jordan Ahli Bank',
  photo: '../../assets/imagery/car-showroom.png'
}, {
  id: 'EDM-4468',
  asset: 'Mercedes-Benz S500 2019',
  kind: 'Vehicle',
  plate: '18-30452',
  counterparty: 'Sahel Motors',
  role: 'Buying',
  amount: '61,000',
  state: 'verifying',
  step: 3,
  opened: '31 Aug 2026',
  bank: 'Arab Bank',
  photo: '../../assets/imagery/car-keys.png'
}, {
  id: 'EDM-4455',
  asset: 'Nissan Patrol 2022',
  kind: 'Vehicle',
  plate: '55-11208',
  counterparty: 'Dana Haddad',
  role: 'Selling',
  amount: '38,750',
  state: 'funded',
  step: 1,
  opened: '28 Aug 2026',
  bank: 'Jordan Ahli Bank',
  photo: '../../assets/imagery/car-showroom.png'
}, {
  id: 'EDM-4431',
  asset: 'Land plot — Naour',
  kind: 'Land',
  plate: 'Deed 8871/4',
  counterparty: 'Yousef Nasser',
  role: 'Selling',
  amount: '112,000',
  state: 'pending',
  step: 0,
  opened: '24 Aug 2026',
  bank: 'Arab Bank',
  photo: '../../assets/imagery/business-cards.png'
}, {
  id: 'EDM-4402',
  asset: 'Kia Sportage 2020',
  kind: 'Vehicle',
  plate: '31-64990',
  counterparty: 'Layan Odeh',
  role: 'Buying',
  amount: '19,200',
  state: 'released',
  step: 4,
  opened: '12 Aug 2026',
  bank: 'Jordan Ahli Bank',
  photo: '../../assets/imagery/car-keys.png'
}, {
  id: 'EDM-4388',
  asset: 'Hyundai Tucson 2018',
  kind: 'Vehicle',
  plate: '27-40113',
  counterparty: 'Bashar Freij',
  role: 'Selling',
  amount: '14,400',
  state: 'disputed',
  step: 3,
  opened: '5 Aug 2026',
  bank: 'Arab Bank',
  photo: '../../assets/imagery/car-showroom.png'
}];
const FLOW = [{
  label: 'Agreement',
  meta: 'Terms accepted by both parties'
}, {
  label: 'Deposit',
  meta: 'Buyer transfers the full amount'
}, {
  label: 'In escrow',
  meta: 'Held on our guarantee'
}, {
  label: 'Handover',
  meta: 'Asset and waiver change hands'
}, {
  label: 'Release',
  meta: 'Funds released to the seller'
}];
const NAV = [{
  id: 'dashboard',
  label: 'Transactions',
  icon: 'layers'
}, {
  id: 'new',
  label: 'New escrow',
  icon: 'plus-circle'
}, {
  id: 'accounts',
  label: 'Bank accounts',
  icon: 'landmark'
}, {
  id: 'parties',
  label: 'Counterparties',
  icon: 'users'
}, {
  id: 'documents',
  label: 'Documents',
  icon: 'file-text'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
Object.assign(window, {
  TXNS,
  FLOW,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Audiences.jsx
try { (() => {
const {
  Card,
  Button
} = window.EDamanaDesignSystem_fbf285;
const audCss = `
.edw-aud__grid{margin-top:var(--space-12);display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-5)}
@media (max-width:1023px){.edw-aud__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:600px){.edw-aud__grid{grid-template-columns:minmax(0,1fr)}.edw-aud__card{min-height:0}.edw-aud__ph{height:180px}}
.edw-aud__card{display:flex;flex-direction:column;gap:var(--space-4);min-height:260px}
.edw-aud__t{font-size:var(--text-xl);font-weight:var(--weight-bold);color:var(--navy-900);letter-spacing:var(--tracking-tight)}
.edw-aud__d{font-size:var(--text-sm);line-height:1.65;color:var(--text-muted);flex:1}
[dir=rtl] .edw-aud__t{font-weight:var(--weight-arabic-display)}
[dir=rtl] .edw-aud__d{line-height:var(--leading-arabic)}
.edw-aud__ph{height:150px;border-radius:var(--radius-md);background:var(--mist-200) center/cover;margin-bottom:var(--space-2)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-aud-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = audCss;
  }
}
const PHOTOS = ['../../assets/imagery/car-keys.png', '../../assets/imagery/car-showroom.png', '../../assets/imagery/business-cards.png'];
function Audiences({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, t.audEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, t.audTitle), /*#__PURE__*/React.createElement("div", {
    className: "edw-aud__grid"
  }, t.audiences.map((a, i) => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    padding: "lg",
    interactive: true,
    className: "edw-aud__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-aud__ph",
    style: {
      backgroundImage: 'url(' + PHOTOS[i] + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "edw-aud__t"
  }, a.t), /*#__PURE__*/React.createElement("div", {
    className: "edw-aud__d"
  }, a.d), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: a.tone,
    size: "md"
  }, a.cta)))))));
}
Object.assign(window, {
  Audiences
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Audiences.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Seal,
  PatternSurface
} = window.EDamanaDesignSystem_fbf285;
const heroCss = `
.edw-hero{position:relative;min-height:620px;display:flex;align-items:center;overflow:hidden;background:var(--navy-900)}
@media (max-width:767px){.edw-hero{min-height:0}}
.edw-hero__ph{position:absolute;inset:0;background:url(../../assets/imagery/car-showroom.png) center/cover;filter:saturate(.85)}
.edw-hero__scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(9,22,92,.94) 0%,rgba(9,22,92,.86) 46%,rgba(9,22,92,.62) 100%)}
[dir=rtl] .edw-hero__scrim{background:linear-gradient(270deg,rgba(9,22,92,.94) 0%,rgba(9,22,92,.86) 46%,rgba(9,22,92,.62) 100%)}
.edw-hero__pat{position:absolute;inset-block:0;inset-inline-end:0;width:52%;background-image:var(--pattern-tile-light);background-size:var(--pattern-size-md);opacity:.18;-webkit-mask-image:linear-gradient(to left,#000 34%,transparent);mask-image:linear-gradient(to left,#000 34%,transparent)}
[dir=rtl] .edw-hero__pat{-webkit-mask-image:linear-gradient(to right,#000 34%,transparent);mask-image:linear-gradient(to right,#000 34%,transparent)}
.edw-hero__in{position:relative;z-index:2;max-width:var(--layout-max-width);margin:0 auto;padding:var(--space-24) var(--layout-page-x);width:100%}
.edw-hero__seal{margin-bottom:var(--space-6)}
.edw-hero__h1{font-size:clamp(40px,5.3vw,var(--text-6xl));font-weight:var(--weight-extrabold);line-height:1.05;letter-spacing:var(--tracking-tighter);color:#fff;max-width:15ch;margin:0}
.edw-hero__h1 em{display:block;color:var(--teal-500);font-style:normal}
[dir=rtl] .edw-hero__h1{font-size:clamp(30px,4vw,56px);line-height:var(--leading-arabic-display);letter-spacing:0;max-width:18ch;font-weight:var(--weight-arabic-display)}
.edw-hero__note{margin-top:var(--space-5);font-size:var(--text-md);color:var(--mist-300);max-width:44ch}
.edw-hero__cta{margin-top:var(--space-10);display:flex;gap:var(--space-4);flex-wrap:wrap}
.edw-trust{background:var(--mist-100);border-bottom:1px solid var(--border-subtle)}
.edw-trust__in{max-width:var(--layout-max-width);margin:0 auto;padding:var(--space-8) var(--layout-page-x);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--space-8)}
.edw-trust__v{font-size:clamp(20px,2.4vw,var(--text-2xl));font-weight:var(--weight-extrabold);color:var(--navy-900);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-tight);white-space:nowrap}
[dir=rtl] .edw-trust__v{font-weight:var(--weight-arabic-display)}
.edw-trust__k{margin-top:var(--space-1);font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-muted)}
[dir=rtl] .edw-trust__k{font-size:var(--text-sm);font-weight:var(--weight-arabic-strong)}
@media (max-width:899px){.edw-hero__pat{width:100%;opacity:.1;-webkit-mask-image:none;mask-image:none}.edw-hero__scrim,[dir=rtl] .edw-hero__scrim{background:rgba(9,22,92,.88)}}
@media (max-width:767px){.edw-trust__in{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-6)}.edw-hero__cta{gap:var(--space-3)}.edw-hero__cta>*{flex:1 1 auto;min-width:0}.edw-hero__note{max-width:none}.edw-hero__seal{margin-bottom:var(--space-4)}}
@media (max-width:430px){.edw-trust__in{grid-template-columns:minmax(0,1fr)}.edw-hero__cta{flex-direction:column}.edw-hero__cta>*{width:100%}}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-hero-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = heroCss;
  }
}
function Hero({
  t,
  lang,
  onIntent
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "edw-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-hero__ph"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edw-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edw-hero__pat"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edw-hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal edw-hero__seal"
  }, /*#__PURE__*/React.createElement(Seal, {
    colourway: "white",
    size: 78,
    base: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "edw-hero__h1 reveal",
    style: {
      animationDelay: '70ms'
    }
  }, t.heroLine1, /*#__PURE__*/React.createElement("em", null, t.heroLine2)), /*#__PURE__*/React.createElement("p", {
    className: "edw-hero__note reveal",
    style: {
      animationDelay: '140ms'
    }
  }, t.heroNote), /*#__PURE__*/React.createElement("div", {
    className: "edw-hero__cta reveal",
    style: {
      animationDelay: '210ms'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "xl",
    arrow: "buy",
    assetBase: "../../assets/pattern",
    onClick: () => onIntent('buy')
  }, t.buy), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "xl",
    arrow: "sell",
    assetBase: "../../assets/pattern",
    onClick: () => onIntent('sell')
  }, t.sell)))), /*#__PURE__*/React.createElement("section", {
    className: "edw-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-trust__in"
  }, t.trust.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-trust__v"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "edw-trust__k"
  }, s.k))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
const {
  TransactionSteps,
  Card
} = window.EDamanaDesignSystem_fbf285;
const howCss = `
.edw-how{position:relative;overflow:hidden}
.edw-how__arrow{position:absolute;top:-8%;inset-inline-end:-6%;width:34%;aspect-ratio:578/660;background:var(--mist-100);-webkit-mask:url(../../assets/pattern/arrow-right.svg) center/contain no-repeat;mask:url(../../assets/pattern/arrow-right.svg) center/contain no-repeat;z-index:0}
@media (max-width:767px){.edw-how__arrow{display:none}.edw-how__steps{padding:var(--space-6) var(--space-5);margin-top:var(--space-10)}}
.edw-how__in{position:relative;z-index:1}
.edw-how__steps{margin-top:var(--space-16);padding:var(--space-10) var(--space-8);overflow:hidden;background:var(--white);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-how-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = howCss;
  }
}
function HowItWorks({
  t
}) {
  const [current, setCurrent] = React.useState(2);
  React.useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % 5), 2600);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec edw-how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-how__arrow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap edw-how__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, t.howEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, t.howTitle), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, t.howLede), /*#__PURE__*/React.createElement("div", {
    className: "edw-how__steps"
  }, /*#__PURE__*/React.createElement(TransactionSteps, {
    current: current,
    steps: t.steps
  }))));
}
Object.assign(window, {
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  Logo,
  Seal
} = window.EDamanaDesignSystem_fbf285;
const ftCss = `
.edw-ft{background:var(--navy-950);color:var(--mist-400);padding:var(--space-20) 0 var(--space-8)}
.edw-ft__in{max-width:var(--layout-max-width);margin:0 auto;padding:0 var(--layout-page-x);display:grid;grid-template-columns:minmax(0,1.4fr) repeat(3,minmax(0,1fr)) auto;gap:var(--space-12)}
@media (max-width:1023px){.edw-ft__in{grid-template-columns:repeat(3,minmax(0,1fr))}.edw-ft__in>:first-child{grid-column:1/-1}.edw-ft__in>:last-child{grid-column:1/-1;justify-self:start}}
@media (max-width:600px){.edw-ft__in{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-8)}}
.edw-ft__h{font-size:var(--text-xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:#fff;margin-bottom:var(--space-4)}
[dir=rtl] .edw-ft__h{font-size:var(--text-sm);font-weight:var(--weight-arabic-strong)}
[dir=rtl] .edw-ft__note{line-height:var(--leading-arabic)}
.edw-ft ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--space-3)}
.edw-ft a{font-size:var(--text-sm);color:var(--mist-400);text-decoration:none}
.edw-ft a:hover{color:#fff;text-decoration:none}
.edw-ft__note{margin-top:var(--space-5);font-size:var(--text-sm);line-height:1.6;color:var(--mist-500);max-width:38ch}
.edw-ft__bar{max-width:var(--layout-max-width);margin:var(--space-16) auto 0;padding:var(--space-6) var(--layout-page-x) 0;border-top:1px solid rgba(255,255,255,.12);display:flex;flex-wrap:wrap;justify-content:space-between;gap:var(--space-3) var(--space-6);font-size:var(--text-xs);color:var(--mist-500)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-ft-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = ftCss;
  }
}
function SiteFooter({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "edw-ft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-ft__in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    lockup: "vertical-tagline",
    colourway: "white",
    height: 92,
    base: "../../assets/logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "edw-ft__note"
  }, t.footNote)), t.footCols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-ft__h"
  }, c.h), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l)))))), /*#__PURE__*/React.createElement(Seal, {
    colourway: "white",
    size: 92,
    base: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "edw-ft__bar"
  }, /*#__PURE__*/React.createElement("span", null, t.rights), /*#__PURE__*/React.createElement("span", null, t.footAddress, " \xB7 eDamana.com")));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Logo,
  Button,
  LangToggle,
  IconButton
} = window.EDamanaDesignSystem_fbf285;
const headerCss = `
.edw-hd{position:sticky;top:0;z-index:40;background:var(--navy-900);height:var(--nav-height)}
.edw-hd__in{max-width:var(--layout-max-width);margin:0 auto;padding:0 var(--layout-page-x);height:100%;display:flex;align-items:center;gap:var(--space-6)}
.edw-hd__in>a{flex:none;display:block}
.edw-hd__in>a img{max-width:none}
.edw-hd__nav{flex:1;display:flex;align-items:center;justify-content:center;gap:var(--space-4);min-width:0}
.edw-hd__nav a{font-size:13px;font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:#fff;text-decoration:none;white-space:nowrap;transition:color var(--dur-fast) var(--ease-standard)}
.edw-hd__nav a:hover{color:var(--teal-300);text-decoration:none}
.edw-hd__nav a[aria-current]{color:var(--teal-300)}
.edw-hd__nav a:focus-visible{outline:2px solid var(--focus-ring-on-dark);outline-offset:3px}
.edw-hd__nav i{color:var(--mist-500);font-style:normal}
.edw-hd__act{display:flex;align-items:center;gap:var(--space-3);flex:none}
.edw-hd__burger{display:none;flex:none}
[dir=rtl] .edw-hd__nav a{font-size:15px}

/* ── Panel: the nav collapses into a full-width navy sheet under the bar ── */
.edw-hd__panel{position:absolute;inset-inline:0;top:var(--nav-height);background:var(--navy-800);border-top:1px solid rgba(255,255,255,.14);box-shadow:var(--shadow-lg);padding:var(--space-4) var(--layout-page-x) var(--space-6);display:none;flex-direction:column;gap:var(--space-1);animation:ed-rise var(--dur-base) var(--ease-out) both}
.edw-hd__panel[data-open="1"]{display:flex}
.edw-hd__panel a{display:flex;align-items:center;min-height:var(--touch-target-min);font-size:15px;font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.1)}
.edw-hd__panel a:last-of-type{border-bottom:0}
.edw-hd__panel .edw-hd__panelact{display:flex;gap:var(--space-3);padding-top:var(--space-4)}
[dir=rtl] .edw-hd__panel a{font-size:16px}

@media (max-width:1023px){
  .edw-hd__nav{gap:var(--space-3)}
  .edw-hd__nav a{font-size:12px;letter-spacing:.05em}
  [dir=rtl] .edw-hd__nav a{font-size:14px}
}
@media (max-width:899px){
  .edw-hd__nav,.edw-hd__act{display:none}
  .edw-hd__burger{display:block;margin-inline-start:auto}
}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-hd-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = headerCss;
  }
}
function SiteHeader({
  t,
  lang,
  onLang
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(false);
  }, [lang]);
  return /*#__PURE__*/React.createElement("header", {
    className: "edw-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-hd__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "eDamana"
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "horizontal",
    colourway: "on-dark",
    height: 42,
    base: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "edw-hd__nav"
  }, t.nav.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i > 0 && /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-current": i === 0 ? 'page' : undefined
  }, n)))), /*#__PURE__*/React.createElement("div", {
    className: "edw-hd__act"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pill: true,
    size: "sm"
  }, t.signup), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    pill: true,
    size: "sm"
  }, t.login), /*#__PURE__*/React.createElement(LangToggle, {
    onDark: true,
    lang: lang,
    onChange: onLang
  })), /*#__PURE__*/React.createElement("div", {
    className: "edw-hd__burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onDark: true,
    variant: "outline",
    label: open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'x' : 'menu',
    style: {
      width: 20,
      height: 20
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "edw-hd__panel",
    "data-open": open ? '1' : undefined
  }, t.nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    "aria-current": i === 0 ? 'page' : undefined,
    onClick: () => setOpen(false)
  }, n)), /*#__PURE__*/React.createElement("div", {
    className: "edw-hd__panelact"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pill: true,
    size: "md"
  }, t.signup), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    pill: true,
    size: "md"
  }, t.login), /*#__PURE__*/React.createElement(LangToggle, {
    onDark: true,
    lang: lang,
    onChange: onLang
  }))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StartEscrowDialog.jsx
try { (() => {
const {
  Dialog,
  Button,
  Input,
  Select,
  Radio,
  TransactionSteps,
  Alert
} = window.EDamanaDesignSystem_fbf285;
function StartEscrowDialog({
  t,
  intent,
  onClose
}) {
  const [stage, setStage] = React.useState(0);
  React.useEffect(() => {
    setStage(0);
  }, [intent]);
  if (!intent) return null;
  const buying = intent === 'buy';
  if (stage === 1) {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: true,
      title: "Escrow opened",
      subtitle: "EDM-4482 \xB7 awaiting the buyer's deposit.",
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: onClose
      }, "Go to dashboard")
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Both parties notified"
    }, "The holding account is reserved. Funds are requested from the buyer's verified bank account."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(TransactionSteps, {
      current: 0,
      orientation: "vertical",
      steps: t.steps.slice(0, 3)
    })));
  }
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: buying ? t.buy : t.sell,
    subtitle: t.heroNote,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: buying ? 'primary' : 'secondary',
      onClick: () => setStage(1)
    }, "Open escrow"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "wr-role",
    card: true,
    defaultChecked: buying,
    label: t.audiences[0].t,
    description: t.audiences[0].d
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "wr-role",
    card: true,
    defaultChecked: !buying,
    label: t.audiences[1].t,
    description: t.audiences[1].d
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Asset type",
    options: ['Vehicle', 'Land', 'Property']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Transaction amount",
    prefix: "JOD",
    amount: true,
    size: "lg",
    defaultValue: "24,500"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Counterparty mobile",
    placeholder: "+962 7 0000 0000",
    hint: "They receive an invitation to confirm the terms."
  })));
}
Object.assign(window, {
  StartEscrowDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StartEscrowDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatementBand.jsx
try { (() => {
const {
  Button
} = window.EDamanaDesignSystem_fbf285;
const sbCss = `
.edw-sb{position:relative;background:var(--navy-900);overflow:hidden}
.edw-sb__pat{position:absolute;inset:0;background-image:var(--pattern-tile-light);background-size:var(--pattern-size-lg);opacity:.13}
.edw-sb__in{position:relative;z-index:1;max-width:var(--layout-max-width);margin:0 auto;padding:var(--layout-section-y) var(--layout-page-x);display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:var(--space-16);align-items:center}
.edw-sb__h{font-size:clamp(32px,5vw,var(--text-5xl));font-weight:var(--weight-extrabold);line-height:1.06;letter-spacing:var(--tracking-tighter);color:#fff;margin:0}
[dir=rtl] .edw-sb__h{line-height:var(--leading-arabic-display);letter-spacing:0;font-weight:var(--weight-arabic-display)}
.edw-sb__s{margin-top:var(--space-4);font-size:var(--text-md);color:var(--teal-300)}
.edw-sb__3d{justify-self:center;width:78%;max-width:340px}
.edw-cta{background:var(--teal-500)}
.edw-cta__in{max-width:var(--layout-max-width);margin:0 auto;padding:var(--layout-section-y-tight) var(--layout-page-x);display:flex;align-items:center;justify-content:space-between;gap:var(--space-12);flex-wrap:wrap}
.edw-cta__h{font-size:clamp(28px,4vw,var(--text-4xl));font-weight:var(--weight-extrabold);letter-spacing:var(--tracking-tighter);line-height:1.1;color:var(--navy-900);margin:0}
[dir=rtl] .edw-cta__h{line-height:var(--leading-arabic-display);letter-spacing:0;font-weight:var(--weight-arabic-display)}
@media (max-width:899px){.edw-sb__in{grid-template-columns:1fr;gap:var(--space-10)}.edw-sb__3d{max-width:240px;justify-self:start}}
@media (max-width:600px){.edw-cta__act{width:100%;flex-direction:column}.edw-cta__act>*{width:100%}.edw-cta__b{max-width:none}}
.edw-cta__b{margin-top:var(--space-3);font-size:var(--text-md);color:rgba(9,22,92,.78);max-width:46ch}
.edw-cta__act{display:flex;gap:var(--space-4)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-sb-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = sbCss;
  }
}
function StatementBand({
  t
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "edw-sb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-sb__pat",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "edw-sb__in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "edw-sb__h"
  }, t.statement), /*#__PURE__*/React.createElement("p", {
    className: "edw-sb__s"
  }, t.statementSub)), /*#__PURE__*/React.createElement("img", {
    className: "edw-sb__3d",
    src: "../../assets/logo/symbol-3d-a.png",
    alt: ""
  }))), /*#__PURE__*/React.createElement("section", {
    className: "edw-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-cta__in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "edw-cta__h"
  }, t.ctaTitle), /*#__PURE__*/React.createElement("p", {
    className: "edw-cta__b"
  }, t.ctaBody)), /*#__PURE__*/React.createElement("div", {
    className: "edw-cta__act"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "authority",
    size: "lg"
  }, t.ctaPrimary), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: 'rgba(9,22,92,.35)'
    }
  }, t.ctaSecondary)))));
}
Object.assign(window, {
  StatementBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatementBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ValueProps.jsx
try { (() => {
const {
  Card
} = window.EDamanaDesignSystem_fbf285;
const vpCss = `
.edw-vp{background:var(--mist-100)}
.edw-vp__grid{margin-top:var(--space-12);display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-5)}
@media (max-width:1023px){.edw-vp__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:600px){.edw-vp__grid{grid-template-columns:1fr;gap:var(--space-4)}}
.edw-vp__ic{width:40px;height:40px;border-radius:var(--radius-md);background:var(--blue-100);color:var(--blue-600);display:grid;place-items:center;margin-bottom:var(--space-4)}
.edw-vp__t{font-size:var(--text-md);font-weight:var(--weight-bold);color:var(--navy-900);letter-spacing:var(--tracking-tight);line-height:1.3}
.edw-vp__d{margin-top:var(--space-2);font-size:var(--text-sm);line-height:1.6;color:var(--text-muted)}
[dir=rtl] .edw-vp__t{font-weight:var(--weight-arabic-strong)}
[dir=rtl] .edw-vp__d{line-height:var(--leading-arabic)}
`;
/* Last loader wins: the compiled bundle may carry an older copy of this
   file, and a plain "inject once" guard would let the stale copy win. */
{
  const _id = 'edw-vp-css';
  let _s = typeof document !== 'undefined' && document.getElementById(_id);
  if (typeof document !== 'undefined') {
    if (!_s) {
      _s = document.createElement('style');
      _s.id = _id;
      document.head.appendChild(_s);
    }
    _s.textContent = vpCss;
  }
}
function ValueProps({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec edw-vp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, t.valueEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, t.valueTitle), /*#__PURE__*/React.createElement("div", {
    className: "edw-vp__grid"
  }, t.values.map((v, i) => /*#__PURE__*/React.createElement(Card, {
    key: v.t,
    padding: "lg",
    className: "reveal",
    style: {
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "edw-vp__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": v.icon,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "edw-vp__t"
  }, v.t), /*#__PURE__*/React.createElement("div", {
    className: "edw-vp__d"
  }, v.d))))));
}
Object.assign(window, {
  ValueProps
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ValueProps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/copy.jsx
try { (() => {
/* Site copy. English headlines and the Arabic set are BOTH taken from the
   official messaging examples (guidelines p. 52) — they are parallel sets, not
   translations of each other. Source spellings "gurantee"/"Recieve" are
   corrected here per readme §3. */
const COPY = {
  en: {
    dir: 'ltr',
    nav: ['HOME', 'ABOUT EDAMANA', 'HOW IT WORKS', 'CONTACT US'],
    signup: 'Sign up',
    login: 'Login',
    langLabel: 'Ar',
    heroLine1: 'We guarantee your money',
    heroLine2: 'and release it to you',
    buy: 'I Want to Buy',
    sell: 'I Want to Sell',
    heroNote: 'Digital escrow, integrated with a holding bank account.',
    trust: [{
      k: 'Held on our guarantee',
      v: 'JOD 18,400,000'
    }, {
      k: 'Transactions settled',
      v: '2,140'
    }, {
      k: 'Partner banks',
      v: '3'
    }, {
      k: 'Average release time',
      v: '4h 12m'
    }],
    howEyebrow: 'How it works',
    howTitle: 'A bridge of trust between buyer and seller',
    howLede: 'The buyer deposits into a supervised holding account. The seller hands over the asset. eDamana releases the funds. Neither side has to trust the other — they both trust the account.',
    steps: [{
      label: 'Agreement',
      meta: 'Buyer and seller agree terms and the asset is listed against the escrow.'
    }, {
      label: 'Deposit',
      meta: 'The buyer transfers the full amount into the holding account.'
    }, {
      label: 'In escrow',
      meta: 'Funds sit on eDamana\u2019s guarantee. Neither party can move them.'
    }, {
      label: 'Handover',
      meta: 'The asset and its waiver change hands. Both parties confirm.'
    }, {
      label: 'Release',
      meta: 'Funds are released to the seller and the transaction closes.'
    }],
    valueEyebrow: 'Value proposition',
    valueTitle: 'Built to block fraud, not just to move money',
    values: [{
      icon: 'shield-check',
      t: 'Effectively block fraud attempts',
      d: 'Funds never sit with a counterparty. There is nothing to abscond with.'
    }, {
      icon: 'scale',
      t: 'Protect the rights of transacting parties',
      d: 'Both sides hold the same evidence of deposit, handover and release.'
    }, {
      icon: 'banknote',
      t: 'Reduce cash handling',
      d: 'No cash, no cheques, no promissory notes in a large-value handover.'
    }, {
      icon: 'link-2',
      t: 'Build a bridge of trust',
      d: 'A supervised holding account replaces trust between strangers.'
    }, {
      icon: 'file-check-2',
      t: 'Digitise the waiver process',
      d: 'The waiver moves with the transaction, not in a separate paper trail.'
    }, {
      icon: 'trending-up',
      t: 'Increase financial inclusion',
      d: 'Expands digital financial services coverage and payment-system integrity.'
    }],
    audEyebrow: 'Who it is for',
    audTitle: 'Individuals, showrooms, and the banks behind them',
    audiences: [{
      t: 'Buyers',
      d: 'Deposit once, into an account neither party controls. Release only when you have the asset and the waiver in hand.',
      cta: 'I Want to Buy',
      tone: 'primary'
    }, {
      t: 'Sellers',
      d: 'Know the money is there before you hand over the keys. No cheque to clear, no cash to count.',
      cta: 'I Want to Sell',
      tone: 'secondary'
    }, {
      t: 'Showrooms & banks',
      d: 'Integrate escrow into your own flow. eDamana is the orchestration layer between your platform, the holding bank and the registry.',
      cta: 'Talk to us',
      tone: 'outline'
    }],
    statement: 'The Future of Transactions',
    statementSub: 'Jordan\u2019s digital retail transactions guarantor.',
    ctaTitle: 'Send large transactions, safely',
    ctaBody: 'Open an escrow in minutes. You only pay when the transaction settles.',
    ctaPrimary: 'Start an escrow',
    ctaSecondary: 'Talk to our team',
    footCols: [{
      h: 'Product',
      links: ['How it works', 'For buyers', 'For sellers', 'For showrooms', 'Pricing']
    }, {
      h: 'Company',
      links: ['About eDamana', 'Partner banks', 'Careers', 'Press']
    }, {
      h: 'Legal',
      links: ['Terms of service', 'Privacy policy', 'Escrow agreement', 'Complaints']
    }],
    footNote: 'eDamana provides digital escrow services in partnership with supervised holding banks in Jordan.',
    footAddress: 'Amman, Jordan',
    rights: '\u00A9 2026 eDamana. All rights reserved.'
  },
  ar: {
    dir: 'rtl',
    nav: ['\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629', '\u0639\u0646 \u0636\u0645\u0627\u0646\u0629', '\u0643\u064A\u0641 \u062A\u0639\u0645\u0644', '\u0627\u062A\u0635\u0644 \u0628\u0646\u0627'],
    signup: '\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628',
    login: '\u062F\u062E\u0648\u0644',
    langLabel: 'En',
    heroLine1: '\u0646\u0636\u0645\u0646 \u0623\u0645\u0648\u0627\u0644\u0643',
    heroLine2: '\u0648\u0646\u0637\u0644\u0642\u0647\u0627 \u0644\u0643',
    buy: '\u0623\u0631\u064A\u062F \u0627\u0644\u0634\u0631\u0627\u0621',
    sell: '\u0623\u0631\u064A\u062F \u0627\u0644\u0628\u064A\u0639',
    heroNote: '\u0636\u0645\u0627\u0646 \u0631\u0642\u0645\u064A \u0645\u0631\u062A\u0628\u0637 \u0628\u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0645\u0648\u062B\u0648\u0642.',
    trust: [{
      k: '\u0639\u0644\u0649 \u0636\u0645\u0627\u0646\u062A\u0646\u0627',
      v: '18,400,000 \u062F.\u0623'
    }, {
      k: '\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0645\u0646\u062C\u0632\u0629',
      v: '2,140'
    }, {
      k: '\u0628\u0646\u0648\u0643 \u0634\u0631\u064A\u0643\u0629',
      v: '3'
    }, {
      k: '\u0645\u062A\u0648\u0633\u0637 \u0648\u0642\u062A \u0627\u0644\u0625\u0637\u0644\u0627\u0642',
      v: '4:12'
    }],
    howEyebrow: '\u0643\u064A\u0641 \u062A\u0639\u0645\u0644',
    howTitle: '\u0628\u064A\u0639 \u0648\u0627\u0634\u062A\u0631\u064A \u0628\u062B\u0642\u0629 \u0648\u0623\u0645\u0627\u0646',
    howLede: '\u064A\u0648\u062F\u0639 \u0627\u0644\u0645\u0634\u062A\u0631\u064A \u0627\u0644\u0645\u0628\u0644\u063A \u0641\u064A \u062D\u0633\u0627\u0628 \u0645\u0631\u0627\u0642\u0628\u060C \u0648\u064A\u0633\u0644\u0645 \u0627\u0644\u0628\u0627\u0626\u0639 \u0627\u0644\u0623\u0635\u0644\u060C \u0648\u062A\u0642\u0648\u0645 \u0636\u0645\u0627\u0646\u0629 \u0628\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u0628\u0644\u063A.',
    steps: [{
      label: '\u0627\u0644\u0627\u062A\u0641\u0627\u0642',
      meta: '\u064A\u062A\u0641\u0642 \u0627\u0644\u0637\u0631\u0641\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637.'
    }, {
      label: '\u0627\u0644\u0625\u064A\u062F\u0627\u0639',
      meta: '\u064A\u062D\u0648\u0644 \u0627\u0644\u0645\u0634\u062A\u0631\u064A \u0643\u0627\u0645\u0644 \u0627\u0644\u0645\u0628\u0644\u063A.'
    }, {
      label: '\u0641\u064A \u0627\u0644\u0636\u0645\u0627\u0646',
      meta: '\u0627\u0644\u0645\u0628\u0644\u063A \u0639\u0644\u0649 \u0636\u0645\u0627\u0646\u062A\u0646\u0627.'
    }, {
      label: '\u0627\u0644\u062A\u0633\u0644\u064A\u0645',
      meta: '\u064A\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0623\u0635\u0644 \u0648\u0627\u0644\u062A\u0646\u0627\u0632\u0644.'
    }, {
      label: '\u0627\u0644\u0625\u0637\u0644\u0627\u0642',
      meta: '\u064A\u0637\u0644\u0642 \u0627\u0644\u0645\u0628\u0644\u063A \u0644\u0644\u0628\u0627\u0626\u0639.'
    }],
    valueEyebrow: '\u0627\u0644\u0642\u064A\u0645\u0629',
    valueTitle: '\u0628\u064A\u0639 \u0645\u0636\u0645\u0648\u0646 \u0628\u062F\u0648\u0646 \u0643\u0627\u0634 \u0623\u0648 \u0634\u064A\u0643\u0627\u062A',
    values: [{
      icon: 'shield-check',
      t: '\u062D\u0645\u0627\u064A\u0629 \u0645\u0646 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644',
      d: '\u0627\u0644\u0645\u0628\u0644\u063A \u0644\u0627 \u064A\u0628\u0642\u0649 \u0645\u0639 \u0623\u064A \u0645\u0646 \u0627\u0644\u0637\u0631\u0641\u064A\u0646.'
    }, {
      icon: 'scale',
      t: '\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642 \u0627\u0644\u0623\u0637\u0631\u0627\u0641',
      d: '\u0643\u0644\u0627 \u0627\u0644\u0637\u0631\u0641\u064A\u0646 \u064A\u062D\u0645\u0644 \u0646\u0641\u0633 \u0627\u0644\u0625\u062B\u0628\u0627\u062A.'
    }, {
      icon: 'banknote',
      t: '\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0628\u0627\u0644\u0643\u0627\u0634',
      d: '\u0628\u062F\u0648\u0646 \u0646\u0642\u062F \u0623\u0648 \u0634\u064A\u0643\u0627\u062A \u0623\u0648 \u0633\u0646\u062F\u0627\u062A.'
    }, {
      icon: 'link-2',
      t: '\u062C\u0633\u0631 \u0645\u0646 \u0627\u0644\u062B\u0642\u0629',
      d: '\u062D\u0633\u0627\u0628 \u0645\u0631\u0627\u0642\u0628 \u064A\u063A\u0646\u064A \u0639\u0646 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629.'
    }, {
      icon: 'file-check-2',
      t: '\u0631\u0642\u0645\u0646\u0629 \u0627\u0644\u062A\u0646\u0627\u0632\u0644',
      d: '\u0627\u0644\u062A\u0646\u0627\u0632\u0644 \u064A\u0631\u0627\u0641\u0642 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629.'
    }, {
      icon: 'trending-up',
      t: '\u0634\u0645\u0648\u0644 \u0645\u0627\u0644\u064A \u0623\u0648\u0633\u0639',
      d: '\u062A\u0648\u0633\u064A\u0639 \u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629.'
    }],
    audEyebrow: '\u0644\u0645\u0646',
    audTitle: '\u0623\u0641\u0631\u0627\u062F \u0648\u0645\u0639\u0627\u0631\u0636 \u0648\u0628\u0646\u0648\u0643',
    audiences: [{
      t: '\u0627\u0644\u0645\u0634\u062A\u0631\u064A',
      d: '\u0623\u0648\u062F\u0639 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u064A \u062D\u0633\u0627\u0628 \u0644\u0627 \u064A\u062A\u062D\u0643\u0645 \u0628\u0647 \u0623\u062D\u062F.',
      cta: '\u0623\u0631\u064A\u062F \u0627\u0644\u0634\u0631\u0627\u0621',
      tone: 'primary'
    }, {
      t: '\u0627\u0644\u0628\u0627\u0626\u0639',
      d: '\u0627\u0639\u0631\u0641 \u0623\u0646 \u0627\u0644\u0645\u0628\u0644\u063A \u0645\u0648\u062C\u0648\u062F \u0642\u0628\u0644 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D.',
      cta: '\u0623\u0631\u064A\u062F \u0627\u0644\u0628\u064A\u0639',
      tone: 'secondary'
    }, {
      t: '\u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0648\u0627\u0644\u0628\u0646\u0648\u0643',
      d: '\u0627\u062F\u0645\u062C \u0627\u0644\u0636\u0645\u0627\u0646 \u0641\u064A \u0645\u0646\u0635\u062A\u0643 \u0627\u0644\u062E\u0627\u0635\u0629.',
      cta: '\u062A\u062D\u062F\u0651\u0631 \u0645\u0639\u0646\u0627',
      tone: 'outline'
    }],
    statement: '\u0639\u0644\u0649 \u0636\u0645\u0627\u0646\u062A\u0646\u0627',
    statementSub: '\u0627\u0644\u0636\u0627\u0645\u0646 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0623\u0631\u062F\u0646.',
    ctaTitle: '\u0633\u0644\u0645\u060C \u062A\u0633\u062A\u0644\u0645',
    ctaBody: '\u0627\u0641\u062A\u062D \u0636\u0645\u0627\u0646\u0629 \u0641\u064A \u062F\u0642\u0627\u0626\u0642. \u0644\u0627 \u062A\u062F\u0641\u0639 \u0625\u0644\u0627 \u0639\u0646\u062F \u0627\u0644\u0625\u0646\u062C\u0627\u0632.',
    ctaPrimary: '\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646',
    ctaSecondary: '\u062A\u062D\u062F\u0651\u0631 \u0645\u0639\u0646\u0627',
    footCols: [{
      h: '\u0627\u0644\u0645\u0646\u062A\u062C',
      links: ['\u0643\u064A\u0641 \u062A\u0639\u0645\u0644', '\u0644\u0644\u0645\u0634\u062A\u0631\u064A\u0646', '\u0644\u0644\u0628\u0627\u0639\u0629', '\u0644\u0644\u0645\u0639\u0627\u0631\u0636', '\u0627\u0644\u0623\u0633\u0639\u0627\u0631']
    }, {
      h: '\u0627\u0644\u0634\u0631\u0643\u0629',
      links: ['\u0639\u0646 \u0636\u0645\u0627\u0646\u0629', '\u0627\u0644\u0628\u0646\u0648\u0643 \u0627\u0644\u0634\u0631\u064A\u0643\u0629', '\u0648\u0638\u0627\u0626\u0641', '\u0627\u0644\u0623\u062E\u0628\u0627\u0631']
    }, {
      h: '\u0642\u0627\u0646\u0648\u0646\u064A',
      links: ['\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645', '\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629', '\u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0627\u0644\u0636\u0645\u0627\u0646', '\u0627\u0644\u0634\u0643\u0627\u0648\u0649']
    }],
    footNote: '\u062A\u0642\u062F\u0645 \u0636\u0645\u0627\u0646\u0629 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u0631\u0642\u0645\u064A \u0628\u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 \u0628\u0646\u0648\u0643 \u0645\u0631\u0627\u0642\u0628\u0629 \u0641\u064A \u0627\u0644\u0623\u0631\u062F\u0646.',
    footAddress: '\u0639\u0645\u0627\u0646\u060C \u0627\u0644\u0623\u0631\u062F\u0646',
    rights: '\u00A9 2026 eDamana \u0636\u0645\u0627\u0646\u0629. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.'
  }
};
Object.assign(window, {
  COPY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/copy.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EcosystemDiagram = __ds_scope.EcosystemDiagram;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PatternSurface = __ds_scope.PatternSurface;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.TransactionSteps = __ds_scope.TransactionSteps;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
