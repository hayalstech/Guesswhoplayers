// Predefined list of 90 common English words and 30 fixed word rounds

const WORDS = [
  { word: "BALL", category: "Football" },
  { word: "GOAL", category: "Football" },
  { word: "PASS", category: "Football" },
  { word: "SHOOT", category: "Football" },
  { word: "STRIKE", category: "Football" },
  { word: "CROSS", category: "Football" },
  { word: "TACKLE", category: "Football" },
  { word: "DRIBBLE", category: "Football" },
  { word: "HEADER", category: "Football" },
  { word: "CORNER", category: "Football" },
  { word: "STADIUM", category: "Place" },
  { word: "PITCH", category: "Place" },
  { word: "REFEREE", category: "Person" },
  { word: "MANAGER", category: "Person" },
  { word: "CAPTAIN", category: "Person" },
  { word: "FAN", category: "Person" },
  { word: "CROWD", category: "Group" },
  { word: "TEAM", category: "Group" },
  { word: "CLUB", category: "Group" },
  { word: "LEAGUE", category: "Competition" },
  { word: "DERBY", category: "Match" },
  { word: "DRAW", category: "Result" },
  { word: "WINNER", category: "Result" },
  { word: "LOSER", category: "Result" },
  { word: "POINT", category: "Scoring" },
  { word: "TABLE", category: "Scoring" },
  { word: "TITLE", category: "Competition" },
  { word: "TROPHY", category: "Object" },
  { word: "MEDAL", category: "Object" },
  { word: "JERSEY", category: "Object" },
  { word: "NUMBER", category: "Object" },
  { word: "BOOTS", category: "Object" },
  { word: "KIT", category: "Object" },
  { word: "WHISTLE", category: "Object" },
  { word: "BENCH", category: "Place" },
  { word: "SUB", category: "Role" },
  { word: "COACH", category: "Role" },
  { word: "KEEPER", category: "Role" },
  { word: "DEFENDER", category: "Role" },
  { word: "MIDFIELD", category: "Role" },
  { word: "FORWARD", category: "Role" },
  { word: "WINGER", category: "Role" },
  { word: "TALENT", category: "Trait" },
  { word: "SKILL", category: "Trait" },
  { word: "PACE", category: "Trait" },
  { word: "POWER", category: "Trait" },
  { word: "VISION", category: "Trait" },
  { word: "TECHNIQUE", category: "Trait" },
  { word: "PASSION", category: "Trait" },
  { word: "SPIRIT", category: "Trait" },
  { word: "HEART", category: "Trait" },
  { word: "CROSSFIRE", category: "Term" },
  { word: "OFFSIDE", category: "Rule" },
  { word: "FOUL", category: "Rule" },
  { word: "HANDBALL", category: "Rule" },
  { word: "PENALTY", category: "Rule" },
  { word: "FREEKICK", category: "Rule" },
  { word: "KICKOFF", category: "Rule" },
  { word: "HALFTIME", category: "Time" },
  { word: "FULLTIME", category: "Time" },
  { word: "EXTRA", category: "Time" },
  { word: "SCORE", category: "Scoring" },
  { word: "CHANCE", category: "Scoring" },
  { word: "REPLAY", category: "Media" },
  { word: "HIGHLIGHT", category: "Media" },
  { word: "STREAM", category: "Media" },
  { word: "COMMENT", category: "Media" },
  { word: "ANALYST", category: "Media" },
  { word: "RESULT", category: "Match" },
  { word: "FORM", category: "Match" },
  { word: "STREAK", category: "Match" },
  { word: "RECORD", category: "Match" },
  { word: "LEGEND", category: "Status" },
  { word: "ICON", category: "Status" },
  { word: "HERO", category: "Status" },
  { word: "ROOKIE", category: "Status" },
  { word: "VETERAN", category: "Status" },
  { word: "BENCHMARK", category: "Status" },
  { word: "ENERGY", category: "Trait" },
  { word: "FOCUS", category: "Trait" },
  { word: "CONTROL", category: "Trait" },
  { word: "BALANCE", category: "Trait" },
  { word: "PRESS", category: "Tactic" },
  { word: "BLOCK", category: "Tactic" },
  { word: "COUNTER", category: "Tactic" },
  { word: "SHAPE", category: "Tactic" },
  { word: "LINE", category: "Tactic" },
  { word: "SPACE", category: "Tactic" },
  { word: "MARK", category: "Tactic" },
  { word: "ZONE", category: "Tactic" },
  { word: "DRIVE", category: "Trait" },
  { word: "SMILE", category: "Emotion" },
  { word: "NOISE", category: "Emotion" },
  { word: "CHEER", category: "Emotion" },
  { word: "CHANT", category: "Emotion" },
  { word: "GLORY", category: "Emotion" }
];

// 30 predetermined word rounds, each points at a fixed word index (0–89)
const WORD_ROUNDS = [
  0,  // Round 1 -> BALL
  5,  // Round 2
  10, // Round 3
  15, // Round 4
  20, // Round 5
  25, // Round 6
  30, // Round 7
  35, // Round 8
  40, // Round 9
  45, // Round 10
  50, // Round 11
  55, // Round 12
  60, // Round 13
  65, // Round 14
  70, // Round 15
  75, // Round 16
  80, // Round 17
  85, // Round 18
  1,  // Round 19
  6,  // Round 20
  11, // Round 21
  16, // Round 22
  21, // Round 23
  26, // Round 24
  31, // Round 25
  36, // Round 26
  41, // Round 27
  46, // Round 28
  51, // Round 29
  56  // Round 30
];

