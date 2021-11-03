

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


const resource_data = {
    images: ['img1', 'img2', 'img3'],
    qnas: [ ['q1','a1'], ['q2','a2'],['q3','a3'] ],
    services: [ ['s1','d1'], ['s2','d2'],['s3','d3'] ]
}

// create a GET route
app.get('/content_server', (req, res) => {
    JSON.stringify(resource_data)
    console.dir([req.ip, req.route]);
    res.send({ express: JSON.stringify(resource_data) });
});