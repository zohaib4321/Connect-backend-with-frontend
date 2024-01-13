import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("Please login")
})

app.get('/api/jokes', (req, res) => {
    let jokes = [
      {
        id: 1,
        title: 'joke 1',
        content: 'This is joke one'
      },
      {
        id: 2,
        title: 'joke 2',
        content: 'This is joke two'
      },
      {
        id: 3,
        title: 'joke 3',
        content: 'This is joke three'
      },
      {
        id: 4,
        title: 'joke 4',
        content: 'This is joke four'
      },
      {
        id: 5,
        title: 'joke 5',
        content: 'This is joke five'
      }
    ]
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`)
})