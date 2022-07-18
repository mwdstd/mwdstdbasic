
config = {
  	"_id" : "rs0",
  	"members" : [
  		{
  			"_id" : 0,
  			"host" : "localhost:27017"
  		}
  	]
}
rs.initiate(config)

while (!db.isMaster().ismaster ) { sleep(1000) }

db.boreholes.createIndex({parent_id: 1})
db.corrections.createIndex({parent_id: 1, etag: 1})
db.plans.createIndex({parent_id: 1})
db.plans.createIndex({parent_id: 1, revision: 1})
db.runs.createIndex({parent_id: 1})
db.surveys.createIndex({parent_id: 1})
db.tasks.createIndex({parent_id: 1})
db.toolcodes.createIndex({name: 1})
db.users.createIndex({login: 1}, { unique: true })

adminUser = {
	"name":"Super User",
	"login":"super@user",
	"password":"bee1a6e7fcb645a96fcfbfc10b16d89b8ac0189c8b13f5dde6f4d707a742a2293d9c66288cfa25e4958499b1ecab394fc56f398602322d277c005412e8de3d0219353d1946dc06752a21de1d4ca5762c362b4b80aaaeb8ed59276af86b09056d",
	"role":"su",
	"us":{
		"acceleration":"m/s^2",
		"angle":"deg",
		"density":"g/ml",
		"diameter":"mm",
		"length":"m",
		"magind":"nT",
		"mass":"kg",
		"temperature":"degC",
		"ratio":"percent",
		"ratio_fine":"fraction",
		"dls_interval":30,
		"gaxes":["X","Y","Z"],
		"maxes":["X","Y","Z"],
		"gaxesi":[false,false,false],
		"maxesi":[false,false,false]
	}
}

db.users.insertOne(adminUser)


