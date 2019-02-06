import { ArrayType } from "@angular/compiler";
import {Deserializable} from "./deserializable.model";
import { User } from "./user.model";

export class Event {
    createdAt: number;
    updateAt: number;
    title: string;
    location : string;
    latitude : number;
    longitude : number;
    description : string;
    createdById : number;
    source : string;
    timezone : string;
    scheduleAs : string;
    eventPicture : string;
    eventMembers : ArrayType;
    startTime : number;
    endTime : number;

    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
  }

/*
  {
    "data": {
        "createdAt": 1537583812000,
        "updateAt": 1537583820000,
        "errorCode": 0,
        "errorDetail": null,
        "eventId": 89503,
        "title": "Jeff -注册",
        "type": null,
        "recurringEventId": null,
        "location": "天后宫",
        "latitude": "3.1218299",
        "longitude": "101.6876636",
        "description": null,
        "createdById": 156,
        "source": "Cenes",
        "sourceEventId": null,
        "sourceUserId": null,
        "timezone": "Asia/Kuala_Lumpur",
        "scheduleAs": "Gathering",
        "eventPicture": "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyAg8FTMwwY2LwneObVbjcjj-9DYZkrTR58&maxwidth=400&photoreference=CmRaAAAAu1ZYnyxRGpRn6cUbVLlhDPSMHRjxLp8Rlha9-wUhmRMyrL53B1RDU0rLoyCxH7dFh5-RSSsnT0ItqDgc4xrW7FA2GJFKXDttdMmrFBuQKmkbrwSbqJiligfvoafgkx8WEhD-xo_L988lRQQvFyK6d8tkGhRdG7JuI0VTthWh4JHXdl96ogUXDQ",
        "eventMembers": [],
        "startTime": 1540688400000,
        "endTime": 1540701600000,
        "isPredictiveOn": false,
        "predictiveData": null,
        "predictiveDataForIos": null,
        "processed": 1
    },
    "success": true,
    "errorCode": 0,
    "errorDetail": null
  } */