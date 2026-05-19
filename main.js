import './style.css'
import key0 from './src/assets/keys/bota-major-arcana-coloured-00-fool_6242180544_o.jpg'
import key1 from './src/assets/keys/bota-major-arcana-coloured-01-magician_6242180776_o.jpg'
import key2 from './src/assets/keys/bota-major-arcana-coloured-02-high-priestess_6242181034_o.jpg'
import key3 from './src/assets/keys/bota-major-arcana-coloured-03-empress_6241665127_o.jpg'
import key4 from './src/assets/keys/bota-major-arcana-coloured-04-emperor_6242181516_o.jpg'
import key5 from './src/assets/keys/bota-major-arcana-coloured-05-hierophant_6242181756_o.jpg'
import key6 from './src/assets/keys/bota-major-arcana-coloured-06-lovers_6242182038_o.jpg'
import key7 from './src/assets/keys/bota-major-arcana-coloured-07-chariot_6241666165_o.jpg'
import key8 from './src/assets/keys/bota-major-arcana-coloured-08-strength_6241666375_o.jpg'
import key9 from './src/assets/keys/bota-major-arcana-coloured-09-hermit_6241666609_o.jpg'
import key10 from './src/assets/keys/bota-major-arcana-coloured-10-wheel-of-fortune_6241666825_o.jpg'
import key11 from './src/assets/keys/bota-major-arcana-coloured-11-justice_6242183258_o.jpg'
import key12 from './src/assets/keys/bota-major-arcana-coloured-12-hanged-man_6242183506_o.jpg'
import key13 from './src/assets/keys/bota-major-arcana-coloured-13-death_6241667611_o.jpg'
import key14 from './src/assets/keys/bota-major-arcana-coloured-14-temperance_6242184048_o.jpg'
import key15 from './src/assets/keys/bota-major-arcana-coloured-15-devil_6241668307_o.jpg'
import key16 from './src/assets/keys/bota-major-arcana-coloured-16-tower_6242185068_o.jpg'
import key17 from './src/assets/keys/bota-major-arcana-coloured-17-star_6241669115_o.jpg'
import key18 from './src/assets/keys/bota-major-arcana-coloured-18-moon_6241669387_o.jpg'
import key19 from './src/assets/keys/bota-major-arcana-coloured-19-sun_6242185894_o.jpg'
import key20 from './src/assets/keys/bota-major-arcana-coloured-20-judgement_6241669905_o.jpg'
import key21 from './src/assets/keys/bota-major-arcana-coloured-21-world_6242186374_o.jpg'

const gematriaMap = {
    'א': { name: 'Aleph', val: 1 },
    'ב': { name: 'Beth', val: 2 },
    'ג': { name: 'Gimel', val: 3 },
    'ד': { name: 'Daleth', val: 4 },
    'ה': { name: 'Heh', val: 5 },
    'ו': { name: 'Vav', val: 6 },
    'ז': { name: 'Zain', val: 7 },
    'ח': { name: 'Cheth', val: 8 },
    'ט': { name: 'Teth', val: 9 },
    'י': { name: 'Yod', val: 10 },
    'כ': { name: 'Kaph', val: 20 },
    'ך': { name: 'Kaph (Final)', val: 20 },
    'ל': { name: 'Lamed', val: 30 },
    'מ': { name: 'Mem', val: 40 },
    'ם': { name: 'Mem (Final)', val: 40 },
    'נ': { name: 'Nun', val: 50 },
    'ן': { name: 'Nun (Final)', val: 50 },
    'ס': { name: 'Samekh', val: 60 },
    'ע': { name: 'Ayin', val: 70 },
    'פ': { name: 'Peh', val: 80 },
    'ף': { name: 'Peh (Final)', val: 80 },
    'צ': { name: 'Tzaddi', val: 90 },
    'ץ': { name: 'Tzaddi (Final)', val: 90 },
    'ק': { name: 'Qoph', val: 100 },
    'ר': { name: 'Resh', val: 200 },
    'ש': { name: 'Shin', val: 300 },
    'ת': { name: 'Tav', val: 400 }
};

function getGematria(word) {
    if (!word) return null;
    let sum = 0;
    const parts = [];
    for (let char of word) {
        const letterData = gematriaMap[char];
        if (letterData) {
            sum += letterData.val;
            parts.push(`${char} (${letterData.name} = ${letterData.val})`);
        }
    }
    return {
        sum,
        breakdown: parts.join(' + ') + ` = ${sum}`
    };
}

