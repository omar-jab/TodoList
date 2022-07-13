const express = require("express")
const bodyParser = require("body-parser")

const app = express()

var tasks = []


app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get("/", function(req, res){
    var oggi = new Date()
    // const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
    // console.log(oggi.getDay())
    var options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    }

    var giorno = oggi.toLocaleDateString("en-US", options)

    res.render("list", {
        dataOggi : giorno, newActivity : tasks,
    })
})

app.post("/", (req,res) => {
    var task = req.body.newTask;
    console.log(task, tasks)

    tasks.push(task);

    res.redirect("/");

})


app.listen(3000, function(){
    console.log("Il server è in ascolto sulla porta 3000")
})