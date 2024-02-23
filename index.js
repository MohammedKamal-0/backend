const express = require('express')
const app = express()
const port = 3004
const collage = require('./routers/collage')
const others = require('./routers/others')
const research = require('./routers/research')
const rest = require('./routers/rest')
const bank = require('./routers/bank')
const hospital = require('./routers/hospital')
const events = require('./routers/events')
const department = require('./routers/department')
app.use(express.json());



app.use('/api/v1/collage', collage);
app.use('/api/v1/others', others);
app.use('/api/v1/research', research);
app.use('/api/v1/rest', rest);
app.use('/api/v1/bank', bank);
app.use('/api/v1/hospital', hospital);
app.use('/api/v1/events', events);
app.use('/api/v1/department', department);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})