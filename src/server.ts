const  express = require('express');
import bodyParser  = require( 'body-parser' );

const app = express();
const route = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

route.get('/', (_,resp) => {
    resp.send({hello: "Hello world!"});
})

app.use('/api', route);

app.listen(process.env.PORT||8088);