const sephiroth = [
    { id: 1, name: "Kether", hebrew: "כתר", color: "#ffffff", cx: 500, cy: 100, textColor: "#000000" },
    { id: 2, name: "Chokmah", hebrew: "חכמה", color: "#e2e8f0", cx: 750, cy: 250, textColor: "#000000" },
    { id: 3, name: "Binah", hebrew: "בינה", color: "#111111", cx: 250, cy: 250, textColor: "#ffffff" },
    { id: 4, name: "Chesed", hebrew: "חסד", color: "#2563eb", cx: 750, cy: 550, textColor: "#ffffff" },
    { id: 5, name: "Geburah", hebrew: "גבורה", color: "#dc2626", cx: 250, cy: 550, textColor: "#ffffff" },
    { id: 6, name: "Tiphareth", hebrew: "תפארת", color: "#facc15", cx: 500, cy: 700, textColor: "#000000" },
    { id: 7, name: "Netzach", hebrew: "נצח", color: "#16a34a", cx: 750, cy: 850, textColor: "#ffffff" },
    { id: 8, name: "Hod", hebrew: "הוד", color: "#f97316", cx: 250, cy: 850, textColor: "#000000" },
    { id: 9, name: "Yesod", hebrew: "יסוד", color: "#7c3aed", cx: 500, cy: 1000, textColor: "#ffffff" },
    { id: 10, name: "Malkuth", hebrew: "מלכות", cx: 500, cy: 1250, textColor: "#ffffff", special: true },
];

const paths = [
    { id: 11, letter: "א", name: "Aleph", from: 1, to: 2, image: key0, color: "#fef08a" },
    { id: 12, letter: "ב", name: "Beth", from: 1, to: 3, image: key1, color: "#facc15" },
    { id: 13, letter: "ג", name: "Gimel", from: 1, to: 6, image: key2, color: "#3b82f6" },
    { id: 14, letter: "ד", name: "Daleth", from: 2, to: 3, image: key3, color: "#10b981" },
    { id: 15, letter: "ה", name: "Heh", from: 2, to: 6, image: key4, color: "#ef4444" },
    { id: 16, letter: "ו", name: "Vav", from: 2, to: 4, image: key5, color: "#f97316" },
    { id: 17, letter: "ז", name: "Zain", from: 3, to: 6, image: key6, color: "#f97316" },
    { id: 18, letter: "ח", name: "Cheth", from: 3, to: 5, image: key7, color: "#fb923c" },
    { id: 19, letter: "ט", name: "Teth", from: 4, to: 5, image: key8, color: "#facc15" },
    { id: 20, letter: "י", name: "Yod", from: 4, to: 6, image: key9, color: "#84cc16" },
    { id: 21, letter: "כ", name: "Kaph", from: 4, to: 7, image: key10, color: "#8b5cf6" },
    { id: 22, letter: "ל", name: "Lamed", from: 5, to: 6, image: key11, color: "#10b981" },
    { id: 23, letter: "מ", name: "Mem", from: 5, to: 8, image: key12, color: "#2563eb" },
    { id: 24, letter: "נ", name: "Nun", from: 6, to: 7, image: key13, color: "#0d9488" },
    { id: 25, letter: "ס", name: "Samekh", from: 6, to: 9, image: key14, color: "#3b82f6" },
    { id: 26, letter: "ע", name: "Ayin", from: 6, to: 8, image: key15, color: "#4338ca" },
    { id: 27, letter: "פ", name: "Peh", from: 7, to: 8, image: key16, color: "#ef4444" },
    { id: 28, letter: "צ", name: "Tzaddi", from: 7, to: 9, image: key17, color: "#8b5cf6" },
    { id: 29, letter: "ק", name: "Qoph", from: 7, to: 10, image: key18, color: "#be185d" },
    { id: 30, letter: "ר", name: "Resh", from: 8, to: 9, image: key19, color: "#f97316" },
    { id: 31, letter: "ש", name: "Shin", from: 8, to: 10, image: key20, color: "#ea580c" },
    { id: 32, letter: "ת", name: "Tav", from: 9, to: 10, image: key21, color: "#312e81" },
];

const R = 60; // Sephiroth radius

