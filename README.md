# http-forwarder

This is a Node.js based HTTP server that processes HTTP requests containing JSON. 
The server reads the events array, adapts the scheme of each event to the different services, and initiate new HTTP requests to the services endpoints.

Request to server looks like this :-

curl --request POST \
  --url http://localhost:1337/ \
  --data '{
	"events": [
		{
			"t": "lift-off",
			"engines": 4,
			"fuel": 78,
			"successful": true,
			"temperature": {
				"engine": 80,
				"cabin": 31
			},
			"timestamp": 1595244264059,
			"lat-lon": [
				-16.270183,
				168.110748
			]
		},
		{
			"t": "landing",
			"engines": 1,
			"fuel": 26,
			"successful": true,
			"temperature": {
				"engine": 80,
				"cabin": 31
			},
			"timestamp": 1595524813145,
			"lat-lon": [
				51.769455,
				182.818610
			],
			"successful": true
		}
	]
}'


## Install dependencies 
npm install

## Start the server
npm start
