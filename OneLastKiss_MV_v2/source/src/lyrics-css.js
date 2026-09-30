// Trilingual lyric typography. Each line = .jp (original) + .tr { .rule, .zh (中文), .x (.en English | .ja 日本語) }
// Hierarchy: original big Mincho -> hairline -> Chinese in spaced serif -> third language small & quieter.
export const LYR_CSS = `
#lyr{position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden;--u:1px}
#lyr .ln{position:absolute;display:none;white-space:nowrap;color:#f4efe6;will-change:transform}
#lyr .ln span{display:inline-block}
#lyr .jp{font-family:"OLK Mincho",serif;font-weight:500}
#lyr .tr{opacity:0}
#lyr .tr>div{display:block}
#lyr .rule{display:block;font-style:normal;inline-size:calc(var(--u)*64);block-size:1px;margin-inline:auto;
  background:linear-gradient(90deg,transparent,rgba(255,244,228,.75),transparent);transform-origin:50% 50%}
#lyr .zh{font-family:"OLK SC",serif;font-weight:400;letter-spacing:.32em;color:#efe6da}
#lyr .x{color:rgba(232,224,214,.78)}
#lyr .x.en{font-family:"OLK Serif",serif;font-style:italic;font-weight:500;letter-spacing:.045em}
#lyr .x.ja{font-family:"OLK Mincho",serif;font-weight:400;letter-spacing:.24em}

/* vertical columns (right-to-left): original | hairline | 中文 | English set sideways */
#lyr .l-v{writing-mode:vertical-rl;text-orientation:mixed}
#lyr .l-v .jp{font-size:calc(var(--u)*46);letter-spacing:.26em}
#lyr .l-v .tr{margin-top:calc(var(--u)*70)}
#lyr .l-v .rule{inline-size:calc(var(--u)*54);margin:0 calc(var(--u)*14) 0 calc(var(--u)*10);
  background:linear-gradient(180deg,rgba(255,244,228,.8),transparent);transform-origin:50% 0}
#lyr .l-v .zh{font-size:calc(var(--u)*17);margin-left:calc(var(--u)*6)}
#lyr .l-v .x.en{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*18);letter-spacing:.08em}

/* horizontal, left aligned */
#lyr .l-h .jp{font-size:calc(var(--u)*40);letter-spacing:.14em}
#lyr .l-h .rule{margin:calc(var(--u)*12) 0 calc(var(--u)*9);background:linear-gradient(90deg,rgba(255,244,228,.8),transparent);transform-origin:0 50%}
#lyr .l-h .zh{font-size:calc(var(--u)*16)}
#lyr .l-h .x{font-size:calc(var(--u)*16);margin-top:calc(var(--u)*5)}

#lyr .l-center,#lyr .l-en,#lyr .l-whisper,#lyr .l-cine,#lyr .l-credit{text-align:center}
#lyr .l-center .jp{font-size:calc(var(--u)*46);letter-spacing:.22em}
#lyr .l-center .rule{margin-top:calc(var(--u)*14);margin-bottom:calc(var(--u)*11)}
#lyr .l-center .zh{font-size:calc(var(--u)*17);padding-left:.32em}
#lyr .l-center .x{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*6)}

/* big English: English serif hero, then Japanese in wide Mincho, then 中文 */
#lyr .l-en .jp,#lyr .l-oh span,#lyr .l-whisper .jp,#lyr .l-credit .jp{font-family:"OLK Serif",serif;font-style:italic}
#lyr .l-en .jp{font-weight:300;font-size:calc(var(--u)*82);letter-spacing:.01em}
#lyr .l-en .tr{display:flex;flex-direction:column;align-items:center}
#lyr .l-en .rule{order:0;inline-size:calc(var(--u)*120);margin:calc(var(--u)*16) auto calc(var(--u)*12)}
#lyr .l-en .x{order:1;font-size:calc(var(--u)*21);color:rgba(246,238,228,.9)}
#lyr .l-en .zh{order:2;font-size:calc(var(--u)*17);margin-top:calc(var(--u)*9);opacity:.85;padding-left:.32em}

#lyr .l-oh{inset:0}
#lyr .l-oh span{position:absolute;font-weight:500;font-size:calc(var(--u)*72);transform-origin:50% 60%}
#lyr .l-whisper .jp{font-weight:300;font-size:calc(var(--u)*34);letter-spacing:.08em}
#lyr .l-whisper .rule{margin-top:calc(var(--u)*12);margin-bottom:calc(var(--u)*9);inline-size:calc(var(--u)*40)}
#lyr .l-whisper .zh{font-size:calc(var(--u)*15)}
#lyr .l-whisper .x{font-size:calc(var(--u)*15);margin-top:calc(var(--u)*5)}

/* letterbox subtitle: original on top, 中文 | English share one quiet line */
#lyr .l-cine .jp{font-size:calc(var(--u)*30);letter-spacing:.16em}
#lyr .l-cine .rule{display:none}
#lyr .l-cine .tr{display:flex;justify-content:center;align-items:baseline;margin-top:calc(var(--u)*8)}
#lyr .l-cine .zh{font-size:calc(var(--u)*14);letter-spacing:.24em}
#lyr .l-cine .x{font-size:calc(var(--u)*15)}
#lyr .l-cine .x::before{content:'';display:inline-block;width:1px;height:.9em;background:currentColor;opacity:.55;margin:0 1.1em 0 .9em;vertical-align:-.12em}

/* pencil epilogue on paper (multiply) */
#lyr .l-pencil{color:#3d352f}
#lyr .l-pencil .jp{font-size:calc(var(--u)*42);letter-spacing:.18em;font-weight:400}
#lyr .l-pencil .rule{margin:calc(var(--u)*12) 0 calc(var(--u)*9);background:linear-gradient(90deg,rgba(90,76,64,.7),transparent);transform-origin:0 50%}
#lyr .l-pencil .zh{font-size:calc(var(--u)*16);color:#6f6256}
#lyr .l-pencil .x{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*5);color:#8a7b6d}

#lyr .l-credit .jp{font-style:normal;font-weight:400;font-size:calc(var(--u)*19);letter-spacing:.5em;text-transform:uppercase}
#lyr .l-credit .rule{margin-top:calc(var(--u)*14);margin-bottom:calc(var(--u)*11);inline-size:calc(var(--u)*36)}
#lyr .l-credit .zh{font-size:calc(var(--u)*14);letter-spacing:.7em}
#lyr .l-credit .x{font-size:calc(var(--u)*13);margin-top:calc(var(--u)*7);letter-spacing:.5em}
`;
