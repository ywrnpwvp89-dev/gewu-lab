// Explicit formula notation; numerical models remain in core.js.
export const formulaTex={
 inertia:[String.raw`I=I_0+md^2`,String.raw`X=d^2,\quad Y=\frac{I}{10^4\,\mathrm{g}\cdot\mathrm{cm}^2}`],
 pendulum:[String.raw`T=\frac{t}{n},\quad g=\frac{4\pi^2L}{T^2}`,String.raw`T^2=\frac{4\pi^2}{g}L+b`],
 tracker:[String.raw`T=\frac{t_2-t_1}{n}`,String.raw`g=\frac{4\pi^2L}{T^2}`],
 sine:[String.raw`x=A\sin(\omega t+\varphi)+c`,String.raw`T=\frac{2\pi}{\omega},\quad g=\frac{4\pi^2L}{T^2}`],
 torsion:[String.raw`I_1=\frac{m_1D^2}{8}`,String.raw`K=\frac{4\pi^2I_1}{T_1^2-T_0^2}`,String.raw`I_2=\frac{K(T_2^2-T_0^2)}{4\pi^2}`],
 torsionParallel:[String.raw`I_d=\frac{K(T_d^2-T_3^2)}{4\pi^2}`,String.raw`I_d=ad^2+b,\quad a=m_1+m_2`],
 slider:[String.raw`I_c=\frac{m(D_1^2+D_2^2)}{16}+\frac{ml^2}{12}`],
 newton:[String.raw`X=\frac{|x_{\text{右}}-x_{\text{左}}|}{D}`,String.raw`X^2=kS+b,\quad R=\frac{k}{4\lambda}`],
 wedge:[String.raw`\Delta x=\frac{a}{n},\quad L=|b_1-b_2|`,String.raw`h=\frac{\lambda L}{2\Delta x}`],
 grating:[String.raw`\varphi=\frac{|\Delta\theta_{\text{左}}|+|\Delta\theta_{\text{右}}|}{4}`,String.raw`d=\frac{k\lambda}{\sin\varphi}`,String.raw`D=\frac{k}{d\cos\varphi},\quad R=\frac{kW}{d}`],
 bridgeRatio:[String.raw`\Delta R_s=|R'_s-R_s|`,String.raw`M=\frac{\delta V/\varepsilon}{\Delta R_s/R_s}`,String.raw`R_x=\frac{R_1}{R_2}R_s`],
 bridgeSupply:[String.raw`M=\frac{\delta V/\varepsilon}{\Delta R_s/R_s}`,String.raw`M=k\varepsilon+b`],
 bridgeDelta:[String.raw`\delta V=k\Delta R_s+b`],
 lcr:[String.raw`f_{0,\text{理论}}=\frac{1}{2\pi\sqrt{LC}}`,String.raw`Q=\frac{f_{\text{峰}}}{f_2-f_1}`,String.raw`Q_{\text{理论}}=\frac{\sqrt{L/C}}{R+R_{\text{内}}}`],
 helmholtz:[String.raw`B_{\text{单}}(z)=\frac{\mu_0NIR^2}{2(R^2+z^2)^{3/2}}`,String.raw`B_{\text{双}}(z)=B_{\text{单}}(z-d/2)+B_{\text{单}}(z+d/2)`],
 nitrogen:[String.raw`t_f=\frac{t_b+t_c}{2}`,String.raw`\Delta m=m_{ab}(t_f)-m_{cd}(t_f),\quad L=\frac{\overline Q}{\Delta m}`],
 calorimetry:[String.raw`Q_1=(m_wc_w+m_ac_a+m_bc_b+m_cc_c)(\theta_2-\theta_3)`,String.raw`Q_2=m_bc_b(\theta_1-\theta_2)`],
 scope:[String.raw`T=n_T\times\text{时基},\quad f=\frac1T`,String.raw`V_{\mathrm{pp}}=n_V\times\text{电压档位}`],
 phase:[String.raw`\Delta\varphi=360^\circ\frac{\Delta t}{T}`],
 coupling:[String.raw`V_{\mathrm{pp}}=V_{\max}-V_{\min}`,String.raw`\overline V=\frac{\sum_iV_i}{n}`],
 lissajous:[String.raw`\sin\varphi=\frac{|y_0|}{|y_{\max}|}`],
 sampling:[String.raw`f_s=\frac1{\Delta t},\quad\Delta f=\frac{f_s}{N}`,String.raw`f_{\mathrm{Nyquist}}=\frac{f_s}{2}`],
 rc:[String.raw`\varphi_{\text{理论}}=\arctan(2\pi fCR)`],
 beats:[String.raw`f_{\text{拍,理论}}=|f_2-f_1|`,String.raw`f_{\text{拍,测量}}=\frac{n}{t_2-t_1}`],
 xray:[String.raw`\text{计数率}\ N\ \text{对靶台角}\ \theta\ \text{作图}`],
 bragg:[String.raw`2d\sin\theta=k\lambda,\quad d=\frac{k\lambda}{2\sin\theta}`],
 quantum:[String.raw`s=\frac{\text{倍率}\,(V_2-V_1)}{t_2-t_1}`,String.raw`\Delta U=s\Delta t`],
 linear:[String.raw`Y=kX+b`],scatter:[String.raw`(x_i,y_i)\quad\text{实测散点；插值不等同于物理模型拟合}`],
 statistics:[String.raw`u_A=\frac{s}{\sqrt n},\quad u_B=\frac{\Delta}{\sqrt3}`,String.raw`u_c=\sqrt{u_A^2+u_B^2}`]
};
const subChars='₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ',subAscii='0123456789+-=()aehijklmnoprstuvx';
const supChars='⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ',supAscii='0123456789+-=()n';
export function scriptTokens(text){const tokens=[];const input=String(text??'');for(const char of input){const a=subChars.indexOf(char),b=supChars.indexOf(char),kind=a>=0?'sub':b>=0?'sup':'normal',value=a>=0?subAscii[a]:b>=0?supAscii[b]:char;const last=tokens.at(-1);if(last?.kind===kind)last.text+=value;else tokens.push({kind,text:value});}return tokens.flatMap(t=>t.kind!=='normal'?[t]:t.text.split(/(_[A-Za-z0-9]+|\^[+-]?[0-9]+)/g).filter(Boolean).map(x=>x.startsWith('_')?{kind:'sub',text:x.slice(1)}:x.startsWith('^')?{kind:'sup',text:x.slice(1)}:{kind:'normal',text:x}));}
const escapeTex=text=>String(text).replace(/([\\{}$&#%_])/g,'\\$1').replace(/\^/g,'\\textasciicircum{}').replace(/~/g,'\\textasciitilde{}');
export function notationTex(text,unit=false){let s=scriptTokens(text).map(t=>t.kind==='normal'?t.text:(t.kind==='sub'?'_':'^')+'{'+t.text+'}').join('');s=s.replace(/_([A-Za-z]+)/g,'_{$1}').replace(/\^([+-]?\d+)/g,'^{$1}');let out='';for(const token of s.match(/(?:[_^]\{[^}]*\})|[A-Za-z]+|[\u4e00-\u9fff]+|\s+|./gu)??[]){if(/^[_^]\{/.test(token))out+=token;else if(/^[\u4e00-\u9fff]+$/.test(token))out+='\\text{'+token+'}';else if(/^[A-Za-z]+$/.test(token))out+=unit||token.length>1?'\\mathrm{'+token+'}':token;else out+=({'π':'\\pi ','φ':'\\varphi ','θ':'\\theta ','λ':'\\lambda ','ω':'\\omega ','μ':'\\mu ','ε':'\\varepsilon ','δ':'\\delta ','Δ':'\\Delta ','Σ':'\\sum ','Ω':'\\Omega ','·':'\\cdot ','×':'\\times ','−':'-','′':"'",'°':'{}^\\circ ','√':'\\surd ','̄':'\\bar{}','\\':'\\backslash ','{':'\\{','}':'\\}','$':'\\$','&':'\\&','#':'\\#','%':'\\%','~':'\\sim '})[token]??token;}return out;}
export function mathHtml(tex,large=false){if(!window.katex)throw Error('公式排版组件未加载');return window.katex.renderToString((large?'\\displaystyle ':'')+tex,{throwOnError:true,strict:'ignore',trust:false,output:'htmlAndMathml'});}
export function quantityHtml(text){const raw=String(text),spaced=raw.lastIndexOf(' / '),at=spaced>=0?spaced+1:raw.indexOf('/');const tex=at<0?notationTex(text):notationTex(text.slice(0,at))+'\\,/\\, '+notationTex(text.slice(at+1),true);return '<span class="quantity-math">'+mathHtml(tex)+'</span>';}
export function proseHtml(text){const source=String(text),pattern=/(?:J\/\(g·K\)|g·cm²\/s²|g·cm²|m\/s²|m\/s|线\/mm|px\/m|μT|μm|μs|mV|mA|kHz|Hz|kΩ|mH|nF|μF|nm|mm|cm|J\/g)|\b\d+(?:\.\d+)?(?:\^[+-]?\d+|[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)|\b[A-Za-z]+(?:[_^][A-Za-z0-9+-]+|[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+)+|\b[A-Za-z]\b|[πφθλωμεδΔΩ](?:[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]+)?/g;const unitSet=new Set(['J/(g·K)','g·cm²/s²','g·cm²','m/s²','m/s','线/mm','px/m','μT','μm','μs','mV','mA','kHz','Hz','kΩ','mH','nF','μF','nm','mm','cm','J/g']);const escapeHtml=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let result='',last=0;for(const match of source.matchAll(pattern)){const value=match[0],before=source.slice(0,match.index).trimEnd(),isUnit=unitSet.has(value)||(/^[gmsVJ]$/.test(value)&&/[\d²³⁴⁻·)]$/.test(before));result+=escapeHtml(source.slice(last,match.index))+'<span class="quantity-math">'+mathHtml(notationTex(value,isUnit))+'</span>';last=match.index+value.length;}return result+escapeHtml(source.slice(last));}
export function renderFormula(id){return '<div class="formula-grid">'+formulaTex[id].map(tex=>'<div class="formula-item">'+mathHtml(tex,true)+'</div>').join('')+'</div>'+(id==='newton'?'<p class="formula-note">D 输入 px/m 时，先把 X 换算成 mm；计算 R 时把 λ 换算成 mm，最后输出 m。</p>':['lcr','helmholtz','wedge'].includes(id)?'<p class="formula-note">公式代入时采用一致单位；网页会按输入栏所示单位换算。</p>':'');}
