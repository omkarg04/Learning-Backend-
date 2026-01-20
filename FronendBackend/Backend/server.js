import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready !');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "A joke",
    content: "Why don’t programmers like nature? It has too many bugs."
  },
  {
    id: 2,
    title: "Another joke",
    content: "Why do Java developers wear glasses? Because they don’t see sharp."
  },
  {
    id: 3,
    title: "Funny one",
    content: "I told my computer I needed a break, and it said: no problem — I’ll go to sleep."
  },
  {
    id: 4,
    title: "Tech humor",
    content: "Why was the JavaScript developer sad? Because they didn’t know how to null their feelings."
  },
  {
    id: 5,
    title: "Final joke",
    content: "Debugging is like being a detective in a crime movie where you are also the criminal."
  }
];
res.send(jokes);
});





const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});