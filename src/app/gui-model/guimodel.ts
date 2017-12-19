export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "kolbsan1 Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                        	"id": "nickname",
                        	"type": "text",
                        	"name": "Nickname",
                        	"width": 2,
                        	"required": true
                        },
                        {
                        	"id": "group",
                        	"type": "autocomplete",
                        	"name": "Group",
                        	"data": [ "Study", "Family", "School" ],
                        	"form": "GroupForm",
                        	"width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                	"id": "GroupForm",
                	"title": "Group",
                	"formFieldList": [
                		{
                			"id": "name",
                			"type": "text",
                			"name": "GroupName",
                			"width": 2,
                			"required": true
                		},
                		{
                			"type": "deleteButton",
                			"name": "Delete"
                		},
                		{
                			"type": "cancelButton",
                			"name": "Cancel"
                		},
                		{
                			"type": "okButton",
                			"name": "Ok"
                		}
                	]
                },

                {
                	"id": "ActivityForm",
                	"title": "Activities",
                	"formFieldList": [
                		{
                			"id": "activityname",
                			"type": "text",
                			"name": "Activity",
                			"width": 2,
                			"required": true
                		},
                		{
                			"id": "activitydate",
                			"type": "date",
                			"name": "Date",
                			"width": 2,
                			"required": true
                		},
                		{
                			"id": "activitycomment",
                			"type": "text",
                			"name": "Comments",
                			"required": false
                		},
                		{
                			"type": "deleteButton",
                			"name": "Delete"
                		},
                		{
                			"type": "cancelButton",
                			"name": "Cancel"
                		},
                		{
                			"type": "okButton",
                			"name": "Ok"
                		}
                	]
                },

                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                        	"type": "button",
                        	"name": "Groups",
                        	"icon": "fa-weixin",
                        	"color": "wisteria",
                        	"page": "groupspage",
                        },
                        {
                        	"type": "button",
                        	"name": "Activities",
                        	"icon": "fa-gamepad",
                        	"color": "orange",
                        	"page": "activitiespage",
                        },
                        {
                        	"type": "button",
                        	"name": "Location",
                        	"icon": "fa-location-arrow",
                        	"color": "pink",
                        	"page": "locationpage",
                        },

                        {
                        	"type": "button",
                        	"name": "UserPage",
                        	"icon": "fa-location-arrow",
                        	"color": "pink",
                        	"page": "testpage",
                        },

                    ]
                },
                {
                	"id": "groupspage",
                	"elementList": [
                		{
                			"type": "backbutton",
                		},
                		{
                			"type": "newButton",
                			"name": "NewGroup",
                			"icon": "fa-weixin",
                			"color": "green",
                			"form": {
                				"form": "GroupForm"
                			}
                		},
                		{
                			"type": "list",
                			"icon": "fa-weixin",
                			"color": "wisteria",
                			"search": true,
                			"data": [ { name: "study" }, {name: "Family" }, { name: "School" } ],
                			"form": {
                				"form": "GroupForm"
                			}
                		}
                	]
                },

                {
                	"id": "activitiespage",
                	"elementList": [
                		{
                			"type": "backbutton",
                		},
                		{
                			"type": "newButton",
                			"name": "NewActivity",
                			"icon": "fa-gamepad",
                			"color": "orange",
                			"form": {
                				"form": "ActivityForm"
                			}
                		},
                		{
                			"type": "list",
                			"icon": "fa-gamepad",
                			"color": "orange",
                			"search": true,
                			"data": [ { name: "Football" }, {name: "Gaming" }, { name: "Tennis" } ],
                			"form": {
                				"form": "ActivityForm"
                			}
                		}
                	]
                },
                 {
                	"id": "locationpage",
                	"elementList": [
                		{
                			"type": "backbutton",
                		},
                		{
                			"type": "newButton",
                			"name": "NewLocation",
                			"icon": "fa-location-arrow",
                			"color": "pink",
                			"form": {
                				"form": "LocationForm"
                			}
                		},
                		{
                			"type": "list",
                			"icon": "fa-location-arrow",
                			"color": "pink",
                			"search": true,
                			"data": [ { name: "Amsterdam" }, {name: "Paris" }, { name: "Zurich" } ],
                			"form": {
                				"form": "LocationForm"
                			}
                		}
                	]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" } ],
                            "page": "test"
                        },
                    ]
                },

 				{
                	"id": "test",
                	"elementList": [
                		{
                			"type": "backbutton",
                		},
                		{
                			"type": "NewButton",
                			"name": "NewTest",
                			"icon": "fa-gamepad",
                			"color": "orange",
                		},
                		
                	]
                },

                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
