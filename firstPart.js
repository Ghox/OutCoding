var testJson =  (
    function() {
        var testJson = {
            "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
            "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
            "fp_type": "ibeacon",
            "fp_owner": "global",
            "fp_ext_id": "bstg_autogen_1445345099899_62005859",
            "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            "major": 37100,
            "minor": 51516,
            "label": "Icy Bond",
            "actions": [{
                    "type": "home-block",
                    "params": {
                        "appearance": "text",
                        "action": "open-location",
                        "link": {
                            "fp_type": "sponsor",
                            "fp_ext_id": "spotme"
                        }
                    }
                },
                {
                    "type": "presence",
                    "params": {
                        "interval": 15
                    }
                }
            ],
            "fp_last_changes": {
                "timestamp": 1445437699,
                "source": "dataloader_api",
                "host": "localhost.backstage.4pax.com"
            },
            "location": {
                "lat": -4.232423,
                "lng": 12.523098
            }
        };
    
    //1. Using JavaScript, add a new action of type notification, with parameters title and message (string values)
    console.log("1. Using JavaScript, add a new action of type notification, with parameters title and message (string values)"); 
    testJson.actions.push({
        type: "notification",
        params: {
            title: "prueba",
            message: ["value1", "value2", "value3"]
        }
    });


    //2. Set action property of the first action to null and remove the link property
    console.log("2. Set action property of the first action to null and remove the link property"); 
    testJson.actions[0].params.action = null; delete testJson.actions[0].params.link;
    return testJson;
}
)();