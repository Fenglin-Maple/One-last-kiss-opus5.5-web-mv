// Lyrics (timed from the supplied LRC), trilingual: original + 中文 + third language, staged per line.
// [start, end, original, 中文, style, opts, third]
//   third: English for Japanese lines; Japanese for English lines (styles en / whisper / credit)
//   style: v (vertical column at x), h (horizontal at x,y), center, en (big English), oh (scattered vocalise),
//          whisper, cine (letterbox subtitle), pencil (ending, drawn on paper), credit
//   opts: x, y, in: glow|type|burn|ink, out: fade|dust|shatter|blur|rise, c: colour, rd: reveal seconds
import { PERIOD } from './core/audio.js';

const OH = 'Oh oh oh oh oh';
const LOVE = 'I love you more than you’ll ever know';
const LOVE_ZH = '我爱你，远比你所知道的更多';
const LOVE_JA = 'あなたが思うよりずっと　あなたを愛してる';
const WARM = '#ffe2b8', COLD = '#dce6ff', EMBER = '#ffcf8a', PALE = '#fff1ea';

export const LYRICS = [
  [12.2, 16.6, 'Words & Music — Hikaru Utada', '词曲　宇多田光', 'credit', { y: 0.7 }, '作詞・作曲　宇多田ヒカル'],

  // Louvre (night glass pyramid) -> portrait
  [20.69, 25.0, '初めてのルーブルは', '第一次去卢浮宫', 'v', { x: 0.86 }, 'My first time at the Louvre'],
  [23.01, 25.0, 'なんてことはなかったわ', '也不过如此而已', 'v', { x: 0.79 }, 'was nothing special at all'],
  [25.1, 29.1, '私だけのモナリザ', '只属于我的蒙娜丽莎', 'v', { x: 0.22, c: WARM }, 'My very own Mona Lisa —'],
  [26.94, 29.1, 'もうとっくに出会ってたから', '我早就已经遇见了', 'v', { x: 0.15, c: WARM }, 'I had met her long before'],

  // gears
  [29.37, 33.55, '初めてあなたを見た', '第一次见到你的', 'h', { x: 0.08, y: 0.7, c: WARM, in: 'type' }, 'The day I first saw you,'],
  [31.16, 33.55, 'あの日動き出した歯車', '那一天，齿轮开始转动', 'h', { x: 0.08, y: 0.83, c: WARM, in: 'type' }, 'the gears began to turn'],
  [33.67, 37.55, '止められない喪失の予感', '无法阻止的、失去的预感', 'center', { y: 0.78, c: COLD, out: 'shatter' }, 'a foreboding of loss I cannot stop'],

  // polaroids
  [38.02, 47.6, 'もういっぱいあるけど', '虽然已经有很多了', 'v', { x: 0.85 }, 'We already have so many,'],
  [43.79, 47.6, 'もう一つ増やしましょう', '那就再添一个吧', 'v', { x: 0.78, c: WARM }, 'so let’s make one more'],
  [47.75, 52.2, '(Can you give me one last kiss?)', '（能给我最后一个吻吗？）', 'whisper', {}, '（最後のキスを　くれる？）'],

  // galaxy of two lights
  [52.39, 55.1, '忘れたくないこと', '不想忘记的事', 'center', { y: 0.8 }, 'Things I never want to forget'],
  [55.22, 60.9, OH, '', 'oh', {}],
  [61.07, 63.65, '忘れたくないこと', '不想忘记的事', 'center', { y: 0.8 }, 'Things I never want to forget'],
  [63.79, 69.45, OH, '', 'oh', {}],
  [69.63, 79.6, LOVE, LOVE_ZH, 'en', { rd: 4.4, out: 'dust', y: 0.66 }, LOVE_JA],

  // viewfinder -> projector -> platforms
  [80.84, 82.72, '「写真は苦手なんだ」', '“我不太喜欢拍照”', 'center', { y: 0.75, in: 'type', out: 'blur', mono: 1 }, '“I’m not good with photos”'],
  [82.78, 84.85, 'でもそんなものはいらないわ', '可我并不需要那种东西', 'h', { x: 0.08, y: 0.8 }, 'But I don’t need things like that'],
  [84.92, 89.15, 'あなたが焼きついたまま', '你始终烙印在', 'v', { x: 0.85, in: 'burn', c: EMBER }, 'You stay burned into'],
  [86.9, 89.15, '私の心のプロジェクター', '我心中的放映机里', 'v', { x: 0.78, in: 'burn', c: EMBER }, 'the projector of my heart'],
  [89.26, 91.25, '寂しくないふりしてた', '我一直假装并不寂寞', 'cine', {}, 'I kept pretending I wasn’t lonely'],
  [91.35, 93.45, 'まあ そんなのお互い様か', '嘛，这点我们彼此彼此吧', 'cine', {}, 'Well, I guess we both did'],
  [93.57, 95.5, '誰かを求めることは', '渴求着某个人', 'cine', {}, 'To long for someone'],
  [95.57, 97.55, '即ち傷つくことだった', '就意味着会受伤', 'cine', { out: 'shatter' }, 'was to be hurt, all along'],

  // embers
  [98.19, 103.4, 'Oh can you give me one last kiss?', '能给我最后一个吻吗？', 'en', { rd: 3.2, in: 'burn', c: EMBER }, 'ねえ　最後にキスをくれる？'],
  [103.72, 107.9, '燃えるようなキスをしよう', '来一个燃烧般的吻吧', 'v', { x: 0.13, in: 'burn', c: EMBER, out: 'rise' }, 'Let’s share a kiss that burns'],
  [108.05, 112.3, '忘れたくても', '即使想要忘记', 'v', { x: 0.13, c: EMBER, out: 'dust' }, 'so that even if I tried to forget'],
  [112.44, 115.0, '忘れられないほど', '也无法忘记', 'v', { x: 0.16, c: EMBER, out: 'dust' }, 'I never could'],

  // galaxy on fire
  [115.19, 120.85, OH, '', 'oh', { c: EMBER }],
  [121.0, 123.65, LOVE, LOVE_ZH, 'en', { rd: 2.4, c: EMBER, y: 0.66 }, LOVE_JA],
  [123.76, 129.5, OH, '', 'oh', { c: EMBER }],
  [129.61, 135.6, LOVE, LOVE_ZH, 'en', { rd: 4.2, c: EMBER, out: 'dust', y: 0.66 }, LOVE_JA],

  // red sea
  [149.52, 154.9, 'もう分かっているよ', '其实我早就明白了', 'center', { y: 0.86, c: PALE }, 'I already know'],
  [155.05, 159.45, 'この世の終わりでも', '即使这世界走到尽头', 'center', { y: 0.86, c: PALE }, 'even at the end of the world'],
  [159.63, 165.9, '年をとっても', '即使我们都已老去', 'center', { y: 0.86, c: PALE, out: 'dust' }, 'even when we grow old'],

  // double helix ascent -> climax
  [166.14, 168.6, '忘れられない人', '无法忘记的人', 'center', { y: 0.8 }, 'The one I can’t forget'],
  [168.71, 170.6, OH, '', 'oh', {}],
  [170.67, 175.35, '忘れられない人', '无法忘记的人', 'center', { y: 0.8 }, 'The one I can’t forget'],
  [175.47, 181.1, OH, '', 'oh', {}],
  [181.25, 184.75, LOVE, LOVE_ZH, 'en', { rd: 2.8 }, LOVE_JA],
  [184.86, 189.6, OH, '', 'oh', {}],
  [189.7, 192.45, '忘れられない人', '无法忘记的人', 'center', { y: 0.8 }, 'The one I can’t forget'],
  [192.56, 198.15, OH, '', 'oh', {}],
  [198.3, 207.5, LOVE, LOVE_ZH, 'en', { rd: 4.6, rainbow: 1, out: 'dust' }, LOVE_JA],

  // pencil epilogue
  [226.2, 231.2, '吹いていった風の後を', '追随着那阵吹过的风', 'pencil', { x: 0.1, y: 0.2 }, 'Chasing after the wind that blew by'],
  [230.57, 237.8, '追いかけた　眩しい午後', '追逐着的　那个耀眼的午后', 'pencil', { x: 0.1, y: 0.33 }, 'that dazzling afternoon'],
];

const OH_STEP = 2 * PERIOD;
/** exact time of every sung "oh" (drives shockwaves in the galaxy/helix scenes) */
export const OH_TIMES = LYRICS.filter((l) => l[4] === 'oh').flatMap((l) => [0, 1, 2, 3, 4].map((k) => l[0] + k * OH_STEP));
export const LOVE_TIMES = LYRICS.filter((l) => l[2] === LOVE).map((l) => l[0]);
export const ohStep = () => OH_STEP;

/** seconds since the most recent event in list (Infinity if none) */
export function since(list, t) {
  let best = Infinity;
  for (const x of list) if (x <= t && t - x < best) best = t - x;
  return best;
}