const pathIntelligences = {
    1: { 
        title: "Kether (The Crown)", 
        text: "It is the light of the Primordial Intelligence, and this is the Primary Glory. Among all created beings, none may attain to its essential reality.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Admirable, Wonderful, or Hidden Intelligence",
            "Psychological Seat": "Yekhidah (The Universal and Indivisible SELF)",
            "Color": "Pure white brilliance",
            "Element / Mover": "Root of Air / Primum Mobile (First Swirlings)",
            "Divine Name": "Eheyeh (\"I AM\" or \"Existence\")",
            "Archangel": "Metatron",
            "Other Titles": "Nequdah Peshutah (The Primordial Point or Smooth Point), Tath Zal (The Profuse Giver), Arikh Anpin (The Vast Countenance or Macroprosopus)"
        }
    },
    2: { 
        title: "Chokmah (Wisdom)", 
        text: "It is the Crown of Creation, and the Splendor of Unity, to which it is the most nearly approximate. In the mouths of the Masters of the Qabalah it is called the Second Glory.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Illuminating Intelligence",
            "Psychological Seat": "Chaiah (The universal cosmic Life-Force)",
            "Color": "Opalescent gray (a translucent ray shot through with all colors)",
            "Element / Sphere": "Root of Fire / Masloth (Sphere of the Zodiac and fixed stars)",
            "Divine Name": "Jah, Yah, or IH",
            "Archangel": "Ratziel",
            "Angelic Choir": "Auphanim (Wheels)",
            "Other Titles": "Ab (The Father), Kachmah (Power of Formation)"
        }
    },
    3: { 
        title: "Binah (Understanding)", 
        text: "It is the Foundation of Primordial Wisdom, termed Firmness of Faith, and Root of thy Mother. It is the Mother of Faith for the power of Faith emanates from it.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Sanctifying Intelligence",
            "Psychological Seat": "Neshamah (The Divine Soul and source of spiritual intuition)",
            "Color": "Black (or very deep blue-violet)",
            "Element / Sphere": "Root of Water / Shabbathai (Sphere of Saturn, power of restriction and limitation)",
            "Divine Name": "Elohim / Yod-Heh-Vav-Heh Elohim",
            "Archangel": "Tzaphqiel",
            "Angelic Choir": "Aralim (Thrones)",
            "Other Titles": "Marah (The Great Sea), Ama (The dark, sterile Mother), Aima (The bright, fertile Mother)"
        }
    },
    4: { 
        title: "Chesed (Mercy)", 
        text: "It is so called because from thence is the origin of all beneficent power of the subtle emanations of the most abstract essences which emanate one from another by the power of the Primordial Emanation.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Measuring, Receptacular, or Cohesive Intelligence",
            "Psychological Seat": "Memory (both universal and personal)",
            "Color": "Blue (or deep violet)",
            "Planetary Sphere": "Tzedek (Sphere of Jupiter, the expansive, beneficent regulating force)",
            "Divine Name": "El (\"The Mighty One\")",
            "Archangel": "Tzadqiel",
            "Angelic Choir": "Chasmalim",
            "Other Titles": "Gedulah (Magnificence or Majesty)"
        }
    },
    5: { 
        title: "Geburah (Severity / Strength)", 
        text: "It is so called because it is the very substance of Unity, and is within the substance of that Binah which itself emanates from within the depths (literally, 'from within the enclosure') of the Primordial Wisdom.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Radical or Rooted Intelligence",
            "Psychological Seat": "Volition / Personal Will",
            "Color": "Red or flame-scarlet",
            "Planetary Sphere": "Madim (Sphere of Mars)",
            "Divine Name": "Elohim Gibor (\"The Gods of Power\")",
            "Archangel": "Kamael",
            "Angelic Choir": "Seraphim",
            "Other Titles": "Pachad (Fear), Deen (Justice)"
        }
    },
    6: { 
        title: "Tiphareth (Beauty)", 
        text: "It is so called because it gathers together the emanations of the archetypal influence and communicates them to all those blessed ones who are united to its essence.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Intelligence of Mediating or Separative Influence",
            "Psychological Seat": "Ruach (The Human Spirit / The Ego) and the Imagination",
            "Color": "Yellow (or bright orange)",
            "Planetary Sphere": "Shemesh (Sphere of the Sun)",
            "Divine Name": "Jehovah Eloah va-Da'ath",
            "Archangel": "Michael",
            "Angelic Choir": "Melakim (Kings)",
            "Other Titles": "Ben (The Son), Melek (The King), Adam (Generic Man), Ish (Conscious man), Zauir Anpin (The Lesser Countenance or Microprosopus)"
        }
    },
    7: { 
        title: "Netzach (Victory)", 
        text: "It is so called because it is the brilliant splendor of all the intellectual powers which are beheld by the eye of understanding and by the thought of faith.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Occult or Hidden Intelligence",
            "Psychological Seat": "The Desire-nature and the emotions",
            "Color": "Green",
            "Planetary Sphere": "Nogah (Sphere of Venus)",
            "Divine Name": "Jehovah Tzabaoth (\"Lord of Hosts\")",
            "Archangel": "Haniel (or Anael)",
            "Angelic Choir": "Elohim"
        }
    },
    8: { 
        title: "Hod (Splendor)", 
        text: "It is so called because it is the dwelling-place of the Primordial. It has no root in which it may abide other than the recesses of Gedulah whence its essence emanates.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Perfect or Absolute Intelligence",
            "Psychological Seat": "Intellect / Self-conscious reasoning and discrimination",
            "Color": "Orange (or yellow)",
            "Planetary Sphere": "Kokab (Sphere of Mercury)",
            "Divine Name": "Elohim Tzabaoth (\"God of Hosts\")",
            "Archangel": "Raphael (God the Healer)",
            "Angelic Choir": "Beniy Elohim (Sons of God)"
        }
    },
    9: { 
        title: "Yesod (Foundation)", 
        text: "It is so called because it purifies the essence of the Sephiroth, proves and preserves their images, and prevents them from loss by their union with itself.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Pure, Clear, or Purified Intelligence",
            "Psychological Seat": "Nephesh (The Vital Soul) / Universal automatic consciousness (Subconsciousness) and reproductive vital forces",
            "Color": "Violet (or blue)",
            "Planetary Sphere": "Lebanah (Sphere of the Moon)",
            "Divine Name": "Shaddai El Chai (\"Almighty Strength of Life\")",
            "Archangel": "Gabriel",
            "Angelic Choir": "Kerabim (The Mighty Ones)"
        }
    },
    10: { 
        title: "Malkuth (The Kingdom)", 
        text: "It is so called because it is exalted above every head and sits on the throne of Binah. It illuminates the splendor of all the lights and causes the flowing forth of influence from the Prince of Countenances.",
        sephirahDetails: {
            "Qabalistic Intelligence": "Resplendent Intelligence",
            "Psychological Seat": "Guph (The physical body) / Sensory consciousness",
            "Color": "Quartered into Citrine (Air), Russet (Fire), Olive (Water), and Black (Earth)",
            "Element / Sphere": "Cholom Yesodoth (Sphere of the Elements or \"Breaker of Foundations\")",
            "Divine Name": "Adonai Melek (\"Lord King\") or Adonai",
            "Angelic Choir": "Ishim (Fiery Ones)",
            "Other Titles": "Malkah (The Queen), Kallah (The Bride), Bethulah (The Virgin), The Gate"
        }
    },
    11: {
        title: "Scintillating or Fiery Intelligence",
        text: "It is the essence of the veil placed before the dispositions and order of the superior and inferior causes. He who possesses this path is in the enjoyment of great dignity for he stands face to face with the Cause of Causes.",
        pathDetails: {
            "Hebrew Letter": "Aleph",
            "Tarot Key": "0, The Fool",
            "Connection": "Joins Kether to Chokmah",
            "Astrological/Elemental Attribution": "Air or Uranus"
        }
    },
    12: {
        title: "Intelligence of Transparency",
        text: "It is called the Intelligence of Transparency because it is the image of that phase of Gedulah (literally, 'of that wheeling of Gedulah') which is the source of vision in those who behold apparitions.",
        pathDetails: {
            "Hebrew Letter": "Beth",
            "Tarot Key": "1, The Magician",
            "Connection": "Joins Kether to Binah",
            "Astrological/Elemental Attribution": "Mercury"
        }
    },
    13: {
        title: "Uniting Intelligence or Conductive Intelligence of Unity",
        text: "It is called the Uniting Intelligence... because it is the essence of glory and the perfection of the truths of spiritual unities.",
        pathDetails: {
            "Hebrew Letter": "Gimel",
            "Tarot Key": "2, The High Priestess",
            "Connection": "Joins Kether to Tiphareth",
            "Astrological/Elemental Attribution": "Moon"
        }
    },
    14: {
        title: "Luminous Intelligence",
        text: "It is called the Luminous Intelligence, because it is the essence of that which is the instructor in the secret foundations of holiness and perfection.",
        pathDetails: {
            "Hebrew Letter": "Daleth",
            "Tarot Key": "3, The Empress",
            "Connection": "Joins Chokmah to Binah",
            "Astrological/Elemental Attribution": "Venus"
        }
    },
    15: {
        title: "Constituting Intelligence",
        text: "It is called the Constituting Intelligence because it constitutes creative force (or, the essence of creation) in pure darkness. According to masters of contemplation, this is that darkness mentioned in Scripture: 'Thick darkness a swaddling-band for it.'",
        pathDetails: {
            "Hebrew Letter": "Heh",
            "Tarot Key": "4, The Emperor",
            "Connection": "Joins Chokmah to Tiphareth",
            "Astrological/Elemental Attribution": "Aries or Mars"
        }
    },
    16: {
        title: "Triumphant and Eternal Intelligence",
        text: "It is called the Triumphant and Eternal Intelligence because it is the delight of glory, the glory of Ain, the No-Thing, veiling the name of Him, the Fortunate One, and it is called also the Garden of Eden, prepared for the compassionate.",
        pathDetails: {
            "Hebrew Letter": "Vav",
            "Tarot Key": "5, The Hierophant",
            "Connection": "Joins Chokmah to Chesed",
            "Astrological/Elemental Attribution": "Taurus"
        }
    },
    17: {
        title: "Intelligence of Sensation or Disposing Intelligence",
        text: "It establishes the faith of the compassionate, clothes them with the Holy Life-Breath, and is called the Foundation of Tiphareth in the plane of the Supernals.",
        pathDetails: {
            "Hebrew Letter": "Zain",
            "Tarot Key": "6, The Lovers",
            "Connection": "Joins Binah to Tiphareth",
            "Astrological/Elemental Attribution": "Gemini"
        }
    },
    18: {
        title: "Intelligence of the House of Influence",
        text: "It is called the Intelligence of the House of Influence; and from the interior walls of its perfections the arcana flow down, with the hidden meanings concealed in their shadow, and therefrom is union with the innermost reality of the Most High.",
        pathDetails: {
            "Hebrew Letter": "Cheth",
            "Tarot Key": "7, The Chariot",
            "Connection": "Joins Binah to Geburah",
            "Astrological/Elemental Attribution": "Cancer or the Moon"
        }
    },
    19: {
        title: "Intelligence of the Secret of all Spiritual Activities",
        text: "It is called the Intelligence of the Secret of all Spiritual activities because of the influence spread by it from the supreme blessing and the supernal glory.",
        pathDetails: {
            "Hebrew Letter": "Teth",
            "Tarot Key": "8, Strength",
            "Connection": "Joins Chesed to Geburah",
            "Astrological/Elemental Attribution": "Leo or the Sun"
        }
    },
    20: {
        title: "Intelligence of Will",
        text: "It is called the Intelligence of Will because it forms all patterns, and to know this Intelligence is to know all the reality of the Primordial Wisdom.",
        pathDetails: {
            "Hebrew Letter": "Yod",
            "Tarot Key": "9, The Hermit",
            "Connection": "Joins Chesed to Tiphareth",
            "Astrological/Elemental Attribution": "Virgo or Mercury"
        }
    },
    21: {
        title: "Intelligence of Desirous Quest or Rewarding Intelligence",
        text: "It is called the Intelligence of Desirous Quest because it receives the divine influence, which it distributes as a blessing to all modes of being.",
        pathDetails: {
            "Hebrew Letter": "Kaph",
            "Tarot Key": "10, Wheel of Fortune",
            "Connection": "Joins Chesed to Netzach",
            "Astrological/Elemental Attribution": "Jupiter"
        }
    },
    22: {
        title: "Faithful Intelligence",
        text: "It is called the Faithful Intelligence because by it spiritual powers are increased. All dwellers on earth are under its shadow.",
        pathDetails: {
            "Hebrew Letter": "Lamed",
            "Tarot Key": "11, Justice",
            "Connection": "Joins Geburah to Tiphareth",
            "Astrological/Elemental Attribution": "Libra or Venus"
        }
    },
    23: {
        title: "Stable Intelligence",
        text: "It is called the Stable Intelligence because it is the power of permanence in all the Sephiroth.",
        pathDetails: {
            "Hebrew Letter": "Mem",
            "Tarot Key": "12, The Hanged Man",
            "Connection": "Joins Geburah to Hod",
            "Astrological/Elemental Attribution": "Water or Neptune"
        }
    },
    24: {
        title: "Intelligence of Resemblance or Imaginative Intelligence",
        text: "It is called the Intelligence of Resemblance... because it constitutes the similarity in the likenesses of all created beings.",
        pathDetails: {
            "Hebrew Letter": "Nun",
            "Tarot Key": "13, Death",
            "Connection": "Joins Tiphareth to Netzach",
            "Astrological/Elemental Attribution": "Scorpio or Mars"
        }
    },
    25: {
        title: "Intelligence of Probation or Trial",
        text: "It is called the Intelligence of Probation or Trial because it is the first test whereby the Creator tries the compassionate.",
        pathDetails: {
            "Hebrew Letter": "Samekh",
            "Tarot Key": "14, Temperance",
            "Connection": "Joins Tiphareth to Yesod",
            "Astrological/Elemental Attribution": "Sagittarius"
        }
    },
    26: {
        title: "Renewing Intelligence",
        text: "It is called the Renewing Intelligence because thereby God--blessed be He!--renews all things which are begun afresh in the creation of the world.",
        pathDetails: {
            "Hebrew Letter": "Ayin",
            "Tarot Key": "15, The Devil",
            "Connection": "Joins Tiphareth to Hod",
            "Astrological/Elemental Attribution": "Capricorn or Mars (exaltation)"
        }
    },
    27: {
        title: "Exciting or Active Intelligence",
        text: "It is called the Exciting or Active Intelligence because thence is created the spirit of every creature under the supreme orb, and the assemblage of them all.",
        pathDetails: {
            "Hebrew Letter": "Peh",
            "Tarot Key": "16, The Tower",
            "Connection": "Joins Netzach to Hod",
            "Astrological/Elemental Attribution": "Mars"
        }
    },
    28: {
        title: "Natural Intelligence",
        text: "It is called the Natural Intelligence because by it is perfected the nature of all things under the orb of the sun.",
        pathDetails: {
            "Hebrew Letter": "Tzaddi",
            "Tarot Key": "17, The Star",
            "Connection": "Joins Netzach to Yesod",
            "Astrological/Elemental Attribution": "Aquarius, Saturn, or Uranus"
        }
    },
    29: {
        title: "Corporeal Intelligence",
        text: "It is called the Corporeal Intelligence because it marks out the forms of all bodies which are incorporated under every revolution of the zodiac, and is what constitutes the arrangement and the disposition thereof.",
        pathDetails: {
            "Hebrew Letter": "Qoph",
            "Tarot Key": "18, The Moon",
            "Connection": "Joins Netzach to Malkuth",
            "Astrological/Elemental Attribution": "Pisces"
        }
    },
    30: {
        title: "Collective Intelligence",
        text: "It is called the Collective Intelligence because thence astrologers, by the judgment of the stars and the heavenly signs, derive their speculations and the perfection of their science according to motion of the stars.",
        pathDetails: {
            "Hebrew Letter": "Resh",
            "Tarot Key": "19, The Sun",
            "Connection": "Joins Hod to Yesod",
            "Astrological/Elemental Attribution": "Sun"
        }
    },
    31: {
        title: "Perpetual Intelligence",
        text: "It is called the Perpetual Intelligence because it rules the movements of the sun and moon according to their constitution, and perfects all the powers of all the revolutions of the zodiac, and the arrangement (or, form) of their judgments.",
        pathDetails: {
            "Hebrew Letter": "Shin",
            "Tarot Key": "20, Judgement",
            "Connection": "Joins Hod to Malkuth",
            "Astrological/Elemental Attribution": "Fire or Pluto"
        }
    },
    32: {
        title: "Serving or Administrative Intelligence",
        text: "It is called the Serving, or Administrative, Intelligence because it directs all the operations of the seven planets, and concurs therein.",
        pathDetails: {
            "Hebrew Letter": "Tav",
            "Tarot Key": "21, The World",
            "Connection": "Joins Yesod to Malkuth",
            "Astrological/Elemental Attribution": "Earth or Saturn"
        }
    }
};

