import { HttpError } from "@/config/error";
import { NextFunction, Request, Response } from "express";
const request = require("request-promise");

export let login = async (req: Request, res: Response, next: NextFunction) => {
  let error = false;
  let message = "";
  if (!(req.body.email === undefined || req.body.email === "")) {
    if (!(req.body.password == undefined || req.body.password === "")) {
      if (
        req.body.email === "myemail@email.com" &&
        req.body.password === "MyPassword"
      ) {
        //TODO: integrate wolfwarm API here
        let response = await wolfwarmRequest(req, res);
        // console.log(response);
      } else {
        next(new HttpError(400, "password not matched."));
        return false;
      }
    } else {
      next(new HttpError(400, "Password not correct."));
      return false;
    }
  } else {
    next(new HttpError(400, "User Not Registered."));
    return false;
  }
};

async function wolfwarmRequest(req: Request, res: Response) {
  var request = require("request");
  var convert = require("xml-js");
  var options = {
    method: "GET",
    url:
      "http://api.wolframalpha.com/v2/query?input="+req.body.input+"&appid=2Y47GV-YP248AL2KP",
  };
  await request(options, function (error: string, response: { body: any }) {
    if (error) throw new Error(error);
    if (req.body.dataType === "json") {
      var jsonData = convert.xml2json(response.body, {
        compact: true,
        spaces: 4,
      });
      res.status(200).send(jsonData);
    } else {
      res.status(200).send(response.body);
    }
  });
}
