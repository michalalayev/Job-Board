const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
const updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(relativeTime);

const elem = `{
  "id": 1,
  "position": "Backend Engineer",
  "company": "Verily",
  "location": "Tel-Aviv",
  "status": "Applied",
  "created_date": "2022-11-24T10:33:30",
  "last_modified": "2022-11-25T10:33:30"
}`

var data = JSON.parse(elem)
//console.log(data)
//console.log(data.id)

console.log(data.last_modified)
var d1 = "2023-03-24T10:34:30"
var f = dayjs(data.last_modified).fromNow()
console.log(f)
