export default function t(t){if(!/^\d{7}[A-W][AHWTX]?$/.test(t)){return{meta:{},valid:false}}const r=t=>{let r=t;while(r.length<7){r=`0${r}`}const e="WABCDEFGHIJKLMNOPQRSTUV";let s=0;for(let t=0;t<7;t++){s+=parseInt(r.charAt(t),10)*(8-t)}s+=9*e.indexOf(r.substr(7));return e[s%23]};const e=t.length===9&&("A"===t.charAt(8)||"H"===t.charAt(8))?t.charAt(7)===r(t.substr(0,7)+t.substr(8)+""):t.charAt(7)===r(t.substr(0,7));return{meta:{},valid:e}}