function createTree() {
    let svgContent = `
    <svg viewBox="0 0 1000 1400" class="cabalistic-tree" preserveAspectRatio="xMidYMid meet">
        <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <filter id="glow-path" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g class="paths">`;

    const imgW = 55;
    const imgH = 96;

    // Draw Paths
    paths.forEach(p => {
        const nodeFrom = sephiroth.find(s => s.id === p.from);
        const nodeTo = sephiroth.find(s => s.id === p.to);
        const midX = (nodeFrom.cx + nodeTo.cx) / 2;
        const midY = (nodeFrom.cy + nodeTo.cy) / 2;
        
        const dx = nodeTo.cx - nodeFrom.cx;
        const dy = nodeTo.cy - nodeFrom.cy;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const rotation = angle - 90;

        // Define which pillar the path belongs to
        let pillar = 'none';
        if (p.id === 18 || p.id === 23) pillar = 'severity';
        else if (p.id === 16 || p.id === 21) pillar = 'mercy';
        else if (p.id === 13 || p.id === 25 || p.id === 32) pillar = 'equilibrium';

        svgContent += `
            <g class="path-group" data-id="${p.id}" data-type="path" data-pillar="${pillar}">
                <line x1="${nodeFrom.cx}" y1="${nodeFrom.cy}" x2="${nodeTo.cx}" y2="${nodeTo.cy}" stroke="${p.color}" stroke-width="12" class="tree-path" />
                <g transform="translate(${midX}, ${midY}) rotate(${rotation})">
                    <rect x="${-imgW/2 - 2}" y="${-imgH/2 - 2}" width="${imgW + 4}" height="${imgH + 4}" fill="#000" stroke="#c48b5d" stroke-width="2" class="path-card-bg" rx="2" />
                    <svg x="${-imgW/2}" y="${-imgH/2}" width="${imgW}" height="${imgH}">
                        <image x="-16%" y="-12%" width="132%" height="124%" href="${p.image}" class="path-card-img" preserveAspectRatio="xMidYMid slice" image-rendering="optimizeQuality" />
                    </svg>
                </g>
                <line x1="${nodeFrom.cx}" y1="${nodeFrom.cy}" x2="${nodeTo.cx}" y2="${nodeTo.cy}" stroke="transparent" stroke-width="40" class="path-hover-area" />
            </g>`;
    });

    svgContent += `</g><g class="sephiroth">`;

    // Draw Sephiroth
    sephiroth.forEach(s => {
        let pillar = 'equilibrium';
        if (s.id === 3 || s.id === 5 || s.id === 8) pillar = 'severity';
        else if (s.id === 2 || s.id === 4 || s.id === 7) pillar = 'mercy';

        svgContent += `<g class="sephirah-group" data-id="${s.id}" data-type="sephirah" data-pillar="${pillar}">`;
        
        if (s.special) {
            svgContent += `
                <g transform="translate(${s.cx}, ${s.cy})" filter="url(#glow)">
                    <circle r="${R}" fill="#000" />
                    <path d="M -42.426,-42.426 A 60 60 0 0 1 42.426,-42.426 L 0,0 Z" fill="#fef08a" />
                    <path d="M 42.426,-42.426 A 60 60 0 0 1 42.426,42.426 L 0,0 Z" fill="#6b8e23" />
                    <path d="M 42.426,42.426 A 60 60 0 0 1 -42.426,42.426 L 0,0 Z" fill="#312e81" />
                    <path d="M -42.426,42.426 A 60 60 0 0 1 -42.426,-42.426 L 0,0 Z" fill="#b45309" />
                    <circle r="${R}" fill="transparent" stroke="#e2e8f0" stroke-width="2" />
                </g>`;
        } else {
            svgContent += `<circle cx="${s.cx}" cy="${s.cy}" r="${R}" fill="${s.color}" class="sephirah-circle" filter="url(#glow)" />`;
        }

        svgContent += `
                <text x="${s.cx}" y="${s.cy - 12}" fill="${s.textColor}" font-size="28" font-weight="bold" text-anchor="middle" class="sephirah-hebrew">${s.hebrew}</text>
                <text x="${s.cx}" y="${s.cy + 20}" fill="${s.textColor}" font-size="16" text-anchor="middle" class="sephirah-name">${s.name}</text>
                <g class="sephirah-tooltip">
                    <rect x="${s.cx + R + 10}" y="${s.cy - 20}" width="120" height="40" rx="4" fill="rgba(0,0,0,0.85)" stroke="${s.special ? '#fef08a' : s.color}" />
                    <text x="${s.cx + R + 20}" y="${s.cy}" fill="#fff" font-size="14" dominant-baseline="central">${s.id}. ${s.name}</text>
                </g>
            </g>`;
    });

    svgContent += `</g></svg>`;
    document.querySelector('#svg-container').innerHTML = svgContent;

    let multiSelectMode = false;

    const sidebar = document.getElementById('info-sidebar');
    const treeElement = document.querySelector('.cabalistic-tree');

    const updateSidebar = (id, type) => {
        const info = pathIntelligences[id];
        if (!info) return;

        let name;
        let imageHtml = '';
        let detailsHtml = '';
        let subTitleHtml = `<h3>${info.title}</h3>`;

        if (type === 'sephirah') {
            const seph = sephiroth.find(x => x.id === parseInt(id));
            name = `${info.title}`;
            subTitleHtml = '';

            const gem = getGematria(seph.hebrew);
            let gematriaHtml = '';
            if (gem) {
                gematriaHtml = `
                    <div class="detail-row">
                        <span class="detail-label">Hebrew Spelling</span>
                        <span class="detail-val">${seph.hebrew}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gematria Value</span>
                        <span class="detail-val">${gem.sum}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gematria Breakdown</span>
                        <span class="detail-val" style="font-size: 0.82rem; line-height: 1.4;">${gem.breakdown}</span>
                    </div>
                `;
            }

            if (info.sephirahDetails) {
                detailsHtml = `
                    <div class="sephirah-details">
                        ${gematriaHtml}
                        ${Object.entries(info.sephirahDetails).map(([key, val]) => `
                            <div class="detail-row">
                                <span class="detail-label">${key}</span>
                                <span class="detail-val">${val}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        } else {
            const path = paths.find(x => x.id === parseInt(id));
            name = `Path ${id}: ${path.title || path.name}`;
            subTitleHtml = '';
            imageHtml = `<img src="${path.image}" class="sidebar-tarot-card" alt="${path.name}" />`;

            const gem = getGematria(path.letter);
            const letterData = gematriaMap[path.letter];
            let gematriaHtml = '';
            if (gem && letterData) {
                gematriaHtml = `
                    <div class="detail-row">
                        <span class="detail-label">Hebrew Letter</span>
                        <span class="detail-val">${path.letter} (${letterData.name})</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gematria Value</span>
                        <span class="detail-val">${gem.sum}</span>
                    </div>
                `;
            }

            if (info.pathDetails) {
                detailsHtml = `
                    <div class="sephirah-details">
                        ${gematriaHtml}
                        ${Object.entries(info.pathDetails).map(([key, val]) => `
                            <div class="detail-row">
                                <span class="detail-label">${key}</span>
                                <span class="detail-val">${val}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        }

        if (sidebar) {
            sidebar.innerHTML = `
                <button class="close-sidebar-btn" id="close-sidebar">&times;</button>
                <h2>${name}</h2>
                ${subTitleHtml}
                ${imageHtml}
                ${detailsHtml}
                <div class="yetzirah-quote">
                    <h4>Sefer Yetzirah Path Text</h4>
                    <p>"${info.text}"</p>
                </div>
            `;
            sidebar.classList.add('active');
            document.getElementById('paths-map-panel')?.classList.add('shifted');
        }
    };

    const handleElementClick = (id, type) => {
        const numericId = parseInt(id);
        const btn = document.querySelector(`.path-node-btn[data-id="${id}"][data-type="${type}"]`);
        const svgEl = document.querySelector(`g[data-id="${id}"][data-type="${type}"]`);
        
        // Reset pillar highlights since custom highlighting is starting
        treeElement.classList.remove('highlight-severity', 'highlight-mercy', 'highlight-equilibrium');
        document.querySelectorAll('.pillar-btn').forEach(b => {
            if (b.getAttribute('data-pillar-control') === 'all') b.classList.add('active');
            else b.classList.remove('active');
        });

        if (!multiSelectMode) {
            // Single select mode
            document.querySelectorAll('.path-node-btn').forEach(b => b.classList.remove('highlighted'));
            document.querySelectorAll('.sephirah-group, .path-group').forEach(el => el.classList.remove('map-highlighted'));
            
            btn?.classList.add('highlighted');
            svgEl?.classList.add('map-highlighted');
            treeElement.classList.add('has-map-highlights');
            
            updateSidebar(id, type);
        } else {
            // Multi select mode
            const isHighlighted = btn?.classList.contains('highlighted');
            if (isHighlighted) {
                btn?.classList.remove('highlighted');
                svgEl?.classList.remove('map-highlighted');
            } else {
                btn?.classList.add('highlighted');
                svgEl?.classList.add('map-highlighted');
            }
            
            const anyHighlights = document.querySelectorAll('.path-node-btn.highlighted').length > 0;
            if (anyHighlights) {
                treeElement.classList.add('has-map-highlights');
            } else {
                treeElement.classList.remove('has-map-highlights');
            }
        }
    };

    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            if (e.target.closest('#close-sidebar')) {
                sidebar.classList.remove('active');
                document.getElementById('paths-map-panel')?.classList.remove('shifted');
                
                if (!multiSelectMode) {
                    treeElement.classList.remove('has-map-highlights');
                    document.querySelectorAll('.path-node-btn').forEach(b => b.classList.remove('highlighted'));
                    document.querySelectorAll('.sephirah-group, .path-group').forEach(el => el.classList.remove('map-highlighted'));
                }
            }
        });
    }

    // Populate Paths Index Map
    const pathsGrid = document.getElementById('paths-grid');
    if (pathsGrid) {
        pathsGrid.innerHTML = '';
        for (let i = 1; i <= 32; i++) {
            const btn = document.createElement('button');
            btn.className = 'path-node-btn';
            btn.setAttribute('data-id', i);
            const type = i <= 10 ? 'sephirah' : 'path';
            btn.setAttribute('data-type', type);
            if (type === 'sephirah') {
                btn.classList.add('type-sephirah');
            }
            btn.textContent = i;
            btn.addEventListener('click', () => {
                handleElementClick(i, type);
            });
            pathsGrid.appendChild(btn);
        }
    }

    // Multiselect Toggle Button
    const multiSelectToggle = document.getElementById('multiselect-toggle');
    if (multiSelectToggle) {
        multiSelectToggle.addEventListener('click', () => {
            multiSelectMode = !multiSelectMode;
            multiSelectToggle.classList.toggle('active', multiSelectMode);
            
            treeElement.classList.remove('has-map-highlights');
            document.querySelectorAll('.path-node-btn').forEach(b => b.classList.remove('highlighted'));
            document.querySelectorAll('.sephirah-group, .path-group').forEach(el => el.classList.remove('map-highlighted'));
            
            if (!multiSelectMode && sidebar) {
                sidebar.classList.remove('active');
                document.getElementById('paths-map-panel')?.classList.remove('shifted');
            }
        });
    }

    document.querySelectorAll('.sephirah-group, .path-group').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const type = el.getAttribute('data-type');
            handleElementClick(id, type);
        });
    });

    // Pillar highlighting controls
    document.querySelectorAll('.pillar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pillar-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const pillar = btn.getAttribute('data-pillar-control');
            
            treeElement.classList.remove('highlight-severity', 'highlight-mercy', 'highlight-equilibrium');
            
            // Clear map highlights when switching pillars
            treeElement.classList.remove('has-map-highlights');
            document.querySelectorAll('.path-node-btn').forEach(b => b.classList.remove('highlighted'));
            document.querySelectorAll('.sephirah-group, .path-group').forEach(el => el.classList.remove('map-highlighted'));

            if (pillar !== 'all') {
                treeElement.classList.add(`highlight-${pillar}`);
            }
        });
    });

    // About Modal Event Listeners
    const aboutBtn = document.getElementById('about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeModal = document.getElementById('close-modal');

    if (aboutBtn && aboutModal && closeModal) {
        aboutBtn.addEventListener('click', () => {
            aboutModal.classList.add('active');
        });

        closeModal.addEventListener('click', () => {
            aboutModal.classList.remove('active');
        });

        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.remove('active');
            }
        });
    }

    // Zoom control logic
    const zoomSlider = document.getElementById('tree-zoom');
    if (zoomSlider) {
        zoomSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            const container = document.getElementById('svg-container');
            if (container) {
                const newWidth = (val / 100) * 800;
                container.style.setProperty('--tree-max-width', `${newWidth}px`);
            }
        });
    }
}

createTree();
